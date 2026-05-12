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
  title: "SEO for Plumbers Sydney — Get More Emergency Jobs | Darnell Media",
  description:
    "Sydney plumber SEO specialists. Rank for emergency plumbing terms. Map pack, suburb landing pages, review systems. +312% leads for Northern Beaches client.",
  alternates: { canonical: "/seo-for-plumbers/" },
  openGraph: {
    title: "SEO for Plumbers Sydney — Get More Emergency Jobs | Darnell Media",
    description:
      "Sydney plumber SEO specialists. Rank for emergency plumbing terms. Map pack, suburb landing pages, review systems. +312% leads for Northern Beaches client.",
    url: `${SITE_URL}/seo-for-plumbers/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-for-plumbers.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How much does SEO for a plumbing business cost in Sydney?",
    a: "Our Local SEO retainer for Sydney plumbers starts from $1,800/month (AUD + GST). This covers GBP management, citation building, review system setup, and suburb landing pages. Full SEO (which includes content strategy, link building, and technical SEO) starts from $2,800/month. We also offer a one-off SEO Audit from $1,200 if you want to start with a clear picture of where you stand.",
  },
  {
    q: "I'm already on page 1 for 'plumber [my suburb]'. What else can SEO do?",
    a: "Ranking in one suburb is a great start — but most plumbing businesses serve 8–15 suburbs. Are you ranking in all of them? Are you in the map pack, not just organic? Are you showing up for emergency variants of those searches? There's almost always significant untapped search volume in the suburbs around your primary location.",
  },
  {
    q: "How do you get a plumber into the map pack?",
    a: "Map pack placement requires consistent GBP optimisation (categories, services, photos, posts), strong review count and recency (we'd aim for 50+ Google reviews at 4.5+), clean NAP citations across Australian directories, and suburb-level pages on your website that reinforce your service area. We work on all four simultaneously.",
  },
  {
    q: "Do I need a website, or can I just focus on Google Business Profile?",
    a: "GBP alone will get you some map pack visibility, but a well-structured website significantly amplifies those results. Suburb landing pages, service pages with schema markup, and review integration all feed back into your GBP authority. The businesses dominating map packs in competitive Sydney suburbs almost always have strong websites behind them.",
  },
];

export default function SeoForPlumbersPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO for Plumbers Sydney — Get More Emergency Jobs",
      description:
        "Sydney plumber SEO specialists. Rank for emergency plumbing terms. Map pack, suburb landing pages, review systems.",
      url: `${SITE_URL}/seo-for-plumbers/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-for-plumbers.webp`,
    }),
    serviceSchema({
      name: "SEO for Plumbers Sydney",
      description:
        "Specialist SEO for Sydney plumbing businesses. Emergency keyword targeting, map pack optimisation, suburb landing pages, review systems.",
      url: `${SITE_URL}/seo-for-plumbers/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO for plumbers.<br />Emergency jobs found before competitors load."
        subheadline="When a pipe bursts at 11pm, your customer Googles 'emergency plumber [suburb]'. We make sure that's you — not the bloke two suburbs over."
        image="/images/hero/seo-for-plumbers.webp"
        imageAlt="SEO for Plumbers Sydney — Darnell Media"
        ctaLabel="Book your free plumbing SEO audit"
        ctaHref="/book/"
        resultBadge="+312% organic leads for a Northern Beaches plumber (6 months)"
        breadcrumbs={[
          { label: "SEO for Tradies", href: "/seo-for-tradies/" },
          { label: "SEO for Plumbers" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Emergency vs scheduled */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Emergency vs scheduled: the two types of plumbing searches
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Plumbing SEO isn&apos;t one strategy — it&apos;s two, running in parallel. Emergency searches and scheduled searches behave completely differently, convert differently, and require different page types to capture.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-semibold text-ink mb-2">Emergency searches</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Decision made in under 60 seconds. First credible result in map pack wins the call.
                </p>
                <ul className="space-y-1.5">
                  {[
                    '"emergency plumber Manly"',
                    '"blocked drain [suburb] now"',
                    '"burst pipe repair near me"',
                    '"plumber open now northern beaches"',
                  ].map((q) => (
                    <li key={q} className="font-mono text-xs bg-white border border-amber-100 rounded px-2 py-1 text-gray-600">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-50 border border-brand-200 rounded-xl p-5">
                <h3 className="font-semibold text-ink mb-2">Scheduled searches</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Comparing quotes. Customers check reviews, pricing, and credentials before calling.
                </p>
                <ul className="space-y-1.5">
                  {[
                    '"bathroom renovation plumber Sydney"',
                    '"hot water system replacement cost"',
                    '"licensed plumber [suburb]"',
                    '"gas fitting northern beaches"',
                  ].map((q) => (
                    <li key={q} className="font-mono text-xs bg-white border border-brand-100 rounded px-2 py-1 text-gray-600">
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Emergency pages need to be fast, mobile-first, and in the map pack. Scheduled-search pages need pricing signals, visible credentials, and compelling reviews. We build both.
            </p>
          </div>

          {/* Suburb-level strategy */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Suburb-level strategy for Sydney plumbers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A plumbing business on the Northern Beaches typically serves 10–20 suburbs. Ranking for just &ldquo;plumber Manly&rdquo; leaves most of that territory undefended. We build a suburb page strategy that covers your entire service area.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Primary suburb pages",
                  body: "High-traffic suburbs where you want to dominate get dedicated service + location pages — 'emergency plumber Manly', 'hot water repairs Manly', 'blocked drains Manly'. These target the full keyword cluster for that suburb.",
                },
                {
                  title: "Secondary suburb pages",
                  body: "Adjacent and secondary suburbs get leaner pages that establish presence and capture lower-competition searches. As the campaign matures, we expand these into full pages.",
                },
                {
                  title: "Internal linking architecture",
                  body: "Suburb pages link to each other and back to your main service pages, creating a geographic hub-and-spoke structure that reinforces your authority across the entire service area.",
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

          {/* GBP + map pack */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Google Business Profile &amp; map pack for plumbers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The three-pack dominates the top of mobile search results for plumbing queries. Getting there — and staying there — is the single highest-leverage SEO action for most Sydney plumbers.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Category selection",
                  body: "The difference between 'Plumber' and 'Emergency Plumber' as your primary category changes which searches Google shows you for. We audit and optimise your category setup.",
                },
                {
                  title: "Service area optimisation",
                  body: "Your GBP service area needs to match the suburbs you're targeting with landing pages. Misalignment here is a common cause of underperformance in the map pack.",
                },
                {
                  title: "Photo & content strategy",
                  body: "Job-site photos, van photos, team photos — these build trust signals in your GBP. We advise on what to photograph and handle the upload and geo-tagging.",
                },
                {
                  title: "Review velocity",
                  body: "We set up an automated post-job review request system. Our Northern Beaches plumber client went from 12 to 74 Google reviews in 6 months using this system — a key driver of the +312% lead increase.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review system */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Review system for plumbers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Reviews are a direct ranking factor in the map pack and a conversion signal for customers choosing between plumbers. Most Sydney plumbers have fewer than 20 Google reviews — a significant competitive gap that&apos;s straightforward to close with the right system.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Post-job SMS sequence",
                  body: "Automated SMS sent 30 minutes after job completion, with a direct link to your Google review page. Response rates are 3–5x higher than email requests.",
                },
                {
                  title: "Review response templates",
                  body: "We write response templates for positive reviews (which include keyword-rich acknowledgements) and for negative reviews (de-escalation language that shows professionalism to future readers).",
                },
                {
                  title: "Third-party platform coverage",
                  body: "Google is the priority, but reviews on hipages, ServiceSeeking, and Product Review also feed into your authority signals. We monitor all platforms.",
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

          {/* Month-by-month campaign */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What a plumber SEO campaign looks like, month by month
            </h2>
            <div className="space-y-4">
              {[
                {
                  period: "Week 1–2",
                  title: "Audit & strategy",
                  body: "Full technical audit, keyword mapping across your service suburbs, competitor analysis, GBP review. You receive a 90-day roadmap before we spend a dollar.",
                },
                {
                  period: "Week 3–4",
                  title: "Foundation fixes",
                  body: "Technical issues fixed, GBP fully optimised, citation cleanup begins, review request system live, call tracking installed.",
                },
                {
                  period: "Month 2",
                  title: "Content & pages",
                  body: "Core service pages rewritten. First suburb landing pages live. Emergency keyword pages published.",
                },
                {
                  period: "Month 3",
                  title: "Map pack movement",
                  body: "Citations complete. Review count growing. First map pack appearances in target suburbs. Link building begins.",
                },
                {
                  period: "Month 4–6",
                  title: "Compound growth",
                  body: "Rankings compounding. Secondary suburb expansion. Lead volume visibly increasing via call tracking. Strategy reviewed and adjusted based on data.",
                },
              ].map((step) => (
                <div key={step.period} className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right pt-0.5">
                    <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-2 py-1 rounded">
                      {step.period}
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

        </div>
      </section>

      <CtaSection
        heading="More emergency jobs. Starting now."
        subheading="Book a free plumbing SEO audit. We'll check your current rankings, your GBP, your reviews, and your top 3 competitors — and give you a clear picture of what it'll take to get above them."
        ctaLabel="Book your free plumbing SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
