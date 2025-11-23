"use client";

import { ExternalLink, Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/components/asset/profile.png";

export default function ProfileCard() {
  return (
    <div className="mx-auto mt-20 xl:fixed xl:top-1/2 xl:left-8 xl:mx-0 xl:mt-0 xl:-translate-y-1/2 xl:transform 2xl:left-16">
      <div className="glass-effect bg-card/30 border-border/50 mx-auto w-80 rounded-3xl p-8 backdrop-blur-md 2xl:w-96">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-foreground text-2xl font-bold">Jami Khan</h2>
          <span className="text-muted-foreground text-sm">Frontend Developer</span>
        </div>

        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="relative mx-auto h-48 w-48">
            <div className="from-primary to-accent animate-pulse-slow absolute inset-0 rounded-full bg-gradient-to-r opacity-50 blur-xl"></div>
            <div className="border-primary/30 relative h-full w-full overflow-hidden rounded-full border-4">
              <Image src={profilePic} alt="Jami Khan" fill className="object-cover" priority />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mb-6 text-center">
          <p className="text-foreground text-lg font-medium">@raihanjamikhan</p>
          <p className="text-muted-foreground">Dhaka, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div className="mb-6 flex justify-center gap-4">
          {[
            { href: "https://www.facebook.com/rjk.jami", icon: Facebook },
            { href: "https://github.com/Rjk-Jami", icon: Github },
            { href: "https://linkedin.com/in/raihanjamikhan", icon: Linkedin },
          ].map(({ href, icon: Icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-primary/10 text-muted-foreground hover:text-primary rounded-full p-2 transition-colors"
            >
              <Icon size={20} />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="https://wa.me/8801786076080"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground hover:shadow-primary/25 group block w-full rounded-full px-6 py-3 text-center font-medium transition-all duration-300 hover:shadow-lg"
        >
          Hire Me!
          <ExternalLink
            size={16}
            className="ml-2 inline transition-transform group-hover:translate-x-1"
          />
        </Link>

        {/* Copyright */}
        <p className="text-muted-foreground/60 mt-6 text-center text-xs">
          © 2025 Jami Khan. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
