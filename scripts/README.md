# scripts/

Reusable Python tools that automate the mechanical parts of building a
high-quality static site.

---

## Setup (once per project)

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install openai pillow python-dotenv fonttools brotli
```

All scripts assume:
- They're run from the project root
- A `.env` file exists at the project root with `OPENAI_API_KEY=...`
- Output paths go into `images/`, `fonts/`, `css/`, etc. inside the project

---

## What each script does

### `generate_images.py`
Reads an image manifest (a Python list of dicts) and calls OpenAI's image
generation API. Saves originals to `images/originals/` as PNG. Resumable —
keeps a `generation_log.json` so re-runs skip already-generated entries.

You'll customise the manifest (the `IMAGES = [...]` list) for each project.
Schema:
```python
IMAGES = [
    {
        "stem": "og-home",                     # filename stem
        "subject": "...",                       # SUBJECT line for the prompt
        "size": "1536x1024",                    # gpt-image-1 size
        "quality": "high",                      # high / medium / low
        "out_dir": "og",                        # og / hero / inline
        "aspect": "16:9 landscape",             # ASPECT line for the prompt
    },
    ...
]
```

### `resize_images.py`
Takes the originals from `images/originals/` and resizes/crops them to the
final delivery sizes:
- OG: 1200×630 PNG
- Hero: 1600×900 JPEG (or 1200×675 if you want smaller)
- Inline: native target size

### `optimise_images.py`
Re-encodes JPEGs at quality 78, converts OG PNGs to JPEG q82 (saves ~90% on
OG), and updates the corresponding `<meta og:image>` tags in HTML to point
to `.jpg`.

### `subset_fonts.py`
Takes a Google Fonts woff2 file and subsets it to the Latin range used by
English-language sites. Cuts a 411 KB Merriweather variable woff2 down to
~93 KB. Run once per font family.

### `inline_css.py`
Replaces `<link rel="stylesheet" href="/css/styles.min.css">` with the full
minified CSS inlined into a `<style>` tag in every HTML page's `<head>`.
Removes the last render-blocking request — the trick that gets PageSpeed
from 85 to 100 on mobile.

### `insert_html.py`
The most project-specific script. Takes a placement spec (which image goes
on which page, before which H2) and inserts `<figure>` / `<picture>` tags
into the HTML. You'll edit the placement spec for each project.

### `make_favicons.py`
Generates a complete favicon set (paw-print pattern in the source kit;
edit the SVG and Pillow drawing logic to match your brand mark):
- `favicon.svg`, `favicon.ico` (multi-size 16/32/48)
- `favicon-16/32/48/96/180/192/512.png`
- `apple-touch-icon.png`, `android-chrome-{192,512}.png`
- `site.webmanifest`

Updates `<link>` tags in every HTML page automatically.

---

## Running order

A typical end-to-end build:

```bash
# 1. Build HTML pages (Claude does this directly, no script)

# 2. Generate images (~30-60 min for 100 images, ~$15)
python3 scripts/generate_images.py

# 3. Resize originals to delivery sizes
python3 scripts/resize_images.py

# 4. Compress / convert to WebP / update OG references
python3 scripts/optimise_images.py

# 5. Insert image references into pages
python3 scripts/insert_html.py

# 6. Subset fonts (download Google Fonts woff2 first, then subset)
python3 scripts/subset_fonts.py

# 7. Inline CSS into every page's <head>
python3 scripts/inline_css.py

# 8. Generate full favicon set
python3 scripts/make_favicons.py

# 9. Verify
ls images/og/ images/hero/ images/inline/
```

---

## What these scripts deliberately don't do

- **Build HTML pages from scratch.** Claude does that directly per `website.md`.
- **Generate copy.** Voice-driven writing isn't automatable.
- **Run Lighthouse.** Use Chrome's lighthouse CLI or pagespeed.web.dev for verification.
- **Deploy.** That's a `git push` + Vercel auto-deploy. See `docs/deployment.md`.
