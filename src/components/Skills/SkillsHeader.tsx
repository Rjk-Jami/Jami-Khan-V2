"use client";

import { LayoutGrid, List } from "lucide-react";
import { useSkills } from "@/contexts/SkillsContext";
import type { GridSize } from "@/contexts/SkillsContext";

export function SkillsHeader() {
  const { viewMode, setViewMode, gridSize, setGridSize } = useSkills();

  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <h2 className="text-center text-3xl font-bold md:text-left md:text-4xl">
        Skills & Technologies
      </h2>

      {/* View Controls */}
      <div className="flex items-center justify-center gap-2">
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
          <div className="border-border/50 bg-card/40 flex gap-1 rounded-lg border p-1 backdrop-blur-sm transition-opacity">
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
          </div>
        )}
      </div>
    </div>
  );
}
