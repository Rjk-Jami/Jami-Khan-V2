"use client";

import { useSkillsScroll } from "@/hooks/useSkillsScroll";
import { SkillsHeader } from "./SkillsHeader";
import { SkillsFilters } from "./SkillsFilters";
import { SkillsGrid } from "./SkillsGrid";

export default function Skills() {
  const { ref, y, opacity } = useSkillsScroll();

  return (
    <section className="relative mx-auto w-full max-w-5xl px-6" id="skills" ref={ref}>
      {/* Background gradient blobs - Optimized for mobile */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full bg-indigo-500/30 blur-3xl lg:blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[60%] w-[60%] rounded-full bg-blue-500/20 blur-3xl lg:blur-[120px]" />
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
        <div className="space-y-4 md:space-y-8">
          <SkillsHeader />
          <SkillsFilters />
          <SkillsGrid />
        </div>
      </div>
    </section>
  );
}
