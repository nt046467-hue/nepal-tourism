"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#destinations", label: "Destinations" },
  { href: "#activities", label: "Activities" },
  { href: "#plan", label: "Trip Planner" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-[#ECF0F1]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className={`flex items-center gap-2 transition-colors ${
              isScrolled ? "text-[#2C3E50]" : "text-white"
            }`}
          >
            <Mountain className="h-7 w-7 text-[#C0392B]" />
            <span className="font-[family-name:var(--font-playfair)] text-xl font-bold">
              Discover Nepal
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-full font-[family-name:var(--font-space-grotesk)] text-sm font-medium transition-all duration-300 hover:bg-[#C0392B]/10 ${
                  isScrolled
                    ? "text-[#2C3E50] hover:text-[#C0392B]"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#plan")}
              className="ml-3 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-[family-name:var(--font-space-grotesk)] rounded-full px-6"
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-[#2C3E50]" : "text-white"
            }`}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-0 bg-white z-50 md:hidden"
          >
            <div className="flex items-center justify-between px-4 h-16">
              <div className="flex items-center gap-2">
                <Mountain className="h-7 w-7 text-[#C0392B]" />
                <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C3E50]">
                  Discover Nepal
                </span>
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-[#2C3E50]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 pt-20">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#2C3E50] hover:text-[#C0392B] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <Button
                onClick={() => handleNavClick("#plan")}
                className="mt-4 bg-[#C0392B] hover:bg-[#E74C3C] text-white font-[family-name:var(--font-space-grotesk)] rounded-full px-8 py-3 text-lg"
              >
                Plan Your Trip
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
