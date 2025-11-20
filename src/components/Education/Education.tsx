"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
    return (
        <section className="w-full py-20 px-6 relative overflow-hidden">
            {/* Background with light streaks */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
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
                    className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
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
                    className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                />

                {/* Gradient blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-4xl mx-auto space-y-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0 origin-left"
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
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
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
                        className="absolute inset-0 rounded-2xl border-2 border-primary/30 blur-sm -z-10"
                    />

                    {/* Card content */}
                    <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm border border-white/10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 2.2, duration: 0.8 }}
                            className="space-y-6"
                        >
                            {/* Icon */}
                            <div className="inline-flex p-4 rounded-full bg-primary/10 border border-primary/20">
                                <GraduationCap className="w-8 h-8 text-primary" />
                            </div>

                            {/* Degree */}
                            <div className="space-y-2">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Bachelor of Science in Computer Science & Engineering
                                </h3>
                                <p className="text-lg text-primary font-medium">CSE</p>
                            </div>

                            {/* Institution */}
                            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span className="font-medium">Daffodil International University</span>
                                </div>
                                <span className="text-muted-foreground/50">•</span>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>Bangladesh</span>
                                </div>
                            </div>

                            {/* Additional info */}
                            <p className="text-muted-foreground leading-relaxed">
                                Focused on software engineering, web development, algorithms, and database systems.
                                Built a strong foundation in computer science principles and modern development practices.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
