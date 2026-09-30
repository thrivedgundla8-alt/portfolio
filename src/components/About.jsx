import { motion } from "framer-motion";
import { FiServer, FiMonitor, FiBox, FiCpu } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data/resume";

const pillars = [
  {
    icon: FiServer,
    title: "Backend Engineering",
    desc: "Spring Boot microservices, event-driven systems with Kafka, and the Saga pattern for reliable distributed transactions.",
  },
  {
    icon: FiMonitor,
    title: "Frontend Craft",
    desc: "Reusable, tested Angular component systems built for real production workflows — from lending platforms to tender lifecycle tools.",
  },
  {
    icon: FiBox,
    title: "DevOps & Delivery",
    desc: "Docker & Kubernetes deployments, CI/CD pipelines, and Agile/Scrum delivery with 95%+ sprint adherence.",
  },
  {
    icon: FiCpu,
    title: "AI-Augmented Workflow",
    desc: "GitHub Copilot, Claude & ChatGPT for code review, test generation, debugging, and technical documentation.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 right-0 w-80 h-80 rounded-full bg-accent-2/10 blur-3xl" aria-hidden />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4" as="div">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/40">01 / About</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 leading-[1.05]">
            Building resilient
            <br /> software, <span className="gradient-text">end to end.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15} className="md:col-span-7 md:col-start-6">
          <p className="text-lg md:text-xl leading-relaxed text-ink/75">
            {profile.summary}
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-ink/10 p-6 overflow-hidden hover:border-transparent hover:shadow-[0_20px_45px_-25px_rgba(17,17,17,0.35)] transition-all"
              >
                <span className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent-2/0 group-hover:from-accent/[0.06] group-hover:to-accent-2/[0.06] transition-colors" />
                <span className="relative grid place-items-center w-11 h-11 rounded-xl bg-ink text-paper mb-4 group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-accent-2 transition-colors">
                  <Icon className="text-lg" />
                </span>
                <h3 className="relative font-display text-xl font-semibold">{title}</h3>
                <p className="relative text-ink/60 mt-2 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
