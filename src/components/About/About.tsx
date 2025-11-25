"use client";

import { Code, Database, Gauge, Layout, Server } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Layout className="text-primary h-6 w-6" />,
      title: "Frontend Architecture",
      desc: "Build scalable and performant interfaces using React and Next.js with modular components, optimized rendering, and clean UI architecture.",
    },
    {
      icon: <Code className="text-accent h-6 w-6" />,
      title: "Type-Safe & Maintainable Code",
      desc: "Write clean, type-safe TypeScript following industry best practices to ensure predictable behavior, maintainability, and long-term stability.",
    },
    {
      icon: <Server className="text-primary h-6 w-6" />,
      title: "Backend Engineering",
      desc: "Develop robust backend services using Node.js and Nest.js, implementing layered architectures, secure authentication, and high-performance REST APIs.",
    },
    {
      icon: <Database className="text-accent h-6 w-6" />,
      title: "Database & ORM Expertise",
      desc: "Design efficient data models with MongoDB and PostgreSQL, using Prisma for schema management, migrations, and reliable type-safe database operations.",
    },
    {
      icon: <Database className="text-primary h-6 w-6" />,
      title: "End-to-End Full-Stack Development",
      desc: "Build complete full-stack systems—from database architecture to frontend delivery—ensuring cohesive workflows, scalability, and efficient development lifecycles.",
    },
    {
      icon: <Gauge className="text-destructive h-6 w-6" />,
      title: "Performance Optimization",
      desc: "Optimize application performance across backend and frontend through efficient queries, caching, lazy loading, and scalable architecture patterns.",
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-5xl px-6">
      {/* Background Wave Layers */}
      <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-indigo-500/60 blur-[200px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-emerald-500 blur-[200px]" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 rounded-full bg-purple-500/80 blur-[200px]" />

      <div className="mx-auto max-w-3xl lg:mr-10 lg:ml-10 2xl:mx-auto 2xl:max-w-5xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
          </div>

          {/* Content Card - Enhanced Glassmorphism */}
          <div className="group relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] rounded-2xl blur-sm transition-opacity duration-500" />

            {/* Outer glow */}
            <div className="from-primary/10 to-accent/10 absolute -inset-4 rounded-3xl bg-gradient-to-br via-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* Glass card */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] p-8 shadow-2xl backdrop-blur-2xl md:p-10">
              {/* Inner shimmer effect */}
              <div className="from-primary/5 to-accent/5 absolute inset-0 bg-gradient-to-br via-transparent" />

              {/* Noise texture overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E\")",
                }}
              />

              {/* Content */}

              <div className="relative z-10 space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
                  <span className="mb-2 block">
                    I build modern, responsive frontend applications with{" "}
                    <span className="text-primary font-semibold">React.js</span> and{" "}
                    <span className="text-primary font-semibold">Next.js</span>.
                  </span>

                  <span className="mb-2 block">
                    I write clean, maintainable code, optimize performance, and create scalable
                    frontend architectures.
                  </span>

                  <span className="block">
                    From dynamic interfaces to seamless API integration, I deliver reliable and
                    engaging user experiences.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-secondary/30 hover:border-primary/50 hover:bg-secondary/50 border-primary/20 flex items-center gap-4 rounded-xl border p-5 backdrop-blur-sm transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
              >
                <div className="bg-background/50 relative rounded-lg p-3 shadow-sm">
                  {/* Icon glow */}
                  <div className="from-primary/20 to-accent/20 absolute inset-0 rounded-lg bg-gradient-to-br opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">{feature.icon}</div>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
