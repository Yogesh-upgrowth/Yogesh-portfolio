/**
 * Build-time guard for the proof database (shared/proof.ts).
 *
 * Fails the build on the two mistakes that actually shipped:
 *  - two claims meaning the same thing with different numbers
 *    ("250+ Team Size Led" vs "50+ Team Members Led")
 *  - a claim sourced to a case study whose own metrics say something else
 *    ("Reduce CAC by 38%" over metrics recording -31%)
 *
 * Unsourced claims do not fail the build — they are real claims about Yogesh's
 * career that simply have no evidence published on the site yet — but they are
 * printed on every build so they cannot be quietly forgotten.
 */
import { pathToFileURL } from "url";
import { PROOF } from "../shared/proof";
import { CASE_STUDY_METRICS } from "../client/src/data/case-study-metrics";
import { caseStudies } from "../client/src/data/caseStudies";
import { WORK_STORY_SLUGS } from "../shared/seo-data";

/** "Team Size Led" and "Team Members Led" are the same claim. */
function normalizeLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/\b(size|members?|count|total)\b/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeValue(v: string): string {
  return v.toLowerCase().replace(/[\s,+−\-–—]/g, "").replace(/×/g, "x");
}

export function checkProof() {
  const errors: string[] = [];
  const unsourced: string[] = [];

  const seenIds = new Set<string>();
  const byLabel = new Map<string, { id: string; value: string }[]>();

  for (const c of PROOF) {
    if (seenIds.has(c.id)) errors.push(`duplicate claim id "${c.id}"`);
    seenIds.add(c.id);

    const key = normalizeLabel(c.label);
    if (!byLabel.has(key)) byLabel.set(key, []);
    byLabel.get(key)!.push({ id: c.id, value: c.value });

    const src = c.source;
    if (src.kind === "case-study") {
      const metrics = CASE_STUDY_METRICS[src.slug];
      if (!metrics) {
        errors.push(`"${c.id}" cites case study "${src.slug}", which has no metrics`);
      } else if (!metrics.some((m) => normalizeValue(m.value) === normalizeValue(c.value))) {
        errors.push(
          `"${c.id}" claims ${c.value} from case study "${src.slug}", whose metrics are: ` +
            metrics.map((m) => m.value).join(", ")
        );
      }
      if (!caseStudies.some((s) => s.slug === src.slug)) {
        errors.push(`"${c.id}" cites case study "${src.slug}", which does not exist`);
      }
    }

    if (src.kind === "work-story") {
      if (!WORK_STORY_SLUGS.includes(src.slug)) {
        errors.push(`"${c.id}" cites work story "${src.slug}", which does not exist`);
      }
      if (!src.quote?.trim()) {
        errors.push(`"${c.id}" cites a work story but quotes no supporting line`);
      }
    }

    if (src.kind === "unsourced") unsourced.push(`${c.value} ${c.label} — ${src.reason}`);
  }

  for (const [label, claims] of byLabel) {
    const distinct = new Set(claims.map((c) => normalizeValue(c.value)));
    if (distinct.size > 1) {
      errors.push(
        `claims about "${label}" disagree: ` +
          claims.map((c) => `${c.id}=${c.value}`).join(" vs ")
      );
    }
  }

  if (errors.length) {
    throw new Error("[proof] the proof database is inconsistent:\n  - " + errors.join("\n  - "));
  }

  console.log(`[proof] ${PROOF.length} claims verified, 0 contradictions`);
  if (unsourced.length) {
    console.log(`[proof] ${unsourced.length} claim(s) have no evidence on the site yet:`);
    for (const u of unsourced) console.log(`          ${u}`);
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  checkProof();
}
