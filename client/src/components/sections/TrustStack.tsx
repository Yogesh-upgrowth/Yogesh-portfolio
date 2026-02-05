import { useState } from "react";
import { ChevronDown, Compass, TrendingUp, DollarSign, Layers } from "lucide-react";

const beliefInsights = [
  {
    headline: "I've scaled products by finding leverage where most teams don't look.",
    content: "Most growth stories talk about traffic spikes and viral loops. Mine usually start with a quieter question: \"Where is user intent leaking — and why?\" That single shift — from chasing volume to engineering intent — changed the trajectory of platforms entirely."
  },
  {
    headline: "I don't add monetisation. I design it into behaviour.",
    content: "Most products don't fail at monetisation because users won't pay. They fail because paying feels disconnected from why the user came in the first place. Once monetisation was treated as a continuation of user intent (not an interruption), outcomes changed dramatically."
  }
];

const capabilities = [
  {
    icon: Compass,
    title: "Product Strategy",
    outcome: "Clear roadmaps aligned with business goals",
    featured: true
  },
  {
    icon: TrendingUp,
    title: "Growth Optimization",
    outcome: "Higher conversions, lower CAC"
  },
  {
    icon: DollarSign,
    title: "Monetisation",
    outcome: "Sustainable revenue streams"
  },
  {
    icon: Layers,
    title: "Platform Scaling",
    outcome: "Scale 10x without breaking",
    fullWidth: true
  }
];

const executionSteps = [
  {
    number: "01",
    title: "Clarity",
    headline: "Turn ambiguity into a shared problem statement.",
    body: "I align founders, leadership, and teams on one clear definition of the problem — grounded in revenue, cost, and user behaviour.",
    outcome: "Fewer debates. Faster decisions. No re-litigation every sprint."
  },
  {
    number: "02",
    title: "Focus",
    headline: "Identify what not to build.",
    body: "I isolate the 1–2 levers that actually move outcomes — and explicitly deprioritise everything else.",
    outcome: "Roadmaps get shorter. Teams stop thrashing. Progress becomes visible."
  },
  {
    number: "03",
    title: "Leverage",
    headline: "Design solutions that compound, not patch.",
    body: "I shape product and monetisation decisions so they scale with usage, volume, and time — without increasing operational load.",
    outcome: "Growth stops creating chaos. Margins and reliability improve together."
  },
  {
    number: "04",
    title: "Results",
    headline: "Ship with accountability to numbers.",
    body: "I stay close through launch and iteration, tying execution back to the metrics that matter — adoption, revenue, retention, or cost.",
    outcome: "Initiatives don't just ship. They pay off."
  }
];

export default function TrustStack() {
  const [beliefOpen, setBeliefOpen] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="trust-stack" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Desktop: 3 columns, Tablet: 2 columns, Mobile: 1 column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          
          {/* LEFT — BELIEF */}
          <div className="lg:col-span-1 order-1">
            <div className="h-full">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Belief</p>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 leading-tight">
                I don't just ship features.<br />
                I build <span className="text-primary/90">engines for growth</span>.
              </h3>
              
              <div className="space-y-3 mb-6">
                {beliefInsights.map((item, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setBeliefOpen(beliefOpen === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors min-h-[56px]"
                      data-testid={`belief-dropdown-${index}`}
                    >
                      <span className="text-sm font-medium text-foreground pr-3 leading-snug">{item.headline}</span>
                      <ChevronDown 
                        className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                          beliefOpen === index ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    {beliefOpen === index && (
                      <div className="px-4 pb-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                If you want execution help, there are many PMs.<br />
                If you want someone who thinks like an owner, keep exploring.
              </p>
            </div>
          </div>

          {/* CENTER — CAPABILITY */}
          <div className="lg:col-span-1 order-2">
            <div className="h-full">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Capability</p>
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                Strategic outcomes across the product lifecycle
              </h3>
              
              {/* Asymmetric card grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Featured large card */}
                <div className="col-span-2 sm:col-span-1 sm:row-span-2 p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                    <Compass className="h-5 w-5 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">Product Strategy</h4>
                  <p className="text-sm text-muted-foreground">Clear roadmaps aligned with business goals</p>
                </div>
                
                {/* Two stacked smaller cards */}
                <div className="p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                    <TrendingUp className="h-4 w-4 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1">Growth</h4>
                  <p className="text-xs text-muted-foreground">Higher conversions, lower CAC</p>
                </div>
                
                <div className="p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                    <DollarSign className="h-4 w-4 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1">Monetisation</h4>
                  <p className="text-xs text-muted-foreground">Sustainable revenue streams</p>
                </div>
                
                {/* Full width bottom card */}
                <div className="col-span-2 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Layers className="h-4 w-4 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-foreground">Platform Scaling</h4>
                      <p className="text-xs text-muted-foreground">Scale 10x without breaking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — EXECUTION */}
          <div className="lg:col-span-1 order-3">
            <div className="h-full">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Execution</p>
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                Outcome-driven process
              </h3>
              
              {/* Timeline steps */}
              <div className="relative">
                <div className="absolute left-[18px] top-6 bottom-6 w-0.5 bg-border" />
                
                <div className="space-y-3">
                  {executionSteps.map((step, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`relative flex gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                        activeStep === i 
                          ? "bg-primary/5 border-primary/30" 
                          : "border-border hover:bg-muted/30"
                      }`}
                      data-testid={`execution-step-${i}`}
                    >
                      <div className={`shrink-0 h-9 w-9 rounded-full border-2 flex items-center justify-center z-10 bg-background transition-all ${
                        activeStep === i ? "border-primary bg-primary" : "border-muted"
                      }`}>
                        <span className={`text-sm font-bold ${
                          activeStep === i ? "text-white" : "text-muted-foreground"
                        }`}>{step.number}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-sm mb-0.5">{step.title}</h4>
                            <p className={`text-xs transition-colors ${
                              activeStep === i ? "text-foreground" : "text-muted-foreground"
                            }`}>{step.headline}</p>
                          </div>
                          <ChevronDown 
                            className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                              activeStep === i ? "rotate-180 text-primary" : ""
                            }`} 
                          />
                        </div>
                        
                        {activeStep === i && (
                          <div className="mt-3 space-y-2">
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {step.body}
                            </p>
                            <div className="pt-2 border-t border-border">
                              <p className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-0.5">What changes:</p>
                              <p className="text-xs text-foreground font-medium">{step.outcome}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
