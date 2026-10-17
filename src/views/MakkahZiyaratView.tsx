import React, { useState } from 'react';
import { MapPin, MessageCircle, Info, ChevronRight, Compass, ShieldCheck } from 'lucide-react';
import { MAKKAH_ZIYARAT, ZiyaratLocation, getWhatsAppUrl, IMAGES } from '../lib/site-data';

export const MakkahZiyaratView: React.FC = () => {
  const [activeSite, setActiveSite] = useState<ZiyaratLocation | null>(null);

  return (
    <div className="bg-[#000000] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Banner Header */}
        <div className="relative rounded-2xl overflow-hidden border border-[#303030] mb-12 bg-[#0B0B0B]">
          <div className="h-64 sm:h-80 w-full overflow-hidden relative">
            <img
              src={IMAGES.jabalAlNour}
              alt="Makkah Sacred Landmarks"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          <div className="p-6 sm:p-10 relative -mt-24 sm:-mt-28 z-10 max-w-3xl">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              Guided Sacred Excursions
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-1">
              Makkah Al-Mukarramah Ziyarat
            </h1>
            <p className="text-xs sm:text-sm text-[#D0D0D0] mt-3 leading-relaxed">
              Experience the profound history of Islam through 12 revered historical landmarks in and around the Holy City of Makkah. Accompanied by experienced scholars in air-conditioned coaches.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppUrl("Assalamu Alaikum. I would like to enquire about your guided Makkah historical Ziyarat tour and timings.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded text-sm font-semibold transition-all shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Enquire on WhatsApp</span>
              </a>
              <span className="text-xs text-[#8E7427]">
                Included in all our 15-day Umrah packages
              </span>
            </div>
          </div>
        </div>

        {/* Ji'ranah Miqat Special Callout */}
        <div className="mb-12 bg-[#141414] border border-[#D4AF37]/50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">
              Optional Additional Umrah
            </span>
            <h3 className="text-xl font-bold text-white font-serif">
              Umrah from Masjid al-Ji'ranah (Miqat)
            </h3>
            <p className="text-xs sm:text-sm text-[#BDBDBD] max-w-2xl leading-relaxed">
              We arrange special coach departures to Masjid al-Ji'ranah for pilgrims wanting to enter Ihram and perform a second Umrah. Full guidance and changing facilities available on-site.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Assalamu Alaikum. I would like to enquire about the Masjid al-Ji'ranah Umrah excursion and coach schedule.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#C5A253] text-black px-5 py-2.5 rounded text-xs font-semibold transition-colors"
          >
            <span>Book Ji'ranah Excursion</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* 12 Verified Historical Sites Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold font-serif text-white">
            12 Historical Sites of Makkah
          </h2>
          <p className="text-xs text-[#BDBDBD] mt-1">
            Carefully curated, respectfully documented, and authentic to Islamic traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAKKAH_ZIYARAT.map((site, index) => {
            const whatsappText = `Assalamu Alaikum. I would like more information regarding the Ziyarat to ${site.name} in Makkah.`;
            return (
              <div
                key={site.id}
                className="bg-[#161616] border border-[#2c2c2c] rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative bg-[#111]">
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
                      <strong className="text-white">Historical Significance:</strong> {site.significance}
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

        {/* Scholar Guidance & Respect Policy */}
        <div className="mt-16 bg-[#111111] border border-[#262626] p-6 rounded-xl text-xs text-[#9E9E9E] space-y-2">
          <div className="flex items-center gap-2 text-white font-semibold text-sm">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Islamic Respect & Authenticity Protocol</span>
          </div>
          <p>
            Our guided historical Ziyarat tours prioritize religious authenticity and spiritual respect. Tour scholars explain the authentic documented events that transpired at each landmark, avoiding unsupported myths and strictly adhering to Islamic guidelines. Timing is scheduled to ensure you never miss any congregational Fard prayer at Al-Masjid al-Haram.
          </p>
        </div>

      </div>
    </div>
  );
};
