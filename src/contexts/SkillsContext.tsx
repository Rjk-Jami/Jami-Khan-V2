"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
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
  SiRedux,
  SiReactquery,
  SiVite,
  SiNginx,
  SiJsonwebtokens,
  SiChartdotjs,
  SiSocketdotio,
  SiPostman,
  SiHoppscotch,
  SiPostgresql,
  SiPrisma,
  SiNestjs,
  SiShadcnui,
  SiMui,
  SiDaisyui,
  SiFramer,
} from "react-icons/si";
import { FaWpforms, FaWaveSquare } from "react-icons/fa";

export type ExpertiseLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
export type ViewMode = "grid" | "list";
export type GridSize = 4 | 5 | 6;

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  expertise: ExpertiseLevel;
}

export interface ExpertiseColors {
  border: string;
  hoverBorder: string;
  glow: string;
  text: string;
  bg: string;
}

interface SkillsContextType {
  skills: Skill[];
  categories: string[];
  expertiseLevels: string[];
  viewMode: ViewMode;
  gridSize: GridSize;
  selectedCategory: string;
  selectedExpertise: string;
  filteredSkills: Skill[];
  expertiseColors: Record<ExpertiseLevel, ExpertiseColors>;
  setViewMode: (mode: ViewMode) => void;
  setGridSize: (size: GridSize) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedExpertise: (expertise: string) => void;
}

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

// Static skills data
const skillsData: Skill[] = [
  // Frontend - Expert Level
  { name: "HTML5", icon: SiHtml5, category: "Frontend", expertise: "Expert" },
  { name: "CSS3", icon: SiCss3, category: "Frontend", expertise: "Expert" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend", expertise: "Expert" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend", expertise: "Advanced" },
  { name: "React.js", icon: SiReact, category: "Frontend", expertise: "Expert" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", expertise: "Advanced" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", expertise: "Expert" },
  { name: "Bootstrap", icon: SiBootstrap, category: "Frontend", expertise: "Advanced" },
  { name: "Redux", icon: SiRedux, category: "Frontend", expertise: "Advanced" },
  { name: "Zustand", icon: FaWaveSquare, category: "Frontend", expertise: "Intermediate" },
  { name: "React Query", icon: SiReactquery, category: "Frontend", expertise: "Advanced" },
  { name: "React Hook Form", icon: FaWpforms, category: "Frontend", expertise: "Advanced" },
  { name: "Material UI", icon: SiMui, category: "Frontend", expertise: "Advanced" },
  { name: "DaisyUI", icon: SiDaisyui, category: "Frontend", expertise: "Intermediate" },
  { name: "shadcn/ui", icon: SiShadcnui, category: "Frontend", expertise: "Advanced" },
  { name: "Framer Motion", icon: SiFramer, category: "Frontend", expertise: "Advanced" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, category: "Backend", expertise: "Advanced" },
  { name: "Express.js", icon: SiExpress, category: "Backend", expertise: "Advanced" },
  { name: "Nest.js", icon: SiNestjs, category: "Backend", expertise: "Intermediate" },
  { name: "Firebase", icon: SiFirebase, category: "Backend", expertise: "Advanced" },
  { name: "JWT", icon: SiJsonwebtokens, category: "Backend", expertise: "Advanced" },
  { name: "Socket.io", icon: SiSocketdotio, category: "Backend", expertise: "Intermediate" },

  // Database
  { name: "MongoDB", icon: SiMongodb, category: "Database", expertise: "Advanced" },
  { name: "MySQL", icon: SiMysql, category: "Database", expertise: "Intermediate" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database", expertise: "Advanced" },
  { name: "Prisma", icon: SiPrisma, category: "Database", expertise: "Advanced" },
  { name: "Redis", icon: SiRedis, category: "Database", expertise: "Intermediate" },

  // Tools
  { name: "Vite", icon: SiVite, category: "Tools", expertise: "Advanced" },
  { name: "Postman", icon: SiPostman, category: "Tools", expertise: "Expert" },
  { name: "Hoppscotch", icon: SiHoppscotch, category: "Tools", expertise: "Advanced" },

  // DevOps
  { name: "Nginx", icon: SiNginx, category: "DevOps", expertise: "Intermediate" },

  // Other
  { name: "Chart.js", icon: SiChartdotjs, category: "Other", expertise: "Intermediate" },
];

// Expertise color configurations
const expertiseColorsConfig: Record<ExpertiseLevel, ExpertiseColors> = {
  Beginner: {
    border: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/60",
    glow: "from-blue-500/20 to-blue-400/20",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  Intermediate: {
    border: "border-green-500/30",
    hoverBorder: "hover:border-green-500/60",
    glow: "from-green-500/20 to-green-400/20",
    text: "text-green-400",
    bg: "bg-green-500/10",
  },
  Advanced: {
    border: "border-purple-500/30",
    hoverBorder: "hover:border-purple-500/60",
    glow: "from-purple-500/20 to-purple-400/20",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  Expert: {
    border: "border-amber-500/30",
    hoverBorder: "hover:border-amber-500/60",
    glow: "from-amber-500/20 to-amber-400/20",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
  },
};

export function SkillsProvider({ children }: { children: ReactNode }) {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [gridSize, setGridSize] = useState<GridSize>(6);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedExpertise, setSelectedExpertise] = useState<string>("All");

  // Derive categories from skills
  const categories = ["All", ...Array.from(new Set(skillsData.map((s) => s.category)))];
  const expertiseLevels = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];

  // Filter skills based on selected filters
  const filteredSkills = skillsData.filter((skill) => {
    const categoryMatch = selectedCategory === "All" || skill.category === selectedCategory;
    const expertiseMatch = selectedExpertise === "All" || skill.expertise === selectedExpertise;
    return categoryMatch && expertiseMatch;
  });

  const value: SkillsContextType = {
    skills: skillsData,
    categories,
    expertiseLevels,
    viewMode,
    gridSize,
    selectedCategory,
    selectedExpertise,
    filteredSkills,
    expertiseColors: expertiseColorsConfig,
    setViewMode,
    setGridSize,
    setSelectedCategory,
    setSelectedExpertise,
  };

  return <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>;
}

export function useSkills() {
  const context = useContext(SkillsContext);
  if (context === undefined) {
    throw new Error("useSkills must be used within a SkillsProvider");
  }
  return context;
}
