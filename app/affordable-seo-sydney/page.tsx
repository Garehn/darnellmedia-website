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
  title: "Affordable SEO Sydney — What 'Cheap SEO' Actually Costs You | Darnell Media",
  description:
    "Affordable SEO in Sydney doesn't mean cheap. Here's what $299/month SEO actually includes, what it costs you in penalties and recovery, and what real SEO pricing looks like in 2025.",
  alternates: { canonical: "/affordable-seo-sydney/" },
  openGraph: {
    title: "Affordable SEO Sydney — What 'Cheap SEO' Actually Costs You | Darnell Media",
    description:
      "The truth about cheap SEO in Sydney. What $299/month includes, what Google penalties cost, and why the $1,800/month option is often cheaper in the long run.",
    url: `${SITE_URL}/affordable-seo-sydney/`,
    images: [{ url: `${SITE_URL}/images/hero/affordable-seo-sydney.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "Is $1,800/month for SEO actually affordable for a small trade business?",
    a: "For most trade businesses, yes — because the ROI calculation is straightforward. A plumber charging $250/callout who gets 2 extra calls per week from organic search generates $26,000 in additional revenue per year. A $1,800/month retainer costs $21,600/year. That's a positive ROI before considering repeat customers or upsells. The question isn't whether $1,800/month is a lot of money — it's whether it generates more than it costs. For most trades, it does.",
  },
  {
    q: "What's the minimum viable SEO budget in Sydney?",
    a: "For meaningful local SEO results in Sydney, you need at least $1,500–$1,800/month from a legitimate agency. Below this, there isn't enough budget to do proper technical SEO, create quality content, build real links, and manage your GBP. One-off audits start around $1,200 and can give you a roadmap you implement yourself — that's a legitimate affordable option for businesses not ready for a full retainer.",
  },
  {
    q: "Can I do SEO myself instead of paying an agency?",
    a: "Yes, and for some businesses this is the right starting point. The foundational work — Google Business Profile optimisation, basic on-page optimisation, citation cleanup — can be done by a business owner with time to learn the basics. We've helped businesses set this foundation and seen them get real results. The limitation is time and expertise for more advanced work (technical SEO, link building, content strategy). A one-off audit from us gives you a prioritised roadmap to follow yourself.",
  },
  {
    q: "If I get a Google penalty from cheap SEO, how much does it cost to fix?",
    a: "A manual Google penalty (the most serious type) typically requires 3–6 months of link disavow work, content cleanup, and reconsideration request processes before it's lifted — at consultant rates of $150–$300/hour. Total recovery costs commonly run $3,000–$8,000+, not counting the revenue lost during the penalty period. An algorithmic penalty (e.g. from Helpful Content or Spam updates) can be even harder to recover from and may never fully resolve. The $299/month package that caused it rarely covers more than a few months of what you spent on recovery.",
  },
];

export default function AffordableSeoSydneyPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "Affordable SEO Sydney — What 'Cheap SEO' Actually Costs You",
      description:
        "A realistic guide to SEO pricing in Sydney. What cheap SEO includes, what it costs in penalties and recovery, and how to evaluate value vs cost.",
      url: `${SITE_URL}/affordable-seo-sydney/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/affordable-seo-sydney.webp`,
    }),
    serviceSchema({
      name: "Affordable SEO Sydney",
      description:
        "Transparent, results-focused SEO for Sydney businesses. Honest pricing, no lock-in contracts, and a clear explanation of what affordable SEO actually means.",
      url: `${SITE_URL}/affordable-seo-sydney/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="Affordable SEO Sydney.<br />What cheap SEO actually costs."
        subheadline="$299/month SEO sounds appealing until your site gets hit with a Google penalty. Here's what real SEO costs in Sydney — and why the $1,800/month option is often cheaper in the long run."
        image="/images/hero/affordable-seo-sydney.webp"
        imageAlt="Affordable SEO Sydney — Darnell Media"
        ctaLabel="Book a free SEO audit"
        ctaHref="/book/"
        breadcrumbs={[{ label: "Affordable SEO Sydney" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* What cheap SEO includes */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What &ldquo;$299/month SEO&rdquo; actually includes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The economics of cheap SEO are simple: if an agency charges $299/month and takes
              30% gross margin, they have $209 to spend on actual work. At even a modest $30/hour
              labour cost, that&apos;s 7 hours per month. For a 22-working-day month, that&apos;s about
              20 minutes per day. Here&apos;s what gets produced in 7 hours of SEO work:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  label: "What you get told you're getting",
                  items: [
                    "Keyword research",
                    "On-page optimisation",
                    "Content creation (10 articles!)",
                    "Link building",
                    "Monthly reporting",
                    "Google Business Profile management",
                  ],
                },
                {
                  label: "What actually happens",
                  items: [
                    "Automated keyword tool output, not strategy",
                    "Title and meta description changes, nothing more",
                    "500-word AI-generated articles that trigger Helpful Content filters",
                    "Paid links from low-quality PBNs or spam directories",
                    "Auto-generated PDF with traffic graphs",
                    "One-time setup, never touched again",
                  ],
                },
              ].map((col) => (
                <div key={col.label} className={`rounded-xl p-5 ${col.label.includes("actually") ? "bg-red-50 border border-red-100" : "bg-gray-50"}`}>
                  <h3 className="font-semibold text-ink mb-3">{col.label}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* What it costs in penalties */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What cheap SEO costs you — beyond the monthly fee
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The $299/month fee is the smallest cost of cheap SEO. Here&apos;s what you&apos;re
              actually paying for when low-quality tactics are applied to your website.
            </p>
            <div className="space-y-4">
              {[
                {
                  risk: "Google manual penalty",
                  likelihood: "Low but catastrophic when it happens",
                  cost: "3–6 months recovery time, $3,000–$8,000 in recovery costs, total organic traffic loss during penalty period",
                },
                {
                  risk: "Algorithmic penalty (Spam, Helpful Content updates)",
                  likelihood: "High with AI-generated content and low-quality links",
                  cost: "Traffic loss that may be permanent. Many sites hit by the September 2024 Helpful Content update have never recovered",
                },
                {
                  risk: "Wasted opportunity cost",
                  likelihood: "Certain",
                  cost: "12 months of $299/month = $3,588 spent with no real progress. A competitor who invested properly during that same period is now 12 months ahead",
                },
                {
                  risk: "Link disavow project",
                  likelihood: "Very likely after 12+ months of cheap link building",
                  cost: "Auditing and disavowing toxic links: typically $1,500–$3,000 as a one-off project. You're now spending $300/month to undo damage, before you can start building properly",
                },
              ].map((item) => (
                <div key={item.risk} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-semibold text-amber-900">{item.risk}</h3>
                    <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded shrink-0">{item.likelihood}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.cost}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real Sydney SEO pricing tiers */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Real SEO pricing tiers in Sydney — what you get at each level
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is honest. Every agency prices differently, but here&apos;s what legitimate SEO
              work costs in Sydney in 2025. All prices AUD + GST.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  tier: "SEO Audit (one-off)",
                  price: "From $1,200",
                  description: "Full technical audit, keyword gap analysis, competitor benchmark, 90-day action roadmap. Right for businesses who want to understand the landscape before committing to a retainer — or who plan to implement recommendations themselves.",
                  highlight: false,
                },
                {
                  tier: "Local SEO Retainer",
                  price: "From $1,800/month",
                  description: "GBP management, citation building, suburb-level keyword targeting, on-page optimisation, monthly reporting. Right for trade businesses and local services whose primary goal is map pack and suburb-level organic rankings.",
                  highlight: true,
                },
                {
                  tier: "Full SEO Retainer",
                  price: "From $2,800/month",
                  description: "Everything in Local SEO plus content strategy, link building (3–5 quality links/month), AEO/GEO optimisation, and technical SEO ongoing. Right for businesses who want comprehensive organic growth and AI search visibility.",
                  highlight: false,
                },
              ].map((tier) => (
                <div
                  key={tier.tier}
                  className={`rounded-xl p-5 border ${
                    tier.highlight
                      ? "border-brand-400 bg-brand-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <p className="text-sm font-semibold text-brand-500 mb-1">{tier.tier}</p>
                  <p className="font-serif text-2xl font-bold text-ink mb-3">{tier.price}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Who should and shouldn't invest now */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Who should invest in SEO now — and who should wait
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Not every business is ready for an SEO retainer. Here&apos;s an honest assessment
              of when the timing is right — and when it&apos;s not.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  heading: "Invest in SEO now if:",
                  items: [
                    "You have an established business with a proven service offering",
                    "You're already getting some organic leads and want to scale them",
                    "You operate in a local market where ranking changes are directly bookable",
                    "You have at least $1,800/month to invest consistently for 6+ months",
                    "You're losing jobs to competitors who rank above you in Google",
                  ],
                },
                {
                  heading: "Wait on SEO if:",
                  items: [
                    "You're pre-revenue or haven't validated your service offering yet",
                    "You can't sustain a 6-month investment — SEO takes time to compound",
                    "You need immediate leads in the next 2–4 weeks (Google Ads is faster)",
                    "Your website is so technically broken that the first $1,200 needs to go to a rebuild",
                    "You have serious reputation issues that would undermine any SEO you do",
                  ],
                },
              ].map((col) => (
                <div key={col.heading} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-3">{col.heading}</h3>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-0.5" />
                        {item}
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
        heading="Want an honest assessment of what SEO would cost you — and what it would return?"
        subheading="Book a free 30-minute consultation. We'll look at your specific situation, tell you what you'd need to invest to get real results, and be straight with you if the timing isn't right."
        ctaLabel="Book a free SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
