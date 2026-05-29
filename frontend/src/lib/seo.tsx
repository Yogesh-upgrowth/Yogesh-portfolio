import { Helmet } from "react-helmet-async";

/**
 * Site-wide SEO constants.
 * Inlined here (instead of importing from "@shared/seo-data") because the
 * frontend's shared directory does not ship the sitemap/slug registry.
 */
export const SITE_URL = "https://pmyogesh.com";
export const DEFAULT_OG_IMAGE = "https://replit.com/public/images/opengraph.png";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  publishedAt?: string;
  modifiedAt?: string;
  noindex?: boolean;
  keywords?: string;
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
  keywords,
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
      {keywords && <meta name="keywords" content={keywords} />}
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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@replit" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

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
      name: opts.author || "Yogesh Yadav",
      url: SITE_URL,
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
    name: "Yogesh Yadav — Product Growth & Monetisation Consulting",
    url: SITE_URL,
    serviceType: [
      "Product Strategy Consulting",
      "Growth Consulting",
      "Monetisation Consulting",
      "SEO Strategy",
      "Fintech Product Advisory",
    ],
    areaServed: "Worldwide",
    provider: {
      "@type": "Person",
      name: "Yogesh Yadav",
      url: SITE_URL,
    },
  };
}
