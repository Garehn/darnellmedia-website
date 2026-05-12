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
  title: "Best SEO Agency Sydney — How to Choose in 2025 | Darnell Media",
  description:
    "How to choose the best SEO agency in Sydney in 2025. 5 questions to ask, red flags to avoid, and what good SEO reporting actually looks like. No lock-in contracts.",
  alternates: { canonical: "/best-seo-agency-sydney/" },
  openGraph: {
    title: "Best SEO Agency Sydney — How to Choose in 2025 | Darnell Media",
    description:
      "A practical guide to choosing the best SEO agency in Sydney. What to ask, what red flags to avoid, and what separates agencies that deliver from those that don't.",
    url: `${SITE_URL}/best-seo-agency-sydney/`,
    images: [{ url: `${SITE_URL}/images/hero/best-seo-agency-sydney.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "How much should I expect to pay a good SEO agency in Sydney?",
    a: "Legitimate, effective SEO in Sydney costs $1,800–$4,000/month for most small-to-medium businesses. Below $1,000/month, you're paying for reports and surface-level activity, not real results. Above $5,000/month is typically enterprise scale — appropriate for large sites or very competitive national terms. One-off audits from reputable agencies start around $1,200–$1,800. Anyone quoting $299/month for 'full SEO' is either automating everything or using tactics that will eventually hurt your site.",
  },
  {
    q: "How do I know if my SEO agency is actually doing work?",
    a: "Ask for a monthly deliverable list — specifically: what pages were changed this month, what links were built, what technical fixes were implemented, and what content was created. Then verify. Log in to Search Console yourself and check whether your rankings are actually moving. Check Ahrefs or SEMrush for backlink additions. If your agency can't show you specific work products each month, they're charging for reports, not results.",
  },
  {
    q: "Is a specialist SEO agency better than a full-service digital marketing agency?",
    a: "For SEO specifically, yes — usually. Full-service agencies spread their expertise across SEO, paid ads, social media, email, and design. SEO is one of several services they offer. Specialist agencies eat, sleep, and breathe SEO — they're more up-to-date on algorithm changes, more technically skilled, and more focused. The tradeoff is that you'll need separate providers for paid ads and other channels. For most businesses where SEO is the primary growth channel, a specialist is worth it.",
  },
  {
    q: "What makes Darnell Media different from other Sydney SEO agencies?",
    a: "We're a specialist, not a generalist. We focus on trade businesses and home services where suburb-level local SEO has the clearest ROI. You deal directly with the specialist doing the work — no account managers. We publish our pricing. We don't lock clients into long-term contracts. And we include AEO and GEO (AI search optimisation) in our strategies because that's where search is heading — not just traditional rankings that may decline as AI search grows.",
  },
];

export default function BestSeoAgencySydneyPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "Best SEO Agency Sydney — How to Choose in 2025",
      description:
        "How to choose the best SEO agency in Sydney. 5 questions to ask before signing, red flags to avoid, and what good SEO reporting looks like.",
      url: `${SITE_URL}/best-seo-agency-sydney/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/best-seo-agency-sydney.webp`,
    }),
    serviceSchema({
      name: "SEO Agency Sydney",
      description:
        "Specialist Sydney SEO agency for trade businesses and home services. Transparent pricing, no lock-in contracts, direct specialist access.",
      url: `${SITE_URL}/best-seo-agency-sydney/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="How to choose the best SEO agency in Sydney."
        subheadline="There are 200+ SEO agencies in Sydney. Most will take your money, send you monthly reports full of metrics that don't mean anything, and renew contracts you can't get out of. Here's how to tell them apart."
        image="/images/hero/best-seo-agency-sydney.webp"
        imageAlt="Best SEO Agency Sydney — Darnell Media"
        ctaLabel="See how we compare"
        ctaHref="/book/"
        breadcrumbs={[{ label: "Best SEO Agency Sydney" }]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* 5 questions to ask */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              5 questions to ask any Sydney SEO agency before signing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ask these five questions before you sign anything. A good agency will answer
              them directly. An agency with something to hide will deflect, use jargon,
              or tell you the answer is &apos;complicated&apos;.
            </p>
            <div className="space-y-4">
              {[
                {
                  q: "Who will actually be working on my account?",
                  why: "Most agencies use account managers as client-facing contacts while junior analysts do the actual work. Ask to meet the person who will actually be doing your SEO — not the salesperson or account manager. If they can't arrange that, you won't know who's working on your site.",
                },
                {
                  q: "Can I see case studies from businesses similar to mine?",
                  why: "Any agency can claim results. Ask for specific case studies from businesses in your industry and size range. What keywords moved? By how much? Over what timeframe? What tactics were used? Vague 'we increased traffic by 200%' claims without supporting detail are red flags.",
                },
                {
                  q: "What does your link building process look like?",
                  why: "Link building is the highest-risk SEO activity. Cheap agencies buy links from low-quality directories and link farms — tactics that can earn a Google penalty and tank your rankings overnight. Ask specifically: where do you get links from? Can I see examples of links you've built for other clients?",
                },
                {
                  q: "What does the contract look like?",
                  why: "A 12-month lock-in contract before you've seen a single result is a red flag. Reputable agencies work on rolling monthly agreements — if they're not delivering, you should be able to leave. Ask: what's the minimum term, and what notice period is required to cancel?",
                },
                {
                  q: "How will you report on results — and how do I verify them independently?",
                  why: "An agency should be able to tell you exactly how to verify their results in your own Google Search Console account. If your only window into performance is their branded report, you have no way to independently verify what they're telling you. Ask how to check rankings, traffic, and conversions yourself.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex gap-3">
                    <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-ink mb-1">&ldquo;{item.q}&rdquo;</p>
                      <p className="text-sm text-gray-600">{item.why}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Red flags */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Red flags to watch for when choosing a Sydney SEO agency
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Some of these are obvious. Some are harder to spot. All of them should make
              you hesitate before signing.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  flag: "Vanity metric reporting",
                  detail: "Reports full of 'sessions', 'page views', and 'domain authority improvements' that don't connect to leads or revenue. Ask: what's my enquiry volume from organic search? If they can't answer, they're hiding behind metrics.",
                },
                {
                  flag: "Lock-in contracts before results",
                  detail: "12-month contracts signed before any rankings have moved. Good agencies earn your renewal by delivering. They don't need to trap you.",
                },
                {
                  flag: "Offshore content farms",
                  detail: "$299/month agencies deliver volume by outsourcing content to overseas writers producing 10 articles a week. Google's Helpful Content updates have decimated this content. It won't help your rankings — it may actively hurt them.",
                },
                {
                  flag: "Guaranteed rankings",
                  detail: "No one can guarantee specific rankings on Google. Any agency making this promise is either lying or planning to target such low-competition terms that the guarantee is technically true but commercially useless.",
                },
                {
                  flag: "No clear deliverables",
                  detail: "'We'll improve your SEO' is not a deliverable. Ask for a specific list of what work will be done each month — pages optimised, links built, content created. Vague retainers are how agencies charge without being accountable.",
                },
                {
                  flag: "Opacity about tactics",
                  detail: "If an agency won't explain exactly how they're building your backlinks, what content they're creating, or how they're doing your technical SEO — they're probably using tactics they know you'd object to if you understood them.",
                },
              ].map((item) => (
                <div key={item.flag} className="bg-red-50 border border-red-100 rounded-xl p-5">
                  <h3 className="font-semibold text-red-700 mb-2">⚠ {item.flag}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Good SEO reporting */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              What good SEO reporting actually looks like
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A good monthly SEO report is not a 40-page PDF full of graphs. It&apos;s a clear,
              readable document that shows you: where you are, where you were, what we did,
              and what we&apos;re doing next. It should take you 10 minutes to read, not a full afternoon.
            </p>
            <ul className="space-y-3">
              {[
                "Ranking movement — which target keywords moved up, which moved down, by how many positions",
                "Organic traffic — sessions from search, compared to last month and last year",
                "Conversions — phone calls, form fills, or bookings from organic search (tracked via GA4 or Search Console)",
                "Work completed this month — specific pages changed, links built, content published",
                "Work planned next month — what's happening next, not just what happened",
                "One or two things we noticed — opportunities, concerns, algorithm updates that affect your campaign",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Why we're confident */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Why we&apos;re confident enough to publish this comparison
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A guide telling you how to evaluate SEO agencies only makes sense to publish
              if you believe you&apos;ll come out well under that evaluation. Here&apos;s how Darnell
              Media answers each of the five questions above:
            </p>
            <div className="space-y-3">
              {[
                { q: "Who works on your account?", a: "Garehn Kalloghlian — founder, lead strategist, and the only person who does the work. You deal directly with him from day one." },
                { q: "Can I see case studies?", a: "Yes — specific keyword movements, traffic data, and lead volume changes for clients in plumbing, electrical, pest control, landscaping, and veterinary services." },
                { q: "How do you build links?", a: "Digital PR, editorial outreach, and relevant Australian directories. We don't buy links, and we'll show you every link we build." },
                { q: "What does the contract look like?", a: "Month-to-month rolling agreement. 30 days notice to cancel. No lock-in, no penalty, no reason to stay except results." },
                { q: "How do you report?", a: "Monthly reports in plain English. Every metric verifiable in your own Search Console account. We walk you through it on a call if needed." },
              ].map((item) => (
                <div key={item.q} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink">{item.q} </span>
                    <span className="text-gray-600">{item.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to compare us against the alternatives?"
        subheading="Book a free 30-minute consultation. Ask us all five questions. We'll show you our case studies, explain exactly how we work, and give you an honest assessment of whether we're the right fit for your business."
        ctaLabel="Book a free consultation"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
