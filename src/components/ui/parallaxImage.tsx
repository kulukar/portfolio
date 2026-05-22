"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
};

export default function ParallaxImage({ src, alt }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div ref={ref} className="relative aspect-16/8 overflow-hidden rounded-sm">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image src={src} alt={alt} fill className="object-cover" />
      </motion.div>
    </div>
  );
}
