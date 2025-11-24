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
import { SkillsProvider } from "@/contexts/SkillsContext";
import { useState, useEffect } from "react";

export default function PortfolioContent() {
  const [activeSection, setActiveSection] = useState("hero");

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
          if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
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
    <main className="bg-background text-foreground relative min-h-screen w-full overflow-x-hidden transition-colors duration-300">
      <Navigation activeSection={activeSection} />

      <div className="relative flex w-full flex-col xl:flex-row">
        {/* Fixed Profile Card */}
        <div className="!2xl:w-4/12 mb-7 xl:mb-0 xl:w-3/11">
          <ProfileCard />
        </div>

        {/* Main Content */}
        <div className="mobile-padding z-10 flex-1">
          {/* ... existing imports */}

          {/* ... inside component */}
          <section id="hero" className="flex min-h-screen items-center">
            <Hero />
          </section>

          <section id="about" className="flex min-h-screen py-10">
            <About />
          </section>

          <section id="skills" className="flex min-h-screen py-10">
            <SkillsProvider>
              <Skills />
            </SkillsProvider>
          </section>

          <section id="experience" className="flex min-h-screen items-center py-10">
            <Experience />
          </section>

          <section id="projects" className="flex min-h-screen items-center py-10">
            <Projects />
          </section>

          <section id="education" className="flex min-h-screen items-center py-10">
            <Education />
          </section>

          <section id="contact" className="flex min-h-screen items-center py-10">
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}
