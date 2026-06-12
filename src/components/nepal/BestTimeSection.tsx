"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { seasons } from "@/data/faqs";
import { Sun, CloudRain, Leaf, Snowflake } from "lucide-react";

const seasonIcons: Record<string, React.ElementType> = {
  Spring: Sun,
  Summer: CloudRain,
  Autumn: Leaf,
  Winter: Snowflake,
};

export function BestTimeSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <Badge className="bg-[#F39C12]/10 text-[#F39C12] hover:bg-[#F39C12]/20 font-[family-name:var(--font-space-grotesk)] mb-4">
            Plan Ahead
          </Badge>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50]">
            Best Time to Visit
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Nepal welcomes visitors year-round, but timing your trip can make all the difference.
          </p>
        </motion.div>

        {/* Season Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {seasons.map((season, index) => {
            const Icon = seasonIcons[season.name] || Sun;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-300 ${
                  season.isPeak
                    ? "border-[#C0392B] bg-[#C0392B]/5 shadow-lg shadow-[#C0392B]/10"
                    : "border-[#ECF0F1] bg-white"
                }`}
              >
                {season.isPeak && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C0392B] text-white font-[family-name:var(--font-space-grotesk)] text-[10px] px-3">
                    Peak Season
                  </Badge>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${season.color}20` }}
                >
                  <Icon className="h-6 w-6" style={{ color: season.color }} />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2C3E50]">
                  {season.name}
                </h3>
                <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-muted-foreground mt-1">
                  {season.months}
                </p>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {season.description}
                </p>
                <div className="mt-3 space-y-1">
                  {season.activities.map((act) => (
                    <div
                      key={act}
                      className="text-xs font-[family-name:var(--font-space-grotesk)] text-[#2C3E50]"
                    >
                      • {act}
                    </div>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-[#ECF0F1]">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-xs text-muted-foreground">
                    🌡️ {season.temperature}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
