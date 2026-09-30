import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-paper/80 shadow-[0_1px_0_0_rgba(17,17,17,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <Link
          to="hero"
          smooth
          duration={600}
          className="font-display text-lg font-semibold tracking-tight cursor-pointer"
        >
          TG<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth
                duration={600}
                offset={-80}
                spy
                activeClass="text-ink"
                className="relative cursor-pointer text-ink/60 hover:text-ink transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="/portfolio/Thrived_Gundla_Resume.docx"
          download
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
        >
          Resume
        </a>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-ink"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[2px] w-6 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-6 bg-ink"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-paper border-t border-ink/10"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    smooth
                    duration={600}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-medium cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/portfolio/Thrived_Gundla_Resume.docx"
                  download
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2 text-sm font-medium"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
