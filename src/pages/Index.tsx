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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SocialProof />
      <ROICalculator />
      <FeaturesGrid />
      <HowItWorks />
      <Testimonials />
      <BlogSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
