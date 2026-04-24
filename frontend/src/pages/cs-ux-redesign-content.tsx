import { Eye, MousePointer, Layers, Brain, BarChart3, TrendingUp } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function UxRedesignContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Watched 300 Users Struggle With Something We Were Proud Of</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The product had shipped 8 months earlier after a 4-month design and development cycle. The team had done good work — the visual design was clean, the information architecture was logical, the user flows had been through 3 rounds of internal review.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Then we watched 300 session recordings of actual users, and the experience was humbling. Features we were proud of were being ignored. Flows that felt intuitive to us were producing visible confusion in the recordings — back-and-forth navigation, rage clicks, long pauses on screens where there should be no ambiguity.</p>
        <ProblemBox>The gap between "we tested this internally" and "real users on real devices in real contexts" is larger than most product teams want to admit. Our information architecture made sense to people who already understood the product. It made limited sense to people encountering it for the first time.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The redesign wasn't about aesthetics. It was about closing that gap — using evidence from real users, not intuition from the team that built it.</p>
      </section>

      <SectionDivider label="The Evidence" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What 300 Session Recordings Showed</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We tagged every recording with primary user behavior issues. The same problems appeared repeatedly — not random confusion, but systematic patterns that indicated design decisions that weren't serving users well.</p>
        <DataTable
          headers={["Issue", "% of Sessions", "Primary Impact"]}
          rows={[
            ["Missed primary CTA (not scrolled to or noticed)", "41%", "Conversion — users didn't take the primary action"],
            ["Navigation: back-and-forth between 2 screens", "34%", "Engagement — users couldn't orient themselves"],
            ["Rage clicks on non-interactive element", "28%", "Confusion — users expected interactivity"],
            ["Form field: re-entered data multiple times", "22%", "Friction — unclear error messages or format"],
            ["Mobile: tapped wrong element due to sizing", "19%", "Usability — touch targets too small"],
          ]}
        />
        <InsightBox>41% of users missed the primary CTA. We'd put it below the fold with a design that felt natural on desktop but got lost on mobile screens where 68% of our traffic was coming from. We'd designed for our office monitors and shipped it to users' phone screens.</InsightBox>
      </section>

      <SectionDivider label="What the Data Showed About Users" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Mobile vs Desktop: Completely Different Failure Modes</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Splitting the session recordings by device type revealed that mobile and desktop users were failing at entirely different points in the flow — which meant a single redesign fix wouldn't serve both.</p>
        <DataTable
          headers={["Failure Point", "Mobile Users", "Desktop Users"]}
          rows={[
            ["CTA missed (below fold)", "58%", "12%"],
            ["Navigation confusion", "38%", "29%"],
            ["Rage clicks (wrong element)", "31%", "24%"],
            ["Form re-entry", "24%", "18%"],
            ["Touch target misses", "22%", "N/A"],
          ]}
        />
        <TakeawayBox>Mobile users were 4.8× more likely to miss the CTA than desktop users. The design that worked acceptably on desktop was broken on mobile. And mobile was 68% of our traffic. We'd been shipping a broken experience to more than half our users for 8 months.</TakeawayBox>
      </section>

      <SectionDivider label="Design Philosophy" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Evidence-First Design</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The redesign mandate: every design decision needed to trace back to either a user observation (recording, interview, survey) or a measured metric. No "it feels right" or "this is best practice." Justify it with data or don't include it.</p>
        <BlockQuote>Design intuition is valuable when calibrated by reality. It becomes dangerous when it substitutes for evidence. The most expensive design decisions are the confident ones made without evidence — because they're hardest to challenge and slowest to change.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The redesign was organized around fixing the five failure modes in the session recording analysis, in order of severity. Everything else was constraint-preserving — we weren't redesigning the brand or the information architecture wholesale, only the specific failure points.</p>
      </section>

      <SectionDivider label="The Redesign Decisions" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Fix by Fix</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Eye className="h-5 w-5 text-primary" />}
            title="CTA Always Visible (Mobile)"
            body="Primary CTA moved from below-fold inline position to sticky bottom bar on mobile. Always visible regardless of scroll position. On scroll down: compresses to icon + text. On scroll up: expands. CTR improvement: from 6.8% to 14.1%."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<MousePointer className="h-5 w-5 text-green-600" />}
            title="Touch Target Expansion"
            body="Minimum touch target raised from 36px to 48px for all interactive elements. Elements within 8px of another interactive element: spacing increased to 16px minimum. Rage clicks on wrong elements dropped 71%."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Layers className="h-5 w-5 text-purple-600" />}
            title="Navigation Context Indicators"
            body="Back-and-forth navigation often caused by users losing track of where they were. Added persistent breadcrumb (mobile: collapsible), current section highlighted in nav, and 'you're comparing X' sticky header on comparison pages."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-orange-600" />}
            title="Interactive State Clarity"
            body="Rage clicks on non-interactive elements: cards that looked clickable but weren't. Fixed by: adding subtle hover state to all clickable cards, removing card-like styling from non-interactive content blocks, adding cursor:pointer explicitly."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Technical Implementation" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How It Was Built and Tested</h2>
        <div className="space-y-4">
          {[
            { title: "Component-Level A/B Testing", points: ["Each fix deployed as a feature-flagged variant, not a full redesign swap", "Sticky CTA bar: A/B tested independently of touch target fix", "Allows attribution of conversion improvement to specific design change", "Rollback possible per-component if any fix performs worse"] },
            { title: "Mobile-First QA Process", points: ["All redesigned components QA'd on physical devices (not emulators) first", "Devices tested: iPhone SE (smallest modern), iPhone 14 Plus, Pixel 7, Samsung A-series (budget Android)", "Session recording review after each A/B round to confirm observed behavior change"] },
            { title: "Rage Click Monitoring", points: ["Hotjar rage click tracking maintained throughout redesign", "Rage click rate per screen tracked as leading indicator of confusion", "Target: reduce from 28% of sessions to < 10% within 60 days of full rollout"] },
          ].map((l) => (
            <div key={l.title} className="p-6 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-3 text-primary">{l.title}</p>
              <ul className="space-y-2">
                {l.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/70"><span className="text-primary mt-0.5 shrink-0">→</span>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Rollout" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">8 Weeks of Fixing and Measuring</h2>
        <div className="space-y-4">
          <Phase num="Weeks 1–2" period="Recording Analysis" title="Systematic Failure Documentation" actions={["300 session recordings tagged across 5 failure categories", "Mobile vs desktop split analysis", "Prioritized fix list by severity × frequency"]} result="Evidence base complete. Redesign scope confirmed: 4 targeted fixes, not full redesign." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Weeks 3–4" period="Fix Design" title="Component-Level Redesigns" actions={["Sticky CTA bar designed for mobile", "Touch target expansion specification written for engineering", "Navigation context indicators designed", "Interactive state system documented"]} result="Design QA complete. Engineering implementation begun." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Weeks 5–7" period="A/B Testing" title="Sequential Component Tests" actions={["Sticky CTA bar A/B test: 2 weeks, statistical significance week 6", "Touch target expansion deployed (no A/B needed — objectively better)", "Navigation indicators A/B test: week 7"]} result="CTA CTR: 6.8% → 14.1%. Rage clicks: 28% → 9% of sessions." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Week 8" period="Full Rollout" title="All Fixes Live" actions={["All winning variants deployed to 100%", "Session recording review: confirmed expected behavior changes", "Full funnel conversion measured at 28% improvement"]} result="Overall conversion +28%. Mobile conversion +41% (largest single-channel improvement)." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">8 Weeks of Evidence-Based Fixing</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="+28%" label="Overall Conversion" sub="across all devices" color="text-green-600" />
          <MetricCard value="+41%" label="Mobile Conversion" sub="largest impact segment" color="text-primary" />
          <MetricCard value="+108%" label="CTA Click-Through" sub="6.8% → 14.1%" color="text-green-600" />
          <MetricCard value="−68%" label="Rage Click Rate" sub="28% → 9% of sessions" color="text-primary" />
        </div>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What This Changed About How I Think About UX</h2>
        <div className="space-y-6">
          <Insight num="01" title="Session recordings are diagnostic, not confirmatory" body="We used session recordings to understand what was broken, not to confirm that things were working. The failure modes in 300 recordings were visible to anyone willing to watch with an open mind. The hard part is watching without defending your original design decisions." />
          <Insight num="02" title="Mobile-first isn't a preference, it's a math problem" body="68% of our traffic was mobile. Any design decision that doesn't start from mobile UX is starting from a minority experience. Mobile-first design isn't a philosophy — it's a response to traffic reality." />
          <Insight num="03" title="Internal testing cannot replace real user observation" body="Our internal QA caught bugs. It didn't catch the 41% CTA miss rate, because everyone on the internal team knew where the CTA was. Real users encounter your product without the context that makes your design choices obvious. That gap is only visible by watching real users." />
          <Insight num="04" title="Component-level A/B testing beats full redesign swaps" body="Testing individual components lets you attribute performance changes to specific decisions. Full redesign swaps produce a result you can't decompose — you don't know which of the 40 changes you made drove the improvement." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where We Got It Wrong</h2>
        <div className="space-y-4">
          <FailurePoint title="Sticky CTA initially too aggressive on small screens" why="On iPhone SE (375px width), sticky CTA took up 22% of screen height. Users felt claustrophobic — several session recordings showed users repeatedly closing and reopening the app, confused by the persistent element." fix="CTA height reduced. Added collapse-on-scroll behavior: CTA collapses to 44px when user scrolls down (still visible, less obtrusive), expands when user scrolls up or stops. Complaint rate dropped; CTR maintained." />
          <FailurePoint title="Navigation breadcrumb added complexity on mobile" why="Desktop breadcrumb made sense. On mobile, adding a breadcrumb row consumed 36px of screen height. Users with shorter sessions didn't benefit from it; they exited before needing orientation context." fix="Made breadcrumb conditional: shows after user has navigated to second level or after 2 minutes on page. Not visible on first landing. Navigation confusion metric improved without the always-visible overhead." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Next Round</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Eye className="h-5 w-5 text-primary" />} title="Continuous Recording Review" body="Monthly session recording audit as a standing team practice — 50 recordings per month across product team. Institutionalize the evidence-gathering, not just run it when metrics are bad." />
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Automated Rage Click Monitoring" body="Rage click rate per screen tracked automatically. Alert if any screen crosses 15% rage click rate in a 7-day window. Catch new confusions as they emerge, not 8 months later." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Heatmap-Informed Design Reviews" body="All new feature designs reviewed against heatmap data from similar existing screens before shipping. If the pattern shows users don't scroll past 60% of the page, don't put critical content below 60%." />
        </div>
        <BlockQuote>We didn't need a better design team. We needed to watch real users more carefully and trust what we saw over what we assumed. The 28% conversion lift came from humility, not creativity.</BlockQuote>
      </section>
    </div>
  );
}
