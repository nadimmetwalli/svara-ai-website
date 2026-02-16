const logos = [
  "BY", "Mauka", "SmashHouse", "Gold Coast", "North Wildwood", "Jimmy's Seaside",
  "Burger Bros", "FOR THE WIN", "Oakwood", "Cheli's", "THE"
];

const SocialProof = () => {
  return (
    <section className="py-12 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-8">Restaurants that trust SVARA AI Everyday</p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee whitespace-nowrap opacity-50 grayscale">
          {[...logos, ...logos].map((name, i) => (
            <span key={i} className="text-lg font-bold text-foreground tracking-tight mx-6 md:mx-10 shrink-0">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
