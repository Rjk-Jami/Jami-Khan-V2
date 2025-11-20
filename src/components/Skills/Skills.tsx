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
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React.js", icon: SiReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  { name: "Redis", icon: SiRedis, color: "text-red-500" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Skills() {
  return (
    <section className="relative overflow-hidden px-4 md:px-8" id="skills">
      {/* Geometric Background Animation */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient blobs */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="bg-primary/10 absolute top-1/4 left-1/4 h-96 w-96 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />

        {/* Geometric lines */}
        <svg className="absolute inset-0 h-full w-full opacity-5">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 space-y-4 text-center md:text-left"
        >
          <h2 className="from-primary bg-gradient-to-r to-blue-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Skills & Technologies
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary mx-auto h-1 w-20 origin-left rounded-full md:mx-0"
          />
          <p className="text-muted-foreground mx-auto max-w-2xl md:mx-0">
            My technical toolkit for building robust and scalable applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                scale: 1.08,
                y: -8,
                rotateY: 5,
                rotateX: 5,
              }}
              className="group bg-secondary/30 hover:border-primary/50 perspective-1000 relative flex flex-col items-center justify-center rounded-xl border border-white/5 p-6 backdrop-blur-sm transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Glowing border effect */}
              <motion.div
                className="from-primary/0 to-primary/0 group-hover:from-primary/20 absolute inset-0 -z-10 rounded-xl bg-gradient-to-br blur-md transition-all duration-500 group-hover:to-blue-500/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              {/* Gradient overlay */}
              <div className="from-primary/5 absolute inset-0 rounded-xl bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Icon container with pulse */}
              <motion.div
                className="bg-background/50 group-hover:bg-background/80 group-hover:ring-primary/50 relative z-10 mb-4 rounded-full p-3 ring-1 ring-white/10 transition-colors duration-300"
                whileHover={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <skill.icon
                  className={`h-8 w-8 ${skill.color} transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(151,71,255,0.5)]`}
                />
              </motion.div>

              <span className="text-muted-foreground group-hover:text-foreground relative z-10 text-sm font-medium transition-colors">
                {skill.name}
              </span>

              {/* 3D depth effect */}
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                style={{ transform: "translateZ(10px)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
