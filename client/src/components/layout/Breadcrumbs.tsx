import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  href: string;
}

/**
 * Visible breadcrumb trail (Home › Section › Title) using real <a> links.
 * The last item is the current page and is not linked. The matching
 * BreadcrumbList JSON-LD is emitted separately via the page's <Seo> schema.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5 min-w-0">
              {isLast ? (
                <span className="text-foreground font-medium truncate max-w-[60vw] sm:max-w-md" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.name}
                </Link>
              )}
              {!isLast && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
