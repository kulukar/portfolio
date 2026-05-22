"use client";

import { motion } from "framer-motion";

const items = [
  "UI/UX DESIGNER",
  "GRAPHIC DESIGNER",
  "CREATIVE THINKER",
  "VISUAL STORYTELLER",
  "FREELANCER",
  "MINIMAL DESIGN",
  "BRAND IDENTITY",
];

export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden border-y border-neutral-200 bg-[#ffffff] py-6">
      {/* Top Gradient */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-[#f5f5f3] to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-[#f5f5f3] to-transparent" />

      {/* Marquee */}
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max items-center gap-12"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-12">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
              {item}
            </span>

            <span className="text-neutral-300">✧</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
