import { Phone, TrendingUp, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import recptionistImage1 from "@/assets/receptionist-image-1.jpg";
import recptionistImage2 from "@/assets/receptionist-image-2.jpg";
import recptionistImage3 from "@/assets/receptionist-image-3.jpg";
import restaurantImage1 from "@/assets/restaurant-image-1.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const images = [restaurantImage1, recptionistImage1, recptionistImage2, recptionistImage3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-certus-orange text-certus-orange rounded-full px-3 py-1">
              <TrendingUp className="w-3 h-3" /> {t.hero.badgeProtoron}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1">
              <Award className="w-3 h-3" /> {t.hero.badgeBestTech}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1">
              <TrendingUp className="w-3 h-3" /> {t.hero.badgeTopStartup}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6">
            <span className="text-primary">SVARA:</span> {t.hero.title}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#demo" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
              <Phone className="w-4 h-4" /> {t.hero.hearItLive}
            </a>
            <a href="#roi" className="inline-flex items-center gap-2 border border-primary text-primary rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/5 transition-colors">
              {t.hero.calculateLost}
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence>
            {images.map((src, i) => (
              i === currentIndex && (
                <motion.img
                  key={i}
                  src={src}
                  alt="SVARA AI in action"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
