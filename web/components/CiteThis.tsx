/**
 * "Cite this" — 04 §3.1 and §4.
 *
 * Tools and benchmark hubs carry this so the data is reusable, which is the
 * cheapest link there is: people link to what they can quote and embed. The
 * licence line matters as much as the citation — §4 lists open data with a
 * stated licence as one of the things that makes a page citable by AI engines
 * rather than merely readable.
 */
export function CiteThis({
  title, url, verifiedOn, csvHref,
}: {
  title: string; url: string; verifiedOn: string; csvHref?: string;
}) {
  const year = verifiedOn.slice(0, 4);
  const citation = `Yadav, Y. (${year}). ${title}. pmyogesh.com. Retrieved from ${url}`;
  return (
    <section className="cite-this">
      <h2>Cite this</h2>
      <p className="citation"><code>{citation}</code></p>
      {csvHref ? (
        <p>
          <a href={csvHref} download>Download the table as CSV</a> — released under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" rel="license noopener"
             target="_blank">CC BY 4.0</a>. Attribution: pmyogesh.com, verified {verifiedOn}.
        </p>
      ) : null}
      <p className="source-pill">
        Every figure on this page carries its source and the date it was checked.
        If one has gone stale, tell me and it gets corrected with a changelog entry.
      </p>
    </section>
  );
}
