"use client"

import { useState } from "react"
import { Home, User, Code, Briefcase, FolderOpen, GraduationCap, Mail, Menu, X } from "lucide-react"
import { useTheme } from "@/contextProvider/ThemeProvider"
import ThemeToggle from "../reusable/ThemeToggle"


interface NavigationProps {
  activeSection: string
}

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <div
          className={`glass-effect rounded-full p-4 space-y-4 theme-transition ${
            theme === "dark" ? "bg-white/5" : "bg-black/5"
          }`}
        >
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`block p-3 rounded-full transition-all duration-300 group relative ${
                activeSection === id
                  ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                  : theme === "dark"
                    ? "text-gray-400 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-gray-900 hover:bg-black/10"
              }`}
              title={label}
            >
              <Icon size={20} />
              <span
                className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                  theme === "dark" ? "bg-black text-white" : "bg-white text-black border border-gray-200"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
          <div className="pt-2 border-t border-gray-600">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 xl:hidden flex gap-2">
        <ThemeToggle />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`glass-effect p-3 rounded-full theme-transition ${
            theme === "dark" ? "text-white bg-white/5" : "text-gray-900 bg-black/5"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div
            className={`absolute top-16 right-0 glass-effect rounded-2xl p-4 min-w-[200px] theme-transition ${
              theme === "dark" ? "bg-white/5" : "bg-black/5"
            }`}
          >
            {navItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white"
                    : theme === "dark"
                      ? "text-gray-300 hover:text-white hover:bg-white/10"
                      : "text-gray-700 hover:text-gray-900 hover:bg-black/10"
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
