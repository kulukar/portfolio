"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function TextReveal({
  children,
  className,
  delay = 0,
}: TextRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
