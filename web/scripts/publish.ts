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
import { gatePage, gateContext } from "./gates";
import { ensureKeyFile, submitUrls } from "../lib/indexnow";
import { entity } from "../lib/schema/entity";
import { runScript } from "../lib/net";
import { buildKit } from "../lib/distribution";

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

  // 3. The gates. This is the check that was missing: gates.ts never writes
  //    meta.status, and the two checks above read status and inbound links, so
  //    a page a gate had blocked could reach "reviewed" by hand and be flipped
  //    to indexable with the block still standing. Re-running them here costs a
  //    few seconds and makes that impossible. A skip is not a block — four
  //    gates cannot run offline (G02 without a fetch_log, G18, G19, G20) and
  //    refusing on those would make publishing impossible rather than safe —
  //    but a fail or a block stops the batch.
  const ctx = gateContext();
  const unready = pages
    .map((page) => ({ page, ...gatePage(page, ctx) }))
    .filter((r) => r.worst === "FAILED" || r.worst === "BLOCKED");
  if (unready.length) {
    console.error(`[publish] ${unready.length} page(s) have a failing or blocked gate:`);
    for (const r of unready.slice(0, 10)) {
      const bad = r.results
        .filter((g) => g.status === "fail" || g.status === "blocked")
        .map((g) => `${g.id} ${g.status}: ${g.detail}`);
      console.error(`    ${r.page.meta.url} — ${bad.join(" | ")}`);
    }
    console.error("[publish] fix these and re-run. Nothing was published.");
    process.exit(1);
  }

  // 4. Google update rollouts. CLAUDE.md §1.10 forbids publishing inside the
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

  // 5. Flip.
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

  // 6. IndexNow. A failure here is recorded, not fatal: the pages are live
  //    either way and the ping is retryable.
  const host = new URL(entity().site).host;
  const key = ensureKeyFile(process.env.INDEXNOW_KEY);
  const res = await submitUrls({ host, key, urls });
  console.log(res.ok
    ? `[publish] IndexNow accepted ${res.submitted} URL(s).`
    : `[publish] IndexNow ping failed (${res.reason}). Pages are live; retry later.`);

  mkdirSync(REPORTS, { recursive: true });
  const kit = buildKit(
    pages.map((p) => ({ meta: p.meta, site: entity().site })),
    batch,
  ) + (res.ok ? "" : `\n\n> IndexNow ping failed: ${res.reason}. Retry it.\n`);
  writeFileSync(join(REPORTS, `${batch}-distribution.md`), kit, "utf8");

  // 04 §2 asks for a log so the weekly minimums are measurable rather than
  // remembered.
  const logPath = join(process.cwd(), "..", "seo", "data", "distribution-log.csv");
  mkdirSync(join(logPath, ".."), { recursive: true });
  if (!existsSync(logPath)) {
    writeFileSync(logPath, "date,page_id,channel,url,notes\n", "utf8");
  }
  console.log(`[publish] distribution kit: reports/${batch}-distribution.md`);
}

runScript("publish", main);
