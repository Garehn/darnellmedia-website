"""SEO for Vets — Tier 2 vertical."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-for-vets"
TITLE = "SEO for Vet Clinics in Sydney: AI Overviews and the Pet Health Search"
DESCRIPTION = (
    "Why vet SEO in 2025 is mostly an AEO problem. How to rank for symptom queries, get "
    "cited in AI Overviews, and win the local pack on routine service queries."
)

FAQS = [
    (
        "Why is AEO especially important for vet clinics?",
        "Pet owners search symptoms at 9pm with a worried tone. AI Overviews now answer "
        "most of those queries before the user clicks through. A vet clinic page that "
        "answers a symptom directly, in the first paragraph, with proper FAQ schema, gets "
        "cited in the AI Overview and brings the owner back later when they book."
    ),
    (
        "Should a vet clinic have a blog?",
        "Yes, but written for AEO citations, not Google ranking. A well-structured 'what to "
        "do if your dog ate chocolate' page that answers fast and cites a regulator (RSPCA, "
        "AVMA) gets cited in AI Overviews. A generic 'caring for your senior pet' blog post "
        "ranks for nothing and is read by nobody."
    ),
    (
        "How important are reviews for vet clinics?",
        "Critical. Pet owners read every review before booking a vet they have not used "
        "before. 4.8+ stars and 50+ recent reviews is the working benchmark. Vet clinics "
        "with under 4.5 stars lose half their bookings to nearby competitors with better "
        "ratings, even when the under-4.5 clinic ranks higher."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-vets/", "SEO for Vets")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for vet clinics: ranking is no longer enough</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Vet SEO in 2025 is half local SEO (winning the Map Pack for "vet [suburb]") and half
        AEO (getting cited in AI Overviews on symptom queries). Both feed the same outcome:
        when a worried pet owner needs a clinic, yours is the one they recognise and book.
      </p>
    </aside>

    <h2>The vet clinic search journey changed</h2>
    <p>
      Three years ago, a pet owner with a sick dog Googled the symptom, read a top-ranking
      article, and either rang their vet or searched for one nearby. The vet clinic SEO play
      was twofold: rank in the Map Pack on "vet [suburb]" queries and produce some symptom
      content that pulled in informational traffic.
    </p>
    <p>
      In 2025, the AI Overview answers the symptom query directly. Click-through on
      informational pet-health queries has dropped by 30 to 50 per cent at the top organic
      position. The Map Pack on "vet [suburb]" still works, but the symptom-content traffic
      strategy is dead unless the pages are AEO-shaped.
    </p>

    <h2>What works for vet clinic SEO now</h2>
    <ol>
      <li><strong>Map Pack dominance</strong> on "vet [suburb]", "veterinary clinic [suburb]",
        "emergency vet [suburb]", "puppy vaccination [suburb]". Same playbook as any local
        business: GBP, reviews, suburb pages, schema.</li>
      <li><strong>AEO-shaped symptom pages</strong>. A handful of pages each targeting a
        common owner-search symptom (kennel cough, vomiting in cats, lameness in dogs).
        Each page answers the question directly in the first paragraph, has FAQ schema,
        cites a regulator (RSPCA, AVMA, MSD Veterinary Manual), and explicitly recommends
        seeing a vet for diagnosis.</li>
      <li><strong>Service-specific pages</strong>. Routine services (puppy vaccination,
        dental, desexing, geriatric care) get their own pages with local pricing and
        FAQ blocks.</li>
      <li><strong>Strong review acquisition</strong>. Every clinic visit, every owner asked.
        4.8+ stars with 50+ recent reviews is the local benchmark.</li>
    </ol>

    <div class="callout callout--info">
      <h3>The vet clinic AEO win</h3>
      <p>
        A two-vet clinic on the North Shore was ranking fine on "vet [suburb]" queries but
        losing leads to AI Overviews citing a competitor for "kennel cough treatment" and
        "puppy vaccination Sydney". Solution was not more backlinks. It was to restructure
        the existing service pages: direct-answer first paragraph, FAQ schema, citable
        statistics with sources. Within 8 weeks the clinic appeared in the AI Overview
        for both queries and bookings tied to those terms doubled.
        <!-- TODO: replace with real client story -->
      </p>
    </div>

    <h2>When NOT to do vet SEO with us</h2>
    <ul class="warnlist">
      <li>You are a chain or franchise clinic with corporate-level SEO already done.
        The marginal lift from a separate agency is small.</li>
      <li>You are at booking capacity already. Wait until you genuinely want more bookings.</li>
      <li>You are unwilling to invest in the symptom and FAQ content. Vet SEO without
        AEO-shaped content in 2025 is half the strategy.</li>
    </ul>

    {render_cta_block()}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/answer-engine-optimisation/"><h3>Answer Engine Optimisation</h3><p>Why AEO matters for any health-adjacent business.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The Map Pack fundamentals.</p></a>
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>The shared playbook for service businesses.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-vets/", "SEO for Vets")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO for Vets", description="SEO for veterinary clinics in Sydney", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
