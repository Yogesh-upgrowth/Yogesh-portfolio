import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_professional_abstract_geometric_background_with_blue_and_gray_tones.png";
import profileImage from "@assets/yogesh-profile.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-12 md:pt-28 md:pb-16">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full opacity-10 md:opacity-20 pointer-events-none">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover object-right-top"
          loading="eager"
        />
      </div>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          
          {/* Profile image with CSS-only effects */}
          <div className="relative shrink-0 animate-fade-in">
            {/* Gradient ring - CSS only */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-blue-400 to-primary opacity-60 blur-md animate-pulse" />
            
            {/* Decorative dots - CSS only */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full shadow-lg z-20 animate-bounce-slow" />
            <div className="absolute -bottom-1 -left-3 w-3 h-3 bg-blue-400 rounded-full shadow-lg z-20 animate-bounce-slow" style={{ animationDelay: '0.5s' }} />

            {/* Main image container */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
              <img 
                src={profileImage} 
                alt="Yogesh Yadav" 
                width="224"
                height="224"
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>

          <div className="flex-1 space-y-5 text-center md:text-left mt-[20px] mb-[20px]">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-3">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
                I help <span className="text-primary">consumer</span> & <span className="text-primary">B2B products</span> grow revenue, retention, and scale.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
                <strong className="text-foreground">Yogesh Yadav</strong> — Product Leader with 9+ years across Fintech, Mobility, SaaS & Marketplaces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fade-in-up mt-[0px] mb-[0px]" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="text-base px-6 py-5 rounded-full" asChild>
                <Link href="/contact">Work with me <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-6 py-5 rounded-full" asChild>
                <Link href="/blog">Read my thinking</Link>
              </Button>
            </div>

            <div className="pt-2 flex items-center justify-center md:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Growth</span>
              </div>
              <div className="flex items-center gap-2">
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
