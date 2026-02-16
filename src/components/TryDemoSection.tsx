import { Phone, Play, ArrowUpRight } from "lucide-react";

const TryDemoSection = () => {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Try Certus AI - Phone mockup */}
          <div className="bg-primary-foreground/10 rounded-3xl border border-primary-foreground/20 p-8 md:p-12 flex flex-col items-center">
            <span className="self-start inline-flex items-center gap-1.5 text-xs font-medium border border-primary-foreground/40 text-primary-foreground rounded-full px-3 py-1 mb-8">
              📋 Try Certus AI
            </span>

            {/* Phone mockup */}
            <div className="relative w-[280px] mx-auto">
              <div className="rounded-[2.5rem] border-[6px] border-foreground bg-background overflow-hidden shadow-2xl">
                {/* Status bar */}
                <div className="flex items-center justify-between px-6 py-2 text-[10px] text-foreground">
                  <span>9:41</span>
                  <div className="w-20 h-5 bg-foreground rounded-full" />
                  <div className="flex items-center gap-1">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                <div className="px-6 pb-8 pt-4 flex flex-col items-center">
                  {/* Pizza mascot placeholder */}
                  <div className="w-20 h-20 bg-certus-orange/20 rounded-full flex items-center justify-center mb-6 text-3xl">
                    🍕
                  </div>

                  <p className="text-sm font-semibold text-foreground text-center">Don't Trust The Tech,</p>
                  <p className="text-sm font-semibold text-primary text-center mb-2">Try It Yourself</p>
                  <p className="text-xs text-muted-foreground text-center mb-6">
                    Enter your details and our AI will call you within minutes.
                  </p>

                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground mb-3"
                  />
                  <div className="w-full flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2.5 mb-4">
                    <span className="text-sm">🇺🇸</span>
                    <span className="text-xs text-muted-foreground">▾</span>
                    <span className="text-sm text-muted-foreground">+1 Phone Number</span>
                  </div>
                  <button className="w-full bg-roi-card text-primary-foreground rounded-full py-3 text-sm font-semibold hover:opacity-90 transition-opacity">
                    Call Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Demo */}
          <div className="bg-primary-foreground/10 rounded-3xl border border-primary-foreground/20 p-8 md:p-12 flex flex-col">
            <span className="self-start inline-flex items-center gap-1.5 text-xs font-medium border border-primary-foreground/40 text-primary-foreground rounded-full px-3 py-1 mb-6">
              🔊 Live Demo
            </span>

            <p className="text-lg text-primary-foreground/70 mb-8 max-w-md">
              Experience how naturally our AI takes orders, answers questions, and upsells — exactly like a trained staff member would.
            </p>

            {/* Audio player card */}
            <div className="bg-certus-orange rounded-2xl p-6 md:p-8 flex-1 flex flex-col justify-between">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-6">
                Hear Certus in Action
              </h3>

              <div className="bg-certus-orange/80 rounded-xl p-5">
                <p className="text-sm text-primary-foreground/80 mb-4">Sample call recording</p>

                {/* Waveform visualization */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-end gap-[3px] flex-1 h-12 justify-center">
                    {[4, 8, 12, 6, 16, 10, 14, 8, 18, 6, 12, 16, 8, 14, 10, 6, 12, 8, 16, 10, 14, 6, 8, 12].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-primary-foreground/80"
                        style={{ height: `${h * 2.5}px` }}
                      />
                    ))}
                  </div>
                  <button className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 hover:bg-primary-foreground/30 transition-colors">
                    <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground" />
                  </button>
                  <div className="flex items-end gap-[3px] flex-1 h-12 justify-center">
                    {[10, 14, 6, 12, 8, 16, 10, 4, 14, 8, 12, 6, 16, 10, 8, 14, 6, 12, 8, 4, 10, 16, 8, 12].map((h, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-primary-foreground/80"
                        style={{ height: `${h * 2.5}px` }}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-xs text-primary-foreground/60">
                  <span>0:00</span>
                  <span>1:40</span>
                </div>
              </div>

              <a
                href="#"
                className="mt-6 block text-center bg-roi-card text-primary-foreground rounded-full py-3 font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Book a demo
              </a>

              <p className="text-xs text-primary-foreground/60 text-center mt-3">
                This demo is trained on a sample pizza menu.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Book a demo <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TryDemoSection;
