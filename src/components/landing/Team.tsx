import Image from "next/image";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const members: {
  nameKey: TranslationKey;
  roleKey: TranslationKey;
  quoteKey: TranslationKey;
  photo: string;
}[] = [
  { nameKey: "team.m1.name", roleKey: "team.m1.role", quoteKey: "team.m1.quote", photo: "/team/sujan.jpg" },
  { nameKey: "team.m2.name", roleKey: "team.m2.role", quoteKey: "team.m2.quote", photo: "/team/prashanta.jpeg" },
  { nameKey: "team.m3.name", roleKey: "team.m3.role", quoteKey: "team.m3.quote", photo: "/team/ujwal.jpg" },
];

const socialIcons = [Facebook, Twitter, Linkedin];

export default function Team() {
  const { t } = useI18n();

  return (
    <section id="team" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-restra-surface/50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-restra-cyan">
            {t("team.badge")}
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-restra-text sm:text-4xl lg:text-5xl">
            {t("team.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-restra-text-secondary lg:text-lg">
            {t("team.subtitle")}
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {members.map((member, i) => (
            <motion.div
              key={member.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="group mx-auto w-full max-w-60 overflow-hidden rounded-2xl border border-white/4 bg-restra-card/50 transition-all duration-300 hover:border-white/10 hover:bg-restra-card"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={t(member.nameKey)}
                  fill
                  sizes="240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-restra-bg via-restra-bg/70 to-transparent p-3 pt-10">
                  <h3 className="font-display text-sm font-semibold text-restra-text">
                    {t(member.nameKey)}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-restra-yellow">
                    {t(member.roleKey)}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <p className="text-xs leading-relaxed text-restra-text-secondary">
                  {t(member.quoteKey)}
                </p>

                <div className="mt-3 flex items-center gap-2 border-t border-white/4 pt-3">
                  {socialIcons.map((Icon, idx) => (
                    <span
                      key={idx}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-restra-surface text-restra-text-secondary transition-colors duration-200 hover:text-restra-cyan"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
