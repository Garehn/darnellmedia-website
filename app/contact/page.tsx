import type { Metadata } from "next";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { CalendlyEmbed } from "@/components/booking/calendly-embed";
import { JsonLd } from "@/components/seo/json-ld";
import { buildGraph, localBusinessSchema } from "@/lib/schema";
import {
  SITE_URL,
  PHONE_RAW,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Darnell Media — Book a Free SEO Consultation",
  description:
    "Get in touch with Darnell Media. Book a free 30-minute SEO consultation. Based in Belrose, Northern Beaches, Sydney. Phone, email, or book online.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    title: "Contact Darnell Media — Book a Free SEO Consultation",
    description:
      "Get in touch with Darnell Media. Book a free 30-minute SEO consultation. Based in Belrose, Northern Beaches, Sydney. Phone, email, or book online.",
    url: `${SITE_URL}/contact/`,
  },
};

export default function ContactPage() {
  const schema = buildGraph(localBusinessSchema());

  return (
    <>
      <JsonLd data={schema} />

      {/* Page header */}
      <section className="bg-gradient-to-br from-brand-600 via-brand-500 to-[#1a2f6e] pt-24 pb-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Free 30-minute consultation
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white leading-tight">
            Let&apos;s talk about your SEO.
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl">
            Pick a time below, or reach out directly. No sales pressure —
            just an honest conversation about what it&apos;ll take to rank your business.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left column: contact details + what to expect */}
            <div className="lg:col-span-2 space-y-8">

              {/* Contact details */}
              <div>
                <h2 className="font-serif text-xl font-bold text-ink mb-5">
                  Contact details
                </h2>
                <div className="space-y-4">
                  <a
                    href={`tel:${PHONE_RAW}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                      <Phone className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        Phone
                      </p>
                      <p className="font-semibold text-ink group-hover:text-brand-600 transition-colors">
                        {PHONE_DISPLAY}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-100 transition-colors">
                      <Mail className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        Email
                      </p>
                      <p className="font-semibold text-ink group-hover:text-brand-600 transition-colors break-all">
                        {EMAIL}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
                        Location
                      </p>
                      <p className="font-semibold text-ink">{ADDRESS}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h2 className="font-serif text-lg font-bold text-ink mb-4">
                  What to expect on the call
                </h2>
                <div className="space-y-3">
                  {[
                    "No sales pressure — if we're not the right fit, we'll say so.",
                    "We'll review your current SEO position before the call.",
                    "Free audit walkthrough: where you're leaving leads on the table.",
                    "Clear picture of what it takes to rank in your area and industry.",
                    "Honest timelines — not overpromised numbers.",
                  ].map((point) => (
                    <div key={point} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time note */}
              <div className="border border-amber-200 bg-amber-50 rounded-xl p-4">
                <p className="text-sm text-amber-800 leading-relaxed">
                  <span className="font-semibold">Prefer email?</span> Send to{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="underline hover:text-amber-900"
                  >
                    {EMAIL}
                  </a>
                  . We respond within one business day.
                </p>
              </div>
            </div>

            {/* Right column: Calendly embed */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-xl font-bold text-ink mb-5">
                Book a time directly
              </h2>
              <CalendlyEmbed />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
