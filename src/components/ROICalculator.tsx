import { useState } from "react";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useLanguage } from "@/i18n/LanguageContext";

const ROICalculator = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { t } = useLanguage();

  const [callsPerDay0, setCallsPerDay0] = useState(25);
  const [callToOrder, setCallToOrder] = useState(70);
  const [missedCalls, setMissedCalls] = useState(8);
  const [aov0, setAov0] = useState(45);
  const [daysOpen0, setDaysOpen0] = useState(30);
  const [locations0, setLocations0] = useState(3);

  const [callsPerDay1, setCallsPerDay1] = useState(25);
  const [callToOrder1, setCallToOrder1] = useState(70);
  const [upsellValue, setUpsellValue] = useState(4);
  const [daysOpen1, setDaysOpen1] = useState(30);
  const [locations1, setLocations1] = useState(3);

  const [callsPerDay2, setCallsPerDay2] = useState(25);
  const [avgCallLength, setAvgCallLength] = useState(3);
  const [labourCost, setLabourCost] = useState(17);
  const [daysOpen2, setDaysOpen2] = useState(30);
  const [locations2, setLocations2] = useState(3);

  const monthlyLoss0 = missedCalls * (callToOrder / 100) * aov0 * daysOpen0;
  const yearlyLoss0 = monthlyLoss0 * 12;
  const totalLocationLoss0 = monthlyLoss0 * locations0;

  const monthlyLoss1 = callsPerDay1 * (callToOrder1 / 100) * upsellValue * daysOpen1;
  const yearlyLoss1 = monthlyLoss1 * 12;
  const totalLocationLoss1 = monthlyLoss1 * locations1;

  const timeSavedPerMonth = (callsPerDay2 * avgCallLength * daysOpen2) / 60;
  const labourCostSaved = timeSavedPerMonth * labourCost;
  const totalTimeSaved = timeSavedPerMonth * locations2;
  const totalLabourSaved = labourCostSaved * locations2;

  return (
    <section id="roi" className="py-20 px-4 bg-roi-section">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium border border-primary text-primary rounded-full px-3 py-1 mb-4">
            <Calculator className="w-3 h-3" /> {t.roi.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 whitespace-pre-line">
            {t.roi.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t.roi.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {t.roi.tabs.map((tab, i) => (
            <button key={tab} onClick={() => setActiveTab(i)} className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition-colors ${i === activeTab ? "bg-primary text-primary-foreground" : "border border-primary text-primary hover:bg-primary/5"}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {activeTab === 0 && (
            <>
              <div className="bg-card rounded-2xl p-5 sm:p-8 border border-border space-y-6 sm:space-y-8">
                <SliderField label={t.roi.callsPerDay} value={callsPerDay0} onChange={setCallsPerDay0} max={100} />
                <SliderField label={t.roi.callToOrder} value={callToOrder} onChange={setCallToOrder} max={100} />
                <SliderField label={t.roi.missedCalls} value={missedCalls} onChange={setMissedCalls} max={100} />
                <InputField label={t.roi.avgOrderValue} value={aov0} onChange={setAov0} />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label={t.roi.daysOpen} value={daysOpen0} onChange={setDaysOpen0} />
                  <InputField label={t.roi.locations} value={locations0} onChange={setLocations0} />
                </div>
              </div>
              <div className="bg-roi-card rounded-2xl p-5 sm:p-8 text-primary-foreground flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-foreground/20 rounded-full px-3 py-1 mb-6">{t.roi.combinator}</span>
                  <p className="text-sm opacity-80 mb-2">{t.roi.revenueLostMonth}</p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">${monthlyLoss0.toLocaleString()}</p>
                  <div className="space-y-3">
                    <ResultBox label={t.roi.revenueLostYear} value={`$${yearlyLoss0.toLocaleString()}`} />
                    <ResultBox label={t.roi.locationsLoss} value={`$${totalLocationLoss0.toLocaleString()}`} />
                  </div>
                  <p className="text-xs opacity-60 mt-6">{t.roi.disclaimer}</p>
                </div>
                <a href="#" className="mt-8 block text-center bg-card text-foreground rounded-full py-3 font-semibold text-sm hover:bg-card/90 transition-colors">{t.header.bookADemo}</a>
              </div>
            </>
          )}

          {activeTab === 1 && (
            <>
              <div className="bg-card rounded-2xl p-5 sm:p-8 border border-border space-y-6 sm:space-y-8">
                <SliderField label={t.roi.callsPerDay} value={callsPerDay1} onChange={setCallsPerDay1} max={100} />
                <SliderField label={t.roi.callToOrder} value={callToOrder1} onChange={setCallToOrder1} max={100} />
                <SliderField label={t.roi.upsellValue} value={upsellValue} onChange={setUpsellValue} max={100} />
                <InputField label={t.roi.daysOpen} value={daysOpen1} onChange={setDaysOpen1} />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label={t.roi.daysOpen} value={daysOpen1} onChange={setDaysOpen1} />
                  <InputField label={t.roi.locations} value={locations1} onChange={setLocations1} />
                </div>
              </div>
              <div className="bg-[hsl(25,90%,55%)] rounded-2xl p-5 sm:p-8 text-primary-foreground flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-foreground/20 rounded-full px-3 py-1 mb-6">{t.roi.combinator}</span>
                  <p className="text-sm opacity-80 mb-2">{t.roi.revenueLostMonth}</p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">${monthlyLoss1.toLocaleString()}</p>
                  <div className="space-y-3">
                    <ResultBox label={t.roi.revenueLostYear} value={`$${yearlyLoss1.toLocaleString()}`} />
                    <ResultBox label={t.roi.locationsLoss} value={`$${totalLocationLoss1.toLocaleString()}`} />
                  </div>
                  <p className="text-xs opacity-60 mt-6">{t.roi.disclaimer}</p>
                </div>
                <a href="#" className="mt-8 block text-center bg-card text-foreground rounded-full py-3 font-semibold text-sm hover:bg-card/90 transition-colors">{t.header.bookADemo}</a>
              </div>
            </>
          )}

          {activeTab === 2 && (
            <>
              <div className="bg-card rounded-2xl p-5 sm:p-8 border border-border space-y-6 sm:space-y-8">
                <SliderField label={t.roi.callsPerDay} value={callsPerDay2} onChange={setCallsPerDay2} max={100} />
                <SliderField label={t.roi.avgCallLength} value={avgCallLength} onChange={setAvgCallLength} max={100} />
                <InputField label={t.roi.labourCost} value={labourCost} onChange={setLabourCost} />
                <div className="grid grid-cols-2 gap-4">
                  <InputField label={t.roi.daysOpen} value={daysOpen2} onChange={setDaysOpen2} />
                  <InputField label={t.roi.locations} value={locations2} onChange={setLocations2} />
                </div>
              </div>
              <div className="bg-[hsl(160,60%,55%)] rounded-2xl p-5 sm:p-8 text-primary-foreground flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary-foreground/20 rounded-full px-3 py-1 mb-6">{t.roi.combinator}</span>
                  <p className="text-sm opacity-80 mb-2">{t.roi.timeSaved}</p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">{timeSavedPerMonth.toLocaleString(undefined, { maximumFractionDigits: 1 })} h</p>
                  <div className="space-y-3">
                    <ResultBox label={t.roi.labourSaved} value={`$${labourCostSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
                    <div className="grid grid-cols-2 gap-3">
                      <ResultBox label={t.roi.locationsTimeSaved} value={`${totalTimeSaved.toLocaleString(undefined, { maximumFractionDigits: 1 })} h`} />
                      <ResultBox label={t.roi.locationsLabourSaved} value={`$${totalLabourSaved.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} />
                    </div>
                  </div>
                  <p className="text-xs opacity-60 mt-6">{t.roi.disclaimer}</p>
                </div>
                <a href="#" className="mt-8 block text-center bg-card text-foreground rounded-full py-3 font-semibold text-sm hover:bg-card/90 transition-colors">{t.header.bookADemo}</a>
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
    <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground" />
  </div>
);

const ResultBox = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-primary-foreground/15 rounded-xl px-5 py-4">
    <p className="text-xs opacity-70">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default ROICalculator;
