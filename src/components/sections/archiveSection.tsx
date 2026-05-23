"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../commons/Container";
import { projects } from "@/features/projects/data/projects";

export default function ArchiveSection() {
  const archiveProjects = projects.filter((project) => !project.featured);

  // Optional: show only 5 projects on homepage
  const visibleProjects = archiveProjects.slice(0, 5);

  return (
    <section className="relative pt-10 pb-24">
      <Container>
        {/* Header */}
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Archive
            </p>

            <h2 className="mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold tracking-[-0.06em] text-black">
              More Projects
            </h2>
          </div>

          {/* Optional Archive Page */}
          <Link
            href="/archive"
            className="group hidden items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-black md:flex"
          >
            <span className="text-4xl transition-transform duration-500 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        {/* Archive List */}
        <div className="border-t border-neutral-200">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-center justify-between border-b border-neutral-200 py-8 transition-all duration-300 hover:px-4"
              >
                {/* Left */}
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-black transition-opacity duration-300 group-hover:opacity-60">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    {project.category}
                  </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-6">
                  <span className="text-sm text-neutral-400">
                    {project.year}
                  </span>

                  <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-10 flex md:hidden">
          <Link
            href="/archive"
            className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-black"
          >
            <span>View All Projects</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
