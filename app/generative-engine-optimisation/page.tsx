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
  title: "Generative Engine Optimisation (GEO) Sydney | Darnell Media",
  description:
    "GEO gets your business mentioned in ChatGPT, Claude, and other AI assistants. Sydney's first GEO agency for trade businesses and local brands. No lock-in contracts.",
  alternates: { canonical: "/generative-engine-optimisation/" },
  openGraph: {
    title: "Generative Engine Optimisation (GEO) Sydney | Darnell Media",
    description:
      "GEO gets your business mentioned when AI assistants like ChatGPT answer your customers' questions. Sydney's first GEO agency for trade businesses.",
    url: `${SITE_URL}/generative-engine-optimisation/`,
    images: [{ url: `${SITE_URL}/images/hero/generative-engine-optimisation.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "What is Generative Engine Optimisation (GEO)?",
    a: "GEO is the practice of optimising your business's online presence so that AI language models — ChatGPT, Claude, Gemini, Perplexity — mention your business when users ask them questions relevant to your industry. Where SEO gets you visible on Google, GEO gets you named by AI assistants. As more people turn to AI for recommendations ('who's the best plumber in Manly?'), GEO determines whether you're the one they name.",
  },
  {
    q: "How is GEO different from SEO and AEO?",
    a: "SEO optimises for traditional search engine rankings (blue links on Google). AEO optimises for Google's own AI Overview feature. GEO is broader — it optimises for how AI language models across all platforms perceive and represent your business. These models are trained on internet data and updated periodically, so GEO involves shaping the digital footprint your business has across the web — not just your own website.",
  },
  {
    q: "How do AI models decide which local businesses to recommend?",
    a: "AI models learn from publicly available text data — websites, review platforms, industry directories, news mentions, forum discussions, and social media. A business that appears frequently, consistently, and positively across many authoritative sources will be recommended more often than one with minimal online presence. GEO involves building and amplifying exactly this kind of distributed digital footprint.",
  },
  {
    q: "Can GEO work for a small trade business?",
    a: "Yes — and small trade businesses in specific local markets have a significant advantage. An AI model asked 'who is the best plumber on the Northern Beaches?' doesn't need to sort through thousands of results. If you're the most prominently and consistently mentioned plumber across Northern Beaches review sites, directories, local publications, and community forums, AI models will recommend you. GEO for local businesses is about depth of local presence, not scale.",
  },
  {
    q: "How do you measure GEO results?",
    a: "GEO measurement is evolving. We track: AI mention frequency (how often your business is named when relevant queries are submitted to major AI systems), sentiment of those mentions, which digital assets AI models cite when mentioning your business, and referral traffic patterns that indicate AI-driven discovery. It's less deterministic than keyword ranking — but the trend lines are clear and measurable.",
  },
];

export default function GenerativeEngineOptimisationPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "Generative Engine Optimisation (GEO) Sydney",
      description:
        "GEO gets your business mentioned in ChatGPT, Claude, and other AI assistants. Sydney's first GEO agency for trade businesses and local brands.",
      url: `${SITE_URL}/generative-engine-optimisation/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/generative-engine-optimisation.webp`,
    }),
    serviceSchema({
      name: "Generative Engine Optimisation (GEO) Sydney",
      description:
        "Sydney GEO agency. We optimise your business to be recommended by ChatGPT, Claude, Gemini, and Perplexity when AI assistants answer queries relevant to your industry.",
      url: `${SITE_URL}/generative-engine-optimisation/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="Generative Engine Optimisation.<br />Get mentioned when AI answers your customer."
        subheadline="When someone asks ChatGPT 'who is the best plumber in Sydney Northern Beaches', will it name your business? GEO engineering makes sure it does."
        image="/images/hero/generative-engine-optimisation.webp"
        imageAlt="Generative Engine Optimisation GEO Sydney — Darnell Media"
        ctaLabel="Book a free GEO strategy call"
        ctaHref="/book/"
        resultBadge="First Sydney agency specialising in GEO for trade businesses"
        breadcrumbs={[{ label: "GEO" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* What GEO is vs SEO vs AEO */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              GEO vs SEO vs AEO — what&apos;s the difference and do you need all three?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Search is fragmenting. In 2024, a meaningful share of informational searches moved
              from Google to AI tools like ChatGPT and Perplexity. Each channel requires a different
              type of optimisation — and ignoring any of them means ceding ground to competitors.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  label: "SEO",
                  where: "Google/Bing organic results",
                  how: "Rank in the 10 blue links",
                  foundation: "Keywords, backlinks, technical health",
                },
                {
                  label: "AEO",
                  where: "Google AI Overviews",
                  how: "Get cited in AI answers on Google",
                  foundation: "Schema markup, E-E-A-T, Q&A structure",
                },
                {
                  label: "GEO",
                  where: "ChatGPT, Claude, Gemini, Perplexity",
                  how: "Get mentioned by AI assistants",
                  foundation: "Digital footprint, brand mentions, authority",
                },
              ].map((col) => (
                <div key={col.label} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-bold text-ink text-lg mb-2">{col.label}</h3>
                  <p className="text-xs text-brand-600 font-medium mb-1">{col.where}</p>
                  <p className="text-sm font-semibold text-gray-700 mb-2">{col.how}</p>
                  <p className="text-sm text-gray-600">{col.foundation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How AI models decide who to recommend */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              How AI models decide who to recommend — and what that means for your business
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              AI language models are trained on vast amounts of text from the web. They develop
              associations between businesses, their reputations, and the services they provide
              based on patterns in that data. A business that appears frequently and positively
              across authoritative sources — Google reviews, industry directories, local news,
              professional associations, customer testimonials — gets encoded as a trusted entity.
              When someone asks the AI for a recommendation, it surfaces the businesses it &apos;knows&apos;
              most reliably.
            </p>
            <ul className="space-y-3">
              {[
                "Review volume and sentiment across Google, Facebook, Yelp, and industry-specific platforms",
                "Mentions in authoritative publications (local news, industry trade sites, .gov and .edu references)",
                "Consistency of business information (name, address, phone) across all online sources",
                "Presence in industry directories (Master Builders, NECA, HIA, relevant trade associations)",
                "Website content that clearly, accurately describes services and expertise",
                "Social media presence showing real customer interactions and project outcomes",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Content and authority signals */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              The content and authority signals that drive AI mentions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              GEO is fundamentally about building a consistent, authoritative, widely-distributed
              digital presence. The more places on the internet that talk about your business
              positively and accurately, the more likely AI models are to recommend you.
              Here&apos;s how we build that presence systematically.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Digital footprint expansion",
                  points: [
                    "Directory citations on every relevant Australian platform",
                    "Industry association profile pages (NECA, MBA, AVA, etc.)",
                    "Google Knowledge Panel verification and optimisation",
                    "Wikipedia or Wikidata entity creation where eligible",
                  ],
                },
                {
                  title: "Brand mention building",
                  points: [
                    "Digital PR — getting named in local and trade publications",
                    "Expert commentary placements in relevant online media",
                    "Community forum participation (neighbourhood Facebook groups, Nextdoor)",
                    "Partner and supplier cross-mentions",
                  ],
                },
                {
                  title: "Content authority signals",
                  points: [
                    "Long-form expert content that demonstrates deep knowledge",
                    "Data-led content (original stats, surveys, industry data)",
                    "Unique insights that get referenced and cited by others",
                    "Author entity pages with credentials and publication history",
                  ],
                },
                {
                  title: "Review ecosystem management",
                  points: [
                    "Review generation across multiple platforms (not just Google)",
                    "Consistent response to all reviews — signals active, engaged business",
                    "Review content analysis to identify service gap perceptions",
                    "Platform-specific review strategies (Yelp, hipages, Google, Facebook)",
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

          {/* GEO for local businesses */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              GEO for local businesses — the opportunity is bigger than you think
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              National brands have large marketing budgets and established digital footprints.
              But for local searches — &apos;best electrician Manly&apos;, &apos;landscaper Northern Beaches&apos;,
              &apos;vet Brookvale&apos; — the competitive field is much smaller. An AI asked for a local
              recommendation doesn&apos;t need to choose between 10,000 businesses. It needs to choose
              between the handful of credible local options it can find data on.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is why local businesses that invest in GEO now have a disproportionate advantage.
              The local competition for AI mentions is thin, the category is moving fast, and the
              businesses building AI authority today will dominate AI recommendations in their markets
              for years.
            </p>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to get your business mentioned by AI?"
        subheading="Book a free GEO strategy call. We'll audit your current AI visibility, show you where your competitors are being mentioned and you're not, and outline a realistic strategy for building AI authority in your local market."
        ctaLabel="Book a free GEO strategy call"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
