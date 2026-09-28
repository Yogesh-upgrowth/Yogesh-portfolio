import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { note, noteBody, notes } from "@/lib/notes";
import { entity, personNode } from "@/lib/schema/entity";
import { AuthorBox, CTABand } from "@/components/primitives";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return notes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const n = note(slug);
  if (!n) return {};
  return {
    title: n.title,
    description: n.description,
    alternates: { canonical: `${entity().site}/notes/${slug}` },
    openGraph: {
      title: n.title, description: n.description,
      url: `${entity().site}/notes/${slug}`, type: "article",
    },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const n = note(slug);
  const body = noteBody(slug);
  if (!n || !body) notFound();

  const e = entity();
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${e.site}/notes/${slug}#article`,
        headline: n.title,
        description: n.description,
        url: `${e.site}/notes/${slug}`,
        datePublished: n.date,
        author: { "@id": `${e.site}/about#yogesh` },
        inLanguage: "en",
      },
      personNode(),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <main>
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/notes">Notes</a></li>
            <li><span aria-current="page">{n.title}</span></li>
          </ol>
        </nav>
        <h1>{n.title}</h1>
        <p className="last-verified">
          <span className="source-pill">{n.category} · {n.date} · {n.readTime}</span>
        </p>
        {/* Bodies are the migrated articles, authored in this repo. */}
        <div className="note-body" dangerouslySetInnerHTML={{ __html: body }} />
        <AuthorBox
          name={e.person.name}
          role={e.person.jobTitle}
          proof={[
            "Nine years in product across Indian fintech, mobility and consumer apps",
            "Scaled a consumer product from 3.8M to 45M+ monthly active users",
          ]}
        />
        <CTABand
          cta={{
            primary: { label: "Book a product growth call", href: "/work-with-me" },
            secondary: { label: "Read the case studies", href: "/case-studies" },
          }}
        />
      </main>
    </>
  );
}
