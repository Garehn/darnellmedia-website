import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

interface PageHeroProps {
  headline: string;
  subheadline: string;
  image?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  /** Amber result badge shown below subheadline */
  resultBadge?: string;
}

export function PageHero({
  headline,
  subheadline,
  image,
  imageAlt = "",
  ctaLabel = "Book a free consultation",
  ctaHref = "/book/",
  breadcrumbs,
  resultBadge,
}: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-brand-600 via-brand-500 to-[#1a2f6e] pt-24 pb-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <div className="mb-6 [&_*]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/90">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
              dangerouslySetInnerHTML={{ __html: headline }}
            />
            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-xl">
              {subheadline}
            </p>
            {resultBadge && (
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-400/30 rounded-lg text-amber-300 text-sm font-semibold">
                {resultBadge}
              </div>
            )}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button variant="amber" size="lg" asChild>
                <Link href={ctaHref} className="flex items-center gap-2">
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-3 text-white/40 text-xs">
              No lock-in contracts · Free audit included
            </p>
          </div>

          {image && (
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/9]">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 50vw, 600px"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
