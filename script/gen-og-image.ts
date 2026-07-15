/**
 * Generates the branded 1200x630 Open Graph image at client/public/og-image.png.
 * Run manually when the branding changes:  tsx script/gen-og-image.ts
 * (Requires the @resvg/resvg-js devDependency.)
 */
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "fs";
import path from "path";

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0B1220"/>
      <stop offset="100%" stop-color="#111C33"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="16" height="${H}" fill="#2563EB"/>
  <text x="80" y="150" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" letter-spacing="6" fill="#60A5FA">PMYOGESH.COM</text>
  <text x="78" y="300" font-family="Segoe UI, Arial, sans-serif" font-size="104" font-weight="700" fill="#FFFFFF">Yogesh Yadav</text>
  <rect x="82" y="340" width="120" height="8" rx="4" fill="#2563EB"/>
  <text x="80" y="430" font-family="Segoe UI, Arial, sans-serif" font-size="52" font-weight="600" fill="#E2E8F0">Product Growth &amp; Monetisation</text>
  <text x="80" y="498" font-family="Segoe UI, Arial, sans-serif" font-size="52" font-weight="600" fill="#E2E8F0">Consultant</text>
  <text x="80" y="580" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="400" fill="#94A3B8">Fintech &#183; Mobility &#183; Consumer Internet &#183; 9+ years</text>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: W },
  font: { loadSystemFonts: true },
});
const png = resvg.render().asPng();

const out = path.resolve("client/public/og-image.png");
writeFileSync(out, png);
console.log(`[og-image] wrote ${out} (${png.length} bytes, ${W}x${H})`);
