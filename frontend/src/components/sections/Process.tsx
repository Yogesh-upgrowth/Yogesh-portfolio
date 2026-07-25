import { useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
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

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase mb-3">How I Work</h2>
          <h3 className="text-3xl font-serif font-bold text-foreground">Outcome-driven, every step</h3>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Roadmap Timeline */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-5 md:left-6 top-6 bottom-6 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-4 md:space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  {/* Horizontal connector to circle (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-6 top-full w-0.5 h-6 bg-border hidden md:block" />
                  )}
                  
                  <div
                    className={`relative flex gap-3 sm:gap-4 md:gap-6 p-4 md:p-5 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      activeIndex === i 
                        ? "bg-primary/5 border-primary/30 shadow-sm" 
                        : "border-border hover:bg-muted/30 hover:border-primary/20"
                    }`}
                    onClick={() => toggleStep(i)}
                    data-testid={`process-step-${i}`}
                  >
                    {/* Step number circle */}
                    <div className={`shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-full border-2 flex items-center justify-center z-10 bg-background transition-all ${
                      activeIndex === i ? "border-primary bg-primary text-white" : "border-muted"
                    }`}>
                      <span className={`text-base md:text-lg font-serif font-bold ${
                        activeIndex === i ? "text-white" : "text-muted-foreground"
                      }`}>{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-0.5 md:pt-1">
                      <div className="flex items-start justify-between gap-2 md:gap-3">
                        <div className="flex-1">
                          <h3 className="text-base md:text-lg font-bold mb-1">{step.title}</h3>
                          <p className={`text-xs md:text-sm transition-colors ${
                            activeIndex === i ? "text-foreground font-medium" : "text-muted-foreground"
                          }`}>{step.headline}</p>
                        </div>
                        <ChevronDown 
                          className={`h-4 w-4 md:h-5 md:w-5 text-muted-foreground shrink-0 mt-0.5 md:mt-1 transition-transform duration-200 ${
                            activeIndex === i ? "rotate-180 text-primary" : ""
                          }`} 
                        />
                      </div>
                      
                      {activeIndex === i && (
                        <div className="mt-4 space-y-3">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.body}
                          </p>
                          <div className="pt-3 border-t border-border">
                            <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold mb-1">What changes:</p>
                            <p className="text-[13px] md:text-sm text-foreground font-medium">{step.outcome}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
