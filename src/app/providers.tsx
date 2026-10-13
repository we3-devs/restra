"use client";

import { InstrumentationProvider } from "@/components/instrumentation-provider";
import { I18nProvider } from "@/contexts/I18nContext";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <InstrumentationProvider>
      <I18nProvider>{children}</I18nProvider>
    </InstrumentationProvider>
  );
}
