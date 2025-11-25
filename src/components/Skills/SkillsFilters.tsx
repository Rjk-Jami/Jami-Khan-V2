"use client";

import { useSkills } from "@/contexts/SkillsContext";
import type { ExpertiseLevel } from "@/contexts/SkillsContext";

export function SkillsFilters() {
  const {
    categories,
    expertiseLevels,
    selectedCategory,
    selectedExpertise,
    setSelectedCategory,
    setSelectedExpertise,
    expertiseColors,
    viewMode,
  } = useSkills();
  //filters
  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div className="space-y-2">
        {viewMode === "list" && (
          <label className="text-muted-foreground text-sm font-medium">Category</label>
        )}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "border-primary/70 bg-primary text-primary-foreground shadow-primary/30 ring-primary/20 shadow-lg ring-2"
                  : "border-border/50 bg-card/40 text-muted-foreground hover:border-primary/50 hover:bg-card/60 hover:text-foreground backdrop-blur-sm"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Expertise Filter */}
      <div className="space-y-2">
        {viewMode === "list" && (
          <label className="text-muted-foreground text-sm font-medium">Expertise Level</label>
        )}
        <div className="flex flex-wrap gap-2">
          {expertiseLevels.map((level) => {
            const isSelected = selectedExpertise === level;
            const isAll = level === "All";
            const colors = !isAll ? expertiseColors[level as ExpertiseLevel] : null;

            return (
              <button
                key={level}
                onClick={() => setSelectedExpertise(level)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                  isSelected
                    ? isAll
                      ? "border-primary/70 bg-primary text-primary-foreground shadow-primary/30 ring-primary/20 shadow-lg ring-2"
                      : `${colors?.border.replace("/30", "/70")} ${colors?.bg.replace("/10", "/20")} ${colors?.text} shadow-lg ring-2 ${colors?.border.replace("border-", "ring-").replace("/30", "/20")}`
                    : "border-border/50 bg-card/40 text-muted-foreground hover:border-primary/50 hover:bg-card/60 hover:text-foreground backdrop-blur-sm"
                }`}
              >
                {level}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
