import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  PHONE_RAW, PHONE_DISPLAY, EMAIL, ADDRESS, ABN,
  FOOTER_LINKS, SITE_NAME,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold text-white">
              Darnell<span className="text-amber-500">.</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Sydney SEO agency for tradies and home services. No fluff — just rankings, leads, and results.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a href={`tel:${PHONE_RAW}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 shrink-0" /> {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 shrink-0" /> {EMAIL}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">SEO Services</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Industries</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Locations</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.locations.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© {year} {SITE_NAME}. ABN {ABN}. All rights reserved.</p>
          <Link href="/privacy/" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
