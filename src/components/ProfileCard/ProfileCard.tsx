"use client";

import { ExternalLink, Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/components/asset/profile.png";

export default function ProfileCard() {
  return (
    <div className="group relative mx-auto mt-20 w-fit overflow-hidden rounded-3xl border-2 border-white transition-shadow duration-500 hover:shadow-[0_0_45px_rgba(168,85,247,0.7)] xl:fixed xl:top-1/2 xl:left-8 xl:mx-0 xl:mt-0 xl:-translate-y-1/2 xl:transform 2xl:left-16">
      <div className="bg-card/30 relative mx-auto w-80 rounded-3xl p-8 backdrop-blur-md 2xl:w-96">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-foreground mt-auto text-2xl">Jami Khan</h2>
          <span className="-mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-sm font-bold text-transparent">
            Frontend Developer
          </span>
        </div>

        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="relative mx-auto h-48 w-48">
            <div className="from-primary to-accent absolute inset-0 rounded-full bg-gradient-to-r opacity-30 blur-xl"></div>

            <div className="border-primary/30 relative h-full w-full overflow-hidden rounded-full border-4">
              <Image src={profilePic} alt="Jami Khan" className="object-cover" priority />

              {/* Gloss Animation */}
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="gloss-animation absolute inset-0"></div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes gloss-sweep {
            0% {
              transform: translateX(-100%) translateY(-100%) rotate(45deg);
            }
            100% {
              transform: translateX(200%) translateY(200%) rotate(45deg);
            }
          }

          .gloss-animation {
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.1) 25%,
              rgba(255, 255, 255, 0.4) 50%,
              rgba(255, 255, 255, 0.1) 75%,
              rgba(255, 255, 255, 0) 100%
            );
            width: 100%;
            height: 100%;
            animation: gloss-sweep 3s ease-in-out infinite;
            pointer-events: none;
          }
        `}</style>

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

        {/* CTA */}
        <Link
          href="https://wa.me/8801786076080"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block w-full overflow-hidden rounded-full px-6 py-3 text-center font-medium transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/50"
        >
          {/* Default gradient */}
          <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 transition-opacity duration-500 ease-out group-hover:opacity-0"></span>

          {/* Hover gradient */}
          <span className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-400 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></span>

          <span className="relative z-10 flex items-center justify-center">
            Hire Me!
            <ExternalLink
              size={16}
              className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </Link>

        <p className="text-muted-foreground/60 mt-6 text-center text-xs">
          © 2025 Jami Khan. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
