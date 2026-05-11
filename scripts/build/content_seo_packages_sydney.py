"""SEO Packages and Pricing Sydney."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-packages-sydney"
TITLE = "SEO Packages and Pricing Sydney | Flat AUD Pricing"
DESCRIPTION = (
    "Flat-priced SEO packages in Sydney. $1,200 audit, retainers from $1,800/mo, "
    "AEO/GEO add-on $800/mo. No setup fees, no contracts longer than 6 months."
)

FAQS = [
    (
        "Why is your pricing on the website?",
        "Two reasons. First, agency pricing pages exist mostly so prospects can disqualify "
        "themselves before booking a call, which saves everyone time. Second, flat pricing "
        "only works if it is the same flat for everyone. The day we negotiate is the day "
        "the model breaks."
    ),
    (
        "Do you do month-to-month?",
        "After the initial six months, yes. We do not do month-to-month from day one. "
        "Three to six months is the minimum window in which SEO produces results worth "
        "measuring. Anything shorter is just buying setup work."
    ),
    (
        "What if I want a one-off project, not a retainer?",
        "Two options. The $1,200 audit is a one-off and gives you a written 7-day "
        "report. We will sometimes do a fixed-fee project to ship the audit "
        "recommendations (technical fixes, GBP rebuild, on-page work) without a retainer, "
        "priced as a one-off based on scope. The discovery call sorts which path makes sense."
    ),
    (
        "Are you GST-registered?",
        "Yes. ABN 49 563 154 851. All prices on the site include GST."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-packages-sydney/", "SEO Packages")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO packages and pricing</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Discovery calls are free. Audits are $1,200 flat. Retainers start at $1,800 per month
        and cap at six months without auto-renewal. The audit fee credits in full toward the
        first month of retainer if you sign within 14 days. That is the entire pricing page.
      </p>
    </aside>

    <h2>The three things you can buy</h2>
    <div class="pricing-grid">
      <div class="pricing-card">
        <p class="pricing-card__name">SEO Audit</p>
        <p class="pricing-card__price">$1,200</p>
        <p class="pricing-card__period">one-off, GST inc.</p>
        <p class="pricing-card__lede">The way to start. Written 7-day report. Yours to keep.</p>
        <ul>
          <li>Technical audit (Core Web Vitals, crawl, schema, indexation)</li>
          <li>On-page audit (titles, meta, headings, internal linking)</li>
          <li>GBP and citations audit</li>
          <li>Content gap analysis vs top 3 competitors</li>
          <li>Backlink profile review</li>
          <li>AEO/GEO readiness check</li>
          <li>Prioritised fix list with effort and impact</li>
          <li>30-minute walk-through call</li>
        </ul>
        <a class="btn btn--ghost" href="/contact/">Book the audit</a>
      </div>

      <div class="pricing-card pricing-card--feature">
        <p class="pricing-card__name">Local SEO Retainer</p>
        <p class="pricing-card__price">From $1,800</p>
        <p class="pricing-card__period">per month, 3-6 month term</p>
        <p class="pricing-card__lede">Right for Sydney service businesses with a local service area.</p>
        <ul>
          <li>Full GBP optimisation and ongoing management</li>
          <li>On-page work on existing pages</li>
          <li>4 service-area or service pages built per quarter</li>
          <li>Citation audit and clean-up</li>
          <li>Review acquisition setup</li>
          <li>4 content briefs per month</li>
          <li>Monthly written report + 30-minute call</li>
          <li>AEO/GEO basics on every page touched</li>
        </ul>
        <a class="btn btn--primary" href="/contact/">Book a discovery call</a>
      </div>

      <div class="pricing-card">
        <p class="pricing-card__name">Full SEO Retainer</p>
        <p class="pricing-card__price">From $2,800</p>
        <p class="pricing-card__period">per month, 3-6 month term</p>
        <p class="pricing-card__lede">Right when local plus authority and content scale matter.</p>
        <ul>
          <li>Everything in Local SEO</li>
          <li>Active link building (digital PR + guest posts)</li>
          <li>8 content briefs per month</li>
          <li>Quarterly competitive deep-dive</li>
          <li>Conversion rate review on key pages</li>
          <li>Monthly written report + 60-minute call</li>
          <li>Full AEO/GEO included as standard</li>
        </ul>
        <a class="btn btn--ghost" href="/contact/">Book a discovery call</a>
      </div>
    </div>

    <h2>Add-ons</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Add-on</th><th>Price</th><th>What you get</th></tr></thead>
        <tbody>
          <tr><td>AEO/GEO upgrade</td><td><strong>+ $800/mo</strong></td><td>Adds deep AEO/GEO work to either retainer. AI Overview coverage tracking, prompt testing, GEO-specific landing patterns.</td></tr>
          <tr><td>Migration project</td><td><strong>From $2,400 one-off</strong></td><td>Replatforming, domain change, or major site restructure. Scoped from audit findings.</td></tr>
          <tr><td>Penalty recovery</td><td><strong>From $2,400 one-off</strong></td><td>Manual action removal or algorithmic recovery. Outcome-dependent, scoped after diagnostic.</td></tr>
        </tbody>
      </table>
    </div>

    <h2>What we will not do</h2>
    <p>
      The things we get asked for that we say no to. We list them so the discovery call is
      shorter.
    </p>
    <ul class="warnlist">
      <li>Contracts longer than six months. We renew month-to-month after the initial term.</li>
      <li>Setup fees. They exist to make month one look profitable when the work is slow.</li>
      <li>Performance pricing tied to ranking guarantees. Anyone offering this either does
        not understand search or is willing to risk your domain to hit a number.</li>
      <li>Google Ads management. We will refer you to two AU specialists we trust.</li>
      <li>Web design, branding, or social media management. Out of scope.</li>
      <li>Industries we cannot ethically rank: gambling, vape, payday loans, anything
        flagged by a regulator.</li>
    </ul>

    <div class="callout callout--info">
      <h3>Why flat pricing</h3>
      <p>
        Flat pricing is harder to sell than hourly billing. It also does not reward us for
        being slow. We picked flat anyway, because it is the only billing model where our
        incentive matches yours: ship the work, ship it well, ship it in less time than the
        retainer covers.
      </p>
    </div>

    {render_cta_block(
      headline="Free discovery call. Then the audit.",
      body=(
        "Twenty minutes on the phone. We see if SEO is even the right move. "
        "If it is, you decide whether to start with the audit or skip to a retainer scope. "
        "If it is not, we tell you what is."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-services-sydney/"><h3>What is in the work</h3><p>The service breakdown each price covers.</p></a>
      <a class="card" href="/seo-sydney/"><h3>SEO Sydney pillar</h3><p>How Sydney SEO actually works.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The cheapest, highest-ROI lever.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-packages-sydney/", "SEO Packages")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO Packages", description="Flat-priced SEO packages and audit", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
