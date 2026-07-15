import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Seo } from "@/lib/seo";

export default function NotFound() {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background flex flex-col">
      <Seo
        title="Page Not Found (404) | Yogesh Yadav"
        description="The page you were looking for doesn't exist or has moved. Browse the case studies, blog, and work instead."
        path="/404"
        noindex
      />
      <Navbar />
      <main id="main-content" className="flex-grow flex items-center justify-center px-4 py-32">
        <div className="max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Error 404
          </p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
            This page could not be found
          </h1>
          <p className="text-muted-foreground mb-10">
            The link may be broken or the page may have moved. Try one of these instead:
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="text-primary font-medium hover:underline">
              Go to the homepage
            </Link>
            <span aria-hidden="true" className="text-border">·</span>
            <Link href="/case-studies" className="text-primary font-medium hover:underline">
              Browse case studies
            </Link>
            <span aria-hidden="true" className="text-border">·</span>
            <Link href="/blog" className="text-primary font-medium hover:underline">
              Read the blog
            </Link>
            <span aria-hidden="true" className="text-border">·</span>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Get in touch
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </div>
  );
}
