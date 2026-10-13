"use client";

import { Dialog } from "@radix-ui/react-dialog";
import { AlertTriangle, ChevronDown, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { GenericError } from "./instrumentation-provider";

/** Development-only runtime error overlay, loaded lazily by InstrumentationProvider. */
export default function ErrorDialog({
  error,
  setError,
}: {
  error: GenericError;
  setError: (error: GenericError | null) => void;
}) {
  const technicalDetails = [
    error.filename &&
      `Source: ${error.filename}${error.lineno ? `:${error.lineno}` : ""}${error.colno ? `:${error.colno}` : ""}`,
    error.stack && `Stack trace:\n${error.stack}`,
    error.componentStack && `Component stack:\n${error.componentStack}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  return (
    <Dialog
      defaultOpen={true}
      onOpenChange={(open) => {
        if (!open) setError(null);
      }}
    >
      <DialogContent className="max-h-[calc(100vh-2rem)] overflow-y-auto border-zinc-700 bg-zinc-950 text-zinc-100 sm:max-w-lg">
        <DialogHeader className="pr-8">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
              <AlertTriangle className="h-4 w-4 text-amber-300" />
            </div>
            <div>
              <DialogTitle className="text-base">Runtime error</DialogTitle>
              <DialogDescription className="mt-1 text-zinc-400">
                The preview stopped while rendering. Open the editor to fix the
                issue, or close this message to keep browsing.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="rounded-md border border-amber-400/20 bg-amber-400/5 px-3 py-2.5">
          <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200/70">
            Error message
          </div>
          <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-zinc-200">
            {error.error}
          </p>
        </div>

        {technicalDetails && (
          <Collapsible>
            <CollapsibleTrigger asChild>
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                <ChevronDown className="h-3.5 w-3.5" />
                Show technical details
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <pre className="mt-2 max-h-60 overflow-auto whitespace-pre-wrap break-words rounded-md border border-zinc-800 bg-black/30 p-3 font-mono text-[11px] leading-relaxed text-zinc-400">
                {technicalDetails}
              </pre>
            </CollapsibleContent>
          </Collapsible>
        )}

        <DialogFooter className="gap-3 sm:items-center">
          <span className="text-xs text-zinc-500">
            Your error details are also available in chat.
          </span>
          <a
            href={`https://freebuff.com/project/${process.env.NEXT_PUBLIC_VLY_APP_ID}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-zinc-100 text-zinc-900 hover:bg-white">
              <ExternalLink className="h-4 w-4" /> Open editor
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
