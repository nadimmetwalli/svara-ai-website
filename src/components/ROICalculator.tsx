import { useState } from "react";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const tabs = ["Missing Phone Calls?", "Staff not upselling?", "Cut Labour Costs?"];

const ROICalculator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [callsPerDay, setCallsPerDay] = useState(25);
  const [callToOrder, setCallToOrder] = useState(70);
  const [missedCalls, setMissedCalls] = useState(8);
  const [aov, setAov] = useState(45);
  const [daysOpen, setDaysOpen] = useState(30);
  const [locations, setLocations] = useState(3);

  const monthlyLoss = missedCalls * (callToOrder / 100) * aov * daysOpen;
  const yearlyLoss = monthlyLoss * 12;
  const totalLocationLoss = monthlyLoss * locations;

  return (
    <section id="roi" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1 mb-4">
            <Calculator className="w-3 h-3" /> ROI Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Calculate your potential<br />ROI with Certus
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Use this quick calculator to estimate how much revenue your restaurant loses due to missed phone calls. And how much Certus AI could recover — automatically.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                i === activeTab
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary hover:bg-primary/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sliders */}
          <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
            <SliderField label="Calls Received Per Day" value={callsPerDay} onChange={setCallsPerDay} max={100} />
            <SliderField label="Call to Order %" value={callToOrder} onChange={setCallToOrder} max={100} />
            <SliderField label="Missed Calls Per Day" value={missedCalls} onChange={setMissedCalls} max={100} />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Average Order Value</label>
              <input
                type="number"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value))}
                className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Days Open Per Month</label>
                <input
                  type="number"
                  value={daysOpen}
                  onChange={(e) => setDaysOpen(Number(e.target.value))}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">No. Of Locations</label>
                <input
                  type="number"
                  value={locations}
                  onChange={(e) => setLocations(Number(e.target.value))}
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-roi-card rounded-2xl p-8 text-primary-foreground flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-foreground/20 rounded-full px-3 py-1 mb-6">
                Combinator
              </span>
              <p className="text-sm opacity-80 mb-2">Revenue Lost Per Month</p>
              <p className="text-4xl md:text-5xl font-extrabold mb-8">
                ${monthlyLoss.toLocaleString()}
              </p>

              <div className="space-y-3">
                <div className="bg-primary-foreground/15 rounded-xl px-5 py-4">
                  <p className="text-xs opacity-70">Revenue Lost Per Year</p>
                  <p className="text-2xl font-bold">${yearlyLoss.toLocaleString()}</p>
                </div>
                <div className="bg-primary-foreground/15 rounded-xl px-5 py-4">
                  <p className="text-xs opacity-70">Locations Total Monthly Loss</p>
                  <p className="text-2xl font-bold">${totalLocationLoss.toLocaleString()}</p>
                </div>
              </div>

              <p className="text-xs opacity-60 mt-6">
                This is an automated estimate based on average restaurant metrics. Actual results may vary by menu, call volume, and operations.
              </p>
            </div>

            <a href="#" className="mt-8 block text-center bg-card text-foreground rounded-full py-3 font-semibold text-sm hover:bg-card/90 transition-colors">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const SliderField = ({ label, value, onChange, max }: { label: string; value: number; onChange: (v: number) => void; max: number }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <span className="text-sm font-semibold text-primary">{value}</span>
    </div>
    <Slider value={[value]} onValueChange={([v]) => onChange(v)} max={max} step={1} className="w-full" />
    <div className="flex justify-between text-xs text-muted-foreground mt-1">
      <span>0</span>
      <span>{max}</span>
    </div>
  </div>
);

export default ROICalculator;
