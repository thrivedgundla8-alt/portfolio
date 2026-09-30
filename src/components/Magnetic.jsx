import { useRef } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children, className = "", strength = 22, as = "div", ...props }) {
  const ref = useRef(null);
  const Comp = motion[as] ?? motion.div;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    el.style.setProperty("--mx", `${(relX / rect.width) * strength}px`);
    el.style.setProperty("--my", `${(relY / rect.height) * strength}px`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", `0px`);
    el.style.setProperty("--my", `0px`);
  };

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: "translate(var(--mx, 0), var(--my, 0))",
        transition: "transform 0.15s ease-out",
      }}
      className={className}
      {...props}
    >
      {children}
    </Comp>
  );
}
