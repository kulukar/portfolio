"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 25,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);

      const target = e.target as HTMLElement;

      // Pointer state
      setIsPointer(!!target.closest("a, button"));

      // Light section detection
      const lightSection = target.closest('[data-cursor-theme="light"]');

      setIsLight(!!lightSection);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      animate={{
        scale: isPointer ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`pointer-events-none fixed left-0 top-0 z-9999 hidden h-5 w-5 rounded-full transition-colors duration-300 md:block ${
        isLight ? "bg-white" : "bg-black"
      }`}
    />
  );
}
