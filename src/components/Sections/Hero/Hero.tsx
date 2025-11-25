"use client";

import { Mail, Code2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-background perspective-1000 relative flex min-h-screen w-full items-center justify-center">
      {/* Background Gradients - Soft pulsing blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full bg-purple-500/70 blur-[120px] 2xl:blur-[150px]" />
        <div className="absolute right-[-10%] bottom-[-20%] h-[60%] w-[60%] rounded-full bg-blue-500/70 blur-[120px] 2xl:blur-[150px]" />
        <div className="absolute top-[40%] left-[50%] h-[50%] w-[50%] rounded-full bg-emerald-300/70 blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center lg:me-auto 2xl:mx-auto 2xl:max-w-5xl">
        <div className="space-y-8">
          {/* Badge */}
          <div className="bg-primary/10 border-primary/30 text-primary shadow-primary/10 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium shadow-lg backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            <span>Welcome to my digital space</span>
          </div>

          {/* Headline with glow */}
          <div className="relative">
            <div className="from-primary/30 to-accent/30 absolute inset-0 bg-gradient-to-r opacity-50 blur-3xl" />
            <h1 className="relative pb-2 text-4xl font-bold tracking-tight md:text-6xl 2xl:text-7xl">
              <span className="block">
                Hi, I&apos;m <span className="text-primary">Raihan Jami Khan</span>
              </span>
              <span className="text-foreground/80 mt-4 block text-2xl lg:text-3xl">
                Front-end Developer & React / Next.js Enthusiast
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-md text-muted-foreground mx-auto max-w-3xl leading-relaxed md:text-xl">
            Constantly learning, building, and improving …
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <a
              href="#projects"
              className="group text-primary-foreground relative overflow-hidden rounded-full bg-white/10 px-8 py-4 font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
              <span className="relative flex items-center gap-2">
                See My Work <Code2 className="h-4 w-4" />
              </span>
            </a>

            <a
              href="#contact"
              className="group border-primary/30 bg-background/50 hover:bg-primary/10 hover:border-primary/50 rounded-full border-2 px-8 py-4 font-medium backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
            >
              <span className="flex items-center gap-2">
                Get In Touch <Mail className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer transition-transform hover:scale-110"
      >
        <div className="border-primary/40 bg-background/20 flex h-10 w-6 justify-center rounded-full border-2 p-1.5 backdrop-blur-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-white shadow-2xl shadow-purple-500/50" />
        </div>
      </a>
    </section>
  );
}
