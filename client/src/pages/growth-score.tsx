import { useState, useMemo } from "react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { caseStudies } from "@/data/caseStudies";
import { SERVICES, servicePath } from "@shared/services";
import {
  QUESTIONS,
  DIMENSIONS,
  ANSWER_LABELS,
  scoreAnswers,
  scoreBand,
  type Answer,
} from "@shared/growth-score";
import { getPageSeo } from "@shared/seo-meta";
import { Seo, breadcrumbSchema, faqSchema, getModifiedDate } from "@/lib/seo";

const PATH = "/product-growth-score";
const ANSWERS: Answer[] = ["yes", "partly", "no"];

export default function GrowthScore() {
  const meta = getPageSeo(PATH)!;
  const [answers, setAnswers] = useState<Record<string, Answer | undefined>>({});
  const result = useMemo(() => scoreAnswers(answers), [answers]);
  const answeredCount = Object.keys(answers).length;
  const band = scoreBand(result.overall);

  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title={meta.title}
        description={meta.description!}
        path={PATH}
        modifiedAt={getModifiedDate(PATH)}
        schema={[
          faqSchema(
            DIMENSIONS.map((d) => ({
              question: `What does a low ${d.name.toLowerCase()} score mean?`,
              answer: `${d.diagnosis} ${d.firstMove}`,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Product Growth Score", path: PATH },
          ]),
        ]}
      />
      <Navbar />
      <main id="main-content" className="flex-grow pt-28 pb-24">
        <div className="container px-4 mx-auto max-w-3xl">
          <Breadcrumbs items={[{ name: "Product Growth Score", href: PATH }]} />

          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-6 mb-6">
            Product Growth Score
          </h1>
          <div className="space-y-4 mb-10">
            <p className="text-lg text-muted-foreground">
              Thirteen questions about whether the things that decide growth are
              actually measured in your product. Most of them ask whether you
              know something, not whether it is good — because in practice the
              constraint is almost always something nobody had instrumented,
              rather than something known about and ignored.
            </p>
            <p className="text-muted-foreground">
              Nothing is sent anywhere. The score is worked out in your browser
              as you answer, and the result points at the case study that dealt
              with the same problem.
            </p>
          </div>

          <form
            aria-label="Product growth diagnostic"
            onSubmit={(e) => e.preventDefault()}
            className="space-y-10"
          >
            {DIMENSIONS.map((dim) => {
              const qs = QUESTIONS.filter((q) => q.dimension === dim.id);
              if (qs.length === 0) return null;
              return (
                <section key={dim.id} aria-labelledby={`dim-${dim.id}`}>
                  <h2
                    id={`dim-${dim.id}`}
                    className="text-xs font-bold uppercase tracking-widest text-primary mb-5"
                  >
                    {dim.name}
                  </h2>
                  <div className="space-y-7">
                    {qs.map((q) => (
                      <fieldset key={q.id}>
                        <legend className="font-bold mb-1">{q.text}</legend>
                        <p className="text-sm text-muted-foreground mb-3">{q.hint}</p>
                        <div className="flex flex-wrap gap-2">
                          {ANSWERS.map((a) => {
                            const checked = answers[q.id] === a;
                            return (
                              <label
                                key={a}
                                className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                                  checked
                                    ? "bg-primary text-white border-primary"
                                    : "bg-background border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={q.id}
                                  value={a}
                                  checked={checked}
                                  onChange={() =>
                                    setAnswers((prev) => ({ ...prev, [q.id]: a }))
                                  }
                                  className="sr-only"
                                />
                                {ANSWER_LABELS[a]}
                              </label>
                            );
                          })}
                        </div>
                      </fieldset>
                    ))}
                  </div>
                </section>
              );
            })}
          </form>

          <section
            aria-labelledby="result-heading"
            aria-live="polite"
            className="mt-14 pt-10 border-t border-border"
          >
            <h2 id="result-heading" className="text-2xl font-serif font-bold mb-6">
              Your result
            </h2>

            {answeredCount === 0 ? (
              <p className="text-muted-foreground">
                Answer the questions above and your score appears here. There is
                no submit button and no email required.
              </p>
            ) : (
              <>
                <p className="text-muted-foreground mb-6">
                  {answeredCount} of {QUESTIONS.length} answered
                  {!result.answeredAll && " — the score covers what you have answered so far."}
                </p>

                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-5xl font-serif font-bold text-primary">
                    {result.overall}
                  </span>
                  <span className="text-xl text-muted-foreground">/ 100</span>
                  <span className="text-lg font-bold">{band.label}</span>
                </div>
                <p className="text-muted-foreground mb-10">{band.meaning}</p>

                <h3 className="text-lg font-bold mb-4">By area</h3>
                <dl className="space-y-4 mb-10">
                  {result.byDimension.map((d) => (
                    <div key={d.dimension.id}>
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <dt className="font-medium">{d.dimension.name}</dt>
                        <dd className="text-sm font-bold tabular-nums">
                          {d.answered === 0 ? "—" : `${d.score}/100`}
                        </dd>
                      </div>
                      <div
                        className="h-2 rounded-full bg-muted overflow-hidden"
                        role="img"
                        aria-label={`${d.dimension.name}: ${
                          d.answered === 0 ? "not answered" : `${d.score} out of 100`
                        }`}
                      >
                        <div
                          className="h-full bg-primary rounded-full transition-[width] duration-300"
                          style={{ width: `${d.answered === 0 ? 0 : d.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </dl>

                {result.weakest && (
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                    <h3 className="text-xl font-bold mb-3">
                      Weakest area: {result.weakest.dimension.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {result.weakest.dimension.diagnosis}
                    </p>
                    <p className="font-medium mb-6">
                      Start here: {result.weakest.dimension.firstMove}
                    </p>

                    {(() => {
                      const cs = caseStudies.find(
                        (c) => c.slug === result.weakest!.dimension.caseStudy
                      );
                      const svc = SERVICES.find(
                        (s) => s.slug === result.weakest!.dimension.service
                      );
                      return (
                        <ul className="space-y-2">
                          {cs && (
                            <li>
                              <Link
                                href={`/case-study/${cs.slug}`}
                                className="text-primary font-medium underline underline-offset-2"
                              >
                                Read how this was fixed: {cs.title}
                              </Link>
                            </li>
                          )}
                          {svc && (
                            <li>
                              <Link
                                href={servicePath(svc.slug)}
                                className="text-primary font-medium underline underline-offset-2"
                              >
                                {svc.heading}
                              </Link>
                            </li>
                          )}
                          <li>
                            <Link
                              href="/contact"
                              className="text-primary font-medium underline underline-offset-2"
                            >
                              Talk it through
                            </Link>
                          </li>
                        </ul>
                      );
                    })()}
                  </div>
                )}
              </>
            )}
          </section>

          <section className="mt-14 pt-10 border-t border-border">
            <h2 className="text-2xl font-serif font-bold mb-5">
              What each area means
            </h2>
            <dl className="space-y-6">
              {DIMENSIONS.map((d) => (
                <div key={d.id}>
                  <dt className="text-lg font-bold mb-1">{d.name}</dt>
                  <dd className="text-muted-foreground">{d.diagnosis}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
