"""Generative Engine Optimisation pillar."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "generative-engine-optimisation"
TITLE = "Generative Engine Optimisation (GEO): Ranking in ChatGPT and Perplexity"
DESCRIPTION = (
    "What GEO actually is, how ChatGPT, Perplexity and Claude pick which sites to cite, "
    "and how to optimise for engines that do not behave like Google."
)

FAQS = [
    (
        "How is GEO different from AEO?",
        "AEO targets Google's AI Overviews specifically and follows Google's ranking "
        "patterns closely. GEO targets ChatGPT, Perplexity, Claude, Bing Copilot, and "
        "other generative engines that crawl differently and weight different signals "
        "(third-party citations, Wikipedia, podcast mentions, reddit). Both matter; they "
        "overlap but are not the same job."
    ),
    (
        "Does GEO work?",
        "Yes, with caveats. We can move ChatGPT and Perplexity recommendations on category "
        "queries with deliberate work. Claude is harder to influence (limited tooling). "
        "Bing Copilot tracks closely with regular Bing SEO. The improvements are not "
        "instantly measurable like Google rankings, which is why we run prompt-testing "
        "as quarterly snapshots."
    ),
    (
        "What does a GEO retainer actually deliver?",
        "On the $800/mo AEO/GEO add-on: monthly prompt-coverage report across ChatGPT, "
        "Perplexity, Claude. Pitch list for high-citation third-party sites (industry "
        "blogs, AU-specific Wikipedia categories, podcast appearances). Content shape "
        "review on every page. Schema enrichment for engines that pull structured data."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/generative-engine-optimisation/", "Generative Engine Optimisation")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>Generative Engine Optimisation: ranking where Google does not own the answer</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        GEO is the practice of optimising for ChatGPT, Perplexity, Claude, and other
        generative engines, which now collectively reach hundreds of millions of weekly
        users. Each engine has different crawling patterns, citation logic, and reputation
        weights. Pages that win on Google do not automatically win here. We treat GEO as
        a separate measurable practice with its own quarterly reporting layer.
      </p>
    </aside>

    <nav class="toc" aria-label="On this page">
      <p class="toc__heading">On this page</p>
      <ol>
        <li><a href="#what-is-geo">What GEO is</a></li>
        <li><a href="#why-it-matters">Why it matters</a></li>
        <li><a href="#engines">The engines we optimise for</a></li>
        <li><a href="#what-we-do">What we actually do</a></li>
        <li><a href="#measurement">How we measure it</a></li>
      </ol>
    </nav>

    <h2 id="what-is-geo">What GEO is</h2>
    <p>
      Generative Engine Optimisation is the practice of structuring your content, your
      schema, and your wider digital presence so generative AI assistants recommend you
      when asked category questions in your space. "Recommend" can mean cited in a
      response, mentioned by name in an answer, or shown as a source in a Perplexity
      reply.
    </p>
    <p>
      Unlike Google SEO, GEO depends heavily on signals from outside your own site. The
      generative engines pull from Wikipedia, reddit, industry blogs, podcasts, news
      coverage, and structured directories. Reputation across the open web matters more
      than backlinks per se.
    </p>

    <h2 id="why-it-matters">Why GEO matters</h2>
    <ul class="checklist">
      <li><strong>ChatGPT search reached ~250 million weekly users by late 2024</strong>
        (OpenAI announcements). That audience is being given category answers without
        ever visiting Google.</li>
      <li><strong>Perplexity has 15+ million monthly users</strong> and is the AI engine
        most likely to cite specific URLs in answers, making it the highest-traffic source
        of GEO referrals today.</li>
      <li><strong>Claude is bundled into Anthropic's enterprise customers</strong> and a
        growing set of consumer apps. Lower traffic but high-influence audience.</li>
    </ul>
    <p>
      The aggregate is a meaningful slice of the discovery layer that did not exist three
      years ago. Brand visibility inside these engines is now its own marketing surface,
      separate from search.
    </p>

    <h2 id="engines">The engines we optimise for</h2>
    <ol>
      <li><strong>ChatGPT</strong> (with search). Cites sources inconsistently but
        increasingly. Pulls from Bing index plus its own crawler. Weighting unclear but
        strong Wikipedia presence and recent news coverage help.</li>
      <li><strong>Perplexity</strong>. Cites sources explicitly with hyperlinks. Closer to
        a search engine in citation behaviour, friendlier to traditional SEO signals,
        rewards FAQ-shaped pages.</li>
      <li><strong>Claude</strong> (browsing mode and through downstream apps). Limited
        public tooling; influence is mostly through reputation across open-web sources.</li>
      <li><strong>Bing Copilot</strong>. Behaves closely to Bing search ranking factors,
        so traditional SEO carries over.</li>
    </ol>

    <h2 id="what-we-do">What we actually do</h2>
    <p>
      On the $800 per month AEO/GEO add-on, four streams of work run alongside the regular
      SEO retainer.
    </p>
    <ol>
      <li><strong>Page-level content shape</strong>. Same AEO-shaping techniques (answer-
        first leads, FAQ schema, citable statistics) apply. Plus engine-specific tweaks: tighter
        section H2/H3 hierarchy for Perplexity citation, more aggressive entity markup
        (schema.org) for Claude crawling.</li>
      <li><strong>Third-party citation building</strong>. Pitch list of AU industry blogs,
        podcast appearances, expert-quote opportunities (HARO, Qwoted, SourceBottle).
        Goal: build a footprint that generative engines pull from when forming category
        recommendations.</li>
      <li><strong>Wikipedia and structured directories</strong>. If the brand is notable
        enough, a Wikipedia page substantially lifts citation rate in ChatGPT and Claude.
        Where not notable enough, structured directory presence (industry databases, AU
        government registers) plays a similar role.</li>
      <li><strong>Prompt testing and coverage tracking</strong>. Quarterly snapshot of how
        target category prompts resolve in ChatGPT, Perplexity, Claude. The output is a
        matrix showing which engines mention you, how, and how often.</li>
    </ol>

    <h2 id="measurement">How we measure GEO performance</h2>
    <p>
      GEO measurement is less mature than SEO measurement. We do not pretend otherwise.
      Three things we do measure, monthly or quarterly:
    </p>
    <ul class="checklist">
      <li><strong>Prompt coverage</strong>. Defined set of category prompts, run quarterly,
        scored on whether each engine mentions you. Trend tracked over time.</li>
      <li><strong>Referrer traffic</strong>. GA4 referrer filtering picks up Perplexity
        and ChatGPT visits. Volume is small but growing, and the engagement is high
        because the user already read about you before clicking.</li>
      <li><strong>Branded query lift</strong>. GEO citations drive branded search later
        (someone hears your name in a Perplexity answer, then Googles you). Branded query
        volume on tools like Google Search Console is a lagging but reliable indicator.</li>
    </ul>

    <div class="callout callout--info">
      <h3>The opinion we hold strongest on GEO</h3>
      <p>
        GEO is the most underpriced marketing channel right now. Most agencies do not offer
        it. Most clients do not ask for it. The cost of building a credible Perplexity and
        ChatGPT presence over six months is materially less than the cost of buying
        equivalent paid search traffic, and the asset compounds. The window where this is
        cheap will not stay open forever.
      </p>
    </div>

    {render_cta_block(
      headline="AEO and GEO included on the full SEO retainer",
      body=(
        "The AEO/GEO add-on bolts onto either retainer for $800 per month. Or get a single "
        "AEO/GEO readiness audit for $1,200, written report inside 7 business days."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/answer-engine-optimisation/"><h3>Answer Engine Optimisation (AEO)</h3><p>The Google AI Overviews half of the same job.</p></a>
      <a class="card" href="/seo-services-sydney/"><h3>SEO Services</h3><p>The full retainer scope.</p></a>
      <a class="card" href="/seo-packages-sydney/"><h3>Pricing</h3><p>AEO/GEO add-on $800/mo.</p></a>
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
    crumbs = [("/", "Home"), ("/generative-engine-optimisation/", "Generative Engine Optimisation")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about={"@type": "Thing", "name": "Generative Engine Optimisation"},
        ),
        faq_page_schema(FAQS),
    ]
