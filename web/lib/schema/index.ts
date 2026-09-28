/**
 * JSON-LD builders — 03-TECHNICAL-SPEC §5, types per 01-PAGE-ARCHETYPES.
 *
 * One graph per page. dateModified is refreshed_on and datePublished is
 * published_on, both from meta, so a page cannot claim freshness the gates have
 * not seen. Review, AggregateRating and HowTo are unreachable by construction:
 * there is no builder for them, and PageMeta refuses them.
 */
import type { PageMeta } from "../content/schemas";
import { entity, personNode, organizationNode, websiteNode, PERSON_ID, ORG_ID } from "./entity";

export interface JsonLdGraph {
  "@context": "https://schema.org";
  "@graph": Record<string, unknown>[];
}

function abs(path: string): string {
  return `${entity().site}${path}`;
}

/** Crumbs from the URL, titled from the inventory where a row exists. */
export function breadcrumbNode(meta: PageMeta, titleFor: (url: string) => string | undefined) {
  const parts = meta.url.split("/").filter(Boolean);
  const items = [{ name: "Home", url: entity().site }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    items.push({ name: titleFor(acc) ?? humanise(part), url: abs(acc) });
  }
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(meta.url)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

function humanise(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function faqNode(meta: PageMeta) {
  return {
    "@type": "FAQPage",
    "@id": `${abs(meta.url)}#faq`,
    mainEntity: (meta.faq ?? []).map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function articleNode(meta: PageMeta) {
  return {
    "@type": "Article",
    "@id": `${abs(meta.url)}#article`,
    headline: meta.h1,
    description: meta.meta_description,
    url: abs(meta.url),
    inLanguage: "en",
    author: { "@id": `${entity().site}/about${PERSON_ID}` },
    publisher: { "@id": `${entity().site}/${ORG_ID}` },
    dateModified: meta.refreshed_on,
    ...(meta.published_on ? { datePublished: meta.published_on } : {}),
    ...(meta.visuals.length
      ? { image: meta.visuals.map((v) => imageObjectNode(meta, v)) }
      : {}),
  };
}

/** ImageObject with creator → Person, per §5, so our charts are attributable. */
function imageObjectNode(meta: PageMeta, v: PageMeta["visuals"][number]) {
  return {
    "@type": "ImageObject",
    "@id": `${abs(meta.url)}#img-${v.src.replace(/[^a-z0-9]+/gi, "-")}`,
    contentUrl: /^https?:/.test(v.src) ? v.src : abs(v.src),
    description: v.alt,
    ...(v.caption ? { caption: v.caption } : {}),
    creator: { "@id": `${entity().site}/about${PERSON_ID}` },
  };
}

function serviceNode(meta: PageMeta) {
  const e = entity();
  return {
    "@type": "Service",
    "@id": `${abs(meta.url)}#service`,
    name: meta.h1,
    description: meta.meta_description,
    url: abs(meta.url),
    provider: { "@id": `${e.site}/about${PERSON_ID}` },
    areaServed: e.organization.areaServed,
    ...(meta.entity_b ? { about: { "@type": "Thing", name: humanise(meta.entity_b) } } : {}),
  };
}

function definedTermNode(meta: PageMeta) {
  return {
    "@type": "DefinedTerm",
    "@id": `${abs(meta.url)}#term`,
    name: meta.h1,
    description: meta.meta_description,
    url: abs(meta.url),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": abs("/glossary"),
      name: "Product growth and monetization glossary",
    },
  };
}

function collectionPageNode(meta: PageMeta, items: { url: string; name: string }[]) {
  return {
    "@type": "CollectionPage",
    "@id": `${abs(meta.url)}#collection`,
    name: meta.h1,
    description: meta.meta_description,
    url: abs(meta.url),
    isPartOf: { "@id": `${entity().site}/#site` },
    mainEntity: {
      "@type": "ItemList",
      // §5 caps the list at the first 50 items.
      itemListElement: items.slice(0, 50).map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: abs(it.url),
      })),
    },
  };
}

function webApplicationNode(meta: PageMeta) {
  return {
    "@type": "WebApplication",
    "@id": `${abs(meta.url)}#app`,
    name: meta.h1,
    description: meta.meta_description,
    url: abs(meta.url),
    applicationCategory: "BusinessApplication",
    // A free calculator: stating the price avoids an ambiguous offer.
    offers: { "@type": "Offer", price: 0, priceCurrency: "INR" },
    author: { "@id": `${entity().site}/about${PERSON_ID}` },
  };
}

export interface GraphOptions {
  /** Hub children, for CollectionPage + ItemList. */
  items?: { url: string; name: string }[];
  /** Resolves a URL to its inventory title for breadcrumb names. */
  titleFor?: (url: string) => string | undefined;
}

const BANNED = new Set(["Review", "AggregateRating", "HowTo"]);

export function buildGraph(meta: PageMeta, opts: GraphOptions = {}): JsonLdGraph {
  const banned = meta.schema_types.filter((t) => BANNED.has(t));
  if (banned.length) {
    throw new Error(`[schema] ${meta.url} declares banned type(s): ${banned.join(", ")}`);
  }
  const titleFor = opts.titleFor ?? (() => undefined);
  const nodes: Record<string, unknown>[] = [];
  const isHub = meta.archetype === "hub";

  for (const t of meta.schema_types) {
    switch (t) {
      case "Article": nodes.push(articleNode(meta)); break;
      case "Service": nodes.push(serviceNode(meta)); break;
      case "DefinedTerm": nodes.push(definedTermNode(meta)); break;
      case "WebApplication": nodes.push(webApplicationNode(meta)); break;
      case "CollectionPage": nodes.push(collectionPageNode(meta, opts.items ?? [])); break;
      case "Person": nodes.push(personNode()); break;
      case "Organization": nodes.push(organizationNode()); break;
      case "WebSite": nodes.push(websiteNode()); break;
      case "BreadcrumbList": break;   // added below, once
      case "ItemList": break;          // nested inside CollectionPage
      case "FAQPage": break;           // added below, only when a FAQ exists
      default:
        throw new Error(
          `[schema] ${meta.url} declares "${t}", which has no builder. ` +
            "Add one here and to 01-PAGE-ARCHETYPES together.",
        );
    }
  }

  // BreadcrumbList on every non-hub page (§5).
  if (!isHub) nodes.push(breadcrumbNode(meta, titleFor));

  // FAQPage only when the FAQ actually exists — G09 fails either mismatch.
  if ((meta.faq?.length ?? 0) >= 3) nodes.push(faqNode(meta));

  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Meta robots value. noindex until the batch is flipped (CLAUDE.md §1.3). */
export function robotsValue(meta: PageMeta): string {
  return meta.indexable && meta.status === "indexable"
    ? "index,follow,max-snippet:-1,max-image-preview:large"
    : "noindex,follow";
}
