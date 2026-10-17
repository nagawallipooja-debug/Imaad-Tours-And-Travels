import React, { useState } from 'react';
import { 
  Building, Calendar, Check, Plane, Utensils, MessageCircle, 
  Info, ShieldCheck, ArrowRight, HelpCircle, ChevronRight, X 
} from 'lucide-react';
import { UMRAH_PACKAGES, UmrahPackage, getWhatsAppUrl, BUSINESS_INFO } from '../lib/site-data';
import { PackageCard } from '../components/PackageCard';

interface UmrahPackagesViewProps {
  onNavigateContact: () => void;
}

export const UmrahPackagesView: React.FC<UmrahPackagesViewProps> = ({ onNavigateContact }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Basic' | 'Standard' | 'Deluxe'>('All');

  const filteredPackages = selectedFilter === 'All' 
    ? UMRAH_PACKAGES 
    : UMRAH_PACKAGES.filter(p => p.tier === selectedFilter);

  return (
    <div className="bg-[#000000] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
            Curated Pilgrimage Programs
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-1">
            Umrah Travel Packages
          </h1>
          <p className="text-sm sm:text-base text-[#D0D0D0] mt-3 leading-relaxed">
            All-inclusive Umrah travel programs organized directly from Hyderabad. Experience peaceful prayer with hand-selected hotels, authentic Indian buffet catering, air-conditioned transfers, and scholar-led historical Ziyarat.
          </p>
        </div>

        {/* Draft Quotation Notice */}
        <div className="mb-10 bg-[#141414] border border-[#D4AF37]/40 p-4 sm:p-5 rounded-xl flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#BDBDBD] space-y-1">
            <span className="font-semibold text-white">Draft Starting Quotations Notice:</span>
            <p>
              The prices displayed below (₹79,000, ₹95,000, and ₹1,10,000) are initial draft baseline figures. Actual final charges vary according to your chosen departure month, airline seat inventory from Hyderabad (HYD), and specific hotel room views (e.g. Kaaba View vs. Standard City View). A binding written quotation will be provided upon reservation inquiry.
            </p>
          </div>
        </div>

        {/* Interactive Filter Control */}
        <div className="mb-8 flex flex-wrap items-center gap-2 p-1.5 bg-[#111111] border border-[#2a2a2a] rounded-lg w-fit">
          {(['All', 'Basic', 'Standard', 'Deluxe'] as const).map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedFilter(tier)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded transition-colors cursor-pointer ${
                selectedFilter === tier
                  ? 'bg-[#D4AF37] text-black font-semibold shadow'
                  : 'text-[#BDBDBD] hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              {tier === 'All' ? 'All Packages (3)' : `${tier} Tier`}
            </button>
          ))}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Comprehensive Comparison Matrix Table */}
        <div className="mt-16 pt-12 border-t border-[#252525]">
          <h2 className="text-2xl font-bold font-serif text-white mb-2">
            Detailed Package Feature Comparison
          </h2>
          <p className="text-xs sm:text-sm text-[#BDBDBD] mb-6">
            Compare duration, accommodation proximity, transport tiers, and included services across our three package categories:
          </p>

          <div className="overflow-x-auto border border-[#2c2c2c] rounded-xl bg-[#0F0F0F]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#2c2c2c] bg-[#161616] text-[#D4AF37]">
                  <th className="p-4 font-semibold">Features & Specifications</th>
                  <th className="p-4 font-semibold">Economy (₹79,000)</th>
                  <th className="p-4 font-semibold">Executive (₹95,000)</th>
                  <th className="p-4 font-semibold">Luxury VIP (₹1,10,000)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#222222] text-[#D0D0D0]">
                <tr>
                  <td className="p-4 font-medium text-white">Starting Price per Person</td>
                  <td className="p-4 font-mono font-bold text-[#D4AF37]">₹79,000</td>
                  <td className="p-4 font-mono font-bold text-[#D4AF37]">₹95,000</td>
                  <td className="p-4 font-mono font-bold text-[#D4AF37]">₹1,10,000</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Total Program Duration</td>
                  <td className="p-4">15 Days (8 Makkah / 6 Madinah)</td>
                  <td className="p-4">15 Days (8 Makkah / 6 Madinah)</td>
                  <td className="p-4">15 Days (8 Makkah / 6 Madinah)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Makkah Hotel Proximity</td>
                  <td className="p-4">Approx. 900m (Free 24/7 Shuttle)</td>
                  <td className="p-4">Approx. 350m - 400m (Easy Walk)</td>
                  <td className="p-4">0m - 50m (Direct Courtyard Access)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Madinah Hotel Proximity</td>
                  <td className="p-4">Approx. 400m - 500m Walk</td>
                  <td className="p-4">Approx. 200m - 250m Walk</td>
                  <td className="p-4">0m - 100m (Steps from Ladies Gate)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Meals Arrangements</td>
                  <td className="p-4">3 Daily Indian Buffet Meals</td>
                  <td className="p-4">3 Daily Indian & Deluxe Buffet</td>
                  <td className="p-4">5-Star Hotel Breakfast + Curated Dinners</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Flight Departure</td>
                  <td className="p-4">HYD Economy Scheduled</td>
                  <td className="p-4">HYD Premium Airline Partner</td>
                  <td className="p-4">HYD Saudia / Emirates / Air India</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Transport Vehicle</td>
                  <td className="p-4">AC Luxury Coach</td>
                  <td className="p-4">AC VIP Coach + Luggage Van</td>
                  <td className="p-4">Private Luxury Sprinter / GMC</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Ziyarat Inclusions</td>
                  <td className="p-4">Guided Makkah & Madinah Tour</td>
                  <td className="p-4">Comprehensive Tours + Ji'ranah</td>
                  <td className="p-4">Private Scholar Guided Tours</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Zamzam 5L Canister</td>
                  <td className="p-4 text-emerald-400">Included (Complimentary)</td>
                  <td className="p-4 text-emerald-400">Included (Complimentary)</td>
                  <td className="p-4 text-emerald-400">Included (Complimentary)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Pilgrim Welcome Kit</td>
                  <td className="p-4">Ihram/Abaya, Bag & Guidebook</td>
                  <td className="p-4">Deluxe Kit + Prayer Rug</td>
                  <td className="p-4">VIP Luggage Set + Digital Counter</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium text-white">Direct WhatsApp Booking</td>
                  <td className="p-4">
                    <a
                      href={getWhatsAppUrl("Assalamu Alaikum. I would like to book the Economy Umrah Package (₹79,000).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline"
                    >
                      Enquire Economy →
                    </a>
                  </td>
                  <td className="p-4">
                    <a
                      href={getWhatsAppUrl("Assalamu Alaikum. I would like to book the Executive Umrah Package (₹95,000).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline"
                    >
                      Enquire Executive →
                    </a>
                  </td>
                  <td className="p-4">
                    <a
                      href={getWhatsAppUrl("Assalamu Alaikum. I would like to book the Luxury VIP Umrah Package (₹1,10,000).")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#25D366] font-semibold hover:underline"
                    >
                      Enquire Luxury →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Custom Group & Family Quotation CTA */}
        <div className="mt-16 bg-[#161616] border border-[#303030] p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Need a Custom Family or Private Group Package?
            </h3>
            <p className="text-xs sm:text-sm text-[#BDBDBD] mt-1 max-w-xl">
              We design personalized itineraries with private suite accommodations, custom flight routings, wheelchair assistance, or extended stays.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onNavigateContact}
              className="bg-[#D4AF37] hover:bg-[#C5A253] text-black px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Request Custom Quotation
            </button>
            <a
              href={getWhatsAppUrl("Assalamu Alaikum. I would like to request a customized family Umrah quotation with specific hotel preferences.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded text-sm font-semibold transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
