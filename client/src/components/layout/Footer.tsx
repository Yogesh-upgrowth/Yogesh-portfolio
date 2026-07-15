import { Link } from "wouter";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Work With Me", href: "/work" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-white/10">
      <div className="container px-4 mx-auto text-center">
        <div className="text-2xl font-serif font-bold mb-6">
          Yogesh Yadav<span className="text-primary">.</span>
        </div>

        <nav aria-label="Footer" className="mb-6">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Yogesh Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
