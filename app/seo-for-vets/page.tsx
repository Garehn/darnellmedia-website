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
  title: "SEO for Vets Sydney — More Bookings Without Paid Ads | Darnell Media",
  description:
    "SEO for veterinary clinics in Sydney. Rank for local vet searches, get cited in AI Overviews, and fill your appointment schedule without paying for ads. No lock-in contracts.",
  alternates: { canonical: "/seo-for-vets/" },
  openGraph: {
    title: "SEO for Vets Sydney — More Bookings Without Paid Ads | Darnell Media",
    description:
      "SEO for veterinary clinics in Sydney. Local search optimisation, E-E-A-T credentialling, AI Overview citations. No lock-in contracts.",
    url: `${SITE_URL}/seo-for-vets/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-for-vets.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How does SEO help a vet clinic get more patients?",
    a: "Pet owners searching 'vet near me', 'cat vet Manly', or 'emergency vet northern beaches' are ready to book. Ranking in the map pack and top organic results for these searches drives a steady stream of new patient enquiries — without the ongoing cost of Google Ads. For a vet clinic with 20+ appointment slots per day, even a 10% increase in organic bookings delivers significant monthly revenue.",
  },
  {
    q: "What is an AI Overview citation and why does it matter for a vet?",
    a: "Google's AI Overviews appear above organic results for health and service queries, including searches like 'best vet in [suburb]' or 'what to do if my dog eats chocolate'. When your clinic is cited in an AI Overview, you get visibility before the traditional search results — meaning pet owners see your name before they see your competitors. We achieved a 62% increase in new patient bookings for a Manly clinic after securing consistent AI Overview citations.",
  },
  {
    q: "Does E-E-A-T matter more for vet clinics than other businesses?",
    a: "Significantly more. Google classifies health-related queries as 'Your Money or Your Life' (YMYL) content — meaning the quality and trustworthiness standards are much higher. For vet clinics, this means your vets' credentials, professional registrations (Veterinary Practitioners Board of NSW), and clinical expertise need to be explicitly demonstrated on your website and in structured data. Pages without this credentialling lose ground to competitors who have it.",
  },
  {
    q: "How do you handle review management for vet clinics?",
    a: "We set up a post-appointment review request system — typically a text message or email sent automatically after each consultation. Most satisfied pet owners are happy to leave a review; they just need to be asked at the right moment. More recent, high-quality Google reviews improve both your map pack ranking and your AI Overview citation probability. We also monitor and flag negative reviews that need a response.",
  },
];

export default function SeoForVetsPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO for Vets Sydney — More Bookings Without Paid Ads",
      description:
        "SEO strategy for Sydney vet clinics. Local search optimisation, E-E-A-T credentialling, AI Overview citations, and review management.",
      url: `${SITE_URL}/seo-for-vets/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-for-vets.webp`,
    }),
    serviceSchema({
      name: "SEO for Vets Sydney",
      description:
        "Specialist SEO for Sydney veterinary clinics. Local search optimisation, vet licence schema markup, AI Overview citation engineering, and review management.",
      url: `${SITE_URL}/seo-for-vets/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO for vets.<br />Fill your schedule without paying for ads."
        subheadline="Pet owners search for vets the same way they search for tradies — local, urgent, suburb-specific. We make sure you're the first clinic they find."
        image="/images/hero/seo-for-vets.webp"
        imageAlt="SEO for Vets Sydney — Darnell Media"
        ctaLabel="Book your free vet SEO audit"
        ctaHref="/book/"
        resultBadge="+62% new patient bookings via AI Overview citation (Manly clinic)"
        breadcrumbs={[
          { label: "SEO for Tradies", href: "/seo-for-tradies/" },
          { label: "SEO for Vets" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Local vet search patterns */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              How pet owners search for vets — and what that means for your clinic
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Vet searches break into two categories that need different SEO strategies: routine
              appointment searches and emergency searches. Both are high-intent — pet owners are
              ready to book. But the keywords, the urgency, and the conversion path differ significantly.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Routine appointment searches",
                  points: [
                    "'Vet [suburb]' — proximity-based, map pack dominant",
                    "'Cat vet Brookvale', 'dog vaccinations Manly'",
                    "'Vet open Saturday Northern Beaches'",
                    "Review count and rating heavily influence clicks",
                  ],
                },
                {
                  title: "Emergency searches",
                  points: [
                    "'Emergency vet near me' — map pack with open hours critical",
                    "'Emergency vet Northern Beaches 24 hours'",
                    "'My dog ate [something] — what to do' — AI Overview targets",
                    "Click-to-call and fast mobile load essential",
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

          {/* E-E-A-T for veterinary */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              E-E-A-T for vet clinics — why credentials win rankings
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Google classifies veterinary content as &apos;Your Money or Your Life&apos; (YMYL) — the same
              category as medical, financial, and legal content. This means quality and trustworthiness
              standards are significantly higher than for, say, a tradie. To rank well for health-adjacent
              vet searches, your website and individual vets need to demonstrate verifiable credentials.
            </p>
            <ul className="space-y-3">
              {[
                "Vet registration numbers (Veterinary Practitioners Board of NSW) in schema markup",
                "Individual vet author pages with qualifications and experience listed",
                "Clinical content written or reviewed by registered veterinarians",
                "Professional association memberships (AVA) referenced in structured data",
                "Practice accreditation displayed with schema markup where applicable",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* AI Overviews */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              AI Overviews — the new battleground for vet visibility
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Google AI Overviews now appear on a significant share of health-related searches —
              including pet health queries like &apos;signs my dog has parvo&apos;, &apos;cat not eating what to do&apos;,
              and &apos;best vet in [suburb]&apos;. These AI answers appear above the organic results. If your
              clinic is cited in those answers, you get clicks before anyone even sees the traditional
              search results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We achieved a +62% increase in new patient bookings for a Manly vet clinic by engineering
              consistent AI Overview citations for local vet searches in the Northern Beaches area.
              The strategy involved structured content, specific schema types, and building the clinic&apos;s
              topical authority on pet health topics relevant to local pet owners.
            </p>
            <ul className="space-y-3">
              {[
                "Content structured for AI citation (clear answers to specific questions)",
                "FAQ schema and HowTo schema on relevant clinical pages",
                "Topical authority building through pet health content",
                "Citation tracking — we monitor which AI Overviews reference your clinic",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Review management */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Review management — the ranking signal most clinics ignore
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For local map pack rankings, Google considers your review quantity, recency, and
              response rate. A clinic with 200 reviews and a steady stream of new ones outranks
              a clinic with 50 reviews that stopped growing two years ago — even if the 50-review
              clinic has better technical SEO. Reviews are also the primary trust signal for new
              pet owners choosing a vet they&apos;ve never visited.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Review generation",
                  body: "Automated post-appointment requests via SMS or email. Timed for peak engagement (a few hours after a positive appointment). Most happy pet owners will leave a review — they just need to be asked.",
                },
                {
                  title: "Review response system",
                  body: "Responding to every review (positive and negative) improves your map pack ranking and shows prospective clients you're engaged. We draft response templates and monitor for new reviews daily.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to fill your appointment book without ads?"
        subheading="Book a free 30-minute vet SEO audit. We'll show you exactly where your clinic is losing search visibility, which competitors are outranking you, and what it'll take to change that."
        ctaLabel="Book your free vet SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
