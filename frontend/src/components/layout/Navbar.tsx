import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Static — defined outside component so it's never recreated on render
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work With Me", href: "/work" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      // Only update state when value actually changes — avoids re-renders
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || location !== "/" || mobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3 md:py-4"
          : "bg-transparent py-5 md:py-6"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight relative z-50">
          Yogesh Yadav<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary font-bold" : "text-foreground/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button
            asChild
            className="rounded-full px-7 py-5 text-sm font-semibold shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 -mr-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] z-40 bg-background flex flex-col px-4 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex flex-col h-full pb-8 pt-4 overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[28px] font-serif font-medium py-5 border-b border-border/40 transition-colors",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-12 mb-8">
              <Button
                className="w-full rounded-full h-14 text-lg font-semibold shadow-md shadow-primary/20"
                asChild
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Hire Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
