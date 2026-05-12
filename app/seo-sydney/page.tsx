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
  title: "SEO Sydney — Rank #1 in Sydney | Darnell Media",
  description:
    "Sydney's specialist SEO agency for trade businesses and home services. +287% average organic growth. No lock-in contracts. Book a free audit.",
  alternates: { canonical: "/seo-sydney/" },
  openGraph: {
    title: "SEO Sydney — Rank #1 in Sydney | Darnell Media",
    description:
      "Sydney's specialist SEO agency for trade businesses and home services. +287% average organic growth. No lock-in contracts. Book a free audit.",
    url: `${SITE_URL}/seo-sydney/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-sydney.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How much does SEO cost in Sydney?",
    a: "Sydney SEO pricing varies widely. At Darnell Media, our one-off SEO Audit starts from $1,200 (AUD + GST), Local SEO retainers from $1,800/month, and full SEO retainers from $2,800/month. Unlike larger agencies, you're not paying for account managers and overhead — every dollar goes to actual work.",
  },
  {
    q: "How long does SEO take to show results in Sydney?",
    a: "Most Sydney clients see measurable movement in target rankings within 60–90 days. Competitive terms (e.g. 'plumber Sydney CBD') can take 4–6 months for page-one placement. Local SEO for suburb-level searches typically moves faster — we've had clients in the map pack within 6 weeks of onboarding.",
  },
  {
    q: "What's the difference between local SEO and national SEO for a Sydney business?",
    a: "Local SEO targets searches within a geographic area — 'electrician Manly', 'plumber near me', map pack results. It's the right strategy for trade businesses and home services with a defined service area. National SEO targets broader terms without geographic intent. Most Sydney trades need local SEO, not national.",
  },
  {
    q: "What makes a good Sydney SEO agency?",
    a: "A good Sydney SEO agency gives you direct access to the specialist doing the work (not an account manager relaying messages), publishes transparent pricing, doesn't lock you into 12-month contracts, and can show you case studies from businesses like yours. Ask any agency you're considering: who will actually be working on my account?",
  },
];

export default function SeoSydneyPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO Sydney — Rank #1 in Sydney",
      description:
        "Sydney's specialist SEO agency for trade businesses and home services. +287% average organic growth. No lock-in contracts.",
      url: `${SITE_URL}/seo-sydney/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-sydney.webp`,
    }),
    serviceSchema({
      name: "SEO Sydney",
      description:
        "Specialist SEO services for Sydney trade businesses and home services. Technical SEO, local SEO, content strategy, and link building.",
      url: `${SITE_URL}/seo-sydney/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO Sydney — rank above<br />your competitors."
        subheadline="We help Sydney businesses rank on Google for commercial keywords that bring in real enquiries. No fluff — just targeted rankings and measurable growth."
        image="/images/hero/seo-sydney.webp"
        imageAlt="SEO Sydney — Darnell Media"
        ctaLabel="Book your free Sydney SEO audit"
        ctaHref="/book/"
        resultBadge="+287% average organic growth across Sydney clients"
        breadcrumbs={[{ label: "SEO Sydney" }]}
      />

      {/* What does a Sydney SEO agency actually do? */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What does a Sydney SEO agency actually do?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Good question — because plenty of agencies charge a retainer and send a monthly PDF that means nothing. Here&apos;s what a proper Sydney SEO engagement looks like in practice.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Keyword strategy",
                  body: "We map out every commercial search your ideal customers are making — not just broad terms like 'plumber Sydney', but high-intent suburb-level searches like 'emergency plumber Manly' or 'hot water repair Dee Why'. These are the searches that turn into phone calls.",
                },
                {
                  title: "On-page optimisation",
                  body: "Every page on your site needs a clear target keyword, a well-structured title and meta description, properly nested headings, and content that actually answers what the searcher wants. We audit and rewrite where needed.",
                },
                {
                  title: "Technical SEO",
                  body: "If Google can't crawl your site cleanly, nothing else matters. We fix crawl errors, improve Core Web Vitals scores, implement structured data (schema markup), optimise internal linking, and ensure your mobile performance doesn't cost you rankings.",
                },
                {
                  title: "Link building",
                  body: "Authoritative backlinks from relevant Australian websites remain one of the strongest ranking signals. We build links through digital PR, industry directories, and editorial outreach — not spam.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink">{item.title}: </span>
                    <span className="text-gray-600">{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Sydney businesses choose Darnell Media */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Why Sydney businesses choose Darnell Media
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most SEO agencies in Sydney take every client they can get, assign you to a junior account manager, and lock you into a 12-month contract before you&apos;ve seen a single result. We work differently.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "One client per industry, per suburb",
                  body: "We don't work with two competing plumbers in the same area. When you're our plumbing client on the Northern Beaches, you're the only one we're ranking.",
                },
                {
                  title: "Direct specialist access",
                  body: "You deal directly with the SEO strategist doing the work — not an account manager who relays messages. Questions get answered in hours, not days.",
                },
                {
                  title: "No lock-in contracts",
                  body: "Month-to-month engagements only. We earn your business every month by delivering results. If we're not the right fit after 90 days, you walk away with no penalty.",
                },
                {
                  title: "Transparent reporting",
                  body: "Monthly reports show exactly which keywords moved, by how much, and what we did to get there. No vanity metrics, no jargon — just the numbers that matter to your business.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO pricing in Sydney */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              SEO pricing in Sydney
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We publish our pricing because opacity wastes everyone&apos;s time. All prices are AUD + GST.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  name: "SEO Audit",
                  price: "From $1,200",
                  period: "one-off",
                  points: [
                    "Full technical audit (100+ point check)",
                    "Keyword gap analysis",
                    "Competitor benchmark",
                    "90-day action roadmap",
                  ],
                },
                {
                  name: "Local SEO Retainer",
                  price: "From $1,800",
                  period: "/month",
                  highlight: true,
                  points: [
                    "Google Business Profile management",
                    "Citation building & cleanup",
                    "Map pack optimisation",
                    "Monthly reporting",
                  ],
                },
                {
                  name: "Full SEO Retainer",
                  price: "From $2,800",
                  period: "/month",
                  points: [
                    "Everything in Local SEO",
                    "Content strategy & creation",
                    "Link building (3–5 links/month)",
                    "Technical SEO ongoing",
                  ],
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-xl p-5 border ${
                    tier.highlight
                      ? "border-brand-400 bg-brand-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <p className="text-sm font-semibold text-brand-500 mb-1">{tier.name}</p>
                  <p className="font-serif text-2xl font-bold text-ink">
                    {tier.price}
                    <span className="text-sm font-normal text-gray-500 ml-1">{tier.period}</span>
                  </p>
                  <ul className="mt-4 space-y-2">
                    {tier.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-brand-400 flex-shrink-0 mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready to rank in Sydney?"
        subheading="Book a free 30-minute audit. We'll review your site, show you where you're losing leads to competitors, and give you a clear roadmap to fix it."
        ctaLabel="Book your free Sydney SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
