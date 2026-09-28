/**
 * Review sampling — 02 §3.
 *
 * Wave 1 is reviewed in full. From Wave 2 a 20% sample is drawn, minimum five,
 * and the script picks it rather than the author — being able to choose which
 * pages are reviewed defeats the point of sampling. The RNG is seeded by batch
 * id so the same batch always yields the same sample and the choice is
 * auditable after the fact.
 */
export function seededRandom(seed: string): () => number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
    return ((h >>> 0) % 1_000_000) / 1_000_000;
  };
}

export const SAMPLE_SHARE = 0.2;
export const SAMPLE_MINIMUM = 5;

export function sampleFor<T>(batchId: string, wave: number, pages: T[]): T[] {
  if (wave <= 1) return pages;                    // Wave 1 is 100% reviewed.
  if (pages.length <= SAMPLE_MINIMUM) return pages;
  const n = Math.max(SAMPLE_MINIMUM, Math.ceil(pages.length * SAMPLE_SHARE));
  const rand = seededRandom(batchId);
  const pool = [...pages];
  const out: T[] = [];
  while (out.length < n && pool.length) {
    out.push(...pool.splice(Math.floor(rand() * pool.length), 1));
  }
  return out;
}

export const REJECTION_CODES = [
  "voice", "fact", "experience", "verdict", "thin", "duplicate", "design",
] as const;
export type RejectionCode = (typeof REJECTION_CODES)[number];

/** 02 §3: over 10% rejected, or any fact/experience rejection, fails the batch. */
export function batchVerdict(
  reviewed: number, rejections: RejectionCode[],
): { pass: boolean; reason: string } {
  if (rejections.some((r) => r === "fact" || r === "experience")) {
    return { pass: false, reason: "a fact or experience rejection fails the whole batch" };
  }
  if (!reviewed) return { pass: false, reason: "nothing reviewed" };
  const share = rejections.length / reviewed;
  return share > 0.1
    ? { pass: false, reason: `${(share * 100).toFixed(0)}% rejected (limit 10%)` }
    : { pass: true, reason: `${rejections.length}/${reviewed} rejected` };
}

export const REVIEW_QUESTIONS = [
  "Would I put my name on this?",
  "Is every number defensible?",
  "Is the “From my work” block true as written?",
  "Is the verdict mine?",
  "Would a buyer or a PM share this?",
] as const;
