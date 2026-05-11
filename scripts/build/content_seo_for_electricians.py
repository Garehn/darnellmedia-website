"""SEO for Electricians — industry vertical."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-for-electricians"
TITLE = "SEO for Electricians in Sydney: What Ranks in 90 Days"
DESCRIPTION = (
    "How Sydney electricians rank in the Map Pack. GBP, suburb pages, reviews, the "
    "emergency-call queries that pay, and where most electrical SEO retainers waste money."
)

FAQS = [
    (
        "What keywords work best for an electrician?",
        "Three families. Emergency: 'emergency electrician [suburb]', 'electrician 24 hour "
        "[suburb]'. Service: 'switchboard upgrade [suburb]', 'safety switch [suburb]', "
        "'EV charger installation [suburb]'. Specialist niches (solar, smart home, EV) "
        "where the competition is thin and the job ticket is higher."
    ),
    (
        "Should an electrician chase EV-charger keywords?",
        "Yes, deliberately. EV charger installation is the highest-margin growing category "
        "in residential electrical work in Sydney, and the SEO competition is still thin. "
        "Two or three well-built EV-charger pages targeting 'EV charger installation [suburb]' "
        "produce disproportionately high-value leads."
    ),
    (
        "Are level-2 ASP electricians a separate SEO category?",
        "Yes. 'Level 2 electrician [suburb]' is a distinct query family with much less "
        "competition and a much higher job value. If you have the licence, build the page. "
        "Most of your local competitors will not have."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-electricians/", "SEO for Electricians")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for electricians, ranked by what actually pays</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Sydney electrician SEO is a Map Pack game with a twist: the specialist queries
        (EV chargers, level-2 ASP, switchboard upgrades, smart home) pay 3-5x what generic
        "electrician [suburb]" queries pay. Build the niche pages first. Most competitors
        do not.
      </p>
    </aside>

    <h2>Where most electrician SEO retainers go wrong</h2>
    <p>
      The default agency playbook for an electrician is: target "electrician Sydney", write
      four blog posts a month about generic electrical safety, hope something ranks. None
      of it pays. The volume on "electrician Sydney" is too high for a small business to
      win, the blog posts compete with thousands of similar generic posts, and the queries
      that would actually move the business are sitting uncontested.
    </p>
    <p>
      The fix is to invert the playbook. Skip the generic top-level keyword. Pick four or
      five high-value, lower-competition query families. Build them out properly with
      suburb-specific service pages, schema, and real local content. Then layer GBP and
      reviews on top.
    </p>

    <h2>The four query families that pay</h2>
    <ol>
      <li><strong>Emergency electrical</strong>: '24 hour electrician [suburb]', 'emergency
        electrician [suburb]'. High intent, high ticket, Map Pack wins. Always build this
        first.</li>
      <li><strong>EV charger installation</strong>: 'EV charger installation [suburb]',
        'Tesla wall connector installation [suburb]'. The fastest-growing residential
        electrical category in Sydney. SEO competition still thin.</li>
      <li><strong>Switchboard and safety switch</strong>: 'switchboard upgrade [suburb]',
        'safety switch installation [suburb]'. Compliance-driven, repeat business, high
        ticket.</li>
      <li><strong>Level 2 ASP work</strong>: 'level 2 electrician [suburb]', 'ASP electrician
        [suburb]', 'overhead service install [suburb]'. Niche credential, niche competition,
        commercial volume.</li>
    </ol>

    <h2>What we do on a 6-month electrician retainer</h2>
    <p>
      Month 1: GBP fixes, audit, citations. Month 2: emergency + general electrician
      suburb pages for the home 4 to 6 suburbs. Month 3-4: niche-specific pages (EV,
      switchboards). Month 5-6: review acquisition campaign, deeper links, AEO/GEO
      optimisation.
    </p>

    <div class="callout callout--info">
      <h3>The Eastern Suburbs electrician story</h3>
      <p>
        Bondi-based electrician. Site converted well but only ranked for the business name.
        Audit recommendation was to consolidate, not expand: delete 14 thin blog posts,
        replace with four deep service pages, set up GBP service-area pages for Bondi,
        Bondi Junction, Waverley, Randwick. Result inside 4 months: top 5 in the Map Pack
        for "emergency electrician Bondi" and three other suburb queries.
        <!-- TODO: replace with real client story -->
      </p>
    </div>

    <h2>When NOT to hire us</h2>
    <ul class="warnlist">
      <li>You are a sole-trader electrician at capacity. Fix the capacity bottleneck first.</li>
      <li>You do not have the right credentials to claim a niche (Level 2 ASP, solar,
        Tesla certified). Faking it does not stick in SEO and tarnishes the brand.</li>
      <li>Your service area is genuinely all of Sydney and you cannot pick 6-12 suburbs to
        focus on. SEO needs focus to ship pages that rank.</li>
    </ul>

    {render_cta_block()}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>The shared playbook.</p></a>
      <a class="card" href="/seo-for-plumbers/"><h3>SEO for Plumbers</h3><p>How plumbing SEO differs.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The GBP detail.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-electricians/", "SEO for Electricians")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO for Electricians", description="SEO for electrical contractors in Sydney", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
