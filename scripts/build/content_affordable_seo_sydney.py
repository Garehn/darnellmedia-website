"""Affordable SEO Sydney — budget-segment page (Phase 2)."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "affordable-seo-sydney"
TITLE = "Affordable SEO Sydney: What You Get for $1,800-$2,800 a Month"
DESCRIPTION = (
    "Honest look at affordable SEO in Sydney. What is realistic at $1,800, "
    "what changes at $2,800, and when the budget is too low to bother."
)

FAQS = [
    (
        "Is $1,800/mo really 'affordable' Sydney SEO?",
        "Affordable is relative. $1,800/mo is the lower end of the working "
        "band for a Sydney service business. Below that, the work is too "
        "thin to matter in this market. Larger agencies often start at "
        "$3,500-$5,000/mo. So yes, $1,800 is genuinely on the affordable "
        "end of the spectrum without being cheap nonsense."
    ),
    (
        "What about agencies offering SEO at $400 or $800 a month?",
        "Usually one of three things. Either they outsource to overseas "
        "operators with mixed-quality results. Or they batch hundreds of "
        "clients into a template and produce the same generic monthly "
        "report for everyone. Or they cherry-pick easy long-tail keywords "
        "to look like they are ranking. None of these moves a Sydney "
        "service business meaningfully."
    ),
    (
        "Can I get any SEO done for under $1,800/mo?",
        "Yes, by doing it yourself with the $1,200 audit as a one-off "
        "starting point. Half our audit clients do exactly this. Many "
        "come back 6-12 months later for a retainer once they have run "
        "out of road on the DIY side, but the audit alone is a "
        "legitimate path."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-packages-sydney/", "Pricing"), ("/affordable-seo-sydney/", "Affordable SEO")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>Affordable SEO in Sydney, without the cheap-SEO nonsense</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Affordable Sydney SEO has a floor. Under $1,800/mo, the work is
        too thin to move rankings in this market. At $1,800-$2,800, you
        can run a focused local SEO program that compounds. Anything cheaper
        is either DIY (legitimate) or templated busywork (not).
      </p>
    </aside>

    <h2>The Sydney SEO floor: $1,800/month for meaningful work</h2>
    <p>
      A Sydney service-business SEO retainer needs to cover: ongoing GBP
      management, on-page work on 2-4 pages a month, monthly reporting,
      monthly strategy call, technical maintenance, citation upkeep,
      review acquisition support, and content briefing. Below $1,800/mo,
      one of those streams gets dropped, usually the content briefing,
      and the rest get done at half-attention.
    </p>
    <p>
      $1,800-$2,800 is the working band where you can run a focused local
      SEO program that produces measurable results inside 6 months. Above
      $2,800, you start adding link building, deeper content scale, and
      AEO/GEO depth. Below $1,800, you are buying time, not work.
    </p>

    <h2>The cheap-SEO trap</h2>
    <p>
      Sydney has plenty of agencies advertising "SEO from $399/month".
      The math does not work. $399 buys roughly 2-3 hours of senior SEO
      time. That gets you a monthly report and not much else. The agency
      compensates by either:
    </p>
    <ul class="warnlist">
      <li>Outsourcing the work to mixed-quality offshore operators</li>
      <li>Batching hundreds of clients into the same template, producing
        the same generic "we added 3 keywords this month" report for everyone</li>
      <li>Targeting easy long-tail keywords that get rankings but no
        meaningful traffic (e.g. "best plumber Belrose by Lyndhurst Way
        near corner store" — sure, you rank, nobody searches it)</li>
      <li>Selling extra "advanced" services on top, taking the real total
        well past $1,800/mo anyway</li>
    </ul>

    <h2>What you actually get for $1,800/mo with us</h2>
    <ul class="checklist">
      <li>Ongoing GBP management (posting, photos, review responses)</li>
      <li>On-page optimisation work on 2-3 pages per month</li>
      <li>4 service-area or service pages built per quarter</li>
      <li>Citation audit and clean-up (one-off in first 60 days)</li>
      <li>Review acquisition setup and ongoing prompts</li>
      <li>Technical fixes from the audit, prioritised by impact</li>
      <li>Monthly written report with same KPIs every month</li>
      <li>30-minute monthly strategy call</li>
      <li>AEO baseline on every page we touch</li>
    </ul>
    <p>
      Same flat $1,800/mo. No setup fees, no add-on tiers, no
      "advanced services" pricing tricks.
    </p>

    <h2>The honest cheaper alternative: $1,200 audit, then DIY</h2>
    <p>
      Half our audit clients implement the recommendations themselves
      and skip the retainer. That is a legitimate, well-trodden path for
      time-rich, budget-light businesses. The audit costs $1,200 once.
      The implementation might take you 3-6 weekends of focused work.
      Most owner-operators can do it.
    </p>
    <p>
      We will tell you on the discovery call which side of the
      DIY-vs-retainer line you are on, no charge.
    </p>

    <div class="callout callout--info">
      <h3>When the answer is "wait six months and come back"</h3>
      <p>
        Sometimes the right call is neither audit nor retainer. If your
        domain is brand new, your conversion rate is unproven, and your
        budget is genuinely tight, SEO is the wrong move right now. We
        will tell you so. Run a small Google Ads campaign for 3-6
        months, learn what converts, then circle back when the timing
        is right.
      </p>
    </div>

    {render_cta_block()}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-packages-sydney/"><h3>Full pricing</h3><p>All tiers, side by side.</p></a>
      <a class="card" href="/seo-vs-google-ads/"><h3>SEO vs Google Ads</h3><p>When SEO is the wrong first move.</p></a>
      <a class="card" href="/how-to-rank-on-google/"><h3>DIY guide</h3><p>If you decide to self-implement.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-packages-sydney/", "Pricing"), ("/affordable-seo-sydney/", "Affordable SEO")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="Affordable SEO Sydney", description="Entry-tier SEO retainer for Sydney small businesses", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
