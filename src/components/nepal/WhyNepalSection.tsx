"use client";

import { motion } from "framer-motion";
import { Mountain, Users, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const whyNepal = [
  {
    icon: Mountain,
    title: "Natural Wonders",
    description:
      "8 of the world's 14 highest peaks, including Sagarmatha (Everest) at 8,848m — the highest point on Earth. From subtropical jungles to alpine meadows, Nepal packs more elevation change into 147,181 km² than any country on the planet.",
    color: "text-nepal-crimson",
    bgColor: "bg-nepal-crimson/10",
  },
  {
    icon: Users,
    title: "Cultural Richness",
    description:
      "125 ethnic groups speaking 123 languages, living alongside Hindu temples, Buddhist stupas, and animist shrines. Nepal's cultural tapestry is as dramatic as its topography — a living mosaic of traditions dating back millennia.",
    color: "text-nepal-gold",
    bgColor: "bg-nepal-gold/10",
  },
  {
    icon: DollarSign,
    title: "Affordability",
    description:
      "Nepal is one of the most budget-friendly travel destinations in the world. A comfortable trekking day costs $30–50, luxury lodges start at $80, and a hearty dal bhat costs $3–5. Your dream Himalayan adventure costs a fraction of equivalent trips elsewhere.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
];

export function WhyNepalSection() {
  return (
    <section className="py-20 sm:py-28 bg-nepal-white topo-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <Badge className="bg-nepal-crimson/10 text-nepal-crimson hover:bg-nepal-crimson/20 font-[family-name:var(--font-space-grotesk)] mb-4">
            Why Nepal
          </Badge>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-nepal-slate">
            Why Choose Nepal?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyNepal.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-nepal-mist/50 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div
                className={`${item.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <item.icon className={`h-8 w-8 ${item.color}`} />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-nepal-slate mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
