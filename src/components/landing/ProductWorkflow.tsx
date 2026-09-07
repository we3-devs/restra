import { motion } from "framer-motion";
import {
  BarChart3,
  ChefHat,
  ClipboardList,
  PackageCheck,
  Settings2,
} from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";
import Reveal from "@/components/reusable/Reveal";

const workflowSteps = [
  {
    number: "01",
    label: "STEP 1",
    title: "Set Up Your Restaurant",
    description:
      "Add your restaurant, tables, menu, staff, and essential settings in minutes. Everything is organized in one simple workspace.",
    icon: Settings2,
  },
  {
    number: "02",
    label: "STEP 2",
    title: "Capture Every Order",
    description:
      "Take dine-in, takeaway, delivery, and QR orders in one connected flow, with every detail visible to your team.",
    icon: ClipboardList,
  },
  {
    number: "03",
    label: "STEP 3",
    title: "Run Your Kitchen",
    description:
      "Send the right order to the kitchen, track preparation status, and keep service moving without missed tickets.",
    icon: ChefHat,
  },
  {
    number: "04",
    label: "STEP 4",
    title: "Stay In Control",
    description:
      "Keep inventory, staff activity, billing, and daily operations organized from one powerful restaurant workspace.",
    icon: PackageCheck,
  },
  {
    number: "05",
    label: "STEP 5",
    title: "Track & Grow",
    description:
      "Monitor sales, performance, and business insights so you can make smarter decisions and grow your restaurant.",
    icon: BarChart3,
  },
];

export default function ProductWorkflow() {
  const { t } = useI18n();

  return (
    <section id="workflow" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_18%_50%,rgba(34,211,238,0.04),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            {t("workflow.badge")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            {t("workflow.title").replace(t("workflow.titleHighlight"), "").trimEnd()}{" "}
            <span className="text-restra-yellow">{t("workflow.titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
            {t("workflow.subtitle")}
          </p>
        </Reveal>

        <div className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 1700"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-[8%] top-0 hidden h-full w-[84%] lg:block"
          >
            <path
              id="home-workflow-connector"
              d="M720 105 C720 260 280 250 280 430 S720 550 720 770 S280 900 280 1110 S720 1260 720 1545"
              fill="none"
              stroke="rgba(66, 211, 205, 0.38)"
              strokeDasharray="7 14"
              strokeLinecap="round"
              strokeWidth="2"
            />
            {Array.from({ length: 20 }, (_, particle) => (
              <circle key={particle} r="4" fill="#D4A017" opacity="0.95">
                <animateMotion
                  dur="7s"
                  begin={`${particle * -0.35}s`}
                  repeatCount="indefinite"
                  path="M720 105 C720 260 280 250 280 430 S720 550 720 770 S280 900 280 1110 S720 1260 720 1545"
                />
              </circle>
            ))}
          </svg>
          <svg
            aria-hidden="true"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-10 left-5 top-10 w-1 lg:hidden"
          >
            <path d="M2 0 L2 1000" fill="none" stroke="rgba(66, 211, 205, 0.35)" strokeDasharray="5 10" strokeWidth="1.5" />
            {Array.from({ length: 20 }, (_, particle) => (
              <circle key={particle} cx="2" cy="0" r="2.5" fill="#D4A017">
                <animateMotion
                  dur="4.5s"
                  begin={`${particle * -0.225}s`}
                  repeatCount="indefinite"
                  path="M0 0 L0 1000"
                />
              </circle>
            ))}
          </svg>

          <ol className="relative space-y-12 lg:space-y-16">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="w-full max-w-xl"
                  >
                    <article className="relative ml-10 rounded-2xl border border-white/[0.08] bg-restra-card p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-restra-cyan/35 sm:p-8 lg:ml-0">
                      <span className="absolute -left-[2.05rem] top-8 flex h-4 w-4 items-center justify-center rounded-full border-2 border-restra-bg bg-restra-cyan shadow-[0_0_0_5px_rgba(66,211,205,0.1)] lg:hidden" />
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-restra-cyan/20 bg-restra-cyan/[0.07] text-restra-cyan">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-restra-cyan">{step.label}</p>
                          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-restra-text sm:text-3xl">{step.title}</h3>
                        </div>
                      </div>
                      <p className="mt-5 max-w-lg text-base leading-7 text-restra-text-secondary">{step.description}</p>
                      <span aria-hidden="true" className="absolute right-6 top-6 font-display text-5xl font-semibold text-white/[0.04]">{step.number}</span>
                    </article>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
