"use client";

import { InstrumentationProvider } from "@/components/instrumentation-provider";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/contexts/I18nContext";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <InstrumentationProvider>
      <I18nProvider>
        {children}
        <Toaster />
      </I18nProvider>
    </InstrumentationProvider>
  );
}
