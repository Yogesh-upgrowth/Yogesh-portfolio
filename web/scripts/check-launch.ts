/**
 * pnpm launch:check — is this safe to deploy?
 *
 * The question the other checks do not answer. Everything can typecheck, build
 * and pass its gates while the site is still unsafe to put live, because a
 * redirect is only as good as what it lands on.
 *
 * A 301 from a URL that used to rank, to a page that does not exist yet, is
 * worse than leaving the old URL alone: the old page stops serving and the new
 * one returns 404, so the equity goes nowhere. This walks every redirect in
 * migration-map.csv to its final destination and fails on any that does not
 * return 200.
 *
 * Run it against a running server:
 *   pnpm build && pnpm start -p 3320 &
 *   pnpm launch:check --base http://127.0.0.1:3320
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { runScript } from "../lib/net";

const MAP = join(process.cwd(), "..", "seo", "migration-map.csv");

function arg(name: string, fallback: string): string {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : (process.argv[i + 1] ?? fallback);
}

interface Row { from: string; to: string; kind: string }

function rows(): Row[] {
  const [header, ...lines] = readFileSync(MAP, "utf8").trim().split("\n");
  const cols = (header ?? "").split(",");
  const iFrom = cols.indexOf("from"), iTo = cols.indexOf("to"), iKind = cols.indexOf("kind");
  return lines.map((l) => {
    const parts = l.split(",");
    return { from: parts[iFrom] ?? "", to: parts[iTo] ?? "", kind: parts[iKind] ?? "" };
  }).filter((r) => r.from);
}

async function status(url: string, follow: boolean): Promise<number> {
  try {
    const res = await fetch(url, { redirect: follow ? "follow" : "manual" });
    return res.status;
  } catch {
    return 0;
  }
}

async function main(): Promise<void> {
  const base = arg("base", "http://127.0.0.1:3320");
  const all = rows();
  console.log(`[launch] checking ${all.length} redirect(s) against ${base}\n`);

  const notRedirecting: Row[] = [];
  const landingDead: { row: Row; code: number }[] = [];

  for (const r of all) {
    const direct = await status(`${base}${r.from}`, false);
    if (direct !== 301 && direct !== 308) {
      notRedirecting.push(r);
      continue;
    }
    const final = await status(`${base}${r.from}`, true);
    if (final !== 200) landingDead.push({ row: r, code: final });
  }

  if (notRedirecting.length) {
    console.log(`FAIL — ${notRedirecting.length} source(s) do not redirect at all:`);
    for (const r of notRedirecting.slice(0, 10)) console.log(`    ${r.from}`);
  }

  if (landingDead.length) {
    console.log(`FAIL — ${landingDead.length} of ${all.length} redirect(s) land on a page ` +
      `that does not exist:\n`);
    const byPrefix = new Map<string, string[]>();
    for (const { row } of landingDead) {
      const p = "/" + (row.to.split("/")[1] ?? "");
      byPrefix.set(p, [...(byPrefix.get(p) ?? []), row.to]);
    }
    for (const [p, ts] of [...byPrefix].sort((a, b) => b[1].length - a[1].length)) {
      console.log(`    ${p.padEnd(20)} ${String(ts.length).padStart(3)}   e.g. ${ts[0]}`);
    }
    console.log(
      `\n    These URLs currently serve content on the live site. Deploying this\n` +
      `    build would 301 them to 404s, which loses the equity rather than\n` +
      `    moving it. Draft and publish the destination pages first, or hold the\n` +
      `    redirect until its target exists.`,
    );
  }

  const ok = all.length - notRedirecting.length - landingDead.length;
  console.log(`\n[launch] ${ok}/${all.length} redirect(s) land on a live page`);

  if (notRedirecting.length || landingDead.length) {
    console.log("[launch] NOT SAFE TO DEPLOY");
    process.exitCode = 1;
    return;
  }
  console.log("[launch] every redirect lands on a live page — safe to deploy");
}

runScript("launch", main);
