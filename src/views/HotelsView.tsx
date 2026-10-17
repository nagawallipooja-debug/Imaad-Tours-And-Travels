import React, { useState } from 'react';
import { Building, MapPin, Star, Check, MessageCircle, Info, Coffee, Wifi, Bus, Sparkles } from 'lucide-react';
import { HOTELS_CATALOG, HotelProperty, getWhatsAppUrl, IMAGES } from '../lib/site-data';

export const HotelsView: React.FC = () => {
  const [cityFilter, setCityFilter] = useState<'All' | 'Makkah' | 'Madinah'>('All');
  const [categoryFilter, setCategoryFilter] = useState<'All' | 'Luxury 5-Star' | 'Executive 4-Star' | 'Economy Standard'>('All');

  const filteredHotels = HOTELS_CATALOG.filter((hotel) => {
    const matchesCity = cityFilter === 'All' || hotel.city === cityFilter;
    const matchesCategory = categoryFilter === 'All' || hotel.category === categoryFilter;
    return matchesCity && matchesCategory;
  });

  return (
    <div className="bg-[#000000] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
            Haram Proximity & Comfort
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-1">
            Hotels & Accommodation
          </h1>
          <p className="text-sm sm:text-base text-[#D0D0D0] mt-3 leading-relaxed">
            Rest in peaceful comfort after your prayers. We offer hand-selected hotel accommodations in Makkah and Madinah ranging from clock-tower 5-star luxury to budget-friendly economy hotels with free continuous shuttle service.
          </p>
        </div>

        {/* Proximity & Distance Transparency Banner */}
        <div className="mb-10 bg-[#141414] border border-[#2d2d2d] p-4 sm:p-5 rounded-xl flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#BDBDBD] space-y-1">
            <span className="font-semibold text-white">Verified Proximity & Room Allocation Policy:</span>
            <p>
              We disclose honest walking distances and shuttle transfer details for every property. Room configurations (Double, Triple, Quad, or Family Suite) are confirmed in writing. Illustrative hotel room photography depicts standard property layouts.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 p-4 bg-[#111111] border border-[#262626] rounded-xl">
          {/* City Segmented Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-[#888] mr-1 hidden sm:inline">City:</span>
            {(['All', 'Makkah', 'Madinah'] as const).map((city) => (
              <button
                key={city}
                onClick={() => setCityFilter(city)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  cityFilter === city
                    ? 'bg-[#D4AF37] text-black shadow'
                    : 'text-[#BDBDBD] hover:text-white hover:bg-[#1f1f1f]'
                }`}
              >
                {city === 'All' ? 'All Cities' : `${city}`}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs text-[#888] mr-1 hidden sm:inline">Tier:</span>
            {(['All', 'Luxury 5-Star', 'Executive 4-Star', 'Economy Standard'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-white text-black font-semibold'
                    : 'text-[#BDBDBD] hover:text-white hover:bg-[#1f1f1f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => {
            const whatsappText = `Assalamu Alaikum. I would like to check rates, room availability, and package options for ${hotel.name} in ${hotel.city}.`;
            return (
              <div
                key={hotel.id}
                className="bg-[#161616] border border-[#2c2c2c] rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all group flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Hotel Photo */}
                  <div className="h-56 overflow-hidden relative bg-[#111]">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-[#333] px-2.5 py-1 rounded text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
                      <span>{hotel.category}</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-[#333] px-2 py-1 rounded text-xs text-white/90">
                      {hotel.city}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        {Array.from({ length: hotel.starRating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-white font-serif group-hover:text-[#D4AF37] transition-colors">
                        {hotel.name}
                      </h3>
                      
                      <div className="flex items-start gap-1.5 text-xs text-[#D4AF37] font-medium mt-2">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{hotel.distanceFromHaram}</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#BDBDBD] leading-relaxed">
                      {hotel.description}
                    </p>

                    {/* Room configurations */}
                    <div>
                      <span className="text-[11px] font-semibold text-white uppercase tracking-wider block mb-1.5">
                        Available Sharing Options:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {hotel.roomTypes.map((room, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-[#111111] border border-[#262626] text-[#A0A0A0] px-2.5 py-1 rounded"
                          >
                            {room}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Amenities list */}
                    <div className="pt-3 border-t border-[#242424]">
                      <span className="text-[11px] font-semibold text-white uppercase tracking-wider block mb-2">
                        Hotel Amenities:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#BDBDBD]">
                        {hotel.amenities.map((am, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span>{am}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Associated package badge */}
                    <div className="pt-2 text-[11px] text-[#8E7427] font-medium">
                      Included In: <strong className="text-[#C5A253]">{hotel.includedInPackages.join(', ')}</strong>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 sm:p-6 pt-0 border-t border-[#222] mt-4">
                  <a
                    href={getWhatsAppUrl(whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded text-xs font-semibold transition-colors shadow"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                    <span>Enquire Availability on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Accommodation Services FAQ Strip */}
        <div className="mt-16 bg-[#111111] border border-[#262626] p-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl font-bold font-serif text-white mb-4">
            Accommodation & Dining FAQ for Hyderabad Pilgrims
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#BDBDBD]">
            <div className="space-y-1">
              <h4 className="font-semibold text-white">Indian Buffet Catering:</h4>
              <p>
                Our contracted hotels or caterers prepare three fresh daily meals with familiar Hyderabadi and North Indian dishes, rice, roti, dal, tea, and seasonal fruits.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-white">Luggage & Elevator Assistance:</h4>
              <p>
                Hotel bell staff assist with group luggage transfers upon arrival in Jeddah, Makkah, and Madinah so elderly pilgrims avoid heavy lifting.
              </p>
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-white">Shuttle Reliability in Makkah:</h4>
              <p>
                For our economy tier properties (e.g. Al Kiswah Towers), air-conditioned shuttles run continuously 24/7 to the Kudai / Jarwal tunnel drop-off points.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
