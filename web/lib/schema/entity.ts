/**
 * Sitewide entity nodes — 03-TECHNICAL-SPEC §5.
 *
 * sameAs comes from seo/config/entity.json, which starts empty on purpose. A
 * profile URL is a claim that the entity owns that profile; putting an
 * unverified one in structured data is a claim we cannot back. The Vite site
 * enforces the same rule through script/check-profiles.ts.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

export interface EntityConfig {
  site: string;
  siteName: string;
  person: {
    name: string; jobTitle: string; url: string; worksFor: string;
    addressLocality: string; addressRegion: string; addressCountry: string;
    knowsAbout: string[]; sameAs: string[];
  };
  organization: { name: string; url: string; areaServed: string[] };
}

let cached: EntityConfig | null = null;

export function entity(): EntityConfig {
  if (cached) return cached;
  const p = join(process.cwd(), "..", "seo", "config", "entity.json");
  const doc = JSON.parse(readFileSync(p, "utf8")) as EntityConfig;
  for (const url of doc.person.sameAs) {
    if (!/^https:\/\//.test(url)) {
      throw new Error(`[schema] sameAs entry "${url}" is not an https URL`);
    }
  }
  cached = doc;
  return doc;
}

export const PERSON_ID = "#yogesh";
export const ORG_ID = "#org";
export const SITE_ID = "#site";

export function personNode() {
  const e = entity();
  return {
    "@type": "Person",
    "@id": `${e.site}/about${PERSON_ID}`,
    name: e.person.name,
    jobTitle: e.person.jobTitle,
    url: e.person.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: e.person.addressLocality,
      addressRegion: e.person.addressRegion,
      addressCountry: e.person.addressCountry,
    },
    knowsAbout: e.person.knowsAbout,
    worksFor: { "@id": `${e.site}/${ORG_ID}` },
    // Omitted entirely when empty — an empty array still asserts "no profiles".
    ...(e.person.sameAs.length ? { sameAs: e.person.sameAs } : {}),
  };
}

export function organizationNode() {
  const e = entity();
  return {
    "@type": "Organization",
    "@id": `${e.site}/${ORG_ID}`,
    name: e.organization.name,
    url: e.organization.url,
    areaServed: e.organization.areaServed,
    founder: { "@id": `${e.site}/about${PERSON_ID}` },
  };
}

export function websiteNode() {
  const e = entity();
  return {
    "@type": "WebSite",
    "@id": `${e.site}/${SITE_ID}`,
    url: e.site,
    name: e.siteName,
    publisher: { "@id": `${e.site}/${ORG_ID}` },
  };
}
