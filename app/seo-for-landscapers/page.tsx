import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaSection } from "@/components/sections/cta-section";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildGraph,
  blogPostingSchema,
  serviceSchema,
  faqPageSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SEO for Landscapers Sydney — Book Design Consultations | Darnell Media",
  description:
    "SEO for landscaping companies in Sydney. Rank year-round and peak when customers are planning projects. +218% organic traffic in one season. No lock-in contracts.",
  alternates: { canonical: "/seo-for-landscapers/" },
  openGraph: {
    title: "SEO for Landscapers Sydney — Book Design Consultations | Darnell Media",
    description:
      "SEO for Sydney landscapers. Visual portfolio optimisation, seasonal keyword campaigns, suburb targeting. +218% organic traffic in one season.",
    url: `${SITE_URL}/seo-for-landscapers/`,
    images: [{ url: `${SITE_URL}/images/hero/seo-for-landscapers.webp`, width: 1200, height: 675 }],
  },
};

const FAQS = [
  {
    q: "When is the best time to start landscaping SEO for Sydney?",
    a: "Start 8–10 weeks before your peak season. In Sydney, landscaping enquiries spike in late winter and early spring (August–October) as homeowners start planning outdoor projects before summer. If you begin SEO in September hoping to catch that wave, you've missed it. We build seasonal content calendars that have your pages ranking before demand peaks — not while it's already happening.",
  },
  {
    q: "How do you optimise landscape design portfolio images for SEO?",
    a: "Image SEO for landscapers involves several layers: descriptive file names ('northern-beaches-coastal-garden-design.jpg' not 'IMG_4521.jpg'), alt text that describes the project and location, image compression for fast mobile loading, structured data markup for images, and embedding images within location-specific project pages rather than dumping them in a gallery. Google Image Search drives meaningful traffic to landscaping businesses — it's worth doing properly.",
  },
  {
    q: "Can SEO help me book more design consultation clients specifically?",
    a: "Yes — and this is where landscaping SEO differs from trade SEO. Design consultation clients are searching with research intent, not emergency intent. Terms like 'landscape designer Northern Beaches', 'garden design consultation Manly', and 'landscaping ideas [suburb]' attract clients who are planning and willing to pay a consultation fee. We build content funnels that take these searchers from inspiration to booked consultation.",
  },
  {
    q: "What postcodes and suburbs should a Northern Beaches landscaper target?",
    a: "For Northern Beaches landscapers, priority suburbs include Manly (2095), Dee Why (2099), Brookvale (2100), Curl Curl (2096), Collaroy (2097), Narrabeen (2101), Mona Vale (2103), Newport (2106), and Avalon (2107). Properties in these areas trend larger with gardens worth investing in. We map search volume and competition for each suburb and prioritise accordingly — no point targeting equal effort at suburbs with minimal search activity.",
  },
];

export default function SeoForLandscapersPage() {
  const schema = buildGraph(
    blogPostingSchema({
      headline: "SEO for Landscapers Sydney — Book Design Consultations 6 Weeks Out",
      description:
        "SEO strategy for Sydney landscapers. Visual portfolio optimisation, seasonal keyword campaigns, suburb and postcode targeting.",
      url: `${SITE_URL}/seo-for-landscapers/`,
      datePublished: "2024-11-01",
      image: `${SITE_URL}/images/hero/seo-for-landscapers.webp`,
    }),
    serviceSchema({
      name: "SEO for Landscapers Sydney",
      description:
        "Specialist SEO for Sydney landscaping businesses. Portfolio image optimisation, seasonal keyword campaigns, suburb and postcode targeting for design consultation bookings.",
      url: `${SITE_URL}/seo-for-landscapers/`,
    }),
    faqPageSchema(FAQS)
  );

  return (
    <>
      <JsonLd data={schema} />
      <PageHero
        headline="SEO for landscapers.<br />Book design consultations 6 weeks out."
        subheadline="Landscaping is visual and seasonal. We build content strategies that rank year-round and peak when customers are planning their projects."
        image="/images/hero/seo-for-landscapers.webp"
        imageAlt="SEO for Landscapers Sydney — Darnell Media"
        ctaLabel="Book your free landscaper SEO audit"
        ctaHref="/book/"
        resultBadge="+218% organic traffic in one season"
        breadcrumbs={[
          { label: "SEO for Tradies", href: "/seo-for-tradies/" },
          { label: "SEO for Landscapers" },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Visual portfolio optimisation */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Visual portfolio optimisation — making your best work findable
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Landscaping is bought visually. Homeowners search for inspiration, see a project that
              matches what they want, and then contact the company that created it. Most landscaping
              websites have beautiful photos buried in a gallery with no text, no location context,
              and no SEO value. We fix that.
            </p>
            <ul className="space-y-3">
              {[
                "Dedicated project pages per completed job — not gallery dumps",
                "SEO-structured project titles: 'Coastal Native Garden — Curl Curl, NSW'",
                "Descriptive image alt text referencing project type, location, and plants used",
                "Compressed, fast-loading images (Core Web Vitals impact on rankings)",
                "Google Image Search optimisation — drives consistent referral traffic",
                "Before/after photo pairs with location schema markup",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Seasonal keyword campaigns */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Seasonal keyword campaigns — be ranked before demand arrives
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Sydney landscaping has two major demand windows: the pre-summer planning season
              (August–October) when homeowners want their outdoor spaces finished before Christmas,
              and the post-summer redesign season (February–April). Missing either window means
              watching competitors take bookings you should have had.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  season: "Pre-summer (Aug–Oct)",
                  keywords: [
                    "'Garden design Northern Beaches'",
                    "'Landscaping before Christmas Sydney'",
                    "'Outdoor entertainment area [suburb]'",
                    "'Pool landscaping [suburb]'",
                  ],
                  publish: "Content live by June",
                },
                {
                  season: "Post-summer (Feb–Apr)",
                  keywords: [
                    "'Garden renovation [suburb]'",
                    "'Lawn repair [suburb]'",
                    "'Drought-tolerant garden design Sydney'",
                    "'Native garden designer Northern Beaches'",
                  ],
                  publish: "Content live by December",
                },
              ].map((item) => (
                <div key={item.season} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-ink mb-2">{item.season}</h3>
                  <p className="text-xs text-brand-500 font-medium mb-2">{item.publish}</p>
                  <ul className="space-y-1">
                    {item.keywords.map((kw) => (
                      <li key={kw} className="flex gap-2 text-sm text-gray-600">
                        <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-0.5" />
                        {kw}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Suburb + postcode targeting */}
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink mb-4">
              Suburb and postcode targeting — rank where the gardens are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              High-value landscaping work clusters geographically. Larger blocks, older established
              gardens needing renovation, and higher household incomes correlate directly with
              landscape investment. We identify your highest-value suburbs and build dedicated
              landing pages that rank for searches in those exact locations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              For Northern Beaches landscapers, we target suburbs like Manly (larger established
              gardens), Narrabeen (coastal native garden demand), Mona Vale (large block sizes),
              Avalon (premium market, heritage gardens), and Newport (acreage properties).
              Different suburbs get different content angles based on what homeowners there actually want.
            </p>
            <ul className="space-y-3">
              {[
                "Dedicated suburb pages for every primary service area",
                "Postcode targeting in page titles and structured data",
                "Local project references — 'we recently completed this garden in Avalon'",
                "Travel distance and service area clearly stated (reduces wasted quote calls)",
                "Google Business Profile service area set to exact target postcodes",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-gray-600">
                  <CheckCircle className="text-brand-400 h-4 w-4 shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      <CtaSection
        heading="Ready to fill your consultation calendar for next season?"
        subheading="Book a free 30-minute audit. We'll review your current rankings, identify the seasonal keyword opportunities you're missing, and show you what a full-year content strategy looks like for your service area."
        ctaLabel="Book your free landscaper SEO audit"
        ctaHref="/book/"
      />
      <FaqSection faqs={FAQS} />
    </>
  );
}
