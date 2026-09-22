/**
 * Measures every prerendered page against the content standard and reports the
 * shortfall, largest first.
 *
 * Reports rather than fails by default, because the honest answer to a short
 * page is usually "the first-hand material to fill it does not exist yet", and
 * a failing build invites someone to pad it. Set CONTENT_STANDARD=strict to make
 * it blocking once the pages are genuinely written.
 */
import { readFileSync, existsSync, writeFileSync } from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { getAllRoutePaths } from "../shared/seo-data";
import { STANDARD, pageTypeFor, type PageType } from "../shared/content-standard";

const PUBLIC_DIR = path.resolve("dist/public");

function visibleWords(html: string): number {
  const body = (html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return body ? body.split(" ").length : 0;
}

export function checkContentStandard() {
  const rows: { path: string; type: PageType; words: number; min: number; gap: number }[] = [];

  for (const route of getAllRoutePaths()) {
    const file =
      route === "/"
        ? path.join(PUBLIC_DIR, "index.html")
        : path.join(PUBLIC_DIR, route.replace(/^\/+/, ""), "index.html");
    if (!existsSync(file)) continue;
    const type = pageTypeFor(route);
    const band = STANDARD[type];
    if (band.min === 0) continue;
    const words = visibleWords(readFileSync(file, "utf8"));
    rows.push({ path: route, type, words, min: band.min, gap: band.min - words });
  }

  const short = rows.filter((r) => r.gap > 0).sort((a, b) => b.gap - a.gap);
  const meeting = rows.length - short.length;

  console.log(
    `[content] ${meeting}/${rows.length} pages meet the depth standard` +
      (short.length ? `; ${short.length} short by ${short.reduce((s, r) => s + r.gap, 0).toLocaleString()} words in total` : "")
  );
  for (const r of short.slice(0, 12)) {
    console.log(`          ${String(r.gap).padStart(5)} short  ${r.path} (${r.words}/${r.min}, ${r.type})`);
  }
  if (short.length > 12) console.log(`          ...and ${short.length - 12} more`);

  const md =
    `# Content Standard Report\n\n` +
    `_Generated from the prerendered HTML. Nav, header and footer are excluded from the count._\n\n` +
    `- Pages measured: **${rows.length}** (functional pages are exempt)\n` +
    `- Meeting the minimum: **${meeting}**\n` +
    `- Short: **${short.length}**, by **${short.reduce((s, r) => s + r.gap, 0).toLocaleString()}** words in total\n\n` +
    `A short page is not automatically a problem. Where the first-hand material to\n` +
    `fill it does not exist yet, the page staying short is the correct outcome —\n` +
    `padding it would breach the evidence standard and is the failure mode Google's\n` +
    `scaled-content guidance describes.\n\n` +
    (short.length
      ? `## Short of the minimum\n\n| Page | Type | Words | Minimum | Short by |\n|---|---|---|---|---|\n` +
        short.map((r) => `| \`${r.path}\` | ${r.type} | ${r.words} | ${r.min} | ${r.gap} |`).join("\n") +
        "\n\n"
      : `_Every measured page meets its minimum._\n\n`) +
    `## All measured pages\n\n| Page | Type | Words | Minimum |\n|---|---|---|---|\n` +
    rows
      .sort((a, b) => a.path.localeCompare(b.path))
      .map((r) => `| \`${r.path}\` | ${r.type} | ${r.words} | ${r.min} |`)
      .join("\n") +
    "\n";
  writeFileSync(path.resolve("content-standard-report.md"), md, "utf8");

  if (process.env.CONTENT_STANDARD === "strict" && short.length) {
    throw new Error(
      `[content] ${short.length} page(s) below the depth standard and CONTENT_STANDARD=strict is set.`
    );
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  checkContentStandard();
}
