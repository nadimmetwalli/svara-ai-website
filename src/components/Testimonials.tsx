import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const ReviewCard = ({ name, text }: { name: string; text: string }) => (
  <div className="bg-card rounded-2xl border border-border p-6 mb-4">
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-sm text-foreground mb-4">{text}</p>
    <p className="text-sm font-semibold text-foreground">{name}</p>
  </div>
);

const Testimonials = () => {
  const { t } = useLanguage();
  const dupeA = [...t.testimonials.columnA, ...t.testimonials.columnA];
  const dupeB = [...t.testimonials.columnB, ...t.testimonials.columnB];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground mb-8">{t.testimonials.subtitle}</p>
          <Link to="/book-a-demo" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            {t.header.bookADemo} ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[350px] sm:h-[500px] overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="animate-scroll-up flex flex-col">
              {dupeA.map((r, i) => <ReviewCard key={i} name={r.name} text={r.text} />)}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="animate-scroll-down flex flex-col">
              {dupeB.map((r, i) => <ReviewCard key={i} name={r.name} text={r.text} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
