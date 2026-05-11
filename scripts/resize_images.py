"""Resize originals from images/originals/ to delivery sizes.

OG images   -> images/og/<slug>.png            (1200x630, centre crop)
Hero images -> images/hero/<slug>.jpg          (1200x675, centre crop, q=85)
Inline 16:9 -> images/inline/<stem>.jpg        (1600x900, centre crop)
Inline 4:3  -> images/inline/<stem>.jpg        (800x600,  centre crop)
Inline 1:1  -> images/inline/<stem>.jpg        (800x800)
"""
import sys, re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))

# Re-uses the IMAGES manifest from generate_images.py
from generate_images import IMAGES

ORIG = ROOT / "images" / "originals"
OG_DIR = ROOT / "images" / "og"
HERO_DIR = ROOT / "images" / "hero"
INLINE_DIR = ROOT / "images" / "inline"
for d in (OG_DIR, HERO_DIR, INLINE_DIR):
    d.mkdir(parents=True, exist_ok=True)


def fit_crop(img, target_w, target_h):
    """Resize to fill, centre-crop to exact dimensions."""
    sw, sh = img.size
    target_ratio = target_w / target_h
    src_ratio = sw / sh
    if src_ratio > target_ratio:
        nh = target_h
        nw = int(round(sw * (nh / sh)))
    else:
        nw = target_w
        nh = int(round(sh * (nw / sw)))
    img = img.resize((nw, nh), Image.LANCZOS)
    left = (nw - target_w) // 2
    top = (nh - target_h) // 2
    return img.crop((left, top, left + target_w, top + target_h))


def process_one(stem, out_dir, aspect):
    src = ORIG / f"{stem}.png"
    if not src.exists():
        return False, f"missing original {stem}.png"
    img = Image.open(src).convert("RGB")

    if out_dir == "og":
        out = OG_DIR / f"{re.sub('^og-', '', stem)}.png"
        img2 = fit_crop(img, 1200, 630)
        img2.save(out, format="PNG", optimize=True)
        return True, str(out.relative_to(ROOT))

    if out_dir == "hero":
        out = HERO_DIR / f"{re.sub('^hero-', '', stem)}.jpg"
        img2 = fit_crop(img, 1200, 675)
        img2.save(out, format="JPEG", quality=85, optimize=True, progressive=True)
        return True, str(out.relative_to(ROOT))

    if out_dir == "inline":
        out = INLINE_DIR / f"{stem}.jpg"
        a = aspect.lower()
        if "16:9" in a:
            img2 = fit_crop(img, 1600, 900)
        elif "1:1" in a or "square" in a:
            img2 = fit_crop(img, 800, 800)
        elif "4:3" in a:
            img2 = fit_crop(img, 800, 600)
        elif "2:3" in a or "portrait" in a:
            img2 = fit_crop(img, 800, 1200)
        else:
            img2 = fit_crop(img, 1600, 900)
        img2.save(out, format="JPEG", quality=85, optimize=True, progressive=True)
        return True, str(out.relative_to(ROOT))

    return False, f"unknown out_dir: {out_dir}"


def main():
    ok = skip = 0
    failed = []
    for entry in IMAGES:
        stem = entry[0]
        out_dir = entry[4]
        aspect = entry[5]
        if not (ORIG / f"{stem}.png").exists():
            skip += 1
            continue
        success, msg = process_one(stem, out_dir, aspect)
        if success:
            ok += 1
            print(f"OK  {stem:50s} -> {msg}")
        else:
            failed.append((stem, msg))
            print(f"FAIL {stem}: {msg}")
    print(f"\nDone. {ok} resized, {skip} skipped, {len(failed)} failed.")


if __name__ == "__main__":
    main()
