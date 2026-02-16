import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">Certus</span>
            </div>
            <p className="text-sm text-card/60 max-w-xs">
              The AI phone agent built for restaurants. Turn every call into revenue.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            <div>
              <h4 className="text-sm font-semibold mb-3">Product</h4>
              <div className="space-y-2 text-sm text-card/60">
                <a href="#features" className="block hover:text-card">Features</a>
                <a href="#roi" className="block hover:text-card">ROI Calculator</a>
                <a href="#how-it-works" className="block hover:text-card">How it Works</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-3">Company</h4>
              <div className="space-y-2 text-sm text-card/60">
                <a href="#" className="block hover:text-card">Careers</a>
                <a href="#blog" className="block hover:text-card">Blog</a>
                <a href="#" className="block hover:text-card">Contact</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-card/10 pt-6 text-xs text-card/40">
          © 2026 Certus AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
