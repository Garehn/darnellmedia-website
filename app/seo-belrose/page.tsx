import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildGraph,
  blogPostingSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO Belrose — Local Business SEO | Darnell Media",
  description:
    "SEO for Belrose businesses. Darnell Media is based in Belrose — we work with local businesses and surrounding suburbs including Frenchs Forest, Davidson, Terrey Hills, and St Ives.",
  alternates: { canonical: "/seo-belrose/" },
  openGraph: {
    title: "SEO Belrose — Local Business SEO | Darnell Media",
    description:
      "SEO for Belrose and surrounding suburbs. Darnell Media is based in Belrose — genuinely local, not a Sydney CBD agency parachuting in.",
    url: `${SITE_URL}/seo-belrose/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-belrose.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "Why does it matter that your SEO agency is based in Belrose?",
    a: "Because we know the market. Belrose, Frenchs Forest, Davidson, and Terrey Hills have distinct characteristics — residential areas with a high proportion of families and home service demand, strong local business community, and customers who actively prefer local providers. When we build your keyword strategy, we're not making educated guesses about local search patterns — we live in them.",
  },
  {
    q: "What kinds of Belrose businesses do you work with?",
    a: "We work primarily with trade businesses and home services — plumbers, electricians, builders, landscapers, and similar. Also local professional services (health, legal, financial), retail with a local catchment, and any business where suburb-level search rankings directly drive enquiries. Belrose has a strong tradie community serving both the immediate area and the broader Northern Beaches.",
  },
  {
    q: "Can you help a Belrose business rank in surrounding suburbs too?",
    a: "Yes — and for most Belrose businesses, surrounding suburb rankings are as important as Belrose itself. Frenchs Forest, Davidson, Terrey Hills, and St Ives all feed into the same service areas. We build suburb-specific pages for every area you want to rank in, with unique content for each — not copied templates that Google penalises.",
  },
  {
    q: "How quickly can a Belrose business start seeing SEO results?",
    a: "For map pack rankings in Belrose and immediate surrounds, most businesses see movement within 6–10 weeks of GBP optimisation. Organic search rankings for suburb-specific terms typically take 3–5 months. Belrose search competition is generally lower than coastal Northern Beaches suburbs, which means ranking is achievable faster — and often with a smaller budget than a Manly or Dee Why campaign.",
  },
];

export default function SeoBelrosePage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO Belrose — Local Business SEO",
      description:
        "SEO for Belrose businesses. Darnell Media is based in Belrose — suburb-level SEO for Belrose and surrounding areas including Frenchs Forest, Davidson, Terrey Hills, and St Ives.",
      url: `${SITE_URL}/seo-belrose/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-belrose.webp`,
    }),
    serviceSchema({
      name: "SEO Belrose",
      description:
        "Local SEO for Belrose businesses. Darnell Media is based in Belrose, specialising in suburb-level SEO for the Belrose area and surrounding Northern Beaches suburbs.",
      url: `${SITE_URL}/seo-belrose/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO Belrose.<br />Local search for local businesses."
        subheadline="Darnell Media is based in Belrose. We work with Belrose businesses and surrounding suburbs — Frenchs Forest, Davidson, Terrey Hills, St Ives."
        image="/images/hero/seo-belrose.webp"
        imageAlt="SEO Belrose Northern Beaches — Darnell Media"
        ctaLabel="Book your free Belrose SEO audit"
        ctaHref="/book/"
        breadcrumbs={[
          { label: "SEO Northern Beaches", href: "/seo-northern-beaches/" },
          { label: "SEO Belrose" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Why local matters */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Genuinely local — not a Sydney CBD agency with a Belrose landing page
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most SEO agencies in Sydney claim to serve &apos;all of Sydney&apos; — which usually means
              they&apos;ve created template landing pages for every suburb and called it local expertise.
              Darnell Media is actually based in Belrose, at 6 Lyndhurst Way. The founder and lead
              strategist is a Northern Beaches resident who understands the local market because
              he lives in it.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              That matters for your campaign because local knowledge shapes keyword strategy.
              We know that Belrose, Frenchs Forest, and Davidson have different search demand profiles.
              We know which local directories matter for Northern Beaches businesses. We know the
              seasonal patterns, the local competitors, and the community platforms where Northern
              Beaches residents look for recommendations.
            </p>
            <ul className="space-y-3">
              {[
                "Office address: 6 Lyndhurst Way, Belrose NSW 2085",
                "Northern Beaches LGA resident — local market knowledge is genuine, not manufactured",
                "Understanding of Belrose, Frenchs Forest, Davidson, and St Ives search dynamics",
                "Relationships with local business community and Northern Beaches networks",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Belrose search landscape */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              The Belrose search landscape — what local businesses should know
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Belrose is a residential suburb with strong demand for home services and trades.
              Its location — central to Frenchs Forest, Davidson, Terrey Hills, and the broader
              Northern Beaches — makes it an excellent base for service businesses targeting
              this cluster of suburbs. Search competition in Belrose is lower than coastal suburbs
              like Manly or Dee Why, which means ranking is faster and more cost-effective.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "High-demand local searches",
                  points: [
                    "'Plumber Belrose', 'electrician Belrose', 'builder Belrose'",
                    "'Landscaping Frenchs Forest', 'pest control Davidson'",
                    "'Tradie near me' — proximity searches common in residential areas",
                    "Google map pack appears for almost all local service searches",
                  ],
                },
                {
                  title: "Belrose market characteristics",
                  points: [
                    "Predominantly residential — homeowners are the primary customer",
                    "High proportion of families — home services in strong demand",
                    "Lower search competition than coastal suburbs",
                    "Strong 'local first' buying preference — reviews and local presence matter",
                  ],
                },
              ].map((col) => (
                <div key={col.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-3">{col.title}</h3>
                  <ul className="space-y-2">
                    {col.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Surrounding suburbs */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Belrose and surrounding suburbs — your full service area covered
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most Belrose businesses service a cluster of surrounding suburbs — not just Belrose
              itself. We build dedicated SEO content for every suburb in your service area, and
              connect them through a well-structured internal linking architecture that builds
              your overall local authority.{" "}
              <Link href="/seo-northern-beaches/" className="text-brand-600 underline hover:text-brand-700">
                See our full Northern Beaches coverage
              </Link>.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                "Belrose (2085)",
                "Frenchs Forest (2086)",
                "Davidson (2085)",
                "Terrey Hills (2084)",
                "St Ives (2075)",
                "St Ives Chase (2075)",
                "Pymble (2073)",
                "Killara (2071)",
                "Lindfield (2070)",
              ].map((suburb) => (
                <div key={suburb} className="flex gap-2 items-center bg-gray-50 rounded-lg px-4 py-3">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{suburb}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to dominate local search in Belrose?"
        subheading="Book a free audit with your local SEO specialist. We'll show you exactly where local customers are searching for your services and what it takes to be the first business they find."
        ctaLabel="Book your free Belrose SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
