"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="text-4xl font-semibold tracking-[-0.08em] text-white"
          >
            Panegar®
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
