import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Language, type TranslationKey, getTranslation } from "@/lib/translations";

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem("restra-lang");
    if (stored === "en" || stored === "ne") return stored;
  } catch {
    // SSR or unavailable
  }
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLangState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLangState(lang);
    try {
      localStorage.setItem("restra-lang", lang);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: TranslationKey) => getTranslation(language, key),
    [language],
  );

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
