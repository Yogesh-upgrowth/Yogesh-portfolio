import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@assets/yogesh-profile.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white min-h-[100svh] flex flex-col">
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Mobile Layout: Image integrated at top with curved mask */}
      <div className="md:hidden flex flex-col flex-1">
        {/* Image Section with Organic Curve */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          {/* Background accent shape */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          {/* Profile image with organic curved mask */}
          <div className="relative pt-20 pb-4 flex justify-center">
            <div 
              className="relative w-36 h-36 shadow-xl"
              style={{
                clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 15%)",
                background: "linear-gradient(135deg, #2563EB 0%, #1e40af 100%)",
                padding: "3px",
              }}
            >
              <img 
                src={profileImage} 
                alt="Yogesh Yadav" 
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(15% 0%, 85% 0%, 100% 15%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 15%)",
                }}
                fetchPriority="high"
              />
            </div>
            {/* Soft glow behind image */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"
            />
          </div>
        </motion.div>

        {/* Content Section - Compact for mobile */}
        <div className="flex-1 flex flex-col justify-center px-5 pb-6 pt-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-3"
          >
            {/* Availability pill */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
              Available for new projects
            </div>

            {/* Headline - Compact sizing for mobile */}
            <h1 className="text-[clamp(1.5rem,6vw,2rem)] font-serif font-bold tracking-tight text-foreground leading-[1.15]">
              I help <span className="text-primary">consumer</span> & <span className="text-primary">B2B products</span> grow revenue, retention, and scale.
            </h1>

            {/* Subheadline */}
            <p className="text-[clamp(0.875rem,3.5vw,1rem)] text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Yogesh Yadav</strong> — Product Leader with 9+ years across Fintech, Mobility, SaaS & Marketplaces.
            </p>
          </motion.div>

          {/* CTAs - Stacked on mobile, must be above fold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 flex flex-col gap-2.5"
          >
            <Button size="lg" className="w-full text-base py-5 rounded-full font-semibold" asChild>
              <Link href="/contact" data-testid="cta-work-with-me">
                Work with me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full text-base py-5 rounded-full font-semibold border-2" asChild>
              <Link href="/blog" data-testid="cta-read-thinking">Read my thinking</Link>
            </Button>
          </motion.div>

          {/* Trust indicators - minimal on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              Strategy
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              Growth
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              Monetisation
            </span>
          </motion.div>
        </div>
      </div>

      {/* Desktop Layout: Side-by-side with integrated image */}
      <div className="hidden md:flex container px-6 mx-auto pt-32 pb-20 items-center gap-16 flex-1">
        {/* Left: Image with organic shape */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative shrink-0"
        >
          {/* Organic shaped image container */}
          <div 
            className="relative w-72 h-72 lg:w-80 lg:h-80"
            style={{
              clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              background: "linear-gradient(135deg, #2563EB 0%, #1e40af 100%)",
              padding: "4px",
            }}
          >
            <img 
              src={profileImage} 
              alt="Yogesh Yadav" 
              className="w-full h-full object-cover"
              style={{
                clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
              }}
              fetchPriority="high"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/20 rounded-full" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        </motion.div>

        {/* Right: Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Availability pill */}
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Available for new projects
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
              I help <span className="text-primary">consumer</span> & <span className="text-primary">B2B products</span> grow revenue, retention, and scale.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
              <strong className="text-foreground">Yogesh Yadav</strong> — Product Leader with 9+ years across Fintech, Mobility, SaaS & Marketplaces.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-row gap-4"
          >
            <Button size="lg" className="text-lg px-8 py-6 rounded-full font-semibold" asChild>
              <Link href="/contact" data-testid="cta-work-with-me-desktop">
                Work with me <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full font-semibold border-2" asChild>
              <Link href="/blog" data-testid="cta-read-thinking-desktop">Read my thinking</Link>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-4 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Strategy</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Growth</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Monetisation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
