import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";

import Container from "@/components/commons/Container";

import FooterSection from "@/components/sections/footerSection";

import { projects } from "@/features/projects/data/projects";
import ProjectShowcase from "@/components/sections/projectShowcase";
import TextReveal from "@/components/commons/textReveal";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <Container>
          {/* Back Button */}
          <div className="mb-16">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors duration-300 hover:text-black"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span>Back</span>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="max-w-5xl">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              {project.category} • {project.year}
            </p>

            <h1 className="mt-6 text-[clamp(3.5rem,8vw,8rem)] font-semibold tracking-[-0.07em] text-black">
              {project.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500">
              {project.description}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative mt-20 aspect-video overflow-hidden rounded-sm">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <section className="py-8">
        <Container>
          <div className="grid gap-24 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Sticky Info */}
            <div className="h-fit space-y-14 lg:sticky lg:top-28">
              {/* Role */}
              <div>
                <TextReveal delay={0.3}>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Role
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.role}
                  </h3>
                </TextReveal>
              </div>

              {/* Timeline */}
              <div>
                <TextReveal delay={0.4}>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Timeline
                  </p>

                  <h3 className="mt-4 text-2xl font-semibold">
                    {project.timeline}
                  </h3>
                </TextReveal>
              </div>

              {/* Tools */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Tools
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {project.tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white"
                    >
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-28">
              {/* Overview */}
              <div>
                <TextReveal delay={0.2}>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Overview
                  </p>

                  <h2 className="mt-6 text-4xl font-semibold tracking-tighter text-black">
                    {project.overview}
                  </h2>

                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500">
                    {project.overviewDesc}
                  </p>
                </TextReveal>
              </div>

              {/* Problem */}
              <div>
                <TextReveal delay={0.3}>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Problem
                  </p>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                    {project.problem}
                  </p>
                </TextReveal>
              </div>

              {/* Goal */}
              <div>
                <TextReveal delay={0.3}>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Goal
                  </p>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                    {project.goal}
                  </p>
                </TextReveal>
              </div>

              {/* Research */}
              <div>
                <TextReveal delay={0.3}>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Research
                  </p>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                    {project.research}
                  </p>
                </TextReveal>
              </div>

              {/* Result */}
              <div>
                <TextReveal delay={0.3}>
                  <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                    Results
                  </p>

                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                    {project.result}
                  </p>
                </TextReveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Showcase */}
      <ProjectShowcase project={project} />

      {/* Next Project */}
      <section className="border-t border-neutral-200 py-24">
        <Container>
          <Link
            href={`/projects/${
              projects[
                (projects.findIndex((item) => item.slug === project.slug) + 1) %
                  projects.length
              ].slug
            }`}
            className="group block"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
              Next Project
            </p>

            <div className="mt-6 flex items-center justify-between gap-8">
              <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold tracking-[-0.06em] text-black transition-opacity duration-300 group-hover:opacity-60">
                {
                  projects[
                    (projects.findIndex((item) => item.slug === project.slug) +
                      1) %
                      projects.length
                  ].title
                }
              </h2>

              <span className="text-4xl transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </div>
          </Link>
        </Container>
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
