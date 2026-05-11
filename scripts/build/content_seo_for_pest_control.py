"""SEO for Pest Control — Tier 2 vertical."""

from .template import (
    breadcrumb_schema, faq_page_schema, blog_posting_schema, service_schema,
    render_breadcrumbs, render_byline, render_cta_block,
)

SLUG = "seo-for-pest-control"
TITLE = "SEO for Pest Control in Sydney: Seasonal Demand and Map Pack Wins"
DESCRIPTION = (
    "How Sydney pest control businesses rank on the queries that pay. Seasonal demand "
    "patterns, the four-pest-family page structure, and where most retainers waste money."
)

FAQS = [
    (
        "Is pest control SEO seasonal?",
        "Yes, heavily. Termites peak Sep-Nov. Cockroaches and ants peak Dec-Feb. Rodents "
        "peak May-Aug. The site should be built so each family of pages is at its strongest "
        "going into its peak season. We schedule retainer content briefs against this "
        "calendar."
    ),
    (
        "Should a pest control business target 'pest control [suburb]' or 'termite "
        "inspection [suburb]'?",
        "Both, but the specific-pest pages convert better and rank easier. A 'termite "
        "inspection Belrose' page outperforms a generic 'pest control Belrose' page by "
        "roughly 2x on a per-visitor basis, because the searcher's intent is concrete."
    ),
    (
        "What about commercial pest control SEO?",
        "Separate channel, separate content. B2B commercial pest control prospects search "
        "differently (RFQs, certified contractors, integrated pest management). If you do "
        "both residential and commercial, separate page hierarchies on the site, both "
        "linked from the homepage."
    ),
]


def body() -> str:
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-pest-control/", "SEO for Pest Control")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>SEO for pest control: the four-pest playbook</h1></header>
    {render_byline()}
    <aside class="key-takeaway" aria-label="Key takeaway">
      <p class="takeaway-label">Key takeaway</p>
      <p class="takeaway-text">
        Pest control SEO works best when you stop trying to rank for "pest control [suburb]"
        and start targeting specific-pest queries by season. Termites in spring, cockroaches
        in summer, rodents in winter. Four pest-family pages plus suburb variants beat one
        generic page every time.
      </p>
    </aside>

    <h2>Sydney pest demand is seasonal. The site should be too.</h2>
    <p>
      Termites peak from September to November as activity rises with warm wet weather.
      Cockroaches and ants peak December to February. Rodents peak May to August as they
      move indoors. Most pest control sites ignore the calendar and rank evenly (or evenly
      poorly) all year. The fix is to build out each pest family with depth and refresh
      it ahead of its peak season.
    </p>

    <h2>The four-pest-family page structure</h2>
    <ol>
      <li><strong>Termites</strong>. Hero page on termites, treatment options, inspection
        frequency. Suburb-specific variants for high-risk areas (Northern Beaches, Hills
        District, anywhere with older timber-frame housing stock).</li>
      <li><strong>Cockroaches and ants</strong>. Hero page on the most common Sydney species
        (German cockroach, American cockroach, common black ant, white-footed house ant).
        Suburb variants for inner-city apartment blocks.</li>
      <li><strong>Rodents</strong>. Hero page on mice and rats, baiting vs trapping vs
        exclusion. Suburb variants for older suburbs with cavity wall construction.</li>
      <li><strong>Specialty pests</strong>. Bees, wasps, spiders, possums. Each gets a tight
        focused page. Lower volume but high intent and high conversion.</li>
    </ol>

    <h2>What works on a 6-month pest control retainer</h2>
    <ul class="checklist">
      <li>Month 1: GBP fixes, citations, audit, technical foundation.</li>
      <li>Month 2-3: Termite hero + 3 suburb variants (priority if Sep-Nov is approaching).</li>
      <li>Month 4-5: Cockroach/ant and rodent heroes + suburb variants.</li>
      <li>Month 6: Specialty pests, review acquisition campaign, AEO refresh on every page.</li>
    </ul>

    <div class="callout callout--info">
      <h3>The pest control story we keep telling</h3>
      <p>
        A pest control business in the Sutherland Shire asked us for a retainer. We audited.
        The recommendation was to skip the retainer for 90 days, fix three things (GBP
        primary category was wrong, four duplicate listings on directories, missing schema
        on the homepage), and come back in spring with proper budget for the termite peak.
        We sent them the audit report and a one-page action plan, kept $200 of the $1,200,
        refunded $1,000. Two years later they were a referral source. Worth more than the
        original retainer would have been.
        <!-- TODO: replace with real client story -->
      </p>
    </div>

    <h2>When NOT to do pest control SEO</h2>
    <ul class="warnlist">
      <li>You are mainly commercial and your leads come from tenders, not search.</li>
      <li>You are at booking capacity through summer. Wait until the off-season to invest.</li>
      <li>Your conversion rate from quote to booking is under 30 per cent. Sales process
        fix first.</li>
    </ul>

    {render_cta_block()}

    <h2 id="faq">Frequently asked</h2>
    <div class="faq">{_faq(FAQS)}</div>

    <h2>Related</h2>
    <div class="card-grid">
      <a class="card" href="/seo-for-tradies/"><h3>SEO for Tradies</h3><p>The shared playbook.</p></a>
      <a class="card" href="/local-seo-sydney/"><h3>Local SEO Sydney</h3><p>The GBP and Map Pack detail.</p></a>
      <a class="card" href="/seo-packages-sydney/"><h3>Pricing</h3><p>Retainer breakdown.</p></a>
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
    crumbs = [("/", "Home"), ("/seo-for-tradies/", "SEO for Tradies"), ("/seo-for-pest-control/", "SEO for Pest Control")]
    return [
        breadcrumb_schema(crumbs),
        blog_posting_schema(
            slug=SLUG, headline=TITLE, description=DESCRIPTION,
            about=service_schema(name="SEO for Pest Control", description="SEO for pest control businesses in Sydney", area="Sydney"),
        ),
        faq_page_schema(FAQS),
    ]
