import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contextProvider/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jami Khan | MERN Stack & Frontend Developer",
  description:
    "I'm Jami Khan, a passionate Frontend Developer from Bangladesh, specializing in React.js, Next.js, and the MERN stack. I craft scalable web apps with clean UI/UX and modern web technologies.",
  keywords:
    "Jami Khan, Frontend Developer, MERN Stack Developer, React Developer, Next.js, JavaScript, Web Developer Bangladesh, UI Developer, Portfolio",
  authors: [{ name: "Jami Khan" }],
  openGraph: {
    title: "Jami Khan | MERN Stack & Frontend Developer",
    description:
      "Explore the portfolio of Jami Khan — a skilled Frontend & MERN Stack Developer from Bangladesh, focused on building clean, modern, and user-friendly web apps.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
