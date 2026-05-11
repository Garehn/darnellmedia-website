"""Insert image figures into HTML pages at specific placement points.

Each project will need to customise the PLACEMENTS dict for its own pages
and image stems. This is the most project-specific script in the kit.

Inserts:
  - Hero <figure class="article-hero"> after the article-meta block
  - Inline <figure> just before specified <h2 id="..."> tags
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# ─── EDIT for your project ────────────────────────────────────────────────

# For each page, define:
#   "hero": stem of the hero image (file at /images/hero/<stem>.jpg)
#   "hero_alt": alt text for the hero
#   "inline": list of (h2_id_to_precede, image_stem, alt_text) tuples
#       - image_stem refers to /images/inline/<stem>.jpg
PLACEMENTS = {
    "index.html": {
        "hero": "home",
        "hero_alt": "...",
        # Homepage typically uses card thumbnails, not inline figures —
        # custom logic per project.
        "inline": [],
    },
    "example-page/index.html": {
        "hero": "example-page",
        "hero_alt": "...",
        "inline": [
            ("section-1-id", "example-page-1", "..."),
            ("section-2-id", "example-page-2", "..."),
        ],
    },
}

# ──────────────────────────────────────────────────────────────────────────


HERO_TPL = """<figure class="article-hero">
  <img src="/images/hero/{stem}.jpg" alt="{alt}" width="1200" height="675" loading="eager" decoding="async">
</figure>
"""

INLINE_TPL = """<figure>
  <img src="/images/inline/{stem}.jpg" alt="{alt}" loading="lazy" decoding="async">
</figure>
"""


def insert_hero_after_meta(html, stem, alt):
    pattern = re.compile(r'(<div class="article-meta">.*?</div>\s*\n)', re.DOTALL)
    hero = HERO_TPL.format(stem=stem, alt=alt)
    return pattern.sub(r'\1\n  ' + hero.replace("\n", "\n  ").rstrip() + "\n\n", html, count=1)


def insert_inline_before_h2(html, h2_id, stem, alt):
    pattern = re.compile(rf'(\n\s*)(<h2 id="{re.escape(h2_id)}">)', re.DOTALL)
    inline = INLINE_TPL.format(stem=stem, alt=alt).rstrip()
    new, n = pattern.subn(r'\1' + inline + r'\1\2', html, count=1)
    if n == 0:
        print(f"    WARN: could not find h2 id={h2_id!r}")
    return new


def process(rel_path, spec):
    full = ROOT / rel_path
    if not full.exists():
        print(f"SKIP {rel_path} — file not found")
        return False
    html = full.read_text()
    original = html

    if 'article-hero' in html:
        print(f"SKIP {rel_path} — already has images")
        return False

    if spec.get("hero"):
        html = insert_hero_after_meta(html, spec["hero"], spec.get("hero_alt", ""))

    for h2_id, stem, alt in spec.get("inline", []):
        html = insert_inline_before_h2(html, h2_id, stem, alt)

    if html != original:
        full.write_text(html)
        print(f"OK  {rel_path}")
        return True
    return False


def main():
    n = 0
    for rel_path, spec in PLACEMENTS.items():
        if process(rel_path, spec):
            n += 1
    print(f"\n{n} of {len(PLACEMENTS)} pages updated.")


if __name__ == "__main__":
    main()
