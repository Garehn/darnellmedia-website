import type { Metadata } from "next";
import { CheckCircle, MapPin, Building2, FileText } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "@/components/sections/cta-section";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import {
  buildGraph,
  organizationSchema,
  localBusinessSchema,
  founderPersonSchema,
} from "@/lib/schema";
import { SITE_URL, FOUNDER_NAME, FOUNDER_TITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Darnell Media — Sydney SEO Agency | Garehn Kalloghlian",
  description:
    "Darnell Media is a Sydney SEO agency founded by Garehn Kalloghlian. Specialist in trade businesses and home services. Based in Belrose, Northern Beaches.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: "About Darnell Media — Sydney SEO Agency | Garehn Kalloghlian",
    description:
      "Darnell Media is a Sydney SEO agency founded by Garehn Kalloghlian. Specialist in trade businesses and home services. Based in Belrose, Northern Beaches.",
    url: `${SITE_URL}/about/`,
  },
};

const stats = [
  { icon: MapPin, label: "Based in", value: "Belrose NSW" },
  { icon: Building2, label: "Industries served", value: "8 industries" },
  { icon: FileText, label: "Contracts", value: "No lock-in" },
];

export default function AboutPage() {
  const schema = buildGraph(
    organizationSchema(),
    localBusinessSchema(),
    founderPersonSchema()
  );

  return (
    <>
      <JsonLd data={schema} />

      {/* Custom hero — no PageHero component */}
      <section className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-[#1a2f6e] pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
            About Darnell Media
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            About Darnell Media.
          </h1>
          <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
            A Sydney SEO agency founded on the Northern Beaches. We specialise exclusively in
            trade businesses and home services — not everything to everyone.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="text-center">
                <Icon className="h-5 w-5 text-amber-400 mx-auto mb-2" />
                <p className="text-white font-bold text-lg leading-tight">{value}</p>
                <p className="text-white/50 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Origin */}
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                Where we come from
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Darnell Media was founded by{" "}
                <span className="font-semibold text-ink">{FOUNDER_NAME}</span>, {FOUNDER_TITLE},
                from Belrose on Sydney&apos;s Northern Beaches. The business was built around a
                straightforward observation: trade businesses and home service operators are
                being badly served by generic SEO agencies that don&apos;t understand how
                local search actually works for their industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work with plumbers, electricians, builders, landscapers, pest control
                operators, solar installers, and veterinary practices — industries where
                the phone call matters more than the pageview, and where ranking in the
                right suburb beats ranking nationally every time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No lock-in contracts. No account managers between you and the work. No
                offshore content farms. Direct specialist access, every engagement.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 space-y-4">
                <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
                  The short version
                </p>
                {[
                  "Sydney-based, Northern Beaches-founded",
                  "Specialist in trades and home services",
                  "Direct access to the specialist doing the work",
                  "Month-to-month — no lock-in",
                  "Reporting on leads and calls, not just traffic",
                ].map((point) => (
                  <div key={point} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why trade businesses */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Why trade businesses specifically?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Most SEO agencies treat a plumber the same as an e-commerce store or a law
              firm. They shouldn&apos;t. Trade businesses operate with specific constraints
              that change how search strategy should work:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Local, not national",
                  body: "A plumber in Manly doesn't compete with a plumber in Penrith. The keyword universe is suburb-level — 'emergency plumber Manly', 'plumber Dee Why', 'blocked drain Brookvale'. Generic agency keyword research misses most of these.",
                },
                {
                  title: "Emergency intent is different",
                  body: "Someone searching 'plumber near me at 10pm' is not browsing. They need someone in the next 20 minutes. The content, speed, and conversion path for emergency searches is completely different to research-phase content.",
                },
                {
                  title: "Map pack matters more than blog traffic",
                  body: "For most trade searches, the three businesses in the Google map pack get the majority of calls. Getting you into that pack — and keeping you there — is a different discipline to chasing blog traffic.",
                },
                {
                  title: "Reviews are a ranking signal",
                  body: "In local SEO, your review count, recency, and rating directly affect where you appear. We build review generation systems, not just web pages.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How we work */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              How we work
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every engagement follows the same structure. No surprises, no scope creep,
              no going dark for weeks.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Discovery call",
                  body: "30 minutes. We learn about your business, your service areas, your competitors, and what a good month looks like for you. No obligation, no pitch deck.",
                },
                {
                  step: "02",
                  title: "Free audit",
                  body: "We review your site, your Google Business Profile, your current rankings, and your competitors. You get a clear picture of where you stand before spending a dollar.",
                },
                {
                  step: "03",
                  title: "90-day roadmap",
                  body: "A prioritised action plan: technical fixes first, then on-page, then local signals, then content. Every action tied to a target outcome.",
                },
                {
                  step: "04",
                  title: "Monthly retainer",
                  body: "Month-to-month. We execute the roadmap, report on progress, and adjust based on what we see in the data. No lock-in means we earn your business every month.",
                },
                {
                  step: "05",
                  title: "Reporting on what matters",
                  body: "Monthly reports cover ranking movements, lead volume from organic, call tracking data, and GBP insights. Not a vanity traffic PDF — actual business metrics.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-ink mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* When NOT to work with us */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              When not to work with us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We&apos;d rather be upfront than sign an engagement that&apos;s wrong for
              both parties. Here&apos;s when we&apos;re probably not the right fit:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "You want 50 blog posts a month",
                  body: "If your strategy depends on high-volume content production from an offshore content farm, we're not it. We write fewer, better pieces — substantive pages that answer real questions and hold rankings.",
                },
                {
                  title: "You want to rank nationally before establishing locally",
                  body: "For trade businesses, this is the wrong order. We'll tell you that directly. Suburb-level authority comes first. National visibility follows from a strong local foundation, not the other way around.",
                },
                {
                  title: "You need quick wins only",
                  body: "SEO is a compounding channel. If your business needs leads in the next two weeks and you have no existing rankings, Google Ads is the right answer right now. We can discuss both honestly.",
                },
                {
                  title: "You want an agency that says yes to everything",
                  body: "We'll tell you when your expectations are unrealistic, when a keyword isn't worth chasing, or when the budget doesn't match the competition level of what you want to rank for. That's not comfortable to hear — but it saves money.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-amber-400 mt-0.5" />
                  <div>
                    <span className="font-semibold text-ink">{item.title}: </span>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA inline */}
          <div className="text-center py-4">
            <p className="text-gray-500 mb-6 text-lg">
              If Darnell Media sounds like the right fit, the next step is a free 30-minute call.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link href="/book/" className="flex items-center gap-2 mx-auto w-fit">
                Book a free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <p className="mt-3 text-gray-400 text-xs">
              No obligation. No sales pitch. Just an honest conversation.
            </p>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to work with a specialist?"
        subheading="Book a free 30-minute consultation. We'll audit your current SEO, show you where your competitors are beating you, and give you a clear roadmap — no obligation."
        ctaLabel="Book your free consultation"
        ctaHref="/book/"
      />
    </>
  );
}
