import { useState } from "react";
import { ChevronDown, Compass, TrendingUp, DollarSign, Layers, ArrowRight } from "lucide-react";

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
    <section id="trust-stack" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How I Create Impact</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Belief → Capability → Execution
          </h3>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A connected system for building products that scale
          </p>
        </div>

        {/* Connected Card Container */}
        <div className="relative">
          {/* Horizontal connector line (desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 z-0" />
          
          {/* Flow arrows between sections (desktop) */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 justify-around pointer-events-none">
            <div className="w-1/3" />
            <div className="flex items-center justify-center">
              <div className="bg-background rounded-full p-2 border border-primary/20">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-background rounded-full p-2 border border-primary/20">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="w-1/6" />
          </div>

          {/* Main 3-column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 relative z-20">
            
            {/* LEFT — BELIEF */}
            <div className="bg-background rounded-2xl border border-border p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-white">1</span>
                </div>
                <p className="text-sm font-bold tracking-widest text-primary uppercase">Belief</p>
              </div>
              
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-5 leading-tight">
                I don't just ship features.<br />
                I build <span className="text-primary">engines for growth</span>.
              </h3>
              
              <div className="space-y-3 mb-5">
                {beliefInsights.map((item, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setBeliefOpen(beliefOpen === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/30 transition-colors min-h-[52px]"
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

              <p className="text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
                If you want execution help, there are many PMs.<br />
                If you want someone who thinks like an owner, keep exploring.
              </p>
            </div>

            {/* Mobile flow arrow */}
            <div className="flex lg:hidden justify-center -my-2">
              <div className="bg-background rounded-full p-2 border border-primary/20 rotate-90">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </div>

            {/* CENTER — CAPABILITY */}
            <div className="bg-background rounded-2xl border border-border p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-white">2</span>
                </div>
                <p className="text-sm font-bold tracking-widest text-primary uppercase">Capability</p>
              </div>
              
              <h3 className="text-lg font-serif font-bold text-foreground mb-5">
                Strategic outcomes across the product lifecycle
              </h3>
              
              {/* Asymmetric card grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Featured large card */}
                <div className="col-span-2 sm:col-span-1 sm:row-span-2 p-4 rounded-xl border border-border bg-primary/5 hover:border-primary/30 transition-all group">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                    <Compass className="h-4 w-4 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-sm text-foreground mb-1">Product Strategy</h4>
                  <p className="text-xs text-muted-foreground">Clear roadmaps aligned with business goals</p>
                </div>
                
                {/* Two stacked smaller cards */}
                <div className="p-3 rounded-xl border border-border hover:border-primary/30 transition-all group">
                  <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                    <TrendingUp className="h-3.5 w-3.5 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-xs text-foreground mb-0.5">Growth</h4>
                  <p className="text-[10px] text-muted-foreground">Higher conversions, lower CAC</p>
                </div>
                
                <div className="p-3 rounded-xl border border-border hover:border-primary/30 transition-all group">
                  <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary transition-colors">
                    <DollarSign className="h-3.5 w-3.5 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-xs text-foreground mb-0.5">Monetisation</h4>
                  <p className="text-[10px] text-muted-foreground">Sustainable revenue streams</p>
                </div>
                
                {/* Full width bottom card */}
                <div className="col-span-2 p-3 rounded-xl border border-border hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Layers className="h-3.5 w-3.5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-foreground">Platform Scaling</h4>
                      <p className="text-[10px] text-muted-foreground">Scale 10x without breaking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile flow arrow */}
            <div className="flex lg:hidden justify-center -my-2">
              <div className="bg-background rounded-full p-2 border border-primary/20 rotate-90">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </div>

            {/* RIGHT — EXECUTION */}
            <div className="bg-background rounded-2xl border border-border p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              {/* Step indicator */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-white">3</span>
                </div>
                <p className="text-sm font-bold tracking-widest text-primary uppercase">Execution</p>
              </div>
              
              <h3 className="text-lg font-serif font-bold text-foreground mb-5">
                Outcome-driven process
              </h3>
              
              {/* Timeline steps */}
              <div className="relative">
                <div className="absolute left-[14px] top-5 bottom-5 w-0.5 bg-border" />
                
                <div className="space-y-2">
                  {executionSteps.map((step, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`relative flex gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                        activeStep === i 
                          ? "bg-primary/5 border-primary/30" 
                          : "border-transparent hover:bg-muted/30"
                      }`}
                      data-testid={`execution-step-${i}`}
                    >
                      <div className={`shrink-0 h-7 w-7 rounded-full border-2 flex items-center justify-center z-10 bg-background transition-all ${
                        activeStep === i ? "border-primary bg-primary" : "border-muted"
                      }`}>
                        <span className={`text-xs font-bold ${
                          activeStep === i ? "text-white" : "text-muted-foreground"
                        }`}>{step.number}</span>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h4 className="font-bold text-sm mb-0.5">{step.title}</h4>
                            {activeStep !== i && (
                              <p className="text-xs text-muted-foreground truncate">{step.headline}</p>
                            )}
                          </div>
                          <ChevronDown 
                            className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                              activeStep === i ? "rotate-180 text-primary" : ""
                            }`} 
                          />
                        </div>
                        
                        {activeStep === i && (
                          <div className="mt-2 space-y-2">
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
