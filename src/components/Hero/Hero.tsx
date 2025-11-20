"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Code2, Sparkles } from "lucide-react";

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const scrollIndicatorY = useTransform(scrollY, [0, 500], [0, 200]);
    const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

    // Floating particles - 50 particles for rich effect
    const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        const newParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 2,
            duration: Math.random() * 15 + 15,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section
            ref={ref}
            className="relative min-h-screen w-full flex items-center justify-center bg-background perspective-1000"
        >
            {/* Background Gradients - Soft pulsing blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] dark:bg-purple-500/50  bg-purple-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4,
                    }}
                    className="absolute top-[40%] left-[50%] w-[50%] h-[50%] bg-purple-500/15 rounded-full blur-[100px]"
                />
            </div>

            {/* Floating Particles - Low gravity motion */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-gradient-to-br from-primary/40 to-blue-500/40 backdrop-blur-sm"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            y: [0, -150, 0],
                            x: [0, Math.sin(p.id) * 30, 0],
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
            >
                <div className="space-y-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium backdrop-blur-md shadow-lg shadow-primary/10"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Welcome to my digital space</span>
                    </motion.div>

                    {/* Headline with glow */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute inset-0 blur-3xl bg-gradient-to-r from-primary/30 to-blue-500/30"
                        />
                        <h1 className="relative text-5xl md:text-7xl font-bold tracking-tight pb-2">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="block"
                            >
                                Hi, I'm <span className="text-primary">Raihan Jami Khan</span>
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="block text-3xl md:text-5xl text-foreground/80 mt-4"
                            >
                                Front-end Developer & React / Next.js Enthusiast
                            </motion.span>
                        </h1>
                    </div>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Constantly learning, building, and improving … Frontend Developer from Bangladesh
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.5 }}
                            />
                            <span className="relative flex items-center gap-2">
                                See My Work <Code2 className="w-4 h-4" />
                            </span>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 rounded-full border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 font-medium transition-all"
                        >
                            <span className="flex items-center gap-2">
                                Get In Touch <Mail className="w-4 h-4" />
                            </span>
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{
                    y: scrollIndicatorY,
                    opacity: scrollIndicatorOpacity,
                }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 rounded-full border-2 border-primary/40 flex justify-center p-1.5 backdrop-blur-sm bg-background/20">
                    <motion.div
                        animate={{ y: [0, 14, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg shadow-primary/50"
                    />
                </div>
            </motion.div>
        </section>
    );
}
