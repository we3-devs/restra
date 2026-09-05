"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating in. */
  delay?: number;
  /** Entrance direction of the slide. */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Travel distance in px. */
  offset?: number;
  /** Animate only when scrolled into view (default true). */
  inView?: boolean;
};

/**
 * Subtle entrance animation used across the redesign: small fade/slide,
 * triggered once. Honors prefers-reduced-motion via framer-motion defaults.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  offset = 16,
  inView = true,
}: RevealProps) {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign =
    direction === "down" ? -1 : direction === "left" ? 1 : direction === "right" ? -1 : 1;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, [axis]: sign * offset }}
      {...(inView
        ? { whileInView: { opacity: 1, [axis]: 0 }, viewport: { once: true, margin: "-80px" } }
        : { animate: { opacity: 1, [axis]: 0 } })}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
