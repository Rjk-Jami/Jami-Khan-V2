"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Database, Gauge, Layout, Server } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Floating bubbles
  const [bubbles, setBubbles] = useState<
    { id: number; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

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
      icon: <Layout className="h-6 w-6 text-blue-400" />,
      title: "Frontend Architecture",
      desc: "Build scalable and performant interfaces using React and Next.js with modular components, optimized rendering, and clean UI architecture.",
    },
    {
      icon: <Code className="h-6 w-6 text-purple-400" />,
      title: "Type-Safe & Maintainable Code",
      desc: "Write clean, type-safe TypeScript following industry best practices to ensure predictable behavior, maintainability, and long-term stability.",
    },
    {
      icon: <Server className="h-6 w-6 text-green-400" />,
      title: "Backend Engineering",
      desc: "Develop robust backend services using Node.js and Nest.js, implementing layered architectures, secure authentication, and high-performance REST APIs.",
    },
    {
      icon: <Database className="h-6 w-6 text-orange-400" />,
      title: "Database & ORM Expertise",
      desc: "Design efficient data models with MongoDB and PostgreSQL, using Prisma for schema management, migrations, and reliable type-safe database operations.",
    },
    {
      icon: <Database className="h-6 w-6 text-yellow-400" />,
      title: "End-to-End Full-Stack Development",
      desc: "Build complete full-stack systems—from database architecture to frontend delivery—ensuring cohesive workflows, scalability, and efficient development lifecycles.",
    },
    {
      icon: <Gauge className="h-6 w-6 text-red-400" />,
      title: "Performance Optimization",
      desc: "Optimize application performance across backend and frontend through efficient queries, caching, lazy loading, and scalable architecture patterns.",
    },
  ];

  return (
    <section ref={ref} className="relative w-full px-6">
      {/* Background Wave Layers - Parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
        className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"
      />

      {/* Floating Bubbles */}
      <div className="pointer-events-none absolute inset-0 -z-5">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full border border-white/5 bg-gradient-to-br from-blue-500/60 to-blue-500/10 backdrop-blur-sm"
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

      <div className="mx-auto max-w-3xl lg:mr-10 lg:ml-10 2xl:mx-auto 2xl:max-w-5xl">
        <motion.div style={{ opacity, y }} className="space-y-12">
          {/* Header */}
          <div className="space-y-4 text-center md:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-3xl font-bold md:text-4xl"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary mx-auto h-1 w-20 origin-left rounded-full md:mx-0"
            />
          </div>

          {/* Content Card - Enhanced Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="group relative"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] rounded-2xl blur-sm transition-opacity duration-500" />

            {/* Outer glow */}
            <div className="from-primary/10 absolute -inset-4 rounded-3xl bg-gradient-to-br via-transparent to-blue-500/10 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* Glass card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] p-8 shadow-2xl backdrop-blur-2xl md:p-10">
              {/* Inner shimmer effect */}
              <div className="from-primary/5 absolute inset-0 bg-gradient-to-br via-transparent to-blue-500/5" />

              {/* Noise texture overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
                }}
              />

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-muted-foreground text-lg leading-relaxed md:text-xl"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mb-4 block"
                  >
                    I build modern, responsive web applications with{" "}
                    <span className="text-primary font-semibold">React.js</span> and{" "}
                    <span className="text-primary font-semibold">Next.js</span>, turning ideas into
                    seamless user experiences.
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mb-4 block"
                  >
                    I focus on writing clean, maintainable code, optimizing performance, and
                    ensuring scalable frontend architectures.
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mb-4 block"
                  >
                    From implementing dynamic interfaces to integrating backend APIs, I bridge
                    design and development to deliver reliable, user-friendly solutions.
                  </motion.span>

                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="block"
                  >
                    Passionate about learning new technologies, I constantly refine my skills and
                    contribute to projects that make an impact.
                  </motion.span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="group bg-secondary/30 hover:border-primary/50 hover:bg-secondary/50 flex items-center gap-4 rounded-xl border border-purple-400/20 p-5 backdrop-blur-sm transition-all hover:shadow-[0_0_20px_rgba(151,71,255,0.4)]"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="bg-background/50 relative rounded-lg p-3 shadow-sm"
                >
                  {/* Icon glow */}
                  <div className="from-primary/20 absolute inset-0 rounded-lg bg-gradient-to-br to-blue-500/20 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">{feature.icon}</div>
                </motion.div>
                <div>
                  <h3 className="text-foreground font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
