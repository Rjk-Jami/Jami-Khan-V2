"use client";

import { useState } from "react";
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

  return (
    <section className="relative w-full overflow-hidden px-6 py-20">
      {/* Dark gradient background */}
      <div className="from-background via-background to-primary/5 absolute inset-0 -z-20 bg-gradient-to-br" />

      <div className="mx-auto max-w-2xl space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <div className="bg-primary mx-auto h-1 w-20 rounded-full" />
          <p className="text-muted-foreground mx-auto max-w-xl">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative space-y-6">
          {/* Name Field */}
          <div className="relative">
            <div
              className="bg-secondary/20 relative overflow-hidden rounded-xl border-2 backdrop-blur-sm"
              style={{
                borderColor:
                  focusedField === "name" ? "hsl(var(--primary))" : "rgba(255,255,255,0.1)",
                boxShadow: focusedField === "name" ? "0 0 20px hsl(var(--primary) / 0.3)" : "none",
              }}
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
            </div>
            <label
              className="text-primary pointer-events-none absolute top-4 left-3 text-sm font-medium transition-all"
              style={{
                transform:
                  focusedField === "name" || formData.name
                    ? "translateY(-32px) scale(0.85)"
                    : "translateY(0) scale(1)",
                opacity: focusedField === "name" || formData.name ? 1 : 0,
              }}
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <div
              className="bg-secondary/20 relative overflow-hidden rounded-xl border-2 backdrop-blur-sm"
              style={{
                borderColor:
                  focusedField === "email" ? "hsl(var(--primary))" : "rgba(255,255,255,0.1)",
                boxShadow: focusedField === "email" ? "0 0 20px hsl(var(--primary) / 0.3)" : "none",
              }}
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
            </div>
            <label
              className="text-primary pointer-events-none absolute top-4 left-3 text-sm font-medium transition-all"
              style={{
                transform:
                  focusedField === "email" || formData.email
                    ? "translateY(-32px) scale(0.85)"
                    : "translateY(0) scale(1)",
                opacity: focusedField === "email" || formData.email ? 1 : 0,
              }}
            >
              Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <div
              className="bg-secondary/20 relative overflow-hidden rounded-xl border-2 backdrop-blur-sm"
              style={{
                borderColor:
                  focusedField === "message" ? "hsl(var(--primary))" : "rgba(255,255,255,0.1)",
                boxShadow:
                  focusedField === "message" ? "0 0 20px hsl(var(--primary) / 0.3)" : "none",
              }}
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
            </div>
            <label
              className="text-primary pointer-events-none absolute top-4 left-3 text-sm font-medium transition-all"
              style={{
                transform:
                  focusedField === "message" || formData.message
                    ? "translateY(-32px) scale(0.85)"
                    : "translateY(0) scale(1)",
                opacity: focusedField === "message" || formData.message ? 1 : 0,
              }}
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="group bg-primary text-primary-foreground shadow-primary/25 relative w-full overflow-hidden rounded-xl px-8 py-4 font-medium shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
            <span className="relative flex items-center justify-center gap-2">
              {submitted ? "Message Sent!" : "Send Message"}
              <div>
                <Send className="h-4 w-4" />
              </div>
            </span>
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className="bg-primary/10 border-primary/30 rounded-xl border p-6 text-center transition-opacity">
            <p className="text-primary font-medium">
              Thank you for reaching out! I&apos;ll get back to you soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
