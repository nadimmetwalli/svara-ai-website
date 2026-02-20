import { Settings, MessageSquare, Monitor, ArrowUpRight } from "lucide-react";
import step1 from "@/assets/step1-handoff.jpg";
import step2 from "@/assets/step2-conversation.jpg";
import step3 from "@/assets/step3-pos.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const stepIcons = [Settings, MessageSquare, Monitor];
const stepImages = [step1, step2, step3];

const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1 mb-4">
              {t.howItWorks.badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground whitespace-pre-line">
              {t.howItWorks.title}
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md">{t.howItWorks.subtitle}</p>
          </div>
          <a href="#" className="mt-6 md:mt-0 inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            {t.howItWorks.startIntegration} <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.howItWorks.steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={i}>
                <div className="relative rounded-2xl overflow-hidden h-72 mb-4">
                  <img src={stepImages[i]} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-card/20 backdrop-blur rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-card" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-card/70">{s.step}</p>
                      <p className="text-sm font-bold text-card">{s.title}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
