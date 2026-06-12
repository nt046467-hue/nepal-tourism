"use client";

import { Mountain } from "lucide-react";

const footerLinks = {
  Destinations: [
    { label: "Kathmandu Valley", href: "#destinations" },
    { label: "Pokhara", href: "#destinations" },
    { label: "Everest Base Camp", href: "#destinations" },
    { label: "Chitwan", href: "#destinations" },
    { label: "Lumbini", href: "#destinations" },
    { label: "Upper Mustang", href: "#destinations" },
  ],
  Activities: [
    { label: "Trekking", href: "#activities" },
    { label: "Paragliding", href: "#activities" },
    { label: "Wildlife Safari", href: "#activities" },
    { label: "Rafting", href: "#activities" },
    { label: "Cultural Tours", href: "#activities" },
    { label: "Yoga Retreats", href: "#activities" },
  ],
  Resources: [
    { label: "Trip Planner", href: "#plan" },
    { label: "Budget Calculator", href: "#plan" },
    { label: "Packing Checklist", href: "#plan" },
    { label: "Travel FAQs", href: "#plan" },
    { label: "Contact Us", href: "#contact" },
  ],
};

const socialLinks = [
  { label: "Facebook", icon: "FB" },
  { label: "Instagram", icon: "IG" },
  { label: "Twitter", icon: "TW" },
  { label: "YouTube", icon: "YT" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-7 w-7 text-[#F39C12]" />
              <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white">
                Discover Nepal
              </span>
            </div>
            <p className="text-[#BDC3C7] leading-relaxed mb-6 max-w-sm text-sm">
              Your gateway to the Himalayas. We help travelers discover the magic
              of Nepal — from towering peaks to ancient temples and everything in
              between.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-[#C0392B] rounded-full flex items-center justify-center transition-colors font-[family-name:var(--font-space-grotesk)] text-xs font-bold text-white hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-[family-name:var(--font-space-grotesk)] font-semibold mb-4 text-[#ECF0F1]">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-[#BDC3C7] hover:text-[#F39C12] transition-colors text-sm font-[family-name:var(--font-space-grotesk)]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#95A5A6] text-sm font-[family-name:var(--font-space-grotesk)]">
            © {new Date().getFullYear()} Discover Nepal. All rights reserved.
          </p>
          <p className="text-[#95A5A6] text-sm font-[family-name:var(--font-space-grotesk)]">
            Made with ❤️ in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
