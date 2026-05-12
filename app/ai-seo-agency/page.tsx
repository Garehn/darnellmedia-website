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
  title: "AI SEO Agency Sydney — AEO, GEO & AI Search | Darnell Media",
  description:
    "Sydney AI SEO agency specialising in AEO, GEO, and AI search optimisation. Get cited in Google AI Overviews, recommended by ChatGPT, and ranked in AI-powered search. No lock-in contracts.",
  alternates: { canonical: "/ai-seo-agency/" },
  openGraph: {
    title: "AI SEO Agency Sydney — AEO, GEO & AI Search | Darnell Media",
    description:
      "Sydney AI SEO agency. AEO (Google AI Overviews), GEO (ChatGPT, Claude), and traditional SEO combined. Search has changed. Your strategy should too.",
    url: `${SITE_URL}/ai-seo-agency/`,
    images: [{ url: `${SITE_URL}/images/hero/ai-seo-agency.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "What does an AI SEO agency do differently from a traditional SEO agency?",
    a: "A traditional SEO agency optimises for Google's blue links. An AI SEO agency also optimises for Google AI Overviews (AEO), AI assistant recommendations from ChatGPT and similar tools (GEO), and the emerging landscape of AI-powered search engines like Perplexity. The technical foundations overlap — strong content, technical health, authority — but the AEO and GEO layers require additional expertise that most traditional agencies haven't developed.",
  },
  {
    q: "Do I need AI SEO or just traditional SEO?",
    a: "If your customers are researching your services online — and most are — you need both. Traditional SEO still drives the majority of search traffic for most businesses. But AI Overviews now intercept 30%+ of informational searches, and AI assistant usage is growing fast, especially for recommendation queries. If you're only doing traditional SEO, you're leaving a growing share of search visibility unaddressed.",
  },
  {
    q: "Is AI SEO just a trend, or is it here to stay?",
    a: "It's structural. Google's investment in AI search (Gemini integration, AI Overviews expansion) is a multi-year, multi-billion dollar commitment. OpenAI's SearchGPT and similar products are building real search user bases. The shift from keyword-based to conversational, AI-mediated search has been building since voice search, accelerated with ChatGPT, and will continue. Businesses that adapt now build sustainable advantages over those that wait.",
  },
  {
    q: "How do I know if AI SEO is working?",
    a: "We track AI Overview citation frequency for target queries, monitor AI assistant responses to relevant recommendation queries, and correlate these with organic traffic, referral patterns, and enquiry volumes. AI SEO metrics are less deterministic than keyword rankings — but directional improvement in AI citations and the downstream traffic effects are measurable. We report on all of this monthly.",
  },
];

export default function AiSeoAgencyPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "AI SEO Agency Sydney — AEO, GEO & AI Search",
      description:
        "Sydney AI SEO agency. AEO, GEO, and traditional SEO combined. Google AI Overviews, ChatGPT recommendations, Perplexity visibility.",
      url: `${SITE_URL}/ai-seo-agency/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/ai-seo-agency.webp`,
    }),
    serviceSchema({
      name: "AI SEO Agency Sydney",
      description:
        "Sydney AI SEO agency specialising in AEO, GEO, and AI search optimisation. Google AI Overviews, ChatGPT recommendations, and traditional SEO for local businesses.",
      url: `${SITE_URL}/ai-seo-agency/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="Sydney's AI SEO agency.<br />Search has changed. Your strategy should too."
        subheadline="Google AI Overviews, ChatGPT, Perplexity — AI is answering your customers' questions before they see your website. We get you into those answers."
        image="/images/hero/ai-seo-agency.webp"
        imageAlt="AI SEO Agency Sydney — Darnell Media"
        ctaLabel="Book a free AI SEO consultation"
        ctaHref="/book/"
        breadcrumbs={[{ label: "AI SEO Agency" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* The AI search landscape */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              The AI search landscape in 2025 — what&apos;s actually happening
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Search hasn&apos;t died. But it has fractured. Your customers are now getting answers from
              multiple AI-powered sources that didn&apos;t exist two years ago — and those sources are
              intercepting queries before they reach your website.
            </p>
            <div className="space-y-4">
              {[
                {
                  platform: "Google AI Overviews",
                  impact: "Appears above organic results on 30%+ of informational searches. Cites sources — but only a handful of businesses per query get named.",
                  strategy: "AEO — Answer Engine Optimisation",
                },
                {
                  platform: "ChatGPT & OpenAI",
                  impact: "150M+ weekly users asking recommendation queries like 'best solar installer Sydney'. Not connected to real-time web by default — relies on training data and browsing.",
                  strategy: "GEO — Generative Engine Optimisation",
                },
                {
                  platform: "Perplexity AI",
                  impact: "Rapidly growing AI search engine that cites sources in real-time. More like Google AI Overviews but independent — different citation algorithm.",
                  strategy: "AEO + GEO combined",
                },
                {
                  platform: "Google traditional search",
                  impact: "Still drives the majority of commercial search traffic. Not going anywhere — but its share of total search attention is slowly declining.",
                  strategy: "Traditional SEO (still critical)",
                },
              ].map((item) => (
                <div key={item.platform} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-semibold text-ink">{item.platform}</h3>
                    <span className="text-xs bg-brand-100 text-brand-700 px-2 py-1 rounded font-medium shrink-0">{item.strategy}</span>
                  </div>
                  <p className="text-sm text-gray-600">{item.impact}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AEO + GEO combined strategy */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              AEO + GEO combined — a unified AI search strategy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Running AEO and GEO separately misses the synergies. The same content quality,
              E-E-A-T signals, and authority building that help you get cited in Google AI Overviews
              also help AI language models recognise your business as a trustworthy recommendation.
              We build an integrated strategy that addresses both simultaneously.
            </p>
            <ul className="space-y-3">
              {[
                "Shared E-E-A-T foundation — credentials and expertise signals that work across all AI platforms",
                "Schema markup layer — FAQPage, HowTo, LocalBusiness, Service, Person all implemented",
                "Content architecture — structured for both AI extraction (AEO) and AI training signals (GEO)",
                "Digital footprint building — review platforms, directories, and brand mentions that influence AI models",
                "Unified reporting — AEO citations, AI assistant mentions, and traditional rankings in one monthly report",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Link href="/answer-engine-optimisation/" className="block bg-brand-50 border border-brand-200 rounded-xl p-5 hover:border-brand-400 transition-colors">
                <h3 className="font-semibold text-brand-700 mb-1">Learn about AEO →</h3>
                <p className="text-sm text-gray-600">How we engineer Google AI Overview citations</p>
              </Link>
              <Link href="/generative-engine-optimisation/" className="block bg-brand-50 border border-brand-200 rounded-xl p-5 hover:border-brand-400 transition-colors">
                <h3 className="font-semibold text-brand-700 mb-1">Learn about GEO →</h3>
                <p className="text-sm text-gray-600">How we get your business mentioned by ChatGPT</p>
              </Link>
            </div>
          </div>

          {/* What we measure */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What we measure — because AI SEO without metrics is just theory
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AI SEO is newer than traditional SEO, which means measurement is still evolving.
              But &apos;we can&apos;t measure it&apos; is not an acceptable answer. Here&apos;s exactly what we track
              and report on monthly.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  category: "AEO metrics",
                  items: [
                    "AI Overview appearance rate for target queries",
                    "Citation frequency (how often your site is cited vs competitors)",
                    "AI Overview click-through traffic in Search Console",
                    "Schema markup health and validation",
                  ],
                },
                {
                  category: "GEO metrics",
                  items: [
                    "AI assistant response monitoring for target recommendation queries",
                    "Brand mention frequency across indexed sources",
                    "Digital footprint growth (new directory citations, mentions)",
                    "Referral traffic patterns indicating AI-driven discovery",
                  ],
                },
              ].map((col) => (
                <div key={col.category} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-3">{col.category}</h3>
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

          {/* Who this is for */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Who AI SEO is for
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AI SEO is high-impact for businesses where customers research before buying —
              and especially for businesses where recommendation queries are common.
              The highest-priority candidates:
            </p>
            <ul className="space-y-3">
              {[
                "Trade businesses and home services — 'best plumber/electrician/builder in [suburb]' is a classic AI recommendation query",
                "Healthcare and professional services — health queries heavily feature AI Overviews",
                "High-consideration purchases — solar, home renovation, legal, financial advice",
                "Local businesses where geography matters — AI local recommendations are growing fast",
                "Any business where a competitor showing up in AI answers before you is a real commercial risk",
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
        heading="Ready to build an AI search strategy?"
        subheading="Book a free consultation. We'll audit your current AI search visibility, show you where competitors are appearing in AI answers that you're missing, and outline an integrated AEO + GEO strategy for your business."
        ctaLabel="Book a free AI SEO consultation"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
