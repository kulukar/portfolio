"use client";

import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";

import { Project } from "@/features/projects/data/projects";

type ProjectPageProps = {
  project: Project;
};

export default function ProjectShowcase({ project }: ProjectPageProps) {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const y3 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const y4 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 space-y-1">
        {/* Showcase 1 */}
        <div className="group relative h-[90vh] w-full overflow-hidden">
          <motion.div style={{ y: y1 }} className="absolute inset-0 scale-110">
            <Image
              src={project.showcase[0].image}
              alt={project.showcase[0].title}
              fill
              className="object-cover transition-transform duration-1200 group-hover:scale-105"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-10 md:p-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Featured Showcase
              </p>

              <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                {project.showcase[0].title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                {project.showcase[0].description}
              </p>
            </div>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid gap-1 lg:grid-cols-2">
          {/* Showcase 2 */}
          <div className="group relative h-[90vh] overflow-hidden">
            <motion.div
              style={{ y: y2 }}
              className="absolute inset-0 scale-110"
            >
              <Image
                src={project.showcase[1].image}
                alt={project.showcase[1].title}
                fill
                className="object-cover transition-transform duration-1400 group-hover:scale-105"
              />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-10 md:p-16">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Showcase
                </p>

                <h3 className="mt-4 text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                  {project.showcase[1].title}
                </h3>

                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                  {project.showcase[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Showcase 3 */}
          <div className="group relative h-[90vh] overflow-hidden">
            <motion.div
              style={{ y: y3 }}
              className="absolute inset-0 scale-110"
            >
              <Image
                src={project.showcase[2].image}
                alt={project.showcase[2].title}
                fill
                className="object-cover transition-transform duration-1400 group-hover:scale-105"
              />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-10 md:p-16">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Showcase
                </p>

                <h3 className="mt-4 text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                  {project.showcase[2].title}
                </h3>

                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                  {project.showcase[2].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase 4 */}
        <div className="group relative h-[90vh] w-full overflow-hidden">
          <motion.div style={{ y: y4 }} className="absolute inset-0 scale-110">
            <Image
              src={project.showcase[3].image}
              alt={project.showcase[3].title}
              fill
              className="object-cover transition-transform duration-1200 group-hover:scale-105"
            />
          </motion.div>

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-10 md:p-16">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                Final Showcase
              </p>

              <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                {project.showcase[3].title}
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                {project.showcase[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
