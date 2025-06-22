"use client";

import { useState, useEffect } from "react";
import { Home } from "lucide-react";
import { useTheme } from "@/contextProvider/ThemeProvider";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const [experience, setExperience] = useState(0);
  const [projects, setProjects] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const experienceTimer = setInterval(() => {
      setExperience((prev) => (prev < 3 ? prev + 1 : 3)); // Adjust based on real experience
    }, 200);

    const projectsTimer = setInterval(() => {
      setProjects((prev) => (prev < 50 ? prev + 2 : 50)); // Adjust based on real project count
    }, 50);

    return () => {
      clearInterval(experienceTimer);
      clearInterval(projectsTimer);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="hidden xl:block mb-8">
        <Badge
          variant="outline"
          className={`border-purple-500/30 text-purple-400 ${
            theme === "dark" ? "bg-purple-500/10" : "bg-purple-500/5"
          }`}
        >
          <Home className="w-4 h-4 mr-2" />
          INTRODUCING
        </Badge>
      </div>

      <div className="space-y-6">
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Since 2021
        </p>

        <div className="space-y-4">
          <h1 className="text-5xl xl:text-7xl 2xl:text-8xl font-bold leading-tight">
            Hey! I’m
          </h1>
          <h1 className="text-5xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-purple-500">
            Jami Khan
          </h1>
        </div>

        <p
          className={`text-xl max-w-2xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          A dedicated{" "}
          <span className="gradient-text font-semibold">
            Frontend Developer
          </span>{" "}
          from Bangladesh, skilled in building interactive and responsive web
          apps using React, Next.js, and modern tools. Currently growing into a
          full-stack developer.
        </p>

        {/* Stats */}
        <div className="hidden xl:flex gap-20 pt-8">
          <div className="space-y-4">
            <div className="text-6xl font-bold gradient-text">
              {experience}+
            </div>
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              Years of
              <br />
              Experience
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-6xl font-bold gradient-text">{projects}+</div>
            <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
              Projects
              <br />
              Completed
            </p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-8">
          <p
            className={`mb-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Tech I love working with:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "MongoDB",
              "Redux Toolkit",
            ].map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 border border-purple-500/30 rounded-full text-sm text-purple-300 ${
                  theme === "dark" ? "bg-purple-500/10" : "bg-purple-500/5"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
