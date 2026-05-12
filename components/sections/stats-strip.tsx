"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsStripProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: "8", label: "industries served" },
  { value: "90", label: "days to first-page results" },
  { value: "$1,800", label: "local SEO from/month" },
  { value: "0", label: "lock-in contracts" },
];

export function StatsStrip({ stats = defaultStats }: StatsStripProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-white border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`px-6 py-8 text-center transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-brand-500">
                {stat.value}
                {stat.value !== "0" && stat.value !== "$1,800" && (
                  <span className="text-amber-500">+</span>
                )}
              </div>
              <div className="mt-1 text-sm text-gray-500 capitalize">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
