"""Homepage."""

from .template import (
    SITE_URL,
    PHONE_DISPLAY,
    PHONE_RAW,
    breadcrumb_schema,
    faq_page_schema,
    blog_posting_schema,
)


SLUG = ""
TITLE = "Sydney SEO Agency for Tradies and AEO/GEO | Darnell Media"
DESCRIPTION = (
    "Sydney SEO agency for tradies and home services. Flat $1,200 audits, "
    "no contracts longer than six months, AEO and GEO included. Belrose-based."
)


FAQS = [
    (
        "How much does SEO cost in Sydney?",
        "Our flat $1,200 audit is the entry point. Retainers start at $1,800 per month for "
        "local SEO and $2,800 per month for full SEO with link building. AEO and GEO add "
        "$800 per month. All flat, all-in, no setup fees, no contracts longer than six months. "
        "If your total SEO budget is below $1,800 per month, we will tell you that honestly."
    ),
    (
        "Do you only work with tradies?",
        "Tradies and home-service businesses are where we are sharpest, because that is the "
        "category we built the agency around. We take other small-to-mid businesses across "
        "Sydney too, as long as we think we can move the needle. Industries we will not take: "
        "gambling, vape, payday loans, anything a regulator has flagged."
    ),
    (
        "Are you a Sydney SEO agency or do you work nationally?",
        "Both. We are based at 6 Lyndhurst Way, Belrose, on Sydney's Northern Beaches. "
        "Most clients are in Sydney metro. We take remote retainers across Australia where "
        "the brief makes sense. National expansion to Melbourne, Brisbane and Perth is on "
        "our 24-month roadmap, not a product we sell yet."
    ),
    (
        "What is AEO and why should I care?",
        "AEO stands for Answer Engine Optimisation. It is the practice of structuring your "
        "pages so AI Overviews, ChatGPT, and Perplexity cite you when they answer questions "
        "in your space. AI Overviews appear on roughly 30 per cent of Google searches as of "
        "late 2024 and drop click-through on the top organic result by 30 to 50 per cent. "
        "If you are not optimising for AEO, you are losing clicks even when you rank #1."
    ),
    (
        "How fast will I see results?",
        "Honest answer: it depends on where you start. A site with 200 referring domains "
        "and a clean technical foundation can move within 8 to 12 weeks. A brand-new domain "
        "with zero authority will take 6 to 12 months for meaningful rankings. The audit "
        "tells you which one you are."
    ),
]


def body() -> str:
    return f"""
<section class="hero">
  <div class="container container--wide">
    <span class="hero__pill">Sydney SEO &middot; AEO &middot; GEO</span>
    <h1>SEO that ranks tradies, not your agency.</h1>
    <p class="lead">
      Darnell Media is a Sydney SEO agency for tradies and home services. Flat $1,200 audits.
      Retainers from $1,800 per month. No contracts longer than six months. AEO and GEO included.
      Founder still answers the phone.
    </p>
    <div class="hero__ctas">
      <a class="btn btn--primary btn--lg" href="/contact/">Book a discovery call</a>
      <a class="btn btn--ghost btn--lg" href="/seo-packages-sydney/">See what it costs</a>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="stat-strip" role="list">
      <div class="stat-strip__item" role="listitem">
        <p class="stat-strip__num">$1,200</p>
        <p class="stat-strip__label">Flat audit fee, refunded if we are not the right fit</p>
      </div>
      <div class="stat-strip__item" role="listitem">
        <p class="stat-strip__num">7 days</p>
        <p class="stat-strip__label">Audit report turnaround, in writing</p>
      </div>
      <div class="stat-strip__item" role="listitem">
        <p class="stat-strip__num">6 mo</p>
        <p class="stat-strip__label">Maximum retainer length. Then month-to-month.</p>
      </div>
      <div class="stat-strip__item" role="listitem">
        <p class="stat-strip__num">~30%</p>
        <p class="stat-strip__label">Of Google searches show AI Overviews. We optimise for both.</p>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <span class="section-eyebrow">Why we exist</span>
    <h2>Most SEO retainers waste your money. We built Darnell Media to not.</h2>
    <p>
      Garehn started Darnell Media in 2025 after watching one too many tradies get charged
      $4,000 a month for a Wix template and four blog posts a year. The honest version of an
      SEO retainer is 70 per cent execution, 20 per cent measurement, 10 per cent reporting.
      Anything else is busywork billing.
    </p>
    <p>
      So we built the agency the other way around. Audit before retainer, so you know what
      you are buying. Flat pricing, so we cannot stretch the work. Six months maximum, so we
      have to earn the renewal. AEO and GEO included as standard, because pretending search
      did not change in 2024 is how clients lose ground.
    </p>
  </div>
</section>

<section>
  <div class="container">
    <span class="section-eyebrow">What we do</span>
    <h2>Three things, done properly.</h2>
    <div class="card-grid">
      <a class="card" href="/local-seo-sydney/">
        <p class="card__tag">Local SEO</p>
        <h3>Local SEO Sydney</h3>
        <p>Google Business Profile, service-area pages, citations, reviews. The cheapest highest-ROI move in local search.</p>
      </a>
      <a class="card" href="/seo-services-sydney/">
        <p class="card__tag">Full-stack SEO</p>
        <h3>Technical, on-page, content</h3>
        <p>Fix the foundations, build the pages people actually search for, measure what changed.</p>
      </a>
      <a class="card" href="/answer-engine-optimisation/">
        <p class="card__tag">New for 2025</p>
        <h3>AEO and GEO</h3>
        <p>Rank inside AI Overviews, ChatGPT, and Perplexity. Most agencies still pretend this does not matter.</p>
      </a>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <span class="section-eyebrow">Who we work with</span>
    <h2>SEO built for the trades.</h2>
    <p>
      We are sharpest with tradies and home-service businesses, because that is the category
      we built around. Each vertical page below has the search-volume data, the competitive
      picture, and what we would actually do.
    </p>
    <ul class="link-list">
      <li><a href="/seo-for-tradies/">SEO for Tradies</a></li>
      <li><a href="/seo-for-plumbers/">SEO for Plumbers</a></li>
      <li><a href="/seo-for-electricians/">SEO for Electricians</a></li>
      <li><a href="/seo-for-vets/">SEO for Vets</a></li>
      <li><a href="/seo-for-pest-control/">SEO for Pest Control</a></li>
      <li><a href="/seo-consultant-sydney/">SEO Consultant Sydney</a></li>
    </ul>
  </div>
</section>

<section>
  <div class="container">
    <div class="callout callout--info">
      <h2>When NOT to hire us</h2>
      <p>
        We say no a lot. If your site is less than six months old, SEO is not the right
        first move. If your conversion rate is under 1 per cent, fix the site before
        driving more traffic to it. If your total SEO budget is under $1,800 per month for
        a Sydney service area, the work is not meaningful and we will tell you so.
      </p>
      <p>
        We would rather refund a $1,200 audit than retain a client we cannot help. Ask the
        landscaper we sent back to fix his Wix hosting.
        <!-- TODO: replace with real client story -->
      </p>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <span class="section-eyebrow">Pricing</span>
    <h2>Flat, AUD, all-in.</h2>
    <p>
      No setup fees. No tiered packages with hidden seat counts. No contracts past six months.
      Pricing lives on one page so you can compare without an email exchange.
    </p>
    <p><a href="/seo-packages-sydney/">See the full price list and what each tier includes.</a></p>
  </div>
</section>

<section>
  <div class="container">
    <h2>Frequently asked</h2>
    <div class="faq">
      {render_inline_faq(FAQS)}
    </div>
  </div>
</section>

<section>
  <div class="container">
    <aside class="cta-block">
      <h2>Free discovery call. Twenty minutes.</h2>
      <p>
        We work out if we can help. If we cannot, we say so and tell you who can.
        Worst case you waste 20 minutes. Could be worse, could be a six-month contract.
      </p>
      <div class="cta-block__ctas">
        <a class="btn btn--primary btn--lg" href="/contact/">Book a discovery call</a>
        <a class="btn btn--ghost btn--lg" href="tel:{PHONE_RAW}">Call {PHONE_DISPLAY}</a>
      </div>
    </aside>
  </div>
</section>
"""


def render_inline_faq(faqs):
    """Local helper — emits the FAQ details list without the heading."""
    out = []
    for q, a in faqs:
        out.append(
            f'<details><summary>{q}</summary>'
            f'<div class="faq__body"><p>{a}</p></div></details>'
        )
    return "\n      ".join(out)


def schema_graph():
    # Home schema: BreadcrumbList + FAQPage. WebSite/Organization/LocalBusiness/Person are added automatically by render_page.
    return [
        breadcrumb_schema([("/", "Home")]),
        faq_page_schema(FAQS),
    ]
