"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const projects = [
    {
        id: 1,
        title: "Nimble Clothing",
        category: "E-Commerce Web App",
        image: "/projects/nimble-clothing.jpg",
        description: "A modern fashion-brand web application built with Next.js featuring product catalog, shopping cart, and seamless user experience.",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        links: { demo: "#", github: "https://github.com/Rjk-Jami/Nimble-Clothing" },
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 2,
        title: "Jami Khan Portfolio",
        category: "Personal Website",
        image: "/projects/portfolio.jpg",
        description: "My personal portfolio website showcasing projects, skills, and experience with modern animations and responsive design.",
        tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
        links: { demo: "#", github: "https://github.com/Rjk-Jami/Jami-Khan-V2" },
        color: "from-purple-500 to-pink-500",
    },
    {
        id: 3,
        title: "Nimble POS",
        category: "Point of Sale System",
        image: "/projects/nimble-pos.jpg",
        description: "A point-of-sale client application for managing inventory, sales, and customer data with real-time updates.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        links: { demo: "#", github: "https://github.com/Rjk-Jami/nimble-pos-client" },
        color: "from-orange-500 to-red-500",
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-[400px] w-full rounded-xl bg-secondary/20 border border-white/5 group perspective-1000"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
                className="absolute inset-4 flex flex-col justify-between rounded-xl bg-background/80 backdrop-blur-sm p-6 shadow-xl border border-white/10"
            >
                {/* Header */}
                <div className="flex justify-between items-start">
                    <div>
                        <span className={`text-xs font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent uppercase tracking-wider`}>
                            {project.category}
                        </span>
                        <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                    </div>
                    <div className="flex gap-2">
                        <a href={project.links.github} className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href={project.links.demo} className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity -z-10`} />
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section className="w-full py-20 px-6">
            <div className="max-w-6xl mx-auto space-y-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects that showcase my passion for building digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
