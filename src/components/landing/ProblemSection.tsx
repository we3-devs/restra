import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";

const problemKeys = ["problem.p1", "problem.p2", "problem.p3", "problem.p4"] as const;

export default function ProblemSection() {
  const { t } = useI18n();

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
              {t("problem.title")}
              <br />
              <span className="text-restra-text-muted">{t("problem.titleSub")}</span>
            </h2>
          </motion.div>

          {/* Right: problems list */}
          <div className="flex flex-col justify-center gap-6">
            {problemKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-restra-yellow/30 bg-restra-yellow/10">
                  <span className="text-xs font-bold text-restra-yellow">{i + 1}</span>
                </div>
                <p className="text-sm leading-relaxed text-restra-text-secondary lg:text-base">
                  {t(key)}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 border-t border-white/[0.06] pt-6"
            >
              <p className="text-sm text-restra-text-muted">
                {t("problem.conclusion")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
