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
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "All"
      ? destinations
      : destinations.filter((d) => d.type === activeFilter);

  const displayed = showAll ? filtered : filtered.slice(0, 4);

  const handleViewAll = () => {
    if (showAll) {
      // Scroll back to top of destinations section
      const el = document.querySelector("#destinations");
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setActiveFilter("All");
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

  return (
    <section id="destinations" className="py-20 sm:py-28 bg-[#F9F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <Badge className="bg-[#C0392B]/10 text-[#C0392B] hover:bg-[#C0392B]/20 font-[family-name:var(--font-space-grotesk)] mb-4">
            Explore Nepal
          </Badge>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50]">
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
              onClick={() => { setActiveFilter(type); setShowAll(false); }}
              className={`px-4 py-2 rounded-full font-[family-name:var(--font-space-grotesk)] text-sm font-medium transition-all duration-300 ${
                activeFilter === type
                  ? "bg-[#C0392B] text-white shadow-md shadow-[#C0392B]/20"
                  : "bg-white text-[#2C3E50] hover:bg-[#ECF0F1] border border-[#ECF0F1]"
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((destination, index) => (
            <motion.div
              key={destination.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedSlug(destination.slug)}
                className="group w-full text-left bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#ECF0F1]/50 hover:border-[#C0392B]/20 hover:-translate-y-2"
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
                  <Badge className="absolute top-3 left-3 bg-white/90 text-[#2C3E50] backdrop-blur-sm font-[family-name:var(--font-space-grotesk)] text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    {destination.region}
                  </Badge>
                  {/* Hover CTA */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="bg-[#C0392B] text-white px-4 py-2 rounded-full font-[family-name:var(--font-space-grotesk)] text-sm flex items-center gap-1">
                      Explore <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#F39C12]/10 text-[#F39C12] text-xs font-[family-name:var(--font-space-grotesk)]"
                    >
                      {destination.type}
                    </Badge>
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#2C3E50] group-hover:text-[#C0392B] transition-colors">
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
            onClick={handleViewAll}
            variant="outline"
            size="lg"
            className="border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B] hover:text-white font-[family-name:var(--font-space-grotesk)] rounded-full px-8"
          >
            {showAll ? "Show Less" : "View All Destinations"}
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
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
