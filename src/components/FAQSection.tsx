import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            {t.faq.title}
          </h2>
          <p className="text-muted-foreground mb-6">{t.faq.subtitle}</p>
          <p className="text-sm font-semibold text-foreground mb-2">{t.faq.stillQuestions}</p>
          <p className="text-sm text-muted-foreground mb-6">{t.faq.getInTouch}</p>
          <Link to="/book-a-demo" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            {t.header.bookADemo} <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6">
              <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
