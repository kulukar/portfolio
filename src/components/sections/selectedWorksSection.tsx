"use client";

import { motion } from "framer-motion";
import Container from "../commons/Container";
import { projects } from "@/features/projects/data/projects";
import Link from "next/link";
import ParallaxImage from "../ui/parallaxImage";

export default function SelectedWorks() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <section id="work" className="relative py-20">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f5f5f5_2px,transparent_2px),linear-gradient(to_bottom,#f5f5f5_2px,transparent_2px)] bg-size-[64px_64px]" />

      {/* Radial Fade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,white_75%)]" />
      <Container>
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Selected Works
          </p>

          <h2 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] font-semibold tracking-[-0.06em] text-black">
            Featured Projects
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`grid items-center gap-10 lg:grid-cols-[0.9fr_0.8fr] ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 !== 0 ? "lg:col-start-1" : ""}`}>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  {project.category} • {project.year}
                </p>

                <h3 className="mt-4 text-[clamp(1.8rem,3vw,3rem)] font-semibold tracking-tighter text-black">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-6">
                  <Link
                    data-cursor="open"
                    href={`/projects/${project.slug}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-black"
                  >
                    <span className="relative">
                      View Case Study
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className={`group ml-auto w-full max-w-180 ${
                  index % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-sm">
                  <ParallaxImage src={project.thumbnail} alt={project.title} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
