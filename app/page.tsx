import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { StatsStrip } from "@/components/sections/stats-strip";
import { IndustrySlider } from "@/components/sections/industry-slider";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CaseStudies } from "@/components/sections/case-studies";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildGraph, organizationSchema, localBusinessSchema,
  founderPersonSchema, websiteSchema, faqPageSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sydney SEO Agency for Tradies & Home Services | Darnell Media",
  description:
    "Sydney SEO agency specialising in organic growth for trade businesses and home services. AEO, GEO, Local SEO. No lock-in contracts. Book a free consultation.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sydney SEO Agency for Tradies & Home Services | Darnell Media",
    description:
      "Sydney SEO agency specialising in organic growth for trade businesses. AEO, GEO, Local SEO. No lock-in contracts.",
    images: [{ url: "/images/hero/home.webp", width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How much does SEO cost in Sydney?",
    a: "Local SEO retainers start from $1,800/month. Full SEO campaigns from $2,800/month. One-off audits from $1,200. All prices are AUD + GST. We scope campaigns to your goals — not to pad a retainer.",
  },
  {
    q: "How long before I see SEO results?",
    a: "For local SEO (suburbs, map pack), most clients see movement within 60-90 days. Competitive citywide keywords typically take 4-6 months. We'll give you a realistic timeline in the free audit — not a vague 6-12 months.",
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No lock-in contracts. Ever. We work on rolling monthly agreements. You can stop anytime. We'd rather earn your business month by month than lock you in.",
  },
  {
    q: "What industries do you specialise in?",
    a: "We specialise in trade businesses and home services: plumbers, electricians, builders, landscapers, solar installers, pest control, vets, and general tradies. Generic SEO doesn't work for trades — our strategies are purpose-built.",
  },
  {
    q: "What is AEO and GEO, and do I need it?",
    a: "AEO (Answer Engine Optimisation) gets you cited in Google's AI Overviews. GEO (Generative Engine Optimisation) gets you mentioned in ChatGPT and other AI assistants. AI is already eating 30%+ of clicks on informational searches. If you're not in those answers, your competitor is.",
  },
];

export default function HomePage() {
  const schema = buildGraph(
    websiteSchema(),
    organizationSchema(),
    localBusinessSchema(),
    founderPersonSchema(),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />

      <Hero
        headline="Sydney SEO that books<br />jobs, not just rankings."
        subheadline="We help Sydney trade businesses and home services rank on Google, appear in AI search, and convert that traffic into real enquiries. No fluff. No lock-in. Just results."
        bullets={[
          "Specialised in tradies, home services & local business",
          "AEO + GEO: ranked in Google AI Overviews and ChatGPT",
          "Average 90 days to first-page results",
          "No lock-in contracts — results earn our renewal",
        ]}
        heroImage="/images/hero/home.webp"
        heroAlt="Darnell Media SEO Agency — Northern Beaches Sydney"
        secondaryLabel="View our results"
        secondaryHref="#results"
      />

      <StatsStrip />

      <IndustrySlider />

      <ServicesGrid />

      <div id="results">
        <CaseStudies />
      </div>

      <HowItWorks />

      <CtaSection />

      <FaqSection faqs={FAQS} />
    </>
  );
}
