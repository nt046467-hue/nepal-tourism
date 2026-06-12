"use client";

import Navbar from "@/components/nepal/Navbar";
import ParallaxHero from "@/components/nepal/ParallaxHero";
import StatsSection from "@/components/nepal/StatsSection";
import DestinationsSection from "@/components/nepal/DestinationsSection";
import ActivitiesSection from "@/components/nepal/ActivitiesSection";
import { WhyNepalSection } from "@/components/nepal/WhyNepalSection";
import { BestTimeSection } from "@/components/nepal/BestTimeSection";
import TestimonialsSection from "@/components/nepal/TestimonialsSection";
import NewsletterSection from "@/components/nepal/NewsletterSection";
import TripPlannerSection from "@/components/nepal/TripPlannerSection";
import ContactSection from "@/components/nepal/ContactSection";
import Footer from "@/components/nepal/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-nepal-white">
      <Navbar />
      <main className="flex-1">
        <ParallaxHero />
        <StatsSection />
        <DestinationsSection />
        <ActivitiesSection />
        <WhyNepalSection />
        <BestTimeSection />
        <TestimonialsSection />
        <NewsletterSection />
        <TripPlannerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
