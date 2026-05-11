"""SEO for Builders — Phase 2 vertical."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-for-builders"
TITLE = "SEO for Builders in Sydney: Renovations, Custom Homes, Extensions"
DESCRIPTION = (
    "How Sydney residential builders rank for renovations, extensions, "
    "custom homes, and granny flats. Long sales cycle SEO, by service and "
    "suburb."
)

FAQS = [
    (
        "Is SEO worth it for a builder with a 6-12 month sales cycle?",
        "Yes, and arguably more than for shorter-cycle trades. The longer "
        "the sales cycle, the more research the customer does, and the more "
        "search visits matter. A homeowner planning a $400k extension might "
        "make 30+ search visits before signing. Being visible across that "
        "research journey is worth meaningful retainer spend."
    ),
    (
        "Should a builder target 'builder Sydney' or specific project types?",
        "Specific project types, every time. 'Builder Sydney' is contested "
        "by hundreds of operators and the searcher intent is unclear. "
        "'Home extension builder [suburb]' or 'granny flat builder Sydney' "
        "are concrete, lower-competition, higher-intent."
    ),
    (
        "Do customers actually read long content from builders?",
        "Yes, the high-intent ones do. A homeowner researching a $300k "
        "renovation will spend 30+ minutes on a builder's site reading "
        "project pages, FAQs, process content, and case studies. Long, "
        "specific content converts these visitors at materially higher "
        "rates than a one-page brochure."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-builders/", "SEO for Builders")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for Sydney builders, organised by project type</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Sydney builder SEO works best when you skip "builder Sydney" entirely
        and build out three to five project-specific page families:
        renovations, extensions, custom homes, granny flats, knockdown-rebuild.
        Each is suburb-tailed. Each is photo and case-study rich. Each
        addresses the 6-12 month research cycle directly.
      </p>
    </aside>

    <h2>Why builder SEO is a research-cycle play</h2>
    <p>
      A homeowner spending $300,000 to $1.5 million on a build does months
      of research before booking a meeting. They visit dozens of builder
      sites. They compare process pages, FAQs, project galleries, council
      experience. Builders who show up reliably across that research
      journey win the meetings. Builders who only show up in the Map Pack
      compete on price.
    </p>

    <h2>The five project families that pay</h2>
    <ol>
      <li><strong>Home renovations</strong>. Highest volume. Queries:
        "home renovation builder [suburb]", "kitchen renovation Sydney",
        "bathroom renovation [suburb]".</li>
      <li><strong>Extensions and additions</strong>. High average project
        value. Queries: "home extension [suburb]", "second storey addition
        Sydney".</li>
      <li><strong>Custom homes</strong>. Highest project value, longest
        cycle. Queries: "custom home builder Sydney", "luxury home builder
        [suburb]".</li>
      <li><strong>Granny flats and dual occupancy</strong>. Growing category
        with NSW planning changes. Queries: "granny flat builder Sydney",
        "dual occupancy builder [suburb]".</li>
      <li><strong>Knockdown rebuild</strong>. Specialist niche, growing.
        Queries: "knockdown rebuild Sydney", "KDR builder [suburb]".</li>
    </ol>

    <h2>What we typically build on a builder retainer</h2>
    <ul class="checklist">
      <li>Month 1: GBP and audit. Identify the two highest-margin project
        types and the four target suburbs.</li>
      <li>Month 2-3: Hero project pages for those two families plus suburb
        variants. Case study pages for 2-3 recent completed projects.</li>
      <li>Month 4-6: Process content (council, BASIX, timelines, payment
        schedules), FAQ depth, AEO/GEO optimisation, remaining project
        families.</li>
    </ul>

    <h2>Where builder SEO usually wastes money</h2>
    <ul class="warnlist">
      <li>Chasing "builder Sydney". Wrong intent, too competitive, low
        conversion.</li>
      <li>Generic "About Us" pages instead of process and case-study depth.</li>
      <li>Skipping council-specific content. Councils with strict planning
        regimes (Northern Beaches, Mosman, North Sydney, Inner West) are
        often searched in conjunction with builder queries. Those pages
        rank fast.</li>
    </ul>

    {render_cta_block()}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>The shared playbook.</p></a>
      <a class="card" href="/seo-for-landscapers/"><h3>SEO for Landscapers</h3><p>Adjacent vertical, often paired.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The Map Pack basics.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-builders/", "SEO for Builders")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO for Builders", description="SEO for residential builders in Sydney", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
