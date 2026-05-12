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
  founderPersonSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO Consultant Sydney — Garehn Kalloghlian | Darnell Media",
  description:
    "Sydney-based SEO consultant Garehn Kalloghlian. Specialist in organic growth for trade businesses and home services. Book a free strategy consultation. Northern Beaches based.",
  alternates: { canonical: "/seo-consultant-sydney/" },
  openGraph: {
    title: "SEO Consultant Sydney — Garehn Kalloghlian | Darnell Media",
    description:
      "Sydney SEO consultant Garehn Kalloghlian. Direct access. No account managers. Specialist in trade businesses and home services. Book a free strategy consultation.",
    url: `${SITE_URL}/seo-consultant-sydney/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-consultant-sydney.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "What types of businesses do you work with?",
    a: "I specialise in trade businesses and home services — plumbers, electricians, builders, landscapers, solar installers, pest control operators, and veterinary clinics. I also work with local professional services (physios, dental, financial advisers) and other local businesses where suburb-level search dominance is the goal. I don't take on e-commerce, national brands, or clients where the right answer is 'you need a content farm producing 50 blog posts a month'. I'm a specialist, not a generalist agency.",
  },
  {
    q: "How is working with a consultant different from working with an agency?",
    a: "With a typical agency, you sign a contract and get assigned to an account manager who relays information to the person actually doing the work. You might never speak to that person. With me, the person who scopes your campaign is the person building your keyword strategy, doing your on-page work, building your backlinks, and sending your monthly report. One accountable specialist with direct access. No relay race.",
  },
  {
    q: "What does a monthly SEO retainer with you actually look like?",
    a: "Onboarding includes a full technical audit (100+ point check), keyword strategy mapping, and a 90-day action roadmap. From there, each month includes: on-page optimisation for target pages, technical fixes as they arise, content production or direction, link building (3–5 quality links/month on full retainer), GBP management, and a detailed monthly report showing exactly what moved and why. You can reach me directly via email or phone — no ticketing systems, no account managers.",
  },
  {
    q: "Do you work with clients outside the Northern Beaches?",
    a: "Yes — SEO is delivered remotely and I work with clients across Sydney and nationally. That said, my deepest market knowledge is the Northern Beaches (Manly, Dee Why, Brookvale, Narrabeen, Mona Vale, Avalon) where I'm based. If you're a Northern Beaches business, you're working with someone who understands your specific local market and the suburb-level search patterns in it.",
  },
];

export default function SeoConsultantSydneyPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO Consultant Sydney — Garehn Kalloghlian",
      description:
        "Sydney-based SEO consultant specialising in organic growth for trade businesses and home services. Direct access, no account managers, 7-day audit turnaround.",
      url: `${SITE_URL}/seo-consultant-sydney/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-consultant-sydney.webp`,
    }),
    serviceSchema({
      name: "SEO Consultant Sydney",
      description:
        "Independent Sydney SEO consultant Garehn Kalloghlian. Specialist in organic growth for trade businesses, home services, and local brands. Direct access, no account managers.",
      url: `${SITE_URL}/seo-consultant-sydney/`,
    }),
    founderPersonSchema(),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="Sydney SEO consultant.<br />Direct access. No account managers."
        subheadline="When you work with Darnell Media, you work with me directly. No account managers. No junior analysts reporting back up the chain. Just a clear strategy and someone accountable for results."
        image="/images/hero/seo-consultant-sydney.webp"
        imageAlt="SEO Consultant Sydney Garehn Kalloghlian — Darnell Media"
        ctaLabel="Book a free strategy consultation"
        ctaHref="/book/"
        resultBadge="Northern Beaches based · 7-day audit turnaround"
        breadcrumbs={[{ label: "SEO Consultant Sydney" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Why direct specialist access matters */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Why direct specialist access matters — and why most agencies can&apos;t offer it
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most SEO agencies are built around account managers — people whose job is to
              manage client relationships while the actual SEO work is done by a team of analysts
              who might rotate on and off your account. You get reports, you get meetings with
              someone who can explain the reports, but you never speak to the person who&apos;s
              actually making decisions about your website.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              At Darnell Media, there&apos;s one person: me. I do the audit. I build the keyword
              strategy. I write the on-page content briefs. I make the technical recommendations.
              I manage the link building. I write your monthly report. When you have a question,
              you call or email me — and I answer it, because I know your campaign in detail.
            </p>
            <ul className="space-y-3">
              {[
                "No account managers between you and the person doing the work",
                "Same person from onboarding to month 12 — no team rotation, no knowledge loss",
                "Direct phone and email access — not a support ticket system",
                "Decisions made by someone with full context of your campaign",
                "Monthly reports written by me, not auto-generated dashboards",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Who I work with */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Who I work with
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I specialise in trade businesses and home services because this is where
              suburb-level local SEO has the highest direct ROI. A plumber ranking #1 in
              their target suburbs books more emergency callouts than their competitors.
              A vet clinic ranking in the map pack fills its appointment schedule without
              paying for Google Ads. The economics are clear and the results are measurable.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  category: "Trade businesses",
                  clients: ["Plumbers", "Electricians", "Builders and renovators", "Landscapers", "Solar installers", "Pest control operators"],
                },
                {
                  category: "Home services & local brands",
                  clients: ["Veterinary clinics", "Allied health (physio, dental, chiro)", "Local professional services", "Home improvement specialists", "Real estate agencies", "Food and hospitality (suburb-specific)"],
                },
              ].map((col) => (
                <div key={col.category} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-3">{col.category}</h3>
                  <ul className="space-y-2">
                    {col.clients.map((client) => (
                      <li key={client} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-0.5" />
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* What a retainer looks like */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What a retainer with me looks like — month by month
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              No vague retainers where you pay monthly and hope something happens. Here&apos;s exactly
              how engagements are structured from day one.
            </p>
            <div className="space-y-4">
              {[
                {
                  phase: "Week 1–2: Onboarding",
                  items: [
                    "Full technical SEO audit (100+ point check)",
                    "Keyword gap analysis — where you rank now vs where you should be",
                    "Competitor benchmark — what your top 3 competitors are doing that you're not",
                    "90-day action roadmap with prioritised tasks",
                  ],
                },
                {
                  phase: "Month 1–3: Foundation",
                  items: [
                    "Technical fixes from audit implemented",
                    "On-page optimisation for 10–15 target pages",
                    "Google Business Profile audit and optimisation",
                    "Citation cleanup and initial link building",
                  ],
                },
                {
                  phase: "Month 4+: Growth",
                  items: [
                    "Content strategy and new page creation",
                    "Link building (3–5 quality links/month on full retainer)",
                    "AEO/GEO optimisation layer added",
                    "Monthly reporting on ranking movement, traffic, and enquiries",
                  ],
                },
              ].map((phase) => (
                <div key={phase.phase} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-3">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item) => (
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

          {/* When NOT to work with me */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              When NOT to work with me — an honest section
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I&apos;d rather tell you this upfront than waste your time or mine.
            </p>
            <ul className="space-y-3">
              {[
                "You need 50 blog posts a month and a full content team — I'm a specialist, not a content factory. My clients get focused, high-quality work, not volume.",
                "You need a full-service agency with PR, social media, paid ads, and email under one roof — I do SEO, AEO, and GEO. I don't do the rest.",
                "You need someone to manage multiple locations nationally at scale — I work best with 1–3 location businesses where suburb-level precision matters.",
                "You want guaranteed #1 rankings in 30 days — no legitimate SEO consultant can promise that. If someone is, they're lying.",
                "You have a very limited budget and expect enterprise results — good SEO costs money. If the budget isn't there, I'll tell you what you can do yourself first.",
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
        heading="Ready to work directly with a specialist?"
        subheading="Book a free 30-minute strategy consultation. I'll review your site, show you where your SEO is costing you leads, and give you a clear picture of what a campaign with me would look like."
        ctaLabel="Book a free strategy consultation"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
