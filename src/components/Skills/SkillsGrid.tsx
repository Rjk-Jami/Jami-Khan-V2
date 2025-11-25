"use client";

import { useSkills } from "@/contexts/SkillsContext";
import { SkillCardGrid, SkillCardList } from "./SkillCard";

const gridCols = {
  4: "grid-cols-3 md:grid-cols-4",
  5: "grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
  6: "grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
};

export function SkillsGrid() {
  const { viewMode, gridSize, filteredSkills } = useSkills();

  if (filteredSkills.length === 0) {
    return (
      <div className="text-muted-foreground border-border/50 bg-card/40 flex min-h-[200px] items-center justify-center rounded-xl border p-8 text-center backdrop-blur-sm">
        <p className="text-lg">No skills found matching your filters.</p>
      </div>
    );
  }

  return (
    <div>
      {viewMode === "grid" ? (
        // Grid View
        <div className={`grid gap-4 md:gap-6 ${gridCols[gridSize]}`}>
          {filteredSkills.map((skill, index) => (
            <SkillCardGrid key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-3">
          {filteredSkills.map((skill, index) => (
            <SkillCardList key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
