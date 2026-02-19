import { useState } from "react";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const tabs = ["Missing Phone Calls?", "Staff not Upselling?", "Cut Labour Costs?"];

const ROICalculator = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Tab 0: Missing Phone Calls
  const [callsPerDay0, setCallsPerDay0] = useState(25);
  const [callToOrder, setCallToOrder] = useState(70);
  const [missedCalls, setMissedCalls] = useState(8);
  const [aov0, setAov0] = useState(45);
  const [daysOpen0, setDaysOpen0] = useState(30);
  const [locations0, setLocations0] = useState(3);

  // Tab 1: Staff not Upselling
  const [callsPerDay1, setCallsPerDay1] = useState(25);
  const [callToOrder1, setCallToOrder1] = useState(70);
  const [upsellValue, setUpsellValue] = useState(4);
  const [daysOpen1, setDaysOpen1] = useState(30);
  const [locations1, setLocations1] = useState(3);

  // Tab 2: Cut Labour Costs
  const [callsPerDay2, setCallsPerDay2] = useState(25);
  const [avgCallLength, setAvgCallLength] = useState(3);
  const [labourCost, setLabourCost] = useState(17);
  const [daysOpen2, setDaysOpen2] = useState(30);
  const [locations2, setLocations2] = useState(3);

  // Tab 0 calculations
  const monthlyLoss0 = missedCalls * (callToOrder / 100) * aov0 * daysOpen0;
  const yearlyLoss0 = monthlyLoss0 * 12;
  const totalLocationLoss0 = monthlyLoss0 * locations0;

  // Tab 1 calculations
  const monthlyLoss1 = callsPerDay1 * (callToOrder1 / 100) * upsellValue * daysOpen1;
  const yearlyLoss1 = monthlyLoss1 * 12;
  const totalLocationLoss1 = monthlyLoss1 * locations1;

  // Tab 2 calculations
  const timeSavedPerMonth = (callsPerDay2 * avgCallLength * daysOpen2) / 60; // hours
  const labourCostSaved = timeSavedPerMonth * labourCost;
  const totalTimeSaved = timeSavedPerMonth * locations2;
  const totalLabourSaved = labourCostSaved * locations2;

  return (
    <section id="roi" className="py-20 px-4 bg-roi-section">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1 mb-4">
            <Calculator className="w-3 h-3" /> ROI Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Calculate your potential<br />ROI with SVARA
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Use this quick calculator to estimate how much revenue your business loses due to missed phone calls. And how much SVARA AI could recover — automatically.
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
          {/* Tab 0: Missing Phone Calls */}
          {activeTab === 0 && (
            <>
              <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
                <SliderField label="Calls Received Per Day" value={callsPerDay0} onChange={setCallsPerDay0} max={100} />
                <SliderField label="Call to Order %" value={callToOrder} onChange={setCallToOrder} max={100} />
                <SliderField label="Missed Calls Per Day" value={missedCalls} onChange={setMissedCalls} max={100} />
                <InputField label="Average Order Value" value={aov0} onChange={setAov0} />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Days Open Per Month" value={daysOpen0} onChange={setDaysOpen0} />
                  <InputField label="No. Of Locations" value={locations0} onChange={setLocations0} />
                </div>
              </div>
              <div className="bg-roi-card rounded-2xl p-8 text-primary-foreground flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-foreground/20 rounded-full px-3 py-1 mb-6">Combinator</span>
                  <p className="text-sm opacity-80 mb-2">Revenue Lost Per Month</p>
                  <p className="text-4xl md:text-5xl font-extrabold mb-8">${monthlyLoss0.toLocaleString()}</p>
                  <div className="space-y-3">
                    <ResultBox label="Revenue Lost Per Year" value={`$${yearlyLoss0.toLocaleString()}`} />
                    <ResultBox label="Locations Total Monthly Loss" value={`$${totalLocationLoss0.toLocaleString()}`} />
                  </div>
                  <p className="text-xs opacity-60 mt-6">This is an automated estimate based on the average hospitality industry metrics. Actual results may vary by business, call volume, and operations.</p>
                </div>
                <a href="#" className="mt-8 block text-center bg-card text-foreground rounded-full py-3 font-semibold text-sm hover:bg-card/90 transition-colors">Book a demo</a>
              </div>
            </>
          )}

          {/* Tab 1: Staff not Upselling */}
          {activeTab === 1 && (
            <>
              <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
                <SliderField label="Calls Received Per Day" value={callsPerDay1} onChange={setCallsPerDay1} max={100} />
                <SliderField label="Call to Order %" value={callToOrder1} onChange={setCallToOrder1} max={100} />
                <SliderField label="Upsell $ Value" value={upsellValue} onChange={setUpsellValue} max={100} />
                <InputField label="Days Open" value={daysOpen1} onChange={setDaysOpen1} />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Days Open Per Month" value={daysOpen1} onChange={setDaysOpen1} />
                  <InputField label="No. Of Locations" value={locations1} onChange={setLocations1} />
                </div>
              </div>
              <div className="bg-[hsl(25,90%,55%)] rounded-2xl p-8 text-primary-foreground flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-foreground/20 rounded-full px-3 py-1 mb-6">Combinator</span>
                  <p className="text-sm opacity-80 mb-2">Revenue Lost Per Month</p>
                  <p className="text-4xl md:text-5xl font-extrabold mb-8">${monthlyLoss1.toLocaleString()}</p>
                  <div className="space-y-3">
                    <ResultBox label="Revenue Lost Per Year" value={`$${yearlyLoss1.toLocaleString()}`} />
                    <ResultBox label="Locations Total Monthly Loss" value={`$${totalLocationLoss1.toLocaleString()}`} />
                  </div>
                  <p className="text-xs opacity-60 mt-6">This is an automated estimate based on average restaurant metrics. Actual results may vary by menu, call volume, and operations.</p>
                </div>
                <a href="#" className="mt-8 block text-center bg-card text-foreground rounded-full py-3 font-semibold text-sm hover:bg-card/90 transition-colors">Book a demo</a>
              </div>
            </>
          )}

          {/* Tab 2: Cut Labour Costs */}
          {activeTab === 2 && (
            <>
              <div className="bg-card rounded-2xl p-8 border border-border space-y-8">
                <SliderField label="Calls Received Per Day" value={callsPerDay2} onChange={setCallsPerDay2} max={100} />
                <SliderField label="Average Call Length (mins)" value={avgCallLength} onChange={setAvgCallLength} max={100} />
                <InputField label="Labour Cost Per Hour" value={labourCost} onChange={setLabourCost} />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label="Days Open Per Month" value={daysOpen2} onChange={setDaysOpen2} />
                  <InputField label="No. Of Locations" value={locations2} onChange={setLocations2} />
                </div>
              </div>
              <div className="bg-[hsl(160,60%,55%)] rounded-2xl p-8 text-primary-foreground flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-foreground/20 rounded-full px-3 py-1 mb-6">Combinator</span>
                  <p className="text-sm opacity-80 mb-2">Staff Time Saved Per Month (hours)</p>
                  <p className="text-4xl md:text-5xl font-extrabold mb-8">{timeSavedPerMonth.toLocaleString(undefined, { maximumFractionDigits: 1 })} h</p>
                  <div className="space-y-3">
                    <ResultBox label="Equivalent Labour Cost Saved" value={`$${labourCostSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
                    <div className="grid grid-cols-2 gap-3">
                      <ResultBox label="Locations Total Monthly Time Saved" value={`${totalTimeSaved.toLocaleString(undefined, { maximumFractionDigits: 1 })} h`} />
                      <ResultBox label="Locations Total Monthly Labour Cost Saved" value={`$${totalLabourSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
                    </div>
                  </div>
                  <p className="text-xs opacity-60 mt-6">This is an automated estimate based on average restaurant metrics. Actual results may vary by menu, call volume, and operations.</p>
                </div>
                <a href="#" className="mt-8 block text-center bg-card text-foreground rounded-full py-3 font-semibold text-sm hover:bg-card/90 transition-colors">Book a demo</a>
              </div>
            </>
          )}
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

const InputField = ({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">{label}</label>
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground"
    />
  </div>
);

const ResultBox = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-primary-foreground/15 rounded-xl px-5 py-4">
    <p className="text-xs opacity-70">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default ROICalculator;
