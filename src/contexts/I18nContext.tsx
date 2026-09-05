import { createContext, useContext, useCallback, useMemo, type ReactNode } from "react";
import { type TranslationKey, getTranslation } from "@/lib/translations";

/**
 * English-only i18n context. The language switcher was removed, but the t()
 * API is kept so section copy still resolves through the translation table.
 */
interface I18nContextValue {
  language: "en";
  setLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const t = useCallback((key: TranslationKey) => getTranslation("en", key), []);
  const setLanguage = useCallback(() => {}, []);

  const value = useMemo(() => ({ language: "en" as const, setLanguage, t }), [setLanguage, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
