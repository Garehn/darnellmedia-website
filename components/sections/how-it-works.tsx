import { Search, Map, BarChart3 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Free SEO Audit",
    description:
      "We analyse your site against 200+ ranking factors. You get a plain-English report with exactly what's holding you back — and what it'll take to fix it. Takes 7 business days. Costs nothing.",
  },
  {
    number: "02",
    icon: Map,
    title: "90-Day Roadmap",
    description:
      "No vague 'content strategy'. You get a specific plan: the keywords we're targeting, the pages we're building, and the technical issues we're fixing. With a timeline.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Results, then Scale",
    description:
      "We measure rankings, organic leads, and revenue — not vanity traffic. Once we've proven the model, we scale what works. No lock-in. No surprises on the invoice.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">
            How it works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Three steps. No fluff.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <span className="font-serif text-5xl font-bold text-gray-100 select-none leading-none">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="mt-3 p-2.5 rounded-xl bg-brand-50 w-fit mb-4">
                  <Icon className="h-5 w-5 text-brand-500" />
                </div>
                <h3 className="font-semibold text-lg text-ink mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
