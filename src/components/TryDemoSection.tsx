import { useState, useRef } from "react";
import { Play, Pause, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import demoRecording from "@/assets/demo-call-recording.mp3";
import { useLanguage } from "@/i18n/LanguageContext";

const TryDemoSection = () => {
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

  return (
    <section id="demo" className="py-12 sm:py-20 px-4">
      <div className="container mx-auto max-w-2xl">
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
