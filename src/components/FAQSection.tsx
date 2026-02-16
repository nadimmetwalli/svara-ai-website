import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";

const faqs = [
  { q: "How will my kitchen be able to receive the orders that SVARA AI takes?", a: "Orders are sent directly to your POS system (Toast, Square, Clover, etc.) and print at the bar and kitchen just like a server entered them." },
  { q: "Can SVARA AI process payments over the phone?", a: "Yes, SVARA can securely process payments during the call, integrating with your existing payment processor for a seamless experience." },
  { q: "How will SVARA AI handle customers who struggle to speak English?", a: "SVARA supports multiple languages including English, Spanish, and more. It handles distinct accents with ease and makes every customer feel understood." },
  { q: "How would you provide us with support, and do we need to pay for it?", a: "We provide 24/7 dedicated support at no extra cost. Our team is always available to help with setup, optimization, and any questions you may have." },
  { q: "Will I be able to see a report of how SVARA AI is doing?", a: "Absolutely. Our analytics dashboard gives you real-time insights on calls answered, revenue recovered, peak times, and customer requests." },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="container mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mb-6">
            Still have questions? We've answered some of the most common queries below to help you make an informed decision.
          </p>
          <p className="text-sm font-semibold text-foreground mb-2">Still have questions?</p>
          <p className="text-sm text-muted-foreground mb-6">Get in touch now and we can help you with all your queries right away</p>
          <a href="#" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            Book a demo <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
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
