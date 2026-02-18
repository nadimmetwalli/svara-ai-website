import { Star } from "lucide-react";

const columnA = [
  { name: "Art Ingemi", text: "I highly recommend this company to service your customers phone calls." },
  { name: "Samantha Noble", text: "We rely a lot on phone orders for takeout, and with just one girl handling both calls and in-person customers, things used to get pretty hectic. Since we got SVARA AI, those issues have pretty much vanished." },
  { name: "Lucas Norman", text: "I've been using this AI system for the past 4 weeks at my pizza takeaway and delivery business. Our customer base is mostly older and they prefer to call in their orders." },
];

const columnB = [
  { name: "Rico Fries LLC", text: "I have used this company for about two months now and the results have been great from my experience. The customer service and support has been 10 out of 10 for me." },
  { name: "Jean V", text: "The program is very helpful with our hotel and event venue where we handle tons of calls each day. The dashboard is pretty straight-forward and easy to use." },
  { name: "Michael Hamilton", text: "I've had a fantastic experience with SVARA AI. The AI makes me thousands of dollars a month from upselling and is saving my front of house dozens of hours." },
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
            Trusted by Business Owners Worldwide
          </h2>
          <p className="text-muted-foreground mb-8">Verified reviews from businesses using SVARA in real service conditions.</p>
          <a href="#" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            Book a demo ↗
          </a>
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
