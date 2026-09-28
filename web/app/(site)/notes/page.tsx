import type { Metadata } from "next";
import { notes } from "@/lib/notes";
import { entity } from "@/lib/schema/entity";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Notes — product craft, career and AI",
  description:
    "Essays on product management craft, career and AI. Kept separate from the reference sections, which carry sourced data rather than opinion.",
  alternates: { canonical: `${entity().site}/notes` },
};

export default function NotesIndex() {
  const all = notes();
  return (
    <main>
      <h1>Notes</h1>
      <div className="answer-box">
        Essays on product craft, career and AI. These are opinion pieces, kept
        apart from the reference sections — those carry sourced data and a
        verification date, and these do not.
      </div>
      <ul className="notes-index">
        {all.map((n) => (
          <li key={n.slug}>
            <a href={`/notes/${n.slug}`}>{n.title}</a>
            <p className="why">{n.description}</p>
            <p className="source-pill">
              {n.category} · {n.date} · {n.readTime}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
