/**
 * Guards the service pages against becoming the thing they were built to avoid:
 * keyword pages with nothing behind them.
 *
 * Fails the build if a service cites fewer than the minimum number of case
 * studies, cites one that does not exist, or duplicates another service's proof
 * wholesale (which would mean two pages making the same argument).
 */
import { pathToFileURL } from "url";
import { SERVICES, MIN_CASE_STUDIES_PER_SERVICE } from "../shared/services";
import { caseStudies } from "../client/src/data/caseStudies";
import { BLOG_SLUGS } from "../shared/seo-data";

export function checkServices() {
  const errors: string[] = [];
  const known = new Set(caseStudies.map((c) => c.slug));

  for (const s of SERVICES) {
    if (s.caseStudies.length < MIN_CASE_STUDIES_PER_SERVICE) {
      errors.push(
        `"${s.slug}" cites ${s.caseStudies.length} case studies; the minimum is ${MIN_CASE_STUDIES_PER_SERVICE}. ` +
          `A vertical without that much published work behind it should not have a page yet.`
      );
    }
    for (const cs of s.caseStudies) {
      if (!known.has(cs)) errors.push(`"${s.slug}" cites case study "${cs}", which does not exist`);
    }
    if (new Set(s.caseStudies).size !== s.caseStudies.length) {
      errors.push(`"${s.slug}" cites the same case study more than once`);
    }
    for (const p of s.relatedPosts) {
      if (!BLOG_SLUGS.includes(p)) errors.push(`"${s.slug}" links to post "${p}", which does not exist`);
    }
  }

  // Two services whose proof is identical are one service with two URLs.
  for (let i = 0; i < SERVICES.length; i++) {
    for (let j = i + 1; j < SERVICES.length; j++) {
      const a = new Set(SERVICES[i].caseStudies);
      const shared = SERVICES[j].caseStudies.filter((c) => a.has(c));
      if (shared.length === SERVICES[j].caseStudies.length) {
        errors.push(
          `"${SERVICES[j].slug}" cites no case study that "${SERVICES[i].slug}" does not — they are the same page`
        );
      }
    }
  }

  if (errors.length) {
    throw new Error("[services] service pages are not adequately evidenced:\n  - " + errors.join("\n  - "));
  }
  console.log(
    `[services] ${SERVICES.length} services verified, each citing ${MIN_CASE_STUDIES_PER_SERVICE}+ real case studies`
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  checkServices();
}
