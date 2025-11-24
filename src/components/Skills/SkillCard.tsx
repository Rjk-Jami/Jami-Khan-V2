"use client";

import { motion } from "framer-motion";
import { useSkills } from "@/contexts/SkillsContext";
import type { Skill } from "@/contexts/SkillsContext";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCardGrid({ skill, index }: SkillCardProps) {
  const { expertiseColors } = useSkills();
  const colors = expertiseColors[skill.expertise];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative"
    >
      {/* Card Container */}
      <div
        className={`relative h-full rounded-xl border ${colors.border} ${colors.hoverBorder} bg-card/40 hover:bg-card/60 p-6 backdrop-blur-sm transition-all duration-300`}
      >
        {/* Glow Effect on Hover */}
        <div
          className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-r ${colors.glow} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center gap-3">
          {/* Icon */}
          <div className={`transition-colors duration-300 ${colors.text}`}>
            <skill.icon className="h-12 w-12 md:h-14 md:w-14" />
          </div>

          {/* Skill Name */}
          {/* <span className="text-foreground text-center text-sm font-medium transition-colors duration-300 md:text-base">
            {skill.name}
          </span> */}

          {/* Expertise Badge */}
          <span
            className={`${colors.bg} ${colors.text} rounded-full px-2 py-1 text-xs font-semibold`}
          >
            {skill.expertise}
          </span>
        </div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export function SkillCardList({ skill, index }: SkillCardProps) {
  const { expertiseColors } = useSkills();
  const colors = expertiseColors[skill.expertise];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      whileHover={{ x: 5 }}
      className="group relative"
    >
      <div
        className={`relative flex items-center gap-4 rounded-xl border ${colors.border} ${colors.hoverBorder} bg-card/40 hover:bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 md:gap-6 md:p-5`}
      >
        {/* Glow Effect on Hover */}
        <div
          className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-r ${colors.glow} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100`}
        />

        {/* Icon */}
        <div className={`transition-colors duration-300 ${colors.text}`}>
          <skill.icon className="h-10 w-10 md:h-12 md:w-12" />
        </div>

        {/* Skill Info */}
        <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-foreground text-base font-semibold md:text-lg">{skill.name}</span>
            <span className="text-muted-foreground text-xs md:text-sm">{skill.category}</span>
          </div>

          {/* Expertise Badge */}
          <span
            className={`${colors.bg} ${colors.text} w-fit rounded-full px-3 py-1 text-xs font-semibold md:text-sm`}
          >
            {skill.expertise}
          </span>
        </div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
