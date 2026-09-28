/**
 * /admin/review — 03 §4, dev only.
 *
 * Shows what a reviewer needs to answer the five questions in under three
 * minutes: every fact beside its source and excerpt, the FromMyWork text next
 * to the entry it claims to render, the judge answers and the similarity
 * numbers. A reviewer who has to open four files to check one page will stop
 * checking.
 *
 * Excluded from production: the route returns 404 when NODE_ENV is production,
 * because a review surface listing unpublished drafts should never be reachable
 * on the live site.
 */
import { notFound } from "next/navigation";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { loadAllPages } from "@/lib/content/loader";
import { ResearchObject, type Fact } from "@/lib/content/schemas";
import { REVIEW_QUESTIONS, REJECTION_CODES, sampleFor } from "@/lib/review/sample";

export const dynamic = "force-dynamic";

function factsFor(id: string, used: string[]): Fact[] {
  const p = join(process.cwd(), "..", "seo", "research", `${id}.json`);
  if (!existsSync(p)) return [];
  const parsed = ResearchObject.safeParse(JSON.parse(readFileSync(p, "utf8")));
  if (!parsed.success) return [];
  const want = new Set(used);
  return parsed.data.facts.filter((f) => want.has(f.fact_id));
}

export default async function Review({
  searchParams,
}: {
  searchParams: Promise<{ batch?: string }>;
}) {
  if (process.env.NODE_ENV === "production") notFound();

  const { batch } = await searchParams;
  const all = loadAllPages();
  const inBatch = batch ? all.filter((p) => p.meta.batch_id === batch) : all;
  const wave = inBatch[0]?.meta.wave ?? 1;
  const pages = batch ? sampleFor(batch, wave, inBatch) : inBatch;

  return (
    <main>
      <h1>Review{batch ? ` — ${batch}` : ""}</h1>
      <p>
        {pages.length} of {inBatch.length} page(s)
        {wave > 1 && batch ? " — 20% sample, chosen by seed, not by hand." : ""}
      </p>

      {!pages.length ? (
        <p>Nothing to review. Draft a batch first.</p>
      ) : null}

      {pages.map((p) => {
        const facts = factsFor(p.meta.id, p.meta.facts_used);
        return (
          <section key={p.meta.url} className="review-page">
            <h2>{p.meta.url}</h2>
            <p>
              <a href={p.meta.url}>open the page</a> · status {p.meta.status} ·{" "}
              {p.meta.archetype}
            </p>

            <h3>Unique value claimed</h3>
            <p>{p.meta.unique_value_statement}</p>

            <h3>Facts ({facts.length})</h3>
            <table>
              <thead>
                <tr>
                  <th scope="col">Claim</th><th scope="col">Source</th>
                  <th scope="col">Excerpt</th><th scope="col">Verified</th>
                  <th scope="col">Method</th>
                </tr>
              </thead>
              <tbody>
                {facts.map((f) => (
                  <tr key={f.fact_id}>
                    <td>{f.claim}</td>
                    <td>
                      <a href={f.source_url} target="_blank" rel="noopener">
                        {f.source_domain}
                      </a>
                    </td>
                    <td><q>{f.excerpt}</q></td>
                    <td>{f.verified_on}</td>
                    <td>{f.method}{f.primary ? " · primary" : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {p.meta.experience_used.length ? (
              <>
                <h3>First-person claims</h3>
                <p>
                  Entries cited: {p.meta.experience_used.join(", ")}. Check the block
                  against the entry, not against memory.
                </p>
              </>
            ) : null}

            {p.meta.judge ? (
              <>
                <h3>Judge</h3>
                <ul>
                  <li>Unique value: {p.meta.judge.unique_value}/5</li>
                  <li>Answerable from the page: {String(p.meta.judge.answerable)}</li>
                  <li>Intent clean: {String(p.meta.judge.intent_ok)}</li>
                  <li>Voice: {String(p.meta.judge.voice_ok)}</li>
                </ul>
              </>
            ) : null}

            <h3>The five questions</h3>
            <ol>
              {REVIEW_QUESTIONS.map((q) => <li key={q}>{q}</li>)}
            </ol>
            <p>
              Any &ldquo;no&rdquo; is a rejection. Reason codes:{" "}
              {REJECTION_CODES.join(", ")}. A fact or experience rejection sends the
              whole batch back, including the pages nobody looked at.
            </p>
          </section>
        );
      })}
    </main>
  );
}
