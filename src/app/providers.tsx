"use client";

import { InstrumentationProvider } from "@/components/instrumentation-provider";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/contexts/I18nContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { VlyToolbar } from "../../vly-toolbar-readonly";
import React from "react";

/** Silent error boundary — if VlyToolbar crashes it renders nothing. */
class ToolbarErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: Error) {
    console.warn("[VlyToolbar] Caught error, toolbar disabled:", err.message);
  }
  render() {
    return this.state.hasError ? null : this.props.children;
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <InstrumentationProvider>
      <ToolbarErrorBoundary>
        <VlyToolbar />
      </ToolbarErrorBoundary>
      <I18nProvider>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </I18nProvider>
    </InstrumentationProvider>
  );
}
