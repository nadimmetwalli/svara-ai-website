import logoPrototron from "@/assets/logo-prototron.png";
import logoTaltech from "@/assets/logo-taltech.png";
import logoSwedbank from "@/assets/logo-swedbank.png";
import logoIgniter from "@/assets/logo-igniter.png";

const logos = [
  { src: logoPrototron, alt: "Prototron" },
  { src: logoTaltech, alt: "TalTech" },
  { src: logoSwedbank, alt: "Swedbank" },
  { src: logoIgniter, alt: "Igniter" },
];

const SocialProof = () => {
  return (
    <section className="py-12 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-8">Backed by:</p>
        <div className="flex items-center justify-center gap-10 md:gap-16 flex-wrap">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 w-auto object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
