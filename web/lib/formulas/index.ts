/**
 * Tool maths — 03-TECHNICAL-SPEC §2 (`lib/formulas`), unit-tested before any
 * tool page ships (CLAUDE.md §2).
 *
 * Every function is pure and takes explicit units. The reason for that rigour:
 * the ARPU unit bug on the Vite site produced "0.5–9%" where "$0.5–$9" was
 * meant, and a gaming ARPU range spanning $0.02–$57.64 mixed daily with annual
 * figures. Both were arithmetic that ran fine and answers that were wrong, so
 * these take a `basis` or an explicit period wherever ambiguity is possible.
 */

export type Basis = "daily" | "weekly" | "monthly" | "annual";

const PER_YEAR: Record<Basis, number> = { daily: 365, weekly: 52, monthly: 12, annual: 1 };

function positive(name: string, v: number): number {
  if (!Number.isFinite(v)) throw new Error(`${name} must be a finite number`);
  if (v < 0) throw new Error(`${name} cannot be negative`);
  return v;
}

function rate(name: string, v: number): number {
  if (!Number.isFinite(v)) throw new Error(`${name} must be a finite number`);
  if (v < 0 || v > 1) throw new Error(`${name} must be a rate between 0 and 1, got ${v}`);
  return v;
}

/** Convert a per-period figure to another basis. */
export function rebase(value: number, from: Basis, to: Basis): number {
  positive("value", value);
  return (value * PER_YEAR[from]) / PER_YEAR[to];
}

/* ── ARPU / ARPPU ───────────────────────────────────────────────────────── */

export function arpu(revenue: number, activeUsers: number): number {
  positive("revenue", revenue);
  if (activeUsers <= 0) throw new Error("activeUsers must be greater than zero");
  return revenue / activeUsers;
}

export function arppu(revenue: number, payingUsers: number): number {
  positive("revenue", revenue);
  if (payingUsers <= 0) throw new Error("payingUsers must be greater than zero");
  return revenue / payingUsers;
}

/** ARPU = ARPPU × paid share. Useful as a cross-check on reported figures. */
export function arpuFromArppu(arppuValue: number, paidShare: number): number {
  return positive("arppu", arppuValue) * rate("paidShare", paidShare);
}

/* ── Churn and lifetime ─────────────────────────────────────────────────── */

/**
 * Average lifetime in periods, from a constant per-period churn rate.
 * Constant churn is an assumption, not a fact: real curves flatten, so this
 * understates lifetime for cohorts that survive the first periods. Tool pages
 * say so next to the result.
 */
export function lifetimePeriods(churnPerPeriod: number): number {
  const c = rate("churnPerPeriod", churnPerPeriod);
  if (c === 0) return Infinity;
  return 1 / c;
}

export function monthlyChurnFromAnnual(annualChurn: number): number {
  const a = rate("annualChurn", annualChurn);
  return 1 - Math.pow(1 - a, 1 / 12);
}

export function annualChurnFromMonthly(monthlyChurn: number): number {
  const m = rate("monthlyChurn", monthlyChurn);
  return 1 - Math.pow(1 - m, 12);
}

/* ── LTV ────────────────────────────────────────────────────────────────── */

export interface LtvInput {
  /** Revenue per user per period, in the same currency as the result. */
  arpuPerPeriod: number;
  churnPerPeriod: number;
  /** Gross margin as a rate. Revenue LTV is margin 1. */
  grossMargin?: number;
  /** Per-period discount rate. Omit for undiscounted LTV. */
  discountPerPeriod?: number;
}

/**
 * LTV = ARPU × margin / (churn + discount).
 *
 * The discount term is why this is not simply ARPU × lifetime: a lifetime of
 * 40 months is worth materially less than 40 × ARPU once money has a cost.
 */
export function ltv({
  arpuPerPeriod, churnPerPeriod, grossMargin = 1, discountPerPeriod = 0,
}: LtvInput): number {
  positive("arpuPerPeriod", arpuPerPeriod);
  const c = rate("churnPerPeriod", churnPerPeriod);
  const m = rate("grossMargin", grossMargin);
  const d = rate("discountPerPeriod", discountPerPeriod);
  const denom = c + d;
  if (denom === 0) return Infinity;
  return (arpuPerPeriod * m) / denom;
}

/* ── CAC, payback, ratios ───────────────────────────────────────────────── */

export function cac(spend: number, newCustomers: number): number {
  positive("spend", spend);
  if (newCustomers <= 0) throw new Error("newCustomers must be greater than zero");
  return spend / newCustomers;
}

export function ltvToCac(ltvValue: number, cacValue: number): number {
  positive("ltv", ltvValue);
  if (cacValue <= 0) throw new Error("cac must be greater than zero");
  return ltvValue / cacValue;
}

/**
 * CAC payback in periods, on contribution margin rather than revenue.
 * Paying back on revenue flatters the number by exactly the cost of service.
 */
export function cacPaybackPeriods(
  cacValue: number, arpuPerPeriod: number, grossMargin = 1,
): number {
  positive("cac", cacValue);
  const contribution = positive("arpuPerPeriod", arpuPerPeriod) * rate("grossMargin", grossMargin);
  if (contribution === 0) return Infinity;
  return cacValue / contribution;
}

/* ── Subscription revenue ───────────────────────────────────────────────── */

export function mrr(subscribers: number, arpuPerMonth: number): number {
  return positive("subscribers", subscribers) * positive("arpuPerMonth", arpuPerMonth);
}

export function arrFromMrr(mrrValue: number): number {
  return positive("mrr", mrrValue) * 12;
}

/** Net revenue retention. Contraction and churn are subtracted, not netted in. */
export function nrr({
  starting, expansion, contraction, churned,
}: {
  starting: number; expansion: number; contraction: number; churned: number;
}): number {
  const s = positive("starting", starting);
  if (s === 0) throw new Error("starting revenue must be greater than zero");
  return (s + positive("expansion", expansion) - positive("contraction", contraction)
    - positive("churned", churned)) / s;
}

/** Gross revenue retention ignores expansion, so it can never exceed 1. */
export function grr({
  starting, contraction, churned,
}: {
  starting: number; contraction: number; churned: number;
}): number {
  const s = positive("starting", starting);
  if (s === 0) throw new Error("starting revenue must be greater than zero");
  return Math.min(1, (s - positive("contraction", contraction) - positive("churned", churned)) / s);
}

/* ── Store fees ─────────────────────────────────────────────────────────── */

export interface StoreFeeInput {
  grossPrice: number;
  /** Commission as a rate: 0.30 standard, 0.15 small-business / year-two subs. */
  commission: number;
  /** Local tax already included in the displayed price, as a rate. */
  taxIncluded?: number;
}

/**
 * Net revenue after store commission, with tax removed first.
 *
 * Order matters and is the usual mistake: in India the displayed price includes
 * GST, and commission applies to the price net of tax. Taking commission off the
 * gross first understates net revenue.
 */
export function netAfterStoreFee({
  grossPrice, commission, taxIncluded = 0,
}: StoreFeeInput): { net: number; tax: number; fee: number } {
  const g = positive("grossPrice", grossPrice);
  const c = rate("commission", commission);
  const t = rate("taxIncluded", taxIncluded);
  const tax = g - g / (1 + t);
  const netOfTax = g - tax;
  const fee = netOfTax * c;
  return { net: netOfTax - fee, tax, fee };
}

/* ── Conversion and funnels ─────────────────────────────────────────────── */

export function conversionRate(converted: number, total: number): number {
  positive("converted", converted);
  if (total <= 0) throw new Error("total must be greater than zero");
  if (converted > total) throw new Error("converted cannot exceed total");
  return converted / total;
}

/** Overall rate through a funnel of per-step rates. */
export function funnelRate(steps: number[]): number {
  if (!steps.length) throw new Error("funnelRate needs at least one step");
  return steps.reduce((acc, s, i) => acc * rate(`step ${i + 1}`, s), 1);
}

/* ── Retention curves ───────────────────────────────────────────────────── */

/**
 * Power-law retention fitted through two observed points, then projected.
 *
 * Power law rather than exponential because real retention curves flatten;
 * an exponential fit through D1 and D30 predicts approximately zero by D90,
 * which no live product matches.
 */
export function projectRetention(
  { day1, day30 }: { day1: number; day30: number }, targetDay: number,
): number {
  const r1 = rate("day1", day1);
  const r30 = rate("day30", day30);
  if (targetDay < 1) throw new Error("targetDay must be at least 1");
  if (r1 === 0) return 0;
  // r(d) = r1 * d^b  ⇒  b = ln(r30/r1) / ln(30)
  const b = Math.log(r30 / r1) / Math.log(30);
  return Math.min(1, r1 * Math.pow(targetDay, b));
}

/* ── Ads ────────────────────────────────────────────────────────────────── */

export function ecpm(revenue: number, impressions: number): number {
  positive("revenue", revenue);
  if (impressions <= 0) throw new Error("impressions must be greater than zero");
  return (revenue / impressions) * 1000;
}

export function adArpu(
  { ecpmValue, impressionsPerUser }: { ecpmValue: number; impressionsPerUser: number },
): number {
  return (positive("ecpm", ecpmValue) / 1000) * positive("impressionsPerUser", impressionsPerUser);
}

/* ── Pricing ────────────────────────────────────────────────────────────── */

/** Arc price elasticity of demand. Negative for a normal good. */
export function priceElasticity(
  { q1, q2, p1, p2 }: { q1: number; q2: number; p1: number; p2: number },
): number {
  positive("q1", q1); positive("q2", q2); positive("p1", p1); positive("p2", p2);
  if (p1 === p2) throw new Error("p1 and p2 must differ to measure elasticity");
  const dq = (q2 - q1) / ((q1 + q2) / 2);
  const dp = (p2 - p1) / ((p1 + p2) / 2);
  return dq / dp;
}

/** Indian natural price points — used only to present a converted reference. */
export const INR_PRICE_POINTS = [49, 99, 149, 199, 299, 499, 799, 999, 1499, 1999] as const;

export function nearestInrPricePoint(value: number): number {
  positive("value", value);
  return INR_PRICE_POINTS.reduce((best, p) =>
    Math.abs(p - value) < Math.abs(best - value) ? p : best, INR_PRICE_POINTS[0]);
}

/* ── SaaS health ────────────────────────────────────────────────────────── */

export function ruleOf40(growthRatePct: number, profitMarginPct: number): number {
  if (!Number.isFinite(growthRatePct) || !Number.isFinite(profitMarginPct)) {
    throw new Error("rule of 40 inputs must be finite percentages");
  }
  return growthRatePct + profitMarginPct;
}

export function burnMultiple(netBurn: number, netNewArr: number): number {
  positive("netBurn", netBurn);
  if (netNewArr <= 0) throw new Error("netNewArr must be greater than zero");
  return netBurn / netNewArr;
}

export function magicNumber(
  { netNewArr, priorPeriodSandM }: { netNewArr: number; priorPeriodSandM: number },
): number {
  positive("netNewArr", netNewArr);
  if (priorPeriodSandM <= 0) throw new Error("priorPeriodSandM must be greater than zero");
  return netNewArr / priorPeriodSandM;
}

/* ── Experiment sizing ──────────────────────────────────────────────────── */

/**
 * Sample size per arm for a two-proportion test, 80% power at alpha 0.05
 * two-sided. Normal approximation, which is standard and holds well above
 * roughly 30 conversions per arm — below that the tool page says so.
 */
export function sampleSizePerArm(
  { baseline, minDetectableEffect, power = 0.8, alpha = 0.05 }: {
    baseline: number; minDetectableEffect: number; power?: number; alpha?: number;
  },
): number {
  const p1 = rate("baseline", baseline);
  const mde = rate("minDetectableEffect", minDetectableEffect);
  const p2 = p1 * (1 + mde);
  if (p2 > 1) throw new Error("baseline × (1 + mde) exceeds 1; the lift is impossible");
  const zA = zForTwoSided(rate("alpha", alpha));
  const zB = zForOneSided(rate("power", power));
  const pBar = (p1 + p2) / 2;
  const num = 2 * pBar * (1 - pBar) * Math.pow(zA + zB, 2);
  return Math.ceil(num / Math.pow(p2 - p1, 2));
}

/** Inverse normal CDF (Acklam's rational approximation). */
export function probit(p: number): number {
  if (p <= 0 || p >= 1) throw new Error("probit needs 0 < p < 1");
  const a = [-3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2,
             1.383577518672690e2, -3.066479806614716e1, 2.506628277459239];
  const b = [-5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2,
             6.680131188771972e1, -1.328068155288572e1];
  const c = [-7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838,
             -2.549732539343734, 4.374664141464968, 2.938163982698783];
  const d = [7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996,
             3.754408661907416];
  const pLow = 0.02425, pHigh = 1 - pLow;
  let q: number, r: number;
  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (((((c[0]! * q + c[1]!) * q + c[2]!) * q + c[3]!) * q + c[4]!) * q + c[5]!) /
           ((((d[0]! * q + d[1]!) * q + d[2]!) * q + d[3]!) * q + 1);
  }
  if (p <= pHigh) {
    q = p - 0.5; r = q * q;
    return (((((a[0]! * r + a[1]!) * r + a[2]!) * r + a[3]!) * r + a[4]!) * r + a[5]!) * q /
           (((((b[0]! * r + b[1]!) * r + b[2]!) * r + b[3]!) * r + b[4]!) * r + 1);
  }
  q = Math.sqrt(-2 * Math.log(1 - p));
  return -(((((c[0]! * q + c[1]!) * q + c[2]!) * q + c[3]!) * q + c[4]!) * q + c[5]!) /
          ((((d[0]! * q + d[1]!) * q + d[2]!) * q + d[3]!) * q + 1);
}

function zForTwoSided(alpha: number): number { return probit(1 - alpha / 2); }
function zForOneSided(power: number): number { return probit(power); }
