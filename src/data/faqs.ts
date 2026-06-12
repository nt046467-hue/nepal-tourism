export interface FAQ {
  question: string;
  answer: string;
}

export const travelFAQs: FAQ[] = [
  {
    question: "Is Nepal safe for solo travelers?",
    answer:
      "Nepal is widely considered one of the safest countries in South Asia for solo travelers. The Nepali people are renowned for their hospitality and warmth. Violent crime against tourists is extremely rare. Basic precautions apply as anywhere — keep valuables secure, be cautious at night in isolated areas, and register with your embassy. Solo female travelers generally report feeling safe, though staring can be common in rural areas. Trekking solo is possible on popular routes, though a guide or porter is recommended for remote areas.",
  },
  {
    question: "Do I need a guide for trekking?",
    answer:
      "On popular routes like Everest Base Camp and Annapurna Circuit, a guide is not mandatory but highly recommended. Guides provide cultural insight, handle logistics, and are trained in altitude sickness recognition. For restricted areas (Upper Mustang, Upper Dolpo, Manaslu), a licensed guide is legally required. Porters can carry up to 20-25 kg, letting you enjoy the trek without heavy loads. Hiring a guide also supports the local economy — typical guide fees are $25-40/day including accommodation and meals.",
  },
  {
    question: "What's the best time to visit Nepal?",
    answer:
      "The best times are Spring (March–May) and Autumn (September–November). Autumn offers the clearest skies and best mountain views after monsoon clears the atmosphere. Spring brings rhododendron blooms and warmer temperatures. The monsoon (June–August) brings heavy rain but is ideal for Upper Mustang and Dolpo, which lie in the rain shadow. Winter (December–February) is great for lower altitude trips and Chitwan safaris, though high passes are often closed by snow.",
  },
  {
    question: "Can I extend my visa while in Nepal?",
    answer:
      "Yes, tourist visas can be extended at the Department of Immigration in Kathmandu or Pokhara. The fee is $30 for 15 days or $50 for 30 days. You can extend up to 150 days per calendar year. The process typically takes a few hours. Bring your passport, a copy of your current visa, and a passport-size photo. Overstaying incurs a fine of $3/day plus potential complications on departure.",
  },
  {
    question: "What currency should I carry?",
    answer:
      "The Nepali Rupee (NPR) is the local currency. Carry USD or EUR to exchange — these offer the best rates. ATMs are widely available in Kathmandu and Pokhara (maximum withdrawal typically NPR 35,000-40,000 per transaction). Credit cards are accepted at hotels and larger restaurants but carry 3-5% surcharges. For trekking, carry enough cash as ATMs are scarce above Namche Bazaar. Indian rupees (in denominations of 100 or less) are also accepted at a 1.6:1 rate.",
  },
  {
    question: "Do I need vaccinations for Nepal?",
    answer:
      "Recommended vaccinations include Hepatitis A & B, Typhoid, Tetanus, and Rabies. If arriving from a yellow-fever endemic country, a Yellow Fever certificate is required. Malaria is present in some Terai districts (including Chitwan) during monsoon — consult your doctor about prophylaxis. Altitude sickness (AMS) is a more pressing health concern for trekkers — always acclimatize properly and consider carrying Diamox after medical consultation.",
  },
  {
    question: "How do I get a visa for Nepal?",
    answer:
      "Tourist Visa on Arrival is available at Tribhuvan International Airport and major land borders for most nationalities. Fees: $30 for 15 days, $50 for 30 days, $125 for 90 days. Bring USD cash and a passport-size photo. You can also apply online via the Nepal Immigration portal before arrival. Indian nationals don't need a visa. Citizens of Nigeria, Ghana, Zimbabwe, Swaziland, Cameroon, Somalia, Liberia, Ethiopia, Iraq, Palestine, Afghanistan, and Syria need to apply in advance.",
  },
  {
    question: "What should I pack for trekking in Nepal?",
    answer:
      "Essential trekking gear includes: broken-in hiking boots, down jacket (-20°C rated), sleeping bag, thermal base layers, fleece mid-layer, waterproof shell, trekking poles, headlamp, water purification tablets/drops, first aid kit with Diamox, sunscreen (SPF 50+), sunglasses, and a good daypack. Most trekking gear can be rented in Kathmandu at a fraction of purchase cost. Pack light — 12-15 kg total is ideal. A detailed packing checklist is available in our Trip Planner section.",
  },
];

export const packingChecklist = {
  "Trekking Gear": [
    "Hiking boots (broken in)",
    "Down jacket (-20°C rated)",
    "Sleeping bag (-15°C rated)",
    "Trekking poles",
    "Headlamp + spare batteries",
    "Waterproof rain cover for backpack",
    "Gaiters (for snow)",
    "Crampons (for high passes in winter)",
  ],
  Clothing: [
    "Thermal base layers (merino wool)",
    "Fleece mid-layer / jacket",
    "Waterproof shell jacket",
    "Waterproof pants",
    "Trekking pants (2-3 pairs)",
    "Quick-dry t-shirts (3-4)",
    "Warm hat / beanie",
    "Sun hat / cap",
    "Gloves (fleece + shell)",
    "Socks (merino wool, 4-5 pairs)",
    "Down booties (for teahouses)",
  ],
  Documents: [
    "Passport (6+ months validity)",
    "Visa / visa photos (2)",
    "Travel insurance documents",
    "Trekking permits",
    "Flight tickets",
    "Emergency contacts card",
    "Photocopies of all documents",
  ],
  "Medical Kit": [
    "Diamox (for altitude sickness)",
    "Ibuprofen / Paracetamol",
    "Anti-diarrhea medication",
    "Antibiotics (prescribed)",
    "Blister treatment / plasters",
    "Water purification tablets/drops",
    "Sunscreen SPF 50+",
    "Lip balm with SPF",
    "Insect repellent",
    "Oral rehydration salts",
  ],
  Electronics: [
    "Phone + charger",
    "Power bank (20,000+ mAh)",
    "Camera + extra batteries",
    "Universal adapter",
    "Solar charger (for longer treks)",
    "Kindle / e-reader (optional)",
  ],
};

export const seasons = [
  {
    name: "Spring",
    months: "Mar–May",
    description: "Rhododendron forests in full bloom, warm days, clear mountain views",
    activities: ["Trekking", "Expeditions", "Paragliding", "Cultural tours"],
    temperature: "10–25°C",
    isPeak: true,
    color: "#E74C3C",
  },
  {
    name: "Summer",
    months: "Jun–Aug",
    description: "Monsoon season with lush green landscapes, best for rain-shadow areas",
    activities: ["Upper Mustang", "Dolpo Trek", "Yoga retreats", "Cultural tours"],
    temperature: "20–30°C",
    isPeak: false,
    color: "#27AE60",
  },
  {
    name: "Autumn",
    months: "Sep–Nov",
    description: "Crystal-clear skies, perfect visibility, festival season, best trekking",
    activities: ["Trekking", "Mountaineering", "Rafting", "Wildlife safari"],
    temperature: "8–22°C",
    isPeak: true,
    color: "#F39C12",
  },
  {
    name: "Winter",
    months: "Dec–Feb",
    description: "Cold but clear, best for lower altitude trips, Chitwan, and cultural tours",
    activities: ["Chitwan safari", "Cultural tours", "Yoga retreats", "Lower altitude treks"],
    temperature: "1–15°C",
    isPeak: false,
    color: "#3498DB",
  },
];
