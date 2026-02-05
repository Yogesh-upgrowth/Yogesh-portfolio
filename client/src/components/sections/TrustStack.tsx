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

type ActiveSection = 'belief' | 'capability' | 'execution';

export default function TrustStack() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('belief');
  const [beliefOpen, setBeliefOpen] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="trust-stack" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">How I Create Impact</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            A connected system for growth
          </h3>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="relative mb-8">
          {/* Progress line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-border hidden md:block" />
          <div 
            className="absolute top-6 left-0 h-0.5 bg-primary hidden md:block transition-all duration-300"
            style={{ 
              width: activeSection === 'belief' ? '16.67%' : activeSection === 'capability' ? '50%' : '83.33%'
            }}
          />
          
          <div className="grid grid-cols-3 gap-4 relative">
            {/* Belief Tab */}
            <button
              onClick={() => setActiveSection('belief')}
              className={`flex flex-col items-center text-center p-4 rounded-xl transition-all ${
                activeSection === 'belief' 
                  ? 'bg-background shadow-md border border-primary/30' 
                  : 'hover:bg-background/50'
              }`}
              data-testid="tab-belief"
            >
              <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                activeSection === 'belief' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <span className="text-lg font-bold">1</span>
              </div>
              <h4 className={`font-bold transition-colors ${
                activeSection === 'belief' ? 'text-primary' : 'text-foreground'
              }`}>Belief</h4>
              <p className="text-xs text-muted-foreground mt-1 hidden sm:block">Why I build differently</p>
            </button>

            {/* Capability Tab */}
            <button
              onClick={() => setActiveSection('capability')}
              className={`flex flex-col items-center text-center p-4 rounded-xl transition-all ${
                activeSection === 'capability' 
                  ? 'bg-background shadow-md border border-primary/30' 
                  : 'hover:bg-background/50'
              }`}
              data-testid="tab-capability"
            >
              <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                activeSection === 'capability' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <span className="text-lg font-bold">2</span>
              </div>
              <h4 className={`font-bold transition-colors ${
                activeSection === 'capability' ? 'text-primary' : 'text-foreground'
              }`}>Capability</h4>
              <p className="text-xs text-muted-foreground mt-1 hidden sm:block">What I bring to the table</p>
            </button>

            {/* Execution Tab */}
            <button
              onClick={() => setActiveSection('execution')}
              className={`flex flex-col items-center text-center p-4 rounded-xl transition-all ${
                activeSection === 'execution' 
                  ? 'bg-background shadow-md border border-primary/30' 
                  : 'hover:bg-background/50'
              }`}
              data-testid="tab-execution"
            >
              <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                activeSection === 'execution' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <span className="text-lg font-bold">3</span>
              </div>
              <h4 className={`font-bold transition-colors ${
                activeSection === 'execution' ? 'text-primary' : 'text-foreground'
              }`}>Execution</h4>
              <p className="text-xs text-muted-foreground mt-1 hidden sm:block">How I deliver outcomes</p>
            </button>
          </div>
        </div>

        {/* Content Panel */}
        <div className="bg-background rounded-2xl border border-border p-6 md:p-10 shadow-sm min-h-[400px]">
          
          {/* BELIEF Content */}
          {activeSection === 'belief' && (
            <div className="animate-fade-in-up max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 leading-tight">
                I don't just ship features.<br />
                I build <span className="text-primary">engines for growth</span>.
              </h3>
              
              <div className="space-y-4 mb-8">
                {beliefInsights.map((item, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setBeliefOpen(beliefOpen === index ? null : index)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors min-h-[60px]"
                      data-testid={`belief-dropdown-${index}`}
                    >
                      <span className="text-base font-medium text-foreground pr-4">{item.headline}</span>
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                          beliefOpen === index ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    {beliefOpen === index && (
                      <div className="px-5 pb-5">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed border-t border-border pt-6">
                If you want execution help, there are many PMs.<br />
                If you want someone who thinks like an owner, keep exploring.
              </p>
            </div>
          )}

          {/* CAPABILITY Content */}
          {activeSection === 'capability' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Strategic outcomes across the product lifecycle
                </h3>
                <p className="text-muted-foreground">From strategy to scale — end-to-end ownership</p>
              </div>
              
              {/* Capability cards grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <div className="p-6 rounded-xl border border-border bg-primary/5 hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Compass className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Product Strategy</h4>
                  <p className="text-sm text-muted-foreground">Clear roadmaps aligned with business goals</p>
                </div>
                
                <div className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Growth</h4>
                  <p className="text-sm text-muted-foreground">Higher conversions, lower CAC</p>
                </div>
                
                <div className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <DollarSign className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Monetisation</h4>
                  <p className="text-sm text-muted-foreground">Sustainable revenue streams</p>
                </div>
                
                <div className="p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Layers className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-2">Platform Scaling</h4>
                  <p className="text-sm text-muted-foreground">Scale 10x without breaking</p>
                </div>
              </div>
            </div>
          )}

          {/* EXECUTION Content */}
          {activeSection === 'execution' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Outcome-driven process
                </h3>
                <p className="text-muted-foreground">Click each step to see the details</p>
              </div>
              
              {/* Horizontal step selector */}
              <div className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap">
                {executionSteps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full border transition-all ${
                      activeStep === i 
                        ? 'bg-primary text-white border-primary shadow-md' 
                        : 'border-border hover:border-primary/30 hover:bg-muted/30'
                    }`}
                    data-testid={`execution-step-${i}`}
                  >
                    <span className={`text-sm font-bold ${activeStep === i ? 'text-white' : 'text-muted-foreground'}`}>
                      {step.number}
                    </span>
                    <span className={`font-medium text-sm ${activeStep === i ? 'text-white' : 'text-foreground'}`}>
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active step content */}
              <div className="max-w-2xl mx-auto bg-muted/30 rounded-2xl p-6 md:p-8 border border-border">
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {executionSteps[activeStep].title}
                </h4>
                <p className="text-primary font-medium mb-4">
                  {executionSteps[activeStep].headline}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {executionSteps[activeStep].body}
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">What changes:</p>
                  <p className="text-foreground font-medium">{executionSteps[activeStep].outcome}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
