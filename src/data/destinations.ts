export interface Destination {
  slug: string;
  name: string;
  region: string;
  type: "Mountains" | "Cultural" | "Lakes" | "Wildlife" | "Religious" | "Adventure" | "Desert";
  tagline: string;
  description: string;
  overview: string;
  bestSeason: string;
  altitude: string;
  difficulty: string;
  permits: string;
  thingsToDo: string[];
  gettingThere: string[];
  nearbyAttractions: string[];
  image: string;
  gallery: string[];
  coordinates: { lat: number; lng: number };
}

export const destinations: Destination[] = [
  {
    slug: "kathmandu-valley",
    name: "Kathmandu Valley",
    region: "Bagmati",
    type: "Cultural",
    tagline: "Where ancient temples touch the sky",
    description:
      "The cultural heart of Nepal, home to 7 UNESCO World Heritage Sites and a living museum of Newari architecture.",
    overview:
      "Kathmandu Valley is a vibrant mosaic of ancient temples, palaces, and courtyards that have stood for centuries. The valley comprises three ancient cities — Kathmandu, Patan, and Bhaktapur — each with its own Durbar Square showcasing exquisite Newari craftsmanship. From the sacred Pashupatinath Temple on the banks of the Bagmati River to the iconic Boudhanath Stupa, the largest in Nepal, the valley is a spiritual epicenter. Winding alleys reveal hidden courtyards, bustling markets overflow with handicrafts, and the scent of incense and butter lamps fills the air. The valley sits at 1,400m elevation, surrounded by green hills and views of distant Himalayan peaks.",
    bestSeason: "Oct–Mar",
    altitude: "1,400m",
    difficulty: "Easy",
    permits: "None for valley sightseeing",
    thingsToDo: [
      "Explore Kathmandu Durbar Square and Kumari Temple",
      "Visit the sacred Pashupatinath Temple at dawn",
      "Circle Boudhanath Stupa with pilgrims",
      "Wander through Patan's museum and courtyards",
      "Experience sunrise at Nagarkot",
      "Shop for handicrafts in Thamel",
      "Taste Newari feast at a local restaurant",
    ],
    gettingThere: [
      "Direct international flights to Tribhuvan International Airport",
      "30-minute drive from airport to city center",
      "Tourist buses from Pokhara (6-7 hours)",
    ],
    nearbyAttractions: ["Nagarkot", "Dhulikhel", "Chandragiri Hill", "Shivapuri National Park"],
    image: "/images/nepal/kathmandu1.jpg",
    gallery: [
      "/images/nepal/kathmandu1.jpg",
      "/images/nepal/kathmandu2.jpg",
      "/images/nepal/kathmandu3.jpg",
      "/images/nepal/kathmandu4.jpg",
    ],
    coordinates: { lat: 27.7172, lng: 85.324 },
  },
  {
    slug: "pokhara",
    name: "Pokhara",
    region: "Gandaki",
    type: "Lakes",
    tagline: "Mirror of the mountains",
    description:
      "Nepal's adventure capital, where serene lakes reflect the Annapurna range and paragliders dance in thermals.",
    overview:
      "Pokhara is the jewel of Nepal — a city where nature's grandeur meets tranquil beauty. Phewa Lake sits at its heart, its still waters creating a perfect mirror of the Machhapuchhre (Fishtail) and Annapurna ranges. The city is the gateway to the Annapurna region treks and a hub for adventure sports. Sarangkot hill offers one of the world's finest sunrise panoramas, while Davis Falls and Gupteshwor Cave add geological wonder. Lakeside district buzzes with cafes, bookshops, and traveler stories. Whether you're paragliding above the lake, paddling a colorful boat, or simply watching the mountains change color at sunset, Pokhara is unforgettable.",
    bestSeason: "Sep–Nov, Mar–May",
    altitude: "827m–1,600m",
    difficulty: "Easy to Moderate",
    permits: "None for city exploration; ACAP for trekking",
    thingsToDo: [
      "Watch sunrise at Sarangkot",
      "Boat on Phewa Lake to Tal Barahi Temple",
      "Paraglide from Sarangkot to Lakeside",
      "Visit Davis Falls and Gupteshwor Cave",
      "Trek to Australian Camp or Dhampus",
      "Explore the International Mountain Museum",
      "Relax in Lakeside cafes and gardens",
    ],
    gettingThere: [
      "25-minute flight from Kathmandu",
      "Tourist bus from Kathmandu (6-7 hours)",
      "Private vehicle via Prithvi Highway",
    ],
    nearbyAttractions: ["Sarangkot", "Ghandruk", "Dhampus", "Poon Hill"],
    image: "/images/nepal/pokhara2.jpg",
    gallery: [
      "/images/nepal/pokhara2.jpg",
      "/images/nepal/pokhara3.jpg",
      "/images/pokhara.png",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    coordinates: { lat: 28.2096, lng: 83.9856 },
  },
  {
    slug: "everest-base-camp",
    name: "Everest Base Camp",
    region: "Koshi",
    type: "Mountains",
    tagline: "Stand at the roof of the world",
    description:
      "The legendary trek to the foot of 8,848m Sagarmatha — the highest point on Earth.",
    overview:
      "The Everest Base Camp trek is one of the world's most iconic journeys. Over 12-14 days, you traverse through Sherpa villages, ancient monasteries, and increasingly dramatic Himalayan scenery. The trail passes through Sagarmatha National Park, a UNESCO World Heritage Site, where yaks graze in high meadows and prayer flags snap in the wind. You'll cross suspension bridges over deep gorges, climb to Namche Bazaar — the Sherpa capital — and acclimatize among some of the friendliest people on Earth. At 5,364m, Base Camp offers a close-up view of the Khumbu Icefall and the towering Nuptse wall. Kala Patthar (5,545m) provides the defining view: Everest's summit pyramid, just 3 kilometers away.",
    bestSeason: "Mar–May, Sep–Nov",
    altitude: "5,364m (Base Camp), 5,545m (Kala Patthar)",
    difficulty: "Challenging",
    permits: "Sagarmatha National Park Permit, TIMS Card, Local Area Permit",
    thingsToDo: [
      "Trek through Namche Bazaar",
      "Visit Tengboche Monastery at sunrise",
      "Reach Everest Base Camp at 5,364m",
      "Climb Kala Patthar for Everest views",
      "Explore the Hillary Museum in Namche",
      "Walk across iconic suspension bridges",
      "Experience Sherpa hospitality in tea houses",
    ],
    gettingThere: [
      "35-minute flight from Kathmandu to Lukla",
      "Trek from Lukla to Base Camp (8-10 days)",
      "Helicopter tour available from Kathmandu",
    ],
    nearbyAttractions: ["Gokyo Lakes", "Kala Patthar", "Island Peak", "Ama Dablam Base Camp"],
    image: "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?w=800&q=80",
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
    ],
    coordinates: { lat: 28.0025, lng: 86.8528 },
  },
  {
    slug: "chitwan-national-park",
    name: "Chitwan National Park",
    region: "Madhesh",
    type: "Wildlife",
    tagline: "Where rhinos roam the jungle",
    description:
      "Nepal's first national park and a UNESCO World Heritage Site, home to one-horned rhinos, Bengal tigers, and gharial crocodiles.",
    overview:
      "Chitwan National Park is a world apart from Nepal's mountain landscapes. Located in the subtropical lowlands of the Terai, this 932 km² park is a biodiversity hotspot. The park is best known for its conservation success with the greater one-horned rhinoceros — numbers have rebounded from fewer than 100 to over 600. Bengal tigers prowl the sal forests, while gharial crocodiles bask along the Rapti and Narayani rivers. Jeep safaris, canoe rides, and guided jungle walks bring you face-to-face with wildlife. Tharu villages surround the park, and their cultural dance performances are a highlight of any visit. The park is accessible year-round, though the dry season (October–March) offers the best wildlife viewing.",
    bestSeason: "Oct–Mar",
    altitude: "110m–850m",
    difficulty: "Easy",
    permits: "National Park Entry Fee",
    thingsToDo: [
      "Jeep safari to spot rhinos and tigers",
      "Canoe ride on the Rapti River",
      "Jungle walk with expert naturalists",
      "Visit the Elephant Breeding Center",
      "Bird watching (over 500 species)",
      "Experience Tharu cultural dance",
      "Explore the Gharial Conservation Center",
    ],
    gettingThere: [
      "25-minute flight from Kathmandu to Bharatpur",
      "Tourist bus from Kathmandu (5-6 hours)",
      "Private vehicle via Prithvi Highway",
    ],
    nearbyAttractions: ["Bardia National Park", "Lumbini", "Devghat", "Begnas Lake"],
    image: "/images/nepal/chitwan3.jpg",
    gallery: [
      "/images/nepal/chitwan3.jpg",
      "/images/nepal/chitwan4.jpg",
      "/images/chitwan.png",
      "/images/safari.png",
    ],
    coordinates: { lat: 27.5, lng: 84.3333 },
  },
  {
    slug: "lumbini",
    name: "Lumbini",
    region: "Lumbini",
    type: "Religious",
    tagline: "Birthplace of the Enlightened One",
    description:
      "The sacred garden where Siddhartha Gautama was born — a pilgrimage site drawing millions from around the world.",
    overview:
      "Lumbini is one of the most sacred sites in the Buddhist world. It was here, in 623 BC, that Queen Maya Devi gave birth to Siddhartha Gautama, who would become the Buddha. The Maya Devi Temple, marking the exact birthplace, is a UNESCO World Heritage Site surrounded by a sacred garden. The monastic zone features stunning temples and monasteries built by Buddhist nations from around the world — each reflecting their unique architectural traditions. The Eternal Flame, the Ashoka Pillar erected in 249 BC, and the Puskarini (sacred pond) where the Buddha's first bath took place, all create an atmosphere of profound peace. The site spans over 5 square miles and can take a full day to explore.",
    bestSeason: "Oct–Mar",
    altitude: "150m",
    difficulty: "Easy",
    permits: "Lumbini Development Trust Entry Fee",
    thingsToDo: [
      "Visit Maya Devi Temple and birthplace marker",
      "See the ancient Ashoka Pillar",
      "Meditate in the Sacred Garden",
      "Tour international monasteries in the monastic zone",
      "Visit the Lumbini Museum",
      "Walk the peaceful canal-side paths",
      "Attend morning or evening puja ceremonies",
    ],
    gettingThere: [
      "45-minute flight from Kathmandu to Bhairahawa",
      "Tourist bus from Kathmandu (7-8 hours)",
      "Private vehicle via East-West Highway",
    ],
    nearbyAttractions: ["Kapilvastu", "Devdaha", "Ramagrama Stupa", "Tilaurakot"],
    image: "/images/nepal/lumbini1.jpg",
    gallery: [
      "/images/nepal/lumbini1.jpg",
      "/images/nepal/lumbini2.jpg",
      "/images/nepal/lumbini3.jpg",
      "/images/nepal/lumbini4.jpg",
    ],
    coordinates: { lat: 27.4833, lng: 83.2767 },
  },
  {
    slug: "annapurna-circuit",
    name: "Annapurna Circuit",
    region: "Gandaki",
    type: "Mountains",
    tagline: "The world's greatest trek",
    description:
      "A 160-230 km circuit through diverse landscapes, from rice paddies to the 5,416m Thorong La Pass.",
    overview:
      "The Annapurna Circuit is often called the greatest long-distance trek in the world. Over 14-20 days, you circumnavigate the Annapurna massif, traversing every climatic zone from subtropical forest to arid high-altitude desert. The trail crosses the legendary Thorong La Pass at 5,416m — one of the highest trekking passes on Earth. Along the way, you pass through Gurung, Thakali, and Manangi villages, each with distinct culture and cuisine. The Kali Gandaki Gorge — the world's deepest — slices between Annapurna I (8,091m) and Dhaulagiri (8,167m). The circuit offers an unparalleled diversity of landscapes: lush valleys, barren plateaus, glacial rivers, and towering peaks. Road construction has shortened some sections, but the high-altitude core remains pristine and magnificent.",
    bestSeason: "Mar–May, Sep–Nov",
    altitude: "760m–5,416m (Thorong La)",
    difficulty: "Challenging",
    permits: "ACAP Permit, TIMS Card",
    thingsToDo: [
      "Cross the 5,416m Thorong La Pass",
      "Visit Muktinath Temple (sacred to Hindus and Buddhists)",
      "Trek through the world's deepest gorge",
      "Experience the apple orchards of Marpha",
      "Soak in natural hot springs at Tatopani",
      "Explore the ancient cave city of Lo Manthang detour",
      "Watch sunrise over Annapurna range from Poon Hill",
    ],
    gettingThere: [
      "Drive from Kathmandu to Besisahar (5-6 hours)",
      "Start trek from Besisahar or Chame",
      "Fly out from Jomsom to Pokhara",
    ],
    nearbyAttractions: ["Poon Hill", "Muktinath", "Tilicho Lake", "Ghorepani"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
    ],
    coordinates: { lat: 28.6, lng: 84.1 },
  },
  {
    slug: "upper-mustang",
    name: "Upper Mustang",
    region: "Gandaki",
    type: "Desert",
    tagline: "The forbidden kingdom in the rain shadow",
    description:
      "An ancient Tibetan kingdom hidden behind the Annapurna range, with cave dwellings and desert landscapes.",
    overview:
      "Upper Mustang is Nepal's best-kept secret — a high-altitude desert that remained a restricted area until 1992. Often called 'the last forbidden kingdom,' it preserves a Tibetan Buddhist culture largely untouched by modernity. The landscape is otherworldly: eroded canyons in shades of red, brown, and purple; cave dwellings carved into cliff faces; and medieval villages with whitewashed walls. Lo Manthang, the ancient walled capital, is a living museum where the former Raja (king) still resides. The Tiji Festival in May is a three-day tantric ritual of myth and color. With annual rainfall under 250mm, Mustang is trekable even during the monsoon, making it unique among Nepal's destinations.",
    bestSeason: "Mar–Nov (including monsoon)",
    altitude: "2,800m–4,200m",
    difficulty: "Moderate",
    permits: "Upper Mustang Restricted Area Permit ($500 for 10 days), ACAP Permit",
    thingsToDo: [
      "Explore the walled city of Lo Manthang",
      "Visit ancient cave complexes",
      "Attend the Tiji Festival (May)",
      "Trek through stunning desert canyons",
      "Visit centuries-old monasteries",
      "Experience traditional Tibetan culture",
      "Discover hidden sky caves",
    ],
    gettingThere: [
      "20-minute flight from Pokhara to Jomsom",
      "Trek from Jomsom to Lo Manthang (3-4 days)",
      "Jeep drive from Jomsom available (road conditions vary)",
    ],
    nearbyAttractions: ["Muktinath", "Kagbeni", "Dhumba Lake", "Kali Gandaki Gorge"],
    image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    ],
    coordinates: { lat: 29.18, lng: 83.97 },
  },
  {
    slug: "rara-lake",
    name: "Rara Lake",
    region: "Karnali",
    type: "Lakes",
    tagline: "Nepal's hidden sapphire",
    description:
      "The largest lake in Nepal, pristine and remote, surrounded by pine forests and snow-capped peaks.",
    overview:
      "Rara Lake is Nepal's best-kept wilderness secret. At 2,990m elevation, this pristine alpine lake stretches 10.8 km² within Rara National Park, the country's smallest but most beautiful national park. The lake's waters shift between turquoise, emerald, and sapphire depending on the light. Surrounded by blue pine, rhododendron, and juniper forests, the area is home to musk deer, Himalayan black bear, and over 200 bird species. The remoteness of Rara — a 3-day trek from the nearest road — is precisely what preserves its magic. You might walk for hours without seeing another tourist. In winter, the lake partially freezes, and snow covers the surrounding peaks. In spring, rhododendrons bloom in profusion. This is Nepal at its most untouched and serene.",
    bestSeason: "Mar–May, Sep–Nov",
    altitude: "2,990m",
    difficulty: "Moderate",
    permits: "Rara National Park Entry Fee",
    thingsToDo: [
      "Walk the lake perimeter trail (full day)",
      "Camp under a sky full of stars",
      "Birdwatch for rare species",
      "Hike to Murma Top for panoramic views",
      "Explore Rara National Park's wildlife",
      "Visit nearby Thakur and Chhetri villages",
      "Photograph the lake at sunrise and sunset",
    ],
    gettingThere: [
      "45-minute flight from Nepalgunj to Talcha Airport",
      "3-day trek from Jumla",
      "Drive from Kathmandu (2-3 days, challenging road)",
    ],
    nearbyAttractions: ["Jumla", "Sinja Valley", "Shey Phoksando National Park", "Karnali River"],
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    ],
    coordinates: { lat: 29.53, lng: 82.08 },
  },
];

export const destinationTypes = [
  "All",
  "Mountains",
  "Cultural",
  "Lakes",
  "Wildlife",
  "Religious",
  "Adventure",
  "Desert",
] as const;

export type DestinationType = (typeof destinationTypes)[number];
