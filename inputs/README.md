# inputs/

This is where the human work goes. Claude can build a site from these inputs;
it cannot infer them. Spend time getting these right.

---

## What goes in each file

### `brief.md`
**One page describing the project.** Domain, niche, audience, what NOT to build,
any business model context. Treat it like a creative brief for a freelancer.

Required to fill in. Use `brief.md` as a starting template.

---

### `keywords.csv`
**The keyword strategy as data.** One row per page you want built, with the
target keyword cluster, search volume, and difficulty.

Format:

```csv
page_slug,page_tier,page_title,primary_keyword,secondary_keywords,search_volume,keyword_difficulty,intent
emergency-vet-sydney,1,Emergency vet in Sydney,sydney emergency vet,"emergency vet sydney|24 hour vet sydney",2480,24,commercial
puppy-vaccination-schedule,1,Puppy vaccination schedule Australia,puppy vaccination regime,"puppy vaccination schedule|puppy vaccination dates|vaccinations for puppies|puppy vaccinations",10500,14,informational
ringworm-in-cats,2,Ringworm in cats,ringworm in cats,"ringworm infection in cats|cat ringworm|ringworm cure for cats",4800,26,informational
```

Columns:
- `page_slug` — URL slug (lowercase, hyphens, no dates)
- `page_tier` — 1 = pillar (1500-2500 words), 2 = supporting (800-1200), 3 = utility
- `page_title` — H1 title (Claude will polish for voice)
- `primary_keyword` — the main keyword for that page
- `secondary_keywords` — additional keywords in the cluster, pipe-separated
- `search_volume` — total monthly searches for the cluster (sum of all keywords)
- `keyword_difficulty` — average KD across the cluster (0-100)
- `intent` — informational / commercial / navigational / transactional

How to get this data: Ahrefs, Semrush, Mangools, or any keyword research tool
that supports keyword clusters. The user provided one in CSV form for the
caringveterinarians project; that exact format works here.

---

### `voice/` — five files, all required

These collectively define how the writer talks. They were the single biggest
quality lever in the source project. Time spent here pays back tenfold during
writing.

Each file has a template with the structure to follow. Replace the example
content with content for your project.

**`voice.md`** — Who is writing? Sentence rhythm. Words used / never used.
Anti-patterns ("Tells that it's AI-written"). One-line summary at the bottom.

**`humour.md`** — Whether posts should be funny, what kind of humour, what to
avoid. If your brand is serious (medical, legal, finance), you can write
"humour: off, keep tone warm but professional" and skip the rest.

**`stats.md`** — Real numbers the writer can use without rounding or inventing.
Pricing, response times, jobs completed, percentages. Make them specific.

**`stories.md`** — Recurring anecdotes the writer can draw on. Real stories
from the business, named with placeholders. The rule: **one story per post,
never invent new ones.**

**`opinions.md`** — Strong, specific takes the writer holds. These are what
separate a real voice from generic AI content.

The "feel" template comes from a real plumbing business but the structure
applies to any niche. Read the existing examples then rewrite for your brand.

---

### `.env.example` → copy to `.env`

```
OPENAI_API_KEY=sk-proj-...
```

How to get one: https://platform.openai.com/api-keys (you need ~$15 credit
on the account for a 100-image run).

**Important:** `.env` should be gitignored (the kit's example `.gitignore`
already does this). Never commit it.

---

## Validation checklist before running

Before telling Claude "build this", confirm:

- [ ] `brief.md` is filled out (not the template placeholder)
- [ ] `keywords.csv` has at least 5 rows
- [ ] All 5 voice files exist and aren't placeholders
- [ ] `.env` exists with a real `OPENAI_API_KEY`
- [ ] You actually understand the niche well enough to spot bad copy

---

## What if I don't have one of these?

| Missing input | Consequence |
|---|---|
| `brief.md` | Claude will ask 3-4 clarifying questions |
| `keywords.csv` | **Stop**. The site has no spine without this. Get keyword data first. |
| voice files | Output reads like generic AI content. Fix this before building. |
| `.env` / OpenAI key | Site builds without images. Add them later. |
