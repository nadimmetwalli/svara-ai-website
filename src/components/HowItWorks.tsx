import { Settings, MessageSquare, Monitor, ArrowUpRight } from "lucide-react";
import step1 from "@/assets/step1-handoff.jpg";
import step2 from "@/assets/step2-conversation.jpg";
import step3 from "@/assets/step3-pos.jpg";

const steps = [
  {
    icon: Settings,
    step: "STEP 1",
    title: "The Handoff",
    img: step1,
    desc: "Simply set your phone line to forward to your unique Certus number either all day, or just during peak rush hours. You keep your existing phone number. Setup takes less than 15 minutes.",
  },
  {
    icon: MessageSquare,
    step: "STEP 2",
    title: "The Conversation",
    img: step2,
    desc: "Our AI answers instantly. It navigates your menu, upsells sides and drinks, answers questions about allergies, and handles distinct accents with ease. It's polite and accurate.",
  },
  {
    icon: Monitor,
    step: "STEP 3",
    title: "1-Click POS Integrations",
    img: step3,
    desc: "The order is injected directly into your POS (Toast, Square, Clover, etc). It prints at the bar and kitchen just like a server entered it.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1 mb-4">
              How it Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Technology that gets<br />you live in 48 hours
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md">
              No new hardware. No training staff. We integrate directly into the systems you already use.
            </p>
          </div>
          <a href="#" className="mt-6 md:mt-0 inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            Start your integration <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i}>
              <div className="relative rounded-2xl overflow-hidden h-72 mb-4">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-8 h-8 bg-card/20 backdrop-blur rounded-full flex items-center justify-center">
                    <s.icon className="w-4 h-4 text-card" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-card/70">{s.step}</p>
                    <p className="text-sm font-bold text-card">{s.title}</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
