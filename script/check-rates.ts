/**
 * Fails the build when a published price contradicts config/fx.json.
 *
 * The four service prices were originally set at roughly ₹83/$1 and the rate is
 * now ₹95.89, which meant an Indian buyer was quoted about 13% less than a US
 * buyer for identical work. Nothing caught that, because each price was
 * individually plausible. This checks the pair, not the number.
 */
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { OFFERS } from "../shared/services";
import { RATE_CARD } from "../shared/marketplace-services";

/** How far a pair may drift before it is a different price in each currency. */
const TOLERANCE = 0.03;

interface Fx { rate: number | null; as_of: string | null }

function fx(): Fx {
  return JSON.parse(readFileSync("seo/config/fx.json", "utf8")) as Fx;
}

function parsePair(price: string): { usd: number; inr: number } | null {
  const usd = /\$([\d,]+)/.exec(price);
  const inr = /₹([\d,]+)/.exec(price);
  if (!usd || !inr) return null;
  return {
    usd: Number(usd[1]!.replace(/,/g, "")),
    inr: Number(inr[1]!.replace(/,/g, "")),
  };
}

export function checkRates(): void {
  const { rate, as_of } = fx();
  if (rate === null || as_of === null) {
    throw new Error(
      "[rates] seo/config/fx.json has no rate or as_of. Every INR/USD pair on " +
        "the site is unverifiable until it does (G15).",
    );
  }

  const problems: string[] = [];
  for (const o of OFFERS) {
    if (!o.price) continue;
    const pair = parsePair(o.price);
    if (!pair) {
      problems.push(`${o.name}: "${o.price}" does not carry both currencies (G15)`);
      continue;
    }
    const implied = pair.inr / pair.usd;
    const drift = Math.abs(implied - rate) / rate;
    if (drift > TOLERANCE) {
      problems.push(
        `${o.name}: $${pair.usd.toLocaleString()} / ₹${pair.inr.toLocaleString()} ` +
          `implies ₹${implied.toFixed(1)}/$1 against the ₹${rate} reference ` +
          `(${(drift * 100).toFixed(0)}% off) — one currency is quoting a different price`,
      );
    }
  }

  if (RATE_CARD.fx_rate !== rate) {
    problems.push(
      `marketplace RATE_CARD.fx_rate is ${RATE_CARD.fx_rate} but fx.json says ${rate}`,
    );
  }

  if (problems.length) {
    throw new Error(`[rates] ${problems.length} problem(s):\n` +
      problems.map((p) => `  - ${p}`).join("\n"));
  }
  console.log(
    `[rates] ${OFFERS.filter((o) => o.price).length} priced offers consistent at ` +
      `₹${rate}/$1 (${as_of})`,
  );
}

if (import.meta.url === new URL(`file://${process.argv[1]}`).href ||
    process.argv[1] === fileURLToPath(import.meta.url)) {
  checkRates();
}
