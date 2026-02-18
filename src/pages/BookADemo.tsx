import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckSquare, Phone, TrendingUp, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import svaraLogo from "@/assets/svara-logo.png";
import Header from "@/components/Header";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const painPoints = [
  "Phones are ringing, but orders aren't showing",
  "Staff is too busy to answer calls",
  "Customers complain about not reaching them",
  "Late-night calls are always missed",
  "They're unsure how much revenue is being lost",
];

const steps = [
  {
    id: 1,
    question: "Do you own a Restaurant, QSR or Takeaway?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No, I own another kind of business", value: "no" },
    ],
  },
  {
    id: 2,
    question: "How many locations do you have?",
    options: [
      { label: "1 location", value: "1" },
      { label: "2-5 locations", value: "2-5" },
      { label: "6+ locations", value: "6+" },
    ],
  },
  {
    id: 3,
    question: "What's your biggest challenge with phone orders?",
    options: [
      { label: "Missed calls during peak hours", value: "missed" },
      { label: "Staff too busy to answer", value: "busy" },
      { label: "After-hours calls", value: "after-hours" },
      { label: "Language barriers", value: "language" },
    ],
  },
  {
    id: 4,
    question: "Great! Let's get you set up.",
    isContact: true,
  },
];

const features = [
  { icon: CheckSquare, label: "Built for real environments" },
  { icon: CheckSquare, label: "Fast onboarding" },
  { icon: CheckSquare, label: "Live support" },
  { icon: CheckSquare, label: "Measurable ROI" },
];

const BookADemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "" });

  const handleSelect = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    // placeholder for form submission
    alert("Thank you! We'll be in touch shortly.");
  };

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-certus-orange text-certus-orange rounded-full px-3 py-1">
                <TrendingUp className="w-3 h-3" /> Prototron
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1">
                <Award className="w-3 h-3" /> Best Hospitality Tech
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1">
                <TrendingUp className="w-3 h-3" /> Top AI Startup
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
              Maximise Profit, Lower Cost, By Never Missing A{" "}
              <span className="text-primary">Call Again</span>
            </h1>

            <p className="text-sm md:text-base text-muted-foreground max-w-lg mb-8">
              We'll understand your business, review your current call flow, and show you how SVARA AI can recover lost revenue — without adding more staff.
            </p>

            <div className="space-y-3">
              {painPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-primary font-medium border-b border-border pb-3">
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form card */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
            <div className="mb-6">
              <img src={svaraLogo} alt="SVARA" className="w-10 h-10 object-contain" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step.isContact ? (
                  /* Contact form step */
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-foreground text-background text-xs font-bold mr-2">{step.id}</span>
                      {step.question}
                    </p>
                    <div className="space-y-4 mt-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>
                ) : (
                  /* Question step */
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-foreground text-background text-xs font-bold mr-2">{step.id}</span>
                      {step.question}
                    </p>
                    <div className="space-y-3">
                      {step.options?.map((opt, i) => (
                        <button
                          key={opt.value}
                          onClick={() => handleSelect(opt.value)}
                          className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
                            answers[currentStep] === opt.value
                              ? "border-foreground bg-foreground text-background"
                              : "border-border bg-card text-foreground hover:border-muted-foreground"
                          }`}
                        >
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded border border-current text-[10px] font-bold mr-3">
                            {String.fromCharCode(65 + i)}
                          </span>
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <button
              onClick={step.isContact ? handleSubmit : handleNext}
              disabled={!step.isContact && !answers[currentStep]}
              className="w-full mt-8 bg-primary text-primary-foreground rounded-full py-3 font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step.isContact ? "SUBMIT" : "NEXT"}
            </button>

            {/* Step indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentStep ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="px-4 py-12">
        <div className="container mx-auto">
          <div className="bg-features-gradient rounded-3xl p-10 md:p-14 text-center overflow-hidden relative">
            {/* Decorative circles */}
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-primary/20 blur-sm" />
            <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-primary/15 blur-sm" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-extrabold text-primary-foreground mb-3">
                We work with restaurants that<br />can't afford to miss calls
              </h2>
              <p className="text-sm text-primary-foreground/70 mb-10 max-w-lg mx-auto">
                From busy take-out counters to multi-location chains — SVARA supports restaurants where reliability matters.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((f, i) => (
                  <div key={i} className="bg-primary-foreground/10 rounded-2xl p-6 flex flex-col items-center gap-3">
                    <f.icon className="w-8 h-8 text-primary-foreground" />
                    <p className="text-sm font-bold text-primary-foreground">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse Blog + FAQ + Footer */}
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

export default BookADemo;
