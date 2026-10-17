import React from 'react';
import { MapPin, MessageCircle, Info, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { MADINAH_ZIYARAT, getWhatsAppUrl, IMAGES } from '../lib/site-data';

export const MadinahZiyaratView: React.FC = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Header */}
        <div className="relative rounded-2xl overflow-hidden border border-[#303030] mb-12 bg-[#0B0B0B]">
          <div className="h-64 sm:h-80 w-full overflow-hidden relative">
            <img
              src={IMAGES.masjidNabawi}
              alt="Al-Masjid an-Nabawi in Madinah Al-Munawwarah"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.72] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="p-6 sm:p-10 relative -mt-24 sm:-mt-28 z-10 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              The Radiant City
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-1">
              Madinah Al-Munawwarah Ziyarat
            </h1>
            <p className="text-xs sm:text-sm text-[#D0D0D0] mt-3 leading-relaxed">
              Immerse your soul in the blessed serenity of the City of the Messenger ﷺ. Our guided tours in Madinah explore the foundational sites of the Islamic community with utmost reverence and spiritual decorum.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl("Assalamu Alaikum. I would like to enquire about your guided Madinah Ziyarat excursions and arrangements.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded text-sm font-semibold transition-all shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Enquire on WhatsApp</span>
              </a>
              <span className="text-xs text-[#8E7427]">
                Included with dedicated air-conditioned coach transfers
              </span>
            </div>
          </div>
        </div>

        {/* Virtues of Madinah Banner */}
        <div className="mb-12 bg-[#121212] border border-[#2a2a2a] p-6 rounded-xl flex items-start gap-4">
          <Heart className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#BDBDBD] space-y-1">
            <h3 className="font-bold text-white font-serif text-base">
              Virtues of Sending Salutations in Madinah
            </h3>
            <p className="leading-relaxed">
              Visiting the Prophet's Mosque and offering Salam at the Rawdah Mubarak is a spiritually transforming experience. We coordinate visiting slots for male and female pilgrims (via the official Nusuk portal guidance) so your visit is organized and peaceful.
            </p>
          </div>
        </div>

        {/* Sites Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold font-serif text-white">
            Sacred Historical Destinations in Madinah
          </h2>
          <p className="text-xs text-[#BDBDBD] mt-1">
            Authentically documented sites visited during our 15-day Umrah program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MADINAH_ZIYARAT.map((site, index) => {
            const whatsappText = `Assalamu Alaikum. I would like more information regarding the Madinah Ziyarat to ${site.name}.`;
            return (
              <div
                key={site.id}
                className="bg-[#161616] border border-[#2c2c2c] rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-52 overflow-hidden relative bg-[#111]">
                    <img
                      src={site.image}
                      alt={site.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/30 to-transparent" />
                    
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-[#333] px-2.5 py-1 rounded text-xs font-mono font-bold text-[#D4AF37]">
                      Site 0{index + 1}
                    </div>

                    <div className="absolute bottom-2 right-3 text-right">
                      <span className="text-xs font-serif text-white/80 tracking-wide font-medium">
                        {site.arabicName}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-[#D4AF37] transition-colors">
                      {site.name}
                    </h3>

                    {site.locationNote && (
                      <div className="flex items-center gap-1.5 text-xs text-[#8E7427] mt-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{site.locationNote}</span>
                      </div>
                    )}

                    <p className="text-xs text-[#D0D0D0] mt-3 leading-relaxed">
                      {site.shortDescription}
                    </p>

                    <div className="mt-3.5 p-2.5 bg-[#101010] border border-[#222] rounded text-[11px] text-[#A0A0A0] leading-normal">
                      <strong className="text-white">Significance:</strong> {site.significance}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#222222] mt-4">
                  <a
                    href={getWhatsAppUrl(whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white py-2 rounded text-xs font-semibold transition-colors border border-[#25D366]/40"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire About This Site</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Date Markets & Additional Landmarks Note */}
        <div className="mt-16 bg-[#111111] border border-[#262626] p-6 rounded-xl text-xs text-[#9E9E9E] space-y-2">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Date Markets & Local Coordination</span>
          </div>
          <p>
            In addition to the historical mosques, our Madinah itinerary includes guided stops at authentic date markets where pilgrims can purchase renowned Ajwa, Safawi, and Sukari dates directly from local growers.
          </p>
        </div>

      </div>
    </div>
  );
};
