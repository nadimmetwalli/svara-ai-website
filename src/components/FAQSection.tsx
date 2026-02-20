import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const faqs = [
  { q: "How does SVARA AI integrate with my existing booking system?", a: "SVARA is designed to be ecosystem-agnostic. We use secure API bridges to connect directly with industry-leading Property Management Systems (PMS) like Mews, Oracle Opera, and Cloudbeds. This ensures that when SVARA confirms a booking or modifies a stay, your internal calendar is updated in real-time with zero manual data entry required from your staff." },
  { q: "Will the AI sound 'robotic' or frustrate my international guests?", a: "On the contrary, SVARA utilizes a high-fidelity streaming architecture that delivers near-zero latency and natural, human-like tonality. Our agent is natively multilingual, capable of switching between languages and understanding regional accents with ease. If a request becomes too complex, SVARA is programmed to perform a 'Warm Hand-off,' seamlessly transferring the guest to a human team member with a full transcript of the conversation so far." },
  { q: "Does SVARA replace my front-desk team?", a: "SVARA is built to empower your team, not replace them. By automating up to 70% of routine inquiries—such as booking confirmations, amenity FAQs, and restaurant reservations—SVARA removes the 'Administrative Burden' from your reception desk. This allows your talented staff to focus on providing high-touch, in-person hospitality to the guests standing right in front of them." },
  { q: "How do you ensure the security of our guests' private data?", a: "Trust is the foundation of hospitality. SVARA is fully GDPR-compliant, utilizing AES-256 encryption and EU-only data residency (Frankfurt/Stockholm). We employ 'PII Scrubbing' technology that automatically masks sensitive guest information in our logs, and we never store credit card details on our servers, passing them through secure, encrypted tunnels directly to your payment processor." },
  { q: "Can SVARA handle multiple languages?", a: "Yes! SVARA is designed to communicate in multiple languages, making it perfect for businesses operating in diverse markets across the Nordics, Baltics, and beyond." },
  { q: "Will I be able to see a report of how SVARA AI is doing?", a: "Absolutely. Our analytics dashboard gives you real-time insights on calls answered, revenue recovered, peak times, and customer requests." },
  { q: "How would you provide us with support, and do we need to pay for it?", a: "We provide 24/7 dedicated support at no extra cost. Our team is always available to help with setup, optimization, and any questions you may have." },
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
          <Link to="/book-a-demo" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            Book a demo <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
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
