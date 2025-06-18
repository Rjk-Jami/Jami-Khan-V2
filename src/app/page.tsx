"use client";

import Navigation from "@/components/Navigation/Navigation";
import { useTheme } from "@/contextProvider/ThemeProvider";
import { useState, useEffect } from "react";

export default function PortfolioContent() {
  const [activeSection, setActiveSection] = useState("hero");
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "contact",
      ];
      const currentPosition = window.pageYOffset + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-gradient-to-br from-gray-50 to-white text-gray-900"
      }`}
    >
      <Navigation activeSection={activeSection} />
      {/* Main Content */}
      <div className="flex-1 z-10 mobile-padding">
        <section id="hero" className="min-h-screen flex items-center">
          {/* <Hero /> */}
        </section>

        <section id="about" className="min-h-screen flex items-center py-20">
          {/* <About /> */}
        </section>

        <section id="skills" className="min-h-screen flex items-center py-20">
          {/* <Skills /> */}
        </section>

        <section
          id="experience"
          className="min-h-screen flex items-center py-20"
        >
          {/* <Experience /> */}
        </section>

        <section id="projects" className="min-h-screen flex items-center py-20">
          {/* <Projects /> */}
        </section>

        <section
          id="education"
          className="min-h-screen flex items-center py-20"
        >
          {/* <Education /> */}
        </section>

        <section id="contact" className="min-h-screen flex items-center py-20">
          {/* <Contact /> */}
        </section>
      </div>
    </main>
  );
}
