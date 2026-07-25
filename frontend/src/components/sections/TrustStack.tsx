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
    <section id="trust-stack" className="py-14 md:py-24 bg-muted/20" style={{ contentVisibility: "auto", containIntrinsicSize: "0 520px" }}>
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[10px] md:text-sm font-bold tracking-widest text-primary uppercase mb-2 md:mb-3">How I Create Impact</h2>
          <h3 className="text-[1.75rem] md:text-4xl font-serif font-bold text-foreground leading-tight">
            A connected system for growth
          </h3>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="relative mb-5 md:mb-8">
          {/* Progress line */}
          <div className="absolute top-[22px] md:top-6 left-0 right-0 h-0.5 bg-border hidden sm:block" />
          <div 
            className="absolute top-[22px] md:top-6 left-0 h-0.5 bg-primary hidden sm:block transition-all duration-300"
            style={{ 
              width: activeSection === 'belief' ? '16.67%' : activeSection === 'capability' ? '50%' : '83.33%'
            }}
          />
          
          <div className="grid grid-cols-3 gap-2 md:gap-4 relative">
            {/* Belief Tab */}
            <button
              onClick={() => setActiveSection('belief')}
              className={`flex flex-col items-center text-center p-2.5 md:p-4 rounded-xl transition-all active:scale-95 ${
                activeSection === 'belief' 
                  ? 'bg-background shadow-md border border-primary/30' 
                  : 'hover:bg-background/50 border border-transparent active:bg-background/60'
              }`}
              data-testid="tab-belief"
            >
              <div className={`h-9 w-9 md:h-12 md:w-12 rounded-full flex items-center justify-center mb-1.5 md:mb-3 transition-all ${
                activeSection === 'belief' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <span className="text-sm md:text-lg font-bold">1</span>
              </div>
              <h3 className={`text-xs md:text-base font-bold transition-colors ${
                activeSection === 'belief' ? 'text-primary' : 'text-foreground'
              }`}>Belief</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1 hidden sm:block">Why I build differently</p>
            </button>

            {/* Capability Tab */}
            <button
              onClick={() => setActiveSection('capability')}
              className={`flex flex-col items-center text-center p-2.5 md:p-4 rounded-xl transition-all active:scale-95 ${
                activeSection === 'capability' 
                  ? 'bg-background shadow-md border border-primary/30' 
                  : 'hover:bg-background/50 border border-transparent active:bg-background/60'
              }`}
              data-testid="tab-capability"
            >
              <div className={`h-9 w-9 md:h-12 md:w-12 rounded-full flex items-center justify-center mb-1.5 md:mb-3 transition-all ${
                activeSection === 'capability' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <span className="text-sm md:text-lg font-bold">2</span>
              </div>
              <h3 className={`text-xs md:text-base font-bold transition-colors ${
                activeSection === 'capability' ? 'text-primary' : 'text-foreground'
              }`}>Capability</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1 hidden sm:block">What I bring to the table</p>
            </button>

            {/* Execution Tab */}
            <button
              onClick={() => setActiveSection('execution')}
              className={`flex flex-col items-center text-center p-2.5 md:p-4 rounded-xl transition-all active:scale-95 ${
                activeSection === 'execution' 
                  ? 'bg-background shadow-md border border-primary/30' 
                  : 'hover:bg-background/50 border border-transparent active:bg-background/60'
              }`}
              data-testid="tab-execution"
            >
              <div className={`h-9 w-9 md:h-12 md:w-12 rounded-full flex items-center justify-center mb-1.5 md:mb-3 transition-all ${
                activeSection === 'execution' 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <span className="text-sm md:text-lg font-bold">3</span>
              </div>
              <h3 className={`text-xs md:text-base font-bold transition-colors ${
                activeSection === 'execution' ? 'text-primary' : 'text-foreground'
              }`}>Execution</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1 hidden sm:block">How I deliver outcomes</p>
            </button>
          </div>
        </div>

        {/* Content Panel */}
        <div className="bg-background rounded-2xl border border-border p-4 md:p-10 shadow-sm min-h-[340px] md:min-h-[400px]">
          
          {/* BELIEF Content */}
          {activeSection === 'belief' && (
            <div className="animate-fade-in-up max-w-3xl mx-auto">
              <h3 className="text-lg md:text-3xl font-serif font-bold text-foreground mb-4 md:mb-6 leading-tight">
                I don't just ship features.<br />
                I build <span className="text-primary">engines for growth</span>.
              </h3>
              
              <div className="space-y-2.5 md:space-y-4 mb-6 md:mb-8">
                {beliefInsights.map((item, index) => (
                  <div key={index} className="border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setBeliefOpen(beliefOpen === index ? null : index)}
                      className="w-full flex items-center justify-between p-3.5 md:p-5 text-left hover:bg-muted/30 active:bg-muted/40 transition-colors min-h-[56px] md:min-h-[60px]"
                      data-testid={`belief-dropdown-${index}`}
                    >
                      <span className="text-[13px] md:text-base font-medium text-foreground pr-3 leading-snug">{item.headline}</span>
                      <ChevronDown 
                        className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                          beliefOpen === index ? "rotate-180" : ""
                        }`} 
                      />
                    </button>
                    {beliefOpen === index && (
                      <div className="px-3.5 pb-3.5 md:px-5 md:pb-5">
                        <p className="text-[13px] md:text-base text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[13px] md:text-base text-muted-foreground leading-relaxed border-t border-border pt-4 md:pt-6">
                If you want execution help, there are many PMs.<br />
                If you want someone who thinks like an owner, keep exploring.
              </p>
            </div>
          )}

          {/* CAPABILITY Content */}
          {activeSection === 'capability' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-6 md:mb-8">
                <h3 className="text-lg md:text-3xl font-serif font-bold text-foreground mb-1.5 md:mb-2 leading-tight">
                  Strategic outcomes across the product lifecycle
                </h3>
                <p className="text-[13px] md:text-base text-muted-foreground">From strategy to scale — end-to-end ownership</p>
              </div>
              
              {/* Capability - Mobile Editorial Unboxed List */}
              <div className="flex md:hidden flex-col gap-6 mt-4">
                {[
                  { icon: Compass, title: "Product Strategy", desc: "Clear roadmaps aligned with business goals" },
                  { icon: TrendingUp, title: "Growth", desc: "Higher conversions, lower CAC" },
                  { icon: DollarSign, title: "Monetisation", desc: "Sustainable revenue streams" },
                  { icon: Layers, title: "Platform Scaling", desc: "Scale 10x without breaking" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="pt-0.5">
                      <h3 className="font-bold text-[17px] text-foreground mb-1">{item.title}</h3>
                      <p className="text-[15px] text-muted-foreground leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Capability - Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {[
                  { icon: Compass, title: "Product Strategy", desc: "Clear roadmaps aligned with business goals", featured: true },
                  { icon: TrendingUp, title: "Growth", desc: "Higher conversions, lower CAC", featured: false },
                  { icon: DollarSign, title: "Monetisation", desc: "Sustainable revenue streams", featured: false },
                  { icon: Layers, title: "Platform Scaling", desc: "Scale 10x without breaking", featured: false },
                ].map(({ icon: Icon, title, desc, featured }) => (
                  <div
                    key={title}
                    className={`p-6 rounded-xl border border-border ${featured ? "bg-primary/5" : ""} hover:border-primary/30 hover:shadow-md transition-all group`}
                  >
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-snug">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXECUTION Content */}
          {activeSection === 'execution' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-5 md:mb-8">
                <h3 className="text-lg md:text-3xl font-serif font-bold text-foreground mb-1.5 md:mb-2 leading-tight">
                  Outcome-driven process
                </h3>
                <p className="text-[13px] md:text-base text-muted-foreground">Tap each step to see the details</p>
              </div>
              
              {/* Horizontal step selector */}
              <div className="flex justify-center gap-2 md:gap-4 mb-5 md:mb-8 flex-wrap">
                {executionSteps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-3 rounded-full border transition-all active:scale-95 ${
                      activeStep === i 
                        ? 'bg-primary text-white border-primary shadow-md' 
                        : 'border-border hover:border-primary/30 hover:bg-muted/30 active:bg-muted/40'
                    }`}
                    data-testid={`execution-step-${i}`}
                  >
                    <span className={`text-[11px] md:text-sm font-bold ${activeStep === i ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {step.number}
                    </span>
                    <span className={`font-medium text-[11px] md:text-sm ${activeStep === i ? 'text-white' : 'text-foreground'}`}>
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active step content */}
              <div className="max-w-2xl mx-auto bg-muted/30 rounded-2xl p-4 md:p-8 border border-border">
                <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2">
                  {executionSteps[activeStep].title}
                </h3>
                <p className="text-[13px] md:text-base text-primary font-medium mb-2.5 md:mb-4">
                  {executionSteps[activeStep].headline}
                </p>
                <p className="text-[13px] md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                  {executionSteps[activeStep].body}
                </p>
                <div className="pt-3 md:pt-4 border-t border-border">
                  <p className="text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold mb-1 md:mb-2">What changes:</p>
                  <p className="text-[13px] md:text-base text-foreground font-medium">{executionSteps[activeStep].outcome}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
