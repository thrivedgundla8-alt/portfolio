import { motion } from "framer-motion";
import {
  FiCode,
  FiServer,
  FiMonitor,
  FiDatabase,
  FiShare2,
  FiBox,
  FiCheckSquare,
  FiTool,
  FiCpu,
} from "react-icons/fi";
import Reveal from "./Reveal";
import Marquee from "./Marquee";
import { skillGroups } from "../data/resume";

const ICONS = [FiCode, FiServer, FiMonitor, FiDatabase, FiShare2, FiBox, FiCheckSquare, FiTool, FiCpu];

const allSkills = skillGroups.flatMap((g) => g.items);

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-ink text-paper overflow-hidden bg-grid-dark">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-paper/40">02 / Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Tools of the trade
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = ICONS[gi % ICONS.length];
            return (
              <Reveal key={group.title} delay={gi * 0.06}>
                <div className="h-full rounded-2xl glass-panel-dark p-6 hover:border-accent/40 border border-white/10 transition-colors group">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid place-items-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-2 text-paper shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-lg" />
                    </span>
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-paper/60">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -3, backgroundColor: "#ff4b1f", color: "#f5f4f0" }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm font-medium cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-10">
        <Marquee
          items={allSkills}
          className="text-paper/50 font-display text-xl md:text-2xl font-medium"
          speed="slow"
        />
      </div>
    </section>
  );
}
