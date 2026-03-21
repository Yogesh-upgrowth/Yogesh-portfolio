import { TrendingUp, Zap, Target, Brain, BarChart3, Database } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function PredictHighLtvContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Chart That Silenced a Room</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">It was a Thursday afternoon in July. Our finance lead, Priya, had been quiet through most of the revenue review. Then she put up one chart — not a deck, just one slide — and the room stopped.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">It showed that <strong className="text-foreground">2.3% of our 40,000 registered users were generating 71% of all revenue.</strong> The other 97.7% — the people we'd spent months and crores acquiring — were effectively break-even or negative.</p>
        <ProblemBox>We weren't running a growth business. We were running an expensive lottery. And we'd been optimizing the lottery ticket price, not the odds.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">I remember sitting there thinking: we don't need more users. We need to figure out who those 2% are — <em>before</em> we spend money on them.</p>
      </section>

      <SectionDivider label="What the Data Said" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Two Very Different Businesses Hiding in One Dashboard</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The problem with averages is they lie gracefully. Our average revenue per user was ₹18/month. Respectable, right? Not when you disaggregate it.</p>
        <DataTable
          headers={["Segment", "Users", "Avg Monthly Revenue", "Revenue Share"]}
          rows={[
            ["All Registered Users", "40,000", "₹18", "—"],
            ["Monthly Active Users", "8,200 (20.5%)", "₹87", "—"],
            ["Revenue-Generating Users", "920 (2.3%)", "₹1,390", "71%"],
            ["Everyone else", "39,080 (97.7%)", "₹5.40", "29%"],
          ]}
        />
        <InsightBox>₹18 average. ₹1,390 reality. Decisions made on blended averages are decisions made on fiction. We'd been optimizing the wrong number for six months.</InsightBox>
        <p className="text-foreground/80 leading-[1.85] mt-5">The marketing team's instinct was to improve onboarding and run re-engagement campaigns. Both felt right. Both were wrong — because they assumed the problem was activation, not selection.</p>
      </section>

      <SectionDivider label="Behavioral Segmentation" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What High-LTV Users Did in the First 72 Hours</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">We pulled 18 months of user event logs and manually tagged every user as High-LTV or not. Then we looked backwards: what did the 2.3% do in their first 3 days that the other 97.7% didn't?</p>
        <DataTable
          headers={["Cohort", "72-hr Behavior Pattern", "90-Day LTV", "D30 Retention"]}
          rows={[
            ["Explorer (never converts)", "1 session, bounces", "₹0", "3%"],
            ["One-and-Done", "1 transaction, disappears", "₹45", "8%"],
            ["Occasional User", "3+ sessions, 2 features", "₹380", "24%"],
            ["High-LTV Power User", "5+ sessions, 4+ features, D2-3 return", "₹1,390", "79%"],
          ]}
        />
        <TakeawayBox>The Power Users didn't become valuable slowly. They showed every signal of it within 72 hours of signup — they just had no idea they were being watched. The question was whether we were reading the signals in time to act.</TakeawayBox>
        <p className="text-foreground/80 leading-[1.85] mt-4">One pattern was particularly striking: High-LTV users almost always returned on Day 2 or Day 3. Not Day 7. Not "whenever they remembered." Within 72 hours. That return visit was the single strongest predictor we found.</p>
      </section>

      <SectionDivider label="The Shift" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Rethinking the Problem Entirely</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The team's first response was "let's improve onboarding so more users behave like the 2%." I pushed back hard on this. You can't engineer someone into becoming a high-intent user through better UX. You can make it easier for them to express that intent — but you can't manufacture it.</p>
        <BlockQuote>The 2% weren't special because of our product. They were special because of who they were when they arrived. Our job was to find more of them — and recognize them faster.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The reframe: stop trying to convert everyone, start predicting who's worth investing in — at the 72-hour mark, not after 30 days of guessing.</p>
      </section>

      <SectionDivider label="The Framework" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Lifetime Value Signal Architecture</h2>
        <p className="text-foreground/80 leading-[1.85] mb-6">We called it LVSA — not because the name matters, but because it helped the team think about it as a system rather than a model. Four layers, all dependent on each other.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Database className="h-5 w-5 text-primary" />}
            title="Signal Collection"
            body="Real-time event capture: session depth, feature sequencing, return timing, comparison actions. Each event assigned a predictive weight based on correlation with 90-day LTV — not based on recency or instinct."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-green-600" />}
            title="72-Hour Scoring"
            body="XGBoost model trained on 18 months of data. Score computed at the 72-hour mark: 0–100. ≥65 = High-LTV candidate. Threshold chosen after testing 60, 65, and 70 — 65 gave the best precision-recall tradeoff for our cost of white-glove treatment."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-purple-600" />}
            title="Experience Routing"
            body="Score ≥65: white-glove onboarding, priority support, early premium access. Score ≥80: VP-level manual outreach within 4 hours. Everyone else: standard retention flow. Same product, different investment level."
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<TrendingUp className="h-5 w-5 text-orange-600" />}
            title="Monthly Model Refresh"
            body="Model retrained monthly with actual 90-day LTV outcomes. This part most teams skip — and it's why their models degrade. Each cycle we improve; each cycle the prediction gets sharper. Score drift alerts trigger manual review."
            color="bg-orange-50 border-orange-200"
          />
        </div>
        <DataTable
          headers={["Behavioral Signal", "Predictive Weight", "Why"]}
          rows={[
            ["Return visit within 72 hours", "0.28", "Strongest single predictor of retention"],
            ["4+ features used in session 1", "0.22", "Depth of exploration = serious intent"],
            ["Comparison action performed", "0.18", "Decision-stage behavior"],
            ["Session duration > 8 minutes", "0.15", "Engagement quality"],
            ["Share or export action", "0.10", "Product-as-tool signal"],
            ["Push notification opt-in", "0.07", "Communication willingness"],
          ]}
        />
      </section>

      <SectionDivider label="System Design" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">How It Was Built</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The engineering side took 6 weeks. Not because it was technically complex — it wasn't — but because we had to fight about what it should and shouldn't do for most of Week 1.</p>
        <div className="space-y-4">
          {[
            { layer: "Data Pipeline", points: ["Event stream: Segment → Kafka → real-time feature store", "26-feature vector built per user, updated every 2 hours for first 72 hours", "LTV probability score computed at the 72-hour mark and stored in user profile"] },
            { layer: "Product Routing", points: ["High-LTV flag surfaced in internal CRM and support tooling", "White-glove email sequence triggered automatically for ≥65 scorers", "Manual review queue for ≥80 scorers — VP outreach within 4 hours"] },
            { layer: "Acquisition Impact", points: ["Lookalike audiences built from High-LTV cohort behavioral profile (not just demographics)", "CAC ceiling raised 3× for campaigns targeting high-LTV lookalikes", "Source-level LTV attribution: organic had 2.1× more High-LTV users than paid social"] },
            { layer: "Feedback Loop", points: ["Monthly model refresh with actual 90-day revenue outcomes", "Score drift monitoring weekly — any sudden change triggers investigation", "A/B test: white-glove vs standard for borderline scores (60–65)"] },
          ].map((l) => (
            <div key={l.layer} className="p-6 rounded-xl border border-border bg-muted/20">
              <p className="font-bold text-foreground mb-3 text-primary">{l.layer}</p>
              <ul className="space-y-2">
                {l.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground/70"><span className="text-primary mt-0.5 shrink-0">→</span>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider label="Execution" />

      <section id="execution" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">90 Days, in Honest Detail</h2>
        <div className="space-y-4">
          <Phase num="Weeks 1–4" period="The Signal Hunt" title="Finding What Actually Predicted LTV" actions={["Pulled 18 months of user logs; manually labeled 12,000 users as High/Low LTV", "Built correlation heatmap of 60+ behavioral signals vs actual 90-day revenue", "Narrowed to 6 signals with combined AUC of 0.78 — not perfect, but actionable"]} result="Signal hypothesis validated. Confidence to build the model." color="border-blue-200 bg-blue-50" resultColor="text-blue-700" />
          <Phase num="Weeks 5–8" period="Building and Testing" title="Model Training and Threshold Calibration" actions={["XGBoost trained: 18 months, 12K labelled users, 26 features", "Threshold tested at 60, 65, 70 — 65 gave best precision-recall tradeoff", "81% precision, 74% recall at threshold 65"]} result="Model live in staging. First live scoring run on new signups." color="border-green-200 bg-green-50" resultColor="text-green-700" />
          <Phase num="Weeks 9–12" period="Routing Live" title="White-Glove Treatment for High Scorers" actions={["High-LTV routing triggered: email sequence, priority support, early premium access", "Lookalike audiences pushed to Meta and Google from High-LTV behavioral profiles", "CAC ceiling raised 3× for High-LTV-targeted campaigns"]} result="Revenue per acquired user +61% in first cohort" color="border-purple-200 bg-purple-50" resultColor="text-purple-700" />
          <Phase num="Month 4+" period="Compounding" title="Optimization and Source Attribution" actions={["Monthly model refresh established as standard process", "Source-level LTV attribution added — organic 2.1× better than paid social", "3 underperforming paid channels paused based on LTV data, not just CAC"]} result="Blended CAC down 34% without reducing acquisition volume" color="border-orange-200 bg-orange-50" resultColor="text-orange-700" />
        </div>
      </section>

      <SectionDivider label="Results" />

      <section id="results" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Actually Changed</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="+61%" label="Revenue per Acquired User" sub="first cohort after routing" color="text-green-600" />
          <MetricCard value="−34%" label="Blended CAC" sub="without volume reduction" color="text-primary" />
          <MetricCard value="81%" label="Model Precision" sub="at 65-score threshold" color="text-green-600" />
          <MetricCard value="2.7×" label="High-LTV User Acquisition" sub="YoY vs pre-model baseline" color="text-primary" />
        </div>
        <DataTable
          headers={["Metric", "Before", "After (90 Days)"]}
          rows={[
            ["High-LTV User Share of New Cohort", "2.3%", "6.1%"],
            ["Revenue per Acquired User", "₹18/mo avg", "₹29/mo avg"],
            ["Blended CAC", "₹340", "₹225"],
            ["Paid Channel ROAS", "1.8×", "3.4×"],
            ["Model Precision", "—", "81%"],
          ]}
        />
        <TakeawayBox>The number I'm proudest of isn't the revenue lift. It's that the High-LTV share of new cohorts went from 2.3% to 6.1%. We didn't get lucky more often — we got better at recognizing luck when it arrived.</TakeawayBox>
      </section>

      <SectionDivider label="Deep Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What I'd Tell Someone Starting This Today</h2>
        <div className="space-y-6">
          <Insight num="01" title="LTV is a sorting problem disguised as a growth problem" body="Most teams try to grow LTV by adding features, improving onboarding, or running engagement campaigns. The real lever is routing: get high-LTV users to intensive engagement early; let low-LTV users self-serve. The product already existed. The routing didn't." />
          <Insight num="02" title="The 72-hour window matters more than any other" body="Behavior in the first 3 days after signup predicted 90-day LTV better than any demographic, channel, or survey response. High-value users show themselves almost immediately — if you're looking." />
          <Insight num="03" title="Set different CAC ceilings by predicted LTV segment" body="If you apply one CAC ceiling across all users, you systematically underspend acquiring high-LTV users and overspend on low-LTV ones. Differentiated CAC limits restructure the economics of every channel you run." />
          <Insight num="04" title="Precision beats recall when white-glove treatment has real costs" body="At 81% precision and 74% recall, we deliberately accepted missing some true High-LTV users. The cost of treating false positives (low-LTV users) to white-glove standards was higher than missing true positives. Know your cost structure before choosing your threshold." />
          <Insight num="05" title="The model output becomes your best acquisition brief" body="Once you know exactly who your high-LTV users are at a behavioral level, building lookalike audiences is almost automatic. The model didn't just improve retention investment — it improved acquisition targeting simultaneously." />
        </div>
      </section>

      <SectionDivider label="What Didn't Work" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Mistakes I'm Glad We Made Early</h2>
        <div className="space-y-4">
          <FailurePoint title="Our first model had 83 features and overfit badly" why="Validation AUC looked great at 0.84. Live scoring performance degraded within 3 weeks — the model had memorized training noise. We were celebrating the wrong metric." fix="Cut to the top 10 features by mutual information score. Validation AUC dropped to 0.78, but live scoring AUC improved to 0.81. Less is genuinely more when the signal-to-noise ratio is this low." />
          <FailurePoint title="We started white-glove treatment at score ≥60" why="Felt conservative enough. It wasn't. 40% of users above 60 churned within 30 days — too many false positives getting expensive treatment." fix="Raised threshold to 65. False positive rate dropped 51%. Manual VP outreach reserved for ≥80. At that threshold, paid-to-conversion was 3.4×." />
          <FailurePoint title="We forgot to surface the score to the sales team" why="High-LTV users were being routed to the right email sequences but handled identically to everyone else in sales calls. Reps had no visibility into their score." fix="LTV score added to CRM view. Tiered playbooks by score band. Score ≥80 users got VP-level call within 4 hours of signup. That change alone moved conversion rate for those users by 28%." />
        </div>
      </section>

      <SectionDivider label="Where This Goes" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Next Version of This</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Real-Time Score Updates" body="Moving from 72-hour static scoring to continuous — recalculated every 6 hours. Some users cross the threshold on Day 4 or 5. We're currently missing them." />
          <FutureCard icon={<Zap className="h-5 w-5 text-primary" />} title="Score Velocity Triggers" body="It's not just the score — it's the direction and speed of change. A user going from 45 to 72 in 48 hours is different from one who's been at 73 for 5 days. Velocity should trigger different interventions." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Churn-Weighted LTV Scoring" body="Incorporate churn probability into the score. High LTV with high churn risk needs a different intervention than stable mid-LTV. Combining both would create a genuinely actionable risk-adjusted view." />
        </div>
        <BlockQuote>We didn't need more users. We needed to get much better at recognizing the right ones the moment they walked in the door.</BlockQuote>
      </section>
    </div>
  );
}
