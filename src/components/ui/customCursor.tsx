"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const [particles, setParticles] = useState<Particle[]>([]);

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

      // Pointer
      setIsPointer(!!target.closest("a, button"));

      // Theme detect
      const lightSection = target.closest('[data-cursor-theme="light"]');

      setIsLight(!!lightSection);

      // Add particles
      const newParticle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev.slice(-12), newParticle]);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        style={{ x, y }}
        animate={{
          scale: isPointer ? 1.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={`
    pointer-events-none fixed left-0 top-0 z-9999
    hidden h-6 w-6 rounded-full border
    backdrop-blur-sm md:block
    ${isLight ? "border-white" : "border-black"}
  `}
      >
        {/* Inner Dot */}
        <div
          className={`
      absolute left-1/2 top-1/2 h-1.5 w-1.5
      -translate-x-1/2 -translate-y-1/2 rounded-full
      ${isLight ? "bg-white" : "bg-black"}
    `}
        />
      </motion.div>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            y: 10,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={`
            pointer-events-none fixed z-[9998]
            h-2 w-2 rounded-full
            ${isLight ? "bg-white/40" : "bg-black/30"}
          `}
          style={{
            left: particle.x,
            top: particle.y,
          }}
        />
      ))}
    </>
  );
}
