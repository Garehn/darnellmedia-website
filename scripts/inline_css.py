"""Inline the contents of css/styles.min.css into every HTML page's <head>.

Removes the external <link rel="stylesheet"> — this is the trick that takes
PageSpeed mobile from ~85 to 100 by eliminating the last render-blocking
request.

Pre-req: css/styles.min.css must exist. If you only have css/styles.css,
this script will minify it on the fly (basic regex; for complex CSS use a
real minifier).
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CSS_MIN_PATH = ROOT / "css" / "styles.min.css"
CSS_PATH = ROOT / "css" / "styles.css"


def basic_minify(css):
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
    css = re.sub(r'\s+', ' ', css)
    css = re.sub(r'\s*([{}:;,>+~])\s*', r'\1', css)
    css = re.sub(r';}', '}', css)
    return css.strip()


def get_css():
    if CSS_MIN_PATH.exists():
        return CSS_MIN_PATH.read_text().strip()
    if CSS_PATH.exists():
        css = basic_minify(CSS_PATH.read_text())
        CSS_MIN_PATH.write_text(css)
        return css
    raise FileNotFoundError(f"No CSS found at {CSS_PATH} or {CSS_MIN_PATH}")


def main():
    css = get_css()
    inline_block = f'<style>{css}</style>'

    pages = list(ROOT.glob("index.html")) + list(ROOT.glob("*/index.html"))
    pages = [p for p in pages if ".venv" not in str(p)]

    n = 0
    for p in pages:
        html = p.read_text()
        original = html
        if '<style>' in html and '/css/styles.min.css' not in html:
            continue
        html = re.sub(
            r'<link rel="stylesheet" href="/css/styles\.min\.css">',
            inline_block, html, count=1
        )
        if html != original:
            p.write_text(html)
            n += 1
    print(f"{n} pages updated with inlined CSS ({len(css)} bytes per page).")


if __name__ == "__main__":
    main()
