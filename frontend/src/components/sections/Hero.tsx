import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import profileImage from "@assets/yogesh-profile.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-12 md:pt-28 md:pb-16">
      {/* CSS-only background — zero GPU cost, pure CSS gradient */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 90% 0%, hsl(221 83% 53% / 0.06) 0%, transparent 70%), " +
            "radial-gradient(ellipse 40% 35% at 20% 100%, hsl(217 91% 60% / 0.04) 0%, transparent 65%)",
        }}
      />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

          {/* Profile image (Mobile: compact top, Desktop: left) */}
          <div className="relative shrink-0 hero-image">
            {/* Static ring — no blur, no pulse, pure CSS border */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary via-blue-400 to-primary opacity-50" />
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full shadow-lg z-20" />
            <div className="absolute -bottom-1 -left-2 w-2.5 h-2.5 md:w-3 md:h-3 bg-blue-400 rounded-full shadow-lg z-20" />
            <div className="relative w-28 h-28 md:w-56 md:h-56 rounded-full overflow-hidden border-[3px] md:border-4 border-white shadow-2xl z-10 bg-muted">
              <img
                src={profileImage}
                alt="Yogesh Yadav"
                width="224"
                height="224"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="flex-1 space-y-5 md:space-y-6 text-center md:text-left">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 md:py-1 text-xs md:text-sm font-medium text-primary">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Available for new Projects
            </div>

            {/* Headline — mobile optimized */}
            <h1 className="hero-title text-[2rem] leading-[1.15] md:text-5xl font-serif font-bold tracking-tight text-foreground md:leading-[1.1]">
              I help <span className="text-primary">consumer</span> &{" "}
              <span className="text-primary">B2B products</span> grow revenue, retention, and scale.
            </h1>

            {/* Subtext — mobile optimized */}
            <p className="hero-sub text-base md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
              <strong className="text-foreground">Yogesh Yadav</strong> — Product Leader with 9+ years across Fintech, Mobility, SaaS & Marketplaces.
            </p>

            {/* CTA Buttons — mobile optimized */}
            <div className="hero-cta flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start pt-1 md:pt-2">
              <Button size="lg" className="w-full sm:w-auto text-base h-14 md:h-12 md:py-5 px-8 rounded-full hover-press shadow-md shadow-primary/20 active:shadow-sm active:scale-[0.98] transition-all" asChild>
                <Link href="/contact">Work with me <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-14 md:h-12 md:py-5 px-8 rounded-full hover-press active:scale-[0.98] transition-all" asChild>
                <Link href="/blog">Read my thinking</Link>
              </Button>
            </div>

            {/* Trust tags — mobile optimized */}
            <div className="hero-tags pt-2 md:pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Strategy</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Growth</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Monetisation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
