import { Link, useParams } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies, categoryColors } from "@/data/caseStudies";
import NotFound from "@/pages/not-found";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) return <NotFound />;

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      {/* Hero image */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden mt-16 bg-muted">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 container mx-auto">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full border mb-3 inline-block ${categoryColors[study.category] ?? "bg-muted text-muted-foreground"}`}>
            {study.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight max-w-3xl">
            {study.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <article className="container px-4 md:px-6 mx-auto max-w-3xl py-12">
        {/* Back nav */}
        <Link href="/case-studies">
          <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </button>
        </Link>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground border-b border-border pb-6">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{study.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{study.readTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Tag className="h-4 w-4" />
            <div className="flex gap-1.5">
              {study.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 rounded-full bg-muted text-xs font-medium border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Description lead */}
        <p className="text-xl text-muted-foreground leading-relaxed mb-10 font-medium">
          {study.description}
        </p>

        {/* Placeholder content */}
        <div className="rounded-2xl border-2 border-dashed border-border bg-muted/30 p-10 md:p-16 text-center">
          <div className="text-5xl mb-4">🚧</div>
          <h2 className="text-2xl font-serif font-bold text-foreground mb-3">
            Detailed case study coming soon
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            The full breakdown — strategy, execution, results, and learnings — is being written up. 
            Check back soon or reach out if you'd like to discuss this directly.
          </p>
          <Button asChild>
            <Link href="/contact">Discuss this with Yogesh →</Link>
          </Button>
        </div>

        {/* Nav between studies */}
        <div className="mt-12 pt-8 border-t border-border flex items-center justify-between gap-4">
          <Link href="/case-studies">
            <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
              <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              All Case Studies
            </button>
          </Link>
          <Link href="/contact">
            <button className="text-sm font-medium text-primary hover:underline">
              Work with Yogesh →
            </button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
