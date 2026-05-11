"""Performance optimisations for delivery images.

1. Convert OG PNGs to JPEG q82  (cuts ~90% off OG payload, 1MB → 100KB)
2. Recompress hero/inline JPEGs at q78
3. Generate WebP versions of every JPEG
4. Update HTML: og:image meta from .png to .jpg
5. Add width/height attributes to inline <img> tags
6. Wrap hero/inline <img> in <picture> with WebP source
7. Add fetchpriority="high" to hero <img>
8. Add <link rel="preload" as="image" type="image/webp"> for hero
"""
import re
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OG_DIR = ROOT / "images" / "og"
HERO_DIR = ROOT / "images" / "hero"
INLINE_DIR = ROOT / "images" / "inline"


def convert_og_png_to_jpg():
    print("=== Convert OG PNG → JPEG q82 ===")
    saved = 0
    for png in sorted(OG_DIR.glob("*.png")):
        before = png.stat().st_size
        img = Image.open(png).convert("RGB")
        jpg = png.with_suffix(".jpg")
        img.save(jpg, format="JPEG", quality=82, optimize=True, progressive=True)
        png.unlink()
        after = jpg.stat().st_size
        saved += max(0, before - after)
        print(f"  {png.stem}: {before//1024}KB → {after//1024}KB")
    print(f"  Total OG saved: {saved//1024}KB")


def recompress_jpegs(directory, label, quality=78):
    print(f"\n=== Recompress {label} at q={quality} ===")
    saved = 0
    for jpg in sorted(directory.glob("*.jpg")):
        before = jpg.stat().st_size
        img = Image.open(jpg).convert("RGB")
        img.save(jpg, format="JPEG", quality=quality, optimize=True, progressive=True)
        after = jpg.stat().st_size
        saved += max(0, before - after)
    print(f"  Saved: ~{saved//1024}KB")


def gen_webp():
    print("\n=== Generate WebP versions ===")
    n = 0
    for d in (HERO_DIR, INLINE_DIR):
        for jpg in sorted(d.glob("*.jpg")):
            wp = jpg.with_suffix(".webp")
            img = Image.open(jpg).convert("RGB")
            img.save(wp, format="WEBP", quality=78, method=6)
            n += 1
    print(f"  {n} WebPs generated")


def get_dimensions(directory):
    out = {}
    for f in directory.glob("*.jpg"):
        with Image.open(f) as img:
            out[f.name] = img.size
    return out


def update_html():
    print("\n=== Update HTML ===")
    inline_dims = get_dimensions(INLINE_DIR)

    pages = list(ROOT.glob("index.html")) + list(ROOT.glob("*/index.html"))
    pages = [p for p in pages if ".venv" not in str(p)]

    n = 0
    for page in pages:
        html = page.read_text()
        original = html

        # 1. og:image references: .png → .jpg
        html = re.sub(r'(/images/og/[^"\'\s]+)\.png', r'\1.jpg', html)

        # 2. Add width/height to inline img tags that lack them
        def add_dims(m):
            full = m.group(0)
            src = m.group(1)
            filename = src.split("/")[-1]
            if filename not in inline_dims or 'width=' in full:
                return full
            w, h = inline_dims[filename]
            return full.replace(
                f'src="{src}"',
                f'src="{src}" width="{w}" height="{h}"'
            )
        html = re.sub(r'<img\s+src="(/images/inline/[^"]+)"[^>]*>', add_dims, html)

        # 3. Hero: add fetchpriority
        def add_fetchpri(m):
            full = m.group(0)
            if 'fetchpriority' in full:
                return full
            return full.replace('loading="eager"', 'loading="eager" fetchpriority="high"')
        html = re.sub(
            r'<img\s+src="/images/hero/[^"]+"[^>]*loading="eager"[^>]*>',
            add_fetchpri, html
        )

        # 4. Hero preload link in <head>
        m = re.search(r'<img\s+src="(/images/hero/[^"]+\.jpg)"', html)
        if m:
            hero_jpg = m.group(1)
            hero_webp = hero_jpg[:-4] + ".webp"
            preload_tag = f'<link rel="preload" as="image" href="{hero_webp}" fetchpriority="high" type="image/webp">'
            if preload_tag not in html and 'rel="preload" as="image"' not in html:
                # Insert before any <link rel="stylesheet"> or <style>
                html = re.sub(
                    r'(<link rel="stylesheet"|<style>)',
                    preload_tag + '\n' + r'\1',
                    html, count=1
                )

        # 5. Wrap hero <img> in <picture> with WebP source
        hero_re = re.compile(
            r'<figure class="article-hero">\s*\n?\s*'
            r'<img\s+src="(/images/hero/([^"]+))\.jpg"([^>]*)>\s*\n?\s*'
            r'</figure>',
            re.DOTALL
        )
        def hero_sub(m):
            base, stem, attrs = m.group(1), m.group(2), m.group(3)
            return (
                f'<figure class="article-hero">\n'
                f'    <picture>\n'
                f'      <source srcset="{base}.webp" type="image/webp">\n'
                f'      <img src="{base}.jpg"{attrs}>\n'
                f'    </picture>\n'
                f'  </figure>'
            )
        if '<picture>' not in html:
            html = hero_re.sub(hero_sub, html)

        # 6. Wrap inline <img> in <picture>
        inline_re = re.compile(
            r'(<figure>\s*\n?\s*)'
            r'<img\s+src="(/images/inline/([^"]+))\.jpg"([^>]*)>'
            r'(\s*\n?\s*</figure>)',
            re.DOTALL
        )
        def inline_sub(m):
            pre, base, stem, attrs, post = m.groups()
            return (
                f'{pre}<picture>'
                f'<source srcset="{base}.webp" type="image/webp">'
                f'<img src="{base}.jpg"{attrs}>'
                f'</picture>{post}'
            )
        if '<picture>' not in html or '/images/inline/' in html:
            # Process inline regardless (idempotent enough — only matches non-picture inline figures)
            html = inline_re.sub(inline_sub, html)

        if html != original:
            page.write_text(html)
            n += 1

    print(f"  {n} pages updated")


def main():
    convert_og_png_to_jpg()
    recompress_jpegs(HERO_DIR, "hero", quality=78)
    recompress_jpegs(INLINE_DIR, "inline", quality=78)
    gen_webp()
    update_html()
    print("\nDone.")


if __name__ == "__main__":
    main()
