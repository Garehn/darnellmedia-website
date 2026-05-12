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
  title: "SEO Northern Beaches Sydney — Local Specialists | Darnell Media",
  description:
    "Northern Beaches SEO agency based in Belrose. We know the Northern Beaches market — Manly, Dee Why, Brookvale, Mona Vale, Narrabeen, Avalon. Suburb-level SEO, not a generic Sydney campaign.",
  alternates: { canonical: "/seo-northern-beaches/" },
  openGraph: {
    title: "SEO Northern Beaches Sydney — Local Specialists | Darnell Media",
    description:
      "SEO for Northern Beaches businesses. Based in Belrose. Suburb-level campaigns for Manly, Dee Why, Brookvale, Narrabeen, Mona Vale, and Avalon.",
    url: `${SITE_URL}/seo-northern-beaches/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-northern-beaches.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "Why does being based on the Northern Beaches matter for SEO?",
    a: "Because local market knowledge changes the strategy. A Sydney CBD agency treating Manly the same as Parramatta is ignoring meaningful differences in search behaviour, competition levels, seasonality, and demographics. We know that Northern Beaches searchers have distinct patterns — beach-related services peak differently, demographic pockets like Mosman and Balgowlah have different buyer profiles than Collaroy or Avalon. That knowledge gets built into every campaign.",
  },
  {
    q: "What suburbs on the Northern Beaches do you cover?",
    a: "We work across the full Northern Beaches Local Government Area and beyond: Manly, Dee Why, Brookvale, Curl Curl, Collaroy, Narrabeen, Mona Vale, Newport, Bilgola, Avalon, Clareville, and Whale Beach. Also Frenchs Forest, Davidson, Belrose, Terrey Hills, and St Ives adjacent. We build suburb-specific pages for every target area — not a single generic 'Northern Beaches' page trying to cover everything.",
  },
  {
    q: "How is Northern Beaches SEO different from generic Sydney SEO?",
    a: "Generic Sydney SEO targets broad terms like 'plumber Sydney' — high competition, high cost, and irrelevant for a Northern Beaches business whose customers are in Dee Why and Narrabeen. Northern Beaches SEO targets the suburb-specific searches where your ideal customers actually are. Competition is lower, ranking is faster, and the leads are geographically qualified — customers who are in your actual service area.",
  },
  {
    q: "How quickly can a Northern Beaches business start ranking?",
    a: "For suburb-level searches on the Northern Beaches, we typically see map pack movement within 6–10 weeks of starting GBP optimisation and citation cleanup. Organic ranking for suburb-specific terms like 'electrician Brookvale' or 'plumber Dee Why' typically takes 3–4 months. Broader Northern Beaches terms with more competition take longer — we give you a realistic timeline in the free audit based on your specific market and competition.",
  },
];

export default function SeoNorthernBeachesPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO Northern Beaches Sydney — Local Specialists",
      description:
        "Northern Beaches SEO agency based in Belrose. Suburb-level SEO for Manly, Dee Why, Brookvale, Mona Vale, Narrabeen, and Avalon businesses.",
      url: `${SITE_URL}/seo-northern-beaches/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-northern-beaches.webp`,
    }),
    serviceSchema({
      name: "SEO Northern Beaches Sydney",
      description:
        "Specialist SEO for Northern Beaches businesses. Based in Belrose. Suburb-level campaigns for trade businesses and local brands across the Northern Beaches LGA.",
      url: `${SITE_URL}/seo-northern-beaches/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="Northern Beaches SEO.<br />Rank where your customers actually are."
        subheadline="We're based in Belrose. We know the Northern Beaches market — Manly, Dee Why, Brookvale, Mona Vale, Narrabeen, Avalon. Suburb-level SEO, not a generic Sydney campaign."
        image="/images/hero/seo-northern-beaches.webp"
        imageAlt="SEO Northern Beaches Sydney — Darnell Media"
        ctaLabel="Book your free Northern Beaches SEO audit"
        ctaHref="/book/"
        resultBadge="Based in Belrose · 15+ Northern Beaches clients"
        breadcrumbs={[{ label: "SEO Northern Beaches" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Northern Beaches search landscape */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              The Northern Beaches search landscape — what&apos;s different here
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Northern Beaches is a geographically distinct market with unique search
              characteristics. Separated from greater Sydney by waterways and national parks,
              it has a strong &apos;local first&apos; buying culture. Residents actively search for and
              prefer local businesses — which means suburb-specific SEO has higher click-through
              rates and conversion rates here than almost anywhere else in Sydney.
            </p>
            <ul className="space-y-3">
              {[
                "High proportion of searches include suburb name — 'electrician Manly', 'plumber Narrabeen'",
                "'Near me' searches are above Sydney average — proximity matters more here",
                "Review ratings carry outsized weight — community trust is a strong purchase signal",
                "Seasonal demand patterns differ — beach-area businesses have distinct peak periods",
                "Demographics vary significantly by suburb — Avalon and Mosman differ from Collaroy and Dee Why",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Why suburb-specific matters */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Why suburb-specific SEO beats a generic Northern Beaches campaign
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              &apos;Northern Beaches SEO&apos; is too broad for most local businesses. Your customers
              aren&apos;t in all 40 suburbs of the Northern Beaches — they&apos;re in the 5–8 suburbs
              around your location. We build campaigns that dominate those specific suburbs
              rather than spreading effort thinly across a region.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Generic approach (doesn't work)",
                  points: [
                    "One page targeting 'plumber Northern Beaches'",
                    "Competes against every plumber on the Beaches",
                    "Doesn't match how customers actually search",
                    "Zero suburb-specific relevance signals",
                  ],
                },
                {
                  title: "Suburb-specific approach (works)",
                  points: [
                    "Dedicated pages: 'plumber Dee Why', 'plumber Brookvale', 'plumber Narrabeen'",
                    "Competes in a smaller local field per suburb",
                    "Exactly matches how customers search",
                    "Strong local relevance signals per page",
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

          {/* Suburbs we cover */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Suburbs we cover across the Northern Beaches
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We build suburb-specific SEO content for every area you service. Our deepest
              knowledge is concentrated on the Northern Beaches LGA, where we&apos;re based —{" "}
              <Link href="/seo-belrose/" className="text-brand-600 underline hover:text-brand-700">starting from our office in Belrose</Link>.
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                "Manly (2095)",
                "Dee Why (2099)",
                "Brookvale (2100)",
                "Curl Curl (2096)",
                "Collaroy (2097)",
                "Narrabeen (2101)",
                "Mona Vale (2103)",
                "Newport (2106)",
                "Avalon (2107)",
                "Bilgola (2107)",
                "Frenchs Forest (2086)",
                "Davidson (2085)",
                "Belrose (2085)",
                "Terrey Hills (2084)",
                "St Ives (2075)",
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
        heading="Ready to dominate search in your Northern Beaches suburbs?"
        subheading="Book a free 30-minute audit. We'll show you exactly which suburb searches you're missing, what your local competitors are ranking for, and what a suburb-specific Northern Beaches campaign looks like."
        ctaLabel="Book your free Northern Beaches SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
