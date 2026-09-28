import { describe, expect, it } from "vitest";
import * as F from "../lib/formulas";

const close = (a: number, b: number, eps = 1e-6) => expect(Math.abs(a - b)).toBeLessThan(eps);

describe("rebase — the unit bug that shipped once already", () => {
  it("converts daily to annual", () => close(F.rebase(0.02, "daily", "annual"), 7.3));
  it("converts annual to monthly", () => close(F.rebase(120, "annual", "monthly"), 10));
  it("round-trips", () => close(F.rebase(F.rebase(5, "monthly", "daily"), "daily", "monthly"), 5));
});

describe("arpu / arppu", () => {
  it("divides revenue by active users", () => close(F.arpu(100_000, 50_000), 2));
  it("arppu is higher than arpu when not everyone pays", () => {
    expect(F.arppu(100_000, 5_000)).toBeGreaterThan(F.arpu(100_000, 50_000));
  });
  it("reconstructs arpu from arppu and paid share", () => {
    close(F.arpuFromArppu(20, 0.1), 2);
  });
  it("refuses a zero denominator rather than returning Infinity", () => {
    expect(() => F.arpu(100, 0)).toThrow(/greater than zero/);
  });
});

describe("churn and lifetime", () => {
  it("lifetime is the reciprocal of churn", () => close(F.lifetimePeriods(0.05), 20));
  it("zero churn is infinite, not a divide-by-zero", () => {
    expect(F.lifetimePeriods(0)).toBe(Infinity);
  });
  it("monthly and annual churn round-trip", () => {
    close(F.annualChurnFromMonthly(F.monthlyChurnFromAnnual(0.6)), 0.6, 1e-9);
  });
  it("monthly churn from annual is higher than annual/12, not lower", () => {
    // Dividing 60% by 12 gives 5%, but 5% monthly compounds to only 46% annual.
    // Reaching 60% annual needs 7.35% monthly, so the naive split understates it.
    expect(F.monthlyChurnFromAnnual(0.6)).toBeGreaterThan(0.6 / 12);
    close(F.monthlyChurnFromAnnual(0.6), 0.0735151, 1e-6);
    close(F.annualChurnFromMonthly(0.05), 0.4596399, 1e-6);
  });
  it("rejects a rate above 1", () => expect(() => F.lifetimePeriods(1.5)).toThrow(/between 0 and 1/));
});

describe("ltv", () => {
  it("is arpu × lifetime when undiscounted at full margin", () => {
    close(F.ltv({ arpuPerPeriod: 10, churnPerPeriod: 0.05 }), 200);
  });
  it("margin scales it linearly", () => {
    close(F.ltv({ arpuPerPeriod: 10, churnPerPeriod: 0.05, grossMargin: 0.7 }), 140);
  });
  it("a discount rate lowers it below arpu × lifetime", () => {
    const undiscounted = F.ltv({ arpuPerPeriod: 10, churnPerPeriod: 0.05 });
    const discounted = F.ltv({ arpuPerPeriod: 10, churnPerPeriod: 0.05, discountPerPeriod: 0.01 });
    expect(discounted).toBeLessThan(undiscounted);
    close(discounted, 10 / 0.06);
  });
});

describe("cac and payback", () => {
  it("payback is longer on margin than on revenue", () => {
    const onRevenue = F.cacPaybackPeriods(100, 10, 1);
    const onMargin = F.cacPaybackPeriods(100, 10, 0.5);
    expect(onMargin).toBeGreaterThan(onRevenue);
    close(onMargin, 20);
  });
  it("ltv:cac divides", () => close(F.ltvToCac(300, 100), 3));
  it("refuses zero cac", () => expect(() => F.ltvToCac(300, 0)).toThrow(/greater than zero/));
});

describe("retention", () => {
  it("nrr can exceed 1 when expansion outweighs losses", () => {
    expect(F.nrr({ starting: 100, expansion: 20, contraction: 5, churned: 5 })).toBeCloseTo(1.1);
  });
  it("grr can never exceed 1", () => {
    expect(F.grr({ starting: 100, contraction: 0, churned: 0 })).toBe(1);
  });
  it("grr is always at or below nrr", () => {
    const args = { starting: 100, expansion: 30, contraction: 10, churned: 10 };
    expect(F.grr(args)).toBeLessThanOrEqual(F.nrr(args));
  });
});

describe("netAfterStoreFee — order of operations", () => {
  it("removes tax before commission", () => {
    // ₹100 inclusive of 18% GST → ₹84.75 net of tax → 30% fee → ₹59.32
    const r = F.netAfterStoreFee({ grossPrice: 100, commission: 0.3, taxIncluded: 0.18 });
    close(r.tax, 15.254237, 1e-5);
    close(r.fee, 25.423729, 1e-5);
    close(r.net, 59.322034, 1e-5);
  });
  it("taking commission off gross first would understate net", () => {
    const correct = F.netAfterStoreFee({ grossPrice: 100, commission: 0.3, taxIncluded: 0.18 }).net;
    const naive = 100 * (1 - 0.3) * (1 / 1.18);
    expect(correct).toBeGreaterThan(naive);
  });
  it("small-business rate keeps more", () => {
    const std = F.netAfterStoreFee({ grossPrice: 100, commission: 0.3 }).net;
    const sb = F.netAfterStoreFee({ grossPrice: 100, commission: 0.15 }).net;
    expect(sb).toBeGreaterThan(std);
  });
});

describe("funnels", () => {
  it("multiplies step rates", () => close(F.funnelRate([0.5, 0.5, 0.5]), 0.125));
  it("rejects converted above total", () => {
    expect(() => F.conversionRate(11, 10)).toThrow(/cannot exceed/);
  });
});

describe("projectRetention — power law, not exponential", () => {
  it("reproduces the observed points", () => {
    close(F.projectRetention({ day1: 0.4, day30: 0.1 }, 1), 0.4, 1e-9);
    close(F.projectRetention({ day1: 0.4, day30: 0.1 }, 30), 0.1, 1e-9);
  });
  it("stays above zero at D90, where an exponential fit would collapse", () => {
    const d90 = F.projectRetention({ day1: 0.4, day30: 0.1 }, 90);
    expect(d90).toBeGreaterThan(0.03);
    expect(d90).toBeLessThan(0.1);
  });
  it("decreases monotonically", () => {
    const days = [1, 7, 14, 30, 60, 90];
    const vals = days.map((d) => F.projectRetention({ day1: 0.4, day30: 0.1 }, d));
    for (let i = 1; i < vals.length; i++) expect(vals[i]!).toBeLessThan(vals[i - 1]!);
  });
});

describe("ads", () => {
  it("ecpm is revenue per thousand impressions", () => close(F.ecpm(50, 100_000), 0.5));
  it("ad arpu multiplies ecpm by impressions per user", () => {
    close(F.adArpu({ ecpmValue: 2, impressionsPerUser: 500 }), 1);
  });
});

describe("pricing", () => {
  it("elasticity is negative for a normal good", () => {
    expect(F.priceElasticity({ q1: 100, q2: 80, p1: 10, p2: 12 })).toBeLessThan(0);
  });
  it("refuses identical prices", () => {
    expect(() => F.priceElasticity({ q1: 100, q2: 80, p1: 10, p2: 10 })).toThrow(/must differ/);
  });
  it("snaps to a natural Indian price point", () => {
    expect(F.nearestInrPricePoint(160)).toBe(149);
    expect(F.nearestInrPricePoint(185)).toBe(199);
  });
});

describe("saas health", () => {
  it("rule of 40 adds growth and margin, including negatives", () => {
    expect(F.ruleOf40(60, -25)).toBe(35);
  });
  it("burn multiple divides burn by net new arr", () => close(F.burnMultiple(200, 100), 2));
  it("magic number uses prior-period spend", () => {
    close(F.magicNumber({ netNewArr: 50, priorPeriodSandM: 100 }), 0.5);
  });
});

describe("sampleSizePerArm", () => {
  it("matches the standard answer for a 5% baseline and 20% relative lift", () => {
    // 5% -> 6% at 80% power, alpha 0.05. Evan Miller's calculator publishes
    // ~8,143 per variant; the pooled-variance form used here gives 8,159.
    const n = F.sampleSizePerArm({ baseline: 0.05, minDetectableEffect: 0.2 });
    expect(n).toBeGreaterThan(7_800);
    expect(n).toBeLessThan(8_400);
  });
  it("a smaller effect needs a larger sample", () => {
    const small = F.sampleSizePerArm({ baseline: 0.05, minDetectableEffect: 0.05 });
    const large = F.sampleSizePerArm({ baseline: 0.05, minDetectableEffect: 0.5 });
    expect(small).toBeGreaterThan(large);
  });
  it("refuses an impossible lift", () => {
    expect(() => F.sampleSizePerArm({ baseline: 0.9, minDetectableEffect: 0.5 }))
      .toThrow(/exceeds 1/);
  });
  it("probit is accurate at the usual critical values", () => {
    close(F.probit(0.975), 1.959964, 1e-4);
    close(F.probit(0.8), 0.8416212, 1e-4);
  });
});
