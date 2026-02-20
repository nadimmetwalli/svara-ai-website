import logoPrototron from "@/assets/logo-prototron.png";
import logoTaltech from "@/assets/logo-taltech.png";
import logoSwedbank from "@/assets/logo-swedbank.png";
import logoIgniter from "@/assets/logo-igniter.png";
import logoEbs from "@/assets/logo-ebs.png";
import { useLanguage } from "@/i18n/LanguageContext";

const logos = [
  { src: logoPrototron, alt: "Prototron" },
  { src: logoTaltech, alt: "TalTech" },
  { src: logoSwedbank, alt: "Swedbank" },
  { src: logoIgniter, alt: "Igniter" },
  { src: logoEbs, alt: "EBS" },
];

const SocialProof = () => {
  const duped = [...logos, ...logos];
  const { t } = useLanguage();

  return (
    <section className="py-12 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-sm text-muted-foreground mb-8">{t.socialProof.backedBy}</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {duped.map((logo, i) => (
            <div key={i} className={`mx-8 md:mx-12 shrink-0 flex items-center justify-center h-12 ${logo.alt === "Igniter" ? "w-64" : logo.alt === "EBS" ? "w-72" : "w-32"}`}>
              <img src={logo.src} alt={logo.alt} className={`max-w-full object-contain ${logo.alt === "Igniter" ? "max-h-[5.5rem]" : logo.alt === "EBS" ? "max-h-[6rem]" : "max-h-full"}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
