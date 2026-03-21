import { Cpu, Brain, Target, Zap, BarChart3, TrendingUp } from "lucide-react";
import {
  InsightBox, ProblemBox, TakeawayBox, BlockQuote, SectionDivider,
  DataTable, MetricCard, Phase, Insight, FailurePoint, FutureCard, FrameworkDimension,
} from "@/components/case-study/shared";

export default function AiRecommendationContent() {
  return (
    <div className="space-y-2">

      <section id="hook" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Our First AI Recommendation Engine Made Things Worse</h2>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The launch of V1 was enthusiastic. We'd spent 3 months building a collaborative filtering model, trained it on 8 months of user behavior, and shipped a "Recommended for You" section to the comparison results page. The day after launch, our data scientist Karan ran the metrics. Conversion rate for users who saw recommendations: down 11%.</p>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-4">The model was technically correct. It was recommending plans that users statistically similar to the current user had chosen. The problem: it was recommending plans that users similar to the current user had chosen after completing a transaction — which was completely wrong for a user still mid-comparison. We were showing closing recommendations to users who were still opening.</p>
        <ProblemBox>Recommendation systems fail when they optimize for the wrong moment. A recommendation for someone who's decided is different from a recommendation for someone who's still comparing. Same user, same model — completely different need. We'd built one model for both contexts.</ProblemBox>
        <p className="text-lg text-foreground/80 leading-[1.85] mb-6">V2 took a different approach. The story of building V2 — and what it took to actually make recommendations that helped — is more interesting than the original launch.</p>
      </section>

      <SectionDivider label="Why V1 Failed" />

      <section id="early-data" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Contextual Mismatch Problem</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">Post-mortem analysis of V1 showed that the model was surfacing accurate recommendations — but accurate for the wrong moment in the user journey.</p>
        <DataTable
          headers={["User Journey Stage", "What User Needs", "V1 Recommendation", "Result"]}
          rows={[
            ["Early comparison (first visit)", "Orientation — what options exist?", "Best plans bought by converters", "Premature — users felt pushed"],
            ["Mid-comparison (filtering)", "Narrowing — which plans fit my criteria?", "Best plans bought by converters", "Wrong filter — converters had different criteria"],
            ["Decision stage (comparing 2-3 plans)", "Confirmation — am I making the right choice?", "Best plans bought by converters", "Helpful — this is the right moment"],
            ["Post-quote (reviewing quote)", "Validation — is this a good deal?", "Alternative plans at lower price", "Useful — showed alternatives correctly"],
          ]}
        />
        <InsightBox>V1 was right in one of four contexts. The model wasn't wrong — the context classification was missing entirely. We'd applied one model output to all four stages, and only one of them was actually the right moment for that recommendation style.</InsightBox>
      </section>

      <SectionDivider label="The Redesign" />

      <section id="segmentation" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Mapping Recommendation Type to Journey Stage</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">V2 started with a fundamental question: what does "helpful" mean at each stage of the user's decision journey? The answer was different for each stage — which meant the recommendation model needed to be stage-aware.</p>
        <DataTable
          headers={["Stage", "What 'Helpful' Means", "Recommendation Type", "Basis"]}
          rows={[
            ["Orienting (1–2 sessions)", "Show me what's available for my context", "Category recommendations", "User's stated coverage need"],
            ["Comparing (3+ sessions)", "Help me narrow down", "Filter-matched recommendations", "User's active filter behavior"],
            ["Deciding (2–3 plans shortlisted)", "Confirm I'm making a good choice", "Social proof + best value", "Similar-user purchase + value comparison"],
            ["Post-quote (quote in hand)", "Is there a better option?", "Price-optimized alternatives", "Same coverage, lower premium"],
          ]}
        />
        <TakeawayBox>The "best for similar users" collaborative filtering output was only appropriate at the Deciding stage. At every other stage, a different recommendation logic was more helpful. V2 needed four different recommendation modes, not one — and a classifier to detect which stage the user was in.</TakeawayBox>
      </section>

      <SectionDivider label="The Architecture" />

      <section id="reframe" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Stage-Aware Recommendations</h2>
        <p className="text-foreground/80 leading-[1.85] mb-5">The key architectural shift: before generating a recommendation, the system first classifies the user's journey stage from behavioral signals. The stage classification drives the recommendation mode. The recommendation engine itself is secondary to the classification.</p>
        <BlockQuote>A recommendation engine without journey stage awareness is a product that knows a lot of things — but can't tell which of the things it knows are relevant to you right now. The stage classifier is what makes the knowledge contextually useful.</BlockQuote>
        <p className="text-foreground/80 leading-[1.85] mt-5">The stage classifier: a simple decision tree based on session count, plan shortlist status, filter usage, and quote status. Not ML — rule-based, because the stages are distinct enough that heuristics outperformed any model we tried on this binary classification problem.</p>
      </section>

      <SectionDivider label="V2 Architecture" />

      <section id="framework" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Four-Mode Recommendation System</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <FrameworkDimension
            icon={<Target className="h-5 w-5 text-primary" />}
            title="Mode 1: Context Matching (Orienting)"
            body="Based on: product category selected, stated coverage need (self / family / senior), city, age. Returns 3 most-viewed plans for that context. No collaborative filtering — purely contextual. Goal: reduce orientation overwhelm."
            color="bg-primary/5 border-primary/20"
          />
          <FrameworkDimension
            icon={<Brain className="h-5 w-5 text-green-600" />}
            title="Mode 2: Filter Inference (Comparing)"
            body="Observes user's active filters (price range, sum insured, network hospital preference). Recommends plans that match current filters but the user hasn't yet viewed. 'Based on your filters, you might also want to look at...' Expands exploration without disrupting it."
            color="bg-green-50 border-green-200"
          />
          <FrameworkDimension
            icon={<Cpu className="h-5 w-5 text-purple-600" />}
            title="Mode 3: Social Proof (Deciding)"
            body="Collaborative filtering: users with similar profile (age bracket, city, coverage need, shortlisted plans) and their purchase choice. Returns the plan most commonly purchased by users with this specific shortlist combination. Answers 'what did people like me, with the same shortlist, ultimately choose?'"
            color="bg-purple-50 border-purple-200"
          />
          <FrameworkDimension
            icon={<Zap className="h-5 w-5 text-orange-600" />}
            title="Mode 4: Price Optimization (Post-Quote)"
            body="At quote receipt: 'Here are 2 plans with similar coverage at lower premium.' Comparison driven by coverage equivalence score, not just feature matching. Shows concrete rupee savings. Highest-converting mode: 14.2% click-through."
            color="bg-orange-50 border-orange-200"
          />
        </div>
      </section>

      <SectionDivider label="Technical Build" />

      <section id="system-design" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">The Infrastructure</h2>
        <div className="space-y-4">
          {[
            { title: "Stage Classifier", points: ["Rule-based decision tree: session count (1–2 vs 3+ vs quote received), shortlist size (0, 1–2, 3+), quote status", "Evaluated every page load — stage can change within a session", "6 rules, 100% interpretable, 89% accurate vs ground truth labels from user interviews"] },
            { title: "Mode 1–3: Real-Time Matching", points: ["Context matching: database query against plan catalog with coverage/city/age filters", "Filter inference: live read of active filter state → matching plans not yet viewed", "Collaborative filtering: precomputed similarity matrix, updated nightly; lookup at serve time"] },
            { title: "Mode 4: Coverage Equivalence Scoring", points: ["Plans compared on 8 coverage dimensions (sum insured, room rent, day care, critical illness, etc.)", "Equivalence score: weighted similarity across 8 dimensions (weights from user interview data)", "If score > 0.82 AND premium lower: surface as alternative. Threshold calibrated to avoid showing plans that are cheaper but actually meaningfully worse"] },
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
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">V1 vs V2: The Full Comparison</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <MetricCard value="+19%" label="Conversion Rate" sub="vs pre-recommendation baseline" color="text-green-600" />
          <MetricCard value="14.2%" label="Post-Quote CTR" sub="Mode 4 — highest of any mode" color="text-primary" />
          <MetricCard value="−11%" label="V1 Conversion Impact" sub="why we rebuilt it" color="text-green-600" />
          <MetricCard value="89%" label="Stage Classifier Accuracy" sub="rule-based, interpretable" color="text-primary" />
        </div>
        <DataTable
          headers={["Mode", "Stage", "Click-Through Rate", "Conversion Lift"]}
          rows={[
            ["Mode 1: Context Matching", "Orienting", "8.2%", "+6% at that stage"],
            ["Mode 2: Filter Inference", "Comparing", "11.4%", "+9% at that stage"],
            ["Mode 3: Social Proof", "Deciding", "9.8%", "+14% at that stage"],
            ["Mode 4: Price Optimization", "Post-Quote", "14.2%", "+22% at that stage"],
          ]}
        />
        <TakeawayBox>The biggest insight: Mode 4 (price optimization at the post-quote stage) outperformed everything because it appeared at the highest-intent moment with the most concrete value proposition. "This plan has equivalent coverage and costs ₹3,200 less per year" is the right message for someone who has just received a quote and is considering whether to proceed.</TakeawayBox>
      </section>

      <SectionDivider label="Insights" />

      <section id="insights" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">What Building V1 and V2 Taught Me</h2>
        <div className="space-y-6">
          <Insight num="01" title="Recommendation systems need journey stage awareness before they need accuracy" body="V1 was technically accurate — it recommended plans that similar users purchased. V2 classified the journey stage first, then chose the recommendation logic. The stage awareness made a larger impact than improving model accuracy would have." />
          <Insight num="02" title="Collaborative filtering is right for deciding, not for orienting" body="'People like you chose this' is compelling when you're making your final decision. It's premature and slightly pushy when you're still exploring. Every recommendation logic has an appropriate moment — force-fitting one logic to all moments is what makes recommendation systems feel annoying." />
          <Insight num="03" title="Rule-based classifiers beat ML when the stages are clean" body="We tried an ML classifier for journey stage detection. F1 score: 0.76. Rule-based decision tree: 0.89. The stages were distinct enough that heuristics outperformed the model — and were 100% interpretable when they were wrong. For this problem, simpler was better." />
          <Insight num="04" title="Post-quote is the highest-leverage recommendation moment in financial comparison" body="Users who have received a quote are committed enough to evaluate alternatives but not yet so committed that switching feels like starting over. That window — post-quote, pre-purchase — is the highest-converting recommendation moment in our entire funnel." />
        </div>
      </section>

      <SectionDivider label="Failures" />

      <section id="failures" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">Beyond the V1 Failure</h2>
        <div className="space-y-4">
          <FailurePoint title="Coverage equivalence threshold too low initially" why="Mode 4 initially surfaced plans with equivalence score > 0.70. This was too low — plans that were cheaper but meaningfully worse (lower room rent, no critical illness coverage) were being shown as 'similar.' Several users complained in support about recommended plans being worse." fix="Threshold raised to 0.82. Added explicit coverage comparison: showed the 3 dimensions where the cheaper plan was different, with clear labeling of whether the difference was significant or negligible. Complaints eliminated; CTR maintained." />
          <FailurePoint title="Mode 3 social proof backfired for non-standard profiles" why="'Users similar to you chose Plan X' — for users with atypical coverage needs (very high or very low sum insured requirements), 'similar users' were actually not that similar. Recommendations were off-profile." fix="Added profile distance score to Mode 3: if the nearest similar users have similarity < 0.60, suppress social proof recommendation and fall back to Mode 2 (filter inference). Social proof only shown when the peer group is genuinely similar." />
        </div>
      </section>

      <SectionDivider label="Future" />

      <section id="future" className="scroll-mt-28">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-10 mb-4">V3 Directions</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <FutureCard icon={<Brain className="h-5 w-5 text-primary" />} title="Hesitation Detection" body="Identify behavioral signals of decision hesitation (back-and-forth between same two plans, long pauses, return visits without progress). Trigger a specific 'help me decide' recommendation mode with a clearer comparison framework." />
          <FutureCard icon={<Cpu className="h-5 w-5 text-primary" />} title="Explainable Recommendations" body="Current recommendations show the plan but not why. Next: 'We recommend this because 84% of people with your profile bought it after comparing these 3 plans.' Explanation increases click-through and builds trust in the recommendation." />
          <FutureCard icon={<BarChart3 className="h-5 w-5 text-primary" />} title="Recommendation Outcome Tracking" body="Full attribution: recommendation shown → clicked → converted → LTV outcome. Currently measuring CTR and stage conversion. Next: track whether recommendation-influenced purchases have different LTV from self-directed purchases." />
        </div>
        <BlockQuote>The recommendation engine that made things worse taught us more than the one that worked. V1 failed because it didn't understand context. V2 succeeded because it classified context first — and let that drive everything else.</BlockQuote>
      </section>
    </div>
  );
}
