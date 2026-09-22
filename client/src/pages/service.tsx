import { Link, useRoute } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import NotFound from "@/pages/not-found";
import { caseStudies } from "@/data/caseStudies";
import { CASE_STUDY_METRICS } from "@/data/case-study-metrics";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SERVICES, OFFERS } from "@shared/services";
import { SITE_URL } from "@shared/seo-data";
import { getPageSeo } from "@shared/seo-meta";
import {
  Seo,
  breadcrumbSchema,
  professionalServiceSchema,
  getModifiedDate,
} from "@/lib/seo";

export default function ServicePage() {
  const [match, params] = useRoute("/:slug");
  const service = match ? SERVICES.find((s) => s.slug === params?.slug) : undefined;
  if (!service) return <NotFound />;

  const path = `/${service.slug}`;
  const meta = getPageSeo(path)!;
  const studies = service.caseStudies
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));
  const posts = service.relatedPosts
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is (typeof BLOG_POSTS)[number] => Boolean(p));

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title={meta.title}
        description={meta.description!}
        path={path}
        modifiedAt={getModifiedDate(path)}
        schema={[
          professionalServiceSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: service.heading, path },
          ]),
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-28 pb-24">
        <div className="container px-4 mx-auto max-w-4xl">
          <Breadcrumbs items={[{ name: service.heading, href: path }]} />

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-6">
            {service.heading}
          </h1>
          <div className="space-y-4 mb-14">
            {service.intro.map((p) => (
              <p key={p.slice(0, 40)} className="text-lg text-muted-foreground">
                {p}
              </p>
            ))}
          </div>

          <section aria-labelledby="work-heading" className="mb-16">
            <h2 id="work-heading" className="text-2xl font-serif font-bold mb-8">
              What this actually involves
            </h2>
            <dl className="space-y-7">
              {service.workItems.map((w) => (
                <div key={w.title}>
                  <dt className="text-lg font-bold mb-1">{w.title}</dt>
                  <dd className="text-muted-foreground">{w.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section
            aria-labelledby="proof-heading"
            className="mb-16 pt-10 border-t border-border"
          >
            <h2 id="proof-heading" className="text-2xl font-serif font-bold mb-3">
              The work behind this
            </h2>
            <p className="text-muted-foreground mb-8">
              Every claim above comes from one of these. They include what did
              not work, not only what did.
            </p>
            <ul className="space-y-7">
              {studies.map((s) => {
                const metric = (CASE_STUDY_METRICS[s.slug] ?? [])[0];
                return (
                  <li key={s.slug}>
                    {metric && (
                      <p className="text-sm font-bold text-primary mb-1">
                        {metric.value} {metric.label}
                      </p>
                    )}
                    <h3 className="text-lg font-bold mb-1">
                      <Link
                        href={`/case-study/${s.slug}`}
                        className="text-primary hover:underline"
                      >
                        {s.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground">{s.description}</p>
                  </li>
                );
              })}
            </ul>
          </section>

          <section
            aria-labelledby="offers-heading"
            className="mb-16 pt-10 border-t border-border"
          >
            <h2 id="offers-heading" className="text-2xl font-serif font-bold mb-3">
              How to work with me
            </h2>
            <p className="text-muted-foreground mb-8">
              Engagements start narrow and widen only if the work warrants it.
              Most begin with a diagnostic, because committing to a fix before
              agreeing what is broken wastes both of our time.
            </p>
            <ul className="space-y-6">
              {OFFERS.map((o) => (
                <li key={o.name} className="border border-border rounded-xl p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
                    <h3 className="text-lg font-bold">{o.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {o.timeframe} · {o.price ?? "Pricing on request"}
                    </p>
                  </div>
                  <p className="text-muted-foreground">{o.outcome}</p>
                </li>
              ))}
            </ul>
          </section>

          {posts.length > 0 && (
            <section
              aria-labelledby="reading-heading"
              className="mb-16 pt-10 border-t border-border"
            >
              <h2 id="reading-heading" className="text-2xl font-serif font-bold mb-5">
                Going deeper
              </h2>
              <ul className="space-y-3">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-primary hover:underline font-medium"
                    >
                      {p.title}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="pt-10 border-t border-border">
            <h2 className="text-2xl font-serif font-bold mb-3">
              Start with the problem, not the engagement
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Tell me what you are building, the number you are trying to move,
              and what you have already tried. That is usually enough for me to
              say whether I can help before we spend a call finding out.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Work with Yogesh →
              </Link>
              <Link
                href="/product-growth-score"
                className="text-primary font-medium underline underline-offset-2"
              >
                Or run the free 13-question diagnostic first
              </Link>
            </div>
          </section>

          <nav aria-label="Other services" className="mt-14 pt-8 border-t border-border">
            <h2 className="text-xl font-serif font-bold mb-4">Other areas</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-primary font-medium hover:underline">
                    {s.heading}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/case-studies" className="text-primary font-medium hover:underline">
                  All case studies
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
