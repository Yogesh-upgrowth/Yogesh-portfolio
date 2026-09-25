import { Link } from "wouter";
import { serviceFor, benchmarksFor } from "@shared/topics";
import { SERVICES, servicePath } from "@shared/services";
import { METRICS, INDUSTRIES } from "@shared/benchmarks";

function benchmarkLabel(path: string): string | undefined {
  const m = path.match(/^\/benchmarks\/([a-z0-9-]+)\/([a-z0-9-]+)$/);
  if (!m) return undefined;
  const metric = METRICS.find((x) => x.slug === m[1]);
  const industry = INDUSTRIES.find((x) => x.slug === m[2]);
  if (!metric || !industry) return undefined;
  return `${metric.name} benchmark, ${industry.name.toLowerCase()}`;
}

/**
 * Routes a reader from editorial and proof pages onward — to the commercial
 * page that matches the subject, and to the benchmark data behind it.
 *
 * Before this existed, blog posts linked to no consulting page and no
 * benchmark, and case studies linked only to other case studies: the strongest
 * proof on the site dead-ended.
 */
export default function TopicalLinks({
  signals,
  className = "",
}: {
  signals: string[];
  className?: string;
}) {
  const serviceSlug = serviceFor(signals);
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const benchmarks = benchmarksFor(signals, 2)
    .map((p) => ({ path: p, label: benchmarkLabel(p) }))
    .filter((b): b is { path: string; label: string } => Boolean(b.label));

  if (!service && benchmarks.length === 0) return null;

  return (
    <section
      aria-label="Related resources"
      className={`mt-12 pt-8 border-t border-border ${className}`}
    >
      <h2 className="text-xl font-serif font-bold mb-5">Where to go next</h2>
      <ul className="space-y-4">
        {service && (
          <li>
            <Link
              href={servicePath(service.slug)}
              className="text-primary font-medium hover:underline"
            >
              {service.heading}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              The consulting work this sits inside, with the rest of the
              evidence behind it.
            </p>
          </li>
        )}
        {benchmarks.map((b) => (
          <li key={b.path}>
            <Link href={b.path} className="text-primary font-medium hover:underline">
              {b.label}
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Published figures, traced to their sources — and where the sources
              disagree.
            </p>
          </li>
        ))}
        <li>
          <Link
            href="/product-growth-score"
            className="text-primary font-medium hover:underline"
          >
            Product Growth Score
          </Link>
          <p className="text-sm text-muted-foreground mt-1">
            Thirteen questions that locate which part of the funnel is actually
            constraining growth.
          </p>
        </li>
      </ul>
    </section>
  );
}
