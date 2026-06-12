"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

function StatCounter({ value, suffix, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      start = Math.floor(eased * value);
      setCount(start);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(value);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-black text-[#C0392B]">
        {count}
        {suffix}
      </div>
      <div className="font-[family-name:var(--font-space-grotesk)] text-sm sm:text-base text-muted-foreground mt-2 tracking-wide uppercase">
        {label}
      </div>
    </motion.div>
  );
}

const stats: StatProps[] = [
  { value: 8, suffix: "", label: "Peaks above 8,000m" },
  { value: 3000, suffix: "+", label: "Trekking trails" },
  { value: 10, suffix: "", label: "UNESCO Heritage Sites" },
  { value: 125, suffix: "+", label: "Ethnic groups" },
];

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="relative py-16 sm:py-20 bg-white border-y border-[#ECF0F1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
