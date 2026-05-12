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
  title: "SEO Services Sydney — What We Actually Do | Darnell Media",
  description:
    "Full-service SEO for Sydney businesses: technical SEO, content strategy, local SEO, AEO, link building. Book a free strategy call.",
  alternates: { canonical: "/seo-services-sydney/" },
  openGraph: {
    title: "SEO Services Sydney — What We Actually Do | Darnell Media",
    description:
      "Full-service SEO for Sydney businesses: technical SEO, content strategy, local SEO, AEO, link building. Book a free strategy call.",
    url: `${SITE_URL}/seo-services-sydney/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-services-sydney.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "Do I need all these SEO services, or can I start with just one?",
    a: "Most clients start with an audit, which tells us exactly where the biggest opportunities are. From there, we prioritise the services that will move the needle fastest for your specific situation — that might be technical SEO first, or it might be local SEO and GBP optimisation. We don't sell you services you don't need.",
  },
  {
    q: "How is AEO different from traditional SEO?",
    a: "Traditional SEO targets the 10 blue links. AEO (Answer Engine Optimisation) targets AI-generated answers — Google's AI Overviews, ChatGPT, Perplexity, and similar tools. When someone asks an AI assistant 'who's the best plumber in Manly', AEO is what gets your business cited. We offer AEO as a standalone add-on from $800/month.",
  },
  {
    q: "How long does technical SEO take to complete?",
    a: "A comprehensive technical audit and implementation typically takes 4–6 weeks depending on the size of your site. Critical issues (broken pages, crawl blocks, speed problems) are fixed first. Structured data and advanced optimisations follow. You'll see the audit report within 7 days of onboarding.",
  },
  {
    q: "Do you write the content, or do I need to provide it?",
    a: "We write everything. Our content strategy involves researching the keywords your customers use, mapping those to specific pages on your site, and writing content that's accurate to your trade and optimised to rank. You review and approve before anything goes live.",
  },
];

export default function SeoServicesSydneyPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO Services Sydney — What We Actually Do",
      description:
        "Full-service SEO for Sydney businesses: technical SEO, content strategy, local SEO, AEO, link building.",
      url: `${SITE_URL}/seo-services-sydney/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-services-sydney.webp`,
    }),
    serviceSchema({
      name: "SEO Services Sydney",
      description:
        "Full-service SEO for Sydney trade businesses and home services. Technical SEO, content strategy, local SEO, AEO, and link building.",
      url: `${SITE_URL}/seo-services-sydney/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO services that move<br />the needle in Sydney."
        subheadline="We don't sell retainers. We sell results. Here's exactly what we do and why it works for Sydney trade businesses."
        image="/images/hero/seo-services-sydney.webp"
        imageAlt="SEO Services Sydney — Darnell Media"
        ctaLabel="Book a free strategy call"
        ctaHref="/book/"
        resultBadge="7-day audit turnaround · Clear 90-day roadmap"
        breadcrumbs={[{ label: "SEO Services Sydney" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Technical SEO */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Technical SEO
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Technical SEO is the foundation. If Google struggles to crawl, index, or understand your site, no amount of content or links will save you. We conduct a 100+ point technical audit on every new client and prioritise fixes by ranking impact.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Core Web Vitals",
                  body: "LCP, INP, and CLS scores directly affect your rankings on mobile and desktop. We identify and fix the specific elements slowing your page down — lazy-loaded images, render-blocking scripts, layout shifts from ads or embeds.",
                },
                {
                  title: "Crawl optimisation",
                  body: "We audit your crawl budget, fix broken internal links, consolidate duplicate content with canonical tags, and ensure your XML sitemap only points Google to pages you want indexed.",
                },
                {
                  title: "Structured data (schema markup)",
                  body: "LocalBusiness, Service, FAQPage, and Review schema help Google understand what your business does and where. This increases your chances of appearing in rich results — star ratings, FAQ dropdowns, and map integrations.",
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

          {/* Content strategy */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Content strategy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most agencies produce blog posts and call it content marketing. We build a keyword-mapped page architecture — every page targets a specific commercial intent, in a specific location, for a specific audience.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Keyword architecture",
                  body: "We map your entire service offering against the searches your customers make at every stage of the buying journey — from emergency intent ('plumber near me now') to research intent ('how much does repiping cost in Sydney').",
                },
                {
                  title: "Service + location pages",
                  body: "Suburb-level landing pages are one of the highest-ROI tactics for Sydney trades. A dedicated page for 'plumber Manly' converts better than a generic services page and ranks for terms your home page never will.",
                },
                {
                  title: "E-E-A-T content",
                  body: "Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) framework rewards content written by people with real-world experience. We work with your team to produce content that demonstrates credibility — not AI-generated filler.",
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

          {/* Local SEO */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Local SEO
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For Sydney trade businesses, the map pack — those three listings that appear above the organic results — drives more phone calls than the organic results below them. Local SEO is how you get in and stay there.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Google Business Profile (GBP) optimisation",
                  body: "Your GBP is your most valuable local SEO asset. We optimise every field — categories, services, photos, opening hours, service areas — and implement a consistent posting and Q&A strategy.",
                },
                {
                  title: "Citation building",
                  body: "Consistent NAP (Name, Address, Phone) data across Australian business directories (True Local, Hotfrog, hipages, ServiceSeeking) reinforces your local relevance signals. We build and clean citations systematically.",
                },
                {
                  title: "Review system",
                  body: "Businesses with 50+ reviews and a 4.5+ rating dominate the map pack. We set up automated review request sequences that turn every completed job into a Google review opportunity.",
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

          {/* AEO & GEO */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              AEO &amp; GEO
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AI Overviews now appear at the top of roughly 15% of Australian Google searches. ChatGPT, Perplexity, and other AI assistants are increasingly the first stop for service recommendations. AEO (Answer Engine Optimisation) and GEO (Generative Engine Optimisation) position your business to be cited in these AI-generated responses.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "AI Overview citations",
                  body: "Google's AI Overviews pull answers from authoritative pages. We structure your content with clear question-and-answer formatting, proper schema, and authoritative backlinks that make Google confident enough to cite you.",
                },
                {
                  title: "ChatGPT & Perplexity mentions",
                  body: "Large language models are trained on web content and tend to recommend brands that appear frequently in authoritative sources. We build the digital footprint — consistent mentions in industry publications, review platforms, and high-authority directories — that gets you cited.",
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

        </div>
      </section>

      <CtaSection
        heading="Not sure which services you need?"
        subheading="Book a free strategy call. We'll review your site, identify your biggest opportunities, and recommend only the services that make sense for your goals and budget."
        ctaLabel="Book a free strategy call"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
