import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  tags: string;
  industry: string;
  title: string;
  subtitle: string;
  result: string;
  href?: string;
}

const FEATURED: CaseStudy = {
  tags: "LOCAL SEO / PLUMBING",
  industry: "Northern Beaches Plumber",
  title: "+312% organic leads in 6 months.",
  subtitle:
    "A Belrose plumber was invisible in local search — losing jobs to competitors ranking in the map pack. We rebuilt their GBP, created suburb-level landing pages, and secured 14 citations. Three months later: page 1 for 9 emergency terms.",
  result: "+312% leads · #1 map pack · 9 emergency keywords ranked",
  href: "/seo-for-plumbers/",
};

const STUDIES: CaseStudy[] = [
  {
    tags: "ANSWER ENGINE OPTIMISATION / VET CLINIC",
    industry: "Vet Clinic — Manly",
    title: "62% more new patient bookings via AI Overviews.",
    subtitle:
      "Google's AI Overview started citing a competitor's vet. We engineered the content to reclaim that citation — and added schema to lock it in.",
    result: "+62% new patients · AI Overview cited",
    href: "/seo-for-vets/",
  },
  {
    tags: "SEO / ELECTRICIAN",
    industry: "Emergency Electrician — Sydney",
    title: "#1 for 'emergency electrician [suburb]' in 4 months.",
    subtitle:
      "Technical site rebuild, suburb landing pages, and a Google review system pushed this electrician to the top spot in their service area.",
    result: "#1 for 19 terms · 4-month timeline",
    href: "/seo-for-electricians/",
  },
];

function StudyCard({
  study,
  featured = false,
}: {
  study: CaseStudy;
  featured?: boolean;
}) {
  const Wrapper = study.href ? Link : "div";
  return (
    <Wrapper
      href={study.href ?? "#"}
      className={`group flex flex-col justify-between gap-6 border border-border bg-background px-6 py-8 transition-colors duration-300 hover:bg-muted/30 ${
        featured ? "md:py-14 xl:px-10" : "md:py-12"
      }`}
    >
      <div>
        <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          {study.tags}
        </span>
        <h3
          className={`mt-4 font-serif font-bold text-balance leading-snug text-ink ${
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {study.title}
          <span className="font-medium text-brand-400/60 transition-colors duration-300 group-hover:text-brand-400">
            {" "}
            {study.subtitle}
          </span>
        </h3>
      </div>
      <div>
        <p className="text-xs font-semibold text-amber-600 bg-amber-50 inline-block px-3 py-1 rounded-full mb-4">
          {study.result}
        </p>
        <div className="flex items-center gap-2 font-semibold text-sm text-ink">
          Read more
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Wrapper>
  );
}

export function CaseStudies() {
  return (
    <section className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Real results
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
            Real Sydney SEO results. Real growth.
          </h2>
          <p className="mt-2 text-gray-500 text-sm italic">
            Composite case studies based on real campaign outcomes.
          </p>
        </div>

        {/* Bento grid — adapted from shadcnblocks gallery4 / Casestudy5 */}
        <div className="border border-border">
          {/* Featured */}
          <StudyCard study={FEATURED} featured />

          {/* Two smaller */}
          <div className="flex border-t border-border flex-col lg:flex-row">
            {STUDIES.map((s, i) => (
              <div
                key={i}
                className={`flex-1 ${i > 0 ? "border-t lg:border-t-0 lg:border-l border-border" : ""}`}
              >
                <StudyCard study={s} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
