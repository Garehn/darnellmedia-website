# Voice spec — five files

These five files collectively define how the writer talks. Spend more time
here than anywhere else in `inputs/`. The single biggest difference between
"AI-generated content" and "this sounds like a real person" is whether
these files exist and are followed.

---

## How to fill them out

For each file, **rewrite the whole thing** for your project. Don't just
swap a couple of names — the structure, examples, and rules need to match
your brand.

---

## File-by-file

### `voice.md`
The writer as a person. Their background, how they sound, what words they
use, what words they never use, formatting rules, and the deal-breaker
section: **"Tells that it's AI-written"**.

The "tells" list is what Claude re-reads after writing each page. If the
draft contains anything from that list, the paragraph gets rewritten.

### `humour.md`
Whether the writing should be funny, what kind of humour fits, what to avoid.
If your brand is serious (medical, legal, finance, B2B), set humour to "off"
at the top of the file — Claude will skip jokes and focus on warmth.

If humour is "on", be specific about what the humour is. Dry asides? Pop
culture references? Self-deprecation? Industry observations? Vague "be funny"
instructions produce vague humour.

### `stats.md`
Real numbers your writer can drop into copy with zero rounding. Pricing
tables, response times, jobs completed, customer counts, percentages, dates.
Include the rule **"never round, never invent"** at the bottom.

This file matters more than people expect. The difference between
"affordable pricing" (bad) and "$149 flat" (good) is whether you've
written the numbers down once, in one place, before writing the copy.

### `stories.md`
Recurring anecdotes the writer can use. Real stories from the business with
names anonymised. The rule that ships at the bottom: **one story per post,
never invent new ones.**

If you don't have stories yet, write down 5–10 things that happen in your
business. Real situations. The format: the bones of the story (who, what,
when, where), then "Use this when:" describing which post types it fits.

### `opinions.md`
Strong, specific takes your brand holds. The opposite of generic content.
Examples in the source kit are about plumbing — yours will be about your
niche.

Each opinion should be backed by a number or a story. "We think X is
better than Y" is empty; "X costs $800/year, Y costs $150, payback is
4 years" is an opinion that survives scrutiny.

---

## Field-tested rules (from the source project)

These applied across every page and improved the output massively. Worth
keeping unless your brief explicitly overrides them.

- **Short sentences.** Mostly under 18 words.
- **One idea per sentence.** If you need "and" twice, split.
- **Start with the answer.** Then add context. Never the other way around.
- **Real numbers over adjectives.** Not "very fast" — say "under 60 minutes."
- **Tell people when NOT to hire/buy/come.** This is the single biggest voice
  tell. Generic AI content never does it. Real humans do it constantly.

---

## Don't

- Don't share these files publicly — they're your brand DNA
- Don't outsource writing them to an LLM. Have a real person familiar with
  your brand write them once. Iterate.
- Don't skip the "Tells that it's AI-written" list. It's a force multiplier.
