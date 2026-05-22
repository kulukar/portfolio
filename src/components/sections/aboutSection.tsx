"use client";

import { motion } from "framer-motion";
import Container from "../commons/Container";
import Image from "next/image";

const tools = [
  {
    name: "Figma",
    icon: "/tools/figma.svg",
  },
  {
    name: "Framer",
    icon: "/tools/framer.svg",
  },
  {
    name: "HTML",
    icon: "/tools/html.svg",
  },
  {
    name: "Next.js",
    icon: "/tools/nextjs.svg",
  },
  {
    name: "PHP",
    icon: "/tools/php.svg",
  },
  {
    name: "React.js",
    icon: "/tools/react.svg",
  },
  {
    name: "Tailwind",
    icon: "/tools/tailwind.svg",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-24"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f5f5f5_2px,transparent_2px),linear-gradient(to_bottom,#f5f5f5_2px,transparent_2px)] bg-size-[64px_64px]" />

      {/* Radial Fade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,white_75%)]" />

      {/* Content */}
      <div className="relative z-10">
        <Container>
          {/* Section Header */}
          <div className="mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Who Am I?
            </p>

            <h2 className="mt-4 text-[clamp(2.5rem,5vw,5rem)] font-semibold tracking-[-0.06em] text-black">
              About Me
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group relative mx-auto w-full max-w-155 overflow-hidden rounded-sm"
            >
              {/* Image */}
              <div className="relative aspect-[4/4.8] overflow-hidden rounded-sm">
                <Image
                  src="/profileku.png"
                  alt="Sareh Azis Panegar"
                  fill
                  priority
                  className="object-cover grayscale brightness-90 transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0 group-hover:brightness-100"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

              {/* Floating Label */}
              <motion.div
                whileHover={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
              >
                <p className="text-sm font-medium text-white">UI/UX Designer</p>
              </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="flex h-full flex-col justify-center"
            >
              <p className="max-w-xl text-justify text-lg leading-relaxed text-neutral-700">
                I’m Sareh Azis Panegar, a UI/UX Designer focused on crafting
                premium digital products through clean visual systems,
                thoughtful interactions, and immersive user experiences. I
                combine minimal aesthetics with modern motion to create
                interfaces that feel intuitive and visually engaging.
              </p>
              {/* Stats */}
              <div className="mt-10 grid grid-cols-2 gap-2 ">
                <div className="rounded-sm border border-neutral-200 bg-white/70 p-5 backdrop-blur-sm shadow-sm">
                  <p className="text-3xl font-semibold text-black">1+</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Years Experience
                  </p>
                </div>

                <div className="rounded-sm border border-neutral-200 bg-white/70 p-5 backdrop-blur-sm shadow-sm">
                  <p className="text-3xl font-semibold text-black">15+</p>
                  <p className="mt-1 text-sm text-neutral-500">
                    Projects Completed
                  </p>
                </div>
              </div>

              {/* Tools */}
              {/* Tools */}
              <div className="mt-12 flex flex-wrap gap-4">
                {tools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="group flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-black"
                  >
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={28}
                      height={28}
                      className="grayscale transition-all duration-300 group-hover:grayscale-0"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
