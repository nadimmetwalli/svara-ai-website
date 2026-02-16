import { Star } from "lucide-react";

const reviews = [
  { name: "Art Ingemi", text: "I highly recommend this company to service your customers phone calls." },
  { name: "Rico Fries LLC", text: "I have used this company for about two months now and the results have been great from my experience. The customer service and support has been 10 out of 10 for me." },
  { name: "Jean V", text: "The program is very helpful with our restaurant and event venue where we handle tons of calls each day. The dashboard is pretty straight-forward and easy to use." },
  { name: "Samantha Noble", text: "We rely a lot on phone orders for takeout, and with just one girl handling both calls and in-person customers, things used to get pretty hectic. Since we got Certus AI, those issues have pretty much vanished." },
  { name: "Lucas Norman", text: "I've been using this AI system for the past 4 weeks at my pizza takeaway and delivery restaurant. Our customer base is mostly older and they prefer to call in their orders." },
  { name: "Michael Hamilton", text: "I've had a fantastic experience with Certus AI. The AI makes me thousands of dollars a month from upselling and is saving my front of house dozens of hours." },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-[1fr_2fr] gap-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-muted-foreground">★ Trustpilot</span>
          </div>
          <div className="flex items-center gap-1 mb-4">
            <span className="text-sm font-semibold text-foreground">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-certus-green flex items-center justify-center rounded-sm">
                  <span className="text-[10px] text-card font-bold">★</span>
                </div>
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Trusted by Restaurant Owners Worldwide
          </h2>
          <p className="text-muted-foreground mb-8">Verified reviews from restaurants using Certus in real service conditions.</p>
          <a href="#" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-6 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            Book a demo ↗
          </a>
        </div>

        <div className="columns-1 sm:columns-2 gap-4 space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="break-inside-avoid bg-card rounded-2xl border border-border p-6">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground mb-4">{r.text}</p>
              <p className="text-sm font-semibold text-foreground">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
