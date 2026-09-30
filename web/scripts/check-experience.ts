/**
 * pnpm experience:check — validates content/experience.json.
 *
 * 02 §5 is explicit that nothing enters the library without Yogesh saying "yes,
 * as written" and setting a permission tag. These entries were extracted from
 * his own published work stories on pmyogesh.com, so the facts are already
 * public — but extracted is not the same as confirmed, and a FromMyWork block
 * renders as his first-person voice.
 *
 * So the library carries a confirmation flag per entry. Entries are usable for
 * drafting immediately; `publish.ts` refuses a page whose FromMyWork cites an
 * unconfirmed entry.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ExperienceEntry } from "../lib/content/schemas";
import { CROSS } from "../lib/gates/contracts";

const PATH = join(process.cwd(), "content", "experience.json");

export function checkExperience(): void {
  const raw = JSON.parse(readFileSync(PATH, "utf8")) as unknown[];
  const problems: string[] = [];
  const ids = new Set<string>();

  for (const [i, e] of raw.entries()) {
    const parsed = ExperienceEntry.safeParse(e);
    if (!parsed.success) {
      problems.push(
        `entry ${i}: ` +
          parsed.error.issues.map((x) => `${x.path.join(".")}: ${x.message}`).join("; "),
      );
      continue;
    }
    const entry = parsed.data;
    if (ids.has(entry.id)) problems.push(`duplicate id ${entry.id}`);
    ids.add(entry.id);

    // 02 §5: an anonymised entry's numbers must be coarsened to ranges. A point
    // estimate plus a sector is often enough to identify the company.
    if (entry.permission === "anonymised") {
      for (const n of entry.numbers) {
        const v = `${n.value ?? ""}${n.from ?? ""}${n.to ?? ""}`;
        if (v && !/[-–]|range|about|~|over|under/i.test(v)) {
          problems.push(`${entry.id}: anonymised entry carries a point estimate "${v}"`);
        }
      }
    }
    if (!entry.tags.length) problems.push(`${entry.id}: no tags, so no page will ever match it`);
    if (entry.tags.length > 5) {
      problems.push(`${entry.id}: ${entry.tags.length} tags (02 §5 says pick 2-5)`);
    }
  }

  if (problems.length) {
    throw new Error(
      `[experience] ${problems.length} problem(s):\n` +
        problems.map((p) => `  - ${p}`).join("\n"),
    );
  }

  const withNumbers = raw.filter((e) => (e as { numbers: unknown[] }).numbers.length).length;
  console.log(
    `[experience] ${raw.length} entries valid, ${withNumbers} carry numbers ` +
      `(Wave 1 needs ${30}, cap ${CROSS.EXPERIENCE_REUSE} pages per entry)`,
  );
  if (raw.length < 30) {
    console.log(`[experience] WARNING: ${raw.length}/30 — Wave 1 does not start below 30 (02 §5)`);
  }
}

if (process.argv[1]?.endsWith("check-experience.ts")) checkExperience();
