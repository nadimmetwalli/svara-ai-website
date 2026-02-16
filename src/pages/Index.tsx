import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ROICalculator from "@/components/ROICalculator";
import FeaturesGrid from "@/components/FeaturesGrid";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <SocialProof />
      </AnimatedSection>
      <AnimatedSection>
        <ROICalculator />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturesGrid />
      </AnimatedSection>
      <AnimatedSection>
        <HowItWorks />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <BlogSection />
      </AnimatedSection>
      <AnimatedSection>
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
