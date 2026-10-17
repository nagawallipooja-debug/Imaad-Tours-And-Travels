import React from 'react';
import { 
  ArrowRight, MessageCircle, Calendar, MapPin, Building, ShieldCheck, 
  Check, Phone, Mail, Compass, Star, Sparkles, ChevronRight, Eye
} from 'lucide-react';
import { 
  BUSINESS_INFO, IMAGES, UMRAH_PACKAGES, CORE_SERVICES, 
  WHY_CHOOSE_US, MAKKAH_ZIYARAT, MADINAH_ZIYARAT, HOTELS_CATALOG, 
  GALLERY_ITEMS, getWhatsAppUrl 
} from '../lib/site-data';
import { PackageCard } from '../components/PackageCard';
import { ContactForm } from '../components/ContactForm';

interface HomeViewProps {
  onNavigate: (view: string) => void;
  onOpenPhotoLightbox: (index: number) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenPhotoLightbox }) => {
  return (
    <div className="bg-[#000000] text-white">

      {/* SECTION A: HERO */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Dominant Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroKaaba}
            alt="The Holy Kaaba and Masjid al-Haram at twilight"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] scale-[1.02]"
          />
          {/* Subtle multi-stop dark scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center sm:text-left">
          <div className="max-w-3xl">
            
            {/* Quiet Location Kicker (anti-pill clean metadata) */}
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-[#D4AF37] font-semibold tracking-wider uppercase mb-4">
              <span>Hyderabad</span>
              <span aria-hidden="true">·</span>
              <span>Makkah Al-Mukarramah</span>
              <span aria-hidden="true">·</span>
              <span>Madinah Al-Munawwarah</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white tracking-tight leading-[1.15] text-balance">
              Your Sacred Journey, Beautifully Planned.
            </h1>

            {/* Supporting Text */}
            <p className="mt-5 text-base sm:text-xl text-[#E0E0E0] font-light max-w-2xl leading-relaxed">
              Umrah Packages • Comfortable Hotels • Makkah & Madinah Ziyarat
            </p>

            <p className="mt-3 text-xs sm:text-sm text-[#BDBDBD] max-w-xl">
              Departures directly from Rajiv Gandhi International Airport (HYD) with verified hotels near the Haram, authentic Indian cuisine, and dedicated scholar guidance.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3.5">
              <button
                onClick={() => onNavigate('umrah-packages')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#C5A253] text-black font-semibold text-sm sm:text-base px-7 py-3.5 rounded transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                <span>Explore Umrah Packages</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl("Assalamu Alaikum. I would like to enquire on WhatsApp about your Umrah packages and upcoming Hyderabad departures.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>

            {/* Sub-hero trust metrics strip */}
            <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#D4AF37] tabular-nums block">15 Days</span>
                <span className="text-[11px] sm:text-xs text-[#BDBDBD]">Curated Itineraries</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#D4AF37] tabular-nums block">0m – 400m</span>
                <span className="text-[11px] sm:text-xs text-[#BDBDBD]">Haram Proximity Hotels</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#D4AF37] tabular-nums block">HYD Direct</span>
                <span className="text-[11px] sm:text-xs text-[#BDBDBD]">Scheduled Flights</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: QUICK SERVICE CATEGORIES */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              Our Core Offerings
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-1">
              Travel Services Dedicated to Your Peace of Mind
            </h2>
            <p className="text-sm text-[#BDBDBD] mt-2">
              Every detail is meticulously coordinated so you can devote your focus entirely to prayer and spiritual reflection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-[#181818] border border-[#303030] rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all group flex flex-col"
              >
                <div className="h-44 overflow-hidden relative bg-[#111]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-[#D4AF37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#BDBDBD] mt-2 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#262626]">
                    <button
                      onClick={() => {
                        if (service.id === 'flights') {
                          window.open(getWhatsAppUrl("Assalamu Alaikum. I am enquiring about flight availability and booking from Hyderabad for Umrah."), '_blank');
                        } else if (service.id === 'jiranah-service') {
                          onNavigate('makkah-ziyarat');
                        } else {
                          onNavigate(service.id);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF37] hover:text-[#C5A253] transition-colors cursor-pointer"
                    >
                      <span>{service.buttonLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION C: FEATURED UMRAH PACKAGES */}
      <section className="py-16 sm:py-24 bg-[#000000] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                Transparent Pricing
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-1">
                Featured Umrah Packages
              </h2>
              <p className="text-xs sm:text-sm text-[#BDBDBD] mt-2 max-w-xl">
                Choose from our three popular tiers designed to accommodate diverse comfort preferences and budgets with zero hidden costs.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('umrah-packages')}
                className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-5 py-2.5 rounded text-sm font-semibold transition-colors"
              >
                <span>View Full Comparison</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {UMRAH_PACKAGES.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          {/* Pricing Verification Notice */}
          <div className="mt-10 p-4 bg-[#111111] border border-[#262626] rounded-lg text-xs text-[#A0A0A0] text-center max-w-3xl mx-auto">
            <span className="text-[#D4AF37] font-semibold">Important Transparency Notice:</span> The prices listed above (₹79,000, ₹95,000, ₹1,10,000) represent draft starting quotations per person. Final rates depend on seasonal airline seat classes and hotel room availability at time of booking.
          </div>

        </div>
      </section>

      {/* SECTION D: WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-[#0B0B0B] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              Our Core Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-1">
              Why Pilgrims Trust Imaad International
            </h2>
            <p className="text-xs sm:text-sm text-[#BDBDBD] mt-2">
              We operate on the values of religious respect, complete transparency, and attentive local service in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl hover:border-[#D4AF37]/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-bold text-sm font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white font-serif">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#BDBDBD] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION E: MAKKAH & MADINAH PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#000000] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                Sacred Destinations
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-1">
                Historical Ziyarat in Makkah & Madinah
              </h2>
              <p className="text-xs sm:text-sm text-[#BDBDBD] mt-2 max-w-xl">
                Walk in the footsteps of the Prophet Muhammad ﷺ and his noble companions with our guided historical excursions.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('makkah-ziyarat')}
                className="border border-[#303030] hover:border-[#D4AF37] text-white px-4 py-2 rounded text-xs font-semibold transition-colors"
              >
                Makkah Ziyarat (12 Sites)
              </button>
              <button
                onClick={() => onNavigate('madinah-ziyarat')}
                className="border border-[#303030] hover:border-[#D4AF37] text-white px-4 py-2 rounded text-xs font-semibold transition-colors"
              >
                Madinah Ziyarat
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* 1. Jabal al-Nour */}
            <div className="bg-[#181818] border border-[#282828] rounded-xl overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={IMAGES.jabalAlNour}
                  alt="Jabal al-Nour Mount of Light"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded">
                  Makkah Ziyarat
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-base font-bold text-white font-serif">
                  Jabal al-Nour & Cave of Hira
                </h4>
                <p className="text-xs text-[#BDBDBD] mt-1 line-clamp-2">
                  The mountain of divine revelation where the first words of the Holy Quran were revealed.
                </p>
              </div>
            </div>

            {/* 2. Masjid an-Nabawi */}
            <div className="bg-[#181818] border border-[#282828] rounded-xl overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={IMAGES.masjidNabawi}
                  alt="Al-Masjid an-Nabawi Madinah"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded">
                  Madinah Ziyarat
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-base font-bold text-white font-serif">
                  Al-Masjid an-Nabawi & Rawdah
                </h4>
                <p className="text-xs text-[#BDBDBD] mt-1 line-clamp-2">
                  The Prophet's Mosque containing the blessed resting place and the serene gardens of Paradise.
                </p>
              </div>
            </div>

            {/* 3. Masjid Quba */}
            <div className="bg-[#181818] border border-[#282828] rounded-xl overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={IMAGES.masjidQuba}
                  alt="Masjid Quba Madinah"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded">
                  Madinah Ziyarat
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-base font-bold text-white font-serif">
                  Masjid Quba
                </h4>
                <p className="text-xs text-[#BDBDBD] mt-1 line-clamp-2">
                  The first mosque built in Islam; praying two units of prayer here carries the reward of Umrah.
                </p>
              </div>
            </div>

            {/* 4. Cave of Thawr */}
            <div className="bg-[#181818] border border-[#282828] rounded-xl overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={IMAGES.heroKaaba}
                  alt="Cave of Thawr Makkah"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-[#D4AF37] bg-black/60 px-2 py-0.5 rounded">
                  Makkah Ziyarat
                </span>
              </div>
              <div className="p-4">
                <h4 className="text-base font-bold text-white font-serif">
                  Ghār-e-Thawr (Cave of Thawr)
                </h4>
                <p className="text-xs text-[#BDBDBD] mt-1 line-clamp-2">
                  Sacred refuge of the Prophet ﷺ and Sayyiduna Abu Bakr (RA) during the Hijrah.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => onNavigate('makkah-ziyarat')}
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C5A253] text-black font-semibold px-6 py-3 rounded text-sm transition-all"
            >
              <span>Explore All 12 Makkah Historical Sites</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION F: HOTEL PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                Comfortable Accommodation
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-1">
                Verified Hotels in Makkah & Madinah
              </h2>
              <p className="text-xs sm:text-sm text-[#BDBDBD] mt-2 max-w-xl">
                We contract reputable hotels offering clean air-conditioned rooms, hot Indian dining, and seamless prayer accessibility.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('hotels')}
                className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-5 py-2.5 rounded text-sm font-semibold transition-colors"
              >
                <span>Explore All Hotels</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTELS_CATALOG.slice(0, 3).map((hotel) => (
              <div
                key={hotel.id}
                className="bg-[#181818] border border-[#2e2e2e] rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all group flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-xs font-semibold text-[#D4AF37] px-2.5 py-1 rounded border border-[#333]">
                    {hotel.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-[#D4AF37] transition-colors">
                      {hotel.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] mt-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{hotel.distanceFromHaram}</span>
                    </div>

                    <p className="text-xs text-[#BDBDBD] mt-2.5 line-clamp-2 leading-relaxed">
                      {hotel.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#252525] flex flex-wrap gap-1.5">
                      {hotel.roomTypes.slice(0, 3).map((r, i) => (
                        <span key={i} className="text-[11px] text-[#A0A0A0] bg-[#121212] px-2 py-0.5 rounded border border-[#242424]">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#252525]">
                    <a
                      href={getWhatsAppUrl(`Assalamu Alaikum. I would like to check availability and rates for ${hotel.name} in ${hotel.city}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-2 rounded text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
                      <span>Enquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION I: SPECIAL SERVICE — UMRAH FROM MASJID AL-JI'RANAH */}
      <section className="py-16 sm:py-20 bg-[#121212] border-b border-[#252525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#181818] border border-[#D4AF37]/50 rounded-2xl overflow-hidden p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 shadow-2xl">
            <div className="lg:w-1/2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] block mb-2">
                Special Umrah Pilgrimage Service
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                Umrah from Masjid al-Ji'ranah
              </h2>
              <p className="text-sm text-[#D0D0D0] mt-3 leading-relaxed">
                For pilgrims desiring to perform an additional Umrah during their stay in Makkah, we arrange dedicated air-conditioned coach transfers to the historic Miqat of Masjid al-Ji'ranah (historically also known as Masjid-e-Johrana).
              </p>
              <div className="mt-4 space-y-2 text-xs text-[#BDBDBD]">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>The historical site where Prophet Muhammad ﷺ entered Ihram for Umrah after the Siege of Ta'if.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Convenient round-trip transport directly from your hotel with experienced guide assistance.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Wudu and Ihram changing facilities available on-site at the mosque.</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={getWhatsAppUrl("Assalamu Alaikum. I would like to enquire about arranging the Umrah from Masjid al-Ji'ranah transport and package.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded text-sm font-semibold transition-all shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Enquire for Ji'ranah Service</span>
                </a>
                <button
                  onClick={() => onNavigate('makkah-ziyarat')}
                  className="text-xs font-semibold text-[#D4AF37] hover:underline"
                >
                  View in Makkah Ziyarat list →
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative rounded-xl overflow-hidden border border-[#303030] shadow-xl">
                <img
                  src={IMAGES.heroKaaba}
                  alt="Masjid al-Ji'ranah excursion"
                  referrerPolicy="no-referrer"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs text-white/90 font-medium">
                    Historic Miqat Route • Guided by Scholar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: GALLERY PREVIEW */}
      <section className="py-16 sm:py-24 bg-[#000000] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                Visual Experience
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-1">
                Moments from the Holy Lands
              </h2>
              <p className="text-xs sm:text-sm text-[#BDBDBD] mt-2 max-w-xl">
                Authentic photographs capturing the spiritual sanctity of Masjid al-Haram, Masjid an-Nabawi, and our pilgrim services.
              </p>
            </div>
            <div>
              <button
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C5A253] text-black px-5 py-2.5 rounded text-sm font-semibold transition-colors"
              >
                <span>View All Photos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {GALLERY_ITEMS.slice(0, 4).map((photo, idx) => (
              <div
                key={photo.id}
                onClick={() => onOpenPhotoLightbox(idx)}
                className="relative h-60 rounded-xl overflow-hidden cursor-pointer group border border-[#222] hover:border-[#D4AF37] transition-all"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                    {photo.categoryLabel}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-serif mt-0.5 line-clamp-1">
                    {photo.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-white/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3 text-[#D4AF37]" />
                    <span>Click to view</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION H: ABOUT THE COMPANY INTRODUCTION */}
      <section className="py-16 sm:py-24 bg-[#0B0B0B] border-b border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
                  Hyderabad Travel Specialists
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-1">
                  Dedicated to Serving the Guests of Allah (Dhuyuf ar-Rahman)
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
                Founded in Hyderabad, <strong className="text-white">Imaad International Tours & Travels</strong> is committed to simplifying the pilgrimage journey through honest guidance, transparent package pricing, and caring on-ground assistance.
              </p>

              <p className="text-xs sm:text-sm text-[#BDBDBD] leading-relaxed">
                We know that performing Umrah is among the most cherished aspirations of a Muslim's lifetime. That is why our team personally verifies hotel proximity, coordinates fresh Indian meals, and ensures experienced scholars accompany our historical Ziyarat tours in both Makkah and Madinah.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs text-[#BDBDBD] pt-2">
                <div className="border border-[#262626] p-3 rounded bg-[#121212]">
                  <span className="text-white font-bold block mb-1">Office Location:</span>
                  <span>Bandlaguda, Hyderabad (Beside Pista House)</span>
                </div>
                <div className="border border-[#262626] p-3 rounded bg-[#121212]">
                  <span className="text-white font-bold block mb-1">Direct Consultation:</span>
                  <span>+91 79891 15941 / +91 91000 07815</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('about-us')}
                  className="bg-[#D4AF37] hover:bg-[#C5A253] text-black px-6 py-3 rounded text-sm font-semibold transition-colors"
                >
                  Read More About Us
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="border border-[#303030] hover:border-[#D4AF37] text-white px-5 py-3 rounded text-sm font-medium transition-colors"
                >
                  Visit Our Office
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#303030] shadow-2xl">
                <img
                  src={IMAGES.luxuryHotel}
                  alt="Imaad International customer comfort and hospitality"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Personalized Pilgrim Hospitality</span>
                  </div>
                  <h4 className="text-lg font-bold text-white font-serif mt-1">
                    Care For Seniors, Families & First-Time Pilgrims
                  </h4>
                  <p className="text-xs text-[#BDBDBD] mt-1">
                    Specialized coordination for wheelchair arrangements, proximity to Haram ladies' gates, and customized diet accommodations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION J: CONTACT & ENQUIRY SECTION */}
      <section id="contact-section" className="py-16 sm:py-24 bg-[#000000]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-serif text-white mt-1">
              Plan Your Sacred Umrah Journey Today
            </h2>
            <p className="text-xs sm:text-sm text-[#BDBDBD] mt-2">
              Our travel specialists in Hyderabad are ready to discuss your preferred dates, family requirements, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Contact Information Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-white font-serif">
                  Hyderabad Office Address
                </h3>
                <div className="flex items-start gap-3 text-sm text-[#D0D0D0]">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
                <div className="pt-2 text-xs text-[#8E7427] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                  <span>Prominently situated beside Pista House in Bandlaguda</span>
                </div>
              </div>

              <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl space-y-4">
                <h3 className="text-lg font-bold text-white font-serif">
                  Direct Phone & WhatsApp
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between border-b border-[#222] pb-2">
                    <span className="text-[#BDBDBD]">Primary Contact:</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-white font-semibold hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{BUSINESS_INFO.phone}</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between border-b border-[#222] pb-2">
                    <span className="text-[#BDBDBD]">Secondary Contact:</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`}
                      className="text-white font-semibold hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{BUSINESS_INFO.phoneSecondary}</span>
                    </a>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[#BDBDBD]">Email Enquiries:</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-white font-semibold hover:text-[#D4AF37] transition-colors text-xs truncate max-w-[200px]"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="pt-3">
                  <a
                    href={getWhatsAppUrl("Assalamu Alaikum. I would like to enquire about your available Umrah packages.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded text-sm font-semibold transition-all shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Open Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
