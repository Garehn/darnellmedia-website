import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CtaSectionProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function CtaSection({
  heading = "Ready to rank above your competitors?",
  subheading = "Book a free 30-minute consultation. We'll review your site, show you exactly where you're losing leads, and give you a clear picture of what it'll take to fix it.",
  ctaLabel = "Book a free consultation",
  ctaHref = "/book/",
}: CtaSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-600 to-brand-700 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {heading}
        </h2>
        <p className="mt-5 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="amber" size="xl" asChild>
            <Link href={ctaHref} className="flex items-center gap-2">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <p className="text-white/50 text-sm">
            No lock-in contracts · Free audit included
          </p>
        </div>
      </div>
    </section>
  );
}
