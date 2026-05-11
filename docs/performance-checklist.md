# Performance checklist — PSI 100/100 recipe

The exact sequence of optimisations that took the source project from
PageSpeed 78 mobile / 83 desktop to **100/100/100/100 on both form factors**.

Apply every item — they compound.

---

## Critical path (in order of impact)

### 1. Self-host fonts
**Why:** Google Fonts CSS link is render-blocking. On mobile throttling, it adds ~2.25s to FCP because of DNS lookup → TLS handshake → CSS download → font file download chain.

**How:**
- Download the woff2 files from Google Fonts (use a desktop browser User-Agent — gets you the variable woff2 versions)
- Save to `/fonts/<family>.woff2`
- Add `@font-face` declarations in your CSS pointing to local paths
- Remove the `<link rel="stylesheet" href="https://fonts.googleapis.com/...">` from `<head>`
- Remove the `<link rel="preconnect">` for fonts.googleapis.com and fonts.gstatic.com

**Impact:** -2,000ms FCP

---

### 2. Subset fonts
**Why:** Google's variable woff2 files cover all Latin-extended ranges + sometimes Cyrillic + Greek + Vietnamese. For an English-only site you can drop 80% of the file size.

**How:** Run `scripts/subset_fonts.py`. The script keeps Basic Latin, Latin-1 Supplement, smart punctuation, basic symbols.

**Impact:** Merriweather 411 KB → 93 KB, Source Sans 3 121 KB → 24 KB

---

### 3. Inline CSS in <head>
**Why:** External CSS link is the last render-blocking request. Inlining eliminates it.

**How:** Run `scripts/inline_css.py`. Replaces `<link rel="stylesheet">` with `<style>...</style>` on every page.

**Impact:** -200ms FCP, +5-8 PSI score points

---

### 4. WebP for all images, with JPEG fallback
**Why:** WebP at q78 is ~30-40% smaller than JPEG at q78 with no visible quality difference.

**How:** Run `scripts/optimise_images.py`. Generates `.webp` next to every `.jpg`, wraps `<img>` in `<picture>` with `<source type="image/webp">`.

**Impact:** -300 KB total page weight (typical), -200ms LCP

---

### 5. Preload hero image with high priority
**Why:** Browser doesn't discover the hero `<img>` until HTML parsing reaches it. Preloading kicks off the download immediately.

**How:** In each page's `<head>`:
```html
<link rel="preload" as="image" href="/images/hero/page.webp" fetchpriority="high" type="image/webp">
```

Plus `fetchpriority="high"` on the `<img>` tag itself.

**Impact:** -400ms LCP (huge for above-the-fold image)

---

### 6. **Don't** preload fonts
**Why:** Counter-intuitive but true. If the LCP element is the hero image, preloading 117 KB of fonts steals bandwidth from the 25 KB hero. The fallback fonts via `font-display: swap` render text instantly anyway.

**How:** Remove any `<link rel="preload" as="font">` tags. Let `@font-face` load lazily.

**Impact:** -500ms LCP on cold-cache mobile

---

### 7. Width and height on every image
**Why:** Without dimensions, the browser doesn't reserve space, layout shifts when each image loads. Triggers Cumulative Layout Shift (CLS) penalty.

**How:** Every `<img>` needs `width="X" height="Y"` matching the actual image dimensions. The kit's `scripts/optimise_images.py` adds these automatically.

**Impact:** CLS 0.0 (perfect)

---

### 8. Resize hero images to actual display size
**Why:** Don't serve a 1600×900 hero to a 412 px mobile viewport. The container max-width is 768 px on this kit, so 1200×675 is plenty for everyone (covers 2x retina displays).

**How:** When generating heroes, target 1200×675. The kit's `resize_images.py` does this.

**Impact:** Hero JPEG ~100 KB → ~60 KB; hero WebP ~50 KB → ~25 KB

---

### 9. Optimise OG images
**Why:** OG images are loaded by social previewers, AI crawlers, and audit tools. A 1.2 MB OG PNG hurts your "best practices" score and bandwidth bills.

**How:** Convert PNG → JPEG q82. The kit's `optimise_images.py` does this and updates the `og:image` meta tag automatically.

**Impact:** Per OG image: 1.2 MB → 100 KB. Across 19 pages: ~22 MB → ~2 MB.

---

### 10. Recompress JPEGs at q78
**Why:** Default q85 looks identical to q78 on photographic editorial content but is 30% larger.

**How:** Run image compression at q78 (kit's `optimise_images.py`).

**Impact:** -1.5 MB total inline image payload typical site

---

### 11. Add favicon set
**Why:** Missing favicon → 404 in browser console → fails the "Browser errors logged to console" Best Practices audit. Drops the score from 100 to 96.

**How:** Run `scripts/make_favicons.py`. Generates 11 files + manifest, updates `<link>` tags in every page.

**Impact:** Best Practices 96 → 100

---

### 12. Fix colour contrast for accessibility
**Why:** WCAG AA requires 4.5:1 contrast for body text on background. The default `--muted` token in many design systems is too light.

**How:** Use a tool like https://webaim.org/resources/contrastchecker/ to test every text/background combination. Adjust until all hit 4.5:1+ for body, 3:1+ for large headings.

**Impact:** Accessibility 93 → 100

---

### 13. Sequential heading order
**Why:** Heading hierarchy must not skip levels (e.g. H2 → H4 fails the "Heading elements are not in a sequentially-descending order" audit).

**How:** Footer headings should be H2 (with custom styling) not H4. Article subsections should be H2 → H3 with no jumps.

**Impact:** Accessibility +1 audit pass

---

## Verification

Run Lighthouse from the command line:

```bash
# Install once
mkdir /tmp/lhci && cd /tmp/lhci
npm install lighthouse chrome-launcher

# Run mobile audit
node -e "
import('lighthouse').then(async ({default:lh}) => {
  const cl = await import('chrome-launcher');
  const c = await cl.launch({chromeFlags:['--headless=new','--no-sandbox']});
  const r = await lh('https://yourdomain.com/', {
    port: c.port, output:'json', logLevel:'error',
    onlyCategories:['performance','accessibility','best-practices','seo'],
    formFactor:'mobile',
    screenEmulation:{mobile:true,width:412,height:823,deviceScaleFactor:1.75},
    throttling:{rttMs:150,throughputKbps:1638.4,cpuSlowdownMultiplier:4},
  });
  for (const [k,c] of Object.entries(r.lhr.categories))
    console.log(c.title, Math.round(c.score*100));
  await c.kill();
});
"
```

Or use https://pagespeed.web.dev/ for a hosted run.

---

## Realistic expectations

- **4 of 5 runs** should hit 100/100. Cold-cache hits at the Vercel POP can drop one run to 99.
- **Desktop more stable than mobile** — desktop almost always 100; mobile occasionally 99.
- **Real User Metrics (CrUX)** will read as 100/100 once you have enough real visitors (about 28 days for a new domain).
- **Don't chase the last 1 point.** A site that scores 99-100/100 across runs is genuinely fast. Lighthouse variance is real.
