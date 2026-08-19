"use client";

import { ConvexProviders } from "@/components/ConvexProviders";
import { InstrumentationProvider } from "@/instrumentation";
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
      <ConvexProviders>{children}</ConvexProviders>
    </InstrumentationProvider>
  );
}
