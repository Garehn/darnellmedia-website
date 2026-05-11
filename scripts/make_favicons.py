"""Generate a complete favicon set from a single brand mark.

Output:
- favicon.svg
- favicon.ico (multi-size: 16, 32, 48)
- favicon-16/32/48/96/180/192/512.png
- apple-touch-icon.png (180×180)
- android-chrome-{192,512}.png
- site.webmanifest

Updates <link rel="icon"> tags in every HTML page.

Edit the BRAND_COLOR, ACCENT_COLOR, and draw_mark() function for your brand.
"""
from PIL import Image, ImageDraw
from pathlib import Path
import json
import re

ROOT = Path(__file__).resolve().parent.parent

# ─── EDIT for your brand ──────────────────────────────────────────────────
BRAND_NAME = "Darnell Media"
BRAND_SHORT = "Darnell"
BRAND_DESC = "Sydney SEO agency for tradies and home services"
BRAND_COLOR = (30, 64, 175, 255)      # #1e40af deep electric blue
ACCENT_COLOR = (255, 255, 255, 255)   # white mark
# ──────────────────────────────────────────────────────────────────────────


def draw_mark(canvas_size: int):
    """Draw the DM monogram on a rounded electric-blue square."""
    from PIL import ImageFont
    s = canvas_size * 4   # supersample
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    # Rounded square background in brand colour
    radius = int(s * 14 / 64)
    d.rounded_rectangle((0, 0, s, s), radius=radius, fill=BRAND_COLOR)

    # DM monogram in white. Try Georgia bold first (serif, matches Fraunces
    # in feel); fall back to other Mac system serifs.
    font = None
    for path, ratio in [
        ("/System/Library/Fonts/Supplemental/Georgia Bold.ttf", 0.50),
        ("/System/Library/Fonts/Supplemental/Georgia.ttf", 0.50),
        ("/System/Library/Fonts/Supplemental/Times New Roman Bold.ttf", 0.52),
    ]:
        try:
            font = ImageFont.truetype(path, int(s * ratio))
            break
        except Exception:
            continue
    if font is None:
        font = ImageFont.load_default()

    text = "DM"
    bbox = d.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    # Vertical optical centre — serifs sit slightly low so nudge up
    x = (s - tw) / 2 - bbox[0]
    y = (s - th) / 2 - bbox[1] - s * 0.02
    d.text((x, y), text, fill=ACCENT_COLOR, font=font)

    return img.resize((canvas_size, canvas_size), Image.LANCZOS)


def main():
    print("=== Generating favicon set ===")
    sizes = {
        "favicon-16.png": 16,
        "favicon-32.png": 32,
        "favicon-48.png": 48,
        "favicon-96.png": 96,
        "favicon-180.png": 180,
        "favicon-192.png": 192,
        "favicon-512.png": 512,
        "apple-touch-icon.png": 180,
        "android-chrome-192x192.png": 192,
        "android-chrome-512x512.png": 512,
    }
    for name, sz in sizes.items():
        img = draw_mark(sz)
        out = ROOT / name
        img.save(out, format="PNG", optimize=True)
        print(f"  {name}: {sz}×{sz}")

    # favicon.ico — multi-size
    ico = draw_mark(64)
    ico.save(ROOT / "favicon.ico", format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"  favicon.ico: multi-size")

    # site.webmanifest
    manifest = {
        "name": BRAND_NAME,
        "short_name": BRAND_SHORT,
        "description": BRAND_DESC,
        "start_url": "/",
        "display": "browser",
        "background_color": "#fbfaf6",
        "theme_color": "#%02x%02x%02x" % BRAND_COLOR[:3],
        "icons": [
            {"src": "/android-chrome-192x192.png", "sizes": "192x192", "type": "image/png", "purpose": "any maskable"},
            {"src": "/android-chrome-512x512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable"},
        ],
    }
    (ROOT / "site.webmanifest").write_text(json.dumps(manifest, indent=2))
    print(f"  site.webmanifest")

    # Update <link> tags in every HTML page
    block = (
        '<link rel="icon" href="/favicon.ico" sizes="48x48">\n'
        '<link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">\n'
        '<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'
        f'<meta name="theme-color" content="#%02x%02x%02x">\n' % BRAND_COLOR[:3] +
        '<link rel="manifest" href="/site.webmanifest">\n'
    )

    pages = list(ROOT.glob("index.html")) + list(ROOT.glob("*/index.html"))
    pages = [p for p in pages if ".venv" not in str(p)]
    n = 0
    for p in pages:
        html = p.read_text()
        original = html
        # Replace any existing favicon links with the canonical block
        html = re.sub(
            r'(<link rel="(icon|alternate icon|apple-touch-icon|manifest)"[^>]*>\s*\n?){1,}'
            r'(<meta name="theme-color"[^>]*>\s*\n?)?',
            '', html
        )
        # Insert our block right after the viewport meta
        html = re.sub(
            r'(<meta name="viewport"[^>]*>)\s*\n',
            r'\1\n' + block, html, count=1
        )
        if html != original:
            p.write_text(html)
            n += 1
    print(f"\nUpdated <link> tags in {n} pages.")
    print("Note: also create/edit favicon.svg by hand for crisp vector display.")


if __name__ == "__main__":
    main()
