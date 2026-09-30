import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.4 });
  const dotX = useTransform(x, (v) => v + 5);
  const dotY = useTransform(y, (v) => v + 5);
  const centeredRingX = useTransform(ringX, (v) => v - 13);
  const centeredRingY = useTransform(ringY, (v) => v - 13);
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch.current) return;

    const move = (e) => {
      setVisible(true);
      x.set(e.clientX - 5);
      y.set(e.clientY - 5);
    };
    const overCheck = (e) => {
      const target = e.target.closest("a, button, [role='button'], input, textarea");
      setHovering(Boolean(target));
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overCheck);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overCheck);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (isTouch.current) return null;

  return (
    <div className="hidden md:block" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s" }}>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }} />
      <motion.div
        className="cursor-ring"
        style={{ x: centeredRingX, y: centeredRingY }}
        animate={{ scale: hovering ? 1.7 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
