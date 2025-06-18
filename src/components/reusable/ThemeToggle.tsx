"use client"

import { useTheme } from "@/contextProvider/ThemeProvider"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-full transition-all duration-300 ${
        theme === "dark"
          ? "bg-white/10 hover:bg-white/20 text-yellow-400"
          : "bg-gray-900/10 hover:bg-gray-900/20 text-gray-900"
      }`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="animate-spin-slow" />
      ) : (
        <Moon size={20} className="animate-pulse" />
      )}
    </button>
  )
}
