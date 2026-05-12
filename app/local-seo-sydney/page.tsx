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
  title: "Local SEO Sydney — Dominate the Map Pack | Darnell Media",
  description:
    "Local SEO Sydney specialists. Google Business Profile, map pack, citations. Rank in your service suburbs. Book a free local SEO audit.",
  alternates: { canonical: "/local-seo-sydney/" },
  openGraph: {
    title: "Local SEO Sydney — Dominate the Map Pack | Darnell Media",
    description:
      "Local SEO Sydney specialists. Google Business Profile, map pack, citations. Rank in your service suburbs. Book a free local SEO audit.",
    url: `${SITE_URL}/local-seo-sydney/`,
    images: [{ url: `${SITE_URL}/images/hero/local-seo-sydney.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How long does it take to get into the map pack in Sydney?",
    a: "In low-competition suburbs, we've had clients appear in the top 3 map results within 4–6 weeks of a full GBP optimisation. In highly competitive inner-city suburbs (CBD, Surry Hills, Bondi), expect 3–5 months. The speed depends on your review count, existing citation health, and how strong your competitors are.",
  },
  {
    q: "My Google Business Profile already exists — can you still improve it?",
    a: "Almost always yes. Most GBP listings we audit are missing key services, have inconsistent category selections, have outdated or low-quality photos, and lack a regular posting cadence. All of these are ranking factors. A properly optimised GBP looks very different from a basic one.",
  },
  {
    q: "What are citations and do they still matter?",
    a: "Citations are mentions of your business name, address, and phone number (NAP) on other websites — directories like True Local, Hotfrog, hipages, and industry sites. They matter because Google uses consistency of NAP data as a local trust signal. Inconsistent or duplicate citations actively hurt your rankings.",
  },
  {
    q: "Can I rank in suburbs I don't have an address in?",
    a: "Yes — through service area optimisation and suburb landing pages. You don't need a physical office in Manly to rank for 'plumber Manly'. Service area targeting in your GBP, combined with a well-optimised suburb page on your website and strong review mentions of that area, can get you there.",
  },
];

export default function LocalSeoSydneyPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "Local SEO Sydney — Dominate the Map Pack",
      description:
        "Local SEO Sydney specialists. Google Business Profile, map pack, citations. Rank in your service suburbs.",
      url: `${SITE_URL}/local-seo-sydney/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/local-seo-sydney.webp`,
    }),
    serviceSchema({
      name: "Local SEO Sydney",
      description:
        "Local SEO services for Sydney trade businesses and home services. Google Business Profile optimisation, citation building, map pack targeting.",
      url: `${SITE_URL}/local-seo-sydney/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="Local SEO Sydney — rank in<br />your service suburbs."
        subheadline="Most Sydney trades get 80% of their leads from within 15km. We get you in front of those searches before your competitors."
        image="/images/hero/local-seo-sydney.webp"
        imageAlt="Local SEO Sydney — Darnell Media"
        ctaLabel="Book a free local SEO audit"
        ctaHref="/book/"
        resultBadge="+203% Google Maps views for a Bondi Junction client (90 days)"
        breadcrumbs={[{ label: "Local SEO Sydney" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* GBP */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Google Business Profile optimisation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your Google Business Profile is the most important local SEO asset you have. It determines whether you appear in the map pack — those three local results above the organic links — and what potential customers see when they find you.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Category & attribute selection",
                  body: "Your primary and secondary category choices send the strongest signals to Google about what your business does. Most businesses are using the wrong primary category or missing secondary categories that would expand their ranking footprint.",
                },
                {
                  title: "Services & products",
                  body: "The Services section on your GBP is indexed by Google. We build out a comprehensive service list with keyword-rich descriptions for each service you offer — this expands the range of queries you're eligible to rank for.",
                },
                {
                  title: "Photo optimisation",
                  body: "Profiles with 10+ high-quality photos receive significantly more direction requests and website clicks. We audit your current photos, advise on what to add, and geo-tag images where relevant.",
                },
                {
                  title: "Google Posts cadence",
                  body: "Regular posts (offers, updates, events) signal an active, maintained listing — one of the factors Google uses to determine map pack eligibility. We manage a monthly posting calendar on your behalf.",
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

          {/* Citations */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Citation building &amp; cleanup
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Inconsistent NAP (Name, Address, Phone) data across Australian directories confuses Google and suppresses your local rankings. Before we build new citations, we audit and fix existing ones.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Citation audit",
                  body: "We find every existing mention of your business across the web, identify inconsistencies, and flag duplicates. Outdated phone numbers, old addresses, and name variations all need fixing.",
                },
                {
                  title: "Tier-1 directory submissions",
                  body: "We build listings on the highest-authority Australian directories: True Local, Hotfrog, Yellow Pages, White Pages, hipages, ServiceSeeking, and industry-specific directories relevant to your trade.",
                },
                {
                  title: "Industry citations",
                  body: "A plumber listed on Master Plumbers Australia carries more local SEO weight than a general directory listing. We identify and build citations on the trade associations and industry platforms relevant to your business.",
                },
                {
                  title: "Ongoing monitoring",
                  body: "Citations can change — businesses move, phone numbers update, and aggregator databases introduce new errors. We monitor your citation health monthly and fix issues as they arise.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review systems */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Review systems
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Review count, recency, and average rating are direct map pack ranking factors. Businesses with 50+ Google reviews and a 4.5+ rating appear significantly more often than businesses with 10 reviews at 3.8. We systematise review generation so it happens automatically after every job.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Review request automation",
                  body: "A simple SMS or email sequence sent 24 hours after job completion can triple your review acquisition rate. We set up the automation — you just keep completing jobs.",
                },
                {
                  title: "Response templates",
                  body: "Responding to reviews (positive and negative) is both a ranking signal and a trust signal for prospective customers. We write response templates you can use to acknowledge reviews quickly and professionally.",
                },
                {
                  title: "Review monitoring",
                  body: "We track your review velocity across Google, Facebook, and industry platforms, and flag any negative reviews that need urgent attention.",
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

          {/* Suburb landing pages */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Suburb landing pages
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A dedicated page for &ldquo;plumber Dee Why&rdquo; will always outrank your generic Services page for that term. Suburb landing pages are one of the highest-ROI tactics in local SEO for trade businesses operating across multiple Sydney suburbs.
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Unique, locally relevant content",
                  body: "Not copy-paste pages with the suburb name swapped. Each page references local context — streets, landmarks, council areas — and includes service-specific content relevant to that area.",
                },
                {
                  title: "Internal linking architecture",
                  body: "Suburb pages link to and from your main service pages and GBP, creating a coherent local SEO site structure that reinforces your authority across the service area.",
                },
                {
                  title: "Schema markup",
                  body: "Each suburb page includes LocalBusiness schema with the specific service area address, linking back to your GBP for entity consistency.",
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
        heading="Get into the map pack."
        subheading="Book a free local SEO audit. We'll review your Google Business Profile, check your citation health, and show you exactly what's stopping you from ranking in your service suburbs."
        ctaLabel="Book a free local SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
