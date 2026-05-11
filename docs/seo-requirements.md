# SEO requirements — per-page checklist

Every page on the site must pass this checklist before it ships. Claude
should self-check during writing.

---

## Head section

- [ ] `<!DOCTYPE html>` declared
- [ ] `<html lang="en-AU">` (or appropriate locale)
- [ ] `<meta charset="UTF-8">`
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] **Unique** `<title>` 50–60 chars
- [ ] **Unique** `<meta name="description">` 150–160 chars
- [ ] `<link rel="canonical" href="https://yourdomain.com/page-path/">`
- [ ] Open Graph: `og:type`, `og:title`, `og:description`, `og:url`, `og:locale`, `og:image` (with width/height/alt)
- [ ] Twitter Card: `twitter:card="summary_large_image"`, `title`, `description`, `image`
- [ ] Schema testing comments (`<!-- Schema: ... -->`) before each JSON-LD block

---

## Schema (JSON-LD)

Every article-style page ships **one** `<script type="application/ld+json">` block in `<head>` containing a single `@graph` array. The graph holds:

- [ ] `BlogPosting` (or `Article`) — the page itself
- [ ] `BreadcrumbList` — always present, full hierarchy
- [ ] `FAQPage` — only if the page has a real FAQ section, mirroring the on-page Q&A exactly

Use one combined `@graph` block, not three separate scripts. Google reads them all the same; one block is faster to maintain and less error-prone.

### `BlogPosting` required fields

```json
{
  "@type": "BlogPosting",
  "headline": "[exact <title> text]",
  "description": "[exact meta description]",
  "url": "[canonical URL]",
  "mainEntityOfPage": "[canonical URL]",
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "image": {
    "@type": "ImageObject",
    "url": "https://yourdomain.com/images/og/<slug>.jpg",
    "width": 1200,
    "height": 630
  },
  "author":  { "@type": "Organization", "name": "...", "url": "..." },
  "reviewedBy": {
    "@type": "Person",
    "name": "Dr ...",
    "jobTitle": "BVSc ...",
    "description": "Brief bio with credentials and years of experience."
  },
  "publisher": {
    "@type": "Organization",
    "name": "...",
    "url": "...",
    "logo": { "@type": "ImageObject", "url": "https://yourdomain.com/logo.png" }
  },
  "inLanguage": "en-AU",
  "isAccessibleForFree": true,
  "about": { "@type": "MedicalCondition|MedicalProcedure|Service|Product|Place", "name": "..." }
}
```

The `about` `@type` matches the page topic — `MedicalCondition` for symptom posts, `MedicalProcedure` for treatments, `Service` for service pages, `Place` for location directories, `Product` for product round-ups.

### Reviewer placeholder workflow

If you don't have a real vet/reviewer signed up yet, use a placeholder name **and** a HTML comment that flags it for replacement:

```html
<!-- TODO: Replace reviewer name "Dr Sarah Mitchell, BVSc (Hons), MANZCVS" with the actual reviewer when known -->
<script type="application/ld+json"> ... </script>
```

A `grep -r "TODO: Replace reviewer"` finds every page when you onboard the real reviewer.

### Other page types

| Page type | Schema in @graph |
|---|---|
| Homepage | `WebSite` + `Organization` (already a graph by convention) |
| Service / location landing | `BlogPosting` + `Service` (or `LocalBusiness` if you operate the location) |
| Health / medical pillar | `BlogPosting` with `about: MedicalCondition` |
| Author bio page | `Person` (with `jobTitle`, `description`, `image`) |

---

## Body structure

- [ ] Single `<h1>` per page (matches the title roughly, voice-adjusted)
- [ ] Sequential heading order: H1 → H2 → H3, no skips (footer h2/h3 only)
- [ ] Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- [ ] Visible breadcrumbs (link to home, link to parent if applicable, current page as text)
- [ ] **Author / reviewer byline immediately below the hero image** (E-E-A-T signal — see below)
- [ ] Lead paragraph immediately after H1 (the answer in the first 50 words)
- [ ] Table of contents on long pages (anchor links to H2 sections), styled with brand-accent left border
- [ ] **Key Takeaway** aside on net-new pages where the lead doesn't already serve as the practical summary

### Author / reviewer byline (E-E-A-T)

Every article page needs a reviewer line below the hero, before the lead paragraph. The pattern:

```html
<div class="author-byline">
  <p class="byline-text">
    Reviewed by <strong>Dr Sarah Mitchell</strong>, BVSc (Hons), MANZCVS
    &middot; Updated May 2026
  </p>
</div>
```

Style is in `design-system/styles.css` (`.author-byline`). The byline is minimal — top-bordered, no card chrome — to communicate authority without performative trust theatre. The same name appears in the `BlogPosting.reviewedBy` schema so Google can connect the dots.

If you previously had `Updated 2026` in the `.article-meta` row, **remove it** — the byline now carries the date. Two updated-dates on one page looks slapdash and confuses crawlers.

### Key Takeaway aside (when to use it)

For net-new pages without a strong "the answer in the first 50 words" lead, add a Key Takeaway block between the byline and the TOC:

```html
<aside class="key-takeaway" aria-label="Key takeaway">
  <p class="takeaway-label">Key takeaway</p>
  <p class="takeaway-text">[2-3 sentence practical summary]</p>
</aside>
```

Style: brand-green left border, soft sage tint, matches the TOC. Skip it on pages where the lead paragraph already does the same job — duplicating content right next to itself is bad UX.

---

## Internal linking

- [ ] Minimum 3 contextual internal links in body content (excluding nav/footer)
- [ ] Pillar pages get 5+ inbound links from supporting pages
- [ ] Every Tier 2 page links to its parent Tier 1 pillar
- [ ] Anchor text varies — never just "click here"

---

## Images

- [ ] OG image (1200×630, JPEG q82, ~100 KB)
- [ ] Hero image (loaded eagerly with `fetchpriority="high"`)
- [ ] Inline images at every ~500-word section break
- [ ] Every `<img>` has `alt` text describing the visual
- [ ] Every `<img>` has `width` and `height` attributes (CLS prevention)
- [ ] `<picture>` element with `<source type="image/webp">` + JPEG fallback
- [ ] `loading="lazy"` on all images below the fold; `loading="eager"` on hero
- [ ] `decoding="async"` on all images
- [ ] `<link rel="preload" as="image">` for hero image

---

## Page weight targets

| Asset | Target |
|---|---|
| HTML (with inlined CSS) | < 35 KB |
| Hero image (WebP) | < 30 KB |
| Each inline image | < 100 KB |
| Each font file (subset) | < 100 KB |
| **Total above-the-fold** | **< 200 KB** |

---

## URL conventions

- [ ] Lowercase, hyphenated, no underscores
- [ ] Match the primary keyword: `/puppy-vaccination-schedule/` not `/article-7/`
- [ ] Trailing slash for consistency
- [ ] No dates in URLs (no `/2026/05/`)
- [ ] No category prefixes (no `/blog/`, `/articles/`) unless absolutely needed
- [ ] Stable forever — never change once published (use 301 redirects if you must)

---

## Sitemap and robots

- [ ] `sitemap.xml` lists every page with `<lastmod>`, `<changefreq>`, `<priority>`
- [ ] `robots.txt` allows all crawlers, points to sitemap
- [ ] No `noindex` meta tags on production pages
- [ ] No `disallow` rules for crawl-worthy paths

---

## Verification (run before declaring done)

```bash
# Every page has a canonical URL
grep -L 'rel="canonical"' */index.html index.html

# Every page has og:image
grep -L 'og:image' */index.html index.html

# Every page has at least one JSON-LD block
grep -L 'application/ld+json' */index.html index.html

# Every article page uses the combined @graph (one script, not three)
for f in */index.html; do
  count=$(grep -c 'application/ld+json' "$f")
  [ "$count" != "1" ] && echo "$f has $count schema scripts (expected 1)"
done

# Every article page has a reviewer byline
grep -L 'class="author-byline"' */index.html

# No page still has the legacy "Updated 2026" duplicate
grep -l 'Updated 2026' */index.html

# Find all reviewer placeholders waiting to be replaced
grep -rl "TODO: Replace reviewer" .

# Every page has lang attribute
grep -L 'lang="en-' */index.html index.html

# Single H1 per page (find files with 0 or 2+ H1s)
for f in $(find . -name "index.html" -not -path "./.venv/*"); do
  c=$(grep -c '<h1' "$f")
  [ "$c" != "1" ] && echo "$f has $c h1 tags"
done

# All internal links resolve
python3 -c "
import os, re
broken = []
for r,_,fs in os.walk('.'):
    if '.venv' in r or '/originals' in r: continue
    for f in fs:
        if f.endswith('.html'):
            for url in re.findall(r'href=\"(/[^\"#?]+/?)\"', open(os.path.join(r,f)).read()):
                t = '.' + url
                if url.endswith('/'): t += 'index.html'
                if not os.path.exists(t):
                    broken.append((os.path.join(r,f), url))
print('OK' if not broken else f'{len(broken)} broken')
for b in broken[:5]: print(' ', b)
"
```

All four greps should return nothing. Internal-links check should print "OK".
