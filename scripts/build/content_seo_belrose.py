"""SEO Belrose — hyper-local geo page (Phase 2). Founder's home suburb."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-belrose"
TITLE = "SEO Belrose, NSW: Local SEO from the Founder's Home Suburb"
DESCRIPTION = (
    "Local SEO for Belrose businesses, from a Belrose-based agency. "
    "Northern Beaches NSW 2085. Walk-up, drop-by, or remote retainers."
)

FAQS = [
    (
        "Is Belrose SEO really a distinct market from Northern Beaches SEO?",
        "Yes if you serve only Belrose and the immediately adjacent "
        "suburbs (Davidson, Frenchs Forest, Killarney Heights, Forestville). "
        "Queries like 'plumber Belrose' have their own search volume and "
        "their own Map Pack, separate from broader 'plumber Northern Beaches' "
        "queries. Worth a dedicated page if you actually serve the area."
    ),
    (
        "Can I drop in to your office?",
        "Yes, at 6 Lyndhurst Way, Belrose 2085, by appointment. The discovery "
        "call can happen there if you prefer in-person to phone or video. "
        "Drop a note via the contact form to set up a time."
    ),
    (
        "Do you only take Belrose clients?",
        "No. Belrose is just where the office is. We take clients across "
        "Sydney and remotely across Australia. The reason this page exists "
        "is that 'Belrose' is a search term with its own volume and we want "
        "to be useful to local businesses Googling it."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/seo-northern-beaches/", "Northern Beaches"), ("/seo-belrose/", "Belrose")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for Belrose businesses, from a Belrose office</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Darnell Media is based at 6 Lyndhurst Way, Belrose. If your business
        serves Belrose and the inland Northern Beaches (Davidson, Frenchs
        Forest, Forestville, Killarney Heights), this is a useful starting
        page. Local context, walk-up access, same flat pricing as anywhere
        else.
      </p>
    </aside>

    <h2>Why Belrose has its own search demand</h2>
    <p>
      Belrose is a suburb of around 9,000 residents on Sydney's Northern
      Beaches, with a high concentration of family homes built in the 1970s
      and 1980s. The housing stock and demographic profile produce
      distinctive demand patterns: hot water systems aging out, original
      switchboards needing upgrades, mature gardens needing landscaping,
      timber-frame homes due for termite inspections.
    </p>
    <p>
      Those patterns show up in search behaviour. "Hot water replacement
      Belrose", "switchboard upgrade Belrose", "termite inspection Belrose"
      each have steady monthly demand, and the Map Pack on these queries is
      not crowded.
    </p>

    <h2>Service businesses that benefit from a Belrose-specific page</h2>
    <ul class="checklist">
      <li>Plumbers (hot water, drains, gas, leak detection)</li>
      <li>Electricians (switchboard upgrades, safety switch installation,
        smart home, EV chargers)</li>
      <li>Pest control (termite inspections especially — older timber stock)</li>
      <li>Landscapers (mature gardens, retaining walls, hedge work)</li>
      <li>Roofers and tilers (1970s tile roofs aging out)</li>
      <li>Builders and renovators (extensions on original family homes)</li>
      <li>Allied health (physio, dentistry, optometry)</li>
    </ul>

    <h2>What we build for a Belrose-targeted retainer</h2>
    <ol>
      <li><strong>GBP optimisation</strong> with Belrose as primary service area
        and Davidson, Frenchs Forest, Forestville, Killarney Heights as
        secondaries.</li>
      <li><strong>Belrose-specific service page</strong> on your site, with
        real local context (housing stock, common problems, council
        considerations).</li>
      <li><strong>Reviews routine</strong> mentioning Belrose specifically in
        responses — small thing, helps the local relevance signal.</li>
      <li><strong>Citations</strong> in AU directories with Belrose as the
        listed location, NAP consistent across all of them.</li>
    </ol>

    <div class="callout callout--info">
      <h3>The Belrose plumber story</h3>
      <p>
        Same plumber as the SEO for Plumbers page. Local to Belrose, paying
        another agency $2,800 a month for 18 months with zero rankings. Three
        weeks of fixes (verify and merge GBP, set service area to Belrose +
        4 adjacent suburbs, schema, four service-area pages, citations
        cleanup). Within 90 days, top 3 in the Map Pack for "emergency
        plumber Belrose" and 3-5 leads per week.
        <!-- TODO: replace with real client story -->
      </p>
    </div>

    <h2>Office details</h2>
    <p>
      6 Lyndhurst Way, Belrose NSW 2085. Visits by appointment. The simplest
      way to set one up is the
      <a href="/contact/">contact form</a> or a call to 0402 522 434.
    </p>

    {render_cta_block(
      headline="Coffee on the call, or in person",
      body=(
        "Belrose business owner? The discovery call can happen at the office "
        "or anywhere on the Northern Beaches that suits. Free either way."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-northern-beaches/"><h3>SEO Northern Beaches</h3><p>The wider Northern Beaches strategy.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The shared playbook.</p></a>
      <a class="card" href="/about/"><h3>About Darnell Media</h3><p>Why we are based here.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/seo-northern-beaches/", "Northern Beaches"), ("/seo-belrose/", "Belrose")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO Belrose", description="Local SEO services for Belrose businesses", area="Belrose"),
        ),
        faq_page_schema(FAQS),
    ]
