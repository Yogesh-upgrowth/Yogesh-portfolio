import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { METRICS, INDUSTRIES, DATA, benchmarkRoutes } from "@shared/benchmarks";
import { SITE_URL } from "@shared/seo-data";
import { getPageSeo } from "@shared/seo-meta";
import { Seo, breadcrumbSchema, getModifiedDate } from "@/lib/seo";

export default function BenchmarksIndex() {
  const meta = getPageSeo("/benchmarks")!;
  const routes = benchmarkRoutes();
  const disputed = Object.values(DATA).filter((p) => p.length > 1).length;
  const datapoints = Object.values(DATA).flat().length;

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title={meta.title}
        description={meta.description!}
        path="/benchmarks"
        modifiedAt={getModifiedDate("/benchmarks")}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: meta.title,
            url: `${SITE_URL}/benchmarks`,
            creator: { "@id": `${SITE_URL}/#person` },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Benchmarks", path: "/benchmarks" },
          ]),
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-28 pb-24">
        <div className="container px-4 mx-auto max-w-3xl">
          <Breadcrumbs items={[{ name: "Benchmarks", href: "/benchmarks" }]} />

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-6">
            Product &amp; App Growth Benchmarks
          </h1>
          <div className="space-y-4 mb-12">
            <p className="text-lg text-muted-foreground">
              Published benchmarks for consumer and fintech apps, with every
              figure traced to the publisher that reported it.
            </p>
            <p className="text-muted-foreground">
              The reason these pages exist in this form: published benchmarks
              disagree, often severely. Day 30 retention for fintech is
              reported at 11.6% by one source and 2% by another — a gap wider
              than the difference between a healthy app and a dying one.
              Almost every page answering these questions picks one figure and
              states it with confidence it has not earned.
            </p>
            <p className="text-muted-foreground">
              These pages show every published figure, who published it, and
              why they differ. Where {disputed} of the cells below carry
              sources that contradict each other, the contradiction is the
              finding.
            </p>
            <p className="text-sm text-muted-foreground">
              Currently {datapoints} datapoints across {routes.length} pages.
              Figures marked as taken from a publisher&rsquo;s summary have not
              been read against the primary report.
            </p>
          </div>

          {METRICS.map((metric) => {
            const cells = INDUSTRIES.filter((i) => DATA[`${metric.slug}/${i.slug}`]?.length);
            if (!cells.length) return null;
            return (
              <section key={metric.slug} aria-labelledby={`m-${metric.slug}`} className="mb-12">
                <h2 id={`m-${metric.slug}`} className="text-2xl font-serif font-bold mb-2">
                  {metric.name}
                </h2>
                <p className="text-muted-foreground mb-5">{metric.definition}</p>
                <ul className="space-y-3">
                  {cells.map((industry) => {
                    const points = DATA[`${metric.slug}/${industry.slug}`];
                    const all = points.flatMap((p) =>
                      Array.isArray(p.value) ? p.value : [p.value]
                    );
                    const lo = Math.min(...all);
                    const hi = Math.max(...all);
                    return (
                      <li key={industry.slug} className="flex flex-wrap items-baseline gap-x-3">
                        <Link
                          href={`/benchmarks/${metric.slug}/${industry.slug}`}
                          className="text-primary font-medium hover:underline"
                        >
                          {industry.name}
                        </Link>
                        <span className="font-bold tabular-nums">
                          {lo === hi ? `${lo}%` : `${lo}–${hi}%`}
                        </span>
                        {points.length > 1 && (
                          <span className="text-sm text-muted-foreground">
                            {points.length} sources, disagreeing
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}

          <section className="pt-10 border-t border-border">
            <h2 className="text-2xl font-serif font-bold mb-3">
              Comparing your own numbers?
            </h2>
            <p className="text-muted-foreground mb-6">
              A benchmark tells you whether to worry. It does not tell you which
              part of the funnel is causing it. The diagnostic separates
              acquisition, activation, retention, monetisation and measurement,
              so the answer points somewhere specific.
            </p>
            <Link
              href="/product-growth-score"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Run the diagnostic →
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
