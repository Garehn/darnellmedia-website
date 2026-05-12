import type { Metadata } from "next";
import { CheckCircle, TrendingUp, Zap } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildGraph,
  blogPostingSchema,
  faqPageSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO vs Google Ads — Which is Better for Sydney Businesses? | Darnell Media",
  description:
    "SEO vs Google Ads for Sydney businesses. Honest comparison of costs, timelines, and ROI. When to choose each — or both.",
  alternates: { canonical: "/seo-vs-google-ads/" },
  openGraph: {
    title: "SEO vs Google Ads — Which is Better for Sydney Businesses? | Darnell Media",
    description:
      "SEO vs Google Ads for Sydney businesses. Honest comparison of costs, timelines, and ROI. When to choose each — or both.",
    url: `${SITE_URL}/seo-vs-google-ads/`,
    images: [
      {
        url: `${SITE_URL}/images/hero/seo-vs-google-ads.webp`,
        width: 1200,
        height: 675,
      },
    ],
  },
};

const FAQS = [
  {
    q: "Is SEO or Google Ads better for a new Sydney business?",
    a: "For a brand new business that needs leads now, Google Ads is usually the right starting point. SEO takes 60–90 days minimum before meaningful results appear. Ads can generate calls within 48 hours of launch. The ideal strategy for a new business is: start with Ads for immediate cash flow, then build SEO in parallel so you're not dependent on ad spend forever.",
  },
  {
    q: "How much does Google Ads cost for a Sydney trade business?",
    a: "Sydney trade businesses typically spend $1,500–$5,000/month on Google Ads to run a meaningful campaign. Click costs for competitive terms ('plumber Sydney', 'emergency electrician') run $8–$35 per click. If your conversion rate is 15% and average job value is $500, you need to work backwards from those numbers to find your breakeven ad spend.",
  },
  {
    q: "Can I stop paying for Google Ads if I have good SEO?",
    a: "For most terms, yes — once you're ranking organically in positions 1–3, you can significantly reduce or pause Ads for those keywords. Many businesses keep a small Ads budget for branded terms (bidding on their own name) and highest-value commercial terms, while letting organic handle the volume. It's a strategic decision, not a binary one.",
  },
  {
    q: "How long until SEO produces leads — compared to Ads?",
    a: "Google Ads can generate leads within days. SEO typically takes 60–90 days for initial movement, with meaningful lead volume at 4–6 months. The difference: Ads require ongoing spend to maintain leads. SEO builds equity — once you're ranking, that traffic continues without per-click cost.",
  },
  {
    q: "Do Google Ads affect my SEO rankings?",
    a: "No — running Google Ads does not improve your organic rankings. Google keeps paid and organic completely separate. However, running Ads can give you valuable keyword conversion data that informs your SEO strategy, so the two channels can inform each other even if they don't directly influence each other.",
  },
];

export default function SeoVsGoogleAdsPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO vs Google Ads — Honest Comparison for Sydney Businesses",
      description:
        "SEO vs Google Ads for Sydney businesses. Honest comparison of costs, timelines, and ROI. When to choose each — or both.",
      url: `${SITE_URL}/seo-vs-google-ads/`,
      datePublished: "2025-01-01",
      dateModified: "2025-05-01",
      image: `${SITE_URL}/images/hero/seo-vs-google-ads.webp`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO vs Google Ads.<br />Honest comparison for Sydney businesses."
        subheadline="We're an SEO agency, so you'd expect us to say SEO wins. The truth is more nuanced — and we'll tell you when Ads are the better choice for your situation."
        image="/images/hero/seo-vs-google-ads.webp"
        imageAlt="SEO vs Google Ads — Darnell Media"
        ctaLabel="Get a free SEO vs Ads analysis"
        ctaHref="/book/"
        breadcrumbs={[{ label: "SEO vs Google Ads" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-gray-600 leading-relaxed text-lg">
              Most comparisons of SEO and Google Ads are written by whoever you&apos;re
              asking — an SEO agency will tell you SEO wins, an Ads agency will tell you
              Ads win. We run an SEO agency, but we regularly recommend Ads to new
              clients because they need leads faster than organic can deliver. Here&apos;s
              the honest picture.
            </p>
          </div>

          {/* Section 1: How they work differently */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              1. How they work differently
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Pay-per-click vs organic placement
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="border border-amber-200 bg-amber-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-amber-600" />
                  <h3 className="font-semibold text-ink">Google Ads (PPC)</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "You pay every time someone clicks your ad",
                    "Appear at the top of results immediately after campaign launch",
                    "Visibility stops the moment you stop paying",
                    "Clearly labelled 'Sponsored' — some users skip ad results",
                    "Full control over which keywords trigger your ad",
                    "Detailed conversion tracking from day one",
                  ].map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-amber-500 font-bold flex-shrink-0">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-brand-200 bg-brand-50 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-brand-600" />
                  <h3 className="font-semibold text-ink">SEO (Organic)</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "No per-click cost once rankings are established",
                    "Takes 60–90 days minimum for meaningful movement",
                    "Rankings persist after you stop active work (compounding asset)",
                    "No 'Sponsored' label — typically higher trust from users",
                    "Ranking determined by content, authority, and technical factors",
                    "Traffic attribution requires proper analytics setup",
                  ].map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-brand-500 font-bold flex-shrink-0">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Cost comparison */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              2. The cost comparison
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Ads cost drops to zero when you stop paying. SEO compounds.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The real cost difference between SEO and Google Ads isn&apos;t what you
              pay in year one. It&apos;s what happens in year three.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Google Ads: linear cost model",
                  body: "Every lead you get from Ads costs money. Your cost per lead in year three is roughly the same as year one. If you pause the campaign, leads stop immediately. Sydney click costs for competitive trade terms are $8–$35 per click — at a 10% conversion rate, that's $80–$350 per lead before accounting for account management fees.",
                },
                {
                  title: "SEO: compounding asset model",
                  body: "SEO investment builds rankings that, once achieved, continue to generate traffic without per-click spend. In year three of a well-executed SEO strategy, your cost per lead from organic is typically a fraction of year one — because the baseline traffic has grown and the retainer cost has remained constant.",
                },
                {
                  title: "The flip side: SEO has upfront drag",
                  body: "Months 1–3 of SEO you're paying without seeing proportionate leads. That cash flow gap is real. If your business can't sustain 3 months of investment before meaningful returns, Ads may be necessary to bridge the gap while SEO builds.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink">{item.title}: </span>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Timeline comparison */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              3. Timeline comparison
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Ads: immediate. SEO: 90 days to meaningful results.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-6 font-semibold text-ink w-32">Timeframe</th>
                    <th className="py-3 pr-6 font-semibold text-amber-700">Google Ads</th>
                    <th className="py-3 font-semibold text-brand-700">SEO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      time: "Day 1–7",
                      ads: "Campaign can be live, generating clicks and leads",
                      seo: "Technical audit and keyword strategy in progress",
                    },
                    {
                      time: "Month 1",
                      ads: "Full data on conversion rates, cost per lead",
                      seo: "On-page changes being indexed. No ranking movement yet.",
                    },
                    {
                      time: "Month 2–3",
                      ads: "Campaign optimised, improving return",
                      seo: "First keyword movements visible. Local terms moving fastest.",
                    },
                    {
                      time: "Month 4–6",
                      ads: "Consistent lead volume at known cost",
                      seo: "Meaningful organic lead volume. Map pack placements.",
                    },
                    {
                      time: "Year 2–3",
                      ads: "Same cost-per-lead (or higher with competition)",
                      seo: "Compounding traffic. Cost-per-lead declining year-on-year.",
                    },
                  ].map((row) => (
                    <tr key={row.time} className="align-top">
                      <td className="py-3 pr-6 font-medium text-gray-500 whitespace-nowrap">
                        {row.time}
                      </td>
                      <td className="py-3 pr-6 text-gray-600">{row.ads}</td>
                      <td className="py-3 text-gray-600">{row.seo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 4: When to use Ads */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              4. When to use Google Ads
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Ads win when you need leads fast or SEO can&apos;t move quickly enough
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "New business",
                  body: "If your website is less than 12 months old, you likely don't have the domain authority or content depth to rank organically for competitive terms. Ads get you in front of buyers while SEO builds.",
                },
                {
                  title: "Product or service launch",
                  body: "Launching a new service? Ads let you test which messaging converts before investing in long-term SEO content. Use Ads data to identify your best-performing keywords, then build SEO around those.",
                },
                {
                  title: "Seasonal demand spike",
                  body: "Pest control companies before summer, solar installers before the rebate deadline, landscapers in spring. Ads let you scale up quickly for short-term demand without waiting for organic rankings to move.",
                },
                {
                  title: "Urgent lead pipeline gap",
                  body: "If your business has a slow month and needs leads within days, Ads is the right tool. SEO is not a short-term lever. Treating it as one creates frustration for both parties.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: When SEO wins */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              5. When SEO wins
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Established business, competitive keywords, long-term cost
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Established business with existing site",
                  body: "If your site has been around for 2+ years and has some content, you have a foundation to build on. SEO compounds that base much faster than starting from zero.",
                },
                {
                  title: "High cost-per-click keywords",
                  body: "In industries where Ads clicks cost $20–$40 each (lawyers, financial services, emergency trades), the organic alternative becomes highly attractive. Ranking organically for the same term can produce the same lead at a fraction of the long-term cost.",
                },
                {
                  title: "Long-term business model",
                  body: "If you're building a business you'll own for 10 years, SEO is an appreciating asset. Ads are a recurring expense. The long-term ROI of SEO almost always wins for established businesses.",
                },
                {
                  title: "Brand trust matters",
                  body: "Organic results carry more credibility than ads for many service categories — particularly health, legal, and financial adjacent businesses. If your clients research before booking, organic visibility has higher conversion rates than paid.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-brand-50 border border-brand-100 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: When to use both */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              6. When to use both
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Dominating the SERP and protecting your brand
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The highest-performing strategy for established Sydney businesses is
              usually a combination — using each channel where it&apos;s strongest:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Branded term protection",
                  body: "Competitors can bid on your brand name. If someone searches 'Darnell Media', a competitor can appear above your organic listing with an ad. Bidding on your own brand terms is cheap and ensures you capture that traffic.",
                },
                {
                  title: "SERP domination",
                  body: "When you rank #1 organically AND run an ad above it for the same keyword, you occupy two of the top three positions. Click-through rate data consistently shows this increases overall traffic to your site versus either channel alone.",
                },
                {
                  title: "Ads while SEO builds",
                  body: "Run Ads in months 1–3 while organic rankings establish. As SEO results materialise, gradually shift budget from Ads to organic-supported keywords and reallocate Ads spend to harder-to-rank terms.",
                },
                {
                  title: "Testing content strategy",
                  body: "Use Ads to test which messages and keyword angles convert best. Build your long-term SEO content strategy around the winners — reducing the risk of investing months into pages targeting keywords that don't convert.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink">{item.title}: </span>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verdict callout */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="font-serif text-xl font-bold text-ink mb-4">
              The honest verdict
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              There is no universal answer. The right choice depends on your business
              stage, cash flow, competition level, and how quickly you need leads.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="font-bold text-amber-600 flex-shrink-0">→</span>
                New business or urgent leads needed: start with Ads, build SEO in parallel.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-600 flex-shrink-0">→</span>
                Established business thinking long-term: SEO is the better investment.
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-ink flex-shrink-0">→</span>
                Competitive market with strong budget: use both strategically.
              </li>
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              If you book a consultation with us, we&apos;ll give you an honest
              recommendation — even if that recommendation is to start with Ads managed
              elsewhere before investing in SEO with us.
            </p>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Want an honest analysis for your business?"
        subheading="We'll review your site, your competition, and your current lead pipeline — then give you a straight recommendation on whether SEO, Ads, or both is the right move."
        ctaLabel="Get a free SEO vs Ads analysis"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
