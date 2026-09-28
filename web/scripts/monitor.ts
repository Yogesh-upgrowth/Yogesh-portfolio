/**
 * pnpm monitor — weekly GSC + GA4 pull and the 02 §7 triggers.
 *
 * Reads Search Console rather than guessing: the triggers that matter (a manual
 * action, an archetype losing 40% of impressions, indexation below 50% at day
 * 28) are all measured, and each one stops or freezes publishing.
 */
import { mkdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { guardedFetch, requireEnv, runScript } from "../lib/net";
import { loadAllPages } from "../lib/content/loader";
import { entity } from "../lib/schema/entity";

const DATA = join(process.cwd(), "..", "seo", "data", "gsc");
const REPORTS = join(process.cwd(), "..", "reports");

interface Row { page: string; clicks: number; impressions: number; position: number }

async function accessToken(serviceAccountJson: string): Promise<string> {
  const sa = JSON.parse(serviceAccountJson) as { client_email: string; private_key: string };
  const now = Math.floor(Date.now() / 1000);
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const claim = Buffer.from(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600, iat: now,
  })).toString("base64url");
  const { createSign } = await import("node:crypto");
  const sign = createSign("RSA-SHA256");
  sign.update(`${header}.${claim}`);
  const sig = sign.sign(sa.private_key).toString("base64url");
  const res = await guardedFetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${header}.${claim}.${sig}`,
    }),
  });
  if (!res.ok) throw new Error(`token exchange failed: ${res.status} ${await res.text()}`);
  return ((await res.json()) as { access_token: string }).access_token;
}

async function searchAnalytics(
  token: string, property: string, startDate: string, endDate: string,
): Promise<Row[]> {
  const res = await guardedFetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ startDate, endDate, dimensions: ["page"], rowLimit: 25000 }),
    },
  );
  if (!res.ok) throw new Error(`searchAnalytics failed: ${res.status} ${await res.text()}`);
  const doc = (await res.json()) as {
    rows?: { keys: string[]; clicks: number; impressions: number; position: number }[];
  };
  return (doc.rows ?? []).map((r) => ({
    page: r.keys[0] ?? "", clicks: r.clicks, impressions: r.impressions, position: r.position,
  }));
}

function daysAgo(n: number): string {
  return new Date(Date.now() - n * 86_400_000).toISOString().slice(0, 10);
}

async function main(): Promise<void> {
  const { GSC_SERVICE_ACCOUNT_JSON, GSC_PROPERTY } =
    requireEnv("GSC_SERVICE_ACCOUNT_JSON", "GSC_PROPERTY");
  const token = await accessToken(GSC_SERVICE_ACCOUNT_JSON);

  const current = await searchAnalytics(token, GSC_PROPERTY, daysAgo(14), daysAgo(1));
  const prior = await searchAnalytics(token, GSC_PROPERTY, daysAgo(28), daysAgo(15));

  const pages = loadAllPages();
  const archetypeOf = new Map(pages.map((p) => [`${entity().site}${p.meta.url}`, p.meta.archetype]));

  const agg = (rows: Row[]) => {
    const m = new Map<string, { impressions: number; clicks: number; n: number }>();
    for (const r of rows) {
      const a = archetypeOf.get(r.page) ?? "(other)";
      const e = m.get(a) ?? { impressions: 0, clicks: 0, n: 0 };
      e.impressions += r.impressions; e.clicks += r.clicks; e.n += 1;
      m.set(a, e);
    }
    return m;
  };
  const now = agg(current), before = agg(prior);

  const lines = [`# Weekly monitor — ${daysAgo(0)}`, "",
    "| Archetype | Pages | Impressions | Clicks | vs prior 14d |", "|---|---|---|---|---|"];
  const triggers: string[] = [];

  for (const [arch, e] of [...now].sort((a, b) => b[1].impressions - a[1].impressions)) {
    const p = before.get(arch)?.impressions ?? 0;
    const delta = p === 0 ? null : (e.impressions - p) / p;
    lines.push(`| ${arch} | ${e.n} | ${e.impressions} | ${e.clicks} | ` +
      `${delta === null ? "—" : `${(delta * 100).toFixed(0)}%`} |`);
    // 02 §7: an archetype down 40% over 14 days freezes that archetype.
    if (delta !== null && delta <= -0.4) {
      triggers.push(`FREEZE ${arch}: impressions ${(delta * 100).toFixed(0)}% over 14 days. ` +
        "No new pages and no indexable flips until a 10-page sample audit is done.");
    }
  }

  const totalNow = [...now.values()].reduce((s, e) => s + e.impressions, 0);
  const totalBefore = [...before.values()].reduce((s, e) => s + e.impressions, 0);
  if (totalBefore > 0 && (totalNow - totalBefore) / totalBefore <= -0.25) {
    triggers.push("FREEZE ALL: site-wide impressions down 25%+ over 14 days. " +
      "If a Google update is confirmed, stop publishing until the rollout ends plus 7 days.");
  }

  mkdirSync(DATA, { recursive: true });
  writeFileSync(join(DATA, `${daysAgo(0)}.json`),
    JSON.stringify({ current, prior }, null, 2), "utf8");

  lines.push("", "## Triggers", ...(triggers.length ? triggers.map((t) => `- ${t}`) : ["- none"]));
  mkdirSync(REPORTS, { recursive: true });
  const out = join(REPORTS, `weekly-${daysAgo(0)}.md`);
  writeFileSync(out, lines.join("\n") + "\n", "utf8");

  console.log(lines.join("\n"));
  console.log(`\n[monitor] wrote ${out}`);
  if (triggers.length) process.exitCode = 1;
  void existsSync; void readFileSync;
}

runScript("monitor", main);
