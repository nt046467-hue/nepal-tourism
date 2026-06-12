"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ParallaxHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDown = () => {
    const statsSection = document.querySelector("#stats");
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          scale: 1.1,
        }}
      >
        <img
          src="/images/hero-himalayas.png"
          alt="Majestic Himalayan mountain range"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Parallax SVG Mountain Silhouette Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Far mountains - slowest parallax */}
        <svg
          className="absolute bottom-0 w-full"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,320 L0,220 Q120,120 240,180 Q360,80 480,160 Q600,60 720,140 Q840,40 960,120 Q1080,60 1200,100 Q1320,140 1440,80 L1440,320 Z"
            fill="rgba(44,62,80,0.3)"
          />
        </svg>

        {/* Mid mountains - medium parallax */}
        <svg
          className="absolute bottom-0 w-full"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,320 L0,260 Q80,200 160,240 Q240,160 360,220 Q440,140 560,200 Q640,120 760,180 Q880,100 1000,160 Q1100,120 1200,140 Q1340,180 1440,120 L1440,320 Z"
            fill="rgba(44,62,80,0.4)"
          />
        </svg>

        {/* Near mountains - fastest parallax */}
        <svg
          className="absolute bottom-0 w-full"
          style={{ transform: `translateY(${scrollY * 0.35}px)` }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,320 L0,280 Q100,240 200,270 Q300,220 400,260 Q520,200 640,250 Q720,210 840,240 Q960,190 1080,230 Q1200,200 1320,220 Q1400,240 1440,210 L1440,320 Z"
            fill="rgba(192,57,43,0.25)"
          />
        </svg>

        {/* Closest fog layer */}
        <svg
          className="absolute bottom-0 w-full"
          style={{ transform: `translateY(${scrollY * 0.45}px)` }}
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,120 L0,80 Q180,40 360,70 Q540,20 720,60 Q900,30 1080,50 Q1260,70 1440,40 L1440,120 Z"
            fill="rgba(249,247,244,0.15)"
          />
        </svg>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6"
        >
          Where the World
          <br />
          <span className="text-nepal-gold">Meets the Sky</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-[family-name:var(--font-space-grotesk)] text-lg sm:text-xl md:text-2xl text-white/90 mb-10 tracking-wide"
        >
          Trek. Explore. Experience Nepal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => {
              const el = document.querySelector("#destinations");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            size="lg"
            className="bg-nepal-crimson hover:bg-nepal-red text-white font-[family-name:var(--font-space-grotesk)] rounded-full px-8 py-6 text-lg shadow-lg shadow-nepal-crimson/30 transition-all hover:shadow-xl hover:shadow-nepal-crimson/40"
          >
            Explore Destinations
          </Button>
          <Button
            onClick={() => {
              const el = document.querySelector("#plan");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            size="lg"
            variant="outline"
            className="border-2 border-white/80 text-white hover:bg-white/20 font-[family-name:var(--font-space-grotesk)] rounded-full px-8 py-6 text-lg bg-transparent"
          >
            Plan Your Trip
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
