"use client";

import { InstrumentationProvider } from "@/components/instrumentation-provider";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/contexts/I18nContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <InstrumentationProvider>
      <I18nProvider>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </I18nProvider>
    </InstrumentationProvider>
  );
}
