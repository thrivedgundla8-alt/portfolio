import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-scroll";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            to="hero"
            smooth
            duration={600}
            className="cursor-pointer grid place-items-center w-12 h-12 rounded-full bg-ink text-paper shadow-lg hover:bg-accent transition-colors"
            aria-label="Back to top"
          >
            <FiArrowUp className="text-lg" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
