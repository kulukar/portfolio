import { notFound } from "next/navigation";
import { projects } from "@/features/projects/data/projects";
import Image from "next/image";
import Container from "@/components/commons/Container";
import Link from "next/link";
import FooterSection from "@/components/sections/footerSection";

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
    <main className="min-h-screen bg-ffffff text-black">
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
          <div className="relative mt-20 aspect-video overflow-hidden rounded-sm ">
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
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Role
                </p>

                <h3 className="mt-4 text-2xl font-semibold">UI/UX Designer</h3>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Timeline
                </p>

                <h3 className="mt-4 text-2xl font-semibold">8 Weeks</h3>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Tools
                </p>

                <h3 className="mt-4 text-2xl font-semibold leading-relaxed">
                  Figma, Framer,
                  <br />
                  Photoshop
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-28">
              {/* Overview */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Overview
                </p>

                <h2 className="mt-6 text-4xl font-semibold tracking-tighter text-black">
                  Crafting a modern digital experience with clarity,
                  interaction, and visual storytelling.
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-500">
                  The project focused on building a premium digital product that
                  balances usability with strong visual identity. Every
                  interaction was designed to feel intentional, responsive, and
                  immersive across different platforms and devices.
                </p>
              </div>

              {/* Problem */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Problem
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                  The challenge was creating a scalable and visually consistent
                  experience while maintaining simplicity across multiple user
                  flows. Existing interfaces lacked hierarchy, interaction
                  clarity, and emotional engagement.
                </p>
              </div>

              {/* Goal */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Goal
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                  The goal was to create a modern interface system that feels
                  premium, intuitive, and scalable while improving usability and
                  overall user engagement.
                </p>
              </div>

              {/* Research */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Research
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                  Research focused on analyzing user behavior, identifying
                  usability pain points, and exploring modern interface patterns
                  from leading digital products to establish a stronger
                  interaction system.
                </p>
              </div>

              {/* Wireframe */}
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  Wireframe
                </p>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
                  Early wireframes were used to define structure, navigation
                  flow, and content hierarchy before moving into high-fidelity
                  exploration and visual refinement.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Showcase */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 space-y-1">
          {/* Showcase 1 */}
          <div className="group relative h-[90vh] w-full overflow-hidden">
            <Image
              src={project.gallery[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1200 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

            {/* Floating Content */}
            <Container>
              <div className="absolute bottom-16 py-8 px-8 left-0 z-10 max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Featured Showcase
                </p>

                <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                  Immersive Visual
                  <br />
                  Experience
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                  Designed with cinematic layouts, modern interaction patterns,
                  and premium visual hierarchy to create a memorable product
                  experience.
                </p>
              </div>
            </Container>
          </div>

          {/* Showcase 2 */}
          <div className="grid gap-1 lg:grid-cols-2">
            {/* Left Image */}
            <div className="group relative h-[90vh] overflow-hidden">
              <Image
                src={project.gallery[1]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1400 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-10 md:p-16">
                <div className="max-w-2xl">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    Interface Design
                  </p>

                  <h3 className="mt-4 text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                    Building immersive and visually refined interfaces.
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="group relative h-[90vh] overflow-hidden">
              <Image
                src={project.gallery[2]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1400 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 right-0 flex w-full justify-end p-10 md:p-16">
                <div className="max-w-2xl text-right">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                    Motion & Interaction
                  </p>

                  <h3 className="mt-4 text-[clamp(2.5rem,4vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                    Crafted with cinematic motion and modern storytelling.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Cinematic */}
          <div className="group relative h-[85vh] w-full overflow-hidden">
            <Image
              src={project.gallery[3]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1400 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20" />

            {/* Floating Content */}
            <Container>
              <div className="absolute bottom-16 py-8 px-8 left-0 z-10 max-w-2xl">
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Featured Showcase
                </p>

                <h2 className="mt-4 text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-white">
                  Immersive Visual
                  <br />
                  Experience
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                  Designed with cinematic layouts, modern interaction patterns,
                  and premium visual hierarchy to create a memorable product
                  experience.
                </p>
              </div>
            </Container>
          </div>
        </div>
      </section>
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
            scroll
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
      <FooterSection />
    </main>
  );
}
