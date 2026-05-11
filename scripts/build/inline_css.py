"""Inline the minified CSS into every HTML page's <head>.

Removes the external <link rel="stylesheet" href="/styles.css">. This is the
trick that takes Lighthouse mobile from ~85 to 100 by eliminating the last
render-blocking request.
"""

from __future__ import annotations
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
CSS_PATH = ROOT / "styles.css"


def basic_minify(css: str) -> str:
    # strip comments
    css = re.sub(r"/\*.*?\*/", "", css, flags=re.S)
    # collapse whitespace
    css = re.sub(r"\s+", " ", css)
    # tighten around tokens
    css = re.sub(r"\s*([{}:;,>+~])\s*", r"\1", css)
    # drop final semicolons before }
    css = re.sub(r";}", "}", css)
    return css.strip()


def main():
    raw = CSS_PATH.read_text()
    minified = basic_minify(raw)
    print(f"CSS: {len(raw)} bytes raw → {len(minified)} bytes minified "
          f"({(1 - len(minified) / len(raw)) * 100:.0f}% smaller)")

    inline_block = f"<style>{minified}</style>"

    pages = list(ROOT.glob("index.html")) + list(ROOT.glob("*/index.html"))
    pages = [p for p in pages if ".venv" not in str(p)]

    n = 0
    for p in pages:
        html = p.read_text()
        original = html
        # Replace the styles.css link with inline style
        html = re.sub(
            r'<link rel="stylesheet" href="/styles\.css">',
            inline_block,
            html,
            count=1,
        )
        if html != original:
            p.write_text(html)
            n += 1
    print(f"{n} pages updated with inlined CSS.")


if __name__ == "__main__":
    main()
