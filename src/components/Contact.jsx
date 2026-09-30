import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
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
    <section id="contact" className="relative px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.3em] uppercase text-ink/40">05 / Contact</p>
          <h2 className="font-display font-semibold text-5xl md:text-7xl mt-4 leading-[1.02]">
            Let's build something
            <br /> worth shipping.
          </h2>
          <p className="flex items-center justify-center gap-2 text-ink/55 mt-6">
            <FiMapPin /> {profile.location}
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-6 py-3.5 font-medium hover:bg-ink hover:text-paper hover:border-ink transition-colors"
            >
              <Icon className="text-lg" />
              {label}
              <FiArrowUpRight className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
