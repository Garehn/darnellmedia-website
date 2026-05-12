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
  title: "SEO for Builders Sydney — Attract High-Value Projects | Darnell Media",
  description:
    "SEO for builders in Sydney. Attract renovation and new build enquiries from clients who research for months before calling. 3x qualified project enquiries in 6 months. No lock-in contracts.",
  alternates: { canonical: "/seo-for-builders/" },
  openGraph: {
    title: "SEO for Builders Sydney — Attract High-Value Projects | Darnell Media",
    description:
      "SEO for Sydney builders. Attract high-value renovation and new build enquiries. Not price shoppers. 3x qualified project enquiries in 6 months.",
    url: `${SITE_URL}/seo-for-builders/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-for-builders.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How is SEO different for builders compared to other trades?",
    a: "Builder SEO has a much longer research cycle. Someone booking a plumber decides in 24 hours. Someone commissioning a renovation or new build researches for 2–6 months before making contact. Your SEO strategy needs to be in front of them throughout that entire research journey — from initial inspiration ('home extension ideas Northern Beaches') through to intent ('design and construct builder Dee Why quotes'). Generic tradie SEO ignores the research phase entirely.",
  },
  {
    q: "What is a 'design and construct' keyword strategy?",
    a: "Design-and-construct searches attract clients who want a single builder to handle both the design and build phases — typically higher-value projects with less price sensitivity. Terms like 'design and construct builder [suburb]', 'turnkey renovation [suburb]', and 'project home builder Northern Beaches' attract clients who are already pre-sold on the concept. We target these alongside traditional 'builder' keywords to attract better-qualified enquiries.",
  },
  {
    q: "How do you use past projects for SEO?",
    a: "Project case studies are among the most powerful SEO assets a builder can have. A well-structured project page (before/after photos, location, scope, challenges solved, client outcome) targets long-tail searches like 'home extension Manly before after', builds topical authority in your core services, and provides the social proof that turns researchers into enquiries. We structure and optimise your existing project portfolio and help you document future jobs for maximum SEO value.",
  },
  {
    q: "Do I need separate pages for each council area I build in?",
    a: "For builders with a large service area, yes. A council-area page (e.g. 'builder Northern Beaches Council' or 'Ku-ring-gai home extensions') targets a cluster of related suburbs in a single authoritative page. Combined with suburb-specific landing pages for your primary target areas, this gives you coverage across the full geographic range without creating hundreds of thin pages. We map the right page architecture for your specific service footprint.",
  },
];

export default function SeoForBuildersPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO for Builders Sydney — Attract High-Value Projects",
      description:
        "SEO strategy for Sydney builders. Buyer intent stages, project portfolio SEO, suburb and council area targeting, design-and-construct keywords.",
      url: `${SITE_URL}/seo-for-builders/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-for-builders.webp`,
    }),
    serviceSchema({
      name: "SEO for Builders Sydney",
      description:
        "Specialist SEO for Sydney builders. Buyer intent keyword strategy, project portfolio optimisation, suburb and council area targeting, and design-and-construct keyword campaigns.",
      url: `${SITE_URL}/seo-for-builders/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO for builders.<br />Attract high-value projects, not price shoppers."
        subheadline="Renovation and new build clients spend months researching before they call. We make sure you're in their research from day one."
        image="/images/hero/seo-for-builders.webp"
        imageAlt="SEO for Builders Sydney — Darnell Media"
        ctaLabel="Book your free builder SEO audit"
        ctaHref="/book/"
        resultBadge="3x qualified project enquiries within 6 months"
        breadcrumbs={[
          { label: "SEO for Tradies", href: "/seo-for-tradies/" },
          { label: "SEO for Builders" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Buyer intent stages */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              The builder buyer journey — and where SEO fits at every stage
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A client commissioning a $300,000 home extension doesn&apos;t Google &apos;builder Sydney&apos; and
              call the first result. They research for months. They look at portfolios, read about
              council approvals, compare design-and-construct vs owner-builder, and ask their
              neighbours who built their extension. Your SEO strategy needs to intercept them at
              every stage of that journey — not just at the end when they&apos;re ready to get quotes.
            </p>
            <div className="space-y-4">
              {[
                {
                  stage: "Stage 1: Inspiration",
                  keywords: "'Home extension ideas [suburb]', 'second storey addition Northern Beaches'",
                  content: "Visual project galleries, before/after case studies, suburb-specific renovation guides",
                },
                {
                  stage: "Stage 2: Education",
                  keywords: "'How much does a home extension cost Sydney', 'DA vs CDC home extension NSW'",
                  content: "Cost guides, council approval explainers, process walkthrough content",
                },
                {
                  stage: "Stage 3: Shortlisting",
                  keywords: "'Best builder Northern Beaches', 'home extension builder Manly reviews'",
                  content: "Review management, credentials pages, association memberships, warranty info",
                },
                {
                  stage: "Stage 4: Intent",
                  keywords: "'Home extension builder [suburb] quote', 'design and construct builder Dee Why'",
                  content: "Service + suburb landing pages with clear CTAs and response time commitments",
                },
              ].map((item) => (
                <div key={item.stage} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex gap-3">
                    <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold text-ink">{item.stage}: </span>
                      <span className="text-sm text-brand-600 italic">{item.keywords}</span>
                      <p className="text-sm text-gray-600 mt-1">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project portfolio SEO */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Project portfolio SEO — your best work, finally findable
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most builders have a portfolio page with photos and no text. It looks nice. It ranks
              for nothing. A properly structured project case study page tells a story (client brief,
              challenges, solutions, outcome), includes the suburb prominently, targets long-tail
              searches, and provides the social proof that turns a researcher into a lead.
            </p>
            <ul className="space-y-3">
              {[
                "Dedicated page per project — not a gallery dump",
                "Project title structured for search: 'Home Extension Manly — 85m² Second Storey Addition'",
                "Before/after photography with alt text and file names optimised",
                "Project details: suburb, council, scope, timeline, materials",
                "Client testimonial embedded in schema markup for review stars in search results",
                "Internal links to relevant service pages and suburb pages",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Suburb + council area targeting */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Suburb and council area targeting — rank where the projects are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              High-value renovation markets in Sydney cluster geographically. The Northern Beaches,
              North Shore, and Eastern Suburbs have concentrations of established homes where
              homeowners are investing in extensions, knockdown rebuilds, and full renovations.
              We build suburb-specific landing pages and council-area pages that put you in front
              of searchers in exactly these areas.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Suburb landing pages",
                  points: [
                    "Target 'builder [suburb]' and 'renovation builder [suburb]'",
                    "Unique content referencing local council requirements",
                    "Local project examples from that suburb where possible",
                    "Suburb-specific schema markup",
                  ],
                },
                {
                  title: "Council area pages",
                  points: [
                    "'Builder Northern Beaches Council' — covers 15+ suburbs in one authoritative page",
                    "DA process guidance specific to that council",
                    "Heritage overlay and bushfire zone information where relevant",
                    "Internal links to individual suburb pages",
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

          {/* Design-and-construct keywords */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Design-and-construct keywords — attract clients who aren&apos;t price shopping
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Design-and-construct clients are pre-sold on the one-builder concept. They&apos;re not
              getting three quotes — they&apos;re looking for the right single firm to trust. This search
              intent is categorically different from &apos;cheapest builder Sydney&apos; and converts at a
              significantly higher rate into substantial projects.
            </p>
            <ul className="space-y-3">
              {[
                "'Design and construct builder [suburb/area]' — low competition, high intent",
                "'Turnkey home renovation [suburb]' — targets clients who want zero management overhead",
                "'Knockdown rebuild Northern Beaches' — high-value projects with long research cycles",
                "'Custom home builder Northern Beaches' — new build clients researching premium builders",
                "'Project manager builder [suburb]' — clients who understand the D&C value proposition",
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
        heading="Ready to attract the kind of projects you actually want?"
        subheading="Book a free 30-minute audit. We'll show you where your ideal clients are searching, what content is needed to intercept them at each research stage, and what your competitors are ranking for that you're not."
        ctaLabel="Book your free builder SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
