"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-20">
      {/* Background with light streaks */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
            x: [-100, 100],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="via-primary/30 absolute top-1/4 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            x: [100, -100],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute top-2/3 left-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        />

        {/* Gradient blobs */}
        <div className="bg-primary/5 absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center md:text-left"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Education</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary mx-auto h-1 w-20 origin-left rounded-full md:mx-0"
          />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          {/* Card outline drawing animation */}
          <motion.div
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 rounded-2xl"
          >
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
                strokeDasharray="1000"
                strokeDashoffset="0"
                className="animate-draw-border"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(220 100% 50%)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Glowing border pulse */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="border-primary/30 absolute inset-0 -z-10 rounded-2xl border-2 blur-sm"
          />

          {/* Card content */}
          <div className="from-secondary/30 to-secondary/10 relative rounded-2xl border border-white/10 bg-gradient-to-br p-8 backdrop-blur-sm md:p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="space-y-6"
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
