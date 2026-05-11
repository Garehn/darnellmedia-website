"""Build the Darnell Media static site.

Imports each content_*.py module, calls render_page() with its data,
writes the resulting HTML to the right path on disk. Also writes
sitemap.xml, robots.txt, app.js, and site.webmanifest.

Run from the project root:
    .venv/bin/python -m scripts.build.build_site
"""

from __future__ import annotations

import sys
from datetime import date
from pathlib import Path

from .template import (
    SITE_URL, SITE_NAME, LOCALE, PHONE_RAW, render_page, write_page,
)

# Import all content modules
from . import (
    content_home,
    content_seo_sydney,
    content_seo_services_sydney,
    content_seo_packages_sydney,
    content_local_seo_sydney,
    content_seo_consultant_sydney,
    content_seo_for_tradies,
    content_seo_for_plumbers,
    content_seo_for_electricians,
    content_seo_for_vets,
    content_seo_for_pest_control,
    content_aeo,
    content_geo,
    content_about,
    content_contact,
    content_privacy,
)


# Ordered list — sitemap order, navigation priority
PAGE_MODULES = [
    content_home,                   # /
    content_seo_sydney,             # /seo-sydney/
    content_seo_services_sydney,    # /seo-services-sydney/
    content_seo_packages_sydney,    # /seo-packages-sydney/
    content_local_seo_sydney,       # /local-seo-sydney/
    content_seo_for_tradies,        # /seo-for-tradies/
    content_seo_for_plumbers,       # /seo-for-plumbers/
    content_seo_for_electricians,   # /seo-for-electricians/
    content_seo_for_vets,           # /seo-for-vets/
    content_seo_for_pest_control,   # /seo-for-pest-control/
    content_answer_engine := content_aeo,
    content_generative_engine := content_geo,
    content_seo_consultant_sydney,  # /seo-consultant-sydney/
    content_about,
    content_contact,
    content_privacy,
]


def build_all_pages(out_dir: Path) -> list[tuple[str, str]]:
    """Render every page. Returns list of (slug, full_url) for sitemap."""
    rendered = []
    for mod in PAGE_MODULES:
        slug = mod.SLUG
        # All pages call body(), title/desc/schema as attributes
        body = mod.body()
        og_type = getattr(mod, "OG_TYPE", "article") if slug else "website"
        html = render_page(
            slug=slug,
            title=mod.TITLE,
            description=mod.DESCRIPTION,
            body_html=body,
            schema_graph=mod.schema_graph(),
            og_type=og_type,
        )
        write_page(out_dir, slug, html)
        rendered.append((slug, f"{SITE_URL}/{slug + '/' if slug else ''}"))
    return rendered


def write_sitemap(out_dir: Path, pages: list[tuple[str, str]]) -> None:
    today = date.today().isoformat()
    urls = []
    for slug, url in pages:
        priority = "1.0" if slug == "" else "0.7" if slug in {"seo-sydney", "seo-services-sydney", "seo-packages-sydney"} else "0.6"
        urls.append(f"""  <url>
    <loc>{url}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>{priority}</priority>
  </url>""")
    xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
{chr(10).join(urls)}
</urlset>
"""
    (out_dir / "sitemap.xml").write_text(xml, encoding="utf-8")
    print(f"  wrote sitemap.xml ({len(urls)} urls)")


def write_robots(out_dir: Path) -> None:
    txt = f"""User-agent: *
Allow: /

Sitemap: {SITE_URL}/sitemap.xml
"""
    (out_dir / "robots.txt").write_text(txt, encoding="utf-8")
    print("  wrote robots.txt")


def write_app_js(out_dir: Path) -> None:
    # Minimal mobile nav toggle — under 500 bytes.
    js = """(function(){var b=document.querySelector('.nav-toggle');var n=document.getElementById('mobile-nav');if(!b||!n)return;b.addEventListener('click',function(){var o=n.classList.toggle('is-open');b.setAttribute('aria-expanded',o);n.hidden=!o;});})();
"""
    (out_dir / "app.js").write_text(js, encoding="utf-8")
    print(f"  wrote app.js ({len(js)} bytes)")


def write_manifest(out_dir: Path) -> None:
    import json
    manifest = {
        "name": SITE_NAME,
        "short_name": "Darnell Media",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#fafaf9",
        "theme_color": "#1e40af",
        "icons": [
            {"src": "/android-chrome-192.png", "sizes": "192x192", "type": "image/png"},
            {"src": "/android-chrome-512.png", "sizes": "512x512", "type": "image/png"},
        ],
    }
    (out_dir / "site.webmanifest").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print("  wrote site.webmanifest")


def main():
    out_dir = Path(__file__).resolve().parent.parent.parent
    print(f"Building site into {out_dir}")
    pages = build_all_pages(out_dir)
    write_sitemap(out_dir, pages)
    write_robots(out_dir)
    write_app_js(out_dir)
    write_manifest(out_dir)
    print(f"\nBuilt {len(pages)} pages.")


if __name__ == "__main__":
    main()
