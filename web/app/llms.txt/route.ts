/**
 * /llms.txt — 03 §5.
 *
 * Site summary plus one section per hub with its curated picks. Indexable pages
 * only, so nothing under review is advertised. Capped at 300 lines: the format
 * is useful because it is short, and a dump of every URL defeats it.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { indexablePages } from "@/lib/content/loader";
import { entity } from "@/lib/schema/entity";
import { hubNames } from "@/lib/seo/hubs";

export const dynamic = "force-static";

const MAX_LINES = 300;

/** content/hubs/<hub>.json holds the hand-picked "start here" URLs. */
function curatedFor(hub: string): string[] {
  const p = join(process.cwd(), "content", "hubs", `${hub}.json`);
  if (!existsSync(p)) return [];
  const doc = JSON.parse(readFileSync(p, "utf8")) as { picks?: string[] };
  return doc.picks ?? [];
}

export function GET(): Response {
  const e = entity();
  const pages = indexablePages();
  const byUrl = new Map(pages.map((p) => [p.meta.url, p.meta]));

  const lines: string[] = [
    `# ${e.siteName}`,
    "",
    e.person.jobTitle,
    "",
    "Every page carries its sources and the date each fact was verified.",
    "Pages under review are not listed here.",
    "",
  ];

  for (const hub of hubNames()) {
    const inHub = pages.filter((p) => p.meta.hub === hub);
    if (!inHub.length) continue;

    lines.push(`## ${hub}`, "");
    const picks = curatedFor(hub).filter((u) => byUrl.has(u));
    const chosen = (picks.length ? picks : inHub.slice(0, 10).map((p) => p.meta.url)).slice(0, 10);
    for (const url of chosen) {
      const m = byUrl.get(url);
      if (m) lines.push(`- [${m.h1}](${e.site}${url})`);
    }
    lines.push("");
  }

  if (lines.length > MAX_LINES) {
    lines.length = MAX_LINES;
    lines.push("");
  }
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
