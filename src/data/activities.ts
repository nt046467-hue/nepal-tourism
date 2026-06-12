export interface Activity {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  description: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  bestSeason: string;
  image: string;
  highlights: string[];
}

export const activities: Activity[] = [
  {
    id: "trekking",
    name: "Trekking",
    icon: "🏔️",
    shortDescription: "Explore legendary trails from EBC to Annapurna",
    description:
      "Nepal is the trekking capital of the world. With over 3,000 km of trails ranging from gentle tea-house walks to extreme high-altitude expeditions, there's a trek for every fitness level. The Everest Base Camp, Annapurna Circuit, and Langtang Valley are just the beginning — hidden gems like the Manaslu Circuit, Kanchenjunga, and Upper Dolpo await the adventurous.",
    difficulty: "Moderate",
    bestSeason: "Mar–May, Sep–Nov",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    highlights: ["Everest Base Camp", "Annapurna Circuit", "Langtang Valley", "Manaslu Circuit"],
  },
  {
    id: "mountaineering",
    name: "Mountaineering",
    icon: "⛰️",
    shortDescription: "Climb peaks from 6,000m to the top of the world",
    description:
      "Nepal is home to 8 of the 14 peaks above 8,000m, including the legendary Sagarmatha (Everest) at 8,848m — the highest point on Earth. For those not ready for 8,000ers, climbing peaks like Mera Peak (6,476m) and Island Peak (6,189m) offer Himalayan summit experiences with technical climbing at manageable difficulty levels.",
    difficulty: "Challenging",
    bestSeason: "Apr–May, Sep–Oct",
    image: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=800&q=80",
    highlights: ["Mera Peak", "Island Peak", "Everest Expedition", "Ama Dablam"],
  },
  {
    id: "paragliding",
    name: "Paragliding",
    icon: "🪂",
    shortDescription: "Soar above lakes with the Annapurna range as backdrop",
    description:
      "Pokhara is one of the world's top paragliding destinations. Launch from Sarangkot hill at 1,592m and ride thermals above Phewa Lake with the Annapurna range filling the horizon. Tandem flights require no experience — just the courage to step off the mountain. Flights last 20-60 minutes depending on conditions, and the views of Machhapuchhre (Fishtail) from the air are unforgettable.",
    difficulty: "Easy",
    bestSeason: "Oct–Apr",
    image: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?w=800&q=80",
    highlights: ["Sarangkot Launch", "Tandem Flights", "Cross-Country", "Acrobatic Flights"],
  },
  {
    id: "rafting",
    name: "White Water Rafting",
    icon: "🛶",
    shortDescription: "Rush through Himalayan rapids from gentle to extreme",
    description:
      "Nepal's rivers, fed by Himalayan glaciers, offer some of the finest white water rafting on the planet. From the gentle Class II rapids of the Trishuli (perfect for beginners) to the intense Class V drops of the Bhote Koshi and Sun Koshi, there's a river for every thrill level. Multi-day expeditions on the Sun Koshi (270 km) combine camping on white-sand beaches with world-class rapids.",
    difficulty: "Moderate",
    bestSeason: "Sep–Dec, Mar–May",
    image: "/images/rafting.png",
    highlights: ["Trishuli River", "Bhote Koshi", "Sun Koshi", "Karnali River"],
  },
  {
    id: "safari",
    name: "Wildlife Safari",
    icon: "🐘",
    shortDescription: "Encounter rhinos, tigers, and exotic birds in the Terai",
    description:
      "Nepal's southern lowlands hide a completely different world from the mountains. Chitwan and Bardia National Parks are home to the greater one-horned rhinoceros, Bengal tiger, Asian elephant, gharial crocodile, and over 900 bird species. Jeep safaris, canoe rides, and guided jungle walks bring you thrillingly close to wildlife in their natural habitat.",
    difficulty: "Easy",
    bestSeason: "Oct–Mar",
    image: "/images/safari.png",
    highlights: ["Chitwan NP", "Bardia NP", "Rhino Spotting", "Bird Watching"],
  },
  {
    id: "bungee",
    name: "Bungee Jumping",
    icon: "🎯",
    shortDescription: "Free-fall 160m at The Last Resort near the Tibet border",
    description:
      "The Last Resort offers one of the world's most spectacular bungee jumps — a 160m free-fall into the Bhote Koshi gorge, just 12 km from the Tibet border. The Swiss-designed bridge sits above a tropical river valley, and the combination of height, scenery, and the thundering river below makes this an adrenalin experience like no other. Canyon swings and tandem jumps are also available.",
    difficulty: "Easy",
    bestSeason: "Year-round (best Oct–May)",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800&q=80",
    highlights: ["160m Free-Fall", "Canyon Swing", "Tandem Jump", "Bhote Koshi Gorge"],
  },
  {
    id: "cultural-tours",
    name: "Cultural Tours",
    icon: "🏛️",
    shortDescription: "Walk through living history — temples, palaces, and rituals",
    description:
      "Nepal's cultural heritage is as towering as its mountains. With 10 UNESCO World Heritage Sites, the Kathmandu Valley alone is an open-air museum. Watch Hindu sadhus at Pashupatinath, circle Boudhanath with Tibetan pilgrims, explore the living goddess tradition at Kumari Temple, and witness ancient Newari craftsmanship in Bhaktapur. Every temple, stupa, and durbar square tells a story spanning millennia.",
    difficulty: "Easy",
    bestSeason: "Year-round (best Oct–Mar)",
    image: "https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=800&q=80",
    highlights: ["Pashupatinath", "Boudhanath Stupa", "Bhaktapur Durbar", "Patan Museum"],
  },
  {
    id: "yoga-wellness",
    name: "Yoga & Wellness Retreats",
    icon: "🧘",
    shortDescription: "Find inner peace in the birthplace of meditation",
    description:
      "Nepal has been a spiritual destination for millennia. Yoga and meditation retreats in Kathmandu, Pokhara, and Lumbini offer everything from drop-in classes to month-long intensive courses. Practice yoga with views of the Himalayas, learn Vipassana meditation in a monastery, or attend a singing bowl therapy session. The birthplace of the Buddha offers a spiritual depth that few destinations can match.",
    difficulty: "Easy",
    bestSeason: "Year-round",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    highlights: ["Kathmandu Retreats", "Lumbini Meditation", "Singing Bowl Therapy", "Monastery Stays"],
  },
];

export const activityIcons: Record<string, string> = {
  trekking: "🏔️",
  mountaineering: "⛰️",
  paragliding: "🪂",
  rafting: "🛶",
  safari: "🐘",
  bungee: "🎯",
  "cultural-tours": "🏛️",
  "yoga-wellness": "🧘",
};
