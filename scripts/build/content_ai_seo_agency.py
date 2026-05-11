"""AI SEO Agency — quick-win AEO/GEO branding page (Phase 2). KD 13."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "ai-seo-agency"
TITLE = "AI SEO Agency in Sydney: AEO and GEO Built into Every Page"
DESCRIPTION = (
    "Sydney AI SEO agency. AEO and GEO included on every retainer. AI "
    "Overviews, ChatGPT, Perplexity citations. Flat pricing, no add-ons."
)

FAQS = [
    (
        "What does \"AI SEO agency\" actually mean?",
        "It means we optimise pages for the new layer of search — Google's "
        "AI Overviews, ChatGPT, Perplexity, Claude — in addition to "
        "traditional Google ranking. The optimisation work overlaps with "
        "regular SEO but adds engine-specific tactics (answer-first leads, "
        "FAQ schema, citable statistics, prompt-testing for coverage)."
    ),
    (
        "Is AI SEO different from AEO and GEO?",
        "AI SEO is the umbrella term. AEO (Answer Engine Optimisation) "
        "covers Google AI Overviews specifically. GEO (Generative Engine "
        "Optimisation) covers ChatGPT, Perplexity, Claude, Bing Copilot. "
        "When someone says \"AI SEO\" they usually mean AEO + GEO together."
    ),
    (
        "Why is your AI SEO offer different from a traditional agency adding an AI service line?",
        "Two reasons. First, we built the agency around AEO/GEO from day "
        "one in 2025, not as an upsell tacked on later. Every retainer "
        "includes baseline AEO work as standard. Second, our prompt-testing "
        "and citation-tracking process is documented and reportable, not "
        "marketing fluff."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/answer-engine-optimisation/", "AEO"), ("/ai-seo-agency/", "AI SEO Agency")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>Sydney's AI SEO agency, built around AEO and GEO from day one</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Darnell Media is an AI SEO agency in the literal sense: every page
        we work on is optimised for AI Overviews, ChatGPT, and Perplexity
        alongside traditional Google ranking. AEO baseline is included on
        every retainer. Deeper GEO work bolts on at $800/mo.
      </p>
    </aside>

    <h2>What "AI SEO" actually means in 2025</h2>
    <p>
      AI Overviews appear on ~30% of Google searches. ChatGPT search reached
      250 million weekly users by late 2024. Perplexity is the AI engine
      most likely to cite specific URLs and is sending real traffic. The
      collective effect is that "search" is no longer just Google's blue
      links.
    </p>
    <p>
      "AI SEO" is the work of optimising pages so they get cited and
      recommended by these engines alongside ranking in Google. It is not
      a parallel discipline. Most of the optimisation overlaps with regular
      SEO. But the specific tactics — answer-first leads, FAQ schema,
      citable statistics, prompt testing — are not optional in 2025.
    </p>

    <h2>What we do differently as an AI SEO agency</h2>
    <ol>
      <li><strong>AEO baseline included on every retainer.</strong> Every
        page we touch gets answer-first leads, FAQ schema, citable
        statistics, and structured data enrichment. No upsell.</li>
      <li><strong>Quarterly prompt-testing on the GEO add-on.</strong>
        Defined category prompts tested against ChatGPT, Perplexity,
        Claude. Coverage tracked over time.</li>
      <li><strong>AI Overview coverage tracking</strong> for target queries,
        included in the monthly report.</li>
      <li><strong>Schema enrichment</strong> beyond the SEO basics
        (Organization, LocalBusiness, Service, Person, FAQPage,
        BreadcrumbList) because schema is now an AI-engine input, not just
        a Google input.</li>
      <li><strong>Content briefs shaped for both audiences</strong>
        (humans + AI engines). Same page works for both.</li>
    </ol>

    <h2>What "AI SEO" should NOT mean</h2>
    <ul class="warnlist">
      <li>Writing the content with AI and publishing the first draft.
        Generic AI-written content is the single biggest tell of an agency
        that has stopped doing the work. We rewrite every draft.</li>
      <li>Promising "AI-powered rankings". The engines decide what to cite.
        We optimise the inputs. Anyone promising algorithmic guarantees on
        AI Overviews is selling.</li>
      <li>Charging a premium for AEO as a separate line item if it is not
        a separate scope of work. AEO baseline should be table stakes in
        2025.</li>
    </ul>

    {render_cta_block(
      headline="The $1,200 audit covers AEO readiness",
      body=(
        "Whether you stay on the standard SEO retainer or add the AEO/GEO "
        "deepening, the audit tells you where the leverage is. Seven days, "
        "written report, refunded if we are not the right fit."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/answer-engine-optimisation/"><h3>AEO pillar</h3><p>The detailed Google AI Overview playbook.</p></a>
      <a class="card" href="/generative-engine-optimisation/"><h3>GEO pillar</h3><p>The ChatGPT, Perplexity, Claude side.</p></a>
      <a class="card" href="/seo-services-sydney/"><h3>SEO Services</h3><p>The full retainer scope.</p></a>
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
    crumbs = [("/", "Home"), ("/answer-engine-optimisation/", "AEO"), ("/ai-seo-agency/", "AI SEO Agency")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="AI SEO Agency", description="AEO and GEO optimisation services in Sydney", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
