"""SEO vs Google Ads — informational pillar (Phase 2)."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-vs-google-ads"
TITLE = "SEO vs Google Ads in 2025: When Each Wins for an Australian Business"
DESCRIPTION = (
    "When to invest in SEO, when to invest in Google Ads, and when to "
    "run both. Decision framework for Australian small-to-mid businesses."
)

FAQS = [
    (
        "Is SEO cheaper than Google Ads in the long run?",
        "Usually, but with a caveat. Once SEO compounds (typically 6-12 "
        "months in), cost per lead falls well below paid Ads in most "
        "categories. Before that, Ads are cheaper per lead because SEO "
        "spending is upfront work that has not yet ranked. Plan for both "
        "in the first year."
    ),
    (
        "Can I run SEO and Ads on the same keywords?",
        "Yes, and it usually helps. Brand searches in particular benefit "
        "from having both — even when you rank #1 organic, Ads above you "
        "from competitors can siphon clicks. Running Ads on your own brand "
        "name for $50/month is often the highest-ROI ad spend you can do."
    ),
    (
        "What should I spend first as a small Sydney business?",
        "Depends on your time horizon. Need leads next month: Google Ads "
        "first, with a small SEO retainer building in the background. Need "
        "to lower cost-per-lead over 12+ months: SEO first, with Ads only "
        "on the highest-intent queries until SEO ranks. Both at once is "
        "fine if budget supports it."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/seo-vs-google-ads/", "SEO vs Google Ads")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO vs Google Ads: which channel wins, and when</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        The honest answer is "both, eventually, but in the right order".
        Need leads inside 60 days: start with Google Ads. Have 6-12 months
        of patience and want lower cost-per-lead long term: start with SEO.
        Most businesses end up running both because each does something the
        other does not.
      </p>
    </aside>

    <nav class="toc" aria-label="On this page">
      <p class="toc__heading">On this page</p>
      <ol>
        <li><a href="#what-each-does">What each channel actually does</a></li>
        <li><a href="#timeline">Timeline comparison</a></li>
        <li><a href="#cost">Cost per lead, comparison</a></li>
        <li><a href="#when-seo">When SEO wins</a></li>
        <li><a href="#when-ads">When Google Ads wins</a></li>
        <li><a href="#run-both">When to run both</a></li>
      </ol>
    </nav>

    <h2 id="what-each-does">What each channel actually does</h2>
    <p>
      <strong>Google Ads</strong> buys you traffic for as long as you pay. The
      clicks start the day you launch a campaign. They stop the day you
      pause. The cost-per-click is determined by the keyword auction.
    </p>
    <p>
      <strong>SEO</strong> builds an asset. The rankings take 3-12 months to
      appear. The traffic continues after you stop paying for the work
      (slowly decaying if you stop maintaining). The cost-per-click is
      effectively zero once you rank.
    </p>
    <p>
      Neither is better. They are different shapes of investment. The right
      mix depends on time horizon, budget, and the competitive landscape
      of your category.
    </p>

    <h2 id="timeline">Timeline comparison</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th></th><th>Google Ads</th><th>SEO</th></tr></thead>
        <tbody>
          <tr><td>Week 1</td><td>Clicks flowing, conversions possible</td><td>Audit and technical fixes underway</td></tr>
          <tr><td>Month 1</td><td>Optimisation cycle, CPC stabilising</td><td>GBP fixed, early ranking movement</td></tr>
          <tr><td>Month 3</td><td>Working leads, predictable CPL</td><td>1-3 keywords inside top 50</td></tr>
          <tr><td>Month 6</td><td>Same as month 3, slightly cheaper if optimised well</td><td>5+ keywords inside top 30, 1-2 inside top 10</td></tr>
          <tr><td>Month 12</td><td>Same plateau, costs roughly flat</td><td>Compounding, CPL falling, organic share growing</td></tr>
        </tbody>
      </table>
    </div>

    <h2 id="cost">Cost per lead, roughly</h2>
    <p>
      Indicative ranges for a Sydney service business. Real numbers vary
      heavily by category.
    </p>
    <ul class="checklist">
      <li>Google Ads: $25-$120 per lead for residential trades, $40-$300 for
        higher-ticket services. Largely stable over time on a well-optimised
        account.</li>
      <li>SEO: $80-$200 per lead in the first 6 months (high because the
        spend is front-loaded). $20-$60 per lead by month 12-18 once
        rankings compound. Lower than that by month 24.</li>
    </ul>
    <p>
      The SEO cost-per-lead falls because the same $2,000/month produces
      more leads over time as more keywords rank. Ads CPL is roughly flat
      because the auction sets a floor that does not drop.
    </p>

    <h2 id="when-seo">When SEO wins</h2>
    <ul class="checklist">
      <li>Your business has a 6-24 month horizon and patient capital.</li>
      <li>Your category has high CPCs in Google Ads ($15+ per click).</li>
      <li>You want defensibility — competitors cannot bid you out of an
        organic ranking.</li>
      <li>Your conversion rate is decent (1%+) and your sales process is
        sorted.</li>
      <li>Your service area is locally defined (suburb-tail wins).</li>
    </ul>

    <h2 id="when-ads">When Google Ads wins</h2>
    <ul class="checklist">
      <li>You need leads in the next 60 days.</li>
      <li>Your business is too new to have meaningful organic authority.</li>
      <li>Your conversion rate is unproven and you want to test it
        cheaply before investing in SEO.</li>
      <li>Your category has low organic competition but high Ads
        competition (rare but it happens).</li>
      <li>You have specific lead-gen events (a launch, a seasonal peak,
        a new service rollout).</li>
    </ul>

    <h2 id="run-both">When to run both</h2>
    <p>
      Most successful businesses do. The pattern that works:
    </p>
    <ol>
      <li><strong>Months 1-6:</strong> Heavy on Ads, light on SEO retainer.
        Ads cover lead flow while SEO builds.</li>
      <li><strong>Months 6-12:</strong> Even split. SEO starts producing
        meaningful organic leads.</li>
      <li><strong>Months 12+:</strong> Reduce Ads on queries SEO now owns.
        Keep Ads on competitive head terms and on your own brand.</li>
    </ol>

    <div class="callout callout--info">
      <h3>The one opinion that matters</h3>
      <p>
        Brand-name Google Ads are almost always worth $30-$100 a month. Even
        when you rank #1 organic for your own name, competitors can bid on
        it and steal clicks above you. A tiny Ads spend on your brand
        protects that traffic. Most agencies do not bother. Most should.
      </p>
    </div>

    {render_cta_block(
      headline="We do not manage Google Ads",
      body=(
        "But we will tell you on the discovery call whether SEO or Ads "
        "should come first for your business, and refer you to two AU "
        "agencies we trust for Ads work. No referral fees."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/how-to-rank-on-google/"><h3>How to rank on Google</h3><p>The SEO side, in depth.</p></a>
      <a class="card" href="/seo-packages-sydney/"><h3>SEO Pricing</h3><p>What the SEO investment looks like.</p></a>
      <a class="card" href="/affordable-seo-sydney/"><h3>Affordable SEO Sydney</h3><p>Budget framing for small businesses.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/seo-vs-google-ads/", "SEO vs Google Ads")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(slug=SLUG, headline=TITLE, description=DESCRIPTION),
        faq_page_schema(FAQS),
    ]
