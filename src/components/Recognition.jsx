import { motion } from "framer-motion";
import { FiAward, FiStar, FiBookOpen } from "react-icons/fi";
import Reveal from "./Reveal";
import { certifications, awards, education } from "../data/resume";

export default function Recognition() {
  return (
    <section id="recognition" className="relative px-6 md:px-10 py-24 md:py-32 bg-paper-soft overflow-hidden bg-dots">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-2/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/40">04 / Recognition</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Certifications &amp; milestones
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-8">
          <Reveal className="md:col-span-1">
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-ink/50 mb-5">
              <FiBookOpen className="text-accent" /> Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li
                  key={c.title}
                  className="rounded-2xl border border-ink/10 p-5 bg-paper hover:border-accent/40 hover:shadow-[0_15px_35px_-20px_rgba(255,75,31,0.4)] transition-all"
                >
                  <p className="font-medium">{c.title}</p>
                  <p className="text-sm text-ink/55 mt-1">{c.issuer}</p>
                </li>
              ))}
            </ul>

            <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-ink/50 mb-5 mt-10">
              <FiStar className="text-accent" /> Education
            </h3>
            <ul className="space-y-4">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="rounded-2xl border border-ink/10 p-5 bg-paper hover:border-accent/40 hover:shadow-[0_15px_35px_-20px_rgba(255,75,31,0.4)] transition-all"
                >
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-ink/55 mt-1">
                    {e.school}, {e.location} · {e.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-2">
            <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-ink/50 mb-5">
              <FiAward className="text-accent" /> Awards &amp; Achievements
            </h3>
            <div className="space-y-5">
              {awards.map((a) => (
                <motion.div
                  key={a.title}
                  whileHover={{ y: -3 }}
                  className="relative rounded-2xl border border-ink/10 p-6 bg-paper hover:border-transparent hover:shadow-[0_20px_45px_-20px_rgba(108,92,231,0.35)] transition-all overflow-hidden group"
                >
                  <span className="absolute -right-6 -top-6 grid place-items-center w-24 h-24 rounded-full bg-gradient-to-br from-accent/10 to-accent-2/10 group-hover:scale-125 transition-transform" />
                  <div className="relative flex items-start gap-4">
                    <span className="shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent-2 text-paper">
                      <FiAward />
                    </span>
                    <div>
                      <p className="font-display font-semibold text-lg">{a.title}</p>
                      <p className="text-ink/65 mt-2 leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
