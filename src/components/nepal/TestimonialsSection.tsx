"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section className="py-20 sm:py-28 bg-[#ECF0F1]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <Badge className="bg-[#F39C12]/10 text-[#F39C12] hover:bg-[#F39C12]/20 font-[family-name:var(--font-space-grotesk)] mb-4">
            Travelers Say
          </Badge>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50]">
            What Travelers Say
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-[#ECF0F1]/50 text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonials[current].rating
                        ? "text-[#F39C12] fill-[#F39C12]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-[#2C3E50] leading-relaxed italic mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="space-y-1">
                <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50]">
                  {testimonials[current].flag} {testimonials[current].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[current].country} — {testimonials[current].trip}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? "bg-[#C0392B] w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 bg-white shadow-lg rounded-full p-2 hover:bg-[#C0392B] hover:text-white transition-colors border border-[#ECF0F1]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 bg-white shadow-lg rounded-full p-2 hover:bg-[#C0392B] hover:text-white transition-colors border border-[#ECF0F1]"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
