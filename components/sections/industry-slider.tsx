"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench, Droplets, Zap, HardHat, TreePine, Sun, Heart, Bug, ArrowRight, CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench, Droplets, Zap, HardHat, TreePine, Sun, Heart, Bug,
};

export function IndustrySlider() {
  const [active, setActive] = useState(0);
  const industry = INDUSTRIES[active];
  const Icon = ICON_MAP[industry.icon] ?? Wrench;

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Industry SEO
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            We specialise in your trade.
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Generic SEO doesn&apos;t work for tradies. Every industry here gets a purpose-built strategy, not a template.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
          {INDUSTRIES.map((ind, i) => {
            const TabIcon = ICON_MAP[ind.icon] ?? Wrench;
            return (
              <button
                key={ind.slug}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  active === i
                    ? "bg-brand-500 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600"
                )}
              >
                <TabIcon className="h-3.5 w-3.5" />
                {ind.label}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-brand-50">
                    <Icon className="h-6 w-6 text-brand-500" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {industry.label} SEO
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink leading-snug">
                  {industry.tagline}
                </h3>

                <div className="mt-4 px-4 py-3 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                  <p className="text-sm font-semibold text-amber-800">{industry.outcome}</p>
                </div>

                <ul className="mt-6 space-y-3">
                  {industry.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                      <CheckCircle className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="amber" asChild>
                    <Link href="/book/" className="flex items-center gap-2">
                      Book free {industry.label.toLowerCase()} SEO audit
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                  <Button variant="ghost" asChild>
                    <Link href={`/${industry.slug}/`} className="flex items-center gap-2">
                      See full {industry.label} strategy
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right: accent panel */}
              <div className="hidden lg:flex bg-gradient-to-br from-brand-500 to-brand-700 p-12 items-center justify-center">
                <div className="text-center text-white">
                  <Icon className="h-24 w-24 text-white/20 mx-auto mb-6" />
                  <p className="font-serif text-2xl font-bold leading-snug">
                    &ldquo;{industry.tagline}&rdquo;
                  </p>
                  <div className="mt-6 inline-block px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-sm">
                    {industry.outcome}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
