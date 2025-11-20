"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Database, Layout, Server } from "lucide-react";

export default function About() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    // Floating bubbles
    const [bubbles, setBubbles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        const newBubbles = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 80 + 40,
            duration: Math.random() * 20 + 20,
            delay: Math.random() * 5,
        }));
        setBubbles(newBubbles);
    }, []);

    const features = [
        {
            icon: <Layout className="w-6 h-6 text-blue-400" />,
            title: "Frontend Architecture",
            desc: "Scalable React & Next.js applications",
        },
        {
            icon: <Code className="w-6 h-6 text-purple-400" />,
            title: "Clean Code",
            desc: "Maintainable, type-safe TypeScript",
        },
        {
            icon: <Server className="w-6 h-6 text-green-400" />,
            title: "Backend Integration",
            desc: "Node.js & MongoDB systems",
        },
        {
            icon: <Database className="w-6 h-6 text-orange-400" />,
            title: "Full Stack",
            desc: "End-to-end application development",
        },
    ];

    return (
        <section ref={ref} className="relative w-full py-20 px-6 overflow-hidden">
            {/* Background Wave Layers - Parallax */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"
            />

            {/* Floating Bubbles */}
            <div className="absolute inset-0 pointer-events-none -z-5">
                {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        className="absolute rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 backdrop-blur-sm border border-white/5"
                        style={{
                            left: `${bubble.x}%`,
                            top: `${bubble.y}%`,
                            width: bubble.size,
                            height: bubble.size,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.sin(bubble.id) * 50, 0],
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: bubble.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: bubble.delay,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-4xl mx-auto">
                <motion.div style={{ opacity, y }} className="space-y-12">
                    {/* Header */}
                    <div className="space-y-4 text-center md:text-left">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="text-3xl md:text-4xl font-bold"
                        >
                            About Me
                        </motion.h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0 origin-left"
                        />
                    </div>

                    {/* Content Card - Enhanced Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                        className="relative p-8 md:p-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl shadow-2xl"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-blue-500/5 -z-10 blur-xl" />

                        {/* Text with side-to-center reveal */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-lg md:text-xl leading-relaxed text-muted-foreground space-y-4"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="block"
                            >
                                I'm a passionate frontend developer from <span className="text-foreground font-medium">Bangladesh</span>, specializing in <span className="text-primary font-medium">React.js</span>, <span className="text-primary font-medium">Next.js</span>, and modern UI frameworks. I love creating web applications that are smooth, responsive, and scalable.
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                                className="block"
                            >
                                Beyond front-end, I sometimes build backend systems using <span className="text-primary font-medium">Node.js</span> and <span className="text-primary font-medium">MongoDB</span>.
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="block"
                            >
                                On GitHub, I work on projects like <span className="text-foreground font-medium">Nimble Clothing</span> (Next.js), my personal portfolio, and point-of-sale applications — always refining performance, usability, and architecture.
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9, duration: 0.6 }}
                                className="block"
                            >
                                When I'm not coding, I explore UI design, motion animations, and new web technologies.
                            </motion.span>
                        </motion.p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 + index * 0.1, duration: 0.6, type: "spring" }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                className="flex items-center gap-4 p-5 rounded-xl bg-secondary/30 border border-white/5 hover:bg-secondary/50 hover:border-white/10 transition-all backdrop-blur-sm"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="p-3 rounded-lg bg-background/50 shadow-sm"
                                >
                                    {feature.icon}
                                </motion.div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
