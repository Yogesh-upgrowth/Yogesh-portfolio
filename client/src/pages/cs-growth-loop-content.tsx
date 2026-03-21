import { RefreshCw, Target, Brain, BarChart3, Users, Zap } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function GrowthLoopContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">We Spent More on Retargeting and Retention Got Worse</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">It took us an embarrassingly long time to notice the pattern. Every month: acquisition spend increased, retargeting budget increased, D30 retention stayed at 4%. The numbers moved in lockstep — and in the wrong direction for what we were trying to achieve.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">Month 8 of this cycle, I finally pulled a scatter plot that nobody had thought to run: retargeting spend vs D30 retention, plotted by month. Correlation: essentially zero. We'd been spending more to get less.</p>
        <ProblemBox>The leaky bucket insight is cliché by now, but we were living it in full fidelity: pour in users, watch them leave. Respond by pouring in more. The problem wasn't the faucet. It was that we'd never asked what the bucket was actually doing to hold water.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">The decision wasn't "spend more on retention." It was "design retention into the product" — because notifications and ads can remind someone to return, but they can't give them a reason.</p>
      </section>

      <SectionDivider label="The Retention Reality" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What the Cohort Curves Showed</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We pulled 12 months of retention cohorts. The curves were consistent to the point of being depressing — same shape, same slope, regardless of acquisition source, acquisition month, or how many times we'd run re-engagement campaigns.</p>
        <DataTable
          headers={["Retention Day", "Rate", "Sessions/User", "Revenue/User"]}
          rows={[
            ["D1", "42%", "1.0", "₹0 (onboarding)"],
            ["D7", "18%", "1.4", "₹28"],
            ["D14", "8%", "1.2", "₹41"],
            ["D30", "4%", "1.1", "₹58"],
            ["D60", "2.1%", "0.9", "₹72"],
          ]}
        />
        <InsightBox>D7 users had 1.4 sessions in 7 days. Not engaged — drifting. And critically: the D7 users who were still around at D30 showed the same 1.1 session average. Even the retained users weren't really retained — they were just slower to leave.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The re-engagement campaign metrics: 3.8% click rate on weekly push notifications, 2.1% on email blasts. We were interrupting people at a cost and achieving almost nothing from it. The users who came back via notifications left again within 2 days. Reminding someone to return isn't the same as giving them a reason to.</p>
      </section>

      <SectionDivider label="The Exception in the Data" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 4% Who Stayed — and What Was Different About Their D1</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Instead of studying why 96% left, we studied why 4% stayed. We pulled their D1 behavior and compared it to the users who churned within 30 days. The difference was striking and specific.</p>
        <DataTable
          headers={["D1 Action", "D30 Retention Rate", "Context"]}
          rows={[
            ["Set a price alert", "41%", "Created a product-native reason to return (alert fires = return visit)"],
            ["Saved a comparison", "34%", "Product now holds their work; return to use it"],
            ["Invited a friend (D1–3)", "38%", "Social commitment; can't leave without explaining to friend"],
            ["Used 3+ features on D1", "28%", "Depth of initial engagement predicts return"],
            ["Read an article/guide", "8%", "Information consumption — no product hook attached"],
            ["No core action on D1", "3%", "Never found the value; no reason to come back"],
          ]}
        />
        <TakeawayBox>Users who set a price alert on D1 had 41% D30 retention — 10× better than the baseline. The alert wasn't a notification feature. It was an engineering of a future return trigger. The user had effectively made an appointment with the product — and the product was going to call them when it was time.</TakeawayBox>
      </section>

      <SectionDivider label="The Insight" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Retention Is Designed on Day 1</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The data told us something counterintuitive: D30 retention wasn't determined by what we did at D14 or D21. It was determined by what happened on D1. By the time you hit Day 14 trying to win users back, the window had been closed since Day 7.</p>
        <BlockQuote>Notifications tell users to return. Price alerts create an event that pulls them back. One is a push; one is a pull. In the physics of user retention, pull always wins.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The redesign question became: how do we make every D1 onboarding create at least one product-native pull trigger? Not ask users to opt into notifications — give them something the product will do that requires them to return.</p>
      </section>

      <SectionDivider label="The Three Loops" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Engineering Pull-Based Return Reasons</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <FrameworkDimension
            icon={<RefreshCw className="h-5 w-5 text-primary" />}
            title="The Price Alert Loop"
            body="User sets alert → price changes → specific notification fires ('Your rate for Hero Splendor has dropped ₹340') → user returns to compare and decide → sets next alert. Self-reinforcing. Each loop creates the next one."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-green-600" />}
            title="The Weekly Savings Report"
            body="Every Friday: 'Your saved comparison moved — here's the current best option.' Not a newsletter. Not a blast. A specific update on their specific data. Something changed that's relevant to them. That's what earns the open."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Users className="h-5 w-5 text-purple-600" />}
            title="The Referral Return Loop"
            body="User invites friend → friend joins → user gets update: 'Ravi just saved ₹2,100 using your link.' Social progress report. Gives the referrer a reason to check in — and to share again. Referral becomes a retention mechanism, not just acquisition."
            color="bg-purple-50 border-purple-200"
          />
        </div>
        <DataTable
          headers={["Loop", "Return Trigger Type", "D14 Retention", "D30 Retention"]}
          rows={[
            ["Price Alert", "Product event (price changed)", "52%", "38%"],
            ["Weekly Report", "Data update (comparison moved)", "41%", "29%"],
            ["Referral Activity", "Social event (friend action)", "48%", "34%"],
            ["No Loop (control)", "Push notification / retargeting", "12%", "4%"],
          ]}
        />
      </section>

      <SectionDivider label="What Changed in the Product" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The D1 Onboarding Redesign</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The onboarding flow needed to do one thing above all else: get the user to create at least one loop trigger before they left. Previously, the hero D1 action was "browse plans" — passive, informational, creating no future pull.</p>
        <div className="space-y-4">
          {[
            { title: "Primary CTA Redesign", points: ["Old hero action: 'Browse Plans' (passive, no hook)", "New hero action: 'Set Your Alert' — price alert setup as primary D1 objective", "'Save this comparison' made default upon comparison completion", "Referral nudge moved to within first comparison result view (not buried in settings)"] },
            { title: "Notification Quality Overhaul", points: ["All calendar-based notifications disabled", "Only event-triggered notifications allowed: specific plan name, exact change amount", "Weekly report: uses user's actual saved comparison data — not generic market averages", "Price alert threshold: initially any change >0.1% → changed to >2% change (reduced fatigue)"] },
            { title: "Retargeting Cut", points: ["Retargeting spend reduced 40% — freed budget reinvested into loop infrastructure engineering", "Remaining retargeting: only for users who set an alert but haven't converted (high intent)", "General re-engagement campaigns eliminated entirely"] },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The 10-Week Journey</h2>
        <div className="space-y-4">
          <Phase num="Weeks 1–3" period="Diagnosis" title="Mapping D1 Action to D30 Retention" actions={["Pulled 12-month cohort data; tagged D1 action for every user", "Identified: alert-setters 10× better D30 than non-alert-setters", "Defined 3 loops; mapped to existing product capabilities"]} result="Loop hypothesis validated. Engineering brief written." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Weeks 4–6" period="Onboarding Redesign" title="Making Loop Activation the D1 Goal" actions={["D1 flow redesigned: 'Set Your Alert' as primary CTA", "Comparison save made default on completion", "Referral visible within comparison result (not in settings)"]} result="D1 loop activation: 18% → 47% of new users" color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Weeks 7–10" period="Infrastructure" title="Loops Running" actions={["Price change notification system: 4-hour refresh cadence", "Weekly savings report email: personalized per user's actual data", "Referral activity feed in dashboard"]} result="D14 retention rising: 8% → 19%. D30 moving." color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Week 10+" period="Compounding" title="The Curves Start Changing" actions={["Loop 1 users upgrading to Loop 2 at 41%", "Retargeting spend cut 40% — organic return rate increased", "New D30 retention: 18% across full user base"]} result="D30 retention: 4% → 18%. Retargeting spend down 40%. Revenue per retained user up 119%." color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Changed in 10 Weeks</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="4.5×" label="D30 Retention" sub="4% → 18%" color="text-green-600" />
          <MetricCard value="47%" label="D1 Loop Activation" sub="up from 18%" color="text-primary" />
          <MetricCard value="−40%" label="Retargeting Spend" sub="replaced by product-native pull" color="text-green-600" />
          <MetricCard value="+119%" label="Revenue per Retained User" sub="at D30" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After"]}
          rows={[
            ["D30 Retention", "4%", "18%"],
            ["D14 Retention", "8%", "19%"],
            ["Revenue per User at D30", "₹58", "₹127"],
            ["Retargeting Spend", "₹2.1L/month", "₹1.3L/month"],
            ["Organic Return Rate", "18%", "43%"],
          ]}
        />
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What I Know Now That I Wish I'd Known Earlier</h2>
        <div className="space-y-6">
          <Insight num="01" title="D30 retention is designed on D1, not D14" body="D1 action type predicted D30 retention with a 0.74 correlation in our data. By Day 7 without a loop trigger, users were effectively gone — the decision had already been made. Every retention investment at D14+ was catching users who'd already moved on." />
          <Insight num="02" title="Event-triggered notifications have 15× the impact of calendar-based" body="Calendar-based notifications (3/week): 3.8% click rate. Price alert fired (specific, event-driven): 61% open rate, 38% return visit. One is spam. One is a service. The production cost is the same." />
          <Insight num="03" title="Social loops create retention obligations, not just incentives" body="Users who referred a friend had 2.8× D30 retention. The social dimension isn't just about acquisition — it's about accountability. When someone you know joined because of you, leaving feels like letting them down." />
          <Insight num="04" title="Cutting retargeting spend improved retention metrics" body="We cut 40% of retargeting spend and redirected the budget to product engineering for loops. Retention improved. More retargeting spend doesn't fix a pull problem — only pull fixes a pull problem." />
        </div>
      </section>

      <SectionDivider label="What Hurt Us First" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Mistakes We Made Before Getting It Right</h2>
        <div className="space-y-4">
          <FailurePoint title="Price alert notifications fired too often" why="Initial threshold: any price change >0.1%. Users received 3–5 notifications per day during volatile market periods. Unsubscribe rate hit 34% in week 2. We'd built a spam machine, not a useful alert." fix="Threshold raised to >2% change AND a relevance filter (user's specific comparison category). Notifications dropped from 4/day to 1.4/week. Unsubscribe rate fell to 3%. Alert open rate improved 4×." />
          <FailurePoint title="Savings report email used market averages, not user data" why="'You could save ₹1,200 vs market average' felt abstract and untrustworthy. Users didn't know what 'market average' meant for their situation." fix="Changed to: 'Your saved plan for Hero Splendor has changed ₹340 since you compared. Here's the current best option.' Specific to their plan. Click rate improved 4× vs generic version." />
          <FailurePoint title="Pushing price alert setup too early killed initial browsing intent" why="Making price alert setup the hero CTA immediately confused users who came to browse first. 'What am I setting an alert for if I haven't seen the plans yet?' Exit rate increased during first test." fix="Browse-first flow: user sees plans, does initial comparison, then 'Save this comparison' CTA appears at natural completion. Alert setup as second action, not first. Same loop activation, less friction." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Where the Loops Go Next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Predictive Price Alerts" body="Instead of waiting for prices to change, predict when they will. Seasonal patterns, provider renewal cycles, regulatory changes. Alert users proactively before the change — not reactively after." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Cross-Product Loops" body="Extend loop logic across categories. An insurance alert user showing car loan comparison behavior should get car loan alerts automatically. Cross-sell path as a retention mechanism." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Loop Health Monitoring" body="Real-time view of loop activation rates, loop return rates, and which loops are degrading over time. Enable the product team to intervene before retention metrics start moving — not after." />
        </div>
        <BlockQuote>We didn't fix retention by spending more on notifications. We fixed it by building a product that gave users a genuine, specific, product-native reason to return — one that existed whether or not we sent them a reminder.</BlockQuote>
      </section>
    </div>
  );
}
