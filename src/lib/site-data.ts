export interface BusinessInfo {
  name: string;
  tagline: string;
  subtitle: string;
  website: string;
  email: string;
  phone: string;
  phoneRaw: string;
  phoneSecondary: string;
  phoneSecondaryRaw: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  operatingHours: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Imaad International Tours & Travels",
  tagline: "Your Sacred Journey, Beautifully Planned.",
  subtitle: "Umrah Packages • Comfortable Hotels • Makkah & Madinah Ziyarat",
  website: "https://imaadinternationaltravels.com/",
  email: "imaadinternationaltravels@gmail.com",
  phone: "+91 79891 15941",
  phoneRaw: "+917989115941",
  phoneSecondary: "+91 91000 07815",
  phoneSecondaryRaw: "+919100007815",
  address: "18-13-8/75/1, Rahmath Nagar, beside Pista House, Bandlaguda, Hyderabad, Telangana 500005",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500005",
  country: "India",
  operatingHours: "Monday to Sunday, 09:00 AM – 09:00 PM IST"
};

export const IMAGES = {
import heroKaaba from "../assets/images/hero_kaaba_masjid_haram_1792237816411.jpg";
import masjidNabawi from "../assets/images/madinah_masjid_nabawi_1792237817253.jpg";
import luxuryHotel from "../assets/images/luxury_hotel_makkah_room_1792237817168.jpg";
import jabalAlNour from "../assets/images/jabal_al_nour_makkah_1792237818259.jpg";
import masjidQuba from "../assets/images/masjid_quba_madinah_1792237817597.jpg";

export const IMAGES = {
  heroKaaba,
  masjidNabawi,
  luxuryHotel,
  jabalAlNour,
  masjidQuba,
};

export function getWhatsAppUrl(customMessage?: string): string {
  const baseMessage = customMessage || "Assalamu Alaikum. I would like to know more about Imaad International Tours & Travels. Please share the available Umrah packages, departure dates, hotel details, package inclusions, and final price.";
  return `https://wa.me/917989115941?text=${encodeURIComponent(baseMessage)}`;
}

export interface UmrahPackage {
  id: string;
  name: string;
  tier: "Basic" | "Standard" | "Deluxe";
  draftPrice: number;
  draftPriceFormatted: string;
  priceNote: string;
  duration: string;
  departureCity: string;
  departureAirport: string;
  makkahHotel: string;
  makkahDistance: string;
  madinahHotel: string;
  madinahDistance: string;
  sharingOptions: string[];
  meals: string;
  flights: string;
  transport: string;
  ziyarat: string;
  image: string;
  inclusions: string[];
  exclusions: string[];
  bookingTerms: string[];
}

export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: "basic-package",
    name: "Economy Umrah Package",
    tier: "Basic",
    draftPrice: 79000,
    draftPriceFormatted: "₹79,000",
    priceNote: "Draft starting quotation per person. Final price confirmed upon flight & seasonal availability.",
    duration: "15 Days / 14 Nights (8 Nights Makkah • 6 Nights Madinah)",
    departureCity: "Hyderabad",
    departureAirport: "Rajiv Gandhi International Airport (HYD)",
    makkahHotel: "Al Kiswah Towers / Standard Star Category",
    makkahDistance: "Approx. 900m with regular 24/7 dedicated shuttle transfer to Haram",
    madinahHotel: "Dar Al Eiman Al Manar / Standard Category",
    madinahDistance: "Approx. 400m - 500m direct walking distance to Masjid an-Nabawi",
    sharingOptions: ["Quad Sharing (4 Pax)", "Triple Sharing (3 Pax)", "Double Sharing (2 Pax)"],
    meals: "Three daily Indian buffet meals (Breakfast, Lunch & Dinner)",
    flights: "Round-trip economy flight with baggage allowance (HYD - JED / MED - HYD)",
    transport: "Complete air-conditioned luxury coach transfers (Jeddah - Makkah - Madinah - Airport)",
    ziyarat: "Guided historical Makkah & Madinah Ziyarat with knowledgeable Urdu/English tour guides",
    image: IMAGES.heroKaaba,
    inclusions: [
      "Saudi Tourist / Umrah Visa Processing",
      "Round-trip air ticket from Hyderabad (Economy)",
      "Standard comfortable hotel stay in Makkah & Madinah",
      "3 daily Indian buffet meals prepared fresh",
      "Guided Makkah Ziyarat by AC coach",
      "Guided Madinah Ziyarat by AC coach",
      "Ziyarat to historical sites & mosques",
      "Complimentary 5 Litre Zamzam canister (subject to airline allowance)",
      "Welcome Umrah kit (Ihram / Hijab, shoulder bag, travel book, luggage tags)",
      "Dedicated group leader assistance 24/7"
    ],
    exclusions: [
      "Room service, telephone calls, laundry, and personal shopping",
      "Individual private vehicle transfers outside of scheduled itinerary",
      "Excess baggage charges imposed by airlines",
      "Tawaf / Wheelchair assistance fees for elderly pilgrims"
    ],
    bookingTerms: [
      "Valid passport with at least 6 months validity from date of departure required",
      "Advance booking deposit of ₹25,000 per person required at booking confirmation",
      "Balance payment due 15 days prior to scheduled departure date",
      "Quotations are subject to airfare and hotel tariff adjustments until final ticketing"
    ]
  },
  {
    id: "standard-package",
    name: "Executive Umrah Package",
    tier: "Standard",
    draftPrice: 95000,
    draftPriceFormatted: "₹95,000",
    priceNote: "Draft starting quotation per person. Highly requested package balancing proximity & value.",
    duration: "15 Days / 14 Nights (8 Nights Makkah • 6 Nights Madinah)",
    departureCity: "Hyderabad",
    departureAirport: "Rajiv Gandhi International Airport (HYD)",
    makkahHotel: "Elaf Kinda / Al Shohada / 4-Star Premium",
    makkahDistance: "Approx. 350m - 400m easy walking access to the Haram courtyard",
    madinahHotel: "Frontel Al Harithia / Pullman Zamzam Madinah",
    madinahDistance: "Approx. 200m - 250m direct walking distance to Prophet's Mosque",
    sharingOptions: ["Quad Sharing", "Triple Sharing", "Double Sharing"],
    meals: "Deluxe Indian & Continental buffet (Breakfast, Lunch & Dinner)",
    flights: "Direct or one-stop premium economy flights with 30kg + 7kg baggage allowance",
    transport: "High-comfort air-conditioned VIP coaches with dedicated luggage van",
    ziyarat: "Comprehensive Makkah & Madinah Ziyarat, including Cave of Hira, Thawr & Quba",
    image: IMAGES.luxuryHotel,
    inclusions: [
      "Express Umrah Visa & Comprehensive Health Insurance",
      "Confirmed round-trip scheduled flights from Hyderabad",
      "4-Star close-proximity hotel accommodation in both Holy Cities",
      "3 daily hot buffet meals (Authentic Hyderabadi & Indian cuisine)",
      "Guided Makkah Ziyarat (12 Historical places)",
      "Guided Madinah Ziyarat (Uhud, Quba, Qiblatayn, Khandaq)",
      "Ziyarat to Masjid al-Ji'ranah for optional Umrah",
      "Complimentary 5 Litre Zamzam container",
      "Premium Umrah bag set, prayer mat, and guide booklet",
      "Experienced scholar guidance throughout the journey"
    ],
    exclusions: [
      "Any unlisted personal expenses, laundry, and room minibars",
      "Private VIP car upgrades (available on prior request)",
      "Airline excess baggage beyond standard baggage allowance"
    ],
    bookingTerms: [
      "Original passport copy, PAN card, and passport-size photographs required",
      "Advance booking deposit of ₹30,000 per person to reserve hotel and flight slots",
      "Final balance payable 20 days prior to departure",
      "Prices subject to seasonal hotel rate variations during Ramadan or peak school holidays"
    ]
  },
  {
    id: "deluxe-package",
    name: "Luxury VIP Umrah Package",
    tier: "Deluxe",
    draftPrice: 110000,
    draftPriceFormatted: "₹1,10,000",
    priceNote: "Draft starting quotation per person. 5-Star luxury steps away from the Holy Haram.",
    duration: "15 Days / 14 Nights (8 Nights Makkah • 6 Nights Madinah)",
    departureCity: "Hyderabad",
    departureAirport: "Rajiv Gandhi International Airport (HYD)",
    makkahHotel: "Clock Royal Tower / Swissôtel Makkah / Pullman Zamzam",
    makkahDistance: "0m – 50m direct Haram courtyard & elevator access",
    madinahHotel: "Anwar Al Madinah Mövenpick / Oberoi / Dar Al Taqwa",
    madinahDistance: "0m – 100m steps away from the Ladies & Gents Gates of Masjid an-Nabawi",
    sharingOptions: ["Double Sharing (Private Luxury)", "Triple Sharing", "Quad Family Suite"],
    meals: "5-Star hotel international buffet breakfast + curated Indian dinners",
    flights: "Direct premium airline tickets (Saudia / Emirates / Air India) from Hyderabad",
    transport: "Private luxury GMC / VIP Mercedes Sprinter bus transfers",
    ziyarat: "Private scholar-led Ziyarat in Makkah, Madinah, and Badar upon request",
    image: IMAGES.masjidNabawi,
    inclusions: [
      "VIP Umrah Visa processing with premium medical coverage",
      "Prime 5-Star clock tower / Haram facing properties in Makkah & Madinah",
      "Premium airline flights directly from Hyderabad",
      "Sumptuous international & Indian buffet meals",
      "Exclusive guided Ziyarat to historical locations with private transport",
      "Excursion to Masjid al-Ji'ranah & historic desert wells",
      "5 Litre certified Zamzam water provided at airport check-in",
      "Deluxe luggage bag set, high-grade Ihram/Abaya, and digital counter",
      "Personal concierge assistance in Makkah & Madinah"
    ],
    exclusions: [
      "Personal laundry, spa, or private room orders",
      "Airline seat upgrades (Business class available on quotation)",
      "Unscheduled private destination excursions"
    ],
    bookingTerms: [
      "Advance booking deposit of ₹40,000 per person required upon booking",
      "Passport copies with 6+ months validity needed at reservation",
      "Final payment clearance 25 days before departure",
      "Quotation is tailored to room view category (City View vs Haram / Kaaba View)"
    ]
  }
];

export interface ZiyaratLocation {
  id: string;
  name: string;
  arabicName: string;
  city: "Makkah" | "Madinah" | "Both";
  shortDescription: string;
  significance: string;
  locationNote?: string;
  image: string;
}

export const MAKKAH_ZIYARAT: ZiyaratLocation[] = [
  {
    id: "cave-thawr",
    name: "Ghār-e-Thawr (Cave of Thawr)",
    arabicName: "غار ثور",
    city: "Makkah",
    shortDescription: "The mountain cave where the Prophet Muhammad ﷺ and Sayyiduna Abu Bakr Siddiq (RA) sought refuge during the sacred Hijrah to Madinah.",
    significance: "A profound site of faith, divine protection, and loyalty mentioned in the Holy Quran (Surah At-Tawbah 9:40).",
    locationNote: "Located approx. 4 km south of the Holy Kaaba.",
    image: IMAGES.heroKaaba
  },
  {
    id: "arafat-nimrah",
    name: "Plains of Arafat & Masjid an-Nimrah",
    arabicName: "عرفات ومسجد نمرة",
    city: "Makkah",
    shortDescription: "The sacred plain where the pivotal pillar of Hajj takes place (Wuquf al-Arafat) and where the Prophet ﷺ delivered the Farewell Sermon.",
    significance: "Masjid an-Nimrah marks the historic spot where the Prophet ﷺ camped and prayed on the Day of Arafat.",
    locationNote: "Situated approx. 20 km southeast of Makkah.",
    image: IMAGES.jabalAlNour
  },
  {
    id: "jabal-al-rahmah",
    name: "Jabal al-Rahmah (Mount of Mercy)",
    arabicName: "جبل الرحمة",
    city: "Makkah",
    shortDescription: "The rocky hill in the heart of Arafat where pilgrims make heartfelt supplications for forgiveness.",
    significance: "A revered site of immense prayer and remembrance during the Hajj pilgrimage.",
    locationNote: "A 70-meter granite hill inside the plain of Arafat.",
    image: IMAGES.jabalAlNour
  },
  {
    id: "nahr-zubaydah",
    name: "Nahr Zubaydah (Historic Aqueduct)",
    arabicName: "عين زبيدة",
    city: "Makkah",
    shortDescription: "The renowned historical engineering feat commissioned by Queen Zubaydah, wife of Caliph Harun al-Rashid, to provide fresh water to pilgrims.",
    significance: "An inspiring monument to Islamic humanitarian patronage and architectural ingenuity spanning over a thousand years.",
    locationNote: "Historic canal ruins visible across the valleys of Hunayn and Arafat.",
    image: IMAGES.jabalAlNour
  },
  {
    id: "muzdalifah",
    name: "Muzdalifah & Masjid al-Mash'ar al-Haram",
    arabicName: "مزدلفة والمشعر الحرام",
    city: "Makkah",
    shortDescription: "The sacred valley where pilgrims spend the night under the open sky between Arafat and Mina, collecting pebbles for the Jamarat.",
    significance: "Specifically designated as Al-Mash'ar al-Haram in the Quran (Surah Al-Baqarah 2:198) where pilgrims remember Allah.",
    locationNote: "Located between Mina and Arafat.",
    image: IMAGES.heroKaaba
  },
  {
    id: "mina",
    name: "Mina (The City of Tents)",
    arabicName: "منى",
    city: "Makkah",
    shortDescription: "The vast valley renowned for its state-of-the-art white tent city where pilgrims reside during the days of Hajj (Ayyam al-Tashreeq).",
    significance: "Central gathering point for the symbolic rites of stoning the Jamarat and performing the sacrifice.",
    locationNote: "Approx. 8 km east of the Holy Mosque.",
    image: IMAGES.heroKaaba
  },
  {
    id: "sacrifice-site",
    name: "Historical Sacrifice Site in Mina",
    arabicName: "موقع الفداء بمنى",
    city: "Makkah",
    shortDescription: "The venerable historical area in Mina traditionally associated with Prophet Ibrahim's (AS) supreme devotion and readiness to sacrifice his beloved son Prophet Ismail (AS).",
    significance: "Commemorated by Muslims worldwide through the Qurbani (Udhiyah) tradition during Eid al-Adha.",
    locationNote: "Within the sacred boundaries of Mina valley.",
    image: IMAGES.heroKaaba
  },
  {
    id: "jamarat",
    name: "Jamarat (The Stoning Pillars)",
    arabicName: "الجمرات",
    city: "Makkah",
    shortDescription: "The iconic multi-level bridge complex containing the three stone pillars (Sughra, Wusta, and Aqaba) representing the rejection of temptation.",
    significance: "Pilgrims stone the pillars following the Sunnah of Prophet Ibrahim (AS) as an act of obedience and spiritual purification.",
    locationNote: "Western end of Mina, leading toward Makkah.",
    image: IMAGES.heroKaaba
  },
  {
    id: "jabal-al-nour",
    name: "Jabal al-Nour & Cave of Hira (Mount of Light)",
    arabicName: "جبل النور وغار حراء",
    city: "Makkah",
    shortDescription: "The mountain peak where the Prophet Muhammad ﷺ received the very first divine revelation of the Holy Quran through Angel Jibril (AS).",
    significance: "Where the command 'Iqra' (Read!) descended, marking the dawn of Islam. Offers commanding vistas of Makkah.",
    locationNote: "Located approx. 5 km northeast of the Haram.",
    image: IMAGES.jabalAlNour
  },
  {
    id: "jannat-al-mualla",
    name: "Jannat al-Mu'alla (Historic Cemetery)",
    arabicName: "جنة المعلاة",
    city: "Makkah",
    shortDescription: "The ancient cemetery of Makkah where many revered members of the Prophet's family and early companions are buried.",
    significance: "Resting place of Sayyidah Khadijah al-Kubra (RA), the Prophet's grandfather Abdul Muttalib, and uncle Abu Talib.",
    locationNote: "Located north of the Holy Mosque, within walking distance from Al-Marwah.",
    image: IMAGES.heroKaaba
  },
  {
    id: "masjid-al-jinn",
    name: "Masjid al-Jinn (Mosque of the Jinn)",
    arabicName: "مسجد الجن",
    city: "Makkah",
    shortDescription: "The historic mosque built at the location where a delegation of Jinn gathered to listen to the Prophet's ﷺ Quran recitation and embraced Islam.",
    significance: "Mentioned in Surah Al-Jinn (Surah 72). Also historically known as Masjid al-Bay'ah.",
    locationNote: "Located close to Jannat al-Mu'alla.",
    image: IMAGES.heroKaaba
  },
  {
    id: "masjid-al-khayf",
    name: "Masjid al-Khayf (Mina)",
    arabicName: "مسجد الخيف",
    city: "Makkah",
    shortDescription: "The grand mosque in Mina nestled at the foot of the mountain where numerous prophets in history are narrated to have prayed.",
    significance: "The Prophet Muhammad ﷺ delivered a sermon and prayed here during the Farewell Pilgrimage.",
    locationNote: "Situated on the southern slope of Mina near the first Jamarah.",
    image: IMAGES.heroKaaba
  },
  {
    id: "masjid-jiranah",
    name: "Masjid al-Ji'ranah (Historic Miqat)",
    arabicName: "مسجد الجعرانة",
    city: "Makkah",
    shortDescription: "The venerated mosque situated at the northeast boundary of Makkah where the Prophet Muhammad ﷺ donned his Ihram for Umrah after the Battle of Hunayn.",
    significance: "A major Miqat location for residents of Makkah and pilgrims wanting to perform an additional Umrah with guided transport.",
    locationNote: "Located approx. 24 km northeast of Masjid al-Haram.",
    image: IMAGES.heroKaaba
  }
];

export const MADINAH_ZIYARAT: ZiyaratLocation[] = [
  {
    id: "masjid-nabawi",
    name: "Al-Masjid an-Nabawi & Rawdah Mubarak",
    arabicName: "المسجد النبوي والروضة الشريفة",
    city: "Madinah",
    shortDescription: "The Prophet's Mosque, the second holiest site in Islam, housing the blessed resting place of Prophet Muhammad ﷺ and his companions Abu Bakr (RA) and Umar (RA).",
    significance: "Features the sacred Rawdah, described by the Prophet ﷺ as 'a garden from the gardens of Paradise'. One prayer here is rewarded a thousandfold.",
    locationNote: "Central Madinah.",
    image: IMAGES.masjidNabawi
  },
  {
    id: "masjid-quba",
    name: "Masjid Quba",
    arabicName: "مسجد قباء",
    city: "Madinah",
    shortDescription: "The very first mosque built in Islamic history, established by the Prophet Muhammad ﷺ immediately upon his arrival in Madinah.",
    significance: "The Prophet ﷺ said that praying two raka'at of voluntary prayer in Masjid Quba carries the spiritual reward of performing a complete Umrah.",
    locationNote: "Approx. 3.5 km south of the Prophet's Mosque, connected by a scenic pedestrian boulevard.",
    image: IMAGES.masjidQuba
  },
  {
    id: "masjid-qiblatayn",
    name: "Masjid al-Qiblatayn (Mosque of the Two Qiblas)",
    arabicName: "مسجد القبلتين",
    city: "Madinah",
    shortDescription: "The historical mosque where the revelation descended instructing the Prophet ﷺ and believers to turn from Jerusalem (Bayt al-Maqdis) to the Kaaba in Makkah.",
    significance: "A living testament to the pivotal moment when the permanent direction of Muslim prayer was ordained in the Quran (Surah Al-Baqarah 2:144).",
    locationNote: "Located in northwestern Madinah.",
    image: IMAGES.masjidNabawi
  },
  {
    id: "mount-uhud",
    name: "Mount Uhud & Shuhada Uhud",
    arabicName: "جبل أحد ومقبرة الشهداء",
    city: "Madinah",
    shortDescription: "The majestic mountain about which the Prophet ﷺ remarked: 'Uhud is a mountain that loves us and we love it', and the cemetery of the martyrs of Uhud.",
    significance: "Resting place of Sayyidush Shuhada Sayyiduna Hamza ibn Abdul Muttalib (RA) and 70 valiant companions who gave their lives in defense of Islam.",
    locationNote: "Approx. 5 km north of Al-Masjid an-Nabawi.",
    image: IMAGES.jabalAlNour
  },
  {
    id: "seven-mosques",
    name: "The Seven Mosques (Battle of the Trench / Khandaq)",
    arabicName: "المساجد السبعة (الخندق)",
    city: "Madinah",
    shortDescription: "A revered historic complex of small mosques erected at the command posts and encampments during the pivotal Battle of the Trench (Ghazwah al-Khandaq).",
    significance: "Includes Masjid al-Fath, where the Prophet ﷺ supplicated for divine victory, which was subsequently granted.",
    locationNote: "Situated on the western side of Mount Sala in Madinah.",
    image: IMAGES.masjidQuba
  },
  {
    id: "jannat-al-baqi",
    name: "Jannat al-Baqi (Baqi al-Gharqad)",
    arabicName: "جنة البقيع",
    city: "Madinah",
    shortDescription: "The historical cemetery immediately adjacent to Al-Masjid an-Nabawi where approximately ten thousand noble Sahaba (companions) and members of the Prophet's family rest.",
    significance: "Burial place of the Prophet's daughters, wives, infant son Ibrahim, and third Caliph Sayyiduna Uthman ibn Affan (RA).",
    locationNote: "Directly east of the Prophet's Mosque courtyard.",
    image: IMAGES.masjidNabawi
  }
];

export interface HotelProperty {
  id: string;
  name: string;
  city: "Makkah" | "Madinah";
  starRating: number;
  distanceFromHaram: string;
  category: "Luxury 5-Star" | "Executive 4-Star" | "Economy Standard";
  roomTypes: string[];
  amenities: string[];
  description: string;
  includedInPackages: string[];
  image: string;
}

export const HOTELS_CATALOG: HotelProperty[] = [
  {
    id: "clock-tower-makkah",
    name: "Makkah Clock Royal Tower (Fairmont / Swissôtel)",
    city: "Makkah",
    starRating: 5,
    distanceFromHaram: "0 meters — Directly on the Haram Courtyard",
    category: "Luxury 5-Star",
    roomTypes: ["Double Haram View", "Deluxe Kaaba View", "Quad Family Suite", "Executive King"],
    amenities: [
      "Direct Haram courtyard elevator access",
      "Panoramic views of the Holy Kaaba",
      "Multilingual 24/7 concierge & baggage handling",
      "Fine dining buffet restaurants with halal international selections",
      "Complimentary high-speed Wi-Fi throughout",
      "Private audio link connecting live Haram prayers directly to guest rooms"
    ],
    description: "The pinnacle of comfort in the Holy City of Makkah. Located directly above the Abraj Al-Bait complex, offering effortless step-free access to all daily prayers and Tawaf.",
    includedInPackages: ["Deluxe Package (Luxury VIP)"],
    image: IMAGES.luxuryHotel
  },
  {
    id: "elaf-kinda-makkah",
    name: "Elaf Kinda Hotel Makkah",
    city: "Makkah",
    starRating: 4,
    distanceFromHaram: "Approx. 350 meters — King Abdul Aziz Gate access",
    category: "Executive 4-Star",
    roomTypes: ["Double Room", "Triple Room", "Quad Room (4 beds)"],
    amenities: [
      "Short walking distance to King Abdulaziz Gate",
      "Dedicated buffet dining hall serving authentic Indian dishes",
      "Spacious air-conditioned rooms with modern ensuite bathrooms",
      "Daily housekeeping and fresh linen service",
      "24-hour reception and luggage storage assistance"
    ],
    description: "One of our most popular properties for Hyderabad pilgrims. Combines exceptional proximity with excellent hospitality, clean facilities, and delicious Indian meals.",
    includedInPackages: ["Standard Package (Executive)"],
    image: IMAGES.heroKaaba
  },
  {
    id: "kiswah-towers-makkah",
    name: "Al Kiswah Towers Hotel",
    city: "Makkah",
    starRating: 3,
    distanceFromHaram: "Approx. 900 meters — 24/7 Dedicated AC Shuttle Bus",
    category: "Economy Standard",
    roomTypes: ["Quad Sharing", "Quint Sharing (5 beds)", "Family Triple Room"],
    amenities: [
      "Continuous free air-conditioned bus shuttle directly to the Haram drop-off point",
      "Modern high-rise towers with high-speed elevators",
      "Clean, functional rooms with private bathrooms and refrigerators",
      "Dedicated dining halls serving warm Indian breakfast, lunch, and dinner",
      "On-site convenience marts and laundry facilities"
    ],
    description: "An economical and reliable choice for pilgrims prioritizing budget-friendly travel while enjoying reliable shuttle transport to the Haram around the clock.",
    includedInPackages: ["Basic Package (Economy)"],
    image: IMAGES.heroKaaba
  },
  {
    id: "anwar-madinah-movenpick",
    name: "Anwar Al Madinah Mövenpick Hotel",
    city: "Madinah",
    starRating: 5,
    distanceFromHaram: "0 meters — Directly facing the northern courtyard of Masjid an-Nabawi",
    category: "Luxury 5-Star",
    roomTypes: ["Luxury Double Room", "Triple Room", "Executive Suite"],
    amenities: [
      "Direct covered passage to the northern prayer plaza of Prophet's Mosque",
      "Direct proximity to Ladies' entrance Gate 25",
      "Expansive dining restaurants offering lavish international buffets",
      "High-speed complimentary internet access",
      "Integrated shopping center within the hotel concourse"
    ],
    description: "Madinah's premier luxury hotel property. Just steps from the ladies' and gents' entrances to the Prophet's Mosque, making attending every Tahajjud and Fard prayer completely effortless.",
    includedInPackages: ["Deluxe Package (Luxury VIP)"],
    image: IMAGES.masjidNabawi
  },
  {
    id: "frontel-al-harithia-madinah",
    name: "Frontel Al Harithia Hotel Madinah",
    city: "Madinah",
    starRating: 4,
    distanceFromHaram: "Approx. 200 meters — Walking distance to Masjid an-Nabawi",
    category: "Executive 4-Star",
    roomTypes: ["Double Sharing", "Triple Sharing", "Quad Room"],
    amenities: [
      "Less than 3 minutes walk to the outer courtyard of Masjid an-Nabawi",
      "Indian-style hot buffet meals included for Imaad travelers",
      "Spacious rooms featuring tea/coffee makers, mini-fridge, and satellite TV",
      "Prompt room service and multilingual staff assistance",
      "Close proximity to historical date markets"
    ],
    description: "Exceptional comfort and proximity in the radiant city of Madinah. Perfect for families, senior citizens, and first-time pilgrims seeking peaceful prayer access.",
    includedInPackages: ["Standard Package (Executive)"],
    image: IMAGES.masjidQuba
  },
  {
    id: "dar-al-eiman-manar",
    name: "Dar Al Eiman Al Manar Madinah",
    city: "Madinah",
    starRating: 3,
    distanceFromHaram: "Approx. 450 meters — Direct straight walkway to courtyard",
    category: "Economy Standard",
    roomTypes: ["Quad Sharing Room", "Triple Room", "Double Room"],
    amenities: [
      "Straight, flat, easy walk to the Prophet's Mosque courtyard",
      "Air-conditioned rooms with private shower and clean toiletries",
      "Hyderabadi & North Indian catering served for all three daily meals",
      "24-hour reception desk with Hindi/Urdu speaking staff members",
      "Safe storage for luggage on departure day"
    ],
    description: "Clean, budget-conscious accommodation located along a lively pedestrian street with pharmacies, tea stalls, and date shops lining the path to the Prophet's Mosque.",
    includedInPackages: ["Basic Package (Economy)"],
    image: IMAGES.masjidNabawi
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "makkah" | "madinah" | "umrah" | "makkah-ziyarat" | "madinah-ziyarat" | "hotels" | "facilities" | "group-travel";
  categoryLabel: string;
  image: string;
  location: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Holy Kaaba at Twilight during Tawaf",
    category: "makkah",
    categoryLabel: "Makkah Al-Mukarramah",
    image: IMAGES.heroKaaba,
    location: "Masjid al-Haram, Makkah",
    description: "Pilgrims from around the world performing Tawaf around the Holy Kaaba under golden minaret illumination."
  },
  {
    id: "gal-2",
    title: "Masjid an-Nabawi with Golden Umbrellas",
    category: "madinah",
    categoryLabel: "Madinah Al-Munawwarah",
    image: IMAGES.masjidNabawi,
    location: "Al-Masjid an-Nabawi, Madinah",
    description: "The serene open courtyards of the Prophet's Mosque with its iconic shaded architectural umbrellas and green dome."
  },
  {
    id: "gal-3",
    title: "Luxury Makkah Hotel Suite with Kaaba View",
    category: "hotels",
    categoryLabel: "Hotels & Accommodation",
    image: IMAGES.luxuryHotel,
    location: "Abraj Al-Bait, Makkah",
    description: "Premium five-star hospitality overlooking the Holy Haram, configured for our deluxe package travelers."
  },
  {
    id: "gal-4",
    title: "Jabal al-Nour & Cave of Hira Dawn Horizon",
    category: "makkah-ziyarat",
    categoryLabel: "Makkah Ziyarat",
    image: IMAGES.jabalAlNour,
    location: "Jabal al-Nour, Makkah",
    description: "The historic Mountain of Light where the first revelations of the Quran descended upon Prophet Muhammad ﷺ."
  },
  {
    id: "gal-5",
    title: "Masjid Quba Architecture & Courtyards",
    category: "madinah-ziyarat",
    categoryLabel: "Madinah Ziyarat",
    image: IMAGES.masjidQuba,
    location: "Quba, Madinah",
    description: "The pristine white architecture and palm courtyards of the first mosque established in Islam."
  },
  {
    id: "gal-6",
    title: "Pilgrims in Ihram at Masjid al-Haram",
    category: "umrah",
    categoryLabel: "Umrah Pilgrims",
    image: IMAGES.heroKaaba,
    location: "Makkah Al-Mukarramah",
    description: "Pious pilgrims performing the sacred rites of Umrah with sincere devotion and peace of mind."
  },
  {
    id: "gal-7",
    title: "Evening Atmosphere at Prophet's Mosque",
    category: "madinah",
    categoryLabel: "Madinah Al-Munawwarah",
    image: IMAGES.masjidNabawi,
    location: "Courtyard, Madinah",
    description: "Warm sunset lighting reflects across the polished marble courtyards as pilgrims gather for Maghrib prayer."
  },
  {
    id: "gal-8",
    title: "Executive Hotel Room Living & Bedding",
    category: "facilities",
    categoryLabel: "Hotel Facilities",
    image: IMAGES.luxuryHotel,
    location: "Central Makkah Property",
    description: "Clean, comfortable room setup with premium bedding, private prayer rugs, and complimentary refreshments."
  },
  {
    id: "gal-9",
    title: "Pilgrim Group Gathering for Ziyarat Tour",
    category: "group-travel",
    categoryLabel: "Group Travel & Experiences",
    image: IMAGES.masjidQuba,
    location: "Historical Tour Route, Madinah",
    description: "Coordinated travel groups accompanied by experienced tour leads and scholars during Ziyarat excursions."
  }
];

export const CORE_SERVICES = [
  {
    id: "umrah-packages",
    title: "Umrah Travel Packages",
    shortDesc: "Complete all-inclusive 15-day and custom packages from Hyderabad with verified hotels and flights.",
    buttonLabel: "Explore Packages",
    image: IMAGES.heroKaaba
  },
  {
    id: "makkah-ziyarat",
    title: "Makkah Ziyarat Excursions",
    shortDesc: "Comprehensive guided visits to 12 sacred historical landmarks including Cave of Hira, Thawr, and Arafat.",
    buttonLabel: "View Makkah Ziyarat",
    image: IMAGES.jabalAlNour
  },
  {
    id: "madinah-ziyarat",
    title: "Madinah Ziyarat Excursions",
    shortDesc: "Spiritual excursions to Masjid Quba, Mount Uhud, Masjid al-Qiblatayn, and the Seven Mosques.",
    buttonLabel: "View Madinah Ziyarat",
    image: IMAGES.masjidQuba
  },
  {
    id: "hotels",
    title: "Hotels & Accommodation",
    shortDesc: "Transparent hotel accommodation ranging from luxury 5-star properties to verified economy stays.",
    buttonLabel: "Explore Hotels",
    image: IMAGES.luxuryHotel
  },
  {
    id: "flights",
    title: "Flight Reservations",
    shortDesc: "Direct and convenient flight coordination from Hyderabad Rajiv Gandhi International Airport (HYD).",
    buttonLabel: "Enquire on WhatsApp",
    image: IMAGES.heroKaaba
  },
  {
    id: "jiranah-service",
    title: "Umrah from Masjid al-Ji'ranah",
    shortDesc: "Dedicated transport and scholar guidance to the historic Miqat of Ji'ranah for supplementary Umrah.",
    buttonLabel: "Learn About Ji'ranah",
    image: IMAGES.heroKaaba
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Personal Travel Assistance",
    desc: "From initial passport checks in Hyderabad to your departure and return, our dedicated team provides direct assistance."
  },
  {
    title: "Clear Package Information",
    desc: "Transparent draft pricing, explicit hotel distances, and verified itineraries with zero hidden charges or surprises."
  },
  {
    title: "Hotel & Flight Coordination",
    desc: "Carefully selected properties near the Haramain paired with confirmed airline departures from Hyderabad."
  },
  {
    title: "Guided Ziyarat Arrangements",
    desc: "Knowledgeable guides conduct respectful visits to all historical sites with authentic educational context."
  },
  {
    title: "Direct WhatsApp Support",
    desc: "Instant communication with our Hyderabad office for prompt quotations, queries, and travel updates."
  },
  {
    title: "Pilgrim-First Comfort",
    desc: "Focus on senior citizen care, wholesome Indian meals, clean transport, and peace of mind during your sacred journey."
  }
];
