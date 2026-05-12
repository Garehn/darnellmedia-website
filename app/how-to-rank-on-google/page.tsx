import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
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
  title: "How to Rank on Google in 2025 — Sydney Guide | Darnell Media",
  description:
    "Practical guide to ranking on Google in 2025. Covers technical SEO, content, local SEO, AEO. Written for Sydney businesses by Darnell Media.",
  alternates: { canonical: "/how-to-rank-on-google/" },
  openGraph: {
    title: "How to Rank on Google in 2025 — Sydney Guide | Darnell Media",
    description:
      "Practical guide to ranking on Google in 2025. Covers technical SEO, content, local SEO, AEO. Written for Sydney businesses by Darnell Media.",
    url: `${SITE_URL}/how-to-rank-on-google/`,
    images: [
      {
        url: `${SITE_URL}/images/hero/how-to-rank-on-google.webp`,
        width: 1200,
        height: 675,
      },
    ],
  },
};

const FAQS = [
  {
    q: "How long does it take to rank on Google in 2025?",
    a: "For most Sydney businesses targeting suburb-level and industry keywords, you'll see meaningful movement within 60–90 days. Competitive terms like 'plumber Sydney' can take 4–6 months for page-one placement. Local and long-tail keywords often move faster — sometimes within 4–6 weeks of targeted optimisation.",
  },
  {
    q: "What's more important — content or technical SEO?",
    a: "Neither works without the other, but the order matters. Technical SEO is the foundation: if Google can't crawl and index your site correctly, no amount of content will rank. Fix technical issues first, then focus on content targeting real commercial intent. Trying to rank with great content on a technically broken site is like building on sand.",
  },
  {
    q: "Does Google Business Profile still matter for local SEO in 2025?",
    a: "More than ever. The Google Business Profile (GBP) map pack appears above organic results for the majority of local searches. For trade businesses, appearing in that three-pack is often worth more than ranking #1 in organic listings. GBP optimisation — including categories, service areas, photos, and review management — is non-negotiable for local businesses.",
  },
  {
    q: "What is AEO and why does it matter?",
    a: "Answer Engine Optimisation (AEO) is the practice of structuring your content to be cited by AI-powered search tools — Google AI Overviews, ChatGPT, Perplexity, and similar. These tools increasingly appear before organic results. If your content answers questions clearly, cites sources, and is marked up with schema, you have a higher chance of being cited as a source — which drives brand visibility even when users don't click through.",
  },
  {
    q: "Do I need a blog to rank on Google?",
    a: "Not necessarily — and for most trade businesses, a blog is the wrong priority. A plumber ranks by having technically sound service pages, a well-optimised GBP, suburb-specific landing pages, and quality backlinks. A blog can support that foundation with informational content, but 50 thin posts will do far less than five well-researched, authoritative pages targeting the right commercial intent.",
  },
];

export default function HowToRankOnGooglePage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "How to Rank on Google in 2025 — The Practical Guide for Sydney Businesses",
      description:
        "Practical guide to ranking on Google in 2025. Covers technical SEO, content, local SEO, and AEO. Written for Sydney businesses.",
      url: `${SITE_URL}/how-to-rank-on-google/`,
      datePublished: "2025-01-01",
      dateModified: "2025-05-01",
      image: `${SITE_URL}/images/hero/how-to-rank-on-google.webp`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="How to rank on Google in 2025.<br />The practical guide for Sydney businesses."
        subheadline="Not theory — a practical framework used on real Sydney campaigns. Follow this and you'll outrank 80% of your competitors."
        image="/images/hero/how-to-rank-on-google.webp"
        imageAlt="How to rank on Google in 2025 — Darnell Media"
        ctaLabel="Get a free SEO audit for your site"
        ctaHref="/book/"
        breadcrumbs={[{ label: "How to Rank on Google" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Intro */}
          <div className="max-w-3xl">
            <p className="text-gray-600 leading-relaxed text-lg">
              Google&apos;s algorithm evaluates hundreds of signals to decide which pages
              rank. Most guides turn this into an overwhelming checklist. This one
              doesn&apos;t. Here&apos;s the practical framework — what actually moves
              the needle for Sydney businesses in 2025, in the order it matters.
            </p>
          </div>

          {/* Section 1: Technical SEO */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              1. Start with technical SEO
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              The non-negotiable foundation
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Technical SEO isn&apos;t glamorous, but it&apos;s the gate. If Google
              can&apos;t crawl, render, and index your pages, nothing else in this guide
              matters. Before you write a single word of content or build a single link,
              confirm your technical foundation is solid.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Core Web Vitals",
                  body: "Google uses page experience signals — Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) — as ranking factors. Aim for LCP under 2.5 seconds on mobile. Most trade business websites fail here.",
                },
                {
                  title: "Mobile performance",
                  body: "Google indexes the mobile version of your site first. If your site is slow, unreadable, or broken on a phone, you're ranked on a broken version. Test with PageSpeed Insights — aim for a score above 85 on mobile.",
                },
                {
                  title: "Crawlability",
                  body: "Check robots.txt isn't accidentally blocking your key pages. Use Google Search Console to identify crawl errors. Orphaned pages — those with no internal links pointing to them — won't rank no matter how good the content.",
                },
                {
                  title: "Structured data (schema markup)",
                  body: "Schema markup tells Google exactly what your page is about — a local business, a service, a FAQ. For trade businesses, LocalBusiness schema, Service schema, and Review schema are the most impactful. It also helps AI tools cite your content.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Keywords */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              2. Target the right keywords
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Commercial intent beats search volume
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most businesses chase keywords with the highest search volume. That&apos;s
              the wrong metric. A keyword that gets 50 searches a month from people
              actively looking to hire is worth far more than a keyword with 5,000
              searches from people browsing. Here&apos;s how to think about it:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Commercial intent keywords",
                  body: "These are searches from people ready to hire or buy. 'Emergency plumber Manly', 'electrician quote Dee Why', 'best builder Northern Beaches'. These convert. Prioritise them above informational queries.",
                },
                {
                  title: "Local intent signals",
                  body: "In Sydney, suburb-level targeting is where the competition is thinnest and the conversion rate is highest. A plumber who ranks for 'plumber Brookvale' will get more qualified leads than one trying to rank for 'plumber Sydney'.",
                },
                {
                  title: "Near me searches",
                  body: "'Near me' searches have grown 150% in recent years and are now primarily resolved through the Google Business Profile map pack, not organic results. Your GBP optimisation directly determines your visibility here.",
                },
                {
                  title: "Long-tail keywords",
                  body: "Four-to-six word searches ('best rated solar installer Northern Beaches', 'same day pest control Pymble') have lower competition and higher commercial intent. Build individual pages or sections targeting these clusters.",
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

          {/* Section 3: Content */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              3. Create content that answers real questions
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Substance beats frequency
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The content arms race — more posts, more words, more pages — is a race to
              the bottom. Google has become very good at identifying thin content and
              deprioritising it. What works in 2025 is fewer, better pages that
              thoroughly address what the searcher actually needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Dedicated service pages",
                  body: "Each core service needs its own page — not a mention on a generic 'services' page. 'Emergency plumbing Manly', 'bathroom renovation Sydney', 'commercial electrical installations'. One page, one topic, targeted keyword.",
                },
                {
                  title: "Suburb landing pages",
                  body: "If you service 10 suburbs, you need 10 suburb-specific pages — not 10 copies of the same page with the suburb name changed. Genuine local content: nearby landmarks, service area specifics, local reviews.",
                },
                {
                  title: "Content depth over word count",
                  body: "A 1,500-word page that answers the top 10 questions someone has about your service is more valuable than a 4,000-word page padded with repetition. Depth means genuinely covering the topic, including questions users ask before hiring.",
                },
                {
                  title: "Author authority",
                  body: "Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trust) standards mean that content attributed to a named expert with credentials outperforms anonymous content. Put your name and qualifications on your pages.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Local presence */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              4. Build your local presence
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              GBP, citations, and reviews
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For Sydney businesses with a defined service area, local SEO signals can
              outweigh technical and content factors in determining map pack rankings.
              These are the three levers:
            </p>
            <div className="space-y-5">
              {[
                {
                  title: "Google Business Profile",
                  body: "Your GBP is not a set-and-forget listing. It needs regular posts, updated photos, accurate service categories, defined service areas, Q&A monitoring, and active review management. Profiles with higher engagement consistently outrank inactive competitors.",
                },
                {
                  title: "Citation consistency",
                  body: "Citations are mentions of your business name, address, and phone number across directories (Yellow Pages, True Local, Hotfrog, industry-specific directories). Inconsistent NAP data — different phone numbers or addresses across listings — sends conflicting signals to Google and depresses rankings.",
                },
                {
                  title: "Review volume and recency",
                  body: "Review count and recency are direct ranking factors in the map pack. A business with 180 reviews and a 4.8 rating will outrank a newer competitor in most cases. Build a review generation system — follow up with satisfied clients systematically, not ad hoc.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-brand-400 pl-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: AI Search */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-2">
              5. Prepare for AI search
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              AEO, structured data, and E-E-A-T
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Google AI Overviews, ChatGPT, Perplexity, and other AI search tools are
              now part of the discovery journey for a significant percentage of searches.
              Being cited in these tools requires a different kind of optimisation — one
              that rewards clarity, authority, and structure.
            </p>
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 space-y-4">
              {[
                {
                  title: "Answer Engine Optimisation (AEO)",
                  body: "Structure your content to directly answer specific questions. Use clear headings, concise definitions, and numbered steps where relevant. AI tools pull from content that is easy to parse and clearly attributed to a knowledgeable source.",
                },
                {
                  title: "Structured data markup",
                  body: "FAQ schema, HowTo schema, and LocalBusiness schema all increase your chances of being cited in AI Overviews. Mark up your content correctly and Google's AI surfaces are more likely to pull from your page.",
                },
                {
                  title: "E-E-A-T signals",
                  body: "Experience, Expertise, Authoritativeness, and Trustworthiness. For AI search, this means: named authors with credentials, citing sources, displaying qualifications and licences, accumulating external mentions, and keeping content current.",
                },
                {
                  title: "Brand mentions and citations",
                  body: "AI models are trained on the web. If your business is mentioned in external articles, directories, and media — even without a backlink — it builds entity authority. Digital PR and proactive citation building support this.",
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

          {/* Summary callout */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="font-serif text-xl font-bold text-ink mb-4">
              The order matters
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Most businesses try to do everything at once and make slow progress on all
              of it. The framework above is sequenced deliberately:
            </p>
            <ol className="space-y-2">
              {[
                "Fix technical issues — give Google a clean site to index.",
                "Identify the keywords that drive commercial enquiries in your area.",
                "Build substantive pages targeting those keywords.",
                "Optimise your local signals — GBP, citations, reviews.",
                "Layer in AEO and structured data for AI search visibility.",
              ].map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-gray-600">
                  <span className="font-bold text-brand-600 flex-shrink-0">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Skip the foundation and the top floors don&apos;t stand.
            </p>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Want us to do this for your site?"
        subheading="Get a free SEO audit. We'll run through your technical health, keyword gaps, and local signals — then show you a clear roadmap to outrank your competitors."
        ctaLabel="Get a free SEO audit for your site"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
