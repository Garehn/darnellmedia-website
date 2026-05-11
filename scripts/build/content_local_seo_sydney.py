"""Local SEO Sydney."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "local-seo-sydney"
TITLE = "Local SEO Sydney: GBP, Citations, Suburb Pages That Rank"
DESCRIPTION = (
    "How local SEO actually works for Sydney service businesses. GBP optimisation, "
    "citations, reviews, suburb pages, schema. The cheapest highest-ROI move you can make."
)

FAQS = [
    (
        "What is the difference between local SEO and regular SEO?",
        "Regular SEO targets queries without a location modifier (\"emergency electrician\"). "
        "Local SEO targets the same queries with location signals (\"emergency electrician "
        "Belrose\") and tries to win in the Map Pack as well as organic listings. The Map "
        "Pack is the three-result block with the map at the top of local searches and gets "
        "more clicks than the regular organic block on local queries."
    ),
    (
        "How long does local SEO take in Sydney?",
        "Fastest of any SEO work. A well-fixed GBP plus a tight on-page setup can move "
        "rankings inside 4 to 8 weeks for low-to-medium competition suburbs. CBD-level "
        "competition takes longer, sometimes 4 to 6 months."
    ),
    (
        "Do I need a physical address in every suburb I want to rank in?",
        "No. You need a verified GBP with the right service-area set, plus on-site "
        "service-area pages for the suburbs you serve. A solo trade with no shopfront can "
        "rank locally across a dozen suburbs in Sydney metro this way. What you cannot do "
        "is fake addresses in suburbs you do not actually serve. Google catches that and "
        "it kills the listing."
    ),
    (
        "How many reviews do I need to rank?",
        "Relative numbers matter more than absolute. If the top 3 in the Map Pack for your "
        "category have 80, 60, and 40 reviews, you want 50+ to compete. Quality and recency "
        "matter more than quantity. Twenty recent reviews with detail beat 100 thin reviews "
        "from 2019. Get into a routine of asking every happy customer, every time."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/local-seo-sydney/", "Local SEO Sydney")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>Local SEO Sydney: the cheapest highest-ROI move in search</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        For 90 per cent of Sydney service businesses, local SEO produces more leads, faster,
        than backlinks, content, or paid ads. GBP fixes are free. Service-area pages cost a
        few hours of writing. The most valuable hour of SEO work most small businesses can do
        is claiming and properly setting up their Google Business Profile.
      </p>
    </aside>

    <nav class="toc" aria-label="On this page">
      <p class="toc__heading">On this page</p>
      <ol>
        <li><a href="#gbp">Google Business Profile</a></li>
        <li><a href="#service-area">Service-area pages</a></li>
        <li><a href="#citations">Citations</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#schema">Local schema</a></li>
        <li><a href="#when-not">When local SEO will not work</a></li>
      </ol>
    </nav>

    <h2 id="gbp">Google Business Profile (GBP)</h2>
    <p>
      The single biggest ranking lever for any local business. Most businesses we audit
      have a GBP that is partly set up, partly verified, and missing the things that
      actually rank. The checklist that moves rankings is short and unsexy.
    </p>
    <ul class="checklist">
      <li>Verify the listing (and merge or close any duplicates)</li>
      <li>Set the primary category correctly (use exactly the closest match)</li>
      <li>Add every secondary category that applies (most businesses can add 3-6)</li>
      <li>Set the service area to the actual suburbs you serve, not "Sydney" globally</li>
      <li>Add every service with its real name (not "general plumbing" but "hot water unit
        replacement", "blocked drain", "leak detection")</li>
      <li>Upload current photos: shopfront, vehicles, team, recent jobs (minimum 20)</li>
      <li>Match the business name, address, and phone exactly across the site and citations
        (NAP consistency)</li>
      <li>Post at least monthly: offers, news, photos of recent jobs</li>
    </ul>
    <p>
      None of this costs money. All of it moves rankings. The Belrose plumber in our audit
      example moved from invisible to top 3 on "emergency plumber Belrose" inside 90 days
      after doing only this list and a handful of on-site fixes.
      <!-- TODO: replace with real client story -->
    </p>

    <h2 id="service-area">Service-area pages on your site</h2>
    <p>
      The on-site mirror of your GBP service areas. If your GBP serves Belrose, Frenchs Forest,
      Forestville, Davidson, and Killara, you need a page on the site for each. The pages
      should not be copy-paste duplicates, which Google will detect and ignore. Each needs
      genuinely different content: local landmarks, common problems in that suburb (older
      housing stock, specific subdivisions, suburb-specific council requirements), local
      pricing if relevant, real testimonials with the suburb mentioned.
    </p>
    <p>
      We typically build 4 to 6 service-area pages in the first quarter of a retainer.
      Tight, useful, 800 to 1,000 words each. Each linked from the homepage and from the
      main service pages. Each with LocalBusiness schema referencing the same physical
      address as the GBP.
    </p>

    <h2 id="citations">Citations</h2>
    <p>
      Mentions of your business name, address, and phone (NAP) on directories and industry
      sites. They matter less than they did in 2015, but they still move the needle for new
      businesses and they catch issues with NAP consistency that are otherwise hard to spot.
    </p>
    <p>
      The AU directories that still pass authority and are worth maintaining:
      HomeImprovementPages, Yellow Pages AU, TrueLocal, Yelp (yes, still), industry-specific
      directories (e.g. ServiceSeeking for trades, BUPA partners for vets, etc.). The ones
      to skip: pay-to-list directories with no organic search traffic.
    </p>

    <h2 id="reviews">Reviews</h2>
    <p>
      Reviews matter more than backlinks for local search. They influence both the algorithm
      (review count and recency are direct ranking factors for the Map Pack) and the user
      (3.5 stars converts dramatically worse than 4.5, regardless of position). Two practical
      moves matter most.
    </p>
    <ol>
      <li><strong>Ask every happy customer, every time.</strong> Two-thirds of reviews come
        from this single change. Most businesses ask less than 20 per cent of their customers.</li>
      <li><strong>Reply to every review, positive or negative.</strong> The reply is a public
        signal of how you handle issues, and recency matters in the algorithm.</li>
    </ol>

    <h2 id="schema">Local schema</h2>
    <p>
      The structured data that tells search engines exactly what your business is. Every
      page on your site should carry the relevant local schema. LocalBusiness (or
      ProfessionalService, Plumber, Electrician, etc.) for the homepage and contact page.
      Service for service pages. BreadcrumbList everywhere. FAQPage on pages with FAQs.
    </p>
    <p>
      Schema matters more in 2025 than it did in 2024, because AI Overviews and Perplexity
      both rely on structured data to determine what your page is about. Pages without
      schema get ignored by AI engines even when they rank.
    </p>

    <div class="callout callout--info">
      <h3>One strong opinion</h3>
      <p>
        GBP optimisation should be the first three hours of work on any Sydney local SEO
        engagement. We sometimes do it inside the audit, just to demonstrate. The cost of
        delaying it past the first week of a retainer is days of lost rankings every day
        the listing stays partly set up.
      </p>
    </div>

    <h2 id="when-not">When local SEO will not work</h2>
    <ul class="warnlist">
      <li>Your service area is genuinely national and you sell B2B SaaS. You need different SEO.</li>
      <li>Your business is brand new with no reviews and no GBP history. Local SEO will
        eventually work but the first 90 days look slow. Be patient or supplement with Ads.</li>
      <li>You have multiple competing listings (e.g. legacy "[suburb] Plumbing" listings
        for the same business). Sort out the GBP mess first.</li>
      <li>Your business name is identical to a generic search query (e.g. "Sydney Plumbing").
        Google may treat that as too generic to rank. Solvable, but harder.</li>
    </ul>

    {render_cta_block(
      headline="Free GBP audit on the discovery call",
      body=(
        "We will pull up your GBP listing live on the call and walk you through what to "
        "fix in the next 24 hours, free of charge. If you decide to engage us for the full "
        "audit afterward, great. If not, you keep the GBP fixes."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>Local SEO applied to plumbers, electricians, and trades.</p></a>
      <a class="card" href="/seo-sydney/"><h3>SEO Sydney pillar</h3><p>The full picture.</p></a>
      <a class="card" href="/seo-packages-sydney/"><h3>Pricing</h3><p>The local SEO retainer.</p></a>
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
    crumbs = [("/", "Home"), ("/local-seo-sydney/", "Local SEO Sydney")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="Local SEO", description="Local SEO and GBP optimisation for Sydney businesses", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
