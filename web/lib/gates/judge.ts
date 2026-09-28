/**
 * LLM judge — prompts/review-judge.md.
 *
 * The prompt defines seven questions; my first pass had G19 and G20 as bare
 * stubs and ignored Q6 and Q7 entirely. Two of those matter beyond their own
 * gate: Q6 catches sibling repetition that similarity scoring misses when the
 * wording differs, and Q7 checks the FromMyWork text against its library entry,
 * which is the only defence against a first-person claim drifting from what
 * Yogesh actually said.
 */
import { z } from "zod";

export const JudgeVerdict = z.object({
  answer_first: z.boolean(),
  claims_ok: z.boolean(),
  violations: z.array(z.object({ sentence: z.string(), type: z.string() })).default([]),
  intent_ok: z.boolean(),
  offending_sections: z.array(z.string()).default([]),
  voice_score: z.number().min(1).max(5),
  voice_notes: z.array(z.string()).max(3).default([]),
  unique_items: z.array(z.string()).default([]),
  extracted_answer: z.string().default(""),
  answerable: z.boolean(),
  unique_value: z.number().min(1).max(5),
  sibling_overlap: z.array(z.object({
    sibling_url: z.string(), repeated_point: z.string(),
  })).default([]),
  experience_faithful: z.boolean(),
  notes: z.string().default(""),
});
export type JudgeVerdict = z.infer<typeof JudgeVerdict>;

/** review-judge.md: pass thresholds. */
export const VOICE_PASS = 4;
export const UNIQUE_VALUE_PASS = 4;
export const UNIQUE_ITEMS_MIN = 3;
/** unique_value of exactly 3 is rerun on the larger model before it counts. */
export const ESCALATE_AT = 3;

export interface JudgeOutcome {
  gate: string;
  pass: boolean;
  detail: string;
}

/** Maps one verdict onto the gates that consume it. */
export function judgeOutcomes(v: JudgeVerdict): JudgeOutcome[] {
  const out: JudgeOutcome[] = [];

  out.push({
    gate: "G06", pass: v.answer_first,
    detail: v.answer_first
      ? "opening paragraph answers the H1 with a number or verdict"
      : "opening paragraph does not answer the H1",
  });

  out.push({
    gate: "G12", pass: v.claims_ok && v.experience_faithful,
    detail: !v.claims_ok
      ? `${v.violations.length} claim violation(s): ` +
        v.violations.slice(0, 3).map((x) => `${x.type} — "${x.sentence.slice(0, 60)}"`).join("; ")
      : !v.experience_faithful
        ? `a FromMyWork block does not faithfully render its entry: ${v.notes}`
        : "claims traceable, experience faithful",
  });

  out.push({
    gate: "G13", pass: v.voice_score >= VOICE_PASS,
    detail: `voice ${v.voice_score}/5 (pass ${VOICE_PASS})` +
      (v.voice_notes.length ? ` — ${v.voice_notes.join("; ")}` : ""),
  });

  out.push({
    gate: "G19", pass: v.intent_ok,
    detail: v.intent_ok
      ? "stays inside its archetype's job"
      : `does another archetype's job in: ${v.offending_sections.join(", ")}`,
  });

  const uniqueOk =
    v.unique_value >= UNIQUE_VALUE_PASS &&
    v.unique_items.filter((x) => x.trim()).length >= UNIQUE_ITEMS_MIN &&
    v.answerable;
  out.push({
    gate: "G20", pass: uniqueOk,
    detail: uniqueOk
      ? `unique value ${v.unique_value}/5 with ${v.unique_items.length} specific items`
      : `unique value ${v.unique_value}/5, ${v.unique_items.length} items ` +
        `(need ${UNIQUE_VALUE_PASS}/5 and ${UNIQUE_ITEMS_MIN} items), ` +
        `answerable=${v.answerable}`,
  });

  // Q6 has no gate id of its own in 02 §2, but a repeated point across siblings
  // is exactly what the similarity gate cannot see once the wording differs, so
  // it is reported rather than dropped.
  out.push({
    gate: "Q6", pass: v.sibling_overlap.length === 0,
    detail: v.sibling_overlap.length
      ? `${v.sibling_overlap.length} point(s) already made on a sibling: ` +
        v.sibling_overlap.slice(0, 2).map((s) => `${s.sibling_url} — ${s.repeated_point}`).join("; ")
      : "no point repeated from a sibling",
  });

  return out;
}

export function needsEscalation(v: JudgeVerdict): boolean {
  return v.unique_value === ESCALATE_AT;
}

/** Builds the user prompt from review-judge.md's template. */
export function judgeUserPrompt(input: {
  archetype: string;
  mustNot: readonly string[];
  pageMarkdown: string;
  pageMetaJson: string;
  factsJson: string;
  experienceEntriesJson: string;
  serpLeaderSummariesJson: string;
  siblingSummariesJson: string;
  voiceGuideMarkdown: string;
}): string {
  return [
    `ARCHETYPE: ${input.archetype}   MUST NOT: ${input.mustNot.join(" | ")}`,
    `PAGE (rendered markdown): ${input.pageMarkdown}`,
    `PAGE META: ${input.pageMetaJson}`,
    `FACTS: ${input.factsJson}`,
    `EXPERIENCE ENTRIES USED: ${input.experienceEntriesJson}`,
    `SERP LEADER SUMMARIES: ${input.serpLeaderSummariesJson}`,
    `SIBLING SUMMARIES: ${input.siblingSummariesJson}`,
    `VOICE GUIDE: ${input.voiceGuideMarkdown}`,
  ].join("\n");
}
