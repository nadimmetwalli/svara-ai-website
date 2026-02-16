const logos = [
  "BY", "Mauka", "SmashHouse", "Gold Coast", "North Wildwood", "Jimmy's Seaside",
  "Burger Bros", "FOR THE WIN", "Oakwood", "Cheli's", "THE"
];

const SocialProof = () => {
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-8">Restaurants that trust Certus AI Everyday</p>
        <div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-50 grayscale">
          {logos.map((name) => (
            <span key={name} className="text-lg font-bold text-foreground tracking-tight whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
