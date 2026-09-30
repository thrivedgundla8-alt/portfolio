import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-10 py-24 md:py-32 bg-paper-soft">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/40">02 / Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Tools of the trade
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink/50 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -3, backgroundColor: "#111111", color: "#f5f4f0" }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center rounded-full border border-ink/15 bg-paper px-4 py-1.5 text-sm font-medium cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
