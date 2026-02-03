import { useState } from "react";

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

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How I Work</h2>
          <h3 className="text-3xl font-serif font-bold">Outcome-driven, every step</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative p-6 rounded-2xl border border-border cursor-pointer transition-all duration-200 ${
                  activeIndex === i 
                    ? "bg-muted/50 border-primary/30 shadow-sm" 
                    : activeIndex !== null 
                      ? "opacity-60" 
                      : "hover:bg-muted/30 hover:border-primary/20"
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                data-testid={`process-step-${i}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 h-12 w-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                    activeIndex === i ? "border-primary bg-primary/10" : "border-muted"
                  }`}>
                    <span className={`text-lg font-serif font-bold transition-colors ${
                      activeIndex === i ? "text-primary" : "text-muted-foreground"
                    }`}>{step.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                    <p className={`text-sm font-medium transition-colors ${
                      activeIndex === i ? "text-foreground" : "text-muted-foreground"
                    }`}>{step.headline}</p>
                    
                    {activeIndex === i && (
                      <div className="mt-4 space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.body}
                        </p>
                        <div className="pt-3 border-t border-border">
                          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">What changes:</p>
                          <p className="text-sm text-foreground font-medium">{step.outcome}</p>
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
    </section>
  );
}
