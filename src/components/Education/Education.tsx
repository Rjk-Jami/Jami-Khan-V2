"use client";

import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20">
      {/* Background with light streaks */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <div className="bg-primary/5 absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-accent/5 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold md:text-4xl">Education</h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full md:mx-0" />
        </div>

        {/* Education Card */}
        <div className="relative">
          {/* Card outline drawing animation */}
          <div className="absolute inset-0 rounded-2xl">
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <rect
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="15"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Glowing border pulse */}
          <div className="border-primary/30 absolute inset-0 -z-10 rounded-2xl border-2 blur-sm" />

          {/* Card content */}
          <div className="from-secondary/30 to-secondary/10 relative rounded-2xl border border-white/10 bg-gradient-to-br p-8 backdrop-blur-sm md:p-10">
            <div className="space-y-6">
              {/* Icon */}
              <div className="bg-primary/10 border-primary/20 inline-flex rounded-full border p-4">
                <GraduationCap className="text-primary h-8 w-8" />
              </div>

              {/* Degree */}
              <div className="space-y-2">
                <h3 className="text-foreground text-2xl font-bold md:text-3xl">
                  Bachelor of Science in Computer Science & Engineering
                </h3>
                <p className="text-primary text-lg font-medium">CSE</p>
              </div>

              {/* Institution */}
              <div className="text-muted-foreground flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="text-primary h-5 w-5" />
                  <span className="font-medium">Daffodil International University</span>
                </div>
                <span className="text-muted-foreground/50">•</span>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bangladesh</span>
                </div>
              </div>

              {/* Additional info */}
              <p className="text-muted-foreground leading-relaxed">
                Focused on software engineering, web development, algorithms, and database systems.
                Built a strong foundation in computer science principles and modern development
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
