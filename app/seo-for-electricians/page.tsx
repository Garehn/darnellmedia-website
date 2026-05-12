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
  title: "SEO for Electricians Sydney — Rank for Emergency Callouts | Darnell Media",
  description:
    "SEO for electricians in Sydney. Rank for 'emergency electrician [suburb]' before your competitors. Licence schema markup, suburb landing pages, GBP optimisation. No lock-in contracts.",
  alternates: { canonical: "/seo-for-electricians/" },
  openGraph: {
    title: "SEO for Electricians Sydney — Rank for Emergency Callouts | Darnell Media",
    description:
      "SEO for electricians in Sydney. Rank for emergency callout searches in your suburbs. No lock-in contracts.",
    url: `${SITE_URL}/seo-for-electricians/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-for-electricians.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How long does electrician SEO take to show results?",
    a: "For suburb-level emergency searches like 'emergency electrician Manly', most electrician clients see first-page movement within 60–90 days. Map pack placement for your primary suburbs typically happens within 6–10 weeks of onboarding, once GBP optimisation and citation cleanup are done.",
  },
  {
    q: "Do I need a separate landing page for each suburb I service?",
    a: "Yes — if you want to rank in those suburbs. A single generic 'electrician Sydney' page cannot rank for 'electrician Dee Why' and 'electrician Brookvale' at the same time. We build suburb-specific service pages with unique content for each target area, not copy-pasted templates that Google ignores.",
  },
  {
    q: "What is licence schema markup and why does it matter for electricians?",
    a: "Licence schema markup is structured data that tells Google you hold valid electrical contractor licences in NSW. Google's E-E-A-T guidelines reward pages that demonstrate real-world expertise and credentials. For safety-sensitive trades like electrical work, this trust signal can meaningfully improve your rankings over unlicensed or unverified competitors.",
  },
  {
    q: "Can SEO help me get more after-hours emergency callout jobs?",
    a: "Yes — and this is one of the highest-ROI SEO opportunities for electricians. People searching 'emergency electrician [suburb] 24/7' or 'no power [suburb]' at midnight are ready to book immediately. Ranking for these terms puts you in front of high-urgency, high-value jobs that competitors who only focus on day-rate work miss entirely.",
  },
];

export default function SeoForElectriciansPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO for Electricians Sydney — Rank for Emergency Callouts",
      description:
        "SEO strategy for Sydney electricians. Rank for emergency callout searches, licence schema markup for E-E-A-T, suburb landing pages, and GBP optimisation.",
      url: `${SITE_URL}/seo-for-electricians/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-for-electricians.webp`,
    }),
    serviceSchema({
      name: "SEO for Electricians Sydney",
      description:
        "Specialist SEO for Sydney electricians. Emergency callout keyword targeting, licence schema markup, suburb landing pages, and Google Business Profile optimisation.",
      url: `${SITE_URL}/seo-for-electricians/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO for electricians.<br />Rank for emergency callouts in your area."
        subheadline="When someone's power goes out, they Google 'emergency electrician [suburb]'. We put you there before your competitors."
        image="/images/hero/seo-for-electricians.webp"
        imageAlt="SEO for Electricians Sydney — Darnell Media"
        ctaLabel="Book your free electrician SEO audit"
        ctaHref="/book/"
        resultBadge="#1 for 'emergency electrician [suburb]' in 4 months"
        breadcrumbs={[
          { label: "SEO for Tradies", href: "/seo-for-tradies/" },
          { label: "SEO for Electricians" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Emergency vs scheduled search strategy */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Emergency callouts vs scheduled work — two different search strategies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most electrician SEO treats all search the same. It doesn&apos;t work. Emergency searches
              ('no power Manly', 'emergency electrician near me at night') have completely different
              intent, competition, and conversion rates to scheduled work queries ('switchboard upgrade
              quote Brookvale', 'level 2 electrician Dee Why'). We build separate strategies for both.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Emergency search (act now)",
                  points: [
                    "'Emergency electrician [suburb]' — rank in map pack for immediate calls",
                    "24/7 availability signals on GBP and website",
                    "Click-to-call CTAs above the fold on mobile",
                    "Fast-loading mobile pages — seconds matter in an emergency",
                  ],
                },
                {
                  title: "Scheduled work (plan ahead)",
                  points: [
                    "Switchboard upgrades, EV charger installs, solar connections",
                    "Quote-focused landing pages by suburb and service type",
                    "Project portfolio content that builds trust with larger jobs",
                    "Review schema to show star ratings in search results",
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

          {/* Licence schema markup */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Licence schema markup — the trust signal most electricians skip
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Google&apos;s E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework
              rewards pages that demonstrate real credentials — not just pages that use the right keywords.
              For electrical work, the most powerful credentialling signal is your NSW electrical
              contractor licence. We embed this as structured data (JSON-LD) on every relevant page,
              telling Google and AI search models that a verified, licensed professional is behind this
              business. Competitors without it lose ground every time Google updates its quality guidelines.
            </p>
            <ul className="space-y-3">
              {[
                "Electrical contractor licence number marked up in schema",
                "Electricians Licensing NSW credentials referenced in structured data",
                "Author entities linking your name to published work and credentials",
                "Service area markup that confirms your legitimate operating territory",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Suburb landing pages */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Suburb landing pages — rank in every area you actually service
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A single 'electrician Sydney' page cannot rank in Manly, Dee Why, Brookvale, and
              Frenchs Forest simultaneously. Google serves local results — which means you need a
              dedicated, well-written page for each suburb you service if you want to appear in
              map pack and organic results there.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We build suburb pages that are genuinely different from each other — referencing local
              landmarks, council areas, building types common in that area, and specific services
              relevant to that suburb&apos;s demographics. Not copy-paste templates with the suburb name
              swapped out. Google can tell, and so can your potential customers.
            </p>
            <ul className="space-y-3">
              {[
                "Individual pages targeting 'electrician [suburb]' and 'emergency electrician [suburb]'",
                "Unique content for each suburb — no duplicate-content penalties",
                "Internal linking between suburb pages and your primary service pages",
                "Local schema with suburb-specific service area markup",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* GBP for electricians */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Google Business Profile — your most important ranking asset
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For emergency trades, the map pack (the three business listings that appear above organic
              results) gets clicked more than anything else. Your GBP listing is what gets you there.
              Most electricians set up a GBP once and never touch it again — which means their profile
              is being outperformed by competitors who actively manage theirs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Profile setup and optimisation",
                  body: "Complete business categories, services, operating hours (including emergency hours), and service area. Every field filled = stronger profile.",
                },
                {
                  title: "Photo and post strategy",
                  body: "Regular GBP posts and real job photos signal an active, legitimate business. Google rewards active profiles with higher map pack placement.",
                },
                {
                  title: "Review generation system",
                  body: "We set up a review request workflow so every satisfied customer gets a prompt to leave a Google review. More 5-star reviews = more calls.",
                },
                {
                  title: "Q&A and messaging",
                  body: "Optimised Q&A section with common electrician questions answered. Messaging enabled for quick response. Both improve conversion and ranking.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to rank for emergency electrician searches?"
        subheading="Book a free 30-minute audit. We'll show you exactly which suburb searches you're missing, where your competitors are outranking you, and what it'll take to fix it."
        ctaLabel="Book your free electrician SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
