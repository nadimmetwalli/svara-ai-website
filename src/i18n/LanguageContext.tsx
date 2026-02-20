import { createContext, useContext, useState, ReactNode } from "react";
import { en } from "./en";
import { et } from "./et";

export type Language = "en" | "et";

const translations = { en, et } as const;

type Translations = typeof en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("svara-lang");
    return (saved === "et" ? "et" : "en") as Language;
  });

  const handleSetLang = (l: Language) => {
    setLang(l);
    localStorage.setItem("svara-lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
