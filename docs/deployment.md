# Deployment — GitHub + Vercel + Google Search Console

End-to-end deployment workflow from finished local site to indexed in Google.

---

## Phase 1 — GitHub

### Create the repo

```bash
cd /path/to/your-site

# Initial commit
git init
git add -A
git commit -m "Initial commit: $(basename $(pwd)) site"

# Create on GitHub via gh CLI (private by default)
gh repo create your-site-name --private --source=. --push
```

### What's in / what's out (`.gitignore`)

```
.env
.venv/
__pycache__/
*.pyc
.DS_Store
node_modules/
```

Commit:
- ✓ All HTML, CSS, JS, images (including `images/originals/` — your masters)
- ✓ `scripts/`, `inputs/` (so the build is reproducible)
- ✓ `generation_log.json` (audit trail of what each image cost)
- ✗ `.env` (your API keys — never commit)
- ✗ `.venv/` (Python virtualenv)

---

## Phase 2 — Vercel deployment

Two paths: dashboard or CLI.

### Dashboard (recommended for first deploy)

1. Go to https://vercel.com/new
2. Click "Import Git Repository" → select your repo
3. Settings:
   - **Application Preset:** Other
   - **Root Directory:** `./`
   - **Build Command:** *override on, leave blank*
   - **Output Directory:** *override on, set to `.`*
   - **Install Command:** *leave default (will skip if no package.json)*
4. Click Deploy
5. First deploy: ~30 seconds. Get a URL like `your-site-xxxxx.vercel.app`

### CLI

```bash
npm install -g vercel
vercel deploy --prod
# Answer prompts: Other preset, root, no build command, output `.`
```

### Subsequent deploys

Push to `main` on GitHub → Vercel auto-deploys in ~30 seconds. No action
needed once connected.

---

## Phase 3 — Custom domain

In Vercel project: **Settings → Domains → Add**

Type your domain (e.g. `yourdomain.com`). Vercel will show DNS records to
add at your registrar.

### DNS records (typical for apex + www)

At your registrar (Namecheap, GoDaddy, Cloudflare, etc.):

| Type | Host | Value |
|---|---|---|
| A | `@` | `76.76.21.21` (or the IP Vercel shows) |
| CNAME | `www` | `cname.vercel-dns.com` |

Wait 5-30 minutes for DNS propagation. Vercel auto-provisions an SSL cert
once DNS resolves.

### Verify

```bash
dig +short yourdomain.com A
curl -s -o /dev/null -w "%{http_code}\n" https://yourdomain.com/
```

Should return the Vercel IP and HTTP 200.

### www → bare redirect

In Vercel **Settings → Domains**, click `www.yourdomain.com` and toggle
"Redirect to yourdomain.com" (or vice versa, your choice — pick one as
canonical).

---

## Phase 4 — Google Search Console

### Add the property

1. Go to https://search.google.com/search-console
2. Click "Add property" → **URL prefix** (not Domain — that needs DNS verification)
3. Enter: `https://yourdomain.com` (NOT `www.` — the bare domain matches your sitemap)
4. Pick **HTML file** verification — Google gives you a file like `googleabcd1234.html`
5. Save the file at the root of your project: `/yourdomain.com/googleabcd1234.html`
6. Commit and push (Vercel auto-deploys)
7. Wait ~30s for deploy
8. Click **Verify** in GSC

### Submit the sitemap

In GSC → **Sitemaps** → enter `sitemap.xml` → Submit.

It'll likely show "Couldn't fetch" initially with empty "Last read". This is
**GSC placeholder text, not an actual error**. Google takes hours to days to
process new sitemap submissions.

### Manually request indexing of priority pages

Sitemap-driven crawling takes ~7-14 days. To skip the queue, use the
**URL Inspection** tool (top search bar in GSC):

1. Paste a page URL
2. Wait for inspection (5-10 seconds)
3. Click **"Request Indexing"**

GSC limits this to ~10 URLs per day per property. Spread your top pages over
2-3 days.

Realistic timeline:
- **Day 1-3:** Google crawls the site
- **Day 3-14:** First pages appear for branded queries
- **Week 2-4:** Long-tail keywords start ranking
- **Month 2-6:** Competitive keywords start moving

---

## Phase 5 — Bing (5 minutes, often skipped)

1. https://www.bing.com/webmasters/
2. Sign in with Microsoft account
3. Add your domain
4. Easiest verification: import from Google Search Console (one click)
5. Submit `sitemap.xml`

Bing has ~5% global market share but a higher % of older / desktop users —
worth the 5 minutes.

---

## Phase 6 — Analytics (optional but recommended)

### Plausible / Fathom (privacy-friendly, paid)
Add a `<script>` tag in `<head>`. About 1KB. No GDPR cookie banner needed.

### Google Analytics 4 (free, GDPR-heavy)
Add the gtag snippet. Requires a cookie banner in EU/UK.

### Vercel Analytics (built in)
Toggle on in Vercel project settings. Sample-based, no script needed for
basic stats. Hobby plan limits data retention.

For a static SEO site, GSC is the primary "analytics" — it tells you what
queries are bringing traffic. Page-view analytics are secondary.

---

## Troubleshooting

### "Couldn't fetch sitemap" in GSC
- Check the sitemap URL matches your property exactly (bare domain vs www)
- Wait 24-48h. The status updates lag the actual fetch.
- Remove and re-submit if it's still red after 48h.

### Favicon shows generic globe in search results
- New domains take 1-3 weeks for Google's favicon crawler to update
- Make sure `/favicon.ico` is reachable (HTTP 200)
- Make sure `<link rel="icon">` is in every page's `<head>`
- See `make_favicons.py` for the full set
- This is a wait-and-see issue, not something you can force

### PageSpeed score lower in production than locally
- Production uses Vercel's edge cache. First request to a POP after idle is "cold" — can add 500-1000ms
- Lighthouse variance: 4 of 5 runs at 100, 1 run at 99 is normal
- Real User Metrics (CrUX) average across all visits — these stabilise after ~28 days

### Site live but not appearing in Google search
- Check Search Console: is the page indexed? (URL Inspection)
- Has Google had time to crawl? (Days to weeks for a new site.)
- Are there inbound links? (Even one social share helps.)
