"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  // Floating particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative w-full overflow-hidden px-6 py-20">
      {/* Dark gradient background */}
      <div className="from-background via-background to-primary/5 absolute inset-0 -z-20 bg-gradient-to-br" />

      {/* Drifting star-like particles */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="bg-accent absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(p.id) * 30, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-2xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-primary mx-auto h-1 w-20 rounded-full"
          />
          <p className="text-muted-foreground mx-auto max-w-xl">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="relative space-y-6"
        >
          {/* Name Field */}
          <motion.div className="relative">
            <motion.div
              animate={{
                borderColor:
                  focusedField === "name" ? "hsl(var(--primary))" : "rgba(255,255,255,0.1)",
                boxShadow: focusedField === "name" ? "0 0 20px hsl(var(--primary) / 0.3)" : "none",
              }}
              className="bg-secondary/20 relative overflow-hidden rounded-xl border-2 backdrop-blur-sm"
            >
              <User className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                required
                className="text-foreground placeholder:text-muted-foreground/50 w-full bg-transparent px-12 py-4 outline-none"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.label
              animate={{
                y: focusedField === "name" || formData.name ? -32 : 0,
                scale: focusedField === "name" || formData.name ? 0.85 : 1,
                opacity: focusedField === "name" || formData.name ? 1 : 0,
              }}
              className="text-primary pointer-events-none absolute top-4 left-3 text-sm font-medium"
            >
              Name
            </motion.label>
          </motion.div>

          {/* Email Field */}
          <motion.div className="relative">
            <motion.div
              animate={{
                borderColor:
                  focusedField === "email" ? "hsl(var(--primary))" : "rgba(255,255,255,0.1)",
                boxShadow: focusedField === "email" ? "0 0 20px hsl(var(--primary) / 0.3)" : "none",
              }}
              className="bg-secondary/20 relative overflow-hidden rounded-xl border-2 backdrop-blur-sm"
            >
              <Mail className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                required
                className="text-foreground placeholder:text-muted-foreground/50 w-full bg-transparent px-12 py-4 outline-none"
                placeholder="your.email@example.com"
              />
            </motion.div>
            <motion.label
              animate={{
                y: focusedField === "email" || formData.email ? -32 : 0,
                scale: focusedField === "email" || formData.email ? 0.85 : 1,
                opacity: focusedField === "email" || formData.email ? 1 : 0,
              }}
              className="text-primary pointer-events-none absolute top-4 left-3 text-sm font-medium"
            >
              Email
            </motion.label>
          </motion.div>

          {/* Message Field */}
          <motion.div className="relative">
            <motion.div
              animate={{
                borderColor:
                  focusedField === "message" ? "hsl(var(--primary))" : "rgba(255,255,255,0.1)",
                boxShadow:
                  focusedField === "message" ? "0 0 20px hsl(var(--primary) / 0.3)" : "none",
              }}
              className="bg-secondary/20 relative overflow-hidden rounded-xl border-2 backdrop-blur-sm"
            >
              <MessageSquare className="text-muted-foreground pointer-events-none absolute top-6 left-4 h-5 w-5" />
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                required
                rows={5}
                className="text-foreground placeholder:text-muted-foreground/50 w-full resize-none bg-transparent px-12 py-4 outline-none"
                placeholder="Your message..."
              />
            </motion.div>
            <motion.label
              animate={{
                y: focusedField === "message" || formData.message ? -32 : 0,
                scale: focusedField === "message" || formData.message ? 0.85 : 1,
                opacity: focusedField === "message" || formData.message ? 1 : 0,
              }}
              className="text-primary pointer-events-none absolute top-4 left-3 text-sm font-medium"
            >
              Message
            </motion.label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-primary text-primary-foreground shadow-primary/25 relative w-full overflow-hidden rounded-xl px-8 py-4 font-medium shadow-lg"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="relative flex items-center justify-center gap-2"
              animate={{
                scale: submitted ? [1, 1.1, 1] : 1,
              }}
            >
              {submitted ? "Message Sent!" : "Send Message"}
              <motion.div
                animate={{
                  x: submitted ? [0, 5, 0] : 0,
                }}
                transition={{ duration: 0.5, repeat: submitted ? Infinity : 0 }}
              >
                <Send className="h-4 w-4" />
              </motion.div>
            </motion.span>
          </motion.button>
        </motion.form>

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-primary/10 border-primary/30 rounded-xl border p-6 text-center"
          >
            <p className="text-primary font-medium">
              Thank you for reaching out! I&apos;ll get back to you soon.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
