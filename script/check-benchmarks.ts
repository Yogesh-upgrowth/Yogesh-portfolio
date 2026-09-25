/**
 * Refuses to build a benchmark page whose numbers cannot be traced.
 * A figure without a publisher and a URL does not ship.
 */
import { pathToFileURL } from "url";
import { DATA, METRICS, INDUSTRIES, RETENTION_CONTEXT, benchmarkRoutes } from "../shared/benchmarks";

export function checkBenchmarks() {
  const errors: string[] = [];
  let provisional = 0;
  const metricSlugs = new Set(METRICS.map((m) => m.slug));
  const industrySlugs = new Set(INDUSTRIES.map((i) => i.slug));

  for (const [key, points] of Object.entries(DATA)) {
    const [m, i] = key.split("/");
    if (!metricSlugs.has(m)) errors.push(`"${key}" references unknown metric "${m}"`);
    if (!industrySlugs.has(i)) errors.push(`"${key}" references unknown industry "${i}"`);
    if (!points.length) errors.push(`"${key}" has no datapoints`);
    points.forEach((p, n) => {
      const where = `${key}[${n}]`;
      if (!p.source?.publisher) errors.push(`${where} has no publisher`);
      if (!p.source?.url?.startsWith("http")) errors.push(`${where} has no source URL`);
      if (!p.source?.asOf) errors.push(`${where} has no as-of date`);
      const v = p.value;
      if (Array.isArray(v) && v[0] > v[1]) errors.push(`${where} range is inverted`);
      if (p.needsPrimaryCheck) provisional++;
    });
  }
  for (const c of RETENTION_CONTEXT) {
    if (!c.source?.url?.startsWith("http")) errors.push(`context "${c.finding}" has no source URL`);
  }

  if (errors.length) {
    throw new Error("[benchmarks] untraceable figures:\n  - " + errors.join("\n  - "));
  }
  const routes = benchmarkRoutes();
  const disputed = Object.values(DATA).filter((p) => p.length > 1).length;
  console.log(
    `[benchmarks] ${routes.length} pages, ${Object.values(DATA).flat().length} datapoints, all sourced; ${disputed} cell(s) where sources disagree`
  );
  if (provisional) {
    console.log(
      `[benchmarks] ${provisional} datapoint(s) marked needsPrimaryCheck — taken from a publisher summary, not read against the primary report`
    );
  }
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  checkBenchmarks();
}
