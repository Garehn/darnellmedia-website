"""SEO Consultant Sydney — personal-brand page."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, founder_person_schema,
    render_breadcrumbs, render_byline, render_cta_block, FOUNDER_NAME,
)

SLUG = "seo-consultant-sydney"
TITLE = "Sydney SEO Consultant: Garehn Kalloghlian, Darnell Media"
DESCRIPTION = (
    "Sydney SEO consultant taking a small caseload of tradie and home-service clients. "
    "Audit-first, flat-priced, AEO/GEO included. Belrose-based, AU-wide remote."
)

FAQS = [
    (
        "Is hiring a consultant different from hiring an agency?",
        "Practically, yes. With us specifically, no. Darnell Media is an agency in legal "
        "structure but a consultancy in practice: same person on the discovery call, the "
        "audit, the strategy, and the monthly call. We do not hand you off to a junior "
        "account manager. We also cap the number of retainer clients at 12 for exactly "
        "this reason."
    ),
    (
        "Are you taking new clients?",
        "Usually yes, but we cap at 12 retainer clients at a time. If we are full when "
        "you enquire, we will tell you and put you on a short waitlist. We try not to "
        "take on more than we can do properly."
    ),
    (
        "Will you work with my existing marketing team or agency?",
        "Often. SEO consulting alongside an in-house team or a separate paid-media agency "
        "is one of the most common shapes our retainers take. Roles get defined upfront: "
        "we own SEO strategy and execution; you (or the other agency) own design, paid, "
        "creative, brand. We do not poach scope."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-consultant-sydney/", "SEO Consultant Sydney")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>Sydney SEO consultant, not a content factory</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Darnell Media is a consultancy in everything but legal structure. {FOUNDER_NAME}
        runs every engagement personally. We cap at 12 retainer clients so the work stays
        deep. Audit before retainer. Flat pricing. Six-month maximum contract.
      </p>
    </aside>

    <h2>Why hire a consultant, not a bigger agency</h2>
    <p>
      Most Sydney SEO agencies hide the consultant behind a sales team and an account
      manager. You get a good pitch on the discovery call, then you get handed off to
      someone you have never met. The strategy stays at the senior level. The execution
      drops to a junior. The reporting gets prettier as the rankings get worse.
    </p>
    <p>
      Darnell Media is built around the opposite. {FOUNDER_NAME} runs every audit, every
      strategy doc, every monthly call. Junior support exists for execution tasks (data
      pulls, citation submissions, basic content briefs) but the consultant is the
      consultant on every retainer, every month.
    </p>
    <p>
      That is also why we cap at 12 retainer clients. Past 12, you cannot do the work
      personally. Past 12, you become an agency.
    </p>

    <h2>Where I am most useful</h2>
    <ul class="checklist">
      <li>Sydney service businesses with 10 to 100 employees and a real service area</li>
      <li>Tradies and home services that want to rank locally and have not figured out GBP
        and on-page well enough yet</li>
      <li>Established businesses that have been on a retainer with another agency for 6+
        months and are seeing nothing</li>
      <li>Businesses that have not started SEO at all and want to do it right rather than
        get sold a generic package</li>
      <li>Existing in-house marketing teams that want a senior SEO brain on retainer for
        strategy and review</li>
    </ul>

    <h2>Where I am not the right hire</h2>
    <ul class="warnlist">
      <li>National brands needing a 10-person team to run multi-market SEO at scale</li>
      <li>E-commerce sites with 10,000+ SKUs needing dedicated technical SEO and feed
        management</li>
      <li>SaaS or B2B brands needing content at very high volume (multiple posts a week)</li>
      <li>Anything where a regulator has flagged the category (gambling, vape, payday)</li>
    </ul>

    <div class="callout callout--info">
      <h3>The "why we exist" version</h3>
      <p>
        I started Darnell Media in 2025 after watching one too many tradies pay $4,000 a
        month for a Wix template and four blog posts a year. The breaking point was a
        Belrose plumber friend who paid an agency $30,000 over 18 months and ranked for
        nothing.
        <!-- TODO: replace with real client story -->
        Darnell Media is the agency I wished he could have hired instead.
      </p>
    </div>

    {render_cta_block(
      headline="Talk it through on a 20-minute call",
      body=(
        "We work out what kind of help you actually need. Sometimes it is a retainer with "
        "us. Sometimes it is the audit and a self-implementation. Sometimes it is a "
        "referral to a better-fit agency. The call is free either way."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/about/"><h3>About Darnell Media</h3><p>The longer version of why this agency exists.</p></a>
      <a class="card" href="/seo-services-sydney/"><h3>What is in the work</h3><p>Service breakdown.</p></a>
      <a class="card" href="/seo-packages-sydney/"><h3>Pricing</h3><p>Flat AUD pricing.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-consultant-sydney/", "SEO Consultant Sydney")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(slug=SLUG, headline=TITLE, description=DESCRIPTION),
        faq_page_schema(FAQS),
    ]
