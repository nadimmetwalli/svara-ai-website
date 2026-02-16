import { Clock, Zap, TrendingUp, CalendarDays, Globe, BarChart3 } from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Call Answering", desc: "Never miss a single order again even during rush hour." },
  { icon: Zap, title: "POS Order Sync", desc: "Orders are placed directly into your POS/KDS with full accuracy." },
  { icon: TrendingUp, title: "Smart Upselling", desc: "AI suggests pairings, add-ons, and combos to increase AOV automatically." },
  { icon: CalendarDays, title: "Reservations + Event Triage", desc: "Certus handles bookings, availability, and routes complex queries." },
  { icon: Globe, title: "Multilingual Support", desc: "English, Spanish, and other languages support helps customers feel understood instantly." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track calls answered, revenue recovered, peak times, and requests." },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-features-gradient rounded-3xl p-8 md:p-16">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary/40 text-primary rounded-full px-3 py-1 mb-4">
              ❤️ Features
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-card mb-3">
              Your restaurant's most reliable employee.
            </h2>
            <p className="text-sm text-card/60">Always on. Never tired. Perfectly trained. Never calls in sick.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {features.map((f, i) => (
              <div key={i} className="p-6 md:p-8 border border-dashed border-primary/30 rounded-lg">
                <f.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold text-card mb-2">{f.title}</h3>
                <p className="text-sm text-card/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
