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
 * It also walks every internal link the content declares. Checking only the
 * redirect map left a whole class of breakage invisible: /glossary was linked
 * from 29 pages and had 25 children, and 404ed, because nothing in the
 * pipeline asked whether a link target resolves. A hub that 404s costs more
 * than a dead redirect — it strands every child under it and breaks the
 * up-link G08 requires on each one.
 *
 * Run it against a running server:
 *   pnpm build && pnpm start -p 3320 &
 *   pnpm launch:check --base http://127.0.0.1:3320
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
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


const CONTENT = join(process.cwd(), "content");

/** Every internal link and CTA href the content declares, target -> citing pages. */
function internalLinks(): Map<string, string[]> {
  const out = new Map<string, string[]>();
  const walk = (dir: string): void => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) { walk(full); continue; }
      if (!name.endsWith(".json")) continue;
      let meta: unknown;
      try { meta = JSON.parse(readFileSync(full, "utf8")); } catch { continue; }
      if (typeof meta !== "object" || meta === null) continue;
      const m = meta as {
        url?: string;
        internal_links?: { url?: string }[];
        cta?: { primary?: { href?: string }; secondary?: { href?: string } };
      };
      if (!m.url) continue;
      // CTA hrefs count. A button labelled "Project your retention curve" that
      // lands on a 404 is worse than a dead body link, and checking only
      // internal_links missed every one of them.
      const hrefs = [
        ...(Array.isArray(m.internal_links) ? m.internal_links.map((l) => l?.url) : []),
        m.cta?.primary?.href,
        m.cta?.secondary?.href,
      ];
      for (const href of hrefs) {
        // The fragment is a position on the target, not a separate page.
        const target = (href ?? "").split("#")[0] ?? "";
        if (!target.startsWith("/")) continue;
        out.set(target, [...(out.get(target) ?? []), m.url]);
      }
    }
  };
  walk(CONTENT);
  return out;
}

async function main(): Promise<void> {
  const base = arg("base", "http://127.0.0.1:3320");
  const all = rows();

  // Prove something is listening before probing 191 paths against it. status()
  // turns a connection error into 0, and 0 is not 200, so a server that never
  // started makes every redirect and every link target look broken: 127 dead
  // redirects and 64 dead targets scroll past and the real problem — the wrong
  // port — is nowhere in the output. Ask once, and say so plainly.
  const reachable = await status(`${base}/`, true);
  if (reachable === 0) {
    console.error(`[launch] nothing answered at ${base}`);
    console.error("[launch] start the server first (next start), or pass --base <url>.");
    console.error("[launch] refusing to report 191 false 404s against a port that is down.");
    process.exit(2);
  }

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

  // Internal links, checked against the same running server. Ordered by how
  // many pages cite the broken target: a hub linked from 29 pages is a
  // structural fault, while a one-off is usually a typo in a single page.
  const links = internalLinks();
  const dead: { target: string; from: string[] }[] = [];
  for (const [target, from] of links) {
    if (await status(`${base}${target}`, true) !== 200) dead.push({ target, from });
  }
  dead.sort((a, b) => b.from.length - a.from.length);

  const liveLinks = links.size - dead.length;
  console.log(`[launch] ${liveLinks}/${links.size} internal link target(s) resolve`);

  if (dead.length) {
    console.log(`\nFAIL — ${dead.length} internal link target(s) do not exist:\n`);
    for (const { target, from } of dead.slice(0, 25)) {
      console.log(`    ${target.padEnd(48)} cited by ${String(from.length).padStart(3)} page(s)`);
    }
    if (dead.length > 25) console.log(`    … and ${dead.length - 25} more`);
    console.log(
      `\n    Every one of these is a link from a page we are shipping to a page\n` +
      `    that returns 404. Build the target, or drop the link — a hub that\n` +
      `    404s also strands the children filed under it.`,
    );
  }

  if (notRedirecting.length || landingDead.length || dead.length) {
    console.log("[launch] NOT SAFE TO DEPLOY");
    process.exitCode = 1;
    return;
  }
  console.log("[launch] every redirect lands on a live page — safe to deploy");
}

runScript("launch", main);
