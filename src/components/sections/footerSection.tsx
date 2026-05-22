"use client";

import { motion } from "framer-motion";
import Container from "../commons/Container";
import Link from "next/link";
import Image from "next/image";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sareh-azis-panegar/",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/sarehazispanegar",
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/sarehazispanegar",
  },
];

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-black pt-32"
      data-cursor-theme="light"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#f5f5f5_2px,transparent_2px),linear-gradient(to_bottom,#f5f5f5_2px,transparent_2px)] bg-size-[64px_64px]" />

      {/* Radial Fade */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,white_75%)]" />
      <Container>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="border-b border-neutral-200 pb-24"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">
            Connect with me
          </p>

          <h2 className="mt-8 max-w-5xl text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.9] tracking-[-0.08em] text-white">
            LET’S CRAFT
            <br />
            SOMETHING
            <br />
            AMAZING TOGETHER
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-400">
            Available for freelance projects, collaborations, and meaningful
            digital experiences.
          </p>

          <Link
            href="mailto:sarehazispanegar@gmail.com"
            className="group mt-12 inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-12 py-3 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white hover:text-black"
          >
            <span className="text-sm font-normal tracking-wide text-white transition-colors duration-300 group-hover:text-black">
              Send Email
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Image
                src="/icons/send.svg"
                alt="Send"
                width={18}
                height={18}
                className="object-contain"
              />
            </span>
          </Link>
        </motion.div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 text-sm text-neutral-400 md:flex-row md:items-center">
          <p>© 2026 Sareh Azis Panegar</p>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-neutral-200"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
