import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { profile } from "../data/resume";

const links = [
  {
    icon: FiMail,
    label: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: FiPhone,
    label: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn Profile",
    href: profile.linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-10 py-24 md:py-32 overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-br from-accent/20 via-accent-2/15 to-transparent blur-3xl"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative max-w-4xl mx-auto">
        <Reveal className="rounded-[2rem] glass-panel px-6 py-16 md:p-20 text-center shadow-[0_30px_80px_-30px_rgba(17,17,17,0.25)]">
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/40">05 / Contact</p>
          <h2 className="font-display font-semibold text-4xl md:text-6xl mt-4 leading-[1.05]">
            Let's build something
            <br />
            <span className="gradient-text">worth shipping.</span>
          </h2>
          <p className="flex items-center justify-center gap-2 text-ink/55 mt-6">
            <FiMapPin /> {profile.location}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {links.map(({ icon: Icon, label, href }) => (
              <Magnetic key={label} as="span" strength={14}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper px-6 py-3.5 font-medium hover:bg-ink hover:text-paper hover:border-ink transition-colors shadow-sm"
                >
                  <Icon className="text-lg" />
                  {label}
                  <FiArrowUpRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
