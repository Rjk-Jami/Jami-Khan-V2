"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Personal & Open-Source Projects",
        period: "Ongoing",
        description: "Constantly working on personal and open-source projects using React, Next.js, TypeScript, and Node.js. Always learning, building, and improving — refining code quality, adding new features, and building scalable UI.",
        tags: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
    },
];

export default function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="w-full py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0" />
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full -translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(151,71,255,0.5)]">
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="w-full h-full bg-primary rounded-full opacity-50"
                                    />
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                    <div className="group p-6 rounded-xl bg-secondary/20 border border-white/5 hover:bg-secondary/30 transition-all hover:border-primary/20">
                                        <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                                            <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{exp.company}</span>
                                                <span className="mx-1">•</span>
                                                <Calendar className="w-4 h-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space for Alternate Side */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
