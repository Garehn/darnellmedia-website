"""SEO for Tradies — industry pillar."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-for-tradies"
TITLE = "SEO for Tradies in Sydney: What Actually Moves the Phone"
DESCRIPTION = (
    "Plain-English SEO for tradies in Sydney. Why most tradie SEO retainers waste money, "
    "what to fix first, and what realistic results look like in 90 days."
)

FAQS = [
    (
        "How much should a tradie spend on SEO?",
        "$1,800 to $2,800 per month is the working band for a Sydney service-area trade. "
        "Below $1,800 the work is too thin to matter. Above $2,800 the next dollar of "
        "spend is usually better in Google Ads, until the SEO retainer has been running "
        "for 6+ months and content can scale."
    ),
    (
        "Is SEO better than Google Ads for tradies?",
        "Neither beats the other. Ads buy you leads immediately while SEO builds. SEO "
        "compounds while Ads stay flat. Most tradies should run a small Ads budget for "
        "the first 3-6 months of an SEO engagement to keep the phone ringing while SEO "
        "ramps."
    ),
    (
        "How long before I get my first SEO lead?",
        "Depends. A trade with a partly-set-up GBP and a basic site usually starts "
        "getting GBP-driven leads inside the first month, just from cleaning up the "
        "listing. Site-driven organic leads take longer: 2-4 months for the first ones, "
        "6+ months for consistent volume."
    ),
    (
        "Can I do tradie SEO myself?",
        "Some of it, yes. The GBP work is doable for most owner-operators with a Saturday "
        "morning of focus. The on-page basics are doable with a template and 4-6 hours per "
        "service page. Where most tradies plateau is technical SEO and the systematic "
        "content briefing that compounds over months. That is what the retainer is for."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for tradies, written like you are not stupid</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Most tradie SEO retainers waste money on the wrong work, in the wrong order. The
        cheapest, highest-ROI move for almost every Sydney trade is GBP optimisation plus
        four well-written suburb-targeted service pages. We have seen this combination
        produce more leads than $30,000 of "comprehensive digital marketing" did.
      </p>
    </aside>

    <nav class="toc" aria-label="On this page">
      <p class="toc__heading">On this page</p>
      <ol>
        <li><a href="#why-tradie-seo-is-different">Why tradie SEO is different</a></li>
        <li><a href="#what-moves-rankings">What actually moves your rankings</a></li>
        <li><a href="#cost">What it costs</a></li>
        <li><a href="#timeline">Realistic timeline</a></li>
        <li><a href="#diy-vs-retainer">DIY vs retainer</a></li>
        <li><a href="#when-not">When NOT to hire us</a></li>
      </ol>
    </nav>

    <h2 id="why-tradie-seo-is-different">Why tradie SEO is different from corporate SEO</h2>
    <p>
      A tradie wins or loses on Maps, not on organic listings. When someone in Belrose
      Googles "emergency plumber", they tap one of the top three Map Pack listings 70 per
      cent of the time, before they ever look at the regular results below.
    </p>
    <p>
      That is the entire game for most local trades. Be in the Map Pack for the queries
      your customers type, in the suburbs you serve, with enough reviews and current photos
      that the listing converts the click into a phone call.
    </p>
    <p>
      Every dollar of SEO spend that does not move you closer to being in the Map Pack for
      the right queries is wasted. Most "comprehensive SEO retainers" we see are mostly
      that kind of waste.
    </p>

    <h2 id="what-moves-rankings">What actually moves a tradie's rankings</h2>
    <p>
      Four levers, in order of impact.
    </p>
    <ol>
      <li><strong>GBP optimisation</strong>. Verified listing, correct categories, correct
        service area, all services listed by their real name, 20+ photos, monthly posts,
        responses to every review. Cost: time. ROI: huge.</li>
      <li><strong>Reviews</strong>. Routinely asking every happy customer. Replying to all
        reviews, positive and negative. Local pack listings with 50+ recent reviews
        consistently out-rank ones with 10 old reviews, even when the older listing is
        otherwise stronger.</li>
      <li><strong>Suburb-targeted service pages on your site</strong>. Each page targets
        a real combination of service and suburb you cover (e.g. "blocked drain
        Frenchs Forest"). Each is 800-1,000 words, with real local content, internal
        links, schema, photos.</li>
      <li><strong>Citations and on-site basics</strong>. NAP consistency across AU
        directories. Schema markup on every page. Technical fundamentals (mobile-friendly,
        fast, indexable). Internal linking that connects the service-area pages back to
        the main service pages.</li>
    </ol>
    <p>
      Backlinks matter, but for trades they are level 5, after the first four levers are
      sorted. Most tradies plateau at level 1 because they never got the GBP right.
    </p>

    <h2 id="cost">What tradie SEO costs in Sydney</h2>
    <p>
      The working range is $1,800 to $2,800 per month for retainer SEO. Below $1,800 the
      work is too thin to matter in a Sydney market. Above $2,800 the marginal dollar is
      better in Ads for most trades, until the SEO foundations are mature.
    </p>
    <p>
      <a href="/seo-packages-sydney/">See the full price list and what each retainer
      includes.</a> The $1,200 audit is a one-off, refunded if we are not the right fit.
    </p>

    <h2 id="timeline">Realistic timeline for tradie SEO</h2>
    <ul class="checklist">
      <li><strong>Month 1:</strong> GBP fully optimised. Some early ranking movement on
        easy local queries. Audit complete. Site basics fixed.</li>
      <li><strong>Month 2-3:</strong> First four service-area pages published. Citations
        cleaned up. Reviews routine in place.</li>
      <li><strong>Month 4-6:</strong> Map Pack rankings improving on primary suburb queries.
        Site traffic starting to compound. First measurable lift in phone leads.</li>
      <li><strong>Month 6-12:</strong> Map Pack dominance on home suburb and neighbouring
        ones. Site organic doing 500+ visits per month. Phone leads up materially. Time
        to decide whether to expand into adjacent service areas or new services.</li>
    </ul>

    <div class="callout callout--info">
      <h3>The story we keep telling</h3>
      <p>
        The Belrose plumber. Paying $2,800/mo for 18 months to another agency. Zero rankings,
        unverified GBP, 12 duplicate listings on directories, no schema. Three weeks of
        fixes (GBP, citations, four suburb pages, schema) and 90 days later, top 3 on
        "emergency plumber Belrose" and pulling 3-5 leads a week.
        <!-- TODO: replace with real client story -->
        The work was not magic. It was the obvious work, done in the obvious order, by
        someone who actually did it instead of selling it.
      </p>
    </div>

    <h2 id="diy-vs-retainer">DIY vs retainer</h2>
    <p>
      An honest take. About 30 per cent of tradies who book the audit could implement the
      recommendations themselves over a few weekends if they wanted to. The GBP work is
      not complicated. The suburb pages are not hard to write if you know your trade. The
      citations are tedious but not technical.
    </p>
    <p>
      The reason most tradies still want a retainer is they would rather spend $2,000 a
      month than spend three Saturdays a month doing the work themselves. That is a
      sensible trade. The question is who you pay $2,000 to.
    </p>
    <p>
      We will tell you on the discovery call which side of the line you fall on, no charge.
    </p>

    <h2 id="when-not">When NOT to hire us as a tradie</h2>
    <ul class="warnlist">
      <li>Your business is less than six months old and your domain has zero authority.
        SEO will eventually work but starts slow. Run Google Ads for 3-6 months while
        the SEO foundation is laid.</li>
      <li>You do not answer the phone or return calls within 30 minutes. More leads to
        an unanswered phone is more wasted spend.</li>
      <li>Your conversion rate from quote to job is under 30 per cent. Fix the sales
        process before turning up the lead volume.</li>
      <li>You have under $1,800 per month total SEO budget. Be honest and wait until you
        can fund the work properly.</li>
    </ul>

    {render_cta_block(
      headline="Free GBP audit on the discovery call",
      body=(
        "We will pull up your GBP listing live on the call and walk you through what to "
        "fix in the next 24 hours, free of charge. If the call clarifies whether SEO is "
        "the right next move, that is the point."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Industry-specific guides</h2>
    <div class="card-grid">
      <a class="card" href="/seo-for-plumbers/"><h3>SEO for Plumbers</h3><p>The four levers that move a plumber's phone fastest.</p></a>
      <a class="card" href="/seo-for-electricians/"><h3>SEO for Electricians</h3><p>What actually ranks for electrical trades.</p></a>
      <a class="card" href="/seo-for-pest-control/"><h3>SEO for Pest Control</h3><p>Seasonal demand patterns and the pages that win them.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO for Tradies", description="SEO for Australian tradies and home services", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
