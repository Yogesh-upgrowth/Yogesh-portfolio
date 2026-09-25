import { Link, useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NotFound from "@/pages/not-found";
import {
  METRICS,
  INDUSTRIES,
  DATA,
  RETENTION_CONTEXT,
  type Datapoint,
} from "@shared/benchmarks";
import { SITE_URL } from "@shared/seo-data";
import { servicePath } from "@shared/services";
import { Seo, breadcrumbSchema, getModifiedDate } from "@/lib/seo";

function unitize(n: number, unit: Datapoint["unit"]): string {
  if (unit === "percent") return `${n}%`;
  if (unit === "usd") return `$${n}`;
  if (unit === "inr") return `₹${n}`;
  return `${n}×`;
}

function fmt(d: Datapoint): string {
  return Array.isArray(d.value)
    ? `${unitize(d.value[0], d.unit)}–${unitize(d.value[1], d.unit)}`
    : unitize(d.value, d.unit);
}

/** Widest span across all reported figures — the honest headline. */
function spread(points: Datapoint[]): [number, number] {
  const all = points.flatMap((p) => (Array.isArray(p.value) ? p.value : [p.value]));
  return [Math.min(...all), Math.max(...all)];
}

export default function BenchmarkPage() {
  const [match, params] = useRoute("/benchmarks/:metric/:industry");
  const metric = METRICS.find((m) => m.slug === params?.metric);
  const industry = INDUSTRIES.find((i) => i.slug === params?.industry);
  const key = `${params?.metric}/${params?.industry}`;
  const points = DATA[key];
  if (!match || !metric || !industry || !points?.length) return NotFound();

  const path = `/benchmarks/${key}`;
  const [lo, hi] = spread(points);
  const unit = points[0].unit;
  const headline = lo === hi ? unitize(lo, unit) : `${unitize(lo, unit)}–${unitize(hi, unit)}`;
  // Mixed units in one cell (e.g. monthly and annual ARPU) make a single span
  // meaningless, so the headline is suppressed rather than quietly misleading.
  const mixedUnits =
    new Set(points.map((p) => p.unit)).size > 1 ||
    new Set(points.map((p) => p.basis ?? "")).size > 1;
  const disputed = points.length > 1;
  const title = `${metric.name} benchmark for ${industry.name} apps`;
  const description = `Published ${metric.name.toLowerCase()} benchmarks for ${industry.name.toLowerCase()} apps${mixedUnits ? " are reported on different bases" : ` range ${headline}`}${
    disputed ? " across sources that disagree" : ""
  } — with every figure traced to its publisher.`;

  const dataset = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    creator: { "@id": `${SITE_URL}/#person` },
    citation: points.map((p) => p.source.url),
  };

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title={`${title} (2026)`}
        description={description}
        path={path}
        modifiedAt={getModifiedDate(path)}
        schema={[
          dataset,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Benchmarks", path: "/benchmarks" },
            { name: title, path },
          ]),
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-28 pb-24">
        <div className="container px-4 mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { name: "Benchmarks", href: "/benchmarks" },
              { name: title, href: path },
            ]}
          />

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-6">
            {title}
          </h1>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
              Published range
            </p>
            <p className="text-5xl font-serif font-bold mb-3">
              {mixedUnits ? "Not comparable" : headline}
            </p>
            <p className="text-muted-foreground">
              {disputed
                ? `Across ${points.length} published sources, which do not agree. The spread is the finding.`
                : "From a single published source. Treat one source as an indication, not a benchmark."}
            </p>
          </div>

          {disputed && (
            <section aria-labelledby="disagree-heading" className="mb-12">
              <h2 id="disagree-heading" className="text-2xl font-serif font-bold mb-3">
                Why the published figures disagree
              </h2>
              <p className="text-muted-foreground mb-6">
                Most pages answering this question state one number. That is
                misleading here: the sources below differ by more than the gap
                between a healthy app and a failing one, and the difference is
                almost entirely methodology — which apps were in the sample,
                whether installs were paid or organic, and how the day window
                was counted.
              </p>
              <p className="text-muted-foreground">
                Comparing your own figure against the wrong one of these
                produces the wrong decision, which is the practical reason this
                page lists all of them instead of averaging.
              </p>
            </section>
          )}

          <section aria-labelledby="figures-heading" className="mb-12">
            <h2 id="figures-heading" className="text-2xl font-serif font-bold mb-6">
              Every published figure
            </h2>
            <ul className="space-y-6">
              {points.map((p, i) => (
                <li key={i} className="border-l-2 border-border pl-5">
                  <p className="text-2xl font-serif font-bold text-primary mb-1">
                    {fmt(p)}
                  </p>
                  {p.qualifier && (
                    <p className="text-muted-foreground mb-2">{p.qualifier}</p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    <a
                      href={p.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      {p.source.publisher}
                    </a>
                    , {p.source.asOf}
                    {p.needsPrimaryCheck && " · taken from the publisher's summary"}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="measure-heading" className="mb-12 pt-10 border-t border-border">
            <h2 id="measure-heading" className="text-2xl font-serif font-bold mb-4">
              What {metric.name.toLowerCase()} actually measures
            </h2>
            <p className="text-muted-foreground mb-4">{metric.definition}</p>
            <h3 className="font-bold mb-2">Where the measurement goes wrong</h3>
            <p className="text-muted-foreground">{metric.measurementTrap}</p>
          </section>

          {metric.slug.endsWith("-retention") && (
          <section aria-labelledby="context-heading" className="mb-12 pt-10 border-t border-border">
            <h2 id="context-heading" className="text-2xl font-serif font-bold mb-6">
              Three things that change how you should read this
            </h2>
            <dl className="space-y-6">
              {RETENTION_CONTEXT.map((c) => (
                <div key={c.finding}>
                  <dt className="text-lg font-bold mb-1">{c.finding}</dt>
                  <dd className="text-muted-foreground">
                    {c.detail}{" "}
                    <a
                      href={c.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-2"
                    >
                      {c.source.publisher}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </section>
          )}

          <section className="pt-10 border-t border-border">
            <h2 className="text-2xl font-serif font-bold mb-3">
              Your number is below this. Now what?
            </h2>
            <p className="text-muted-foreground mb-6">
              A benchmark tells you whether to worry, not what to do. Retention
              is downstream of activation: if users are not reaching the thing
              the product is for, no amount of re-engagement fixes the curve.
              That is the first thing worth checking, and it is usually the
              least instrumented part of the funnel.
            </p>
            <ul className="space-y-2 mb-8">
              <li>
                <Link
                  href="/product-growth-score"
                  className="text-primary font-medium underline underline-offset-2"
                >
                  Run the 13-question diagnostic
                </Link>{" "}
                <span className="text-muted-foreground">
                  — scores activation, retention and monetisation separately
                </span>
              </li>
              <li>
                <Link
                  href="/case-study/growth-loop-repeat-users"
                  className="text-primary font-medium underline underline-offset-2"
                >
                  How a repeat-user growth loop was built
                </Link>
              </li>
              <li>
                <Link
                  href={servicePath("consumer-app-growth-consultant")}
                  className="text-primary font-medium underline underline-offset-2"
                >
                  Consumer app growth consulting
                </Link>
              </li>
            </ul>
          </section>

          <nav aria-label="Related benchmarks" className="mt-12 pt-8 border-t border-border">
            <h2 className="text-xl font-serif font-bold mb-4">Related benchmarks</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {METRICS.filter((m) => m.slug !== metric.slug)
                .filter((m) => DATA[`${m.slug}/${industry.slug}`]?.length)
                .map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={`/benchmarks/${m.slug}/${industry.slug}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {m.name}, {industry.name}
                    </Link>
                  </li>
                ))}
              {INDUSTRIES.filter((i) => i.slug !== industry.slug)
                .filter((i) => DATA[`${metric.slug}/${i.slug}`]?.length)
                .map((i) => (
                  <li key={i.slug}>
                    <Link
                      href={`/benchmarks/${metric.slug}/${i.slug}`}
                      className="text-primary font-medium hover:underline"
                    >
                      {metric.name}, {i.name}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/benchmarks" className="text-primary font-medium hover:underline">
                  All benchmarks
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
