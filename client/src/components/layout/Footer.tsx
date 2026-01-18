export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-white/10">
      <div className="container px-4 mx-auto text-center">
        <div className="text-2xl font-serif font-bold mb-6">
          Yogesh Yadav<span className="text-primary">.</span>
        </div>
        <div className="flex justify-center gap-8 mb-8 text-white/60">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
        </div>
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Yogesh Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
