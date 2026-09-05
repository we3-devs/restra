import Link from "next/link";
import { ArrowLeft, LayoutGrid } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-restra-bg px-6 text-restra-text">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-restra-yellow">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-center leading-relaxed text-restra-text-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Head back
        home, or explore what RESTRA can do for your restaurant.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-6 py-3 text-sm font-semibold text-restra-bg transition-all hover:-translate-y-0.5 hover:bg-restra-yellow/90"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        <Link
          href="/features"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-restra-text transition-colors hover:border-white/[0.2]"
        >
          <LayoutGrid className="h-4 w-4 text-restra-cyan" />
          Explore features
        </Link>
      </div>
    </main>
  );
}
