import { motion } from "framer-motion";

function MockScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full w-full flex-col bg-restra-surface">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-restra-bg/80 px-2 py-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-restra-yellow" />
        <div className="h-1.5 w-10 rounded-full bg-white/10" />
        <div className="ml-auto h-1.5 w-4 rounded-full bg-white/10" />
      </div>
      <div className="flex flex-1 gap-1.5 p-1.5">
        {!compact && (
          <div className="flex w-1/4 flex-col gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-2 rounded bg-white/[0.06]" />
            ))}
          </div>
        )}
        <div className="grid flex-1 grid-cols-2 gap-1.5">
          {[...Array(compact ? 3 : 4)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 rounded-md border border-white/[0.06] bg-restra-card p-1.5"
            >
              <div className="h-6 w-full rounded bg-restra-yellow/15" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
              <div className="h-1.5 w-1/2 rounded-full bg-restra-cyan/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MultiDeviceShowcase({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative mx-auto flex w-full items-end justify-center ${
        compact ? "h-48 max-w-xs" : "h-[22rem] max-w-lg sm:h-[26rem]"
      }`}
    >
      {/* Desktop monitor */}
      <div className="absolute left-1/2 top-0 w-[78%] -translate-x-1/2">
        <div className="overflow-hidden rounded-lg border-[3px] border-white/[0.1] bg-restra-bg shadow-2xl shadow-black/40">
          <div className="aspect-[16/10]">
            <MockScreen />
          </div>
        </div>
        <div className="mx-auto h-4 w-16 rounded-b-md bg-white/[0.08]" />
        <div className="mx-auto h-1.5 w-28 rounded-full bg-white/[0.06]" />
      </div>

      {/* Laptop */}
      <div className="absolute bottom-6 left-0 w-[42%]">
        <div className="overflow-hidden rounded-t-lg border-[3px] border-b-0 border-white/[0.1] bg-restra-bg shadow-2xl shadow-black/40">
          <div className="aspect-[16/10]">
            <MockScreen compact />
          </div>
        </div>
        <div className="h-2 rounded-b-lg border border-white/[0.1] bg-white/[0.06]" />
      </div>

      {/* Tablet */}
      <div className="absolute bottom-0 right-0 w-[26%]">
        <div className="overflow-hidden rounded-xl border-[3px] border-white/[0.1] bg-restra-bg p-0.5 shadow-2xl shadow-black/40">
          <div className="aspect-[3/4] overflow-hidden rounded-md">
            <MockScreen compact />
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-0 left-[38%] w-[16%]">
        <div className="overflow-hidden rounded-2xl border-[3px] border-white/[0.12] bg-restra-bg p-0.5 shadow-2xl shadow-black/50">
          <div className="aspect-[9/19] overflow-hidden rounded-lg">
            <MockScreen compact />
          </div>
        </div>
      </div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-x-10 top-0 h-48 rounded-full bg-restra-cyan/[0.04] blur-3xl" />
    </motion.div>
  );
}
