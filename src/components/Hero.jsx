import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { profile, stats } from "../data/resume";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16 overflow-hidden"
    >
      {/* decorative blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-accent/15 blur-3xl"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-32 w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent-2/15 blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto w-full"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm tracking-[0.3em] uppercase text-ink/50 mb-6"
        >
          Portfolio / {profile.location}
        </motion.p>

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
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer inline-flex items-center gap-2 rounded-full bg-ink text-paper px-7 py-3.5 font-medium hover:bg-accent transition-colors"
          >
            Let's Connect
          </Link>
          <Link
            to="experience"
            smooth
            duration={600}
            offset={-80}
            className="cursor-pointer inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 font-medium hover:border-ink transition-colors"
          >
            View Experience
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 border-t border-ink/10 pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl font-semibold">{s.value}</p>
              <p className="text-sm text-ink/55 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
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
