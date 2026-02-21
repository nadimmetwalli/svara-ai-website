import { useState, useRef } from "react";
import { Phone, Play, Pause, ArrowUpRight, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import svaraLogo from "@/assets/svara-logo.png";
import demoRecording from "@/assets/demo-call-recording.mp3";
import { useLanguage } from "@/i18n/LanguageContext";

const TryDemoSection = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+372");
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { t } = useLanguage();

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) { audio.pause(); } else { audio.play(); }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleCallMe = async () => {
    if (!name.trim()) {
      toast({ title: "Please enter your name", variant: "destructive" });
      return;
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 7) {
      toast({ title: "Please enter a valid phone number", variant: "destructive" });
      return;
    }
    const fullPhone = `${countryCode}${digits}`;
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("call-me", { body: { phone: fullPhone } });
      if (error) throw error;
      if (data?.success) {
        toast({ title: "Call initiated!", description: "You'll receive a call shortly." });
      } else {
        throw new Error(data?.error || "Failed to initiate call");
      }
    } catch (err: any) {
      toast({ title: "Something went wrong", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: Try SVARA AI */}
          <div className="bg-card rounded-3xl border border-border p-4 sm:p-8 md:p-12 flex flex-col items-center">
            <span className="self-start inline-flex items-center gap-1.5 text-xs font-medium border border-primary/40 text-primary rounded-full px-3 py-1 mb-8">
              {t.tryDemo.trySvaraAi}
            </span>

            <div className="relative w-full max-w-[250px] sm:max-w-[290px] mx-auto">
              <div className="relative rounded-[3rem] border-[3px] border-[#1a1a1a] bg-[#1a1a1a] p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_20px_60px_-10px_rgba(0,0,0,0.5)]">
                <div className="absolute -left-[4px] top-[90px] w-[3px] h-[30px] bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute -left-[4px] top-[135px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute -left-[4px] top-[195px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm" />
                <div className="absolute -right-[4px] top-[140px] w-[3px] h-[65px] bg-[#2a2a2a] rounded-r-sm" />

                <div className="rounded-[2.2rem] bg-background overflow-hidden">
                  <div className="flex justify-center pt-3 pb-1 bg-background">
                    <div className="w-[90px] h-[25px] bg-[#1a1a1a] rounded-full" />
                  </div>

                  <div className="flex items-center justify-between px-7 py-1 text-[11px] font-medium text-foreground">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                      <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor"><path d="M1 7.5h1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5zm3.5-2H6a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5zM8 3h1.5a.5.5 0 0 1 .5.5v6.5a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5V3.5A.5.5 0 0 1 8 3zm3.5-2H13a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5V1.5a.5.5 0 0 1 .5-.5z"/></svg>
                      <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor"><path d="M7.5.8a10 10 0 0 1 6.4 2.3.5.5 0 0 1 0 .7l-.9.9a.5.5 0 0 1-.7 0A8 8 0 0 0 7.5 2.8a8 8 0 0 0-4.8 1.9.5.5 0 0 1-.7 0l-.9-.9a.5.5 0 0 1 0-.7A10 10 0 0 1 7.5.8zm0 3.5a6.5 6.5 0 0 1 4 1.4.5.5 0 0 1 0 .7l-.9.9a.5.5 0 0 1-.7 0 4.5 4.5 0 0 0-4.8 0 .5.5 0 0 1-.7 0l-.9-.9a.5.5 0 0 1 0-.7 6.5 6.5 0 0 1 4-1.4zm0 3.5a3 3 0 0 1 1.7.5.5.5 0 0 1 0 .8l-1.4 1.3a.5.5 0 0 1-.6 0L5.8 9.1a.5.5 0 0 1 0-.8 3 3 0 0 1 1.7-.5z"/></svg>
                      <svg width="25" height="12" viewBox="0 0 25 12" fill="currentColor"><rect x="0" y="1" width="21" height="10" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="1.5" y="2.5" width="16" height="7" rx="1" ry="1"/><rect x="22" y="4" width="2" height="4" rx="0.5" ry="0.5"/></svg>
                    </div>
                  </div>

                  <div className="px-6 pb-10 pt-6 flex flex-col items-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <img src={svaraLogo} alt="Svara logo" className="w-10 h-10 object-contain" />
                    </div>

                    <p className="text-sm font-semibold text-foreground text-center">{t.tryDemo.dontTrust}</p>
                    <p className="text-sm font-semibold text-primary text-center mb-3">{t.tryDemo.tryItYourself}</p>
                    <p className="text-xs text-muted-foreground text-center mb-7">{t.tryDemo.enterDetails}</p>

                    <input type="text" placeholder={t.tryDemo.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground mb-4" />
                    <div className="w-full flex items-center gap-0 rounded-xl border border-border bg-secondary mb-5 overflow-hidden">
                      <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className="bg-secondary text-sm text-foreground pl-3 pr-1 py-3 border-r border-border outline-none cursor-pointer">
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+372">🇪🇪 +372</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+33">🇫🇷 +33</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+91">🇮🇳 +91</option>
                      </select>
                      <input type="tel" placeholder={t.tryDemo.phonePlaceholder} value={phone} onChange={(e) => setPhone(e.target.value)} className="flex-1 bg-transparent px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none" />
                    </div>
                    <button onClick={handleCallMe} disabled={loading} className="w-full bg-roi-card text-primary-foreground rounded-full py-3 text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60">
                      {loading ? (
                        <span className="inline-flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> {t.tryDemo.calling}</span>
                      ) : t.tryDemo.callMe}
                    </button>
                  </div>

                  <div className="flex justify-center pb-3">
                    <div className="w-[120px] h-[4px] bg-foreground/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Live Demo */}
          <div className="bg-card rounded-3xl border border-border p-4 sm:p-8 md:p-12 flex flex-col">
            <span className="self-start inline-flex items-center gap-1.5 text-xs font-medium border border-primary/40 text-primary rounded-full px-3 py-1 mb-6">
              {t.tryDemo.liveDemo}
            </span>

            <p className="text-lg text-muted-foreground mb-8 max-w-md">{t.tryDemo.liveDemoDesc}</p>

            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-4 sm:p-6 md:p-8 flex-1 flex flex-col justify-between">
              <h3 className="text-xl md:text-2xl font-bold text-primary-foreground mb-6">{t.tryDemo.hearSvara}</h3>

              <div className="bg-primary-foreground/10 rounded-xl p-3 sm:p-5">
                <p className="text-sm text-primary-foreground/80 mb-4">{t.tryDemo.sampleCall}</p>
                <audio ref={audioRef} src={demoRecording} onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)} onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)} onEnded={() => { setIsPlaying(false); setCurrentTime(0); }} />

                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <div className="flex items-end gap-[2px] sm:gap-[3px] flex-1 h-10 sm:h-12 justify-center overflow-hidden">
                    {[4, 8, 12, 6, 16, 10, 14, 8, 18, 6, 12, 16, 8, 14, 10, 6, 12, 8, 16, 10, 14, 6, 8, 12].map((h, i) => (
                      <div key={i} className="w-[2px] sm:w-1 rounded-full transition-colors" style={{ height: `${h * 2}px`, backgroundColor: duration > 0 && (i / 24) <= (currentTime / duration) ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)" }} />
                    ))}
                  </div>
                  <button onClick={togglePlayback} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0 hover:bg-primary-foreground/30 transition-colors">
                    {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground fill-primary-foreground" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground fill-primary-foreground" />}
                  </button>
                  <div className="flex items-end gap-[2px] sm:gap-[3px] flex-1 h-10 sm:h-12 justify-center overflow-hidden">
                    {[10, 14, 6, 12, 8, 16, 10, 4, 14, 8, 12, 6, 16, 10, 8, 14, 6, 12, 8, 4, 10, 16, 8, 12].map((h, i) => (
                      <div key={i} className="w-[2px] sm:w-1 rounded-full transition-colors" style={{ height: `${h * 2}px`, backgroundColor: duration > 0 && ((i + 24) / 48) <= (currentTime / duration) ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)" }} />
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-xs text-primary-foreground/60">
                  <span>{formatTime(currentTime)}</span>
                  <span>{duration > 0 ? formatTime(duration) : "0:00"}</span>
                </div>
              </div>

              <Link to="/book-a-demo" className="mt-6 block text-center bg-primary-foreground text-primary rounded-full py-3 font-semibold text-sm hover:bg-primary-foreground/90 transition-opacity">
                {t.header.bookADemo}
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/book-a-demo" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground rounded-full px-8 py-3 font-semibold text-sm hover:bg-primary/90 transition-colors">
            {t.header.bookADemo} <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TryDemoSection;
