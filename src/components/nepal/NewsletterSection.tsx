"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setEmail("");
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch {
      // Silently handle
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative py-20 sm:py-24 bg-nepal-crimson overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="newsletter-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#newsletter-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Mail className="h-12 w-12 text-white/80 mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get Travel Tips &amp; Deals
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto text-lg">
            Subscribe to receive insider tips, seasonal travel alerts, and exclusive
            offers for your Nepal adventure.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-white"
            >
              <CheckCircle className="h-6 w-6" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-lg">
                Thank you for subscribing!
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/50 font-[family-name:var(--font-space-grotesk)] h-12 rounded-full px-6 focus:border-white"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-nepal-crimson hover:bg-white/90 font-[family-name:var(--font-space-grotesk)] rounded-full px-8 h-12 shadow-lg"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
