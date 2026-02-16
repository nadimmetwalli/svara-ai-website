import { Phone, TrendingUp, Award } from "lucide-react";
import heroChef from "@/assets/hero-chef.jpg";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Trust badges */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs text-muted-foreground">★ Trustpilot</span>
          </div>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-sm font-semibold text-foreground">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-certus-green flex items-center justify-center rounded-sm">
                  <span className="text-[10px] text-card font-bold">★</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-certus-orange text-certus-orange rounded-full px-3 py-1">
              <TrendingUp className="w-3 h-3" /> Combinator
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1">
              <Award className="w-3 h-3" /> Best Restaurant Tech
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1">
              <TrendingUp className="w-3 h-3" /> Top AI Startup
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            Turn Every Phone Call Into Revenue with{" "}
            <span className="text-primary">Certus AI.</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8">
            Meet the first AI Phone Agent that sounds like your best employee. It answers 24/7, takes complex orders directly into POS and never puts a guest on hold.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
              <Phone className="w-4 h-4" /> Hear It Live
            </a>
            <a href="#roi" className="inline-flex items-center gap-2 border border-primary text-primary rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/5 transition-colors">
              Calculate lost orders
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroChef}
            alt="Restaurant chef using Certus AI"
            className="rounded-2xl w-full h-auto object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
