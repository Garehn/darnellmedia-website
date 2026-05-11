"""SEO Northern Beaches — geo pillar (Phase 2)."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-northern-beaches"
TITLE = "SEO Northern Beaches: Sydney's Coastal Suburbs Service Map"
DESCRIPTION = (
    "Northern Beaches SEO for trades, vets, allied health, and home services. "
    "Local Belrose-based agency covering Manly to Palm Beach. Flat pricing."
)

FAQS = [
    (
        "Why a Northern Beaches-specific SEO agency?",
        "Three reasons. Local context matters — we know the suburbs, the housing "
        "stock, the seasonal demand patterns, and the council areas you serve. "
        "On-site visits are easy when needed (Belrose to Manly is 12 minutes). "
        "And SEO competition on Northern Beaches queries is meaningfully thinner "
        "than CBD-wide queries, so the work moves faster."
    ),
    (
        "Which Northern Beaches suburbs do you focus on?",
        "All of them, with the strongest density of work in Belrose, Frenchs "
        "Forest, Forestville, Davidson, Killarney Heights, Manly, Manly Vale, "
        "Brookvale, Dee Why, Mona Vale, Avalon, Newport, Palm Beach. The "
        "suburb-tail strategy is to build a service-area page for each suburb "
        "you actually serve, not blanket the lot."
    ),
    (
        "Is Northern Beaches SEO cheaper than Sydney CBD SEO?",
        "Same flat pricing applies. What is different is the competitive "
        "landscape: Northern Beaches queries (e.g. 'electrician Belrose') have "
        "lower competition than CBD-wide queries, so the same retainer budget "
        "produces faster ranking movement in most cases."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/seo-northern-beaches/", "Northern Beaches")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for Northern Beaches businesses, by someone who lives here</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Northern Beaches SEO is meaningfully easier than wider Sydney SEO. Lower
        competition on suburb-tail queries, smaller competitor set, and clear
        local intent. A Northern Beaches plumber, electrician, vet, or
        allied-health business that targets 6-12 specific suburbs can move
        rankings inside 90 days at the standard $1,800-$2,800 retainer.
      </p>
    </aside>

    <h2>What "Northern Beaches SEO" actually looks like</h2>
    <p>
      The Northern Beaches stretches from Manly in the south to Palm Beach
      in the north, with around 250,000 residents across roughly 30 suburbs.
      Service businesses operating here usually cover 6 to 12 suburbs in
      practice, not all 30. The SEO strategy mirrors that: build out the
      suburbs you actually serve, skip the ones you do not.
    </p>
    <p>
      A working suburb-tail map for a Northern Beaches trade might look like:
      Belrose, Frenchs Forest, Forestville, Davidson, Killarney Heights,
      Beacon Hill (the inland cluster), then Manly Vale, Brookvale, Dee Why
      (the coastal cluster south), or Avalon, Newport, Mona Vale (the coastal
      cluster north). Each suburb gets its own service-area page on the
      site, mirrored in the Google Business Profile service area.
    </p>

    <h2>Why Northern Beaches SEO is easier than CBD-wide SEO</h2>
    <ul class="checklist">
      <li><strong>Smaller competitive field.</strong> "Plumber Sydney" has 200+
        agencies competing. "Plumber Frenchs Forest" has maybe 12.</li>
      <li><strong>Local intent is more concrete.</strong> A homeowner Googling
        "blocked drain Belrose" is several steps further down the funnel than
        one Googling "drain blockages".</li>
      <li><strong>Map Pack matters more.</strong> Suburb queries trigger the
        Map Pack reliably, and Map Pack rankings are easier to win than
        organic.</li>
      <li><strong>Reviews compound faster.</strong> A trade serving 6 suburbs
        with 50 active customers generates ~50 reviews a year if asked
        consistently. Same business chasing all of Sydney gets diluted.</li>
    </ul>

    <h2>What we typically do for a Northern Beaches retainer</h2>
    <ol>
      <li><strong>Month 1:</strong> GBP fixes, citations, audit, technical
        cleanup, primary suburb identified.</li>
      <li><strong>Month 2-3:</strong> Four suburb pages published for the
        primary cluster (e.g. Belrose + Frenchs Forest + Davidson + Killarney
        Heights). Reviews routine in place.</li>
      <li><strong>Month 4-6:</strong> Adjacent cluster added (e.g. Brookvale +
        Dee Why), specialist service pages, citations rounded out, AEO/GEO
        baseline.</li>
    </ol>

    <div class="callout callout--info">
      <h3>The Belrose plumber story, again</h3>
      <p>
        Same composite story as the SEO for Plumbers page, because it is the
        clearest example of what suburb-tail SEO can do on the Northern
        Beaches. Unverified GBP, 12 duplicate listings, no schema, four
        paragraphs on the site. Three weeks of fixes plus four suburb pages
        (Belrose, Frenchs Forest, Forestville, Davidson). Inside 90 days,
        top 3 in the Map Pack for "emergency plumber Belrose" and three other
        suburb queries.
        <!-- TODO: replace with real client story -->
      </p>
    </div>

    <h2>When NOT to scope SEO to the Northern Beaches</h2>
    <ul class="warnlist">
      <li>You actually want to rank for Sydney-wide queries because your
        service is destination-based (e.g. specialist clinic that draws from
        all of Sydney).</li>
      <li>Your business is unique enough that the suburb-tail audience is
        too thin to support meaningful demand.</li>
      <li>You are still figuring out which suburbs you can profitably serve.
        Fix the operations question first.</li>
    </ul>

    {render_cta_block(
      headline="Belrose-based, 12 minutes from Manly",
      body=(
        "If your business is on the Northern Beaches, the discovery call can "
        "be in person at your site or at a cafe in between. Or remote if "
        "easier. Free either way."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-belrose/"><h3>SEO Belrose</h3><p>Founder's home suburb. The hyper-local case study.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The shared playbook for any Sydney suburb.</p></a>
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>Industry-specific application of the same approach.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/seo-northern-beaches/", "Northern Beaches")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO Northern Beaches", description="Local SEO services across the Northern Beaches of Sydney", area="Northern Beaches"),
        ),
        faq_page_schema(FAQS),
    ]
