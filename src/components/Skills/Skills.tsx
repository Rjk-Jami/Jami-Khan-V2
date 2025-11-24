"use client";

import { motion } from "framer-motion";
import { useSkillsScroll } from "@/hooks/useSkillsScroll";
import { SkillsHeader } from "./SkillsHeader";
import { SkillsFilters } from "./SkillsFilters";
import { SkillsGrid } from "./SkillsGrid";

export default function Skills() {
  const { ref, y, opacity } = useSkillsScroll();

  return (
    <section className="relative mx-auto w-full max-w-5xl px-6" id="skills" ref={ref}>
      {/* Background gradient blobs - Parallax */}
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

      <div className="mx-auto max-w-3xl lg:mr-10 lg:ml-10 2xl:mx-auto 2xl:max-w-5xl">
        <motion.div style={{ opacity, y }} className="space-y-8">
          <SkillsHeader />
          <SkillsFilters />
          <SkillsGrid />
        </motion.div>
      </div>
    </section>
  );
}
