import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const columnA = [
  { name: "Elisabeth Krause, GM — Boutique Hotel Vienna", text: "Since deploying SVARA, our front desk team can finally focus on the guests in front of them. The AI handles after-hours booking calls flawlessly — we've seen a 35% increase in direct reservations." },
  { name: "Henrik Lindqvist, Ops Director — Nordic Spa Resort", text: "SVARA's multilingual capabilities are a game-changer. Our guests call in Swedish, Finnish, English, and German — and the AI handles every language with ease. Our guest satisfaction scores have never been higher." },
  { name: "Ana Pereira, Revenue Manager — Lisbon Heritage Hotels", text: "We were losing bookings to OTAs simply because no one could answer the phone during peak check-in hours. SVARA recovered over €12,000 in direct bookings in our first month alone." },
];

const columnB = [
  { name: "James Whitfield, Owner — The Georgian House B&B", text: "As a small property, we can't staff a 24/7 reception. SVARA acts as our virtual concierge overnight — confirming reservations, answering amenity questions, and even booking restaurant tables for guests." },
  { name: "Sofia Andersson, Front Office Manager — Clarion Hotel", text: "The warm hand-off feature is brilliant. When a guest has a complex request, SVARA transfers them to our team with a full transcript. It feels completely seamless and our staff loves it." },
  { name: "Marco Bellini, Director — Tuscan Villa Collection", text: "I was skeptical about AI in luxury hospitality, but SVARA's tone is warm and professional. Our guests often don't realise they're speaking to an AI. It handles spa bookings, room upgrades, and concierge requests beautifully." },
];

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
  // Duplicate items for seamless loop
  const dupeA = [...columnA, ...columnA];
  const dupeB = [...columnB, ...columnB];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Trusted by Hoteliers Worldwide
          </h2>
          <p className="text-muted-foreground mb-8">Verified reviews from hospitality professionals using SVARA in real operations.</p>
          <Link to="/book-a-demo" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            Book a demo ↗
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 h-[500px] overflow-hidden">
          {/* Column scrolling UP */}
          <div className="relative overflow-hidden">
            <div className="animate-scroll-up flex flex-col">
              {dupeA.map((r, i) => (
                <ReviewCard key={i} name={r.name} text={r.text} />
              ))}
            </div>
          </div>

          {/* Column scrolling DOWN */}
          <div className="relative overflow-hidden">
            <div className="animate-scroll-down flex flex-col">
              {dupeB.map((r, i) => (
                <ReviewCard key={i} name={r.name} text={r.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
