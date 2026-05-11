"""SEO Services Sydney."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-services-sydney"
TITLE = "SEO Services Sydney: Technical, On-Page, Content, Links"
DESCRIPTION = (
    "What is actually in an SEO service in 2025. Technical, on-page, local, content, "
    "links, AEO/GEO. Flat pricing, no setup fees. Sydney-based."
)

FAQS = [
    (
        "Do you do technical SEO, on-page SEO, and content separately?",
        "Yes if you want them separately, but most clients are better off with a single "
        "retainer that covers all three in order. Technical fixes go first because they "
        "remove the ceiling. On-page work goes next because it covers more keyword surface "
        "fast. Content goes last because writing pages that target topics your site is not "
        "trusted on yet is wasted work."
    ),
    (
        "Do you build backlinks?",
        "On the full SEO retainer, yes. We focus on relevant AU links: digital PR, "
        "guest posts on industry blogs, podcast appearances, partnerships, listings on "
        "the AU directories that actually pass authority. We do not buy links, do not "
        "do PBNs, and do not run link exchanges."
    ),
    (
        "How is content briefing different from content writing?",
        "We brief the page (target keyword, headings, FAQ list, suggested word count, "
        "internal link map). You or a writer you choose draft it. We review and tighten "
        "before publishing. The reason: most generic agency content gets written by a "
        "junior writer who does not know your business. Your in-house voice is the "
        "competitive advantage. Our job is to shape where it points."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-services-sydney/", "SEO Services")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO services Sydney: what is actually in the work</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        An SEO retainer in 2025 is six things, in order: technical fixes, on-page optimisation,
        local presence (GBP, citations, reviews), content, links, and AEO/GEO. We do them in that
        order because each unlocks the next. Anything else is invented work.
      </p>
    </aside>

    <nav class="toc" aria-label="On this page">
      <p class="toc__heading">On this page</p>
      <ol>
        <li><a href="#technical">Technical SEO</a></li>
        <li><a href="#on-page">On-page SEO</a></li>
        <li><a href="#local">Local SEO and GBP</a></li>
        <li><a href="#content">Content strategy and briefing</a></li>
        <li><a href="#links">Link building</a></li>
        <li><a href="#aeo-geo">AEO and GEO optimisation</a></li>
        <li><a href="#reporting">Reporting</a></li>
      </ol>
    </nav>

    <h2 id="technical">Technical SEO</h2>
    <p>
      The unsexy first move. Most Sydney sites we audit have a dozen technical issues that
      cap how high the page can rank no matter how good the content is. Common ones:
      Core Web Vitals failing on mobile, robots.txt blocking the wrong things, sitemap
      missing key pages, hreflang misconfigured, JavaScript hiding content from crawlers,
      duplicate canonical tags, missing schema.
    </p>
    <p>
      Technical fixes do not produce content for you. They remove the ceiling on every page
      you have already published. We start every retainer here.
    </p>

    <h2 id="on-page">On-page SEO</h2>
    <p>
      Once the foundation is clean, on-page work covers the most keyword surface fastest.
      Title tags rewritten to match search intent. Meta descriptions for CTR, not stuffing.
      Heading hierarchy fixed. Schema markup added or upgraded. Internal links pointing the
      right pages at the right pillars. Image alt text actually describing the image.
    </p>
    <p>
      On a typical Sydney service site with 12 to 30 pages, this work alone can move 4 to 10
      keywords up within 6 to 8 weeks. It is the highest leverage thing you can do before
      writing new content.
    </p>

    <h2 id="local">Local SEO and Google Business Profile</h2>
    <p>
      For 90 per cent of our clients, this is the work that moves rankings fastest.
      Verify and merge any duplicate GBP listings. Set service areas to the actual suburbs
      served, not "Sydney" globally. Add every service you offer with the right naming.
      Upload current photos. Build out service-area pages on the site that mirror the GBP
      service areas. Get into the AU directories that pass authority and pull from the
      ones that do not.
    </p>
    <p>
      The Belrose plumber we audited last year had unverified GBP, no service areas set, 12
      duplicate listings on AU directories, and no schema on his site. Three weeks of fixes
      moved him from invisible to top 3 on "emergency plumber Belrose" within 90 days.
      <!-- TODO: replace with real client story -->
    </p>
    <p>
      <a href="/local-seo-sydney/">The local SEO pillar covers exactly what we do and why
      it matters more than backlinks for most Sydney trades.</a>
    </p>

    <h2 id="content">Content strategy and briefing</h2>
    <p>
      Content is the fourth move, not the first. The reason: writing a page that targets a
      topic your domain is not yet trusted on is mostly wasted work. Once the technical,
      on-page, and local fundamentals are in, content compounds.
    </p>
    <p>
      We brief, you (or your writer) draft, we review and tighten. The brief covers target
      keyword, intent classification, suggested word count, heading structure, FAQ list,
      internal link map, AEO-shaped first paragraph. The reason we brief instead of writing
      is that your in-house voice is your competitive advantage. Generic agency-written
      content reads like every other agency-written page on the internet, and Google now
      penalises that pattern.
    </p>

    <h2 id="links">Link building</h2>
    <p>
      Included in the full SEO retainer. Focused on relevant AU links: digital PR pitches,
      guest posts on industry blogs, podcast appearances, supplier and partner sites, the
      directories that actually pass authority (HomeImprovementPages, Yellow Pages AU, TrueLocal),
      and skipping the ones that do not.
    </p>
    <p>
      We do not buy links. We do not do PBNs. We do not run link exchanges. Both ethically
      and practically: bought links work for six months and then crater the domain.
    </p>

    <h2 id="aeo-geo">AEO and GEO optimisation</h2>
    <p>
      Every page we touch gets AEO-shaped from day one. Direct-answer first paragraph,
      FAQ schema on relevant pages, citable statistics with sources, structured tables for
      data that AI Overviews can lift. The retainer add-on goes deeper: prompt testing,
      coverage tracking, GEO-specific landing patterns.
    </p>
    <p>
      <a href="/answer-engine-optimisation/">The AEO pillar covers what to actually do</a>.
      <a href="/generative-engine-optimisation/">The GEO pillar covers the same for ChatGPT
      and Perplexity</a>.
    </p>

    <h2 id="reporting">Reporting</h2>
    <p>
      Same keyword list every month. Same KPIs. Same dashboard. We do not "evolve the
      reporting framework" mid-retainer because the previous month looked bad. The kit:
      keyword rankings (ranked, top-3, top-10 counts), organic traffic by page, GBP
      impressions and direction clicks, lead form completions, AEO citations tracked
      where measurable.
    </p>

    <div class="callout callout--info">
      <h3>When NOT to hire us</h3>
      <p>
        If you want a 40-page proposal with a SWOT analysis and a "strategic roadmap"
        before any work happens, we are not the right agency. The proposal is the audit.
        The audit costs $1,200. If you want it free upfront, that cost is hidden somewhere
        in the retainer pricing of whichever agency wrote it for you.
      </p>
    </div>

    {render_cta_block()}

    <h2>Related reading</h2>
    <div class="card-grid">
      <a class="card" href="/seo-sydney/"><h3>SEO Sydney pillar</h3><p>The full picture of how SEO works in the Sydney market.</p></a>
      <a class="card" href="/seo-packages-sydney/"><h3>Pricing</h3><p>Flat AUD pricing, all-in, GST included. One page.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The work that moves Sydney trades fastest.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-services-sydney/", "SEO Services")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO Services", description="Technical, on-page, local, content, links, AEO", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
