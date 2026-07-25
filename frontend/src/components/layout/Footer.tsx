export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 md:py-12 border-t border-white/10">
      <div className="container px-4 mx-auto text-center">
        <div className="text-lg md:text-2xl font-serif font-bold mb-3 md:mb-6">
          Yogesh Yadav<span className="text-primary">.</span>
        </div>
        
        <p className="text-white/40 text-[11px] md:text-sm">
          &copy; {new Date().getFullYear()} Yogesh Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
