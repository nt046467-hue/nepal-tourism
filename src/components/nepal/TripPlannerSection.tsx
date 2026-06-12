"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plane,
  ShieldCheck,
  Pill,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Backpack,
} from "lucide-react";
import {
  itineraries,
  budgetEstimates,
  type BudgetOption,
} from "@/data/itineraries";
import { travelFAQs, packingChecklist } from "@/data/faqs";

function ItineraryTimeline() {
  return (
    <Tabs defaultValue="7" className="w-full">
      <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0 mb-8">
        {itineraries.map((it) => (
          <TabsTrigger
            key={it.duration}
            value={String(it.duration)}
            className="data-[state=active]:bg-[#C0392B] data-[state=active]:text-white font-[family-name:var(--font-space-grotesk)] rounded-full px-4 py-2 border border-[#ECF0F1] data-[state=active]:border-[#C0392B] data-[state=active]:shadow-md data-[state=active]:shadow-[#C0392B]/20"
          >
            {it.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {itineraries.map((itinerary) => (
        <TabsContent key={itinerary.duration} value={String(itinerary.duration)}>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#C0392B]/20 hidden sm:block" />

            <div className="space-y-4">
              {itinerary.days.map((day, idx) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex gap-4 sm:gap-6 items-start"
                >
                  {/* Day Badge */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#C0392B] text-white rounded-full flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold text-sm relative z-10">
                    D{day.day}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#ECF0F1]/50 hover:shadow-md transition-shadow">
                    <h4 className="font-[family-name:var(--font-playfair)] font-bold text-[#2C3E50]">
                      {day.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {day.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

function BudgetEstimator() {
  const [duration, setDuration] = useState("7");
  const [accommodation, setAccommodation] = useState("Mid-Range");

  const filtered = budgetEstimates.filter(
    (b) => b.duration === `${duration} Days` && b.accommodation === accommodation
  );
  const estimate = filtered[0] as BudgetOption | undefined;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[#2C3E50] mb-2 block">
            Trip Duration
          </label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="font-[family-name:var(--font-space-grotesk)]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 Days</SelectItem>
              <SelectItem value="7">7 Days</SelectItem>
              <SelectItem value="10">10 Days</SelectItem>
              <SelectItem value="14">14 Days</SelectItem>
              <SelectItem value="21">21 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[#2C3E50] mb-2 block">
            Accommodation
          </label>
          <Select value={accommodation} onValueChange={setAccommodation}>
            <SelectTrigger className="font-[family-name:var(--font-space-grotesk)]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Budget">Budget</SelectItem>
              <SelectItem value="Mid-Range">Mid-Range</SelectItem>
              <SelectItem value="Luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Estimate Display */}
      {estimate && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-[#C0392B]/5 to-[#F39C12]/5 rounded-2xl p-6 sm:p-8 border border-[#C0392B]/10"
        >
          <div className="text-center">
            <div className="font-[family-name:var(--font-space-grotesk)] text-sm text-muted-foreground mb-2">
              Estimated Budget
            </div>
            <div className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#C0392B]">
              {estimate.estimatedUSD}
            </div>
            <div className="font-[family-name:var(--font-space-grotesk)] text-sm text-muted-foreground mt-1">
              {estimate.estimatedNPR} NPR
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="font-[family-name:var(--font-space-grotesk)]">
                {duration} Days
              </Badge>
              <Badge variant="secondary" className="font-[family-name:var(--font-space-grotesk)]">
                {accommodation}
              </Badge>
              <Badge variant="secondary" className="font-[family-name:var(--font-space-grotesk)]">
                {estimate.activities}
              </Badge>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4 font-[family-name:var(--font-space-grotesk)]">
            * This is an estimate — contact us for a custom quote based on your specific needs.
          </p>
        </motion.div>
      )}
    </div>
  );
}

function TravelEssentials() {
  const essentials = [
    {
      icon: Plane,
      title: "Visa Info",
      description:
        "Tourist Visa on Arrival for most countries at Tribhuvan International Airport. Fees: $30 (15 days), $50 (30 days), $125 (90 days). Bring USD cash and passport photos.",
    },
    {
      icon: DollarSign,
      title: "Currency",
      description:
        "Nepali Rupee (NPR). ~132 NPR = 1 USD. ATMs available in Kathmandu and Pokhara. Carry cash for trekking routes.",
    },
    {
      icon: Pill,
      title: "Vaccinations",
      description:
        "Recommended: Hepatitis A & B, Typhoid, Tetanus, Rabies. Yellow Fever certificate required if arriving from endemic country. Consult your doctor about malaria prophylaxis for Terai.",
    },
    {
      icon: Phone,
      title: "Emergency Contacts",
      description:
        "Nepal Tourism Board: +977-1-4256909 | Tourist Police: +977-1-4247041 | Embassy services available in Kathmandu.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {essentials.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-white rounded-xl p-5 border border-[#ECF0F1]/50 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-[#C0392B]/10 rounded-lg flex items-center justify-center">
              <item.icon className="h-5 w-5 text-[#C0392B]" />
            </div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold text-[#2C3E50]">
              {item.title}
            </h4>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function PackingChecklistSection() {
  return (
    <Accordion type="multiple" className="w-full">
      {Object.entries(packingChecklist).map(([category, items], idx) => (
        <AccordionItem
          key={category}
          value={category}
          className="border-[#ECF0F1]/50"
        >
          <AccordionTrigger className="font-[family-name:var(--font-space-grotesk)] font-medium text-[#2C3E50] hover:text-[#C0392B] hover:no-underline">
            <div className="flex items-center gap-3">
              <Backpack className="h-4 w-4 text-[#F39C12]" />
              {category}
              <Badge
                variant="secondary"
                className="bg-[#ECF0F1] text-xs font-[family-name:var(--font-space-grotesk)]"
              >
                {items.length} items
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C0392B] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function FAQSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {travelFAQs.map((faq, idx) => (
        <AccordionItem
          key={idx}
          value={`faq-${idx}`}
          className="border-[#ECF0F1]/50"
        >
          <AccordionTrigger className="font-[family-name:var(--font-playfair)] text-left text-[#2C3E50] hover:text-[#C0392B] hover:no-underline text-base">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function TripPlannerSection() {
  const [activeTab, setActiveTab] = useState("itinerary");

  const tabs = [
    { id: "itinerary", label: "Itineraries", icon: Clock },
    { id: "budget", label: "Budget Calculator", icon: DollarSign },
    { id: "essentials", label: "Travel Essentials", icon: ShieldCheck },
    { id: "packing", label: "Packing Checklist", icon: Backpack },
    { id: "faq", label: "Travel FAQs", icon: MapPin },
  ];

  return (
    <section id="plan" className="py-20 sm:py-28 bg-[#F9F7F4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <Badge className="bg-[#C0392B]/10 text-[#C0392B] hover:bg-[#C0392B]/20 font-[family-name:var(--font-space-grotesk)] mb-4">
            Plan Your Adventure
          </Badge>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C3E50]">
            Trip Planner
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to plan your perfect Nepal trip — from sample
            itineraries to budget estimates and travel FAQs.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-[family-name:var(--font-space-grotesk)] text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#C0392B] text-white shadow-md shadow-[#C0392B]/20"
                  : "bg-white text-[#2C3E50] hover:bg-[#ECF0F1] border border-[#ECF0F1]"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "itinerary" && <ItineraryTimeline />}
          {activeTab === "budget" && <BudgetEstimator />}
          {activeTab === "essentials" && <TravelEssentials />}
          {activeTab === "packing" && <PackingChecklistSection />}
          {activeTab === "faq" && <FAQSection />}
        </motion.div>
      </div>
    </section>
  );
}
