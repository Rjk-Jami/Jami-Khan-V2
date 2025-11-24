"use client";

import { useState } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code, label: "Skills" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "education", icon: GraduationCap, label: "Education" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function Navigation({ activeSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-1/2 right-8 z-50 hidden -translate-y-1/2 transform xl:block">
        <div className="glass-effect bg-card/30 border-border/50 space-y-4 rounded-full p-4 backdrop-blur-md">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`group relative block rounded-full p-3 transition-all duration-300 ${
                activeSection === id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
              title={label}
            >
              <Icon size={20} />
              <span className="bg-popover text-popover-foreground border-border absolute top-1/2 right-full mr-3 -translate-y-1/2 transform rounded border px-2 py-1 text-sm whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 flex gap-2 xl:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="glass-effect text-foreground bg-card/30 rounded-full p-3"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div className="glass-effect bg-card/30 border-border/50 absolute top-16 right-0 min-w-[200px] rounded-2xl border p-4 backdrop-blur-md">
            {navItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex w-full items-center gap-3 rounded-lg p-3 transition-all duration-300 ${
                  activeSection === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
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
  );
}
