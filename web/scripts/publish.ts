/**
 * pnpm publish --batch <id> — flips a reviewed batch to indexable (03 §4).
 *
 * The only script that changes what Google can see, so every precondition is
 * checked and none can be skipped by a flag. CLAUDE.md §1.3 and §1.10.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createInterface } from "node:readline/promises";
import { loadAllPages } from "../lib/content/loader";
import { ensureKeyFile, submitUrls } from "../lib/indexnow";
import { entity } from "../lib/schema/entity";
import { runScript } from "../lib/net";

const REPORTS = join(process.cwd(), "..", "reports");
const LINK_PLAN = join(process.cwd(), "..", "seo", "data", "link-plan.json");

function arg(name: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

async function ask(q: string): Promise<string> {
  const rl = createInterface({ input: process.stdin, output: process.stdout });
  const a = await rl.question(q);
  rl.close();
  return a.trim().toLowerCase();
}

function inboundCounts(): Map<string, number> {
  if (!existsSync(LINK_PLAN)) return new Map();
  const doc = JSON.parse(readFileSync(LINK_PLAN, "utf8")) as
    { inbound_count?: Record<string, number> };
  return new Map(Object.entries(doc.inbound_count ?? {}));
}

async function main(): Promise<void> {
  const batch = arg("batch");
  if (!batch) throw new Error("publish needs --batch <id>");

  const pages = loadAllPages().filter((p) => p.meta.batch_id === batch);
  if (!pages.length) {
    console.log(`[publish] no pages in batch ${batch}.`);
    return;
  }

  // 1. Every page must have passed review.
  const unreviewed = pages.filter(
    (p) => !["reviewed", "published", "indexable"].includes(p.meta.status),
  );
  if (unreviewed.length) {
    console.error(`[publish] ${unreviewed.length} page(s) are not reviewed:`);
    for (const p of unreviewed.slice(0, 10)) {
      console.error(`    ${p.meta.url} (${p.meta.status})`);
    }
    process.exit(1);
  }

  // 2. G08's inbound minimum, checked here as well as in the gates, because
  //    this is the step where getting it wrong becomes public.
  const inbound = inboundCounts();
  const starved = pages.filter((p) => (inbound.get(p.meta.url) ?? 0) < 3);
  if (starved.length) {
    console.error(`[publish] ${starved.length} page(s) have fewer than 3 inbound links:`);
    for (const p of starved.slice(0, 10)) {
      console.error(`    ${p.meta.url} (${inbound.get(p.meta.url) ?? 0}) — run pnpm links`);
    }
    process.exit(1);
  }

  // 3. Google update rollouts. CLAUDE.md §1.10 forbids publishing inside the
  //    first 7 days of a confirmed core or spam rollout. There is no API for
  //    this, so it is a deliberate human confirmation and cannot be flagged
  //    past — a script that could skip it would eventually skip it.
  console.log("\nCheck https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history");
  const answer = await ask(
    "Is there a confirmed core or spam update in its first 7 days of rollout? (yes/no) ",
  );
  if (answer !== "no" && answer !== "n") {
    console.log("[publish] stopped. Re-run once the rollout has been out for 7 days.");
    process.exit(0);
  }

  // 4. Flip.
  const now = new Date().toISOString().slice(0, 10);
  const urls: string[] = [];
  for (const p of pages) {
    const file = join(process.cwd(), "content", `${p.meta.url.replace(/^\//, "")}.json`);
    const meta = { ...p.meta, status: "indexable" as const, indexable: true,
                   published_on: p.meta.published_on ?? now };
    writeFileSync(file, JSON.stringify(meta, null, 2) + "\n", "utf8");
    urls.push(p.meta.url);
  }
  console.log(`[publish] flipped ${urls.length} page(s) to indexable.`);

  // 5. IndexNow. A failure here is recorded, not fatal: the pages are live
  //    either way and the ping is retryable.
  const host = new URL(entity().site).host;
  const key = ensureKeyFile(process.env.INDEXNOW_KEY);
  const res = await submitUrls({ host, key, urls });
  console.log(res.ok
    ? `[publish] IndexNow accepted ${res.submitted} URL(s).`
    : `[publish] IndexNow ping failed (${res.reason}). Pages are live; retry later.`);

  mkdirSync(REPORTS, { recursive: true });
  writeFileSync(join(REPORTS, `${batch}-distribution.md`),
    [`# Distribution kit — ${batch}`, "",
     `Published ${now}. ${urls.length} page(s).`, "",
     "## URLs", ...urls.map((u) => `- ${entity().site}${u}`), "",
     "## Next steps (04 §2)",
     "- Submit the highest-value URLs in Search Console",
     "- Post the primary finding where the audience already is, with the number in the first line",
     "- Reply to the threads that asked this question, linking only where it answers them",
     res.ok ? "" : `- Retry the IndexNow ping: ${res.reason}`,
    ].join("\n"), "utf8");
  console.log(`[publish] distribution kit: reports/${batch}-distribution.md`);
}

runScript("publish", main);
