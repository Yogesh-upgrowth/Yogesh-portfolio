import { Helmet } from "react-helmet-async";
import { SITE_URL, DEFAULT_OG_IMAGE, OG_IMAGE_ALT } from "@shared/seo-data";
import gitDates from "@shared/git-dates.json";

/** Stable @id for the single Person node, referenced as author across the site. */
export const PERSON_ID = `${SITE_URL}/#person`;

/**
 * Single source of truth for off-site identity. Google resolves a person as an
 * entity by corroborating the same profile URLs across a site; three different
 * LinkedIn URLs in three files reads as three weak signals instead of one strong
 * one. Every LinkedIn link in the UI imports LINKEDIN_URL from here.
 */
export const LINKEDIN_URL = "https://www.linkedin.com/in/yogesh-productmanager/";
export const CONTACT_EMAIL = "yogesh.productmanager@gmail.com";

export const SAME_AS = [LINKEDIN_URL];

/** The git commit date (YYYY-MM-DD) of a route's source file, if known. */
export function getModifiedDate(path: string): string | undefined {
  const iso = (gitDates as Record<string, string>)[path];
  return iso ? iso.slice(0, 10) : undefined;
}

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedAt?: string;
  modifiedAt?: string;
  noindex?: boolean;
  schema?: object | object[];
}

/**
 * Normalize a path to produce a canonical, duplicate-free URL.
 * - strips query strings and UTM parameters
 * - strips hash fragments
 * - lowercases the path (origin already enforces https + no-www via SITE_URL)
 * - removes trailing slash (except root "/")
 * - ensures leading slash
 */
export function normalizeCanonicalPath(input: string): string {
  if (!input) return "/";
  let p = input.split("#")[0].split("?")[0];
  if (!p.startsWith("/")) p = "/" + p;
  p = p.toLowerCase();
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export function Seo({
  title,
  description,
  path,
  image,
  type = "website",
  publishedAt,
  modifiedAt,
  noindex = false,
  schema,
}: SeoProps) {
  const url = `${SITE_URL}${normalizeCanonicalPath(path)}`;
  const ogImage =
    image && image.startsWith("http") ? image : DEFAULT_OG_IMAGE;

  const schemaArray = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1"
        }
      />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Yogesh Yadav" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={OG_IMAGE_ALT} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />

      {publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {modifiedAt && (
        <meta property="article:modified_time" content={modifiedAt} />
      )}

      {schemaArray.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(
            schemaArray.length === 1 ? schemaArray[0] : schemaArray
          )}
        </script>
      )}
    </Helmet>
  );
}

/* ── Schema builders ─────────────────────────────────────── */

/** Person node — the site's central identity, referenced by author/founder. */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Yogesh Yadav",
    url: `${SITE_URL}/`,
    image: DEFAULT_OG_IMAGE,
    jobTitle: "Product Growth & Monetisation Consultant",
    description:
      "Product Growth & Monetisation Consultant with 9+ years scaling Fintech, Mobility, Marketplaces and consumer internet products.",
    email: `mailto:${CONTACT_EMAIL}`,
    nationality: "Indian",
    knowsAbout: [
      "Product Management",
      "Monetisation",
      "Growth",
      "Fintech",
      "SEO Strategy",
      "Marketplaces",
    ],
    sameAs: SAME_AS,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "Yogesh Yadav",
    publisher: { "@id": PERSON_ID },
    inLanguage: "en-US",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Yogesh Yadav Consulting",
    url: `${SITE_URL}/`,
    logo: DEFAULT_OG_IMAGE,
    founder: { "@id": PERSON_ID },
    sameAs: SAME_AS,
  };
}

/** Site-wide graph for the homepage: Person + WebSite + Organization. */
export function homeSchema() {
  return [personSchema(), websiteSchema(), organizationSchema()];
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

/** Normalize loose date strings like "Mar 2026" / "January 2026" to ISO YYYY-MM-DD. */
export function toIsoDate(input: string | undefined): string {
  if (!input) return new Date().toISOString().split("T")[0];
  if (/^\d{4}-\d{2}-\d{2}/.test(input)) return input.slice(0, 10);
  const d = new Date(input);
  if (!isNaN(d.getTime())) return d.toISOString().split("T")[0];
  return new Date().toISOString().split("T")[0];
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedAt: string;
  modifiedAt?: string;
  author?: string;
  section?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    image:
      opts.image && opts.image.startsWith("http")
        ? opts.image
        : DEFAULT_OG_IMAGE,
    datePublished: toIsoDate(opts.publishedAt),
    dateModified: toIsoDate(opts.modifiedAt || opts.publishedAt),
    articleSection: opts.section,
    author: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: opts.author || "Yogesh Yadav",
      url: `${SITE_URL}/`,
    },
    publisher: {
      "@type": "Person",
      name: "Yogesh Yadav",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: DEFAULT_OG_IMAGE,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${opts.path}`,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: "Yogesh Yadav — Product Growth & Monetisation Consulting",
    url: `${SITE_URL}/contact`,
    serviceType: [
      "Product Strategy Consulting",
      "Growth Consulting",
      "Monetisation Consulting",
      "SEO Strategy",
      "Fintech Product Advisory",
    ],
    areaServed: "India",
    provider: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Yogesh Yadav",
      url: `${SITE_URL}/`,
    },
  };
}
