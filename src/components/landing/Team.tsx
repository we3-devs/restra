import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/contexts/I18nContext";
import type { TranslationKey } from "@/lib/translations";
import { Facebook, Github, Globe, Linkedin } from "lucide-react";

const members: {
  nameKey: TranslationKey;
  roleKey: TranslationKey;
  quoteKey: TranslationKey;
  photo: string;
  socials: { icon: typeof Facebook; url: string; label: string }[];
}[] = [
  {
    nameKey: "team.m1.name",
    roleKey: "team.m1.role",
    quoteKey: "team.m1.quote",
    photo: "/team/sujan.jpg",
    socials: [
      { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/profile.php?id=61556730426323" },
      { icon: Github, label: "GitHub", url: "https://github.com/sujan-977" },
      { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/sujan-katwal-247a103a5/" },
      { icon: Globe, label: "Portfolio", url: "https://sujan-katuwal.com.np/" },
    ],
  },
  {
    nameKey: "team.m2.name",
    roleKey: "team.m2.role",
    quoteKey: "team.m2.quote",
    photo: "/team/prashanta.jpeg",
    socials: [
      { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/prashanta.93/" },
      { icon: Github, label: "GitHub", url: "https://github.com/prashantaguragain" },
      { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/prashanta-guragain-0a24bb335/" },
      { icon: Globe, label: "Portfolio", url: "https://www.prashantaguragain.com.np/" },
    ],
  },
  {
    nameKey: "team.m3.name",
    roleKey: "team.m3.role",
    quoteKey: "team.m3.quote",
    photo: "/team/ujwal.jpg",
    socials: [
      { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/ujwalkhatiwadaa" },
      { icon: Github, label: "GitHub", url: "https://github.com/ujwalkhatiwadaa" },
      { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ujwalkhatiwadaa/" },
      { icon: Globe, label: "Portfolio", url: "https://ujwalkhatiwada.com.np/" },
    ],
  },
];

const HOVER_PAUSE_MS = 6000;
const AUTO_INTERVAL_MS = 3200;

export default function Team() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const locked = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused) {
        setActive((prev) => (prev + 1) % members.length);
      }
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      if (lockTimer.current) clearTimeout(lockTimer.current);
    };
  }, []);

  const focusMember = (i: number) => {
    if (locked.current || i === active) return;

    setActive(i);
    setPaused(true);

    locked.current = true;
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      locked.current = false;
    }, 500);

    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), HOVER_PAUSE_MS);
  };

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

        {/* Mobile / tablet: static grid */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:hidden">
          {members.map((member, i) => (
            <motion.div
              key={member.nameKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="group mx-auto w-full max-w-52 overflow-hidden rounded-2xl border border-white/4 bg-restra-card/50 transition-all duration-300 hover:border-white/10 hover:bg-restra-card"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={t(member.nameKey)}
                  fill
                  sizes="208px"
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
                  {member.socials.map(({ icon: Icon, url, label }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-7 w-7 items-center justify-center rounded-full bg-restra-surface text-restra-text-secondary transition-colors duration-200 hover:text-restra-cyan"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: horizontal stack — center card highlighted, side cards pushed back; hover to switch */}
        <div className="relative mx-auto mt-20 hidden h-100 max-w-4xl lg:block">
          <div className="absolute left-1/2 top-1/2">
            {members.map((member, i) => {
              const n = members.length;
              let diff = i - active;
              if (diff > n / 2) diff -= n;
              if (diff < -n / 2) diff += n;
              const isActive = diff === 0;

              return (
                <motion.div
                  key={member.nameKey}
                  className="group absolute overflow-hidden rounded-2xl border bg-restra-card/50"
                  style={{ originX: 0.5, originY: 0.5, top: -96, left: -96 }}
                  animate={{
                    x: diff * 200,
                    scale: isActive ? 1.2 : 0.78,
                    opacity: isActive ? 1 : 0.45,
                    zIndex: isActive ? 20 : 10 - Math.abs(diff),
                    borderColor: isActive
                      ? "rgba(255,255,255,0.16)"
                      : "rgba(255,255,255,0.04)",
                  }}
                  transition={{ type: "spring", stiffness: 220, damping: 26 }}
                  onMouseEnter={() => focusMember(i)}
                  onClick={() => focusMember(i)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="relative h-48 w-48 overflow-hidden">
                    <Image
                      src={member.photo}
                      alt={t(member.nameKey)}
                      fill
                      sizes="192px"
                      className="object-cover"
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

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4"
                    >
                      <p className="text-xs leading-relaxed text-restra-text-secondary">
                        {t(member.quoteKey)}
                      </p>
                      <div className="mt-3 flex items-center gap-2 border-t border-white/4 pt-3">
                        {member.socials.map(({ icon: Icon, url, label }) => (
                          <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            onClick={(e) => e.stopPropagation()}
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-restra-surface text-restra-text-secondary transition-colors duration-200 hover:text-restra-cyan"
                          >
                            <Icon className="h-3.5 w-3.5" />
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
            {members.map((member, i) => (
              <button
                key={member.nameKey}
                onClick={() => focusMember(i)}
                onMouseEnter={() => focusMember(i)}
                aria-label={t(member.nameKey)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-6 bg-restra-cyan"
                    : "w-1.5 bg-restra-text-secondary/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
