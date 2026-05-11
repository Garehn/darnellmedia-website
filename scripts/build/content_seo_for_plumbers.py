"""SEO for Plumbers — industry vertical."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-for-plumbers"
TITLE = "SEO for Plumbers in Sydney: GBP, Suburb Pages, Reviews"
DESCRIPTION = (
    "What actually moves rankings for a Sydney plumber. GBP optimisation, suburb-targeted "
    "service pages, reviews, and the four queries every plumber should be ranking for."
)

FAQS = [
    (
        "What keywords should a plumber target in Sydney?",
        "Four families. Emergency: 'emergency plumber [suburb]'. Service: 'blocked drain "
        "[suburb]', 'hot water repair [suburb]', 'gas plumber [suburb]'. Maps queries with "
        "'plumber near me' (which Google rewrites to the searcher's suburb). Branded variants "
        "of your business name. Avoid generic 'plumber Sydney' as a single target. Win a "
        "handful of suburbs instead."
    ),
    (
        "Do plumbers need a blog?",
        "Less than you have been told. A small handful of long-form guides ('hot water unit "
        "replacement guide', 'when a blocked drain is a sewer problem') are useful. Writing "
        "four 600-word generic blog posts a month is the most common waste of money in "
        "tradie SEO retainers."
    ),
    (
        "What review platforms matter for plumbers?",
        "Google reviews first, by a wide margin. Then Product Review AU and ServiceSeeking "
        "for industry-specific weight. Yelp and TrueLocal as a distant third tier. Do not "
        "chase platforms outside Google until the Google review count is competitive."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-plumbers/", "SEO for Plumbers")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for plumbers, by someone who has audited too many of them</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Plumber SEO is a Map Pack game. Win the top 3 listings on 'emergency plumber [your suburb]',
        'blocked drain [your suburb]', and 'hot water repair [your suburb]', and the phone rings.
        That requires GBP optimisation, four to eight suburb-targeted service pages, and a routine
        of asking every happy customer for a review. None of it requires a $4,000 retainer.
      </p>
    </aside>

    <h2>The plumber Map Pack matters more than organic</h2>
    <p>
      When a Belrose homeowner Googles "emergency plumber" on a Sunday afternoon with water
      coming through the ceiling, they tap one of the top three Map Pack listings 70 per cent
      of the time. They scan the star rating and the photo. They tap call. They do not read
      your "About Us" page first.
    </p>
    <p>
      That means every dollar of plumber SEO should move you toward Map Pack dominance for
      the queries you care about. Backlinks help, content helps, but the Map Pack is the
      target.
    </p>

    <h2>What we work on for plumbers, in order</h2>
    <ol>
      <li><strong>GBP</strong>: verify, set primary category "Plumber" and add secondary
        categories ("Drainage service", "Gas installation service", "Hot water system supplier"
        as relevant), set service area to your real suburbs, list every service with its
        real name, upload 20+ photos.</li>
      <li><strong>Reviews routine</strong>: every job, every happy customer, every time.
        Reply to every review. Aim for 50+ recent reviews on Google before chasing anything
        else.</li>
      <li><strong>Suburb pages</strong>: four to eight pages on your site, each targeting
        a real suburb you serve and a real service ("blocked drain Frenchs Forest",
        "emergency plumber Davidson"). 800-1,000 words each, real local context, schema,
        photos.</li>
      <li><strong>Citations and on-site fundamentals</strong>: HomeImprovementPages,
        ServiceSeeking, Yellow Pages AU. NAP consistent everywhere. Schema markup on
        every page (Plumber, Service, FAQPage, BreadcrumbList).</li>
    </ol>

    <h2>Realistic plumber SEO timeline</h2>
    <ul class="checklist">
      <li>Month 1: GBP fully fixed, some early ranking movement on easy queries.</li>
      <li>Month 2-3: First four suburb pages published. Reviews routine in place. First
        Map Pack movements on primary queries.</li>
      <li>Month 4-6: Top 3 Map Pack on home suburb for emergency, blocked drain, hot water.
        Site organic doing 200-500 visits per month. Phone leads measurably up.</li>
      <li>Month 6-12: Top 3 on home suburb for every primary service. Top 10 in neighbouring
        suburbs. Site organic 500-2,000 visits per month. Decision point on expanding
        service areas vs adding services.</li>
    </ul>

    <div class="callout callout--info">
      <h3>The plumber story we keep telling</h3>
      <p>
        The Belrose plumber, again. Unverified GBP, 12 duplicate listings on AU directories,
        no schema, four paragraphs of generic copy on the site. Old agency had billed $2,800
        per month for 18 months. Three weeks of fixes from us, 90 days later: top 3 on
        "emergency plumber Belrose" and 3-5 leads per week from organic. None of the work
        was clever. It was the obvious work done in the obvious order.
        <!-- TODO: replace with real client story -->
      </p>
    </div>

    <h2>When NOT to hire us as a plumber</h2>
    <ul class="warnlist">
      <li>You are a one-truck operator and you are already at capacity. More leads to no
        spare capacity is just a stress increase. Hire a second plumber first.</li>
      <li>You do not pick up the phone consistently inside business hours. Fix that
        before adding traffic.</li>
      <li>Your conversion from quote to booked job is under 40 per cent. Sales process
        beats lead generation here.</li>
    </ul>

    {render_cta_block()}

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>The shared playbook across trades.</p></a>
      <a class="card" href="/seo-for-electricians/"><h3>SEO for Electricians</h3><p>How the electrical trades version differs.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The GBP and suburb-page detail.</p></a>
    </div>

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>
  </div>
</article>
"""


def _faq(faqs):
    return "\n      ".join(
        f'<details><summary>{q}</summary><div class="faq__body"><p>{a}</p></div></details>'
        for q, a in faqs
    )


def schema_graph():
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-plumbers/", "SEO for Plumbers")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO for Plumbers", description="SEO for plumbing businesses in Sydney", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
