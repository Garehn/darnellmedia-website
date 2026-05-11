# Preview deploys — sharing drafts before they go live

Two patterns for sharing a draft batch of pages before merging to
production. Pick by audience.

| Pattern | When | Effort | Public? | Auth? |
|---|---|---|---|---|
| Vercel preview branch | You want preview-quality (same CDN, same headers, same redirects) | 5 min | No | Vercel SSO by default |
| GitHub Pages public sub-repo | You want to share with another AI / non-Vercel user | 10 min | Yes | None |

---

## Pattern A — Vercel preview branch

Push the draft on a non-`main` branch. Vercel auto-builds it to a unique
hostname like `<project>-git-<branch>-<scope>.vercel.app`.

### One-time

In `vercel.json` on the **branch only**, remove the redirect that hides
your draft folder:

```json
{
  "headers": [
    { "source": "/blog-queue/(.*)",
      "headers": [{ "key": "x-robots-tag", "value": "noindex, nofollow" }] }
  ]
  // no `redirects` block on the preview branch
}
```

Keep the `noindex` header so Google can't index the preview even if
auth is off. Production keeps both headers + redirects.

### Per batch

```bash
git checkout -b previews
git add blog-queue/ && git commit -m "Preview batch"
git push -u origin previews
```

Find the URL in your Vercel dashboard under the project's
"Deployments" — look for the row labelled `previews`.

### Auth

Vercel adds SSO protection to preview deploys by default. To disable:
**Settings → Deployment Protection → Vercel Authentication →
`Disabled`** (or `Only Production Deployments`). The `noindex` header
still keeps Google out.

---

## Pattern B — GitHub Pages public sub-repo

For sharing with another LLM, a non-Vercel user, or a tool that hits
URLs directly (no SSO bypass). Free, fast, no auth.

### One-time

Create a separate **public** repo dedicated to previews:

```bash
mkdir my-blog-previews && cd my-blog-previews
# Copy the queue pieces in (without PNG masters — webp + jpg only):
cp -r ../my-site/blog-queue/01-*-* .
find . -name "*.png" -delete
echo "User-agent: *" > robots.txt
echo "Disallow: /" >> robots.txt
touch .nojekyll          # CRITICAL — see below
git init -q -b main
git add -A && git commit -q -m "Initial preview drop"
gh repo create my-blog-previews --public --source=. --push
gh api -X POST /repos/<user>/my-blog-previews/pages \
  -f "source[branch]=main" -f "source[path]=/"
```

Pages URL: `https://<user>.github.io/my-blog-previews/`. Build takes
~60s on first deploy.

### Per batch

`cp` the new HTML over, commit, push. GitHub Pages rebuilds in ~30s.

---

## The `.nojekyll` gotcha

GitHub Pages **runs Jekyll by default**, which silently strips any
folder or file whose name starts with `_` (e.g. `_assets/`,
`_layouts/`). If your hero / inline images live in `_assets/` they'll
404 and your pages will render with broken images.

**Fix:** an empty `.nojekyll` file at the repo root disables Jekyll
processing entirely.

```bash
touch .nojekyll
git add .nojekyll && git commit -m "Disable Jekyll for _assets"
git push
```

After ~30-60s, all `_assets/*` URLs return 200. Make this part of every
new preview repo's first commit so you don't get caught.

---

## `robots.txt` for preview repos

Always block crawlers on previews. They're duplicate content of your
production site (or pre-production drafts that shouldn't compete with
the eventual published version).

```
User-agent: *
Disallow: /
```

The `noindex` HTML header is a second line of defence; `robots.txt`
prevents Google fetching them in the first place.

---

## Decision tree

- **Need to share with another AI / external reviewer?** → Pattern B.
- **You're the only reviewer and you trust Vercel's SSO?** → Pattern A,
  no need to make anything public.
- **You'll iterate often (10+ batches)?** → Pattern A, automate the
  branch push as part of your generation routine.
