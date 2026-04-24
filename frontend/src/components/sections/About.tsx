import { useState } from "react";
import { ChevronDown } from "lucide-react";

const dropdowns = [
  {
    headline: "I've scaled products by finding leverage where most teams don't look.",
    content: `Most growth stories talk about traffic spikes and viral loops.
Mine usually start with a quieter question:

"Where is user intent leaking — and why?"

In one case, a product looked healthy on the surface — DAUs were climbing, funnels looked "okay."
But once we stopped obsessing over acquisition and traced user behaviour backwards, the real growth constraints became obvious.

That single shift — from chasing volume to engineering intent — changed the trajectory of the platform entirely.`
  },
  {
    headline: "I don't add monetisation. I design it into behaviour.",
    content: `Most products don't fail at monetisation because users won't pay.
They fail because paying feels disconnected from why the user came in the first place.

I've seen revenue surfaces that looked "optimised" — multiple CTAs, partners, pricing experiments — yet barely moved the needle.
Not because pricing was wrong, but because the moment was wrong.

Once monetisation was treated as a continuation of user intent (not an interruption), outcomes changed dramatically.

What surprised most stakeholders wasn't the revenue jump —
it was how little the product felt monetised afterwards.`
  },
  {
    headline: "Dashboards don't create clarity. Decisions do.",
    content: `I've worked with leadership teams who had more dashboards than decisions —
and teams with very little data who moved faster and cleaner.

The difference wasn't tooling.
It was what questions the data was designed to answer.

In one portfolio, we paused roadmap debates entirely and rebuilt how success was measured — across growth, retention, and revenue — before touching another feature.

What followed wasn't just alignment.
It was speed. And fewer reversals.`
  },
  {
    headline: "I think in outcomes because someone has to.",
    content: `Features are easy to ship.
Ownership is harder.

Whether it's CAC pressure, partner economics, infra constraints, or monetisation trade-offs — I tend to get involved where problems stop being neatly "product-shaped."

Sometimes that means saying no to good ideas.
Sometimes it means re-framing the problem entirely.
Almost always, it means thinking in terms of second-order effects.

I don't work in silos because real-world outcomes don't either.`
  }
];

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-6">About Me</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8 leading-tight">
            I don't just ship features. <br className="hidden md:block"/>
            I build <span className="text-primary/90 decoration-primary/30 underline decoration-2 underline-offset-4">engines for growth</span>.
          </h3>
          
          <div className="space-y-4">
            {dropdowns.map((item, index) => (
              <div 
                key={index} 
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                  data-testid={`about-dropdown-${index}`}
                >
                  <span className="text-lg font-medium text-foreground pr-4">{item.headline}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <div className="prose prose-lg prose-slate text-muted-foreground leading-relaxed whitespace-pre-line">
                      {item.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            If you're looking for execution help, there are many PMs.<br />
            If you're looking for someone who thinks like an owner, explore further.
          </p>
        </div>
      </div>
    </section>
  );
}
