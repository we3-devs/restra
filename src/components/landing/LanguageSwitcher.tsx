import { useI18n } from "@/contexts/I18nContext";
import { Globe } from "lucide-react";

const langs = [
  { code: "en" as const, label: "EN", full: "English" },
  { code: "ne" as const, label: "ने", full: "नेपाली" },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-white/[0.08] bg-white/[0.03] p-0.5">
      {langs.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          title={lang.full}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-all ${
            language === lang.code
              ? "bg-restra-yellow/15 text-restra-yellow"
              : "text-restra-text-muted hover:text-restra-text"
          }`}
        >
          {lang.code === "en" ? <Globe className="h-3 w-3" /> : null}
          {lang.label}
        </button>
      ))}
    </div>
  );
}
