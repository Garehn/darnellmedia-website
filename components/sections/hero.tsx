"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  headline: string;
  subheadline: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  heroImage?: string;
  heroAlt?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export function Hero({
  headline,
  subheadline,
  bullets = [],
  ctaLabel = "Book a free consultation",
  ctaHref = "/book/",
  secondaryLabel,
  secondaryHref,
  heroImage,
  heroAlt = "",
}: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-brand-600 via-brand-500 to-[#1a2f6e] overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-medium mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              Sydney SEO Agency — Northern Beaches
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight"
              dangerouslySetInnerHTML={{ __html: headline }}
            />

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 text-lg text-white/75 leading-relaxed max-w-xl"
            >
              {subheadline}
            </motion.p>

            {bullets.length > 0 && (
              <motion.ul
                custom={3}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-6 space-y-2"
              >
                {bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-white/80 text-sm">
                    <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" />
                    {b}
                  </li>
                ))}
              </motion.ul>
            )}

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button variant="amber" size="xl" asChild>
                <Link href={ctaHref} className="flex items-center gap-2">
                  {ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {secondaryLabel && secondaryHref && (
                <Button variant="outline" size="xl" asChild>
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </motion.div>

            <motion.p
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-4 text-white/50 text-xs"
            >
              No lock-in contracts. No hidden fees. Free audit included.
            </motion.p>
          </div>

          {/* Image column */}
          {heroImage && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/9]">
                <Image
                  src={heroImage}
                  alt={heroAlt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1280px) 50vw, 640px"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cream/20 to-transparent pointer-events-none" />
    </section>
  );
}
