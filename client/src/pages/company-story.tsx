import { useEffect, useState, lazy, Suspense } from "react";
import { Link, useParams } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User } from "lucide-react";
import NotFound from "@/pages/not-found";

const LoanwiserStory  = lazy(() => import("@/pages/story-loanwiser"));
const CarInfoStory    = lazy(() => import("@/pages/story-carinfo"));
const KnipexStory     = lazy(() => import("@/pages/story-knipex"));
const UpGrowthStory   = lazy(() => import("@/pages/story-upgrowth"));

const stories: Record<string, {
  title: string; company: string; role: string; category: string;
  metric: string; metricLabel: string; readTime: string;
  image: string; tagline: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
  toc: { id: string; label: string }[];
}> = {
  loanwiser: {
    title: "How We Made Banks Stop Drowning in Bad Leads — and Start Making Better Decisions",
    company: "Loanwiser",
    role: "Associate Product Manager",
    category: "Fintech · Credit Intelligence",
    metric: "+90%",
    metricLabel: "Disbursement Rate",
    readTime: "40 min read",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80&auto=format",
    tagline: "A story about India's lending crisis, bad data, and the credit intelligence layer that changed everything.",
    component: LoanwiserStory,
    toc: [
      { id: "hook",          label: "The Opening Number" },
      { id: "context",       label: "India's Lending Desert" },
      { id: "origin",        label: "How Loanwiser Was Born" },
      { id: "brief",         label: "What I Was Hired To Do" },
      { id: "week-one",      label: "Week One: The Audit" },
      { id: "85-problem",    label: "The 85% Problem" },
      { id: "why-banks",     label: "Why Banks Said No" },
      { id: "insight",       label: "The Insight That Changed It" },
      { id: "credit-layer",  label: "Building Credit Intelligence" },
      { id: "bank-statements", label: "Bank Statement Science" },
      { id: "behavioral",    label: "The Behavioral Signal Model" },
      { id: "routing",       label: "The Routing Algorithm" },
      { id: "product",       label: "Product Integration" },
      { id: "ux",            label: "The Borrower Experience" },
      { id: "execution",     label: "What We Built" },
      { id: "failures",      label: "What Broke First" },
      { id: "results",       label: "Results: The Full Picture" },
      { id: "human",         label: "What +90% Means in People" },
      { id: "ripple",        label: "The Ripple Effects" },
      { id: "learnings",     label: "What Loanwiser Taught Me" },
    ],
  },
  carinfo: {
    title: "45M Users, 1200% Revenue Growth, and the Product Strategy Nobody Saw Coming",
    company: "CarInfo / AppFlix",
    role: "Senior Product Manager",
    category: "Consumer · Mobility · Fintech",
    metric: "45M+",
    metricLabel: "Monthly Active Users",
    readTime: "45 min read",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80&auto=format",
    tagline: "How a utility app became a growth machine — and what the data said before anyone was ready to listen.",
    component: CarInfoStory,
    toc: [
      { id: "hook",          label: "The Number That Started It" },
      { id: "context",       label: "India's Vehicle Info Desert" },
      { id: "origin",        label: "What I Inherited" },
      { id: "audit",         label: "The Funnel Audit" },
      { id: "conversion",    label: "The 0.007% Revelation" },
      { id: "leaks",         label: "Mapping the Seven Leaks" },
      { id: "insurance",     label: "The Insurance Opportunity" },
      { id: "seo",           label: "The SEO Architecture" },
      { id: "trust",         label: "The Trust Problem" },
      { id: "funnel-rebuild",label: "Rebuilding the Funnel" },
      { id: "cac",           label: "CAC: The Attribution Discovery" },
      { id: "channel",       label: "Channel Economics" },
      { id: "loops",         label: "Engineering Growth Loops" },
      { id: "execution",     label: "18 Months of Building" },
      { id: "failures",      label: "The Mistakes That Hurt" },
      { id: "results",       label: "Results: The Full Picture" },
      { id: "meaning",       label: "What 45M MAU Means" },
      { id: "learnings",     label: "What CarInfo Taught Me" },
    ],
  },
  knipex: {
    title: "What Selling German Pliers in India Taught Me About Building Software Products",
    company: "KNIPEX Tools",
    role: "Product Marketing",
    category: "B2B · Physical Products · Operations",
    metric: "0",
    metricLabel: "Margin for Error",
    readTime: "35 min read",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=80&auto=format",
    tagline: "Physical systems don't iterate. 6-month lead times. Real costs for wrong decisions. Here's what that discipline builds.",
    component: KnipexStory,
    toc: [
      { id: "hook",          label: "The Shipment That Was Late" },
      { id: "context",       label: "Germany Meets India" },
      { id: "knipex",        label: "KNIPEX's India Story" },
      { id: "reality",       label: "The Physical PM's Reality" },
      { id: "inventory",     label: "Inventory as Product Decisions" },
      { id: "lead-times",    label: "What 6-Month Leads Teach You" },
      { id: "distribution",  label: "The Distribution Problem" },
      { id: "demand",        label: "Building Demand Intelligence" },
      { id: "category",      label: "Creating vs Entering a Category" },
      { id: "b2b",           label: "B2B Relationship Architecture" },
      { id: "failures",      label: "What Physical Products Break" },
      { id: "framework",     label: "The Constraint-First Framework" },
      { id: "results",       label: "Results" },
      { id: "transfer",      label: "How This Made Me Better" },
      { id: "learnings",     label: "The Mental Models That Stuck" },
    ],
  },
  upgrowth: {
    title: "Running 50 People Across 4 Products: What Decision Coherence at Scale Actually Looks Like",
    company: "UpGrowth",
    role: "Product Head",
    category: "Leadership · Multi-Product · Scale",
    metric: "50+",
    metricLabel: "Team Members Led",
    readTime: "42 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format",
    tagline: "The hardest part of leading a 50-person product organization isn't the decisions you make. It's the ones you stop the team from making.",
    component: UpGrowthStory,
    toc: [
      { id: "hook",          label: "The Week Everything Launched" },
      { id: "context",       label: "Scale is Not Just Numbers" },
      { id: "inherited",     label: "What I Inherited" },
      { id: "coherence",     label: "The Coherence Problem" },
      { id: "priority",      label: "When Everything is P1" },
      { id: "operating",     label: "Building the PM OS" },
      { id: "structure",     label: "How I Structured the Team" },
      { id: "okr",           label: "The OKR Failure and Recovery" },
      { id: "growth",        label: "Growth Platform Architecture" },
      { id: "monetisation",  label: "Monetisation at Scale" },
      { id: "engineering",   label: "The Engineering Relationship" },
      { id: "leadership",    label: "Leadership in Ambiguity" },
      { id: "team",          label: "The Team That Grew Me" },
      { id: "results",       label: "Results: 12 Months of Clarity" },
      { id: "learnings",     label: "What Scale Taught Me" },
    ],
  },
};

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border z-[60]">
      <div className="h-full bg-primary transition-none" style={{ width: `${progress}%` }} />
    </div>
  );
}

function TableOfContents({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <nav className="hidden xl:block sticky top-28 self-start w-52 shrink-0">
      <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-4">On this page</p>
      <ul className="space-y-0.5 max-h-[70vh] overflow-y-auto pr-2">
        {items.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className={`text-left w-full text-xs py-1.5 px-3 rounded-lg transition-all ${
                active === id
                  ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary pl-2"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function CompanyStoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const story = stories[slug ?? ""];
  if (!story) return <NotFound />;

  const { component: StoryContent, toc } = story;

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar />

        {/* Hero */}
        <div className="relative w-full h-72 md:h-[460px] overflow-hidden mt-16 bg-foreground">
          <img
            src={story.image}
            alt={story.company}
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-14">
            <div className="container mx-auto max-w-5xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-primary/40 bg-primary/15 text-primary">
                  {story.category}
                </span>
                <span className="text-white/40 text-xs flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {story.readTime}
                </span>
                <span className="text-white/40 text-xs flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> Yogesh Yadav
                </span>
              </div>
              <h1 className="text-2xl md:text-[2.4rem] font-serif font-bold text-white leading-tight max-w-3xl mb-3">
                {story.title}
              </h1>
              <p className="text-white/50 text-sm md:text-base max-w-2xl leading-relaxed italic">
                {story.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container px-4 md:px-6 mx-auto max-w-5xl py-12">
          <Link href="/work">
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Work With Me
            </button>
          </Link>

          <div className="flex gap-12 items-start">
            <TableOfContents items={toc} />
            <main className="flex-1 min-w-0" style={{ fontSize: "17px", lineHeight: "1.9" }}>
              <Suspense fallback={
                <div className="animate-pulse space-y-4">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="h-5 bg-muted rounded" style={{ width: `${70 + (i % 4) * 8}%` }} />
                  ))}
                </div>
              }>
                <StoryContent />
              </Suspense>

              {/* Bottom CTA */}
              <div className="mt-20 pt-10 border-t border-border">
                <div className="rounded-3xl bg-foreground p-8 md:p-12 text-center relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(37,99,235,0.12) 0%, transparent 65%)" }} />
                  <p className="relative text-xs font-bold tracking-widest uppercase text-primary mb-4">Ready to Talk?</p>
                  <h2 className="relative text-2xl md:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                    Your product has a version of this story too.<br /> Let's find and fix it together.
                  </h2>
                  <p className="relative text-white/45 text-sm mb-8 max-w-md mx-auto">Every company I've worked with had the same thing: a gap between what the data showed and what the team believed. Let's close that gap.</p>
                  <Button size="lg" className="rounded-full px-10" asChild>
                    <Link href="/contact">Start a Conversation →</Link>
                  </Button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <Link href="/work">
                    <div className="p-5 rounded-xl border border-border hover:border-primary/30 cursor-pointer group transition-all text-center">
                      <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">All Company Stories</p>
                      <p className="text-xs text-muted-foreground mt-1">Read the full work history</p>
                    </div>
                  </Link>
                  <Link href="/case-studies">
                    <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 cursor-pointer text-center">
                      <p className="font-bold text-sm text-primary">26 Case Studies</p>
                      <p className="text-xs text-muted-foreground mt-1">Deep technical breakdowns</p>
                    </div>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
