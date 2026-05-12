import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{ url: string; priority: number }> = [
    // Homepage
    { url: "/", priority: 1.0 },

    // Core SEO service pages
    { url: "/seo-sydney/", priority: 0.9 },
    { url: "/seo-services-sydney/", priority: 0.9 },
    { url: "/local-seo-sydney/", priority: 0.9 },
    { url: "/seo-packages-sydney/", priority: 0.9 },

    // Specialist service pages
    { url: "/answer-engine-optimisation/", priority: 0.85 },
    { url: "/generative-engine-optimisation/", priority: 0.85 },
    { url: "/ai-seo-agency/", priority: 0.85 },
    { url: "/seo-consultant-sydney/", priority: 0.85 },

    // Location pages
    { url: "/seo-northern-beaches/", priority: 0.8 },
    { url: "/seo-belrose/", priority: 0.8 },
    { url: "/best-seo-agency-sydney/", priority: 0.8 },
    { url: "/affordable-seo-sydney/", priority: 0.8 },

    // Industry pages
    { url: "/seo-for-tradies/", priority: 0.8 },
    { url: "/seo-for-plumbers/", priority: 0.8 },
    { url: "/seo-for-electricians/", priority: 0.8 },
    { url: "/seo-for-builders/", priority: 0.8 },
    { url: "/seo-for-landscapers/", priority: 0.8 },
    { url: "/seo-for-solar/", priority: 0.8 },
    { url: "/seo-for-vets/", priority: 0.8 },
    { url: "/seo-for-pest-control/", priority: 0.8 },

    // Informational / resource pages
    { url: "/how-to-rank-on-google/", priority: 0.7 },
    { url: "/seo-vs-google-ads/", priority: 0.7 },

    // Conversion pages
    { url: "/about/", priority: 0.7 },
    { url: "/contact/", priority: 0.7 },
    { url: "/book/", priority: 0.65 },

    // Utility
    { url: "/privacy/", priority: 0.4 },
  ];

  return pages.map(({ url, priority }) => ({
    url: SITE_URL + url,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
