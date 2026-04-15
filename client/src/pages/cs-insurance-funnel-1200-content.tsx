import { TrendingUp, Zap, Target, BarChart3, DollarSign, Layers } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function InsuranceFunnel1200Content() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">₹14 Lakh a Month. From a Funnel That Was Leaking at Every Step.</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">When I first pulled the insurance funnel data, the revenue number looked like a typo. ₹14 lakh per month, from a platform with 10M+ monthly active users and millions of vehicle owners with active insurance renewal intent.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The math was embarrassing. If even 0.1% of the MAU converted at ₹1,200 average policy value, that's ₹1.2 crore per month. We were at ₹14 lakh. Actual conversion rate from visit-with-intent to policy purchase: 0.007%.</p>
        <ProblemBox>This wasn't an audience problem. We had millions of people checking insurance expiry dates — the most purchase-ready signal that exists. We just had a funnel that converted like a broken pipe. Every step lost users. No one had ever traced exactly where.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85]">Twelve months later, that ₹14 lakh was ₹1.82 crore — a 1,200% increase. Here's the full breakdown of what I found, what I changed, and what actually moved the number.</p>
      </section>

      <SectionDivider label="The Leak Map" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Mapping Every Drop-Off Point</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">I spent the first two weeks doing nothing but funnel instrumentation. Every step, tagged. Every exit, recorded. The drop-off waterfall looked like this:</p>
        <DataTable
          headers={["Funnel Step", "Users Reaching Step", "Drop-off Rate", "Root Cause (Initial Finding)"]}
          rows={[
            ["Insurance expiry check (intent signal)", "1,200,000/mo", "—", "Entry point"],
            ["Insurance CTA visible", "940,000", "22% drop", "CTA below fold; generic copy"],
            ["CTA clicked (interest)", "47,000", "95% drop", "CTA not contextual; timing wrong"],
            ["Quote page reached", "31,000", "34% drop", "Form too long; trust signals absent"],
            ["Quote submitted", "8,400", "73% drop", "Price shock; no social proof"],
            ["Payment initiated", "2,800", "67% drop", "Payment UX broken on mobile"],
            ["Purchase completed", "1,100", "61% drop", "OTP failures; partner API timeouts"],
          ]}
        />
        <InsightBox>95% of users who saw the insurance CTA didn't click it. Not 30%, not 50% — 95%. The problem wasn't the funnel. The problem was the door into the funnel: the CTA itself was invisible, generic, and untimed.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">There were 7 distinct failure points. Most teams would pick the biggest one and fix it. I mapped all 7 and built parallel solutions. When you have 0.007% conversion, every step matters.</p>
      </section>

      <SectionDivider label="The Segmentation Surprise" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Not All Intent Is Equal</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Within the 1.2M monthly intent-signal users, I segmented by days-to-expiry. The conversion data by segment was the single most important finding of the entire project.</p>
        <DataTable
          headers={["Days to Expiry", "Monthly Volume", "Existing Conversion", "Insight"]}
          rows={[
            ["Already expired", "320,000", "0.1%", "Users in pain — but we had no 'just expired' journey"],
            ["0–7 days", "180,000", "0.9%", "Highest intent; identical generic experience as 90-day segment"],
            ["8–30 days", "310,000", "0.4%", "Moderate intent; urgency not reflected in product"],
            ["31–90 days", "260,000", "0.03%", "Low intent; shouldn't be in active conversion funnel"],
            ["90+ days", "130,000", "0.01%", "Not a purchase audience; information seekers only"],
          ]}
        />
        <TakeawayBox>The 0–7 day segment converted at 0.9% — 90× better than the 90+ day group — but received the same interface, same CTA copy, same flow. We were serving the wrong experience to every segment and wasting the highest-intent moments entirely.</TakeawayBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The strategic decision: build segment-specific journeys. Not 5 different funnels — 3 tiers: expired + critical (0–7), active decision window (8–30), and awareness-only (31+). The 31+ segment was removed from the active purchase flow entirely and moved to an education track.</p>
      </section>

      <SectionDivider label="The Core Insight" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Purchase Decision Is Made Before the Funnel Starts</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The biggest realisation from the funnel data: by the time a user clicked the insurance CTA, 80% of the purchase decision was already made. They weren't evaluating whether to buy — they were evaluating whether to buy here, or go to the insurer's own website.</p>
        <BlockQuote>The funnel's job wasn't to convince people to buy insurance. It was to convince them not to leave. That's a trust problem, not a persuasion problem.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">When I audited competitor journeys — Policybazaar, insurer direct sites, agent flows — the pattern was clear: our funnel had zero trust architecture. No insurer logos. No policy count displayed. No claim settlement ratio. No customer reviews. Nothing that said "this is a legitimate place to buy a financial product."</p>
        <p className="text-foreground/80 leading-[1.85] mt-5">For a vehicle info app that people trusted for RC lookups, we had entirely failed to transfer that trust to the commercial flow. That was the strategic gap.</p>
      </section>

      <SectionDivider label="What We Rebuilt" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Six Parallel Interventions</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-primary" />}
            title="1. Contextual CTA Architecture"
            body="CTA copy, placement, and urgency tier matched to expiry segment. 'Renew now — expires in 4 days' for critical tier. 'Your policy renewal window is open' for active tier. Static generic CTA eliminated entirely."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<DollarSign className="h-5 w-5 text-green-600" />}
            title="2. Trust Signal Layer"
            body="Insurer logos, IRDAI registration numbers, claim settlement ratios, policy count badges ('2.8L policies renewed via CarInfo'), and 4.6★ rating displayed before the quote form. Trust first, form second."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-purple-600" />}
            title="3. Form Compression"
            body="Quote form reduced from 11 fields to 4 (vehicle number, current insurer, expiry date, coverage type). Vehicle number pre-filled from RC data. User typed nothing they hadn't already provided to reach the page."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Zap className="h-5 w-5 text-orange-600" />}
            title="4. Mobile Payment Overhaul"
            body="UPI deep-linking added as primary payment option. Net banking flow removed from mobile. One-tap payment for returning users who had stored method. Payment step reduced from 4 screens to 1."
            color="bg-orange-50 border-orange-200"
          />
          <FrameworkDimension
            icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
            title="5. Expiry Notification Redesign"
            body="Replaced generic weekly reminder with 5-step cadence: 45d (informational), 30d (comparison prompt), 14d (quote locked), 7d (urgent), 3d (critical action). Each notification deep-linked to the exact funnel step with pre-filled context."
            color="bg-blue-50 border-blue-200"
          />
          <FrameworkDimension
            icon={<BarChart3 className="h-5 w-5 text-pink-600" />}
            title="6. API Reliability Engineering"
            body="Partner insurer API timeouts caused 23% of payment failures. Built a queue-based retry layer with user-visible progress states. 'Processing your policy — this takes 20 seconds' replaced silent failure. Completion rate improved 58%."
            color="bg-pink-50 border-pink-200"
          />
        </div>
      </section>

      <SectionDivider label="Rollout" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 12-Month Execution Timeline</h2>
        <div className="space-y-4">
          <Phase num="Month 1–2" period="Diagnosis" title="Full Funnel Instrumentation + Segment Analysis" actions={["Tagged every funnel step; recorded all exit points with context", "Segmented users by days-to-expiry; built conversion baseline per segment", "Competitive audit: Policybazaar, HDFC Ergo, TATA AIG direct flows", "Identified 6 independent failure points for parallel intervention"]} result="Strategy locked. Prioritised: CTA redesign + trust layer as P0." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Month 3–5" period="Trust + CTA" title="The Trust Layer and Contextual CTAs Ship" actions={["Insurer logos, ratings, IRDAI badges, policy count — trust shelf deployed above quote form", "CTA copy segmented by expiry tier; placement moved above fold with sticky behaviour", "Quote form: 11 fields → 4 fields; vehicle number pre-fill from RC data"]} result="CTA CTR: 4% → 17%. Quote form completion: 27% → 61%." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Month 6–9" period="Payment + Notifications" title="Conversion Layer Rebuilt" actions={["UPI deep-link as primary mobile payment; 4-screen flow → 1-screen", "5-step notification cadence live; all notifications deep-linked to mid-funnel", "Retry layer for partner API timeouts: silent failure → status transparency"]} result="Payment completion: 39% → 71%. Revenue run rate: ₹14L → ₹78L/mo." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Month 10–12" period="Compounding" title="Loyalty + Repeat Purchase Engine" actions={["Policy wallet: stored active policies with renewal 1-click trigger", "'Renew with same insurer' CTA for repeat users — zero re-entry required", "Referral mechanic: 'Share your renewal link' with ₹200 reward for first purchase by referee"]} result="Repeat purchase rate: 8% → 31%. Revenue: ₹1.82Cr/mo (1,200% growth)." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Full Outcome</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="1,200%" label="Revenue Growth" sub="₹14L → ₹1.82Cr/month" color="text-primary" />
          <MetricCard value="17%" label="CTA CTR" sub="from 4% baseline" color="text-green-600" />
          <MetricCard value="71%" label="Payment Completion" sub="from 39% baseline" color="text-primary" />
          <MetricCard value="31%" label="Repeat Purchase Rate" sub="from 8% baseline" color="text-green-600" />
        </div>
        <DataTable
          headers={["Metric", "Month 0", "Month 12"]}
          rows={[
            ["Monthly Insurance Revenue", "₹14 lakh", "₹1.82 crore"],
            ["Overall Funnel Conversion", "0.007%", "0.092%"],
            ["CTA Click Rate (intent segment)", "4%", "17%"],
            ["Quote Form Completion", "27%", "61%"],
            ["Payment Completion Rate", "39%", "71%"],
            ["Repeat Purchase Rate (12-month)", "8%", "31%"],
          ]}
        />
        <TakeawayBox>1,200% revenue growth didn't come from a single insight. It came from fixing 6 independent failure points simultaneously. Any one of them in isolation would have moved revenue 20–50%. All 6 together created compounding improvement across the full funnel.</TakeawayBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Mental Models That Stuck</h2>
        <div className="space-y-6">
          <Insight num="01" title="Trust is a prerequisite, not a nice-to-have" body="Conversion on financial products is gated by trust, not persuasion. No CTA copy optimization will work if users don't believe they're buying from a legitimate source. Trust signals (regulator badges, claim ratios, transaction count) should be designed as structural elements, not decorative additions. We added the trust shelf before changing any copy — and that alone improved form completion by 34%." />
          <Insight num="02" title="Pre-filling is the most underrated conversion lever" body="Every field a user has to type is a decision point to exit. When we pre-filled the vehicle number (which we already had from their RC lookup), quote form drop-off dropped immediately. The user was already mid-journey — we just removed the friction that made them feel like they were starting over." />
          <Insight num="03" title="Repeat purchase is a product architecture problem, not a marketing one" body="Getting from 8% to 31% repeat purchase didn't come from email campaigns. It came from the policy wallet — a persistent record of purchased policies with one-tap renewal. The moment buying again required zero re-entry, the repeat rate changed. Marketing can remind; product architecture enables." />
          <Insight num="04" title="API failures are funnel failures — treat them as such" body="23% of payment failures came from partner API timeouts. We tracked these as 'technical errors', not 'conversion failures'. That categorisation mistake let the issue persist for 9 months. Once we reclassified them as funnel failures and owned the fix, completion rate improved 58% at that step alone." />
        </div>
      </section>

      <SectionDivider label="What Hurt Us First" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Mistakes That Cost Us Time</h2>
        <div className="space-y-4">
          <FailurePoint title="Rewrote CTA copy before fixing CTA placement" why="Month 2 improvement: rewrote CTA copy across 14 variants. A/B tested extensively. Best variant: 12% improvement. Satisfying but insufficient. We'd optimised the headline of an ad that wasn't being seen — the CTA was below the fold on 71% of mobile sessions." fix="Fixed placement first: sticky CTA bar that appeared after 5 seconds on insurance-expiry pages. CTR doubled before we changed any copy. Always validate visibility before optimising message." />
          <FailurePoint title="Served the 90+ day segment an aggressive purchase flow" why="All users with any expiry data saw the full purchase journey regardless of how far away their expiry was. A user with 180 days remaining would see 'Renew your insurance today' — which was accurate but contextually wrong. Unsubscribe rate from insurance notifications: 41%." fix="Introduced segment-aware journeys. 90+ days: informational only ('Know your options'). 31–90 days: comparison mode. 0–30: active purchase. 90+ day unsubscribe rate dropped to 6% once they stopped receiving purchase pressure." />
          <FailurePoint title="Referral mechanic launched without explaining the reward clearly" why="'Earn ₹200' button existed but the copy said 'Share and earn' with no context on what ₹200 was for or when it was paid. First two weeks: 0.8% participation rate. Users didn't trust the mechanic." fix="Rewrote to: 'Your friend buys any policy → ₹200 added to your wallet in 48 hours. No catch, no minimum.' Participation rate: 0.8% → 6.4%. Clarity eliminates hesitation in ways that incentive size alone cannot." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where the Funnel Goes Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Multi-Policy Household" body="Users with 2+ vehicles represent 34% of the active user base but only 12% of insurance revenue. Building a 'household policy view' to surface all vehicle policies in one dashboard — and renewal as a household event, not a per-vehicle one." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Instant Policy Issuance" body="Current flow: 20-second partner API processing. The next step: instant issuance using policy-as-a-service APIs with sub-2-second confirmation. The psychological difference between waiting and instant is significant for financial product completion rates." />
          <FutureCard icon={<Target className="h-5 w-5 text-primary" />} title="Dynamic Pricing Display" body="Showing real-time pricing changes ('This plan dropped ₹180 yesterday') adds urgency without being aggressive. Using historical pricing data to display market movement — the same mechanic that makes booking platforms compelling." />
        </div>
        <BlockQuote>The funnel wasn't broken because the product was bad. It was broken because nobody had ever instrumented it properly. Once you see where the water is escaping, fixing it is engineering — not creativity.</BlockQuote>
      </section>
    </div>
  );
}
