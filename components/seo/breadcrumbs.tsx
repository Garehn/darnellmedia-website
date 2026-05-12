import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/constants";
import { JsonLd } from "./json-ld";
import { breadcrumbSchema, buildGraph } from "@/lib/schema";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    { name: "Home", item: SITE_URL + "/" },
    ...items.map((c) => ({
      name: c.label,
      item: c.href ? SITE_URL + c.href : undefined,
    })),
  ];

  return (
    <>
      <JsonLd data={buildGraph(breadcrumbSchema(schemaItems))} />
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-brand-500 transition-colors">
              Home
            </Link>
          </li>
          {items.map((crumb, idx) => (
            <li key={idx} className="flex items-center gap-1">
              <ChevronRight className="h-3 w-3" />
              {crumb.href && idx < items.length - 1 ? (
                <Link href={crumb.href} className="hover:text-brand-500 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
