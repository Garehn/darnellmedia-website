"""How to Rank on Google — informational pillar (Phase 2)."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "how-to-rank-on-google"
TITLE = "How to Rank on Google in 2025: A Plain-English Guide for Small Businesses"
DESCRIPTION = (
    "Step-by-step guide to ranking on Google for a small Australian business. "
    "GBP, on-page, content, AEO. Real timelines, no shortcuts."
)

FAQS = [
    (
        "How long does it really take to rank on Google?",
        "For local queries with a clean technical foundation and decent "
        "domain authority: 8-12 weeks for first ranking movements, 4-6 "
        "months for top-10 placements. For a brand-new domain with no "
        "authority: 6-12 months. The honest answer depends heavily on "
        "where you start."
    ),
    (
        "Can I rank on Google for free?",
        "Yes, if your time is free. The core ranking moves (GBP "
        "optimisation, on-page work, reviews, citations) are doable "
        "without paid tools. Where money usually enters: better keyword "
        "research tools (Ahrefs, Semrush, Mangools), backlink outreach "
        "time, and content writing if you cannot or will not do it "
        "yourself."
    ),
    (
        "What about Google ranking factors like backlinks and dwell time?",
        "Backlinks still matter, but matter less than they did in 2018. "
        "For local trade businesses, reviews and GBP completeness "
        "outweigh backlinks materially. Dwell time and \"user signals\" "
        "are debated but designing pages people actually read is good "
        "regardless."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/how-to-rank-on-google/", "How to Rank on Google")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>How to rank on Google in 2025: the plain version</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        For 80% of small Australian businesses, ranking on Google is six
        unsexy steps in a specific order: claim and optimise GBP, fix
        technical basics, target the right keywords, write a handful of
        good pages, get reviews, build a few relevant links. Most agencies
        skip steps 1 and 2 and start at step 4. That is why they get
        nowhere.
      </p>
    </aside>

    <nav class="toc" aria-label="On this page">
      <p class="toc__heading">On this page</p>
      <ol>
        <li><a href="#step1">Step 1: Google Business Profile</a></li>
        <li><a href="#step2">Step 2: Technical basics</a></li>
        <li><a href="#step3">Step 3: Pick the right keywords</a></li>
        <li><a href="#step4">Step 4: Write a handful of good pages</a></li>
        <li><a href="#step5">Step 5: Reviews and citations</a></li>
        <li><a href="#step6">Step 6: Backlinks (last, not first)</a></li>
        <li><a href="#aeo">Bonus: AEO and AI Overviews</a></li>
      </ol>
    </nav>

    <h2 id="step1">Step 1: Claim and optimise Google Business Profile</h2>
    <p>
      The single biggest lever for any local business. Most businesses
      have a partly-set-up GBP and leave 30-50% of potential local
      rankings on the table.
    </p>
    <ul class="checklist">
      <li>Verify the listing (and merge any duplicates Google has
        auto-created)</li>
      <li>Set primary category to the closest match</li>
      <li>Add every relevant secondary category (most businesses can
        legitimately add 3-6)</li>
      <li>Set service area to actual suburbs served, not "Sydney" globally</li>
      <li>List every service by its real name, not generic categories</li>
      <li>Upload 20+ current photos of work, premises, team</li>
      <li>Post monthly: offers, news, recent jobs</li>
      <li>Respond to every review within 7 days</li>
    </ul>
    <p>
      None of this requires money. All of it moves local rankings.
    </p>

    <h2 id="step2">Step 2: Fix the technical basics</h2>
    <p>
      The unsexy second step. The fixes that remove the ceiling on
      everything else.
    </p>
    <ul class="checklist">
      <li>Site is mobile-friendly (use Google's PageSpeed Insights)</li>
      <li>Core Web Vitals pass on mobile (LCP, INP, CLS)</li>
      <li>robots.txt allows crawling and points to sitemap.xml</li>
      <li>sitemap.xml lists every page you want indexed</li>
      <li>Schema markup on at least the homepage and contact page</li>
      <li>HTTPS enabled (no mixed content warnings)</li>
      <li>No duplicate or conflicting canonical tags</li>
      <li>Page titles and meta descriptions unique on every page</li>
    </ul>
    <p>
      Most of these are one-time fixes. If your site is hosted on a modern
      builder (Squarespace, Wix, Webflow, Shopify) they should be in
      reasonable shape already.
    </p>

    <h2 id="step3">Step 3: Pick the right keywords</h2>
    <p>
      The keyword you target determines whether the work matters. Three
      tests for a good target.
    </p>
    <ol>
      <li><strong>Real search volume</strong>. At least 50 monthly
        Australian searches for a local query, 200+ for a national one.
        Anything less is not worth a page.</li>
      <li><strong>Matching intent</strong>. The query and your offering
        need to match. "Plumbing services" matches "we do plumbing".
        "How does plumbing work" does not.</li>
      <li><strong>Beatable competition</strong>. Look at the current top
        3. If they are all national chains with 10,000 backlinks,
        rethink. If they are small local businesses with thin pages,
        you can compete.</li>
    </ol>

    <h2 id="step4">Step 4: Write a handful of good pages, not many bad ones</h2>
    <p>
      The biggest waste of SEO budget in Australia is the "4 blog posts a
      month" retainer. Most of those posts rank for nothing and are read
      by nobody. The pattern that works is to write fewer pages, deeper.
    </p>
    <ul class="checklist">
      <li>One page per keyword cluster, 800-2,000 words</li>
      <li>Direct answer to the query in the first 50 words</li>
      <li>Heading structure that lets readers skim (H2/H3)</li>
      <li>FAQ section with 3-5 real questions</li>
      <li>Internal links to 2-3 related pages</li>
      <li>One concrete example or story per page</li>
      <li>Schema markup matching the page type</li>
    </ul>

    <h2 id="step5">Step 5: Reviews and citations</h2>
    <p>
      For local businesses, reviews are a top-3 ranking factor and a
      conversion factor in their own right. Get into a routine: ask every
      happy customer, reply to every review. Avoid review-buying schemes;
      they get caught and the penalty is severe.
    </p>
    <p>
      Citations (NAP mentions on AU directories) matter less than they
      did but are still worth maintaining. The directories that pass
      authority in 2025: HomeImprovementPages, Yellow Pages AU,
      TrueLocal, industry-specific directories. Skip pay-to-list
      directories with no organic traffic.
    </p>

    <h2 id="step6">Step 6: Backlinks (last, not first)</h2>
    <p>
      Backlinks still matter, but they matter less than they did and
      they matter much less than steps 1-5. The agencies that lead with
      backlink building usually skipped the earlier steps. Earn links
      naturally where possible: digital PR, guest posts on industry
      blogs, partner sites, supplier mentions, podcast appearances.
    </p>
    <p>
      Do not buy links. Do not run private blog networks. The recovery
      from a manual action is months of work and the loss is months of
      rankings. The risk is not worth the lift.
    </p>

    <h2 id="aeo">Bonus: optimise for AI Overviews too</h2>
    <p>
      In 2025, ranking on Google's blue links is half the job. The other
      half is getting cited in AI Overviews, ChatGPT, and Perplexity. The
      good news: most of the work that ranks pages also makes them
      AEO-friendly. Direct-answer first paragraphs, FAQ schema,
      citable statistics, structured data. <a href="/answer-engine-optimisation/">The AEO pillar covers the
      detail</a>.
    </p>

    {render_cta_block(
      headline="Want help applying this?",
      body=(
        "The free 20-minute discovery call works out where you are and "
        "where the highest-leverage next move is. If it is DIY, we say "
        "so. If it is a retainer, we scope it. Either way, useful."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-vs-google-ads/"><h3>SEO vs Google Ads</h3><p>The channel-mix decision.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The Map Pack detail.</p></a>
      <a class="card" href="/answer-engine-optimisation/"><h3>AEO pillar</h3><p>How to rank inside AI Overviews.</p></a>
    </div>
  </div>
</article>
"""


def _faq(faqs):
    return "\n      ".join(
        f'<details><summary>{q}</summary><div class="faq__body"><p>{a}</p></div></details>'
        for q, a in faqs
    )


def schema_graph():
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/how-to-rank-on-google/", "How to Rank on Google")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(slug=SLUG, headline=TITLE, description=DESCRIPTION),
        faq_page_schema(FAQS),
    ]
