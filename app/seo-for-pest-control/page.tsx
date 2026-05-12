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
  title: "SEO for Pest Control Sydney — Get Found When They Need You | Darnell Media",
  description:
    "SEO for pest control companies in Sydney. Rank for emergency pest searches, seasonal campaigns, suburb-level map pack domination. +189% organic leads in 3 months. No lock-in contracts.",
  alternates: { canonical: "/seo-for-pest-control/" },
  openGraph: {
    title: "SEO for Pest Control Sydney — Get Found When They Need You | Darnell Media",
    description:
      "SEO for pest control in Sydney. Emergency intent keywords, seasonal campaigns, suburb map pack. +189% organic leads in 3 months.",
    url: `${SITE_URL}/seo-for-pest-control/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-for-pest-control.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "What keywords should a pest control company target for SEO?",
    a: "The highest-converting pest control keywords are emergency intent searches: 'cockroach pest control [suburb]', 'spider treatment [suburb]', 'rat infestation [suburb]'. These searches come from someone with an active problem who needs a booking today. Beyond emergency terms, seasonal pests (possum removal in autumn, termite inspection in spring) are high-value targets with predictable demand spikes. We map all of these for your specific service area.",
  },
  {
    q: "How does seasonal SEO work for pest control?",
    a: "Pest demand is highly seasonal in Sydney — termite swarms in spring, cockroach infestations in summer, rodents seeking warmth in autumn. Effective SEO anticipates these spikes 6–8 weeks in advance, with content published and optimised before the season starts. If you publish a 'termite season Sydney' article in November, it's too late. We build a content calendar that puts you in front of searchers before your competitors even start thinking about it.",
  },
  {
    q: "How important is the map pack for pest control bookings?",
    a: "Extremely important — pest control is one of the highest map pack click-through industries because searches are urgent and local. When someone has a cockroach problem in Manly, they're clicking one of the first three businesses they see in the map pack. We focus heavily on Google Business Profile optimisation, citation consistency, and review volume to secure map pack placement in your target suburbs.",
  },
  {
    q: "Do you work with pest control companies that already have Google Ads running?",
    a: "Yes, and we often work alongside existing Ads campaigns. SEO and paid search are complementary — paid ads give you immediate visibility while SEO builds sustainable organic traffic that doesn't disappear when you stop spending. Many pest control clients run Ads for their peak season and rely on organic rankings the rest of the year. We can audit how your current setup compares and where organic can reduce your cost per lead.",
  },
];

export default function SeoForPestControlPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO for Pest Control Sydney — Get Found When They Need You",
      description:
        "SEO strategy for Sydney pest control companies. Emergency intent keywords, seasonal campaigns, suburb map pack domination, review systems.",
      url: `${SITE_URL}/seo-for-pest-control/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-for-pest-control.webp`,
    }),
    serviceSchema({
      name: "SEO for Pest Control Sydney",
      description:
        "Specialist SEO for Sydney pest control businesses. Emergency intent keyword targeting, seasonal campaign strategy, suburb-level map pack optimisation, and review management.",
      url: `${SITE_URL}/seo-for-pest-control/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO for pest control.<br />Get found the moment they need you."
        subheadline="Pest control is the definition of emergency search. Someone has a problem right now. We make sure they find you first."
        image="/images/hero/seo-for-pest-control.webp"
        imageAlt="SEO for Pest Control Sydney — Darnell Media"
        ctaLabel="Book your free pest control SEO audit"
        ctaHref="/book/"
        resultBadge="+189% organic leads in 3 months"
        breadcrumbs={[
          { label: "SEO for Tradies", href: "/seo-for-tradies/" },
          { label: "SEO for Pest Control" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Emergency pest search terms */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Emergency pest search terms — your highest-converting keywords
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nobody idly Googles &apos;pest control Sydney&apos; at 8pm on a Tuesday. They&apos;ve got cockroaches
              in the kitchen, a possum in the roof, or ants through the entire ground floor. These
              searches come with a credit card. They convert at 3–4x the rate of generic service
              searches because the intent is &apos;fix this now&apos; — not &apos;maybe one day&apos;.
            </p>
            <ul className="space-y-3">
              {[
                "'Cockroach pest control [suburb]' — searches spike in summer, stay year-round",
                "'Spider treatment [suburb]' — funnel web and redback searches peak October–March",
                "'Rat removal [suburb]' — autumn and winter when rodents seek shelter",
                "'Possum removal [suburb]' — protected species, higher job value, less price sensitivity",
                "'Termite inspection [suburb]' — spring swarm season, high-value recurring work",
                "'Wasp nest removal [suburb]' — rapid response, same-day booking demand",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Seasonal campaign strategy */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Seasonal campaign strategy — be there before the spike hits
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The pest control SEO mistake we see most often: publishing seasonal content the same
              week the season starts. Google takes 4–8 weeks to index, rank, and validate new content.
              If you publish your &apos;termite season Sydney&apos; content in October, your competitors who
              published in August are already on page one.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We build a 12-month content and optimisation calendar based on Sydney&apos;s actual pest
              seasonality, with content planned 8 weeks ahead of each demand spike. By the time
              Google searches for each pest start rising, your pages are already established and ranking.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  season: "Spring (Sep–Nov)",
                  pests: "Termite swarms, spiders emerging, wasps building nests",
                  action: "Termite inspection content live by July. Spider treatment pages optimised August.",
                },
                {
                  season: "Summer (Dec–Feb)",
                  pests: "Cockroaches, ants, flies, mosquitoes peak",
                  action: "Cockroach and ant control content live October. Summer pest guide published.",
                },
                {
                  season: "Autumn (Mar–May)",
                  pests: "Rodents seeking shelter, possums entering roofs",
                  action: "Rodent and possum content live January. Preventative inspection messaging.",
                },
                {
                  season: "Winter (Jun–Aug)",
                  pests: "Rats and mice peak, spiders indoors",
                  action: "Rodent control content refreshed April. Indoor spider treatment pages updated.",
                },
              ].map((item) => (
                <div key={item.season} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-1">{item.season}</h3>
                  <p className="text-sm text-brand-600 mb-2">{item.pests}</p>
                  <p className="text-sm text-gray-600">{item.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Suburb-level map pack */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Suburb-level map pack — own your service area
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Google&apos;s local map pack shows three results. In pest control — where emergency intent
              is high — the map pack captures a disproportionate share of clicks. Appearing there in
              your target suburbs is the single highest-impact thing we can do for your organic lead volume.
            </p>
            <ul className="space-y-3">
              {[
                "Google Business Profile fully optimised with all pest services listed",
                "Service area set to exactly the suburbs you want to rank in",
                "Citation consistency audit — mismatched NAP data kills map pack rankings",
                "Regular GBP posts with seasonal pest warnings (signals active, authoritative business)",
                "Review volume and recency optimised — both are map pack ranking factors",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Review systems */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Review systems — the trust signal that converts browsers into bookers
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pest control is an intimate service — you&apos;re inviting a stranger into someone&apos;s home.
              Reviews remove the trust barrier that&apos;s stopping prospects from clicking your number.
              A pest control business with 150 recent 5-star reviews will outbook one with 30 old
              reviews every time, even if the prices are identical.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Post-job review requests",
                  body: "Automated SMS sent 2 hours after job completion. Short, direct link to your Google review page. Converts satisfied customers who would otherwise never leave a review.",
                },
                {
                  title: "Review monitoring",
                  body: "We monitor every review platform — Google, Facebook, hipages, ServiceSeeking — and flag negative reviews within 24 hours. Fast, professional responses to negatives reduce their impact significantly.",
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
        heading="Ready to dominate pest control searches in your suburbs?"
        subheading="Book a free 30-minute audit. We'll show you which pest keywords you're missing, where the map pack opportunities are, and what a seasonal campaign would look like for your service area."
        ctaLabel="Book your free pest control SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
