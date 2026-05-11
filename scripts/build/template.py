"""Shared template helpers for the Darnell Media site.

Each page calls `render_page(...)` with its title, meta, body HTML, and schema
graph. The template wires in the head, header, footer, breadcrumbs, and
JSON-LD consistently across all 16 pages.
"""

from __future__ import annotations

import json
from pathlib import Path
from typing import Iterable

SITE_URL = "https://darnellmedia.com"
SITE_NAME = "Darnell Media"
LOCALE = "en-AU"
LOCALE_OG = "en_AU"

PHONE_RAW = "+61402522434"          # tel: link
PHONE_DISPLAY = "0402 522 434"
EMAIL = "garehn@darnellmedia.com"
ADDRESS_STREET = "6 Lyndhurst Way"
ADDRESS_LOCALITY = "Belrose"
ADDRESS_REGION = "NSW"
ADDRESS_POSTCODE = "2085"
ABN = "49 563 154 851"
FOUNDED_YEAR = "2025"

FOUNDER_NAME = "Garehn Kalloghlian"
FOUNDER_ROLE = "Founder, Darnell Media"
FOUNDER_BIO = (
    "Garehn started Darnell Media in 2025 after watching one too many "
    "tradies get fleeced by agencies billing $4,000 a month for nothing. "
    "Audits before retainers, flat pricing, no contracts past six months."
)

SHARED_BYLINE_DATE = "May 2026"     # update quarterly

# Nav structure, used for header + footer. Single source of truth.
NAV_PRIMARY = [
    ("/seo-services-sydney/", "Services"),
    ("/seo-packages-sydney/", "Pricing"),
    ("/seo-for-tradies/", "For Tradies"),
    ("/answer-engine-optimisation/", "AEO/GEO"),
    ("/about/", "About"),
    ("/contact/", "Contact"),
]

FOOTER_SERVICES = [
    ("/seo-sydney/", "SEO Sydney"),
    ("/local-seo-sydney/", "Local SEO Sydney"),
    ("/seo-services-sydney/", "SEO Services"),
    ("/seo-packages-sydney/", "SEO Packages"),
    ("/seo-consultant-sydney/", "SEO Consultant"),
]

FOOTER_INDUSTRIES = [
    ("/seo-for-tradies/", "SEO for Tradies"),
    ("/seo-for-plumbers/", "SEO for Plumbers"),
    ("/seo-for-electricians/", "SEO for Electricians"),
    ("/seo-for-vets/", "SEO for Vets"),
    ("/seo-for-pest-control/", "SEO for Pest Control"),
]

FOOTER_RESOURCES = [
    ("/answer-engine-optimisation/", "Answer Engine Optimisation"),
    ("/generative-engine-optimisation/", "Generative Engine Optimisation"),
    ("/about/", "About Darnell Media"),
    ("/contact/", "Contact"),
    ("/privacy/", "Privacy"),
]


# ---------------------------------------------------------------------------
# Schema fragments
# ---------------------------------------------------------------------------

def organization_schema() -> dict:
    return {
        "@type": "Organization",
        "@id": f"{SITE_URL}/#organization",
        "name": SITE_NAME,
        "legalName": "Darnell Media",
        "url": SITE_URL,
        "logo": {
            "@type": "ImageObject",
            "url": f"{SITE_URL}/favicon-512.png",
            "width": 512,
            "height": 512,
        },
        "image": f"{SITE_URL}/images/og/home.jpg",
        "email": EMAIL,
        "telephone": PHONE_RAW,
        "foundingDate": FOUNDED_YEAR,
        "founder": {"@id": f"{SITE_URL}/#founder"},
        "address": {
            "@type": "PostalAddress",
            "streetAddress": ADDRESS_STREET,
            "addressLocality": ADDRESS_LOCALITY,
            "addressRegion": ADDRESS_REGION,
            "postalCode": ADDRESS_POSTCODE,
            "addressCountry": "AU",
        },
        "areaServed": [
            {"@type": "City", "name": "Sydney"},
            {"@type": "Country", "name": "Australia"},
        ],
        "identifier": [
            {"@type": "PropertyValue", "propertyID": "ABN", "value": ABN.replace(" ", "")},
        ],
    }


def local_business_schema() -> dict:
    return {
        "@type": "ProfessionalService",
        "@id": f"{SITE_URL}/#local-business",
        "name": SITE_NAME,
        "url": SITE_URL,
        "telephone": PHONE_RAW,
        "email": EMAIL,
        "priceRange": "$$",
        "image": f"{SITE_URL}/images/og/home.jpg",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": ADDRESS_STREET,
            "addressLocality": ADDRESS_LOCALITY,
            "addressRegion": ADDRESS_REGION,
            "postalCode": ADDRESS_POSTCODE,
            "addressCountry": "AU",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-33.7274",
            "longitude": "151.2168",
        },
        "areaServed": [
            {"@type": "City", "name": "Sydney"},
            {"@type": "AdministrativeArea", "name": "New South Wales"},
            {"@type": "Country", "name": "Australia"},
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00",
            }
        ],
    }


def founder_person_schema() -> dict:
    return {
        "@type": "Person",
        "@id": f"{SITE_URL}/#founder",
        "name": FOUNDER_NAME,
        "jobTitle": FOUNDER_ROLE,
        "description": FOUNDER_BIO,
        "url": f"{SITE_URL}/about/",
        "image": f"{SITE_URL}/images/inline/about-garehn.jpg",
        "worksFor": {"@id": f"{SITE_URL}/#organization"},
        "founderOf": {"@id": f"{SITE_URL}/#organization"},
    }


def website_schema() -> dict:
    return {
        "@type": "WebSite",
        "@id": f"{SITE_URL}/#website",
        "url": SITE_URL,
        "name": SITE_NAME,
        "inLanguage": LOCALE,
        "publisher": {"@id": f"{SITE_URL}/#organization"},
        "potentialAction": {
            "@type": "SearchAction",
            "target": f"{SITE_URL}/?q={{search_term_string}}",
            "query-input": "required name=search_term_string",
        },
    }


def breadcrumb_schema(crumbs: list[tuple[str, str]]) -> dict:
    """`crumbs` is a list of (url_path, label). url_path is absolute path,
    e.g. '/' or '/seo-sydney/'."""
    items = []
    for i, (path, label) in enumerate(crumbs, start=1):
        items.append({
            "@type": "ListItem",
            "position": i,
            "name": label,
            "item": f"{SITE_URL}{path}",
        })
    return {"@type": "BreadcrumbList", "itemListElement": items}


def blog_posting_schema(
    *,
    slug: str,
    headline: str,
    description: str,
    about: dict | None = None,
    date_published: str = "2026-05-11",
    date_modified: str = "2026-05-11",
) -> dict:
    return {
        "@type": "BlogPosting",
        "headline": headline,
        "description": description,
        "url": f"{SITE_URL}/{slug}/" if slug else SITE_URL + "/",
        "mainEntityOfPage": f"{SITE_URL}/{slug}/" if slug else SITE_URL + "/",
        "datePublished": date_published,
        "dateModified": date_modified,
        "image": {
            "@type": "ImageObject",
            "url": f"{SITE_URL}/images/og/{slug or 'home'}.jpg",
            "width": 1200,
            "height": 630,
        },
        "author": {"@id": f"{SITE_URL}/#organization"},
        "reviewedBy": {"@id": f"{SITE_URL}/#founder"},
        "publisher": {"@id": f"{SITE_URL}/#organization"},
        "inLanguage": LOCALE,
        "isAccessibleForFree": True,
        **({"about": about} if about else {}),
    }


def service_schema(
    *,
    name: str,
    description: str,
    service_type: str = "SEO Service",
    area: str = "Sydney",
) -> dict:
    return {
        "@type": "Service",
        "name": name,
        "description": description,
        "serviceType": service_type,
        "provider": {"@id": f"{SITE_URL}/#organization"},
        "areaServed": {"@type": "City", "name": area},
    }


def faq_page_schema(faqs: list[tuple[str, str]]) -> dict:
    items = []
    for q, a in faqs:
        items.append({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": {"@type": "Answer", "text": a},
        })
    return {"@type": "FAQPage", "mainEntity": items}


# ---------------------------------------------------------------------------
# HTML helpers
# ---------------------------------------------------------------------------

def render_header(current_slug: str) -> str:
    """Site header with sticky nav. `current_slug` is the slug of the page being
    rendered ('' for home) so the aria-current attribute can be set."""
    nav_links = []
    for path, label in NAV_PRIMARY:
        active = ""
        if (current_slug == "" and path == "/") or (
            current_slug and path == f"/{current_slug}/"
        ):
            active = ' aria-current="page"'
        nav_links.append(f'      <a href="{path}"{active}>{label}</a>')
    nav_html = "\n".join(nav_links)

    mobile_links = []
    for path, label in NAV_PRIMARY:
        mobile_links.append(f'    <a href="{path}">{label}</a>')
    mobile_html = "\n".join(mobile_links)

    return f"""<header class="site-header">
  <div class="site-header__inner">
    <a class="logo" href="/" aria-label="Darnell Media home">
      <span class="logo__mark" aria-hidden="true">DM</span>
      <span class="logo__text">Darnell Media</span>
    </a>
    <nav class="nav" aria-label="Primary">
{nav_html}
    </nav>
    <a class="btn btn--accent header-cta" href="/contact/">Book a call</a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu">Menu</button>
  </div>
  <div class="mobile-nav" id="mobile-nav" hidden>
{mobile_html}
    <a class="btn btn--accent" href="/contact/">Book a discovery call</a>
  </div>
</header>"""


def render_footer() -> str:
    def list_items(items):
        return "\n".join(f'        <li><a href="{p}">{l}</a></li>' for p, l in items)

    return f"""<footer class="site-footer">
  <div class="container container--wide">
    <div class="footer-grid">
      <div>
        <h2 class="footer-heading">Darnell Media</h2>
        <p class="footer-bio">Sydney SEO agency for tradies and home services. Flat pricing. AEO and GEO included. Audit before retainer. Founder still answers the phone.</p>
        <p class="footer-bio">
          {ADDRESS_STREET}, {ADDRESS_LOCALITY} {ADDRESS_REGION} {ADDRESS_POSTCODE}<br>
          <a href="tel:{PHONE_RAW}">{PHONE_DISPLAY}</a><br>
          <a href="mailto:{EMAIL}">{EMAIL}</a><br>
          ABN {ABN}
        </p>
      </div>
      <div>
        <h2 class="footer-heading">Services</h2>
        <ul>
{list_items(FOOTER_SERVICES)}
        </ul>
      </div>
      <div>
        <h2 class="footer-heading">Industries</h2>
        <ul>
{list_items(FOOTER_INDUSTRIES)}
        </ul>
      </div>
      <div>
        <h2 class="footer-heading">Resources</h2>
        <ul>
{list_items(FOOTER_RESOURCES)}
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {FOUNDED_YEAR}–2026 Darnell Media. ABN {ABN}.</span>
      <span>Built in Belrose. Hosted on the open web.</span>
    </div>
  </div>
</footer>"""


def render_breadcrumbs(crumbs: list[tuple[str, str]]) -> str:
    """Visible breadcrumbs. Mirror what's in BreadcrumbList schema."""
    parts = []
    for i, (path, label) in enumerate(crumbs):
        if i == len(crumbs) - 1:
            parts.append(f'<span aria-current="page">{label}</span>')
        else:
            parts.append(f'<a href="{path}">{label}</a>')
        if i < len(crumbs) - 1:
            parts.append('<span class="sep" aria-hidden="true">/</span>')
    return f"""<nav class="breadcrumbs container" aria-label="Breadcrumb">
  {' '.join(parts)}
</nav>"""


def render_byline() -> str:
    """E-E-A-T byline below hero, above lead."""
    return f"""<div class="author-byline">
  <p class="byline-text">
    Written by <strong>{FOUNDER_NAME}</strong>, {FOUNDER_ROLE}
    <span aria-hidden="true">&middot;</span>
    Updated {SHARED_BYLINE_DATE}
  </p>
</div>"""


def render_cta_block(headline: str = None, body: str = None) -> str:
    h = headline or "Worth a 20-minute chat?"
    b = body or (
        "Discovery calls are free. The audit is $1,200 and the report lands in seven business days. "
        "Whichever way you go, you'll leave the call with a clearer view of what to do next."
    )
    return f"""<aside class="cta-block">
  <h2>{h}</h2>
  <p>{b}</p>
  <div class="cta-block__ctas">
    <a class="btn btn--primary btn--lg" href="/contact/">Book a discovery call</a>
    <a class="btn btn--ghost btn--lg" href="tel:{PHONE_RAW}">Call {PHONE_DISPLAY}</a>
  </div>
</aside>"""


def render_faq(faqs: list[tuple[str, str]]) -> str:
    items = []
    for q, a in faqs:
        items.append(f"""    <details>
      <summary>{q}</summary>
      <div class="faq__body"><p>{a}</p></div>
    </details>""")
    return f"""<section class="faq" aria-label="Frequently asked questions">
  <h2>Frequently asked</h2>
{chr(10).join(items)}
</section>"""


def render_related(links: list[tuple[str, str, str]]) -> str:
    """`links` is list of (path, title, blurb)."""
    cards = []
    for path, title, blurb in links:
        cards.append(f"""  <a class="card" href="{path}">
    <h3>{title}</h3>
    <p>{blurb}</p>
  </a>""")
    return f"""<section>
  <h2>Related reading</h2>
  <div class="card-grid">
{chr(10).join(cards)}
  </div>
</section>"""


# ---------------------------------------------------------------------------
# Master page renderer
# ---------------------------------------------------------------------------

def render_page(
    *,
    slug: str,                       # "" for home, else "seo-sydney" etc
    title: str,                      # <title>
    description: str,                # <meta description>
    body_html: str,                  # full body content (no <main> wrapper)
    schema_graph: list[dict],        # list of schema objects to put in @graph
    og_type: str = "website",        # "website" or "article"
    twitter_card: str = "summary_large_image",
    article_published: str = "2026-05-11",
    hero_alt: str | None = None,     # alt text for auto-injected hero figure
) -> str:
    """Render the complete HTML document for a page."""
    import re as _re
    canonical = SITE_URL + (f"/{slug}/" if slug else "/")
    og_image_url = f"{SITE_URL}/images/hero/{slug or 'home'}.jpg"

    # Auto-inject hero <figure> after <header class="article-header"> if present.
    if "article-hero" not in body_html:
        hero_stem = slug or "home"
        alt = hero_alt or title
        hero_figure = (
            f'\n    <figure class="article-hero">\n'
            f'      <img src="/images/hero/{hero_stem}.jpg" alt="{alt}" '
            f'width="1200" height="675" loading="eager" decoding="async">\n'
            f'    </figure>'
        )
        body_html = _re.sub(
            r'(<header class="article-header">[^<]*<h1>[^<]*</h1>\s*</header>)',
            r'\1' + hero_figure,
            body_html,
            count=1,
        )

    # Always include WebSite + Organization + LocalBusiness in @graph as
    # global references. Skip duplicates if caller already added them.
    seen_ids = set()
    final_graph = []
    for shared in (organization_schema(), local_business_schema(), founder_person_schema(), website_schema()):
        sid = shared.get("@id")
        if sid not in seen_ids:
            final_graph.append(shared)
            seen_ids.add(sid)
    for obj in schema_graph:
        sid = obj.get("@id")
        if sid and sid in seen_ids:
            continue
        if sid:
            seen_ids.add(sid)
        final_graph.append(obj)

    schema_block = {
        "@context": "https://schema.org",
        "@graph": final_graph,
    }
    schema_json = json.dumps(schema_block, separators=(",", ":"), ensure_ascii=False)

    header_html = render_header(slug)
    footer_html = render_footer()

    return f"""<!DOCTYPE html>
<html lang="{LOCALE}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <link rel="canonical" href="{canonical}">

  <meta property="og:type" content="{og_type}">
  <meta property="og:locale" content="{LOCALE_OG}">
  <meta property="og:site_name" content="{SITE_NAME}">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:url" content="{canonical}">
  <meta property="og:image" content="{og_image_url}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="{title}">

  <meta name="twitter:card" content="{twitter_card}">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="{og_image_url}">

  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#1e40af">

  <link rel="preload" as="image" type="image/webp" fetchpriority="high" href="/images/hero/{slug or 'home'}.webp">

  <link rel="stylesheet" href="/styles.css">

  <!-- Schema: Organization + LocalBusiness + Person(founder) + WebSite + page-specific -->
  <script type="application/ld+json">{schema_json}</script>
</head>
<body>
{header_html}
<main id="main">
{body_html}
</main>
{footer_html}
<script src="/app.js" defer></script>
</body>
</html>
"""


def write_page(out_dir: Path, slug: str, html: str) -> None:
    target = out_dir / (slug + "/" if slug else "") / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(html, encoding="utf-8")
    rel = target.relative_to(out_dir)
    print(f"  wrote {rel}")
