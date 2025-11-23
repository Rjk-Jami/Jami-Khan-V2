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
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

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
      className="bg-background perspective-1000 relative flex min-h-screen w-full items-center justify-center"
    >
      {/* Background Gradients - Soft pulsing blobs */}
      <div className="pointer-events-none absolute inset-0">
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
          className="bg-primary/20 absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full blur-[120px]"
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
          className="bg-accent/20 absolute right-[-10%] bottom-[-20%] h-[60%] w-[60%] rounded-full blur-[120px]"
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
          className="bg-primary/20 absolute top-[40%] left-[50%] h-[50%] w-[50%] rounded-full blur-[100px]"
        />
      </div>

      {/* Floating Particles - Low gravity motion */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="from-accent/40 to-accent/40 absolute rounded-full bg-gradient-to-br backdrop-blur-sm"
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
        className="relative z-10 mx-auto max-w-3xl text-center lg:me-auto 2xl:mx-auto 2xl:max-w-5xl"
      >
        <div className="space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            className="bg-primary/10 border-primary/30 text-primary shadow-primary/10 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium shadow-lg backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4" />
            <span>Welcome to my digital space</span>
          </motion.div>

          {/* Headline with glow */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="from-primary/30 to-accent/30 absolute inset-0 bg-gradient-to-r blur-3xl"
            />
            <h1 className="relative pb-2 text-4xl font-bold tracking-tight md:text-6xl 2xl:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                Hi, I&apos;m <span className="text-primary">Raihan Jami Khan</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-foreground/80 mt-4 block text-2xl lg:text-3xl"
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
            className="text-md text-muted-foreground mx-auto max-w-3xl leading-relaxed md:text-xl"
          >
            Constantly learning, building, and improving …
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-primary text-primary-foreground shadow-primary/25 hover:shadow-primary/40 relative overflow-hidden rounded-full px-8 py-4 font-medium shadow-lg transition-all hover:shadow-xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative flex items-center gap-2">
                See My Work <Code2 className="h-4 w-4" />
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-primary/30 bg-background/50 hover:bg-primary/10 hover:border-primary/50 rounded-full border-2 px-8 py-4 font-medium backdrop-blur-sm transition-all"
            >
              <span className="flex items-center gap-2">
                Get In Touch <Mail className="h-4 w-4" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        style={{
          y: scrollIndicatorY,
          opacity: scrollIndicatorOpacity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer transition-transform hover:scale-110"
      >
        <div className="border-primary/40 bg-background/20 flex h-10 w-6 justify-center rounded-full border-2 p-1.5 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-primary shadow-primary/50 h-1.5 w-1.5 rounded-full shadow-lg"
          />
        </div>
      </motion.a>
    </section>
  );
}
