"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { destinations, destinationTypes, type DestinationType } from "@/data/destinations";
import { DestinationDetailDialog } from "./DestinationDetailDialog";

export default function DestinationsSection() {
  const [activeFilter, setActiveFilter] = useState<DestinationType>("All");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? destinations
      : destinations.filter((d) => d.type === activeFilter);

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-nepal-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <Badge className="bg-nepal-crimson/10 text-nepal-crimson hover:bg-nepal-crimson/20 font-[family-name:var(--font-space-grotesk)] mb-4">
            Explore Nepal
          </Badge>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-nepal-slate">
            Featured Destinations
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From the soaring peaks of the Himalayas to the steamy jungles of the Terai,
            discover the places that make Nepal unforgettable.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {destinationTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-space-grotesk)] text-sm font-medium transition-all duration-300 ${
                activeFilter === type
                  ? "bg-nepal-crimson text-white shadow-md shadow-nepal-crimson/20"
                  : "bg-white text-nepal-slate hover:bg-nepal-mist border border-nepal-mist"
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((destination, index) => (
            <motion.div
              key={destination.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedSlug(destination.slug)}
                className="group w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-nepal-mist/50 hover:border-nepal-crimson/20 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Region Badge */}
                  <Badge className="absolute top-3 left-3 bg-white/90 text-nepal-slate backdrop-blur-sm font-[family-name:var(--font-space-grotesk)] text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    {destination.region}
                  </Badge>
                  {/* Hover CTA */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-nepal-crimson text-white px-4 py-2 rounded-full font-[family-name:var(--font-space-grotesk)] text-sm flex items-center gap-1">
                      Explore <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-nepal-gold/10 text-nepal-gold text-xs font-[family-name:var(--font-space-grotesk)]"
                    >
                      {destination.type}
                    </Badge>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-nepal-slate group-hover:text-nepal-crimson transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {destination.tagline}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-nepal-crimson text-nepal-crimson hover:bg-nepal-crimson hover:text-white font-[family-name:var(--font-space-grotesk)] rounded-full px-8"
          >
            View All Destinations
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Destination Detail Dialog */}
      <DestinationDetailDialog
        slug={selectedSlug}
        onClose={() => setSelectedSlug(null)}
      />
    </section>
  );
}
