"""About page."""

from .template import (
    SITE_URL, FOUNDER_NAME, FOUNDER_ROLE, FOUNDED_YEAR,
    breadcrumb_schema, blog_posting_schema, founder_person_schema,
    render_breadcrumbs, render_cta_block,
)

SLUG = "about"
TITLE = f"About Darnell Media | {FOUNDER_NAME}, Sydney SEO"
DESCRIPTION = (
    "Darnell Media is a Sydney SEO agency founded in 2025 by Garehn Kalloghlian. "
    "Flat pricing, audit before retainer, six-month max contracts, AEO/GEO included."
)


def body() -> str:
    crumbs = [("/", "Home"), ("/about/", "About")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>About Darnell Media</h1></header>

    <p class="lead">
      Darnell Media is a Sydney SEO consultancy founded in {FOUNDED_YEAR} by Garehn Kalloghlian.
      We focus on tradies and home-service businesses, with AEO and GEO included as standard.
      Audit before retainer. Flat pricing. Six-month maximum contract. The founder still
      answers the phone.
    </p>

    <h2>Why we exist</h2>
    <p>
      Most Sydney SEO retainers waste 60 per cent of the budget on meetings instead of work.
      Most retainer agreements are designed to protect the agency from clients who notice
      nothing is happening. Most "comprehensive digital marketing solutions" are Wix
      templates plus four blog posts a year, billed at four thousand dollars a month.
    </p>
    <p>
      The breaking point for starting Darnell Media was a Belrose plumber friend who paid
      an agency thirty thousand dollars over eighteen months and ranked for nothing.
      <!-- TODO: replace with real client story -->
      No GBP optimisation, no on-page work, no schema, just monthly "content strategy"
      calls. The fix would have been roughly three weeks of focused work. He never got
      three weeks of focused work. He got eighteen months of meetings.
    </p>
    <p>
      Darnell Media is the agency built around the opposite premise. The audit goes first,
      so you know what you are buying. Pricing is flat, so we cannot stretch the work.
      Contracts cap at six months, so we have to earn the renewal. AEO and GEO are included
      as standard, because pretending search did not change in 2024 is how clients lose
      ground.
    </p>

    <h2>What we do</h2>
    <ul class="checklist">
      <li>SEO audits for Sydney service businesses, $1,200 flat, written report in 7 days</li>
      <li>Local SEO retainers from $1,800/month</li>
      <li>Full SEO retainers (including link building and content scale) from $2,800/month</li>
      <li>AEO and GEO add-on (AI Overviews, ChatGPT, Perplexity) from $800/month</li>
      <li>Consultancy for in-house marketing teams that need a senior SEO brain on retainer</li>
    </ul>
    <p>
      <a href="/seo-services-sydney/">The services page covers what each phase of the work
      actually includes.</a>
    </p>

    <h2>What we don't do</h2>
    <ul class="warnlist">
      <li>Contracts longer than six months</li>
      <li>Setup fees</li>
      <li>Performance pricing tied to ranking guarantees (a fire risk for your domain)</li>
      <li>Google Ads management (we refer you to two AU agencies we trust)</li>
      <li>Web design, branding, social media</li>
      <li>Industries regulators have flagged (gambling, vape, payday loans)</li>
    </ul>

    <h2>About Garehn</h2>
    <div class="author-card">
      <div class="author-card__avatar" aria-hidden="true">GK</div>
      <div>
        <p class="author-card__name">{FOUNDER_NAME}</p>
        <p class="author-card__role">{FOUNDER_ROLE}</p>
        <p class="author-card__bio">
          Garehn started Darnell Media in {FOUNDED_YEAR} after years working in and around
          Sydney SEO. Lives in Belrose, runs every audit and retainer personally, caps the
          agency at 12 retainer clients at a time. Reachable on the phone during business
          hours, by email any time.
        </p>
      </div>
    </div>

    <h2>How to talk to us</h2>
    <p>
      The shortest path is a free 20-minute discovery call. We work out what you actually
      need. Sometimes that is a retainer with us. Sometimes it is the $1,200 audit plus
      self-implementation. Sometimes it is a referral to a paid-search agency because SEO
      is not the right next move. The call is free either way.
    </p>

    {render_cta_block()}

    <h2>Our address</h2>
    <p>
      6 Lyndhurst Way, Belrose NSW 2085 (Northern Beaches, Sydney). Visits by appointment.
      Most client work happens remote or on-site at the client.
    </p>
    <p>ABN 49 563 154 851. Founded {FOUNDED_YEAR}.</p>
  </div>
</article>
"""


def schema_graph():
    crumbs = [("/", "Home"), ("/about/", "About")]
    return [
        breadcrumb_schema(crumbs),
        {
            "@type": "AboutPage",
            "name": TITLE,
            "description": DESCRIPTION,
            "url": f"{SITE_URL}/about/",
            "mainEntity": {"@id": f"{SITE_URL}/#organization"},
        },
    ]
