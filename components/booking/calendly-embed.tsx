"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  industry?: string;
  challenge?: string;
  urgency?: string;
  /** Override the default Calendly URL */
  url?: string;
}

// TODO: Replace with your actual Calendly event link after creating your account
const DEFAULT_CALENDLY_URL = "https://calendly.com/garehn-darnellmedia/free-seo-consultation";

export function CalendlyEmbed({
  industry,
  challenge,
  urgency,
  url = DEFAULT_CALENDLY_URL,
}: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Build UTM params from survey answers for context in Calendly notifications
  const params = new URLSearchParams();
  if (industry) params.set("a1", industry);
  if (challenge) params.set("a2", challenge);
  if (urgency) params.set("a3", urgency);
  params.set("hide_gdpr_banner", "1");
  params.set("primary_color", "1e40af");

  const embedUrl = `${url}?${params.toString()}`;

  return (
    <div
      className="calendly-inline-widget w-full rounded-xl overflow-hidden border border-gray-200"
      data-url={embedUrl}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
