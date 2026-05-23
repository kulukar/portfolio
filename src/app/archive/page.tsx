import Link from "next/link";
import Container from "@/components/commons/Container";
import { projects } from "@/features/projects/data/projects";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24 text-black">
      <Container>
        {/* Header */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Archive
          </p>

          <h1 className="mt-4 text-[clamp(3rem,7vw,6rem)] font-semibold tracking-[-0.06em]">
            All Projects
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500">
            A collection of selected explorations, interfaces, and digital
            experiences crafted across various projects.
          </p>
        </div>

        {/* Projects */}
        <div className="border-t border-neutral-200">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex items-center justify-between border-b border-neutral-200 py-8 transition-all duration-300 hover:px-4"
            >
              {/* Left */}
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-black transition-opacity duration-300 group-hover:opacity-60">
                  {project.title}
                </h2>

                <p className="mt-2 text-sm text-neutral-500">
                  {project.category}
                </p>
              </div>

              {/* Right */}
              <div className="flex items-center gap-6">
                <span className="text-sm text-neutral-400">{project.year}</span>

                <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
