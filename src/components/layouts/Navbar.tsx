"use client";

import { motion } from "framer-motion";

import Container from "../commons/Container";

import Link from "next/link";

import { useEffect, useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Resume",
    href: "/sareh-azis-panegar-resume.pdf",
  },
];

export default function Navbar() {
  const [isFooter, setIsFooter] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Footer Detect
      const footer = document.getElementById("contact");

      if (footer) {
        const footerTop = footer.offsetTop;

        const scrollY = window.scrollY + 120;

        setIsFooter(scrollY >= footerTop);
      }

      // Home Active
      if (window.scrollY < 200) {
        setActiveSection("home");
      }

      // Active Section Detect
      const sections = ["home", "work", "about"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <Container>
        <motion.div
          animate={{
            backgroundColor: isFooter
              ? "rgba(0,0,0,0.65)"
              : "rgba(255,255,255,0.7)",

            borderColor: isFooter
              ? "rgba(255,255,255,0.08)"
              : "rgba(229,229,229,1)",
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            mx-auto mt-6 flex w-fit items-center
            rounded-full border
            px-4 py-3
            shadow-sm backdrop-blur-xl
          "
        >
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const isResume = item.label === "Resume";

              const isActive = activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target={isResume ? "_blank" : undefined}
                  rel={isResume ? "noopener noreferrer" : undefined}
                  className={`
                    group relative overflow-hidden
                    rounded-full
                    px-5 py-2
                    text-sm font-medium
                    transition-all duration-300
                    ${
                      isResume
                        ? isFooter
                          ? "bg-white text-black hover:bg-neutral-200"
                          : "bg-black text-white hover:bg-neutral-800"
                        : isActive
                          ? isFooter
                            ? "text-white"
                            : "text-black"
                          : isFooter
                            ? "text-neutral-300 hover:text-white"
                            : "text-neutral-500 hover:text-black"
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {item.label}
                  </span>

                  {/* Active Underline */}
                  {!isResume && isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className={`
                        absolute bottom-1 left-1/2
                        h-0.5 w-6
                        -translate-x-1/2 rounded-full
                        ${isFooter ? "bg-white" : "bg-black"}
                      `}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      </Container>
    </motion.header>
  );
}
