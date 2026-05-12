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
  title: "Answer Engine Optimisation (AEO) Sydney | Darnell Media",
  description:
    "AEO gets your business cited in Google AI Overviews. 30%+ of informational searches now show AI answers. We get you in them. Sydney AEO agency. No lock-in contracts.",
  alternates: { canonical: "/answer-engine-optimisation/" },
  openGraph: {
    title: "Answer Engine Optimisation (AEO) Sydney | Darnell Media",
    description:
      "AEO gets your business cited in Google AI Overviews before the search results. 30%+ of searches now show AI answers. Sydney AEO agency.",
    url: `${SITE_URL}/answer-engine-optimisation/`,
    images: [{ url: `${SITE_URL}/images/hero/answer-engine-optimisation.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "What is Answer Engine Optimisation (AEO)?",
    a: "AEO is the practice of structuring your website content so that Google's AI systems — particularly AI Overviews — extract and cite your content when answering search queries. Where traditional SEO gets you a blue link in the organic results, AEO gets you cited in the AI-generated answer that appears above those links. AI Overviews now appear on 30%+ of informational searches, making AEO a critical component of any modern search strategy.",
  },
  {
    q: "How is AEO different from traditional SEO?",
    a: "Traditional SEO optimises for ranking in the ten blue links. AEO optimises for being cited in the AI answer above those links. They're complementary — strong traditional SEO (authority, trustworthiness, quality content) also supports AEO. But AEO requires additional work: specific content structures, FAQ and HowTo schema markup, clear concise answers to common questions, and topical authority signals that AI models use to decide which sources to trust.",
  },
  {
    q: "How long does it take to get cited in a Google AI Overview?",
    a: "For well-optimised content on a credible site, we've seen AI Overview citations appear within 4–8 weeks of publishing. For newer or lower-authority sites, it can take longer as Google builds trust in the domain. AEO is faster than traditional SEO for competitive terms because you're not fighting for a fixed number of blue links — you're positioning for citation in an AI answer that may reference multiple sources.",
  },
  {
    q: "Can AEO work for local businesses, not just informational websites?",
    a: "Absolutely — and this is where Sydney local businesses have a significant opportunity. Local AI Overviews for queries like 'best plumber Northern Beaches' or 'vet near me Manly' increasingly cite specific local businesses. We achieved a 62% increase in new patient bookings for a Manly vet clinic after securing consistent AI Overview citations for local vet searches. Any local business can benefit from AEO — it's not just for content publishers.",
  },
  {
    q: "What schema markup is needed for AEO?",
    a: "The most impactful schema types for AEO include: FAQPage (marks up question-answer pairs that AI models readily cite), HowTo (step-by-step content that AI answers frequently include), LocalBusiness with all fields complete, Person schema for expertise signals, and Service schema for service-specific queries. We implement all relevant schema types as part of every AEO engagement and keep them updated as Google's requirements evolve.",
  },
];

export default function AnswerEngineOptimisationPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "Answer Engine Optimisation (AEO) Sydney",
      description:
        "AEO gets your business cited in Google AI Overviews before the search results. 30%+ of searches now show AI answers — if you're not cited, your competitors are intercepting your customers.",
      url: `${SITE_URL}/answer-engine-optimisation/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/answer-engine-optimisation.webp`,
    }),
    serviceSchema({
      name: "Answer Engine Optimisation (AEO) Sydney",
      description:
        "Sydney AEO agency. We engineer Google AI Overview citations for local businesses through schema markup, E-E-A-T credentialling, and content structured for AI extraction.",
      url: `${SITE_URL}/answer-engine-optimisation/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="Answer Engine Optimisation.<br />Get cited before the search results."
        subheadline="Google's AI Overviews now appear above organic results on 30%+ of searches. If your competitor is cited there and you're not, they're intercepting your customers before they even scroll."
        image="/images/hero/answer-engine-optimisation.webp"
        imageAlt="Answer Engine Optimisation AEO Sydney — Darnell Media"
        ctaLabel="Book a free AEO consultation"
        ctaHref="/book/"
        resultBadge="62% more bookings for a Sydney vet after securing AI Overview citation"
        breadcrumbs={[{ label: "AEO" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* What AEO is */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What is AEO? (The plain-English version)
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When you search Google these days, you&apos;ve probably noticed a blue panel at the top
              of the results with an AI-generated answer. That&apos;s a Google AI Overview. It pulls
              information from websites it trusts and synthesises an answer — complete with source
              citations — before you even see the traditional search results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              AEO is the practice of making your website the one that gets cited in those answers.
              It&apos;s not about gaming the system — it&apos;s about structuring your content in a way that
              AI can understand, trust, and cite accurately. When it works, your brand appears at
              the very top of a Google search, ahead of every organic result and paid ad.
            </p>
            <ul className="space-y-3">
              {[
                "AI Overviews appear on 30%+ of informational search queries in 2025",
                "They appear above all organic results — visibility before the first blue link",
                "Cited sources get brand mentions, clicks, and trust transfer from the AI",
                "AEO works alongside SEO — they're complementary, not competing strategies",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Why AI Overviews matter now */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Why AI Overviews matter right now — and why most businesses aren&apos;t ready
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Google AI Overviews launched broadly in 2024 and have expanded rapidly. They now
              appear for local business queries, health questions, service comparisons, cost queries,
              and how-to searches — the exact categories that drive business enquiries for most
              Sydney businesses. The catch: only a small number of websites get cited in any given
              AI Overview, and those positions are being established now.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Who gets cited",
                  points: [
                    "Sites with clear, accurate answers to specific questions",
                    "Businesses with strong E-E-A-T signals (expertise, authority, trust)",
                    "Pages with proper schema markup (FAQPage, HowTo, LocalBusiness)",
                    "Domains Google already trusts and ranks well",
                  ],
                },
                {
                  title: "Who gets skipped",
                  points: [
                    "Sites with vague, unstructured content",
                    "Businesses without credentials or expertise signals",
                    "Pages with missing or incorrect schema markup",
                    "Domains with trust issues (thin content, penalties, spam links)",
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

          {/* How we engineer citations */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              How we engineer AI Overview citations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Getting cited in AI Overviews isn&apos;t luck — it&apos;s the result of deliberate content
              engineering, technical implementation, and authority building. Here&apos;s exactly what we do.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Schema markup implementation",
                  body: "FAQPage, HowTo, LocalBusiness, Service, and Person schema types are implemented across your site. This tells Google exactly what your content answers, who wrote it, and why they should trust it. Without schema, AI models have to guess — and they often guess wrong.",
                },
                {
                  title: "E-E-A-T credentialling",
                  body: "Google's AI systems heavily weight Experience, Expertise, Authoritativeness, and Trustworthiness. We build explicit E-E-A-T signals: author profiles with credentials, licence and registration schema markup, industry association references, and editorial standards documentation.",
                },
                {
                  title: "Content structure engineering",
                  body: "AI Overviews prefer content structured as clear questions followed by concise, accurate answers. We audit and restructure your existing content, write new FAQ and explainer content, and ensure every page has the content architecture that AI models extract most readily.",
                },
                {
                  title: "Citation tracking and reporting",
                  body: "We monitor which queries show AI Overviews for your target keywords, track whether your content is being cited, and report on citation changes monthly. AEO is an evolving landscape — we stay ahead of Google's changes so your citations stay stable.",
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

          {/* AEO vs traditional SEO */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              AEO vs traditional SEO — what&apos;s different, what&apos;s the same
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AEO and SEO aren&apos;t competing strategies — AEO is an extension of SEO for the AI
              search era. The fundamentals of good SEO (quality content, technical health, strong
              backlinks, E-E-A-T) also support AEO. But AEO requires additional layers that
              traditional SEO doesn&apos;t address.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Shared foundations", items: ["Quality content", "Technical SEO health", "Backlink authority", "Site speed"] },
                { label: "AEO extras", items: ["FAQ/HowTo schema", "Content structured as Q&A", "Citation tracking", "AI trust signals"] },
                { label: "AEO-specific focus", items: ["AI Overview monitoring", "Voice search alignment", "Structured data depth", "E-E-A-T credentialling"] },
              ].map((col) => (
                <div key={col.label} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-3 text-sm">{col.label}</h3>
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
        heading="Ready to get cited before the search results?"
        subheading="Book a free AEO consultation. We'll audit your current AI Overview visibility, identify the citation opportunities for your business, and give you a clear picture of what an AEO strategy looks like."
        ctaLabel="Book a free AEO consultation"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
