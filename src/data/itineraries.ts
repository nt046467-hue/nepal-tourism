export interface DayPlan {
  day: number;
  title: string;
  description: string;
}

export interface Itinerary {
  duration: number;
  label: string;
  days: DayPlan[];
}

export const itineraries: Itinerary[] = [
  {
    duration: 5,
    label: "5 Days",
    days: [
      { day: 1, title: "Arrive in Kathmandu", description: "Airport pickup, explore Thamel, welcome dinner with cultural show" },
      { day: 2, title: "Kathmandu Valley Tour", description: "Visit Swayambhunath, Pashupatinath, Boudhanath, and Patan Durbar Square" },
      { day: 3, title: "Fly to Pokhara", description: "Lakeside exploration, boat on Phewa Lake, visit Davis Falls" },
      { day: 4, title: "Sarangkot Sunrise & Adventure", description: "Dawn sunrise over Annapurna range, optional paragliding, afternoon at leisure" },
      { day: 5, title: "Return to Kathmandu", description: "Fly back, last-minute shopping, departure" },
    ],
  },
  {
    duration: 7,
    label: "7 Days",
    days: [
      { day: 1, title: "Arrive in Kathmandu", description: "Airport pickup, explore Thamel, welcome dinner" },
      { day: 2, title: "Kathmandu Heritage Tour", description: "Swayambhunath, Pashupatinath, Boudhanath, Kathmandu Durbar Square" },
      { day: 3, title: "Fly to Pokhara", description: "Phewa Lake, Lakeside cafes, sunset views" },
      { day: 4, title: "Sarangkot & Adventure Day", description: "Sunrise at Sarangkot, paragliding or zip-line, International Mountain Museum" },
      { day: 5, title: "Drive to Chitwan", description: "Scenic drive to Chitwan, Tharu village walk, cultural dance evening" },
      { day: 6, title: "Chitwan Safari Day", description: "Jeep safari, canoe ride, elephant breeding center, jungle walk" },
      { day: 7, title: "Return to Kathmandu", description: "Drive or fly back, departure" },
    ],
  },
  {
    duration: 10,
    label: "10 Days",
    days: [
      { day: 1, title: "Arrive in Kathmandu", description: "Airport pickup, Thamel exploration, welcome dinner" },
      { day: 2, title: "Kathmandu Heritage Tour", description: "Full day exploring 4 UNESCO sites" },
      { day: 3, title: "Fly to Pokhara", description: "Afternoon lakeside leisure, Davis Falls, Gupteshwor Cave" },
      { day: 4, title: "Trek to Ghandruk", description: "Drive to Nayapul, trek to Gurung village of Ghandruk (1,940m)" },
      { day: 5, title: "Ghandruk to Tadapani", description: "Trek through rhododendron forests to Tadapani (2,630m)" },
      { day: 6, title: "Tadapani to Ghorepani", description: "Trek to Ghorepani (2,860m), sunset views" },
      { day: 7, title: "Poon Hill Sunrise & Return", description: "Pre-dawn hike to Poon Hill (3,210m), trek down to Nayapul, drive to Pokhara" },
      { day: 8, title: "Pokhara Adventure Day", description: "Paragliding, boating, or relaxation day" },
      { day: 9, title: "Fly to Kathmandu", description: "Bhaktapur Durbar Square, Nagarkot sunset" },
      { day: 10, title: "Departure", description: "Sunrise at Nagarkot, return to Kathmandu, departure" },
    ],
  },
  {
    duration: 14,
    label: "14 Days",
    days: [
      { day: 1, title: "Arrive in Kathmandu", description: "Airport pickup, welcome dinner, trip briefing" },
      { day: 2, title: "Kathmandu Sightseeing", description: "UNESCO heritage sites, trip preparation" },
      { day: 3, title: "Fly to Lukla, Trek to Phakding", description: "Scenic mountain flight, begin Everest Base Camp trek" },
      { day: 4, title: "Phakding to Namche Bazaar", description: "Enter Sagarmatha National Park, cross suspension bridges" },
      { day: 5, title: "Acclimatization Day", description: "Explore Namche Bazaar, Everest View Hotel hike" },
      { day: 6, title: "Namche to Tengboche", description: "Visit famous Tengboche Monastery with mountain backdrop" },
      { day: 7, title: "Tengboche to Dingboche", description: "Trek through alpine meadows, stunning Ama Dablam views" },
      { day: 8, title: "Acclimatization Day", description: "Hike to Nagarjun Hill for panoramic views" },
      { day: 9, title: "Dingboche to Lobuche", description: "Memorial site for fallen climbers, stark high-altitude landscape" },
      { day: 10, title: "Lobuche to Gorak Shep", description: "Reach Gorak Shep, afternoon hike to Everest Base Camp" },
      { day: 11, title: "Kala Patthar & Return", description: "Pre-dawn climb to Kala Patthar (5,545m), trek back to Pheriche" },
      { day: 12, title: "Pheriche to Namche", description: "Downhill trek with celebration dinner" },
      { day: 13, title: "Namche to Lukla", description: "Final trek day, farewell with trekking crew" },
      { day: 14, title: "Fly to Kathmandu & Departure", description: "Morning flight to Kathmandu, departure or extension" },
    ],
  },
  {
    duration: 21,
    label: "21 Days",
    days: [
      { day: 1, title: "Arrive in Kathmandu", description: "Airport pickup, welcome dinner, briefing" },
      { day: 2, title: "Kathmandu Heritage Tour", description: "Full day sightseeing of UNESCO sites" },
      { day: 3, title: "Drive to Besisahar", description: "Begin Annapurna Circuit, drive to trailhead" },
      { day: 4, title: "Besisahar to Chame", description: "Trek through waterfalls and pine forests" },
      { day: 5, title: "Chame to Pisang", description: "First views of Annapurna II and Pisang Peak" },
      { day: 6, title: "Pisang to Manang", description: "High trail with stunning views, visit Braga Monastery" },
      { day: 7, title: "Acclimatization in Manang", description: "Hike to Ice Lake or Gangapurna Glacier" },
      { day: 8, title: "Manang to Yak Kharka", description: "Gradual ascent, views of Tilicho Peak" },
      { day: 9, title: "Yak Kharka to Thorong Phedi", description: "Prepare for high pass crossing" },
      { day: 10, title: "Cross Thorong La Pass", description: "Summit 5,416m pass at dawn, descend to Muktinath" },
      { day: 11, title: "Muktinath to Marpha", description: "Visit Muktinath Temple, apple orchards of Marpha" },
      { day: 12, title: "Marpha to Tatopani", description: "Descend to world's deepest gorge, hot springs" },
      { day: 13, title: "Tatopani to Ghorepani", description: "Steep climb through rhododendron forests" },
      { day: 14, title: "Poon Hill & Tikhedhunga", description: "Sunrise at Poon Hill, descend to Tikhedhunga" },
      { day: 15, title: "Tikhedhunga to Pokhara", description: "Complete circuit, drive to Pokhara" },
      { day: 16, title: "Pokhara Rest Day", description: "Paragliding, boating, or spa day" },
      { day: 17, title: "Drive to Chitwan", description: "Scenic drive, Tharu cultural evening" },
      { day: 18, title: "Chitwan Safari", description: "Full day wildlife activities" },
      { day: 19, title: "Drive to Lumbini", description: "Visit birthplace of the Buddha" },
      { day: 20, title: "Fly to Kathmandu", description: "From Bhairahawa, afternoon shopping" },
      { day: 21, title: "Departure", description: "Final breakfast, airport transfer" },
    ],
  },
];

export interface BudgetOption {
  duration: string;
  accommodation: string;
  activities: string;
  estimatedNPR: string;
  estimatedUSD: string;
}

export const budgetEstimates: BudgetOption[] = [
  { duration: "5 Days", accommodation: "Budget", activities: "Basic sightseeing", estimatedNPR: "₹35,000–45,000", estimatedUSD: "$265–340" },
  { duration: "5 Days", accommodation: "Mid-Range", activities: "Basic sightseeing", estimatedNPR: "₹55,000–70,000", estimatedUSD: "$415–530" },
  { duration: "5 Days", accommodation: "Luxury", activities: "Basic sightseeing", estimatedNPR: "₹95,000–1,30,000", estimatedUSD: "$720–985" },
  { duration: "7 Days", accommodation: "Budget", activities: "Sightseeing + 1 adventure", estimatedNPR: "₹50,000–65,000", estimatedUSD: "$380–490" },
  { duration: "7 Days", accommodation: "Mid-Range", activities: "Sightseeing + 1 adventure", estimatedNPR: "₹80,000–1,05,000", estimatedUSD: "$605–795" },
  { duration: "7 Days", accommodation: "Luxury", activities: "Sightseeing + 1 adventure", estimatedNPR: "₹1,40,000–1,90,000", estimatedUSD: "$1,060–1,440" },
  { duration: "10 Days", accommodation: "Budget", activities: "Trek + sightseeing", estimatedNPR: "₹70,000–90,000", estimatedUSD: "$530–680" },
  { duration: "10 Days", accommodation: "Mid-Range", activities: "Trek + sightseeing", estimatedNPR: "₹1,10,000–1,50,000", estimatedUSD: "$835–1,135" },
  { duration: "10 Days", accommodation: "Luxury", activities: "Trek + sightseeing", estimatedNPR: "₹1,90,000–2,60,000", estimatedUSD: "$1,440–1,970" },
  { duration: "14 Days", accommodation: "Budget", activities: "EBC Trek", estimatedNPR: "₹95,000–1,25,000", estimatedUSD: "$720–945" },
  { duration: "14 Days", accommodation: "Mid-Range", activities: "EBC Trek", estimatedNPR: "₹1,50,000–2,00,000", estimatedUSD: "$1,135–1,515" },
  { duration: "14 Days", accommodation: "Luxury", activities: "EBC Trek", estimatedNPR: "₹2,50,000–3,50,000", estimatedUSD: "$1,890–2,650" },
  { duration: "21 Days", accommodation: "Budget", activities: "Annapurna Circuit", estimatedNPR: "₹1,20,000–1,60,000", estimatedUSD: "$910–1,210" },
  { duration: "21 Days", accommodation: "Mid-Range", activities: "Annapurna Circuit", estimatedNPR: "₹2,00,000–2,70,000", estimatedUSD: "$1,515–2,045" },
  { duration: "21 Days", accommodation: "Luxury", activities: "Annapurna Circuit", estimatedNPR: "₹3,50,000–4,80,000", estimatedUSD: "$2,650–3,635" },
];
