import { LIVE_PUBLIC_PROFILES } from "@shared/profiles";

/**
 * Crawlable list of off-site profiles.
 *
 * This is the half of the backlink loop that is actually under our control. A
 * profile that links here only counts once Google has crawled it; linking out
 * to it from an indexed page is the most reliable way to get that crawl. These
 * are plain dofollow anchors — the profiles are genuinely this person's, so
 * there is nothing to disavow.
 *
 * Renders nothing until a profile is confirmed live, so the section never shows
 * an empty shell or a URL that does not resolve.
 */
export default function ProfilesElsewhere() {
  if (LIVE_PUBLIC_PROFILES.length === 0) return null;

  return (
    <section aria-labelledby="elsewhere-heading" className="pt-10 border-t border-border">
      <h2 id="elsewhere-heading" className="text-2xl font-serif font-bold mb-3">
        Profiles elsewhere
      </h2>
      <p className="text-muted-foreground mb-6">
        The same person, on the platforms where this work gets commissioned.
        Listed here so they can be checked rather than taken on trust.
      </p>
      <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {LIVE_PUBLIC_PROFILES.map((p) => (
          <li key={p.platform}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer me"
              className="text-primary font-medium underline underline-offset-2"
            >
              {p.platform}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
