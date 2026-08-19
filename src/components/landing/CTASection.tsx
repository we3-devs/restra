import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-restra-card px-8 py-16 text-center sm:px-16 lg:py-20"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,212,59,0.06),transparent)]" />
          </div>

          <div className="relative">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
              Your restaurant has enough things to manage.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base text-restra-text-secondary lg:text-lg">
              Let Restra handle the system behind it.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/auth")}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-restra-yellow px-7 py-3 text-sm font-semibold text-restra-bg transition-all hover:bg-restra-yellow/90 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-restra-yellow/10"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="mailto:hello@restra.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.02] px-7 py-3 text-sm font-medium text-restra-text transition-all hover:bg-white/[0.05]"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
