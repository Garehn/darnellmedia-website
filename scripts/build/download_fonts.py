"""Download the variable woff2 source files for Inter + Fraunces from
Google Fonts, then hand off to scripts/subset_fonts.py to subset them.

Variable woff2 files cover all weights in a single file. We pull them
straight from the github releases / Google Fonts source so we are not
dependent on the rendered CSS URL (which changes).
"""

from __future__ import annotations

from pathlib import Path
import urllib.request
import sys

FONTS_DIR = Path(__file__).resolve().parent.parent.parent / "fonts"
FONTS_DIR.mkdir(parents=True, exist_ok=True)

# Variable .woff2 URLs from the official Google Fonts CSS endpoint with a
# desktop Chrome user-agent (which gets you the variable woff2 versions).
SOURCES = {
    "inter.woff2": "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2",
    "fraunces.woff2": "https://fonts.gstatic.com/s/fraunces/v38/6NU78FyLNQOQZAnv9bYEvDiIdE9Ea92uemAk_WBq8U_9v0c2Wa0KxC9TeP2Xz5c.woff2",
}


def main():
    headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
    for name, url in SOURCES.items():
        dest = FONTS_DIR / name
        if dest.exists():
            print(f"  skip {name} (already exists, {dest.stat().st_size//1024}KB)")
            continue
        print(f"  fetch {name} from {url[:80]}...")
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = resp.read()
        dest.write_bytes(data)
        print(f"    wrote {dest} ({len(data)//1024}KB)")
    print("\nFonts downloaded to", FONTS_DIR)
    print("Next: run scripts/subset_fonts.py to subset them.")


if __name__ == "__main__":
    main()
