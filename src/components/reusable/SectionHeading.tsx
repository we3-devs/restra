import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  badge?: string;
  title: string;
  /** Optional highlighted (yellow) span inside the title. */
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  icon?: LucideIcon;
  className?: string;
};

/**
 * Editorial section header: uppercase eyebrow with a small rule, strong
 * display heading, and a muted subtitle. Used by home, features, and content
 * pages so every section shares the same typographic hierarchy.
 */
export default function SectionHeading({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "left",
  icon: Icon,
  className,
}: SectionHeadingProps) {
  const parts = titleHighlight ? title.split(titleHighlight) : [title];
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left";

  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto", className)}>
      <div className={cn("flex flex-col", alignClass)}>
        {badge ? (
          <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-restra-text-muted">
            {Icon ? (
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-restra-yellow/10 text-restra-yellow">
                <Icon className="h-3.5 w-3.5" />
              </span>
            ) : (
              <span aria-hidden="true" className="h-px w-6 bg-restra-yellow/60" />
            )}
            {badge}
          </p>
        ) : null}
        <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] tracking-tight text-restra-text sm:text-4xl lg:text-[2.75rem]">
          {parts[0]}
          {titleHighlight ? (
            <span className="text-restra-yellow">{titleHighlight}</span>
          ) : null}
          {parts[1] ?? ""}
        </h2>
        {subtitle ? (
          <p className="mt-4 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
