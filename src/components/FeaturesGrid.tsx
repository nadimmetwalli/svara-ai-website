import { Clock, Zap, TrendingUp, CalendarDays, Globe, BarChart3 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Clock, Zap, TrendingUp, CalendarDays, Globe, BarChart3];

const FeaturesGrid = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-features-gradient rounded-3xl p-5 sm:p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary-foreground/40 text-primary-foreground rounded-full px-3 py-1 mb-4">
              {t.features.badge}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-card mb-3">{t.features.title}</h2>
            <p className="text-sm text-card/60">{t.features.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {t.features.items.map((f, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="p-6 md:p-8 border border-dashed border-primary/30 rounded-lg">
                  <Icon className="w-8 h-8 text-primary-foreground mb-4" />
                  <h3 className="text-lg font-bold text-card mb-2">{f.title}</h3>
                  <p className="text-sm text-card/60">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
