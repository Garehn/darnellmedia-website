import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { SurveyFunnel } from "@/components/booking/survey-funnel";
import { PHONE_RAW, PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Free SEO Consultation",
  description:
    "Book a free 30-minute SEO consultation with Darnell Media. We'll review your site and show you exactly what it'll take to rank above your competitors.",
  alternates: { canonical: "/book/" },
  robots: { index: false, follow: false }, // Don't index the booking flow
};

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Minimal header for booking flow */}
      <div className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-xl font-bold text-brand-600">
            Darnell<span className="text-amber-500">.</span>
          </Link>
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-brand-600 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Free 30-minute consultation
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Let&apos;s see what&apos;s holding your site back.
          </h1>
          <p className="mt-4 text-gray-500 max-w-md mx-auto">
            Answer three quick questions so we come prepared. Then pick a time that suits you.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <SurveyFunnel />
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          No sales pressure. No obligation. If we&apos;re not the right fit, we&apos;ll tell you.
        </p>
      </div>
    </div>
  );
}
