import { Clock, Zap, Target, Brain, CheckCircle, BarChart3 } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard,
} from "@/components/case-study/shared";

export default function Mvp7DaysContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Seven Days to Know If the Idea Was Worth Building</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The context: we had three potential product directions in Q3. One needed 4 months to build properly before we could test market response. One needed 2 months. One — if we cut it aggressively — could be live in 7 days in a form that would tell us whether the demand hypothesis was real.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">We chose the 7-day option. Not because 7 days was comfortable (it wasn't — it was anxious and slightly chaotic), but because the alternative was spending 4 months building something that might fail, when we could spend 7 days learning whether we should build it at all.</p>
        <ProblemBox>The most expensive thing in product development isn't engineering time. It's building the wrong thing slowly. A 7-day MVP that proves a hypothesis wrong is worth more than a 4-month build that discovers the same failure.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">This is what those 7 days looked like — honestly, including the parts that didn't go according to plan.</p>
      </section>

      <SectionDivider label="The Hypothesis" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What We Were Testing</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The hypothesis: urban Indian professionals in the 28–40 age bracket with home loans want a tool that helps them optimize the intersection of EMI planning, tax benefits, and investment decisions — and they'd pay for it if it were good enough.</p>
        <DataTable
          headers={["Hypothesis Component", "How We'd Test It", "Pass Threshold"]}
          rows={[
            ["Demand: people search for this", "Keyword volume + Reddit/forum research", "> 50K monthly searches related problem"],
            ["Value: they'd use a tool", "Landing page + email capture", "> 8% email capture from landing page visitors"],
            ["Stickiness: they'd return", "3-day return from early users", "> 20% D3 return rate"],
            ["Willingness to pay", "Pricing page with fake payment wall", "> 3% click-to-pay (not actual payment)"],
          ]}
        />
        <InsightBox>The "fake payment wall" is worth calling out explicitly: we put a pricing page with a payment button that, when clicked, showed "Thanks! We're preparing your access — we'll email you." No actual payment processing. The click rate told us intent without requiring us to build billing infrastructure in 7 days.</InsightBox>
      </section>

      <SectionDivider label="Day by Day" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Actual Seven Days</h2>
        <p className="text-foreground/80 leading-[1.85] mb-4">What follows is the honest version — what happened each day, including the things that went sideways.</p>
        <div className="space-y-3">
          {[
            { day: "Day 1 (Monday)", what: "Scoping and cutting", detail: "Wrote the full feature list. Cut 70% of it. Cut another 20%. What remained: one calculator (prepay vs invest), one landing page, one email capture, one pricing page. That's the MVP. Nothing else." },
            { day: "Day 2 (Tuesday)", what: "Design and copy", detail: "One designer, 8 hours. Landing page wireframe, calculator UI, pricing page. Copy written by me — not ideal, but faster than briefing a copywriter. First draft looked fine on desktop. On mobile it was broken in ways we didn't notice until Day 3." },
            { day: "Day 3 (Wednesday)", what: "Build — and the first crisis", detail: "Engineer started building at 9am. By 2pm: the calculator logic had an edge case with balloon payments that would have given users wrong results. We almost shipped it. Caught it in late-afternoon review. Fixed it. Lost 3 hours." },
            { day: "Day 4 (Thursday)", what: "Mobile fix + tracking", detail: "The Day 2 mobile issue was real — 3 elements were overlapping on screens below 375px width. Fixed. Analytics implementation: GA4, Hotjar session recordings, email capture connected to Mailchimp." },
            { day: "Day 5 (Friday)", what: "Soft launch to warm audience", detail: "Shared with our existing WhatsApp community (1,200 members) and a personal LinkedIn post. Goal: 200 visitors as initial signal set. Got 840. Email capture rate: 11.4%. Way above the 8% threshold." },
            { day: "Day 6 (Saturday)", what: "Data review and first user calls", detail: "Three user calls with people who'd signed up. Two insights from the calls that changed the pricing page framing before the full launch. One insight I genuinely didn't expect: users wanted to save and share results — the shareable URL feature jumped to the top of the post-MVP backlog." },
            { day: "Day 7 (Sunday)", what: "Full launch + pricing page test", detail: "Posted to r/IndiaFinance, r/personalfinanceindia, shared in two private finance communities. By evening: 2,400 total visitors. Pricing page CTR: 6.2% (threshold was 3%). D3 return rate from Day 5 users: 29% (threshold was 20%). All four hypotheses passed." },
          ].map((d, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-muted/20">
              <div className="flex-shrink-0 w-32">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">{d.day}</p>
                <p className="text-sm font-semibold text-foreground mt-0.5">{d.what}</p>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed">{d.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="What Worked" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Principles That Made 7 Days Possible</h2>
        <BlockQuote>The constraint isn't 7 days. The constraint is: what is the minimum that tells you whether you should build the full thing? Find that minimum. Build only that. Ship it. Everything else is premature.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mb-5 mt-5">Three decisions that made the timeline work:</p>
        <div className="space-y-4">
          {[
            { title: "No backend on Day 1–7", detail: "Calculator logic in vanilla JavaScript, client-side only. No database, no user accounts, no server. Email capture via a third-party form. Pricing 'payment' was a mailto link dressed as a button. Zero infrastructure to build." },
            { title: "One feature, built properly", detail: "The temptation was to build three features to 60% quality. We built one feature to 95% quality — the calculator, with correct math and good mobile UX. The one thing we shipped was actually useful. That's what drove the email captures and the Reddit engagement." },
            { title: "User calls before full launch", detail: "Two user calls on Day 6, before the big launch on Day 7, changed the pricing page copy and added a line about shareable results. Those two calls were worth more than any A/B test we could have run. You learn different things from watching humans use something than from watching metrics describe how humans use something." },
          ].map((p, i) => (
            <div key={i} className="p-5 rounded-xl border border-primary/15 bg-primary/3">
              <p className="font-bold text-foreground mb-2">{p.title}</p>
              <p className="text-sm text-foreground/75 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 7-Day MVP Checklist</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Not a framework that scales to every product — a specific checklist that worked for this type of validation problem. Steal what's useful.</p>
        <DataTable
          headers={["Phase", "Action", "Time Budget"]}
          rows={[
            ["Define", "Write hypotheses. Define pass/fail thresholds BEFORE building anything.", "Day 1 morning: 3 hours max"],
            ["Cut", "Write full feature list. Cut 70%. Cut another 20%. Scope remaining ruthlessly.", "Day 1 afternoon: 2 hours"],
            ["Build", "One thing, properly. No backend. No accounts. No infrastructure.", "Day 2–4: focus"],
            ["Soft launch", "Warm audience only. Target: 200 visitors. Measure against thresholds.", "Day 5"],
            ["User calls", "3 calls. Watch, don't guide. Ask: what did you expect that you didn't find?", "Day 6"],
            ["Full launch", "Real channels. Measure. Decision by end of day.", "Day 7"],
          ]}
        />
      </section>

      <SectionDivider label="Technical Choices" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Technical Stack for 7 Days</h2>
        <div className="space-y-4">
          {[
            { title: "What We Used", points: ["Calculator logic: pure JavaScript — no framework", "Landing page: HTML + Tailwind CSS, deployed to Vercel in 30 minutes", "Email capture: Tally form embedded with 2 lines of HTML", "Analytics: GA4 + Hotjar (both free tiers)", "Pricing 'payment': Tally form disguised as a pricing CTA"] },
            { title: "What We Intentionally Didn't Build", points: ["User accounts (not needed to test demand)", "Database (no data to store — emails go to Mailchimp directly)", "Payment processing (fake wall tells us intent without billing infrastructure)", "Backend API (calculator is client-side; nothing to serve)"] },
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

      <SectionDivider label="Results" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Day 7 Results vs Hypothesis Thresholds</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="11.4%" label="Email Capture Rate" sub="threshold was 8%" color="text-green-600" />
          <MetricCard value="6.2%" label="Pricing Page CTR" sub="threshold was 3%" color="text-primary" />
          <MetricCard value="29%" label="D3 Return Rate" sub="threshold was 20%" color="text-green-600" />
          <MetricCard value="2,400" label="Total Visitors" sub="7 days, no paid traffic" color="text-primary" />
        </div>
        <DataTable
          headers={["Hypothesis", "Threshold", "Actual", "Result"]}
          rows={[
            ["Demand exists", ">50K monthly searches", "Confirmed via keyword research before Day 1", "✓ Pass"],
            ["Email capture rate", ">8%", "11.4%", "✓ Pass"],
            ["D3 return rate", ">20%", "29%", "✓ Pass"],
            ["Pricing page CTR", ">3%", "6.2%", "✓ Pass"],
          ]}
        />
        <TakeawayBox>All four hypotheses passed. The decision was easy: build the full product. The 7-day investment gave us certainty that a 4-month build would have given us — just 3.5 months earlier. That's 3.5 months we could spend building the right things instead of guessing.</TakeawayBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What 7-Day MVPs Teach You That Longer Builds Don't</h2>
        <div className="space-y-6">
          <Insight num="01" title="Thresholds before build, not after" body="Setting pass/fail thresholds before you build prevents post-hoc rationalization. It's easy to look at 6.2% pricing CTR after launch and say 'that's good' or 'that's bad' depending on how attached you are to the idea. Decide what good means before you know the number." />
          <Insight num="02" title="The fake payment wall is ethical when disclosed correctly" body="We told users on the 'payment successful' page that we were in early access and hadn't enabled payment yet. Nobody complained. The data it generated was genuinely valuable: 6.2% would have been willing to take out their card. That's a real signal." />
          <Insight num="03" title="User calls on Day 6 are worth more than a week of analytics" body="Three 30-minute calls before the big launch changed the product. The shareable URL feature — which became our highest-leverage retention mechanism — came entirely from one of those calls. You can't extract 'I want to share this with my husband' from a click heatmap." />
          <Insight num="04" title="One well-built feature beats three half-built ones" body="The reason the landing page performed well on Reddit and in communities was that the calculator actually worked well — correct math, good mobile UX, fast. A rushed, buggy calculator would have generated negative reviews instead of sharing. Quality on the one thing you ship matters more than breadth." />
        </div>
      </section>

      <SectionDivider label="What Hurt" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Days That Were Harder Than Expected</h2>
        <div className="space-y-4">
          <FailurePoint title="The balloon payment edge case almost shipped broken" why="Calculator logic was correct for standard home loans but gave wrong results when users had partial prepayments already made. We caught it at 5pm on Day 3 during internal testing. If it had shipped, users would have gotten wrong financial guidance." fix="Added 3 mandatory test cases to pre-launch checklist: standard loan, loan with partial prepayment, loan nearing end of tenure. Each must produce validated output before any launch." />
          <FailurePoint title="Day 6 user calls were booked too late" why="We scheduled user calls for Day 6 — one day before the big launch. The insights from those calls (shareable URL, pricing page copy) needed more time to implement properly. We rushed the changes." fix="For future MVPs: user calls on Day 5, soft launch on Day 6, full launch on Day 7. One extra day of buffer between insights and launch." />
        </div>
      </section>

      <SectionDivider label="After Day 7" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the MVP Became</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<CheckCircle className="h-5 w-5 text-primary" />} title="Full Product Build" body="Decision to build full product made Day 8, based on clean hypothesis validation. 8-week full build began immediately. The MVP's learnings (shareable URLs, decision framing, mobile UX priority) all incorporated from Day 1 of full build." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="12 Decision Calculators" body="The MVP calculator became the first of 12. Suite expansion prioritized by user requests from the MVP email list. 134K monthly users 6 months after full launch." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="7-Day MVP Framework" body="The process documented as a repeatable framework for the product team. Used for 3 subsequent feature validations. Two passed; one failed and was cancelled, saving an estimated 6 weeks of build time." />
        </div>
        <BlockQuote>Seven days of focused building that validates a hypothesis is not a shortcut. It's the responsible approach. The alternative — building for months before knowing if the hypothesis is real — is what actually wastes time.</BlockQuote>
      </section>
    </div>
  );
}
