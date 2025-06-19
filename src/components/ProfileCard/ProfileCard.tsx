"use client";

import { useTheme } from "@/contextProvider/ThemeProvider";
import { ExternalLink, Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/components/asset/profile.png";

export default function ProfileCard() {
  const { theme } = useTheme();

  return (
    <div className="xl:fixed xl:left-8 2xl:left-16 xl:top-1/2 xl:transform xl:-translate-y-1/2 mx-auto xl:mx-0 mt-20 xl:mt-0">
      <div
        className={`glass-effect rounded-3xl p-8 w-80 2xl:w-96 mx-auto theme-transition ${
          theme === "dark" ? "bg-white/5" : "bg-black/5"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold">
            Jami Khan
          </h2>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Frontend Developer
          </span>
        </div>

        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30">
              <Image
                src={profilePic}
                alt="Jami Khan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center mb-6">
          <p className="text-lg font-medium">@raihanjamikhan</p>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Dhaka, Bangladesh
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
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
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "hover:bg-purple-500/20"
                  : "hover:bg-purple-500/10"
              }`}
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
          className="block w-full text-center py-3 px-6 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group text-white"
        >
          Hire Me!
          <ExternalLink
            size={16}
            className="inline ml-2 group-hover:translate-x-1 transition-transform"
          />
        </Link>

        {/* Copyright */}
        <p
          className={`text-xs text-center mt-6 ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          © 2025 Jami Khan. All Rights Reserved
        </p>
      </div>
    </div>
  );
}
