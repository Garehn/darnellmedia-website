# Website Starter Kit

A reusable kit for building a high-quality static SEO website with editorial
voice, original imagery, and 100/100 PageSpeed scores. Drop this folder into
any new project, fill in the `inputs/`, and point Claude Code at it.

---

## How this works

You provide:
1. A **brief** (one paragraph about the site)
2. A **keyword CSV** (target keywords mapped to pages, with search volume + difficulty)
3. A **voice spec** (5 short markdown files describing how the writer talks)
4. An **OpenAI API key** (for generating original images)

Claude reads `website.md` (the master skill) and follows it phase by phase
to build the site end-to-end.

---

## Folder structure

```
website-starter-kit/
├── README.md                    ← you are here
├── website.md                   ← master skill — Claude reads this first
│
├── inputs/                      ← YOU fill these in before running
│   ├── README.md
│   ├── brief.md                 ← site overview
│   ├── keywords.csv             ← target keywords by page
│   ├── voice/                   ← writer's voice spec (5 files)
│   │   ├── README.md
│   │   ├── voice.md
│   │   ├── humour.md
│   │   ├── stats.md
│   │   ├── stories.md
│   │   └── opinions.md
│   └── .env.example             ← copy to .env and add OPENAI_API_KEY
│
├── scripts/                     ← reusable Python tools
│   ├── README.md
│   ├── generate_images.py       ← OpenAI image API
│   ├── resize_images.py         ← PIL resizing to delivery sizes
│   ├── optimise_images.py       ← q78 JPEG + WebP + recompress OG
│   ├── insert_html.py           ← put image refs into pages
│   ├── subset_fonts.py          ← fonttools subsetting
│   ├── inline_css.py            ← inline CSS into <head>
│   └── make_favicons.py         ← full favicon set
│
├── design-system/               ← reusable starter CSS
│   ├── README.md
│   └── styles.css
│
└── docs/                        ← reference for Claude (and you)
    ├── seo-requirements.md      ← per-page checklist (incl. @graph + E-E-A-T byline)
    ├── performance-checklist.md ← PSI 100/100 recipe
    ├── image-plan-methodology.md
    ├── preview-deploys.md       ← Vercel branch + GH Pages preview patterns
    └── deployment.md            ← GitHub + Vercel + Google Search Console
```

---

## Quick start

```bash
# 1. Copy this kit into a new empty project folder
cp -R website-starter-kit/ my-new-site/
cd my-new-site/

# 2. Fill in the inputs (see inputs/README.md for what to put where)
#    - inputs/brief.md
#    - inputs/keywords.csv
#    - inputs/voice/*.md (5 files)
#    - inputs/.env (copy from .env.example, add your OpenAI key)

# 3. Open in Claude Code and tell it:
#    "Read website.md and build this site end to end."
```

Claude will:
- Validate all inputs are present
- Summarise what it's going to build
- Wait for you to say "go"
- Build the site phase by phase per the master skill
- Run image generation (~30-60 min for 100 images)
- Apply the performance pass
- Generate favicons
- Verify everything

You can then deploy to Vercel/Netlify/Cloudflare Pages and submit to Google
Search Console (steps in `docs/deployment.md`).

---

## What this kit was distilled from

Building [caringveterinarians.com.au](https://caringveterinarians.com.au) —
a 19-page Australian pet health resource — and noting which decisions and
artefacts genuinely contributed to the final result vs. which were noise.

Final scores on the source project:
- **Performance:** 100/100 mobile + desktop
- **Accessibility:** 100/100
- **Best Practices:** 100/100
- **SEO:** 100/100

Build time on a fresh run with this kit: roughly half a day of Claude time
plus ~$15 in OpenAI image credits.

---

## What this kit is **not**

- Not a CMS, blog engine, or framework. Pure static HTML.
- Not a theme or design library — the design system is a starting point you'll customise.
- Not a substitute for understanding your niche. The keyword CSV and voice spec
  is where domain knowledge lives. Bad inputs in → mediocre site out.
- Not for sites that need server-side logic (auth, payments, dynamic data). For
  those, use Next.js or similar. This kit targets editorial / SEO sites.

---

## Required tools on your machine

- **Python 3.10+** (for the scripts)
- **Node.js** (only if you want to run Lighthouse locally)
- **GitHub CLI (`gh`)** for repo creation (or do it manually)
- **Vercel CLI** (optional — you can deploy through the dashboard)

---

## License

Use freely. No attribution required.
