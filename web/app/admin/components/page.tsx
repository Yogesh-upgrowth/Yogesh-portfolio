/**
 * /admin/components — the Storybook-free demo route (03 §9.1), dev only.
 *
 * Every component rendered with realistic data on one page, so a token change
 * can be checked against all of them at once. 404s in production for the same
 * reason /admin/review does.
 */
import { notFound } from "next/navigation";
import type { Fact, ExperienceEntry } from "@/lib/content/schemas";
import {
  AnswerBox, AuthorBox, Breadcrumbs, CTABand, Changelog, DecisionTable, Example,
  FAQ, FactTable, Figure, FromMyWork, LastVerified, NotAffiliated, PriceTable,
  RelatedGrid, SourcePill, Sources, WhatIdDo,
} from "@/components/primitives";

export const dynamic = "force-dynamic";

const fact: Fact = {
  fact_id: "f-demo-01",
  claim: "Duolingo's annual plan is discounted 50% against monthly in India",
  value: 50, unit: "%",
  source_url: "https://www.duolingo.com/",
  source_title: "Duolingo pricing page",
  source_domain: "duolingo.com",
  excerpt: "Annual plan billed once per year at a discount against the monthly price.",
  verified_on: "2026-09-20", method: "device_check", primary: true,
  device: { os: "android", region: "IN", account_state: "new" },
};

const entry: ExperienceEntry = {
  id: "exp-014", tags: ["paywall", "india"],
  context: "Motor-insurance line inside CarInfo, 2021–22",
  claim: "Moving the quote step before signup lifted quote completion.",
  numbers: [{ metric: "policies/day", from: "~10", to: "6,800+", window: "18 months" }],
  permission: "public", can_name_company: true, timeframe: "2021-2022",
  source_session: "2026-10-02",
};

export default function ComponentsDemo() {
  if (process.env.NODE_ENV === "production") notFound();
  return (
    <main>
      <h1>Components</h1>
      <p>Dev-only. Every block with realistic data, for checking a token change.</p>

      <h2>Breadcrumbs</h2>
      <Breadcrumbs trail={[
        { url: "/", name: "Home" },
        { url: "/teardowns", name: "Teardowns" },
        { url: "/teardowns/duolingo/pricing", name: "Duolingo pricing" },
      ]} />

      <h2>LastVerified</h2>
      <LastVerified date="2026-09-20" method="every fact carries its source below" />

      <h2>AnswerBox</h2>
      <AnswerBox>
        Duolingo charges ₹1,699/year in India against $83.88/year in the US, a
        gap far wider than purchasing power alone explains.
      </AnswerBox>

      <h2>FactTable</h2>
      <FactTable
        caption="Annual discount by market"
        columns={["Market", "Monthly", "Annual", "Discount"]}
        rows={[
          { cells: ["India", "₹399", "₹1,699", "65%"], fact },
          { cells: ["United States", "$12.99", "$83.88", "46%"], fact },
          { cells: ["Brazil", "—", "—", "—"] },
        ]}
      />

      <h2>PriceTable</h2>
      <PriceTable
        caption="Super Duolingo, verified on device"
        fxRate={88.2} fxAsOf="2026-09-01"
        rows={[
          { tier: "Monthly", inr: 399, usd: 12.99, period: "month", verifiedOn: "2026-09-20" },
          { tier: "Annual", inr: 1699, usd: 83.88, period: "year", verifiedOn: "2026-09-20" },
        ]}
      />

      <h2>DecisionTable</h2>
      <DecisionTable
        caption="Free trial against reverse trial"
        options={["Free trial", "Reverse trial"]}
        criteria={[
          { name: "Activation", verdicts: ["Lower", "Higher"] },
          { name: "Trial abuse risk", verdicts: ["Lower", "Higher"] },
          { name: "Best for", verdicts: ["Considered purchases", "Habit products"] },
        ]}
      />

      <h2>FromMyWork</h2>
      <FromMyWork entry={entry}>
        We stopped asking for a login before showing the price. That single change
        did more than the next ten experiments combined.
      </FromMyWork>

      <h2>WhatIdDo</h2>
      <WhatIdDo
        verdict="I would move the paywall one session later and raise the annual discount."
        steps={[
          "Instrument the step before the paywall, not the paywall itself.",
          "Run the delay against a holdout for two weeks.",
          "Only then change the price.",
        ]}
      />

      <h2>Example</h2>
      <Example illustrative>
        <p>A product with 10,000 monthly actives at ₹99 ARPU earns ₹9.9L a month.</p>
      </Example>

      <h2>Figure</h2>
      <Figure alt="Retention curve flattening between day 7 and day 30" caption="Power-law fit through D1 and D30.">
        <svg viewBox="0 0 320 120" width="100%" height="120" aria-hidden="true">
          <polyline fill="none" stroke="currentColor" strokeWidth="2"
            points="0,10 40,45 80,62 120,73 160,80 200,86 240,90 280,93 320,95" />
        </svg>
      </Figure>

      <h2>FAQ</h2>
      <FAQ items={[
        { q: "Does Duolingo price differently in India?", a: "Yes, materially." },
        { q: "Is the annual discount the same everywhere?", a: "No." },
        { q: "How often is this checked?", a: "Price facts every 45 days." },
      ]} />

      <h2>SourcePill</h2>
      <p><SourcePill domain="revenuecat.com" verifiedOn="2026-09-20" /></p>

      <h2>Sources</h2>
      <Sources facts={[fact]} fxNote="Converted at ₹88.2/$1 as of 2026-09-01." />

      <h2>NotAffiliated</h2>
      <NotAffiliated company="Duolingo" verifiedOn="2026-09-20" />

      <h2>Changelog</h2>
      <Changelog entries={[
        { date: "2026-09-20", note: "Re-checked Indian pricing on a new account." },
        { date: "2026-06-02", note: "First published." },
      ]} />

      <h2>RelatedGrid</h2>
      <RelatedGrid items={[
        { url: "/teardowns/duolingo/retention", title: "Duolingo retention", why: "Same app, the lens that explains the pricing." },
        { url: "/benchmarks/arpu/media-ott", title: "ARPU benchmarks", why: "Where this sits against the category." },
        { url: "/glossary/annual-plan", title: "Annual plan", why: "The mechanic in one paragraph." },
      ]} />

      <h2>AuthorBox</h2>
      <AuthorBox name="Yogesh Yadav" role="Product growth and monetization consultant"
        proof={["Scaled a consumer product from 3.8M to 45M+ monthly active users",
                "Rebuilt an insurance funnel into a 680× revenue line"]} />

      <h2>CTABand</h2>
      <CTABand cta={{
        primary: { label: "Get a pricing review for your app", href: "/work-with-me" },
        secondary: { label: "Read the case studies", href: "/case-studies" },
      }} />
    </main>
  );
}
