"""Best SEO Agency Sydney — comparison/listicle (Phase 2)."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "best-seo-agency-sydney"
TITLE = "How to Pick the Best SEO Agency in Sydney: A Buyer's Guide"
DESCRIPTION = (
    "What to look for in a Sydney SEO agency. Pricing models, contract length, "
    "reporting, deliverables. Honest framework, no fake awards lists."
)

FAQS = [
    (
        "Why isn't this article a top-10 list with logos and stars?",
        "Two reasons. First, we are one of the agencies on the hypothetical "
        "list, so ranking ourselves first would be dishonest and ranking "
        "ourselves anywhere else would be a different kind of dishonest. "
        "Second, the top-10 lists are noise. The criteria below help more."
    ),
    (
        "What's the single best signal that an agency will not waste your money?",
        "They will show you the keywords they intend to target before you "
        "sign anything. If they will not, that is the answer. The keyword "
        "list is the audit's central artefact and the retainer's monthly "
        "scorecard. An agency that hides it is hiding the scoreboard."
    ),
    (
        "Are the bigger agencies always better than the smaller ones?",
        "No, just different. Bigger agencies are right for large enterprise "
        "with budget and bureaucratic patience. Smaller agencies and "
        "consultants are right for small-to-mid businesses where senior "
        "people doing the work matters more than seat depth. Both can be "
        "good. Both can be terrible."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/best-seo-agency-sydney/", "How to Pick One")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>How to pick the best SEO agency in Sydney (without faking it)</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        This is not a top-10 list. Those are noise. This is a buyer's
        framework: eight questions to ask any Sydney SEO agency before you
        sign, plus what good answers look like. We include ourselves only at
        the bottom, with the same scrutiny applied.
      </p>
    </aside>

    <h2>Why "top-10 Sydney SEO agencies" articles are noise</h2>
    <p>
      Most "best SEO agency Sydney" articles are written by SEO agencies for
      SEO. The agency that ranks the article #1 is the agency that wrote it,
      with itself listed at the top. The other nine entries are either
      paid placements, defunct, or competitors named by hand to look fair.
      None of it helps you pick.
    </p>
    <p>
      A useful comparison is criteria-based, not list-based. The right
      agency for a Sydney plumber with $1,800/mo and a six-suburb service
      area is not the right agency for an enterprise SaaS with $20,000/mo
      and a 60-country footprint. The criteria below help you find the
      right shape of help for your shape of business.
    </p>

    <h2>Eight questions to ask any Sydney SEO agency</h2>

    <h3>1. Will you show me the keywords you will target?</h3>
    <p>
      The most important question. Good agencies will share the keyword
      list before you sign and update it monthly. Bad agencies will dodge,
      defer, or claim "proprietary methodology". If the keyword list is
      hidden, the scoreboard is hidden, and you are buying meetings.
    </p>

    <h3>2. What is the contract length?</h3>
    <p>
      Industry-typical is 6 or 12 months. Long contracts protect agencies
      from clients who notice nothing is happening. Six months is the
      defensible maximum for any small-business SEO retainer in 2025.
      Anything longer is the agency telling you something about itself.
    </p>

    <h3>3. Who actually does the work, and who do I speak to monthly?</h3>
    <p>
      Bigger agencies often have a senior on the pitch, a different person
      on the strategy, and a junior on the execution. That is fine if you
      know it upfront. Not fine if the pitch implied otherwise. Smaller
      agencies and consultants usually have the same person across all
      three. Either model can work. Make sure you know which you are
      buying.
    </p>

    <h3>4. How is reporting structured?</h3>
    <p>
      Same keyword list every month. Same dashboard. Same KPIs (ranked,
      top-10, organic traffic, conversions). Anything else is moving the
      goalposts. Ask to see a sample monthly report from a current client
      (anonymised). If they cannot show you one, that is the answer.
    </p>

    <h3>5. Do you do AEO and GEO?</h3>
    <p>
      In 2025, "no" or "soon" is a strong negative signal. AI Overviews and
      generative engines now affect 30%+ of search queries. An agency that
      has not updated its content templates for AEO has not been paying
      attention. A good answer covers measurable AEO work (citation
      tracking, FAQ schema, answer-first content) and a coherent view on
      GEO measurement.
    </p>

    <h3>6. What is your pricing model?</h3>
    <p>
      Flat retainers are easier to compare. Hourly billing is harder to
      compare but can work if the agency is transparent about typical
      hours. Performance pricing tied to rankings is a fire risk — anyone
      offering it is either willing to put your domain at risk for ranking
      tricks, or has not seen Google's last three algorithm updates.
    </p>

    <h3>7. Who do you say no to?</h3>
    <p>
      A good agency has a clear "we will not take you if" list. Sites
      under six months old. Sites with conversion under 1%. Budgets too
      low. Industries flagged by regulators. If an agency says yes to
      everyone, the agency is selling, not consulting.
    </p>

    <h3>8. What is your audit, and what does it cost?</h3>
    <p>
      Most quality agencies offer a paid audit ($800-$1,500 range in
      Sydney) before any retainer. Free audits look generous but the cost
      is hidden inside the retainer. Paid audits filter out tyre-kickers
      and produce better work. If an agency refuses to do an audit-first
      engagement, that is information.
    </p>

    <h2>Where does Darnell Media land on these?</h2>
    <p>
      Same eight questions applied to us.
    </p>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Question</th><th>Our answer</th></tr></thead>
        <tbody>
          <tr><td>Show the keyword list?</td><td>Yes. Pre-signing and monthly.</td></tr>
          <tr><td>Contract length?</td><td>Six months maximum, then month-to-month.</td></tr>
          <tr><td>Who does the work?</td><td>Same person (founder) across pitch, audit, strategy, monthly calls.</td></tr>
          <tr><td>Reporting?</td><td>Same keyword list every month, same KPIs, monthly written report + call.</td></tr>
          <tr><td>AEO/GEO?</td><td>Included as standard on every page we touch; deeper work on the $800/mo add-on.</td></tr>
          <tr><td>Pricing?</td><td>Flat AUD pricing. No setup fees. No performance pricing.</td></tr>
          <tr><td>Who do we say no to?</td><td>Sites &lt;6mo old, conversion &lt;1%, budget &lt;$1,800/mo, regulator-flagged industries.</td></tr>
          <tr><td>Audit?</td><td>$1,200 flat, 7-day written report, refunded if we are not the right fit.</td></tr>
        </tbody>
      </table>
    </div>
    <p>
      None of these answers are unique to us. Plenty of Sydney consultants
      and small agencies will give you the same answers. That is the
      point. The framework matters more than the agency.
    </p>

    {render_cta_block(
      headline="Use the framework, talk to a few agencies",
      body=(
        "If you want one of those agencies to be us, the discovery call is "
        "free. If you want help picking between agencies, we will give you "
        "an honest view on the call. No referral fees, no commission."
      )
    )}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-packages-sydney/"><h3>Pricing</h3><p>Our flat-rate price list.</p></a>
      <a class="card" href="/seo-services-sydney/"><h3>What is in the work</h3><p>Service breakdown.</p></a>
      <a class="card" href="/seo-vs-google-ads/"><h3>SEO vs Google Ads</h3><p>Which channel makes sense first.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-sydney/", "SEO Sydney"), ("/best-seo-agency-sydney/", "How to Pick One")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(slug=SLUG, headline=TITLE, description=DESCRIPTION),
        faq_page_schema(FAQS),
    ]
