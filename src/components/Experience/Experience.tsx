"use client";

import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 2,
    role: "Jr. Executive (Developer)",
    company: "Pakiza Software Ltd",
    period: "Apr 2025 – Present",
    description:
      "Started my journey as a Junior Executive (Developer). Working on modern web applications, collaborating with team members, building reusable UI components, optimizing user experience, and learning new technologies while contributing to production-level projects.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Material UI",
      "Redux",
      "Formik",
      "Yup",
      "Zod",
      "React Hook Form",
      "Postman",
      "Figma",
    ],
  },
  // {
  //   id: 2,
  //   role: "Jr. Executive (Developer)",
  //   company: "Pakiza Software Ltd",
  //   period: "Apr 2025 – Present",
  //   description:
  //     "Started my journey as a Junior Executive (Developer). Working on modern web applications, collaborating with team members, building reusable UI components, optimizing user experience, and learning new technologies while contributing to production-level projects.",
  //   tags: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "JavaScript",
  //     "Tailwind CSS",
  //     "ShadCN UI",
  //     "Material UI",
  //     "Redux",
  //     "Formik",
  //     "Yup",
  //     "Zod",
  //     "React Hook Form",
  //     "Postman",
  //     "Figma",
  //   ],
  // },
];

export default function Experience() {
  return (
    <section className="mx-auto max-w-3xl px-6 lg:mr-10 lg:ml-10 2xl:mx-auto 2xl:max-w-5xl">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold md:text-4xl">Work Experience</h2>
        <div className="bg-primary mx-auto h-1 w-20 rounded-full md:mx-0" />
      </div>

      <div className="relative">
        {/* Vertical Line */}

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex flex-col gap-8 md:flex-row`}>
              {/* Timeline Dot */}
              <div
                className={`bg-background border-primary absolute top-2 z-10 h-4 w-4 rounded-full border-2 shadow-[0_0_10px_hsl(var(--primary)/0.5)] ${
                  index % 2 === 0 ? "right-2" : "left-2"
                }`}
              >
                <div className="bg-primary h-full w-full rounded-full opacity-50" />
              </div>

              {/* Content Card */}
              <div className={` ${index % 2 === 0 ? "md:text-right" : ""}`}>
                <div className="group bg-secondary/20 hover:bg-secondary/30 hover:border-primary/20 rounded-xl border border-white/5 p-6 transition-all">
                  <div
                    className={`mb-4 flex flex-col gap-2 ${
                      index % 2 === 0 ? "md:items-end" : "md:items-start"
                    }`}
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
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                    }`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
