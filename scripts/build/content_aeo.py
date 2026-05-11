"""Answer Engine Optimisation pillar."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "answer-engine-optimisation"
TITLE = "Answer Engine Optimisation (AEO): The 2025 SEO Layer"
DESCRIPTION = (
    "What AEO actually is, why it matters in 2025, and how to optimise pages to get cited "
    "in Google's AI Overviews. Sydney-based AEO specialist Darnell Media."
)

FAQS = [
    (
        "What is the difference between SEO and AEO?",
        "SEO optimises pages to rank in regular search results. AEO optimises the same "
        "pages to get cited by AI Overviews and answer engines. The two are complementary, "
        "not alternatives. Most pages that rank well do not automatically get cited; AEO "
        "is the specific work that earns the citation."
    ),
    (
        "How is AEO different from GEO?",
        "AEO covers Google's AI Overviews (the AI summary that appears at the top of many "
        "Google results pages). GEO (Generative Engine Optimisation) covers ChatGPT, "
        "Perplexity, Claude, and other generative AI assistants. The optimisation tactics "
        "overlap substantially but the engines crawl and cite differently, so we measure "
        "and tune them separately."
    ),
    (
        "Can I do AEO without doing SEO first?",
        "Mostly no. AI Overviews pull citations from pages with reasonable organic "
        "authority. If your page is not findable in the regular index, the AI engine "
        "rarely cites it. AEO is layered on top of SEO foundations, not a replacement for "
        "them."
    ),
    (
        "How do you measure AEO performance?",
        "Three layers. Surface coverage: which target queries trigger AI Overviews and "
        "whether your pages get cited in them. Click-through: traffic from AI-cited mentions "
        "(measurable through GA4 with referrer filtering). Brand recall: prompt testing "
        "against ChatGPT, Perplexity, and Claude to see whether the engines recommend you "
        "by name for category queries."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/answer-engine-optimisation/", "Answer Engine Optimisation")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>Answer Engine Optimisation: the half of search most agencies still ignore</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        AI Overviews appear on about 30 per cent of Google searches (SE Ranking, Nov 2024)
        and cut click-through on the top organic result by 30 to 50 per cent. AEO is the
        practice of optimising your pages so they get cited in the AI Overview itself, which
        is now the only way to keep visibility on those queries. We bake AEO into every
        retainer because retrofitting it later costs more than building it in.
      </p>
    </aside>

    <nav class="toc" aria-label="On this page">
      <p class="toc__heading">On this page</p>
      <ol>
        <li><a href="#what-is-aeo">What AEO actually is</a></li>
        <li><a href="#why-now">Why it matters in 2025, not 2027</a></li>
        <li><a href="#what-to-do">What to actually do on a page</a></li>
        <li><a href="#measurement">How we measure it</a></li>
        <li><a href="#aeo-vs-geo">AEO vs GEO</a></li>
      </ol>
    </nav>

    <h2 id="what-is-aeo">What AEO actually is</h2>
    <p>
      Answer Engine Optimisation is the practice of structuring pages so that AI-driven
      answer surfaces (most notably Google's AI Overviews) cite them when answering user
      questions. It is not a parallel ranking system. It uses many of the same signals as
      regular SEO, but rewards different patterns: direct answers in the first 50 words,
      tight FAQ structures, citable statistics, structured data, and clean section
      hierarchies that AI engines can lift verbatim.
    </p>
    <p>
      AEO is not magic. Most of it is good editorial discipline plus deliberate schema. The
      reason it works as a competitive advantage is that most agencies have not updated their
      content templates since 2022 and still write the keyword-stuffed throat-clearing intro
      that AI engines ignore.
    </p>

    <h2 id="why-now">Why it matters now, not in 2027</h2>
    <p>
      Three numbers, with sources.
    </p>
    <ul class="checklist">
      <li><strong>~30 per cent of Google searches now trigger an AI Overview</strong>
        (SE Ranking, November 2024 study; BrightEdge corroborated). On informational queries
        the figure is closer to 50 per cent.</li>
      <li><strong>Click-through on the #1 organic result drops by 30 to 50 per cent</strong>
        when an AI Overview is present (Authoritas, Ahrefs studies, 2024). That is a
        material loss for any page that ranks #1 on a query now triggering an AI Overview.</li>
      <li><strong>ChatGPT search alone is at ~250 million weekly users</strong> (OpenAI,
        late 2024). The audience reading AI-generated answers about your category is no
        longer a fringe segment.</li>
    </ul>
    <p>
      The agencies still arguing that AEO does not matter yet are usually the agencies
      still selling 2018 SEO playbooks. The math no longer supports their position.
    </p>

    <h2 id="what-to-do">What to actually do on a page</h2>
    <p>
      Six concrete moves we make on every page during AEO optimisation.
    </p>
    <ol>
      <li><strong>Answer-first lead paragraph</strong>. The first 50 words contain the
        direct answer to the page's primary query. No throat-clearing. No "in today's
        digital landscape". The first paragraph is what AI engines lift.</li>
      <li><strong>Structured FAQ section</strong> with real questions people actually ask,
        each answered in 2 to 4 sentences, with proper FAQPage schema. AI engines
        disproportionately cite FAQ-shaped content.</li>
      <li><strong>Citable statistics with sources and dates</strong>. Engines reward pages
        that cite verifiable third-party data. We add at least one such statistic per
        major section and refresh them quarterly.</li>
      <li><strong>Tight section hierarchy</strong> (H2 → H3, no jumps). AI engines parse
        document structure to identify topical scope; messy hierarchies get ignored.</li>
      <li><strong>Internal linking</strong> with descriptive anchor text. AI engines use
        link graphs to determine topical authority. Generic "click here" anchors do not
        help.</li>
      <li><strong>Schema enrichment</strong>. Beyond the basics: Article, BreadcrumbList,
        FAQPage, Service, Person (for E-E-A-T), LocalBusiness. Each schema is a signal
        that helps the AI engine understand what the page is and who wrote it.</li>
    </ol>

    <h2 id="measurement">How we measure AEO performance</h2>
    <p>
      Three layers, all in the monthly report on our retainers that include the AEO add-on.
    </p>
    <ol>
      <li><strong>Surface coverage tracking</strong>. We run your target queries weekly
        and record whether an AI Overview appears, and whether your pages are cited. The
        report shows percentage of target queries with citation.</li>
      <li><strong>AI-referred traffic</strong>. GA4 referrer filtering catches traffic
        from ChatGPT, Perplexity, Claude. Less reliable than Google referrer data but
        improving.</li>
      <li><strong>Prompt testing</strong>. Quarterly we test category prompts ("best
        emergency plumber Northern Beaches", "SEO agency Sydney for tradies") against
        ChatGPT, Perplexity, and Claude. The output is a coverage matrix showing which
        engines recommend you by name and what they say.</li>
    </ol>

    <h2 id="aeo-vs-geo">AEO vs GEO: where the line is</h2>
    <p>
      We treat AEO and GEO as complementary halves of the same job.
    </p>
    <ul class="checklist">
      <li><strong>AEO</strong>: optimisation for Google's AI Overviews specifically. Tightly
        bound to Google ranking factors. Schema-heavy. Source-dependent.</li>
      <li><strong>GEO</strong>: optimisation for ChatGPT, Perplexity, Claude, Bing Copilot
        and emerging generative engines. Less schema-dependent (these engines crawl
        differently). More dependent on third-party citations, podcast mentions, Wikipedia
        presence, and "reputation across the open web".</li>
    </ul>
    <p>
      <a href="/generative-engine-optimisation/">The GEO pillar covers what we do specifically
      for the non-Google engines.</a>
    </p>

    <div class="callout callout--info">
      <h3>The one opinion that matters</h3>
      <p>
        Every retainer client we onboard from another agency in 2025 has the same gap:
        zero AEO work on their existing pages. The previous agency has either decided AEO
        does not matter yet, or has not updated their content template in three years.
        Both are version of the same problem. The cost of catching up later is roughly
        double the cost of building it in from the start.
      </p>
    </div>

    {render_cta_block(
      headline="AEO audit included on every full audit",
      body=(
        "The $1,200 audit covers AEO readiness alongside the regular technical, on-page, "
        "local and content review. You will get a prioritised list of which pages need "
        "AEO work first and what the highest-leverage changes are."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/generative-engine-optimisation/"><h3>Generative Engine Optimisation (GEO)</h3><p>Ranking inside ChatGPT, Perplexity, Claude.</p></a>
      <a class="card" href="/seo-services-sydney/"><h3>SEO Services</h3><p>The full retainer scope.</p></a>
      <a class="card" href="/seo-packages-sydney/"><h3>Pricing</h3><p>AEO add-on $800/mo.</p></a>
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
    crumbs = [("/", "Home"), ("/answer-engine-optimisation/", "Answer Engine Optimisation")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about={"@type": "Thing", "name": "Answer Engine Optimisation"},
        ),
        faq_page_schema(FAQS),
    ]
