# design-system/

A complete, accessible, mobile-first stylesheet that ships with the kit.
Uses CSS custom properties for theming — change colours and fonts in one
place to rebrand.

---

## Files

- **`styles.css`** — the full source CSS, ~17 KB

When building, copy this to your project at `css/styles.css`. The kit's
`scripts/inline_css.py` will minify and inline it into every page's
`<head>` for the performance pass.

---

## What's in it

Components and utilities that survived the source-project performance pass
without contributing to CWV penalties:

- **Reset** — modern, lean, no normalize.css bloat
- **Tokens** — colours, fonts, spacing, radius, shadows
- **Typography** — h1-h4, p, blockquote, hr, fluid font sizes
- **Layout** — `.container` (max-width 768px reading-optimised) + `.container--wide` (1100px)
- **Header** — sticky nav with mobile toggle
- **Breadcrumbs** — minimal, accessible
- **Article** — `.article-meta`, `.lead`, `.article-hero`
- **Hero section** — gradient background, h1 + lead
- **Cards** — `.card-grid` + `.card` with optional `.card__thumb`
- **Link list** — `.link-list` for grouped internal navigation
- **Callouts** — `.callout--emergency`, `.callout--info`, `.callout--note`
- **Tables** — responsive horizontal scroll, accessible
- **Definition lists** — `.dl-grid` for pricing summaries
- **TOC** — `.toc` with sticky behaviour on desktop
- **FAQ** — `.faq` using native `<details><summary>` elements
- **Author cards** — `.author-card` for byline / E-A-T
- **Lists** — `.checklist` and `.warnlist` with custom dots
- **Footer** — multi-column with theme colours
- **Article images** — `<figure>` and `.article-hero` styling
- **Print styles** — clean paper output
- **A11y** — `.sr-only`, focus indicators, contrast-AA colour tokens

---

## Customising

### Rebrand by changing colours

Edit `:root` at the top of `styles.css`:

```css
:root {
  --green-50:  #f3f8f4;
  --green-100: #e3efe4;
  --green-500: #4f8a57;   /* primary accent */
  --green-700: #2f5734;   /* dark accent */
  --warm-white:#fbfaf6;
  --ink:       #1f2a24;   /* body text */
  --muted:     #5e6961;   /* secondary text — must be 4.5:1 on warm-white */
  /* ... */
}
```

The colour scheme uses sage green by default. To change the primary brand
colour, swap the `--green-*` ramp for a different hue. Use a tool like
https://uicolors.app/create to generate a 50-700 ramp from a single hex.

### Changing fonts

Edit `@font-face` declarations and the `--font-serif` / `--font-sans`
tokens. Default is Merriweather + Source Sans 3 — both available on
Google Fonts.

If you want to use system fonts only (best perf, less brand control),
replace `@font-face` blocks with:

```css
:root {
  --font-serif: Georgia, 'Times New Roman', serif;
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

Then delete the `@font-face` declarations and the `fonts/` directory.

---

## Accessibility notes

- All interactive elements have visible focus indicators
- Colour contrast meets WCAG AA across all text/background combinations
- Heading hierarchy enforced (footer headings use `h2.footer-heading`)
- `<details>` for FAQs (works without JS)
- Keyboard-navigable mobile menu
- `prefers-reduced-motion` respected (no scroll-behavior smooth on this preference)

---

## What this CSS deliberately avoids

- No CSS frameworks (Tailwind, Bootstrap)
- No CSS-in-JS
- No JS-driven layout
- No animation libraries
- No icon fonts (SVG inline if needed)
- No transition durations over 200ms (feels snappier)
