/**
 * pnpm citations — the monthly 25-prompt check (03 §4, 04).
 *
 * Where an API exists this could be automated; most of these surfaces have none
 * that returns the cited sources. So the script prepares the run, records the
 * answers, and keeps the history — it does not pretend to have checked.
 */
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { runScript } from "../lib/net";

const PROMPTS = join(process.cwd(), "..", "seo", "config", "citation-prompts.json");
const OUT = join(process.cwd(), "..", "seo", "data", "citations.csv");
const SURFACES = ["google-ai-mode", "chatgpt", "perplexity", "gemini", "claude"] as const;

function main(): void {
  const doc = JSON.parse(readFileSync(PROMPTS, "utf8")) as
    { prompts?: { id: string; prompt: string }[] } & Record<string, unknown>;
  const prompts = doc.prompts ?? [];
  if (!prompts.length) {
    console.error("[citations] seo/config/citation-prompts.json has no prompts.");
    process.exit(1);
  }

  mkdirSync(join(OUT, ".."), { recursive: true });
  if (!existsSync(OUT)) {
    // prompt_id, not the prompt text: the config asks for it so the series stays
    // comparable when wording is revised under a DECISIONS.md entry.
    writeFileSync(OUT, "checked_on,surface,prompt_id,prompt,cited,page,position,notes\n", "utf8");
  }

  const today = new Date().toISOString().slice(0, 10);
  let added = 0;
  for (const p of prompts) {
    for (const s of SURFACES) {
      // A blank `cited` column is the honest default: it means nobody has looked
      // yet. Writing "no" here would record a finding that was never made.
      appendFileSync(
        OUT,
        `${today},${s},${p.id},"${p.prompt.replace(/"/g, '""')}",,,,\n`,
        "utf8",
      );
      added++;
    }
  }

  console.log(`[citations] queued ${added} rows (${prompts.length} prompts x ${SURFACES.length} surfaces)`);
  console.log(`[citations] ${OUT}`);
  console.log("[citations] Run each prompt, then fill `cited` (yes/no) and `page`.");
  console.log("[citations] Rows left blank are unchecked, not uncited.");
}

runScript("citations", main);
