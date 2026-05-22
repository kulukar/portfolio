"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "../commons/Container";

export default function HeroSection() {
  const texts = [
    "Available for work",
    "Open for freelance",
    "Currently designing",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f5f5f5_2px,transparent_2px),linear-gradient(to_bottom,#f5f5f5_2px,transparent_2px)] bg-size-[64px_64px]" />
      {/* Radial Fade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,white_75%)]" />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex items-center gap-3 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 backdrop-blur-sm"
          >
            {/* Green Dot */}
            <div className="relative flex h-2.5 w-2.5 items-center justify-center shadow-sm">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-600 opacity-75" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-600" />
            </div>

            {/* Animated Text */}
            <div className="relative flex h-5 min-w-37.5 items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={texts[index]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="absolute text-sm font-medium text-neutral-600"
                >
                  {texts[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-1">
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-semibold tracking-[-0.06em] text-black">
              Design. Innovate.
            </h1>

            <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-semibold tracking-[-0.06em] text-neutral-400">
              Crafting modern UI/UX brilliance.
            </h2>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="mt-16 flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Scroll
            </span>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 flex h-12 w-7 items-start justify-center rounded-full border border-neutral-300 p-2"
            >
              <div className="h-2 w-2 rounded-full bg-black" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
