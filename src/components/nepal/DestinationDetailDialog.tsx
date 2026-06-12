"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Mountain,
  Award,
  FileText,
  MapPin,
  Compass,
  ArrowRight,
  X,
} from "lucide-react";
import { destinations } from "@/data/destinations";

interface DestinationDetailDialogProps {
  slug: string | null;
  onClose: () => void;
}

export function DestinationDetailDialog({
  slug,
  onClose,
}: DestinationDetailDialogProps) {
  const destination = destinations.find((d) => d.slug === slug);
  const [activeGalleryImg, setActiveGalleryImg] = useState(0);

  if (!destination) return null;

  return (
    <Dialog open={!!slug} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-white rounded-2xl">
        <DialogTitle className="sr-only">{destination.name}</DialogTitle>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <img
            src={destination.gallery[activeGalleryImg]}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="bg-[#C0392B] text-white font-[family-name:var(--font-space-grotesk)] mb-3">
              {destination.type}
            </Badge>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-white">
              {destination.name}
            </h2>
            <p className="text-white/80 mt-1 font-[family-name:var(--font-space-grotesk)]">
              <MapPin className="h-4 w-4 inline mr-1" />
              {destination.region} Region
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Gallery Thumbnails */}
        {destination.gallery.length > 1 && (
          <div className="flex gap-2 px-6 py-3 bg-[#ECF0F1]/30">
            {destination.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGalleryImg(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  activeGalleryImg === idx
                    ? "border-[#C0392B] shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`${destination.name} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <div className="p-6 sm:p-8">
          {/* Overview */}
          <div className="mb-8">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C3E50] mb-4">
              Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {destination.overview}
            </p>
          </div>

          {/* Key Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#ECF0F1]/50 rounded-xl p-4 text-center">
              <Calendar className="h-5 w-5 text-[#C0392B] mx-auto mb-2" />
              <div className="text-xs text-muted-foreground font-[family-name:var(--font-space-grotesk)] uppercase">
                Best Season
              </div>
              <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50] text-sm mt-1">
                {destination.bestSeason}
              </div>
            </div>
            <div className="bg-[#ECF0F1]/50 rounded-xl p-4 text-center">
              <Mountain className="h-5 w-5 text-[#C0392B] mx-auto mb-2" />
              <div className="text-xs text-muted-foreground font-[family-name:var(--font-space-grotesk)] uppercase">
                Altitude
              </div>
              <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50] text-sm mt-1">
                {destination.altitude}
              </div>
            </div>
            <div className="bg-[#ECF0F1]/50 rounded-xl p-4 text-center">
              <Award className="h-5 w-5 text-[#C0392B] mx-auto mb-2" />
              <div className="text-xs text-muted-foreground font-[family-name:var(--font-space-grotesk)] uppercase">
                Difficulty
              </div>
              <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50] text-sm mt-1">
                {destination.difficulty}
              </div>
            </div>
            <div className="bg-[#ECF0F1]/50 rounded-xl p-4 text-center">
              <FileText className="h-5 w-5 text-[#C0392B] mx-auto mb-2" />
              <div className="text-xs text-muted-foreground font-[family-name:var(--font-space-grotesk)] uppercase">
                Permits
              </div>
              <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50] text-sm mt-1">
                {destination.permits}
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          {/* Things to Do */}
          <div className="mb-8">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C3E50] mb-4">
              Things to Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {destination.thingsToDo.map((thing, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-[#ECF0F1]/30 rounded-lg"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-[#C0392B] text-white rounded-full text-xs flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-sm text-[#2C3E50]">{thing}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          {/* Getting There */}
          <div className="mb-8">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C3E50] mb-4">
              Getting There
            </h3>
            <div className="space-y-3">
              {destination.gettingThere.map((option, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-[#ECF0F1]/30 rounded-lg"
                >
                  <Compass className="h-5 w-5 text-[#F39C12] flex-shrink-0" />
                  <span className="text-sm text-[#2C3E50]">{option}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-8">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C3E50] mb-4">
              Nearby Attractions
            </h3>
            <div className="flex flex-wrap gap-2">
              {destination.nearbyAttractions.map((attr, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-[#F39C12]/10 text-[#F39C12] font-[family-name:var(--font-space-grotesk)]"
                >
                  {attr}
                </Badge>
              ))}
            </div>
          </div>

          {/* Map Embed */}
          <div className="mb-8 rounded-xl overflow-hidden border border-[#ECF0F1]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2d${destination.coordinates.lng}!3d${destination.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp`}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${destination.name}`}
              className="w-full"
            />
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              onClick={() => {
                onClose();
                const el = document.querySelector("#plan");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              size="lg"
              className="bg-[#C0392B] hover:bg-[#E74C3C] text-white font-[family-name:var(--font-space-grotesk)] rounded-full px-8 shadow-lg shadow-[#C0392B]/20"
            >
              Plan a Trip Here
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
