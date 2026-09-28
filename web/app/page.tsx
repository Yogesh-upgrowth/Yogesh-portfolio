import { inventory } from "@/lib/content/inventory";
import { assertCorpusConsistent, loadAllPages } from "@/lib/content/loader";

/**
 * Wave 0 status page. It exists so `next build` exercises the inventory loader
 * and the corpus consistency check — a broken corpus fails the build here
 * rather than shipping a hole.
 */
export default function Home() {
  const rows = inventory();
  assertCorpusConsistent();
  const pages = loadAllPages();

  const byWave = new Map<number, number>();
  const byArchetype = new Map<string, number>();
  for (const r of rows) {
    byWave.set(r.wave, (byWave.get(r.wave) ?? 0) + 1);
    byArchetype.set(r.archetype, (byArchetype.get(r.archetype) ?? 0) + 1);
  }

  return (
    <main>
      <h1>Wave 0</h1>
      <p>
        {rows.length} inventory rows, {pages.length} with content on disk. The
        inventory is generated from <code>seo/seeds/*.json</code>; nothing is
        hand-edited.
      </p>

      <h2>By wave</h2>
      <table>
        <thead>
          <tr><th>Wave</th><th>Rows</th></tr>
        </thead>
        <tbody>
          {[...byWave].sort((a, b) => a[0] - b[0]).map(([w, n]) => (
            <tr key={w}><td>Wave {w}</td><td>{n}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>By archetype</h2>
      <table>
        <thead>
          <tr><th>Archetype</th><th>Rows</th></tr>
        </thead>
        <tbody>
          {[...byArchetype].sort((a, b) => b[1] - a[1]).map(([a, n]) => (
            <tr key={a}><td>{a}</td><td>{n}</td></tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
