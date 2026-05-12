import Link from "next/link";
import { ArrowRight, TrendingUp, MapPin, Cpu, Users } from "lucide-react";

const SERVICES = [
  {
    icon: TrendingUp,
    title: "SEO Sydney",
    description:
      "Rank for competitive Sydney keywords. We target commercial intent terms that drive enquiries — not just traffic.",
    href: "/seo-sydney/",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Dominate the map pack in your service suburbs. GBP optimisation, citation building, and review systems.",
    href: "/local-seo-sydney/",
  },
  {
    icon: Cpu,
    title: "AEO / GEO",
    description:
      "Get cited in AI Overviews and ChatGPT. The next wave of search is here — we get you in front of it.",
    href: "/answer-engine-optimisation/",
  },
  {
    icon: Users,
    title: "Industry SEO",
    description:
      "Purpose-built strategies for trade businesses. Not a template with your industry name swapped in.",
    href: "/seo-for-tradies/",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">
            What we do
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            SEO services Sydney businesses trust.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.href}
                href={svc.href}
                className="group p-6 rounded-xl border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all duration-300 flex flex-col gap-4"
              >
                <div className="p-2.5 rounded-lg bg-brand-50 w-fit">
                  <Icon className="h-5 w-5 text-brand-500" />
                </div>
                <h3 className="font-semibold text-ink group-hover:text-brand-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {svc.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold text-brand-500">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
