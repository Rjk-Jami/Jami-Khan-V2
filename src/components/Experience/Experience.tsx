"use client";

import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Personal & Open-Source Projects",
    period: "Ongoing",
    description:
      "Constantly working on personal and open-source projects using React, Next.js, TypeScript, and Node.js. Always learning, building, and improving — refining code quality, adding new features, and building scalable UI.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <section className="w-full px-6 py-20">
      <div className="mx-auto max-w-4xl space-y-16">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold md:text-4xl">Work Experience</h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full md:mx-0" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="from-primary/50 via-primary/20 absolute top-0 bottom-0 left-4 w-0.5 -translate-x-1/2 bg-gradient-to-b to-transparent md:left-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col gap-8 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="bg-background border-primary absolute left-4 z-10 mt-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-2 shadow-[0_0_10px_hsl(var(--primary)/0.5)] md:left-1/2">
                  <div className="bg-primary h-full w-full rounded-full opacity-50" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-12 flex-1 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}
                >
                  <div className="group bg-secondary/20 hover:bg-secondary/30 hover:border-primary/20 rounded-xl border border-white/5 p-6 transition-all">
                    <div
                      className={`mb-4 flex flex-col gap-2 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}
                    >
                      <h3 className="text-primary text-xl font-bold">{exp.role}</h3>
                      <div className="text-muted-foreground flex items-center gap-2 text-sm">
                        <Briefcase className="h-4 w-4" />
                        <span>{exp.company}</span>
                        <span className="mx-1">•</span>
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div
                      className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                    >
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for Alternate Side */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
