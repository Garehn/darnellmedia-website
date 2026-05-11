"""SEO Sydney — the spine pillar page."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_faq, render_related, render_cta_block,
)

SLUG = "seo-sydney"
TITLE = "SEO Sydney: Honest, Flat-Priced SEO for Sydney Businesses"
DESCRIPTION = (
    "Plain-spoken SEO Sydney guide and pricing. Flat $1,200 audits, retainers from $1,800/mo, "
    "AEO/GEO included. Built for Sydney tradies and home services."
)

FAQS = [
    (
        "How long does SEO take to work in Sydney?",
        "For a site with existing authority and a clean technical foundation, expect "
        "movement inside 8 to 12 weeks. For a brand-new domain, plan 6 to 12 months for "
        "meaningful rankings. Local SEO with strong GBP fundamentals moves faster than "
        "open-category SEO."
    ),
    (
        "Is SEO worth it for a Sydney small business?",
        "Yes, if three conditions are true. Your service area is local enough that you "
        "can rank for it. Your site converts at 1 per cent or better today. Your total "
        "SEO budget is at least $1,800 per month. If any of those is off, fix that first."
    ),
    (
        "What is the difference between SEO and Google Ads?",
        "Ads buy you traffic for as long as you pay. SEO builds an asset that keeps "
        "ranking after you stop. Ads are right when you need leads next week. SEO is "
        "right when you can wait three to six months and want lower cost per lead long "
        "term. Most growing businesses do both."
    ),
    (
        "How is Darnell Media different from bigger Sydney SEO agencies?",
        "Three things. Flat pricing, so we cannot stretch the work. Six-month maximum "
        "contracts, so we have to earn the renewal. AEO and GEO included as standard, "
        "because 2018 SEO is not the same as 2025 SEO and pretending otherwise costs "
        "clients rankings."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header">
      <h1>SEO Sydney without the comprehensive digital marketing solution</h1>
    </header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Most Sydney SEO money is wasted on retainers that produce meetings instead of rankings.
        The cheapest, highest-ROI move for 90 per cent of Sydney service businesses is GBP and
        on-page fixes. The audit tells you which one you are. The retainer follows the audit,
        not the other way around.
      </p>
    </aside>

    <nav class="toc" aria-label="On this page">
      <p class="toc__heading">On this page</p>
      <ol>
        <li><a href="#how-sydney-seo-works">How Sydney SEO actually works</a></li>
        <li><a href="#what-it-costs">What SEO costs in Sydney</a></li>
        <li><a href="#how-long">How long it takes</a></li>
        <li><a href="#what-good-looks-like">What good Sydney SEO looks like</a></li>
        <li><a href="#aeo-and-geo">AEO and GEO in 2025</a></li>
        <li><a href="#when-not-to-hire-us">When not to hire us</a></li>
        <li><a href="#how-we-work">How we work</a></li>
        <li><a href="#faq">Frequently asked</a></li>
      </ol>
    </nav>

    <h2 id="how-sydney-seo-works">How Sydney SEO actually works</h2>
    <p>
      Sydney is the most competitive SEO market in Australia. The big agencies sell five-figure
      monthly retainers to enterprise. The cheap agencies sell $400 packages that buy you four
      blog posts a year. Most small businesses sit awkwardly between the two, paying $2,500 a
      month for SEO that produces meetings instead of rankings.
    </p>
    <p>
      The work that moves rankings for a Sydney service business is unsexy. Claim and verify
      Google Business Profile. Set service areas correctly. Add the services you actually offer.
      Audit the site for the dozen technical issues that block crawling. Write four to eight
      service pages that target the queries your customers actually type. Build a handful of
      relevant links. Measure what changed.
    </p>
    <p>
      That is it. There is no twelfth secret step. The agencies charging $5,000 a month for "a
      comprehensive growth strategy" know this. They charge that much because their clients
      do not.
    </p>

    <h2 id="what-it-costs">What SEO costs in Sydney</h2>
    <p>
      Our pricing is flat, AUD, all-in, GST included. No setup fees. No tiered packages with
      hidden seat counts. <a href="/seo-packages-sydney/">The full price list is on one page</a>
      so you can compare without an email exchange.
    </p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Service</th><th>Price</th><th>What you get</th></tr>
        </thead>
        <tbody>
          <tr><td>Discovery call</td><td><strong>Free</strong></td><td>20 minutes. Fit check or audit scope.</td></tr>
          <tr><td>SEO audit</td><td><strong>$1,200</strong></td><td>Written report in 7 business days. Technical, on-page, content, GBP, backlinks, AEO/GEO readiness.</td></tr>
          <tr><td>Local SEO retainer</td><td><strong>From $1,800/mo</strong></td><td>GBP optimisation, on-page work, 4 content briefs/mo, monthly reporting.</td></tr>
          <tr><td>Full SEO retainer</td><td><strong>From $2,800/mo</strong></td><td>Local plus link building, 8 content briefs/mo, AEO/GEO optimisation.</td></tr>
          <tr><td>AEO/GEO add-on</td><td><strong>+ $800/mo</strong></td><td>Bolt onto either retainer. AI Overviews, ChatGPT, Perplexity citations.</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      Audit fees credit in full toward the first month of any retainer if you sign within 14 days.
      That is the only "deal" we run. We do not discount retainers.
    </p>

    <h2 id="how-long">How long it takes</h2>
    <p>
      The honest answer is: it depends on where you start. Two starting points, two timelines.
    </p>
    <ul class="checklist">
      <li><strong>Existing site, some authority, clean foundation:</strong> first ranking
        movements visible in 8 to 12 weeks. Top 10 placements on target keywords by month
        4 to 6. Compounding traffic from month 6 onward.</li>
      <li><strong>Brand-new domain, zero authority:</strong> 6 to 12 months before
        meaningful traffic. The first 90 days are mostly technical and content groundwork.
        SEO is the wrong first move if you need leads in the next two months. Spend on Google
        Ads instead, then layer SEO once you know what converts.</li>
    </ul>

    <h2 id="what-good-looks-like">What good Sydney SEO looks like, in numbers</h2>
    <p>
      Pulling realistic ranges from the keyword research we use to scope retainers. These are
      framed as "what good looks like" milestones, not promises. Starting point and competitive
      landscape both matter.
    </p>
    <div class="stat-strip">
      <div class="stat-strip__item">
        <p class="stat-strip__num">Month 3</p>
        <p class="stat-strip__label">GBP fully optimised, technical fixes shipped, 1-3 keywords inside top 50</p>
      </div>
      <div class="stat-strip__item">
        <p class="stat-strip__num">Month 6</p>
        <p class="stat-strip__label">5+ keywords inside top 30, 1-2 inside top 10, 500+ monthly organic visits</p>
      </div>
      <div class="stat-strip__item">
        <p class="stat-strip__num">Month 12</p>
        <p class="stat-strip__label">15+ keywords inside top 10, 2,000+ monthly organic visits, measurable lead lift</p>
      </div>
      <div class="stat-strip__item">
        <p class="stat-strip__num">Month 18-24</p>
        <p class="stat-strip__label">30+ keywords inside top 10, multi-suburb dominance, AEO citations</p>
      </div>
    </div>

    <h2 id="aeo-and-geo">AEO and GEO: why 2025 SEO is not 2018 SEO</h2>
    <p>
      AI Overviews appear on roughly 30 per cent of Google searches as of late 2024 (source:
      SE Ranking and BrightEdge studies, dated November 2024). On queries where they appear,
      click-through on the top organic result drops by 30 to 50 per cent. That means a #1
      ranking in 2025 produces materially fewer clicks than the same ranking did in 2023.
    </p>
    <p>
      The page that gets cited in the AI Overview is not always the page that ranks #1. AEO
      rewards pages that answer fast, in the first paragraph, with citable statistics and
      tight structured data. Sometimes the #6 page wins the citation. Sometimes a page that
      did not rank at all does.
    </p>
    <p>
      <a href="/answer-engine-optimisation/">The AEO pillar page covers what to actually do</a>.
      Short version: every page we work on gets AEO-shaped from day one, because retrofitting
      it later costs more than building it right.
    </p>

    <div class="callout callout--info">
      <h3>One strong opinion</h3>
      <p>
        Local SEO beats national SEO for 90 per cent of Sydney service businesses. If your
        service area is the Northern Beaches, stop trying to rank for "plumber Sydney" and
        start ranking for "plumber Belrose", "plumber Frenchs Forest", "plumber Forestville".
        Three suburb-targeted pages will out-earn one generic Sydney page, every time.
      </p>
    </div>

    <h2 id="when-not-to-hire-us">When not to hire us</h2>
    <p>
      We say no often enough that it surprises people. Four scenarios where we will tell you
      SEO is not the right move yet:
    </p>
    <ul class="warnlist">
      <li><strong>Your site is less than six months old.</strong> Domain authority takes
        time. Spend on Google Ads to test conversion, then SEO once you have data.</li>
      <li><strong>Your conversion rate is under 1 per cent.</strong> More traffic to a site
        that does not convert is more wasted spend. Fix the site first.</li>
      <li><strong>Your total SEO budget is under $1,800 per month.</strong> Below that
        floor, the work is too thin to matter in Sydney. Be honest about budget before
        starting.</li>
      <li><strong>Your bottleneck is not traffic.</strong> Sometimes the issue is that you
        do not answer the phone, or your proposals take three days, or your prices are out
        of line. Fix those first.</li>
    </ul>

    <h2 id="how-we-work">How we work</h2>
    <p>
      The order matters and is not negotiable.
    </p>
    <ol>
      <li><strong>Discovery call</strong> (free, 20 minutes). We learn the business and you
        learn whether we are the right fit.</li>
      <li><strong>Audit</strong> ($1,200, 7 business days). Written report with prioritised
        recommendations. Yours to keep whatever you do next.</li>
      <li><strong>Retainer proposal</strong> (only if the audit says SEO is the right move).
        Scope tied to the audit findings. Six-month term maximum.</li>
      <li><strong>Execution</strong>. Technical fixes first. Then on-page work. Then content.
        Then links. AEO/GEO baked in throughout.</li>
      <li><strong>Monthly reporting</strong>. The same keyword list every month. Same KPIs.
        No moving goalposts.</li>
    </ol>
    <p>
      That is the whole process. <a href="/seo-services-sydney/">The services page breaks
      down what each phase includes</a>.
    </p>

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">
      {render_inline(FAQS)}
    </div>

    {render_cta_block()}

    <h2>Related reading</h2>
    <div class="card-grid">
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The cheapest, highest-ROI lever for any Sydney service business.</p></a>
      <a class="card" href="/seo-packages-sydney/"><h3>SEO Packages and Pricing</h3><p>Flat AUD pricing. No setup fees. No surprises.</p></a>
      <a class="card" href="/answer-engine-optimisation/"><h3>Answer Engine Optimisation</h3><p>Rank inside AI Overviews and get cited by ChatGPT.</p></a>
    </div>
  </div>
</article>
"""


def render_inline(faqs):
    out = []
    for q, a in faqs:
        out.append(
            f'<details><summary>{q}</summary><div class="faq__body"><p>{a}</p></div></details>'
        )
    return "\n      ".join(out)


def schema_graph():
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney")]
    article = blog_posting_schema(
        slug=SLUG,
        headline=TITLE,
        description=DESCRIPTION,
        about=service_schema(
            name="SEO Sydney",
            description="SEO services for Sydney businesses",
            service_type="SEO",
            area="Sydney",
        ),
    )
    return [
        breadcrumb_schema(crumbs),
        article,
        faq_page_schema(FAQS),
    ]
