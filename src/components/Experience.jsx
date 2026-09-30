import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { experience } from "../data/resume";

function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <Reveal delay={index * 0.1} className="relative pl-8 md:pl-12">
      <span className="absolute left-0 top-2 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent ring-4 ring-accent/15" />
      </span>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25 }}
        className="group relative rounded-2xl border border-ink/10 bg-paper p-6 md:p-8 hover:border-transparent hover:shadow-[0_20px_45px_-20px_rgba(255,75,31,0.35)] transition-all"
      >
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-accent/40 via-accent-2/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] p-px" />
        <button
          onClick={() => setOpen((o) => !o)}
          className="relative w-full flex items-start justify-between gap-4 text-left"
        >
          <div>
            <h4 className="font-display text-xl md:text-2xl font-semibold">{project.name}</h4>
            <p className="text-ink/60 mt-2 text-sm md:text-base leading-relaxed max-w-2xl">
              {project.overview}
            </p>
          </div>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 grid place-items-center w-9 h-9 rounded-full border border-ink/20 text-lg mt-1 group-hover:border-accent group-hover:text-accent transition-colors"
          >
            +
          </motion.span>
        </button>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs font-medium rounded-full bg-paper-soft px-3 py-1 text-ink/70"
            >
              {s}
            </span>
          ))}
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden mt-2"
            >
              <div className="border-t border-ink/10 mt-4 pt-5 space-y-3">
                {project.contributions.map((c) => (
                  <li key={c} className="flex gap-3 text-sm md:text-base text-ink/70 leading-relaxed">
                    <span className="text-accent mt-1.5">▸</span>
                    <span>{c}</span>
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/40">03 / Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4">
            Where the work happened
          </h2>
        </Reveal>

        {experience.map((job) => (
          <div key={job.company} className="mt-14">
            <Reveal className="flex flex-wrap items-center gap-4 mb-8 pl-8 md:pl-12">
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent-2 text-paper font-display font-semibold shrink-0">
                {job.company.charAt(0)}
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2 flex-1">
                <h3 className="font-display text-2xl md:text-3xl font-semibold">
                  {job.role} <span className="text-ink/40 font-normal">@ {job.company}</span>
                </h3>
                <span className="text-ink/50 font-mono text-sm">{job.period} · {job.location}</span>
              </div>
            </Reveal>

            <div className="relative space-y-8 before:absolute before:left-[5px] md:before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-ink/10">
              {job.projects.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
