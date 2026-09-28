/**
 * OG image generation — 03-TECHNICAL-SPEC §5.
 *
 * Title, hub, the Last verified date and the page's headline number. Rendered
 * with next/og (Satori) at 1200x630. No photographs and no gradients: the card
 * has to stay legible as a 300px-wide thumbnail in a Slack unfurl, which is
 * where most of these are actually seen.
 */
import { ImageResponse } from "next/og";
import { pageFor } from "@/lib/render/page";
import { entity } from "@/lib/schema/entity";

export const dynamic = "force-static";

const PAPER = "#FAFAF7";
const INK = "#101010";
const ACCENT = "#D9480F";

/** The number a reader should take away — first figure in the H1, else meta. */
function headlineNumber(text: string): string | null {
  const m = /(?:₹|\$)?\s?\d[\d,.]*\s?(?:%|x|×|M\+?|K\+?|B\+?)?/.exec(text);
  const v = m?.[0]?.trim();
  return v && /\d/.test(v) && v.length > 1 ? v : null;
}

export function GET(request: Request): Response | Promise<Response> {
  const url = new URL(request.url).searchParams.get("url") ?? "/";
  const page = pageFor(url);
  const e = entity();

  const title = page?.meta.h1 ?? e.siteName;
  const hub = page?.meta.hub ?? "";
  const verified = page?.meta.refreshed_on ?? "";
  const number = page ? headlineNumber(page.meta.h1) ?? headlineNumber(page.meta.meta_description) : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "space-between", background: PAPER, color: INK,
          padding: "64px 72px", fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, opacity: 0.7 }}>
          <span>{e.siteName}</span>
          {hub ? <span style={{ textTransform: "uppercase", letterSpacing: 2 }}>{hub}</span> : null}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {number ? (
            <span style={{ fontSize: 96, color: ACCENT, lineHeight: 1 }}>{number}</span>
          ) : null}
          <span style={{ fontSize: number ? 44 : 60, lineHeight: 1.15 }}>
            {title.length > 110 ? `${title.slice(0, 107)}…` : title}
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, opacity: 0.7 }}>
          <span>{verified ? `Last verified ${verified}` : e.person.name}</span>
          <span style={{ color: ACCENT }}>Sources on the page</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
