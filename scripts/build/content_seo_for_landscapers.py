"""SEO for Landscapers — Phase 2 vertical."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-for-landscapers"
TITLE = "SEO for Landscapers in Sydney: Seasonal Demand and Map Pack Wins"
DESCRIPTION = (
    "How Sydney landscapers rank for the queries that pay. Lawn, garden "
    "design, retaining walls, irrigation. Seasonal demand patterns and "
    "Map Pack tactics."
)

FAQS = [
    (
        "Is landscaping SEO seasonal?",
        "Yes. Garden design enquiries peak Sep-Nov (spring planning). Lawn "
        "and turf installation peaks Oct-Jan. Retaining walls and hardscaping "
        "are roughly year-round with a slight cool-season lull. Schedule "
        "content briefs against this pattern."
    ),
    (
        "Should I target 'landscaper Sydney' or specific services?",
        "Specific services. 'Landscape design Sydney' has higher intent than "
        "'landscaper Sydney'. 'Retaining wall builder Belrose' converts 3-4x "
        "better than 'landscaper Belrose' because the searcher already knows "
        "the job. Build service-specific pages, not category umbrellas."
    ),
    (
        "Do photos matter more for landscapers than other trades?",
        "Yes, substantially. Landscapers sell a visual outcome. GBP listings "
        "with 30+ recent photos of completed work convert clicks to bookings "
        "noticeably better than listings with 10 generic shots. Photo "
        "discipline is a competitive moat."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-landscapers/", "SEO for Landscapers")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for landscapers, by service and by season</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Sydney landscaping SEO is a service-specific play, not a category play.
        Build pages for the four or five services you actually want more of
        (design, retaining walls, turf, irrigation, paving), each suburb-tailed,
        each with strong photo discipline. The result compounds across two
        seasons.
      </p>
    </aside>

    <h2>Where landscaping SEO usually goes wrong</h2>
    <p>
      The default play is one "Landscaping Services Sydney" page on the home
      page and a generic blog. Both compete with hundreds of similar
      generic pages and rank for nothing useful. Worse, the photos on
      generic pages tend to be stock shots, which converts poorly even when
      they rank.
    </p>
    <p>
      The fix is to invert. Pick the four highest-value services you offer
      (or want more of). Build a dedicated page for each. Pair each with the
      suburbs you actually serve. Make every page photo-heavy from your own
      jobs.
    </p>

    <h2>The four service families that pay</h2>
    <ol>
      <li><strong>Landscape design</strong>. High-ticket, longer project cycle.
        Queries: "landscape designer [suburb]", "garden design Sydney".
        Convert with portfolio photos and a clear scoping process.</li>
      <li><strong>Retaining walls and hardscaping</strong>. Structural,
        repeat. Queries: "retaining wall builder [suburb]". High intent,
        relatively thin competition.</li>
      <li><strong>Turf and lawn</strong>. Volume play with strong seasonality.
        Queries: "turf installation [suburb]", "lawn renovation Sydney".
        Map Pack matters most here.</li>
      <li><strong>Irrigation</strong>. Often added on after another service.
        Lower direct demand but a strong supporting page that converts
        callbacks.</li>
    </ol>

    <h2>What we typically build on a landscaping retainer</h2>
    <ul class="checklist">
      <li>Month 1: GBP fully built out with 30+ photos of completed work,
        plus audit and technical fixes.</li>
      <li>Month 2-3: Hero service pages for the two highest-margin services
        plus suburb-tail variants for the top 4 suburbs.</li>
      <li>Month 4-6: Remaining service pages, citations, AEO/GEO baseline,
        review acquisition routine.</li>
    </ul>

    <h2>When NOT to do landscaping SEO with us</h2>
    <ul class="warnlist">
      <li>You serve high-end clients who find you through referrals and
        Instagram. Continue investing there, not in SEO.</li>
      <li>Your portfolio is thin and your photo discipline is weak. Fix the
        photos first.</li>
      <li>You take any work that comes through the door and have not
        decided which services you want more of. Decide that first.</li>
    </ul>

    {render_cta_block()}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>The shared playbook.</p></a>
      <a class="card" href="/seo-for-builders/"><h3>SEO for Builders</h3><p>Adjacent vertical, similar tactics.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The Map Pack detail.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-landscapers/", "SEO for Landscapers")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO for Landscapers", description="SEO for landscaping businesses in Sydney", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
