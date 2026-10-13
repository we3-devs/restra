"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// The runtime-error dialog (stack traces + editor link) is a development tool;
// production visitors get a plain fallback instead.
const showDevOverlay = process.env.NODE_ENV !== "production";

// Loaded on demand so production bundles never include the overlay UI.
const ErrorDialog = dynamic(() => import("./instrumentation-error-dialog"), {
  ssr: false,
});

export type GenericError = {
  error: string;
  stack: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  componentStack?: string;
};

function normalizeError(value: unknown): GenericError {
  if (value instanceof Error) {
    return {
      error: value.message || "Unknown runtime error",
      stack: value.stack || "",
    };
  }

  if (typeof value === "string") {
    return { error: value || "Unknown runtime error", stack: "" };
  }

  if (value && typeof value === "object") {
    const candidate = value as {
      message?: unknown;
      error?: unknown;
      stack?: unknown;
    };
    const message =
      typeof candidate.message === "string"
        ? candidate.message
        : typeof candidate.error === "string"
          ? candidate.error
          : "";

    return {
      error: message || "Unknown runtime error",
      stack: typeof candidate.stack === "string" ? candidate.stack : "",
    };
  }

  return {
    error: value == null ? "Unknown runtime error" : String(value),
    stack: "",
  };
}

async function reportErrorToVly(errorData: {
  error: string;
  stackTrace?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
}) {
  const appId = process.env.NEXT_PUBLIC_VLY_APP_ID;
  const monitoringUrl = process.env.NEXT_PUBLIC_VLY_MONITORING_URL;

  if (!appId || !monitoringUrl) {
    return;
  }

  try {
    await fetch(monitoringUrl, {
      method: "POST",
      body: JSON.stringify({
        ...errorData,
        url: window.location.href,
        projectSemanticIdentifier: appId,
      }),
    });
  } catch (error) {
    console.error("Failed to report error to Vly:", error);
  }
}

type ErrorBoundaryState = {
  hasError: boolean;
  error: GenericError | null;
};

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: normalizeError(error),
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    const normalizedError = normalizeError(error);
    const componentStack = info.componentStack?.trim();

    reportErrorToVly({
      error: normalizedError.error,
      stackTrace: [normalizedError.stack, componentStack]
        .filter(Boolean)
        .join("\n\n"),
    });

    this.setState((state) => ({
      hasError: true,
      error: {
        ...(state.error ?? normalizedError),
        componentStack,
      },
    }));
  }

  render() {
    if (this.state.hasError && this.state.error) {
      if (!showDevOverlay) {
        return (
          <div role="alert" className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-lg font-semibold">Something went wrong.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-lg border px-4 py-2 text-sm font-semibold"
            >
              Reload page
            </button>
          </div>
        );
      }
      return (
        <ErrorDialog
          error={this.state.error}
          setError={(error) => {
            if (error === null) {
              this.setState({ hasError: false, error: null });
            }
          }}
        />
      );
    }

    return this.props.children;
  }
}

export function InstrumentationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [error, setError] = useState<GenericError | null>(null);

  useEffect(() => {
    const handleError = async (event: ErrorEvent) => {
      try {
        // The dev overlay replaces the browser's console report; production
        // keeps the native report so real errors are never silently hidden.
        if (showDevOverlay) event.preventDefault();
        const normalizedError = normalizeError(event.error ?? event.message);
        const capturedError = {
          ...normalizedError,
          filename: event.filename || undefined,
          lineno: event.lineno || undefined,
          colno: event.colno || undefined,
        };
        setError(capturedError);

        await reportErrorToVly({
          error: normalizedError.error,
          stackTrace: normalizedError.stack,
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        });
      } catch (error) {
        console.error("Error in handleError:", error);
      }
    };

    const handleRejection = async (event: PromiseRejectionEvent) => {
      try {
        const normalizedError = normalizeError(event.reason);
        console.error("[Freebuff runtime error]", normalizedError.error);
        setError(normalizedError);

        await reportErrorToVly({
          error: normalizedError.error,
          stackTrace: normalizedError.stack,
        });
      } catch (error) {
        console.error("Error in handleRejection:", error);
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);
  return (
    <>
      <ErrorBoundary>{children}</ErrorBoundary>
      {showDevOverlay && error && <ErrorDialog error={error} setError={setError} />}
    </>
  );
}
