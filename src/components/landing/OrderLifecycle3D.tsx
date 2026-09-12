"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface LifecycleStep {
  key: string;
  icon: LucideIcon;
  label: string;
  desc: string;
  color: string;
  textColor: string;
  dotColor: string;
  image?: string;
}

const ROTATE_MS = 9500;

export default function OrderLifecycle3D({
  steps,
  onActiveChange,
}: {
  steps: LifecycleStep[];
  onActiveChange?: (index: number) => void;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [steps.length]);

  useEffect(() => {
    onActiveChange?.(active);
  }, [active, onActiveChange]);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
      {/* Vertical step list */}
      <div className="flex flex-col gap-2 lg:w-1/2">
        {steps.map((step, i) => {
          const isActive = i === active;
          return (
            <motion.button
              key={step.key}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className={`flex items-center gap-3 rounded-lg border p-2.5 text-left transition-all duration-300 ${
                isActive
                  ? `${step.color} shadow-md scale-[1.02]`
                  : "border-white/[0.06] bg-restra-card/50 hover:border-white/[0.12]"
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-restra-bg/60 transition-colors ${
                  isActive ? step.color : "border-white/[0.06]"
                }`}
              >
                <step.icon className={`h-3.5 w-3.5 ${isActive ? step.textColor : "text-restra-text-muted"}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className={`text-xs font-semibold ${isActive ? step.textColor : "text-restra-text"}`}>
                  {step.label}
                </p>
                <p className="truncate text-[11px] text-restra-text-muted">{step.desc}</p>
              </div>
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full transition-opacity ${step.dotColor} ${
                  isActive ? "opacity-100 animate-pulse" : "opacity-20"
                }`}
              />
            </motion.button>
          );
        })}
      </div>

      {/* Stackable photo switcher */}
      <div className="relative mx-auto h-72 w-full max-w-sm sm:h-80 lg:w-1/2">
        {steps.map((step, i) => {
          const offset = (i - active + steps.length) % steps.length;
          if (offset > 2) return null;
          const isTop = offset === 0;
          return (
            <motion.div
              key={step.key}
              className={`absolute inset-x-4 top-0 flex h-full flex-col items-center overflow-hidden rounded-2xl border shadow-xl backdrop-blur-sm ${
                step.image ? "border-white/25 bg-transparent" : step.color
              } ${
                step.image ? "justify-end" : "justify-center p-6"
              }`}
              animate={{
                scale: 1 - offset * 0.06,
                y: offset * 14,
                opacity: offset === 0 ? 1 : offset === 1 ? 0.6 : 0.3,
                zIndex: 10 - offset,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ zIndex: 10 - offset }}
            >
              {step.image && (
                <Image
                  src={step.image}
                  alt={step.label}
                  fill
                  sizes="384px"
                  className="rounded-2xl object-cover"
                />
              )}
              <AnimatePresence>
                {isTop && (
                  <motion.div
                    key={`content-${step.key}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className={`relative flex flex-col items-center text-center ${
                      step.image ? "mt-auto w-full rounded-b-2xl bg-linear-to-t from-restra-bg via-restra-bg/25 to-transparent px-4 pb-4 pt-8" : ""
                    }`}
                  >
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl border bg-restra-bg/60 ${step.color}`}>
                      <step.icon className={`h-6 w-6 ${step.textColor}`} />
                    </div>
                    <p className={`text-base font-semibold ${step.textColor}`}>{step.label}</p>
                    <p className="mt-2 text-xs leading-relaxed text-restra-text/70">{step.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
