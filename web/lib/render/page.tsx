/**
 * Shared page renderer.
 *
 * Route files stay thin: they declare their own static params from the inventory
 * and hand the URL here. All the archetype dispatch lives in one place, so a new
 * archetype means one case, not a new copy of this logic.
 */
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { loadAllPages, type LoadedPage } from "@/lib/content/loader";
import { inventory, inventoryByUrl } from "@/lib/content/inventory";
import { robotsValue } from "@/lib/schema";
import type { Metadata } from "next";
import {
  CaseStudyLayout, HubLayout, ReferenceLayout, ServiceLayout, ToolLayout,
} from "@/components/layouts";
import type { Fact } from "@/lib/content/schemas";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { ResearchObject } from "@/lib/content/schemas";
import { entity } from "@/lib/schema/entity";

/** URLs with content on disk, for generateStaticParams. */
export function builtUrlsFor(archetype: string): string[] {
  return loadAllPages()
    .filter((p) => p.meta.archetype === archetype)
    .map((p) => p.meta.url);
}

export function pageFor(url: string): LoadedPage | undefined {
  return loadAllPages().find((p) => p.meta.url === url);
}

/** Facts a page cites, from its research object. */
function factsFor(page: LoadedPage): Fact[] {
  const p = join(process.cwd(), "..", "seo", "research", `${page.meta.id}.json`);
  if (!existsSync(p)) return [];
  const parsed = ResearchObject.safeParse(JSON.parse(readFileSync(p, "utf8")));
  if (!parsed.success) return [];
  const want = new Set(page.meta.facts_used);
  return parsed.data.facts.filter((f) => want.has(f.fact_id));
}

export function metadataFor(url: string): Metadata {
  const page = pageFor(url);
  if (!page) return {};
  const m = page.meta;
  const site = entity().site;
  return {
    title: m.title,
    description: m.meta_description,
    alternates: { canonical: `${site}${m.url}` },
    robots: robotsValue(m),
    openGraph: {
      title: m.title,
      description: m.meta_description,
      url: `${site}${m.url}`,
      images: [{ url: `${site}/og?url=${encodeURIComponent(m.url)}` }],
    },
  };
}

/** Breadcrumb trail, titled from the inventory. */
function trailFor(url: string): { url: string; name: string }[] {
  const byUrl = inventoryByUrl();
  const parts = url.split("/").filter(Boolean);
  const out = [{ url: "/", name: "Home" }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    out.push({ url: acc, name: byUrl.get(acc)?.title_hint ?? humanise(part) });
  }
  return out;
}

function humanise(slug: string): string {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/** Children of a hub, from the inventory rather than from disk, so the index is
 *  complete even while pages are still being drafted. */
function hubIndex(hub: string): { url: string; name: string }[] {
  return inventory()
    .filter((r) => r.hub === hub && r.archetype !== "hub")
    .map((r) => ({ url: r.url, name: r.title_hint }));
}

export function renderPage(url: string, body: ReactNode): ReactNode {
  const page = pageFor(url);
  if (!page) notFound();
  const { meta } = page;
  const facts = factsFor(page);
  const trail = trailFor(url);

  switch (meta.archetype) {
    case "hub":
      return (
        <HubLayout
          meta={meta}
          facts={facts}
          picks={[]}
          index={hubIndex(meta.hub)}
        >
          {body}
        </HubLayout>
      );
    case "service":
    case "service-industry":
    case "hire-city":
      return (
        <ServiceLayout meta={meta} facts={facts} trail={trail}>
          {body}
        </ServiceLayout>
      );
    case "tool":
      return (
        <ToolLayout meta={meta} facts={facts} trail={trail} calculator={null}>
          {body}
        </ToolLayout>
      );
    case "case-study":
      return (
        <CaseStudyLayout
          meta={meta}
          facts={facts}
          trail={trail}
          permission="public"
          outcome={[]}
        >
          {body}
        </CaseStudyLayout>
      );
    case "teardown":
    case "compare":
    case "pricing-examples":
      return (
        <ReferenceLayout
          meta={meta}
          facts={facts}
          trail={trail}
          notAffiliatedCompany={humanise(meta.entity_a ?? "the companies named here")}
        >
          {body}
        </ReferenceLayout>
      );
    default:
      return (
        <ReferenceLayout meta={meta} facts={facts} trail={trail}>
          {body}
        </ReferenceLayout>
      );
  }
}
