"""Privacy policy."""

from .template import (
    SITE_URL, SITE_NAME, EMAIL, ABN, ADDRESS_STREET, ADDRESS_LOCALITY,
    ADDRESS_REGION, ADDRESS_POSTCODE,
    breadcrumb_schema, render_breadcrumbs,
)

SLUG = "privacy"
TITLE = "Privacy Policy | Darnell Media"
DESCRIPTION = (
    "How Darnell Media handles personal information. Compliant with the Australian "
    "Privacy Principles under the Privacy Act 1988."
)


def body() -> str:
    crumbs = [("/", "Home"), ("/privacy/", "Privacy")]
    return f"""
{render_breadcrumbs(crumbs)}
<article>
  <div class="container">
    <header class="article-header"><h1>Privacy Policy</h1></header>
    <p class="muted">Last updated May 2026.</p>

    <p>
      This policy explains how {SITE_NAME} (ABN {ABN}) collects, uses, stores, and
      discloses personal information. We follow the Australian Privacy Principles in the
      Privacy Act 1988 (Cth).
    </p>

    <h2>What we collect</h2>
    <p>We collect personal information you provide when you:</p>
    <ul class="checklist">
      <li>Fill in the contact form on this site (name, email, business, website, message)</li>
      <li>Email or phone us directly</li>
      <li>Engage us for an audit or retainer (additional details required for the work,
        e.g. access to your Google Search Console, Google Analytics, and CMS)</li>
    </ul>
    <p>
      We also collect anonymous traffic data through Google Analytics 4 (IP addresses are
      anonymised) and server logs.
    </p>

    <h2>How we use it</h2>
    <ul class="checklist">
      <li>Reply to your enquiry</li>
      <li>Deliver SEO services you have engaged us to provide</li>
      <li>Invoice and meet our tax-record-keeping obligations</li>
      <li>Improve the site and our services in aggregate (analytics)</li>
    </ul>
    <p>
      We do not sell personal information. We do not run drip-marketing campaigns to
      addresses collected through this site.
    </p>

    <h2>Who we share it with</h2>
    <p>
      We share personal information only with service providers that help us run the
      business (accounting software, email provider, SEO tools). Each is bound by their
      own privacy obligations. We do not share personal information with third parties
      for marketing.
    </p>
    <p>
      If required by law, we will disclose information to comply with regulatory or court
      orders.
    </p>

    <h2>Cookies</h2>
    <p>
      This site uses essential cookies for functionality and Google Analytics for
      anonymised traffic measurement. Analytics cookies can be blocked at the browser
      level without affecting site functionality.
    </p>

    <h2>Security and retention</h2>
    <p>
      We store personal information in services with reasonable security controls (TLS in
      transit, encryption at rest). We retain enquiry data for 12 months from the last
      contact unless we are actively engaged or you ask us to delete it sooner. Client
      engagement data is retained for 7 years after the engagement ends to meet tax and
      regulatory obligations.
    </p>

    <h2>Your rights</h2>
    <p>You can ask us to:</p>
    <ul class="checklist">
      <li>Show you what personal information we hold about you</li>
      <li>Correct anything that is wrong or out of date</li>
      <li>Delete it (subject to legal retention requirements)</li>
      <li>Stop using it for any purpose other than service delivery</li>
    </ul>
    <p>
      Email <a href="mailto:{EMAIL}">{EMAIL}</a> with the request. We respond within 30
      days.
    </p>

    <h2>Complaints</h2>
    <p>
      If you think we have mishandled your information, email us first. If we cannot
      resolve it, you can complain to the Office of the Australian Information Commissioner
      (OAIC) at <a href="https://www.oaic.gov.au/">oaic.gov.au</a>.
    </p>

    <h2>Contact</h2>
    <p>
      {SITE_NAME}<br>
      {ADDRESS_STREET}, {ADDRESS_LOCALITY} {ADDRESS_REGION} {ADDRESS_POSTCODE}<br>
      ABN {ABN}<br>
      <a href="mailto:{EMAIL}">{EMAIL}</a>
    </p>
  </div>
</article>
"""


def schema_graph():
    crumbs = [("/", "Home"), ("/privacy/", "Privacy")]
    return [
        breadcrumb_schema(crumbs),
        {
            "@type": "WebPage",
            "name": TITLE,
            "description": DESCRIPTION,
            "url": f"{SITE_URL}/privacy/",
        },
    ]
