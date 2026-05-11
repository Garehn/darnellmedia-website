# website.md — One-shot Static SEO Site Builder

You are building a complete static HTML/CSS/JS website optimised for search,
with editorial voice, original imagery, and 100/100 PageSpeed scores. The
output is a flat directory of files that can deploy to any static host.

This skill assumes the user has filled in `/inputs/` with a brief, a keyword
CSV, voice files, and an OpenAI API key. If anything is missing, **stop and
ask before building** — the build hinges on these inputs.

---

## Phase 0 — Read inputs and lock in scope

Read these files in order. Do not start building until you have all of them:

| File | Purpose | Required? |
|---|---|---|
| `inputs/brief.md` | Domain, niche, audience, what NOT to build | yes |
| `inputs/keywords.csv` | Target keywords per page with volume + KD | yes |
| `inputs/voice/voice.md` | How the writer talks | yes |
| `inputs/voice/humour.md` | How the writer makes the reader smile | yes (or set humour=off in brief) |
| `inputs/voice/stats.md` | Real numbers — pricing, response times, jobs | yes |
| `inputs/voice/stories.md` | Recurring anecdotes the writer can draw on | yes |
| `inputs/voice/opinions.md` | Strong takes the writer holds | yes |
| `inputs/.env` | `OPENAI_API_KEY=...` for image generation | yes if generating images |

Then summarise back to the user in 5 lines:
- Domain
- Niche
- N pages planned, broken into Tier 1 pillars / Tier 2 supporting
- Voice in one sentence
- Confirmed target keywords

Wait for "go" before continuing.

---

## Phase 1 — Site architecture

From `keywords.csv`, group keywords into pages. The pattern that works:

- **Tier 1 — Pillar pages** (5–8 pages, 1500–2500 words each)
  - Highest-volume, most commercial-intent keywords
  - One pillar per major topic cluster
  - Internal target: minimum 5 inbound internal links each

- **Tier 2 — Supporting pages** (8–15 pages, 800–1200 words each)
  - Lower-volume long-tail or symptom/condition pages
  - Each links to its parent pillar
  - Each links from the homepage

- **Homepage** — hub linking to every Tier 1 + Tier 2

- **Find a [thing]** — directory-style page (helpful, not commercial)

Decide URLs before building anything. Keep them short, lowercase, hyphenated, no dates, no nesting beyond one level. Match the primary keyword:
`/puppy-vaccination-schedule/` not `/blog/2026/05/the-ultimate-puppy-vaccination-guide/`.

Confirm the sitemap with the user before writing copy.

---

## Phase 2 — Design system

Start from `design-system/styles.css`. It's a complete, lean,
accessible mobile-first stylesheet (~17 KB raw / 14 KB minified). Adjust:

- **Colour tokens** in `:root` (`--green-500`, `--ink`, etc.) to match the brand
- **Fonts** (`--font-serif`, `--font-sans`) — pick from Google Fonts or system
- Leave the component classes alone unless the brief says otherwise

**Do not** change layout primitives (`.container`, `.card-grid`, breakpoints) —
they're tuned for max readability and CWV scores.

---

## Phase 3 — Pages

Write each page following the structure in `docs/seo-requirements.md`. Every
page must have:

1. Unique 50–60 char `<title>`, 150–160 char meta description
2. Canonical URL
3. Open Graph + Twitter Card meta with image
4. JSON-LD: BreadcrumbList + (Article | MedicalWebPage | WebSite)
5. FAQPage JSON-LD if the page has an FAQ section
6. `lang="en-AU"` (or appropriate locale)
7. Mobile viewport meta
8. Single H1, sequential heading order (no jumps)
9. Breadcrumbs (visible) + Table of contents on long pages
10. Min 3 internal links (links count as voice — be intentional)

**Voice rules** (apply on every paragraph):
- Read `inputs/voice/voice.md` and `humour.md` before each page
- Short sentences; one idea per sentence; answer first
- Real numbers from `stats.md` — never round
- One story per page maximum, drawn from `stories.md`
- One strong opinion per page maximum, from `opinions.md`
- "Tell people when NOT to buy/come/click" at least once per page — biggest voice tell
- After finishing each page, re-read `voice.md → "Tells that it's AI-written"`
  and delete anything that matches

---

## Phase 4 — Imagery (if .env has OPENAI_API_KEY)

Read `docs/image-plan-methodology.md`. Build a manifest of every image you
want, run `scripts/generate_images.py`, then `scripts/optimise_images.py`,
then `scripts/insert_html.py`.

Image budget per page (target):
- 1 hero image at the top (loaded eagerly)
- 1 OG image (social sharing only — never seen by site visitors)
- 1 inline image per ~500 words of body content

So: a 2000-word pillar page = 1 OG + 1 hero + 4 inline = 6 images.

Universal style guide (paste into every image prompt):
> Editorial photography in the style of a premium magazine. Natural soft
> lighting, warm and gentle. Muted palette consistent with the brand.
> Calm, considered, reassuring mood. Realistic photographic style with
> shallow depth of field where appropriate. Subjects given breathing room.
> No text, no logos, no watermarks, no visible signage. The image should
> look like it could appear in a long-form article.

**Sizes for `gpt-image-1`:**
- Hero/OG: 1536×1024 (high quality)
- Inline 16:9: 1536×1024 (medium)
- Inline 4:3 / 1:1: 1024×1024 (medium)

After generation, resize to delivery sizes:
- OG: 1200×630 PNG → JPEG q82
- Hero: 1200×675 JPEG q78 + WebP q78
- Inline: native size JPEG q78 + WebP q78

Cost guideline: ~$0.06 per medium 1536×1024 image, ~$0.17 per high. 100
images costs roughly $10–15.

---

## Phase 5 — Performance pass

Read `docs/performance-checklist.md` and apply every item. Non-negotiable:

1. **Self-host fonts** as woff2, subset to the language you actually use.
   Run `scripts/subset_fonts.py`. Target: <40 KB per family.
2. **Inline the entire minified CSS** into each page's `<head>` (run
   `scripts/inline_css.py`). Removes the last render-blocking request.
3. **Hero image preload** with `fetchpriority="high"` and
   `<link rel="preload" as="image" type="image/webp">`.
4. **WebP + JPEG fallback** via `<picture>` + `<source>`.
5. **`width` and `height` on every `<img>`** — eliminates CLS.
6. **No font preloads** — let them load opportunistically with
   `font-display: swap`. Hero image takes priority.
7. **Single ~500-byte JS file** at the end of `<body>` for mobile-nav toggle
   only. Anything more, justify it.

Verify with Lighthouse (mobile + desktop). Target: 100/100/100/100.

---

## Phase 6 — Favicons

Run `scripts/make_favicons.py`. Generates the full set:
SVG, ICO (multi-size), PNG (16/32/48/96/180/192/512), apple-touch-icon,
android-chrome icons, and `site.webmanifest`. Updates the `<link>` tags in
every page automatically.

---

## Phase 7 — Verify

Run these checks before declaring done:

```bash
# All internal links resolve
python3 -c "
import os, re
for r,_,fs in os.walk('.'):
    if '.venv' in r or 'node_modules' in r: continue
    for f in fs:
        if f.endswith('.html'):
            for url in re.findall(r'href=\"(/[^\"#?]+/?)\"', open(os.path.join(r,f)).read()):
                t = '.'+url
                if url.endswith('/'): t += 'index.html'
                if not os.path.exists(t): print('BROKEN', os.path.join(r,f), '->', url)
"

# Every page has correct schema
grep -L 'application/ld+json' */index.html index.html

# Every page has og:image
grep -L 'og:image' */index.html index.html

# Every page has lang="en-AU" (or your locale)
grep -L 'lang="en-' */index.html index.html
```

All four should return nothing.

---

## Phase 8 — Deploy + GSC

Read `docs/deployment.md`. Push to GitHub, deploy on Vercel (Other preset,
output dir `.`, no build command), point custom domain via DNS, verify in
Google Search Console with the HTML file method, submit `sitemap.xml`.

---

## Build order summary

```
inputs check
   ↓
sitemap (URLs + keywords mapped)
   ↓
design tokens (colours, fonts)
   ↓
HTML pages, voice-matched, schema-complete  ← biggest time investment
   ↓
images (generate → optimise → insert)
   ↓
performance pass (fonts, CSS, picture tags)
   ↓
favicons
   ↓
deploy + GSC
```

---

## Things that will burn time if you skip them

- **Don't generate images before pages are voiced** — you'll regenerate them when copy changes
- **Don't deploy before performance pass** — the cold-cache hit looks bad to first visitors
- **Don't skip subsetting fonts** — Google Fonts variable woff2 is 400KB+ unsubset; 40KB subset
- **Don't use external CSS link** if you can inline — saves the last render-blocking request
- **Don't preload web fonts** — they compete with the hero image for bandwidth and tank LCP
- **Don't ship without favicon set** — Best Practices score caps at 96 and Google search shows the generic globe

---

## Anti-patterns the writing must avoid

(From `voice.md → Tells that it's AI-written` — repeated here so you check
every page before shipping)

- "In today's fast-paced world…" or any variant
- "Whether you're a [X], [Y], or [Z]…" intros
- The words "unlock", "leverage", "comprehensive", "seamless",
  "world-class", "best-in-class", "essential", "crucial"
- Three-item lists where everything starts with `-ing`
- Bullet points where every bullet is a full sentence ending with a period
- Closing sentences that restate the opening
- Exclamation marks (use deadpan)
- Emojis in the body copy
- Em dashes if the user has banned them (some brands prefer commas)
