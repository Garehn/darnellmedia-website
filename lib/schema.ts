import {
  SITE_URL, SITE_NAME, EMAIL, PHONE_RAW,
  ADDRESS, ABN, FOUNDER_NAME, FOUNDER_TITLE, FOUNDER_DESCRIPTION,
} from "./constants";

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/favicon.svg`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_RAW,
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "English",
    },
    sameAs: [],
  };
}

export function localBusinessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description:
      "Sydney SEO agency specialising in organic growth for trade businesses, home services, and local brands. AEO and GEO services available.",
    url: SITE_URL,
    telephone: PHONE_RAW,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 Lyndhurst Way",
      addressLocality: "Belrose",
      addressRegion: "NSW",
      postalCode: "2085",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.737,
      longitude: 151.222,
    },
    areaServed: { "@type": "City", name: "Sydney" },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    identifier: { "@type": "PropertyValue", name: "ABN", value: ABN },
  };
}

export function founderPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: FOUNDER_NAME,
    jobTitle: FOUNDER_TITLE,
    description: FOUNDER_DESCRIPTION,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/about/`,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-AU",
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; item?: string }>
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((el, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: el.name,
      ...(el.item ? { item: el.item } : {}),
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  provider?: string;
}) {
  return {
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "Organization",
      name: opts.provider ?? SITE_NAME,
      url: SITE_URL,
    },
    areaServed: { "@type": "City", name: "Sydney" },
    serviceType: "Search Engine Optimisation",
  };
}

export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@type": "BlogPosting",
    "@id": `${opts.url}#blogposting`,
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { "@id": `${SITE_URL}/#founder` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    reviewedBy: { "@id": `${SITE_URL}/#founder` },
    inLanguage: "en-AU",
    image: opts.image
      ? {
          "@type": "ImageObject",
          url: opts.image,
          width: 1200,
          height: 675,
        }
      : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
  };
}

export function faqPageSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function buildGraph(...items: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": items.filter(Boolean),
  };
}
