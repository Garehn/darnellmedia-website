"""Subset Google Fonts woff2 files to the Latin range used by English text.

Cuts ~80% off variable woff2 files. e.g. Merriweather 411KB → 93KB.

Usage:
1. Download the woff2 files from Google Fonts (see README in fonts/)
2. Edit FONTS list below to match your font filenames
3. Run: python3 scripts/subset_fonts.py
"""
from pathlib import Path
from fontTools import subset

ROOT = Path(__file__).resolve().parent.parent
FONTS_DIR = ROOT / "fonts"

# Edit for your project — pairs of (input_filename, output_filename)
FONTS = [
    ("inter.woff2", "inter.woff2"),
    ("fraunces.woff2", "fraunces.woff2"),
]

# Unicode ranges to keep — covers English (Australian, US, UK) + smart punctuation
UNICODES = (
    'U+0020-007E,'   # Basic Latin (ASCII printable)
    'U+00A0-00FF,'   # Latin-1 Supplement (£, °, accented chars)
    'U+0152-0153,'   # OE / oe (occasionally used)
    'U+2010-2027,'   # General punctuation incl. en/em dash, smart quotes
    'U+2030,'        # ‰
    'U+2032-2033,'   # primes
    'U+2039-203A,'   # < > guillemets
    'U+20AC,'        # €
    'U+2122,'        # ™
    'U+2190-2193,'   # ← → ↑ ↓ arrows
)


def subset_one(src_name, out_name):
    src = FONTS_DIR / src_name
    if not src.exists():
        print(f"SKIP {src_name} — not found at {src}")
        return
    before = src.stat().st_size
    out = FONTS_DIR / (out_name + ".tmp")
    args = [
        str(src),
        f'--unicodes={UNICODES}',
        '--flavor=woff2',
        '--with-zopfli',
        '--layout-features=*',
        '--name-IDs=*',
        '--notdef-outline',
        '--recommended-glyphs',
        f'--output-file={out}',
    ]
    subset.main(args)
    final = FONTS_DIR / out_name
    if final.exists() and final != out:
        final.unlink()
    out.rename(final)
    after = final.stat().st_size
    print(f"  {src_name}: {before//1024}KB → {after//1024}KB  (-{(1-after/before)*100:.0f}%)")


def main():
    if not FONTS:
        print("FONTS list is empty. Edit scripts/subset_fonts.py and add your font filenames.")
        return
    print("=== Subsetting fonts ===")
    for src, out in FONTS:
        subset_one(src, out)
    print("\nDone. Update @font-face declarations in your CSS to point to the subsetted files.")


if __name__ == "__main__":
    main()
