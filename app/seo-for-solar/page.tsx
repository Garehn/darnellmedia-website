import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
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
  title: "SEO for Solar Installers Sydney — Intercept Buyers Early | Darnell Media",
  description:
    "SEO for solar installers in Sydney. Get in front of buyers at the research stage, before they've committed to a competitor. Government rebate content, commercial and residential targeting. No lock-in contracts.",
  alternates: { canonical: "/seo-for-solar/" },
  openGraph: {
    title: "SEO for Solar Installers Sydney — Intercept Buyers Early | Darnell Media",
    description:
      "SEO for Sydney solar installers. Intercept buyers at research stage. Government rebate content, AI Overview optimisation. Top 3 for commercial solar installation in Sydney.",
    url: `${SITE_URL}/seo-for-solar/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-for-solar.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "What keywords drive the most solar installation leads in Sydney?",
    a: "The highest-converting solar keywords segment by buyer type. Residential: 'solar panels [suburb]', 'solar installation cost Sydney', 'best solar installer Northern Beaches'. Commercial: 'commercial solar installation Sydney', 'solar for business NSW', 'solar panels for warehouse'. Rebate-driven: 'solar rebate NSW 2025', 'STC small-scale technology certificates NSW'. We target all three segments with distinct pages and content strategies.",
  },
  {
    q: "How does government rebate content help with SEO?",
    a: "Solar rebate searches ('NSW solar rebate 2025', 'how much is the solar rebate in NSW', 'STC rebate calculator') generate thousands of monthly searches from buyers who are in the research phase. Ranking for these queries puts your brand in front of motivated buyers before they've contacted anyone. Once they trust your rebate information, they contact you for the installation — not the competitor whose website they visited later.",
  },
  {
    q: "Can SEO help me win more commercial solar contracts?",
    a: "Yes, and commercial solar SEO is significantly less competitive than residential. Fewer installers are creating quality content for commercial buyers (facilities managers, strata committees, warehouse operators), which means ranking is more achievable despite the higher job value. We build dedicated commercial solar content targeting business buyer search terms and optimise for the longer research cycles typical of commercial procurement.",
  },
  {
    q: "What are AI Overviews for solar searches and why should I care?",
    a: "Google AI Overviews now appear on a significant share of solar information searches — particularly rebate questions, cost comparisons, and 'how solar works' queries. If your content is cited in these AI answers, you get brand mentions and clicks before the organic results. For solar installers, AI Overviews for rebate queries are especially valuable because they attract buyers who are actively calculating their potential ROI and ready to get quotes.",
  },
];

export default function SeoForSolarPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO for Solar Installers Sydney — Intercept Buyers Before the Rebate Window Closes",
      description:
        "SEO strategy for Sydney solar installers. Buyer journey keyword targeting, government rebate content, commercial vs residential targeting, AI Overview optimisation.",
      url: `${SITE_URL}/seo-for-solar/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-for-solar.webp`,
    }),
    serviceSchema({
      name: "SEO for Solar Installers Sydney",
      description:
        "Specialist SEO for Sydney solar installers. Solar buyer journey keyword targeting, government rebate content strategy, commercial and residential targeting, AI Overview optimisation.",
      url: `${SITE_URL}/seo-for-solar/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO for solar.<br />Intercept buyers before the rebate window closes."
        subheadline="Solar buyers research for months. We get you in front of them at the research stage — when they're comparing, not just ready to book."
        image="/images/hero/seo-for-solar.webp"
        imageAlt="SEO for Solar Installers Sydney — Darnell Media"
        ctaLabel="Book your free solar SEO audit"
        ctaHref="/book/"
        resultBadge="Top 3 for commercial solar installation queries in Sydney"
        breadcrumbs={[
          { label: "SEO for Tradies", href: "/seo-for-tradies/" },
          { label: "SEO for Solar" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Solar buyer journey */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              The solar buyer journey — 6 months of research before they pick up the phone
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Solar is a considered purchase. A residential customer might spend 3–6 months
              researching before requesting a quote. Commercial buyers can take 6–18 months.
              Most solar installers only have SEO that targets the end of this journey —
              &apos;solar installation quote Sydney&apos; — and miss 80% of the research process entirely.
              We build content that&apos;s there from the first search.
            </p>
            <div className="space-y-3">
              {[
                {
                  stage: "Awareness",
                  keywords: "'Is solar worth it in Sydney?', 'solar panels pros and cons', 'how much do solar panels cost Australia'",
                  action: "Educational content that builds brand familiarity before they're ready to buy",
                },
                {
                  stage: "Research",
                  keywords: "'Solar rebate NSW 2025', 'best solar panels Australia', 'solar system size calculator'",
                  action: "Rebate guides, sizing tools, comparison content — you become the authority they trust",
                },
                {
                  stage: "Comparison",
                  keywords: "'Solar installer reviews Sydney', 'best solar company Northern Beaches', 'CEC accredited solar installer'",
                  action: "Review management, credentials pages, CEC accreditation schema markup",
                },
                {
                  stage: "Decision",
                  keywords: "'Solar installation [suburb] quote', 'solar panels installed price [suburb]'",
                  action: "Service + suburb landing pages with clear CTAs and specific pricing guidance",
                },
              ].map((item) => (
                <div key={item.stage} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex gap-3">
                    <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-ink">{item.stage}: </span>
                      <span className="text-sm text-brand-600 italic">{item.keywords}</span>
                      <p className="text-sm text-gray-600 mt-1">{item.action}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Government rebate content strategy */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Government rebate content — the solar SEO strategy most installers miss
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              &apos;How much is the solar rebate NSW&apos;, &apos;STC rebate calculator 2025&apos;, and &apos;solar battery
              rebate Sydney&apos; generate thousands of searches monthly from buyers actively calculating
              the economics of going solar. Ranking for these queries is achievable (less competitive
              than install-intent terms) and puts your brand in front of motivated buyers at a moment
              of high attention.
            </p>
            <ul className="space-y-3">
              {[
                "NSW solar rebate guide — updated annually, authoritative, widely linked to",
                "STC (Small-Scale Technology Certificate) calculator and explainer",
                "Battery rebate eligibility guide (VPP programs, AEMO guidelines)",
                "Feed-in tariff comparison by Sydney retailer — updated quarterly",
                "Commercial solar incentives guide (depreciation, instant asset write-off applicability)",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Commercial vs residential targeting */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Commercial vs residential — two distinct content strategies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Commercial and residential solar buyers search completely differently, have different
              decision-making timelines, and respond to different content. Running a single generic
              solar website that tries to serve both audiences poorly is why most solar installers
              have disappointing SEO results.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  type: "Residential SEO",
                  points: [
                    "Suburb-specific landing pages ('solar Manly', 'solar Dee Why')",
                    "Cost and ROI calculators — residential buyers are payback-motivated",
                    "Review volume and star ratings — emotional trust decision",
                    "Before/after bill reduction case studies",
                    "Battery storage add-on content (increasing residential demand)",
                  ],
                },
                {
                  type: "Commercial SEO",
                  points: [
                    "Industry-specific pages (retail, warehousing, strata, hospitality)",
                    "ROI and depreciation content — business buyers need financial framing",
                    "Larger system size keywords (50kW+, 100kW+ systems)",
                    "Procurement process content for facilities managers",
                    "Commercial case studies with energy savings data",
                  ],
                },
              ].map((col) => (
                <div key={col.type} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-3">{col.type}</h3>
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

          {/* AI Overview optimisation */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              AI Overview optimisation — get cited before the organic results
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Solar rebate and cost queries are among the most common AI Overview targets in the
              home improvement space. When someone asks Google &apos;how much is the solar rebate in NSW
              2025&apos;, an AI Overview answer appears above all organic results. If your content is
              cited there, your brand is front-of-mind before they&apos;ve even seen a search result.
            </p>
            <ul className="space-y-3">
              {[
                "FAQ schema on rebate and cost pages — directly signals AI Overview candidacy",
                "Concise, accurate answers structured for AI extraction",
                "Authoritative, up-to-date content that AI models prefer to cite over stale competitors",
                "Citation tracking — we monitor which solar queries show AI Overviews and whether you're cited",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to intercept solar buyers before your competitors do?"
        subheading="Book a free 30-minute audit. We'll show you where solar buyers in your target suburbs are searching, which rebate queries are available to rank for, and what a commercial vs residential content strategy looks like for your business."
        ctaLabel="Book your free solar SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
