"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiRedis,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, category: "Frontend" },
  { name: "CSS3", icon: SiCss3, category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
  { name: "React.js", icon: SiReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Bootstrap", icon: SiBootstrap, category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
  { name: "Express.js", icon: SiExpress, category: "Backend" },
  { name: "Firebase", icon: SiFirebase, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, category: "Database" },
  { name: "MySQL", icon: SiMysql, category: "Database" },
  { name: "Redis", icon: SiRedis, category: "Database" },
];

export default function Skills() {
  return (
    <section className="relative min-h-screen px-4 py-20 md:px-8" id="skills">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-primary/10 absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="bg-accent/10 absolute right-[-10%] bottom-[-20%] h-[60%] w-[60%] rounded-full blur-[120px]"
        />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.15]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="from-primary via-accent to-primary mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Skills & Technologies
          </h2>
          <div className="from-primary to-accent mx-auto mb-6 h-1 w-24 rounded-full bg-gradient-to-r" />
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My technical toolkit for building robust and scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="hover:border-primary/50 border-border/50 bg-card/40 hover:bg-card/60 relative h-full rounded-xl border p-6 backdrop-blur-sm transition-all duration-300">
                {/* Glow Effect on Hover */}
                <div className="from-primary/20 to-accent/20 absolute inset-0 -z-10 rounded-xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div
                    className="from-primary/50 via-accent/50 to-primary/50 absolute inset-0 rounded-xl bg-gradient-to-r blur-sm"
                    style={{
                      padding: "1px",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative flex flex-col items-center justify-center gap-4">
                  {/* Icon */}
                  <div className="group-hover:text-primary text-muted-foreground transition-colors duration-300">
                    <skill.icon className="h-12 w-12 md:h-14 md:w-14" />
                  </div>

                  {/* Skill Name */}
                  <span className="text-muted-foreground group-hover:text-foreground text-center text-sm font-medium transition-colors duration-300 md:text-base">
                    {skill.name}
                  </span>
                </div>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
