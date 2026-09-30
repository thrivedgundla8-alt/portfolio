import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowUpRight } from "react-icons/fi";
import { profile, stats } from "../data/resume";
import Counter from "./Counter";
import Magnetic from "./Magnetic";
import Marquee from "./Marquee";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const badges = [
  { label: "React.js", pos: "top-32 right-[6%] xl:right-[10%]", delay: 0.6 },
  { label: "Apache Kafka", pos: "top-[40%] right-[4%] xl:right-[8%]", delay: 1.8 },
  { label: "Docker", pos: "top-[38%] left-[3%] xl:left-[6%]", delay: 2.4 },
  { label: "Spring Boot", pos: "top-[58%] right-[10%] xl:right-[16%]", delay: 1.2 },
];

function splitStat(value) {
  const match = String(value).match(/^([\d.]+)(.*)$/);
  if (!match) return { number: value, suffix: "" };
  return { number: match[1], suffix: match[2] };
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-10 overflow-hidden bg-grid"
    >
      {/* gradient mesh */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 md:w-[32rem] md:h-[32rem] rounded-full bg-accent/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-accent-2/25 blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[30%] left-[45%] w-64 h-64 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* floating tech badges */}
      {badges.map((b) => (
        <motion.span
          key={b.label}
          aria-hidden
          className={`hidden xl:flex absolute ${b.pos} items-center gap-2 rounded-full glass-panel px-4 py-2 text-xs font-medium shadow-sm z-10`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.8 + b.delay * 0.15 },
            y: { duration: 5 + b.delay, repeat: Infinity, ease: "easeInOut", delay: b.delay },
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          {b.label}
        </motion.span>
      ))}

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto w-full"
      >
        <motion.div variants={item} className="flex items-center gap-4 mb-6">
          <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--color-accent), var(--color-accent-2), var(--color-accent))",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[3px] rounded-full bg-paper flex items-center justify-center font-display font-semibold text-lg">
              TG
            </div>
          </div>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/50">
            Portfolio / {profile.location}
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-semibold leading-[0.95] tracking-tight text-[13vw] md:text-[6.5rem] lg:text-[7.5rem]"
        >
          {profile.name.split(" ")[0]}
          <br />
          <span className="text-outline">{profile.name.split(" ")[1]}</span>
        </motion.h1>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3 text-lg md:text-xl text-ink/70">
          <span className="font-medium text-ink">{profile.role}</span>
          <span aria-hidden>—</span>
          {profile.taglineParts.map((t, i) => (
            <span key={t} className="inline-flex items-center gap-3">
              {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden />}
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Magnetic as="span">
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-ink text-paper px-7 py-3.5 font-medium hover:bg-accent transition-colors shadow-[0_10px_30px_-10px_rgba(17,17,17,0.4)]"
            >
              Let's Connect
              <FiArrowUpRight />
            </Link>
          </Magnetic>
          <Magnetic as="span">
            <Link
              to="experience"
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 font-medium hover:border-ink transition-colors"
            >
              View Experience
            </Link>
          </Magnetic>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-ink/10 pt-8"
        >
          {stats.map((s) => {
            const { number, suffix } = splitStat(s.value);
            return (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl font-semibold">
                  <Counter value={number} suffix={suffix} />
                </p>
                <p className="text-sm text-ink/55 mt-1">{s.label}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative mt-14"
      >
        <Marquee
          items={profile.taglineParts.concat([
            "Microservices",
            "Apache Kafka",
            "Docker",
            "Kubernetes",
            "REST APIs",
            "CI/CD",
          ])}
          className="text-ink/30 font-display text-2xl md:text-4xl font-semibold uppercase"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink/40"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-[1px] h-8 bg-ink/30"
        />
      </motion.div>
    </section>
  );
}
