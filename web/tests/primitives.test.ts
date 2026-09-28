import { describe, expect, it } from "vitest";
import { anonymiseContext } from "../components/primitives";

describe("anonymiseContext — 02 §5 permission rule", () => {
  it("drops the company but keeps sector and dates", () => {
    expect(anonymiseContext("Motor-insurance line inside CarInfo, 2021–22"))
      .toBe("A client, 2021–22");
  });
  it("handles a context with no comma without leaking anything", () => {
    expect(anonymiseContext("CarInfo")).toBe("A client");
  });
  it("never returns the original string for a named company", () => {
    const ctx = "Loanwiser lending funnel, 2020";
    expect(anonymiseContext(ctx)).not.toContain("Loanwiser");
  });
  it("keeps multiple trailing qualifiers", () => {
    expect(anonymiseContext("Zomato, marketplaces, 2023"))
      .toBe("A client, marketplaces, 2023");
  });
});
