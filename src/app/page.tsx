"use client";

import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import Contact from "@/components/Contact/Contact";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
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
      className={`relative w-full min-h-screen overflow-x-hidden transition-colors duration-300 ${theme === "dark"
        ? "bg-black text-white"
        : "bg-gradient-to-br from-gray-50 to-white text-gray-900"
        }`}
    >
      <Navigation activeSection={activeSection} />

      <div className="flex flex-col xl:flex-row  relative w-full">

        {/* Fixed Profile Card */}
        <div className="xl:w-3/11  !2xl:w-4/12 mb-7 xl:mb-0">
          <ProfileCard />
        </div>

        {/* Main Content */}
        <div className="flex-1 z-10 mobile-padding">
          {/* ... existing imports */}

          {/* ... inside component */}
          <section id="hero" className="min-h-screen flex items-center">
            <Hero />
          </section>

          <section id="about" className="min-h-screen flex items-center py-10">
            <About />
          </section>

          <section id="skills" className="min-h-screen flex items-center py-20">
            <Skills />
          </section>

          <section
            id="experience"
            className="min-h-screen flex items-center py-20"
          >
            <Experience />
          </section>

          <section
            id="projects"
            className="min-h-screen flex items-center py-20"
          >
            <Projects />
          </section>

          <section
            id="education"
            className="min-h-screen flex items-center py-20"
          >
            <Education />
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center py-20"
          >
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}
