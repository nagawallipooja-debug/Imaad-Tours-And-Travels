import React, { useState } from 'react';
import { Check, MessageCircle, Calendar, MapPin, Building, Plane, Utensils, Info, X } from 'lucide-react';
import { UmrahPackage, getWhatsAppUrl } from '../lib/site-data';

interface PackageCardProps {
  pkg: UmrahPackage;
  onOpenQuotationModal?: (pkg: UmrahPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onOpenQuotationModal }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const whatsappMessage = `Assalamu Alaikum. I am interested in the ${pkg.name} (${pkg.draftPriceFormatted}) departing from Hyderabad. Please share the confirmed itinerary, upcoming batch dates, hotel details, and final quotation.`;

  return (
    <>
      <div className="bg-[#181818] border border-[#303030] rounded-xl overflow-hidden hover:border-[#D4AF37] transition-all duration-300 flex flex-col group shadow-lg">
        {/* Card Header Media */}
        <div className="relative h-56 sm:h-60 overflow-hidden bg-[#111111]">
          <img
            src={pkg.image}
            alt={pkg.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />
          
          {/* Tier Label */}
          <div className="absolute top-4 left-4">
            <span className="text-xs font-bold tracking-wider uppercase text-black bg-[#D4AF37] px-2.5 py-1 rounded shadow-md">
              {pkg.tier} Category
            </span>
          </div>

          {/* Pricing Banner */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="text-[11px] text-[#BDBDBD] uppercase tracking-wider block">Draft Starting Price</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] font-mono tabular-nums">
                  {pkg.draftPriceFormatted}
                </span>
                <span className="text-xs text-white/70 font-medium">/ person</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-white/90 bg-black/60 backdrop-blur-sm border border-[#303030] px-2.5 py-1 rounded">
                Ex-Hyderabad (HYD)
              </span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
          <div>
            <h3 className="text-xl font-bold text-white font-serif group-hover:text-[#D4AF37] transition-colors">
              {pkg.name}
            </h3>
            
            <div className="flex items-center gap-2 text-xs text-[#BDBDBD] mt-2">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span>{pkg.duration}</span>
            </div>

            {/* Key Logistics */}
            <div className="mt-4 pt-4 border-t border-[#262626] space-y-2.5 text-xs text-[#BDBDBD]">
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Makkah: {pkg.makkahHotel}</span>
                  <span className="text-[11px] text-[#8E7427]">{pkg.makkahDistance}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-[#C5A253] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Madinah: {pkg.madinahHotel}</span>
                  <span className="text-[11px] text-[#8E7427]">{pkg.madinahDistance}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Utensils className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="truncate">{pkg.meals}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Plane className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="truncate">{pkg.flights}</span>
              </div>
            </div>

            {/* Top Inclusions Highlight */}
            <div className="mt-4 pt-4 border-t border-[#262626]">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#D4AF37] block mb-2">
                Included Highlights:
              </span>
              <ul className="space-y-1.5 text-xs text-white/90">
                {pkg.inclusions.slice(0, 4).map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-4 border-t border-[#262626]">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded text-sm font-semibold transition-all shadow active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>

            <button
              onClick={() => setDetailsOpen(true)}
              className="w-full py-2.5 px-4 rounded text-xs font-semibold border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-colors text-center"
            >
              View Full Package Details
            </button>
          </div>
        </div>
      </div>

      {/* Package Detail Modal */}
      {detailsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-[#181818] border border-[#303030] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
            <button
              onClick={() => setDetailsOpen(false)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-1.5 text-white/60 hover:text-white bg-[#222] hover:bg-[#333] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                {pkg.tier} Tier Specification
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-1">
                {pkg.name}
              </h2>
              <div className="flex flex-wrap items-baseline gap-2 mt-2">
                <span className="text-2xl font-bold text-[#D4AF37] font-mono tabular-nums">
                  {pkg.draftPriceFormatted}
                </span>
                <span className="text-xs text-[#BDBDBD]">/ person (Draft Quotation)</span>
              </div>
              <p className="text-xs text-[#A0A0A0] mt-1 bg-[#111111] p-2.5 rounded border border-[#2a2a2a]">
                <Info className="w-3.5 h-3.5 inline text-[#D4AF37] mr-1" />
                {pkg.priceNote}
              </p>
            </div>

            {/* Key Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-[#BDBDBD]">
              <div className="p-3 bg-[#111111] border border-[#262626] rounded">
                <span className="text-white font-semibold block mb-1">Duration & Schedule:</span>
                <p>{pkg.duration}</p>
                <p className="mt-1 text-[#D4AF37]">Departure: {pkg.departureAirport}</p>
              </div>
              <div className="p-3 bg-[#111111] border border-[#262626] rounded">
                <span className="text-white font-semibold block mb-1">Room Sharing Options:</span>
                <ul className="list-disc list-inside space-y-0.5">
                  {pkg.sharingOptions.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              </div>
              <div className="p-3 bg-[#111111] border border-[#262626] rounded">
                <span className="text-white font-semibold block mb-1">Makkah Accommodation:</span>
                <p className="text-white">{pkg.makkahHotel}</p>
                <p className="text-[#8E7427] mt-0.5">{pkg.makkahDistance}</p>
              </div>
              <div className="p-3 bg-[#111111] border border-[#262626] rounded">
                <span className="text-white font-semibold block mb-1">Madinah Accommodation:</span>
                <p className="text-white">{pkg.madinahHotel}</p>
                <p className="text-[#8E7427] mt-0.5">{pkg.madinahDistance}</p>
              </div>
            </div>

            {/* Inclusions */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#D4AF37]" />
                Package Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                {pkg.inclusions.map((inc, i) => (
                  <div key={i} className="flex items-start gap-2 bg-[#121212] p-2 rounded border border-[#222]">
                    <span className="text-[#D4AF37] font-bold">✓</span>
                    <span>{inc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div className="mt-6">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 text-[#C5A253]">
                Package Exclusions
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#BDBDBD]">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i}>{exc}</li>
                ))}
              </ul>
            </div>

            {/* Booking Terms */}
            <div className="mt-6 p-4 bg-[#111111] border border-[#282828] rounded text-xs text-[#BDBDBD] space-y-1.5">
              <h5 className="font-semibold text-white">Booking & Payment Notes:</h5>
              {pkg.bookingTerms.map((term, i) => (
                <p key={i}>• {term}</p>
              ))}
            </div>

            {/* Modal Bottom CTAs */}
            <div className="mt-8 pt-4 border-t border-[#303030] flex flex-col sm:flex-row items-center gap-3">
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded text-sm font-semibold transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Enquire via WhatsApp</span>
              </a>
              <button
                onClick={() => setDetailsOpen(false)}
                className="w-full sm:w-1/2 py-3 px-4 rounded text-sm font-medium border border-[#303030] text-white/80 hover:text-white hover:bg-[#222] transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
