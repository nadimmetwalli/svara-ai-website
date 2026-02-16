import { useState } from "react";
import { Phone, Menu, X, ArrowUpRight } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Phone className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">Certus</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#roi" className="text-sm font-medium text-foreground hover:text-primary transition-colors">ROI Calculator</a>
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Careers</a>
          <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Blogs</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#how-it-works" className="text-sm font-medium text-primary border border-primary rounded-full px-5 py-2 hover:bg-primary/5 transition-colors">
            How it Works
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-full px-5 py-2.5 hover:bg-primary/90 transition-colors">
            Book a demo <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-6 space-y-4">
          <a href="#roi" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>ROI Calculator</a>
          <a href="#features" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>Careers</a>
          <a href="#blog" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>Blogs</a>
          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-full px-5 py-2.5">
            Book a demo <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
