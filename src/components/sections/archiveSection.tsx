"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "../commons/Container";
import { projects } from "@/features/projects/data/projects";

export default function ArchiveSection() {
  const archiveProjects = projects.filter((project) => !project.featured);

  // Show only some projects on homepage
  const visibleProjects = archiveProjects.slice(0, 5);

  return (
    <section className="relative pt-10 pb-24">
      <Container>
        {/* Archive List */}
        <div>
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
                className="
                  group flex items-center justify-between
                  border-b border-neutral-200
                  py-8 px-2
                  transition-all duration-300
                  hover:px-6
                  hover:bg-neutral-50
                "
              >
                {/* Left */}
                <div>
                  <h3
                    className="
                      text-2xl font-medium tracking-tight text-black
                      transition-all duration-300
                      group-hover:translate-x-1
                    "
                  >
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

        {/* View All Projects */}
        <section className="border-t border-neutral-200 pt-20">
          <Link href="/archive" scroll className="group block">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Archive
            </p>

            <div className="mt-6 flex items-center justify-between gap-8">
              <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold tracking-[-0.06em] text-black transition-opacity duration-300 group-hover:opacity-60">
                More Projects
              </h2>

              <span className="text-4xl transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </div>
          </Link>
        </section>
      </Container>
    </section>
  );
}
