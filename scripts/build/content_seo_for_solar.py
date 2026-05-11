"""SEO for Solar — Phase 2 vertical (high CPC, growing category)."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-for-solar"
TITLE = "SEO for Solar Installers in Sydney: Battery, EV, and Solar SEO"
DESCRIPTION = (
    "How Sydney solar businesses rank for the queries that pay. Solar, "
    "battery, EV charger, system size by suburb. Map Pack and AEO tactics."
)

FAQS = [
    (
        "Should solar businesses target batteries separately?",
        "Yes. Battery storage and battery retrofits are distinct queries "
        "with distinct intent. A homeowner Googling 'solar battery [suburb]' "
        "is further down the funnel than one Googling 'solar Sydney'. Build "
        "dedicated battery pages, not just a battery section on the main "
        "solar page."
    ),
    (
        "Is solar a Google Ads market more than an SEO market?",
        "Both work. Ads dominate on the very top queries because the CPCs "
        "support it. SEO wins on suburb-specific queries and on the "
        "informational long-tail (battery payback, feed-in tariff changes, "
        "panel comparisons). Most successful solar businesses run both."
    ),
    (
        "How does the federal rebate change my SEO content?",
        "Substantially. The Small-scale Renewable Energy Scheme and "
        "state-level battery rebates change material your content needs to "
        "address: eligibility, calculator pages, what the rebate means for "
        "out-of-pocket cost. These pages capture high-intent searchers and "
        "convert well."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-solar/", "SEO for Solar")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for Sydney solar installers, by service and rebate cycle</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Solar SEO in Sydney is split between top-of-funnel ("solar Sydney"),
        product-specific ("solar battery [suburb]"), and rebate/calculator
        content. The product-specific and rebate pages outperform the broad
        category page on a per-lead basis. Build them deliberately.
      </p>
    </aside>

    <h2>Why solar SEO is structured differently</h2>
    <p>
      Solar is a high-consideration purchase. Households research for
      weeks or months before booking a site visit. That research footprint
      maps to four distinct kinds of search query, each of which deserves
      a different content shape.
    </p>
    <ol>
      <li><strong>Top of funnel</strong>: "solar Sydney", "solar installers
        [suburb]". High volume, high CPC, hard to win organically. Map Pack
        is the realistic target.</li>
      <li><strong>Product-specific</strong>: "solar battery [suburb]", "Tesla
        Powerwall installer", "EV charger and solar combo". Lower volume,
        much higher intent. Where most of the SEO leverage sits.</li>
      <li><strong>Rebate and calculator</strong>: "federal solar rebate",
        "battery rebate NSW", "feed-in tariff 2025". High volume,
        informational, supports brand authority.</li>
      <li><strong>Comparison and review</strong>: "best solar inverter",
        "panel A vs panel B". Long-tail, informational, slow-build authority.</li>
    </ol>

    <h2>What we build on a solar SEO retainer</h2>
    <ul class="checklist">
      <li>Month 1: GBP, audit, technical fixes, primary services identified.</li>
      <li>Month 2-3: Product-specific pages for battery, EV charger combo,
        commercial solar (whichever you do). Suburb-tail variants for 4-6
        suburbs in your service area.</li>
      <li>Month 4-6: Rebate and calculator content (high traffic, citation
        magnet), AEO/GEO optimisation for the informational queries.</li>
    </ul>

    <h2>Where solar SEO usually wastes money</h2>
    <ul class="warnlist">
      <li>Chasing "solar Sydney" #1. The CPC supports it for Ads, the SEO
        competition does not support the spend.</li>
      <li>Writing generic "benefits of solar" content. Ranked for nothing,
        read by no one ready to buy.</li>
      <li>Skipping the rebate content. The federal and state rebate changes
        drive massive informational search spikes that smart competitors
        capture.</li>
    </ul>

    {render_cta_block()}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>The shared playbook.</p></a>
      <a class="card" href="/seo-for-electricians/"><h3>SEO for Electricians</h3><p>Many solar installers are also electrical contractors.</p></a>
      <a class="card" href="/seo-vs-google-ads/"><h3>SEO vs Google Ads</h3><p>How to think about the split in a high-CPC category.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-solar/", "SEO for Solar")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO for Solar", description="SEO for solar installation businesses in Sydney", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
