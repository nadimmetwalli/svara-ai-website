import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import svaraLogo from "@/assets/svara-logo.png";
import { useLanguage, Language } from "@/i18n/LanguageContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        
        <Link to="/" className="flex items-center gap-2">
          <img src={svaraLogo} alt="Svara Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold text-primary">SVARA</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#roi" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.header.roiCalculator}</a>
          <a href="#demo" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.header.demo}</a>
          <a href="#blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">{t.header.blogs}</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center border border-border rounded-full overflow-hidden text-xs font-medium">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("et")}
              className={`px-3 py-1.5 transition-colors ${lang === "et" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"}`}
            >
              ET
            </button>
          </div>

          <a href="#how-it-works" className="text-sm font-medium text-primary border border-primary rounded-full px-5 py-2 hover:bg-primary/5 transition-colors">
            {t.header.howItWorks}
          </a>
          <Link to="/book-a-demo" className="inline-flex items-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-full px-5 py-2.5 hover:bg-primary/90 transition-colors">
            {t.header.bookADemo} <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4">
          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "border border-border text-foreground"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("et")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${lang === "et" ? "bg-primary text-primary-foreground" : "border border-border text-foreground"}`}
            >
              ET
            </button>
          </div>
          <a href="#roi" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>{t.header.roiCalculator}</a>
          <a href="#demo" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>{t.header.demo}</a>
          <a href="#blog" className="block text-sm font-medium" onClick={() => setMobileOpen(false)}>{t.header.blogs}</a>
          <a href="#how-it-works" className="block text-sm font-medium text-primary" onClick={() => setMobileOpen(false)}>{t.header.howItWorks}</a>
          <Link 
            to="/book-a-demo" 
            className="inline-flex items-center justify-center gap-1.5 text-sm font-medium bg-primary text-primary-foreground rounded-full px-5 py-2.5 w-full"
            onClick={() => setMobileOpen(false)}
          >
            {t.header.bookADemo} <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
