import { Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="relative bg-certus-red overflow-hidden py-16 px-4">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full px-8">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="w-full aspect-square rounded-full bg-certus-dark/30" />
            ))}
          </div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Create your account today and<br />get started for free!
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-certus-red-light hover:bg-certus-red-light/90 text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
          >
            Book a demo <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-certus-cream text-certus-dark py-16 px-4 relative overflow-hidden">
        {/* Decorative curves */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1200 400" fill="none">
            <path d="M-100 350 Q300 100 600 300 Q900 500 1300 200" stroke="hsl(var(--certus-red))" strokeWidth="1.5" fill="none" />
            <path d="M-50 380 Q350 150 650 320 Q950 490 1350 220" stroke="hsl(var(--certus-red))" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            {/* Logo & description */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 text-certus-dark/50">
                  <Phone className="w-10 h-10" />
                </div>
                <span className="text-4xl font-light text-certus-dark/50 tracking-tight">Certus</span>
              </div>
              <p className="text-sm text-certus-dark/60 leading-relaxed">
                Built to solve the problem of missed calls and lost revenue for restaurants everywhere.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-16">
              <div>
                <h4 className="text-sm font-semibold text-certus-red mb-4">Product</h4>
                <div className="space-y-2 text-sm text-certus-dark/70">
                  <a href="#how-it-works" className="block hover:text-certus-dark transition-colors">How It Works</a>
                  <a href="#roi" className="block hover:text-certus-dark transition-colors">ROI Calculator</a>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-certus-red mb-4">Resources</h4>
                <div className="space-y-2 text-sm text-certus-dark/70">
                  <a href="#blog" className="block hover:text-certus-dark transition-colors">Blog</a>
                  <a href="#" className="block hover:text-certus-dark transition-colors">Book a demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-certus-dark/10">
            <p className="text-xs text-certus-dark/50">Copyright © 2026 Certus Inc.</p>
            <div className="flex items-center gap-3">
              {/* X / Twitter */}
              <a href="#" className="w-8 h-8 rounded-full border border-certus-red/40 text-certus-red flex items-center justify-center hover:bg-certus-red hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full border border-certus-red/40 text-certus-red flex items-center justify-center hover:bg-certus-red hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 rounded-full border border-certus-red/40 text-certus-red flex items-center justify-center hover:bg-certus-red hover:text-white transition-colors">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="white"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
