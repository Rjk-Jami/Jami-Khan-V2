"use client";

import { motion } from "framer-motion";
import { LayoutGrid, List } from "lucide-react";
import { useSkills } from "@/contexts/SkillsContext";
import type { GridSize } from "@/contexts/SkillsContext";

export function SkillsHeader() {
  const { viewMode, setViewMode, gridSize, setGridSize } = useSkills();

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center text-3xl font-bold md:text-left md:text-4xl"
      >
        Skills & Technologies
      </motion.h2>

      {/* View Controls */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", delay: 0.1 }}
        className="flex items-center justify-center gap-2"
      >
        {/* View Mode Toggle */}
        <div className="border-border/50 bg-card/40 flex gap-1 rounded-lg border p-1 backdrop-blur-sm">
          <button
            onClick={() => setViewMode("grid")}
            className={`rounded-md p-2 transition-all ${
              viewMode === "grid"
                ? "bg-primary text-primary-foreground shadow-primary/30 ring-primary/20 shadow-lg ring-2"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
            }`}
            title="Grid View"
          >
            <LayoutGrid className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`rounded-md p-2 transition-all ${
              viewMode === "list"
                ? "bg-primary text-primary-foreground shadow-primary/30 ring-primary/20 shadow-lg ring-2"
                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
            }`}
            title="List View"
          >
            <List className="h-4 w-4" />
          </button>
        </div>

        {/* Grid Size Selector (only visible in grid mode) */}
        {viewMode === "grid" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="border-border/50 bg-card/40 flex gap-1 rounded-lg border p-1 backdrop-blur-sm"
          >
            {[4, 5, 6].map((size) => (
              <button
                key={size}
                onClick={() => setGridSize(size as GridSize)}
                className={`rounded-md px-3 py-2 text-xs font-medium transition-all ${
                  gridSize === size
                    ? "bg-primary text-primary-foreground shadow-primary/30 ring-primary/20 shadow-lg ring-2"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                {size}
              </button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
