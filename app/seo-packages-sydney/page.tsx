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
  title: "SEO Packages & Pricing Sydney | From $1,800/mo | Darnell Media",
  description:
    "Transparent SEO pricing for Sydney businesses. Local SEO from $1,800/mo. Full SEO retainer from $2,800/mo. No lock-in. Free audit included.",
  alternates: { canonical: "/seo-packages-sydney/" },
  openGraph: {
    title: "SEO Packages & Pricing Sydney | From $1,800/mo | Darnell Media",
    description:
      "Transparent SEO pricing for Sydney businesses. Local SEO from $1,800/mo. Full SEO retainer from $2,800/mo. No lock-in. Free audit included.",
    url: `${SITE_URL}/seo-packages-sydney/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-packages-sydney.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "What's included in the free audit?",
    a: "The free initial consultation includes a high-level review of your site's technical health, current keyword rankings, and top 3 competitor gaps. If you proceed with a paid SEO Audit, you receive a full 100+ point report, keyword gap analysis, and a prioritised 90-day action plan.",
  },
  {
    q: "Can I upgrade or downgrade my package?",
    a: "Yes. Because we work month-to-month, you can change your package at the start of any new billing period. Some clients start on Local SEO and add full SEO services once they see early results. Others downgrade to maintenance mode after achieving their goals.",
  },
  {
    q: "How does billing work?",
    a: "Retainers are billed monthly in advance via bank transfer or card. The SEO Audit is a one-off fixed-price project billed 50% upfront and 50% on delivery. All prices are AUD + GST.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No. All retainer packages are month-to-month with 30 days notice to cancel. We don't believe in lock-in contracts — if we're not delivering results, you should be able to leave. The only commitment we ask for is 90 days to see meaningful progress, because SEO takes time to compound.",
  },
];

const TIERS = [
  {
    name: "SEO Audit",
    price: "$1,200",
    period: "one-off",
    description: "A full diagnostic of your site. Know exactly what's holding you back and what to fix first.",
    highlight: false,
    points: [
      "100+ point technical SEO audit",
      "Keyword gap & competitor analysis",
      "Content & on-page review",
      "90-day prioritised action roadmap",
      "30-minute debrief call",
    ],
  },
  {
    name: "Local SEO",
    price: "$1,800",
    period: "/month",
    description: "For Sydney trades who need to dominate the map pack and rank in their service suburbs.",
    highlight: true,
    points: [
      "Google Business Profile management",
      "Citation building & cleanup",
      "Review system setup",
      "2 suburb landing pages/month",
      "Monthly performance report",
    ],
  },
  {
    name: "Full SEO",
    price: "$2,800",
    period: "/month",
    description: "Full-stack SEO for businesses ready to dominate organic search across Sydney.",
    highlight: false,
    points: [
      "Everything in Local SEO",
      "Content strategy & creation (4 pages/month)",
      "Link building (3–5 backlinks/month)",
      "Technical SEO ongoing maintenance",
      "AEO/GEO add-on available from +$800/mo",
    ],
  },
];

export default function SeoPackagesSydneyPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO Packages & Pricing Sydney — Transparent, No Lock-in",
      description:
        "Transparent SEO pricing for Sydney businesses. Local SEO from $1,800/mo. Full SEO retainer from $2,800/mo. No lock-in.",
      url: `${SITE_URL}/seo-packages-sydney/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-packages-sydney.webp`,
    }),
    serviceSchema({
      name: "SEO Packages Sydney",
      description:
        "Transparent SEO packages for Sydney businesses. Audit from $1,200. Local SEO from $1,800/month. Full SEO retainer from $2,800/month.",
      url: `${SITE_URL}/seo-packages-sydney/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="Transparent SEO pricing.<br />No lock-in contracts."
        subheadline="We scope campaigns to your goals, not to pad a retainer. Here's exactly what you get at each level."
        image="/images/hero/seo-packages-sydney.webp"
        imageAlt="SEO Packages Sydney — Darnell Media"
        ctaLabel="Get a custom quote"
        ctaHref="/book/"
        breadcrumbs={[{ label: "SEO Packages & Pricing" }]}
      />

      {/* Pricing table */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-3 text-center">
            SEO packages &amp; pricing
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
            All prices AUD + GST. No setup fees. No lock-in contracts. Cancel with 30 days notice.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-7 flex flex-col ${
                  tier.highlight
                    ? "border-brand-500 bg-brand-50 shadow-lg"
                    : "border-gray-200 bg-white"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most popular
                    </span>
                  </div>
                )}
                <div className="mb-5">
                  <p className="text-sm font-semibold text-brand-500 mb-1">{tier.name}</p>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="font-serif text-3xl font-bold text-ink">{tier.price}</span>
                    <span className="text-gray-500 text-sm mb-1">{tier.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{tier.description}</p>
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-brand-400 flex-shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            Not sure which package is right for you? Book a free 30-minute consultation and we&apos;ll tell you honestly.
          </p>
        </div>
      </section>

      {/* What's not included */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
            What&apos;s not included (and why we tell you upfront)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Some agencies bury additional costs in fine print. We don&apos;t. Here&apos;s what sits outside the retainer:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "Paid advertising (Google Ads, Meta)",
                body: "We focus exclusively on organic SEO. If you need paid ads managed alongside SEO, we can refer you to trusted partners.",
              },
              {
                title: "Website development",
                body: "If technical SEO fixes require developer work beyond our scope (e.g. rebuilding a page template), we'll flag it clearly and help you find a developer if needed.",
              },
              {
                title: "Third-party tool subscriptions",
                body: "We use our own licences for SEO tools (Ahrefs, Screaming Frog, etc). You don't pay extra for these. If we recommend a tool for your team (e.g. review management software), we'll call that out separately.",
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
      </section>

      <CtaSection
        heading="Ready to get a custom quote?"
        subheading="Tell us about your business, your goals, and your budget. We'll scope a campaign that makes sense — no overselling, no lock-in."
        ctaLabel="Get a custom quote"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
