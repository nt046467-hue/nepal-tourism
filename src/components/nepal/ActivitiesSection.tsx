"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/data/activities";

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  Challenging: "bg-red-100 text-red-700",
};

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <Badge className="bg-[#F39C12]/10 text-[#F39C12] hover:bg-[#F39C12]/20 font-[family-name:var(--font-space-grotesk)] mb-4">
            Adventure Awaits
          </Badge>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50]">
            Top Activities
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From the world&apos;s highest trekking trails to jungle safaris and spiritual retreats,
            Nepal offers experiences found nowhere else on Earth.
          </p>
        </motion.div>

        {/* Activity Cards - Alternating layout */}
        <div className="space-y-12">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6 md:gap-10 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-3xl">{activity.icon}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#2C3E50]">
                  {activity.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge
                    className={`${difficultyColors[activity.difficulty]} font-[family-name:var(--font-space-grotesk)] text-xs border-0`}
                  >
                    {activity.difficulty}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="font-[family-name:var(--font-space-grotesk)] text-xs bg-[#ECF0F1]"
                  >
                    Best: {activity.bestSeason}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {activity.highlights.map((highlight) => (
                    <Badge
                      key={highlight}
                      variant="outline"
                      className="text-xs font-[family-name:var(--font-space-grotesk)] border-[#C0392B]/20 text-[#2C3E50]"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
