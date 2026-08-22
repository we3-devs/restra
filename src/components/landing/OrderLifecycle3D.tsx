"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export interface LifecycleStep {
  key: string;
  icon: LucideIcon;
  label: string;
  desc: string;
  color: string;
  textColor: string;
  dotColor: string;
}

function TiltCard({ step, index }: { step: LifecycleStep; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 22 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 18);
    rotateX.set(-py * 18);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -25 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="shrink-0 perspective-[1000px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className={`relative w-44 rounded-xl border bg-restra-card/80 p-4 shadow-lg backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl sm:w-52 ${step.color}`}
      >
        <div
          style={{ transform: "translateZ(36px)" }}
          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg border bg-restra-bg/60 ${step.color}`}
        >
          <step.icon className={`h-4 w-4 ${step.textColor}`} />
        </div>
        <p style={{ transform: "translateZ(24px)" }} className={`text-sm font-semibold ${step.textColor}`}>
          {step.label}
        </p>
        <p style={{ transform: "translateZ(14px)" }} className="mt-1.5 text-xs leading-relaxed text-restra-text-muted">
          {step.desc}
        </p>
        <div
          style={{ transform: "translateZ(8px)" }}
          className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full ${step.dotColor} animate-pulse`}
        />
      </motion.div>
    </motion.div>
  );
}

export default function OrderLifecycle3D({ steps }: { steps: LifecycleStep[] }) {
  return (
    <div className="perspective-[1500px]">
      <div className="flex items-center gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none sm:gap-4 lg:flex-wrap lg:justify-center lg:overflow-visible">
        {steps.map((step, i) => (
          <div key={step.key} className="flex shrink-0 items-center gap-3 snap-center sm:gap-4">
            <TiltCard step={step} index={i} />
            {i < steps.length - 1 && (
              <ArrowRight className="hidden h-4 w-4 shrink-0 text-restra-text-muted/40 sm:block" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
