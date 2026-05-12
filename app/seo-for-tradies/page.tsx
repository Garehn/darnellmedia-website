import type { Metadata } from "next";
import Link from "next/link";
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
  title: "SEO for Tradies — Sydney Trade Business SEO | Darnell Media",
  description:
    "SEO for Sydney tradies. We help plumbers, electricians, builders, landscapers, and home services rank on Google and get more jobs. Free audit.",
  alternates: { canonical: "/seo-for-tradies/" },
  openGraph: {
    title: "SEO for Tradies — Sydney Trade Business SEO | Darnell Media",
    description:
      "SEO for Sydney tradies. We help plumbers, electricians, builders, landscapers, and home services rank on Google and get more jobs. Free audit.",
    url: `${SITE_URL}/seo-for-tradies/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-for-tradies.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How is SEO for tradies different from regular SEO?",
    a: "Tradie SEO is dominated by local intent, emergency searches, and mobile. 'Plumber Manly now' is a very different search from 'best accounting software'. Tradie customers often make decisions in under 60 seconds — they call the first business they see that looks credible and is close by. Map pack and suburb targeting matter far more than blogging or thought leadership content.",
  },
  {
    q: "I already pay for Google Ads. Why do I need SEO?",
    a: "Google Ads stops the moment you stop paying. SEO compounds over time — rankings you build in month 3 are still driving calls in month 18, at no additional cost per click. Most successful Sydney tradies run both: Ads for immediate volume while SEO builds, then reduce Ad spend as organic rankings replace paid traffic. We can model this for your specific situation.",
  },
  {
    q: "How quickly will I see results?",
    a: "For local map pack placements in mid-competition suburbs, typically 60–90 days. For organic rankings on competitive terms like 'electrician Sydney', 4–6 months is realistic. We set up call tracking from day one so you can see the lead flow changing, even while rankings are still building.",
  },
  {
    q: "Do you work with tradies outside the Northern Beaches?",
    a: "Yes. We work with trade businesses across greater Sydney — inner west, south-west, Hills District, Sutherland Shire, eastern suburbs. Our one-client-per-suburb rule means we'll tell you upfront if we're already working with a direct competitor in your area.",
  },
];

const INDUSTRIES = [
  { label: "Plumbers", href: "/seo-for-plumbers/", desc: "+312% leads for a Northern Beaches client" },
  { label: "Electricians", href: "/seo-for-electricians/", desc: "#1 'emergency electrician [suburb]' in 4 months" },
  { label: "Builders", href: "/seo-for-builders/", desc: "3x qualified renovation enquiries in 6 months" },
  { label: "Landscapers", href: "/seo-for-landscapers/", desc: "+218% organic traffic in one season" },
  { label: "Solar", href: "/seo-for-solar/", desc: "Top 3 for commercial solar Sydney" },
  { label: "Vets", href: "/seo-for-vets/", desc: "62% increase in new patient bookings" },
  { label: "Pest Control", href: "/seo-for-pest-control/", desc: "+189% organic leads in 3 months" },
];

export default function SeoForTradiesPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO for Tradies — Sydney Trade Business SEO",
      description:
        "SEO for Sydney tradies. We help plumbers, electricians, builders, landscapers, and home services rank on Google and get more jobs.",
      url: `${SITE_URL}/seo-for-tradies/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-for-tradies.webp`,
    }),
    serviceSchema({
      name: "SEO for Tradies Sydney",
      description:
        "Specialist SEO for Sydney trade businesses — plumbers, electricians, builders, landscapers, solar, pest control. Local SEO, map pack, suburb targeting.",
      url: `${SITE_URL}/seo-for-tradies/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO for tradies.<br />More calls, less quoting dead leads."
        subheadline="Generic SEO agencies don't understand the tradie market. We do. Our strategies are built around how customers search for trade services — emergency terms, suburb targeting, map pack."
        image="/images/hero/seo-for-tradies.webp"
        imageAlt="SEO for Tradies Sydney — Darnell Media"
        ctaLabel="Book a free tradie SEO audit"
        ctaHref="/book/"
        resultBadge="Typical results: page 1 in your service area within 90 days"
        breadcrumbs={[{ label: "SEO for Tradies" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* How tradie customers search */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              How tradie customers actually search on Google
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding search intent is the foundation of tradie SEO. Your customers search differently depending on their situation, and your site needs to show up for both types.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-semibold text-ink mb-2">Emergency intent</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  High urgency, ready to book now. These searchers call the first credible result they see.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {[
                    '"emergency plumber Manly"',
                    '"blocked drain near me"',
                    '"plumber open now Dee Why"',
                    '"gas leak repair northern beaches"',
                  ].map((q) => (
                    <li key={q} className="font-mono text-xs bg-white border border-amber-100 rounded px-2 py-1">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-5">
                <h3 className="font-semibold text-ink mb-2">Planned intent</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Lower urgency, comparing options. These searchers check reviews and pricing before calling.
                </p>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {[
                    '"bathroom renovation plumber Sydney"',
                    '"hot water system installation cost"',
                    '"best plumber northern beaches"',
                    '"licensed plumber Belrose"',
                  ].map((q) => (
                    <li key={q} className="font-mono text-xs bg-white border border-brand-100 rounded px-2 py-1">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-5">
              A good tradie SEO strategy targets both. Emergency pages need to be fast, mobile-optimised, and in the map pack. Planned-search pages need compelling content, visible reviews, and strong calls to action.
            </p>
          </div>

          {/* Local vs national */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Local SEO vs national SEO for trade businesses
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              The vast majority of tradie work comes from within a 15–20km radius. You don&apos;t need to rank nationally for &ldquo;plumber Australia&rdquo; — you need to rank in Manly, Dee Why, Curl Curl, and Frenchs Forest. Local SEO is the right strategy, and it&apos;s faster and cheaper to execute than national campaigns.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Suburb-level keyword targeting",
                  body: "We build a keyword map of every suburb in your service area and create dedicated pages that rank for those exact searches. 'Plumber Manly' has less competition than 'plumber Sydney' and converts at a higher rate because the searcher is already in your zone.",
                },
                {
                  title: "Service area pages",
                  body: "Your main service pages get suburb-level variants — not duplicate content, but genuinely useful pages that reference local context, typical jobs in that area, and your response time.",
                },
                {
                  title: "Competitor displacement",
                  body: "We benchmark your competitors in each target suburb — who they are, how strong their SEO is, and what it'll take to outrank them. This shapes the timeline and strategy for each suburb.",
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

          {/* Why map pack matters */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Why the map pack matters more than organic for trades
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              On mobile — where most tradie searches happen — the map pack takes up most of the screen before the organic results appear. Getting into those three positions is often worth more than ranking #1 organically.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif text-3xl font-bold text-brand-500 mb-1">68%</p>
                  <p className="text-sm text-gray-600">of tradie Google searches happen on mobile</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-brand-500 mb-1">3</p>
                  <p className="text-sm text-gray-600">map pack positions drive the majority of local calls</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-brand-500 mb-1">4.5★</p>
                  <p className="text-sm text-gray-600">average rating threshold for map pack dominance</p>
                </div>
              </div>
            </div>
          </div>

          {/* What a campaign looks like */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What a tradie SEO campaign looks like
            </h2>
            <div className="space-y-4">
              {[
                { month: "Month 1", title: "Audit & foundation", body: "Full technical audit, keyword mapping, GBP optimisation, citation cleanup. Call tracking set up." },
                { month: "Month 2", title: "On-page & content", body: "Core service pages rewritten to target primary keywords. First batch of suburb landing pages live." },
                { month: "Month 3", title: "Authority & map pack", body: "Link building begins. Review acquisition system live. First map pack movements visible." },
                { month: "Month 4–6", title: "Compound growth", body: "Suburb pages ranking. Leads increasing. We expand to secondary target suburbs." },
              ].map((step) => (
                <div key={step.month} className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-2 py-1 rounded">
                      {step.month}
                    </span>
                  </div>
                  <div className="flex-1 pb-4 border-b border-gray-100 last:border-0">
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries served */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Industries we work with
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We specialise in trade businesses and home services. Each industry has specific SEO needs — click through to see what we do for your trade.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.label}
                  href={industry.href}
                  className="group block bg-gray-50 hover:bg-brand-50 border border-gray-200 hover:border-brand-300 rounded-xl p-5 transition-colors"
                >
                  <p className="font-semibold text-ink group-hover:text-brand-600 mb-1 transition-colors">
                    {industry.label}
                  </p>
                  <p className="text-xs text-gray-500">{industry.desc}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to get more jobs from Google?"
        subheading="Book a free 30-minute tradie SEO audit. We'll review your current rankings, your GBP, and your top 3 competitors — and show you exactly what it'll take to rank above them."
        ctaLabel="Book a free tradie SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
