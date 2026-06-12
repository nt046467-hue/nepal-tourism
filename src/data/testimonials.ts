export interface Testimonial {
  id: number;
  name: string;
  country: string;
  flag: string;
  rating: number;
  quote: string;
  trip: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    country: "Australia",
    flag: "🇦🇺",
    rating: 5,
    quote:
      "Standing at Kala Patthar at dawn, watching the first light hit Everest's summit — that single moment was worth every difficult step. Nepal changed how I see the world.",
    trip: "Everest Base Camp Trek",
  },
  {
    id: 2,
    name: "Marco Bianchi",
    country: "Italy",
    flag: "🇮🇹",
    rating: 5,
    quote:
      "The Annapurna Circuit is a journey through every landscape imaginable — from subtropical valleys to high-altitude desert. The hospitality of the teahouse owners made it even more special.",
    trip: "Annapurna Circuit",
  },
  {
    id: 3,
    name: "Emily Zhang",
    country: "Canada",
    flag: "🇨🇦",
    rating: 5,
    quote:
      "Paragliding over Pokhara with the Annapurna range as backdrop was surreal. But what truly captured my heart was the warmth of the Nepali people — I've never felt so welcome anywhere.",
    trip: "Pokhara Adventure",
  },
  {
    id: 4,
    name: "Thomas Weber",
    country: "Germany",
    flag: "🇩🇪",
    rating: 4,
    quote:
      "Upper Mustang feels like stepping into another century. The cave dwellings, the ancient monasteries, the desert landscape — it's unlike anything else in Nepal. Truly the last forbidden kingdom.",
    trip: "Upper Mustang Trek",
  },
  {
    id: 5,
    name: "Priya Sharma",
    country: "India",
    flag: "🇮🇳",
    rating: 5,
    quote:
      "Lumbini exceeded all expectations. The peace and serenity of the sacred garden, the beautiful international monasteries — it's a spiritual experience that stays with you forever.",
    trip: "Lumbini Pilgrimage",
  },
  {
    id: 6,
    name: "James Wilson",
    country: "UK",
    flag: "🇬🇧",
    rating: 5,
    quote:
      "The biodiversity in Chitwan blew my mind. Seeing a one-horned rhino from just 20 meters away on a jungle walk was absolutely thrilling. The Tharu cultural program was the perfect end to each day.",
    trip: "Chitwan Safari",
  },
];
