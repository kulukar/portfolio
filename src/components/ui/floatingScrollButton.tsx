"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingScrollButton() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      setIsBottom(scrollY + windowHeight > fullHeight - 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (isBottom) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const footer = document.getElementById("contact");

      footer?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        duration: 0.3,
      }}
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:bg-black hover:text-white"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isBottom ? "up" : "down"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="text-xl"
        >
          {isBottom ? "↑" : "↓"}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
