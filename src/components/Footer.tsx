import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#252525] text-white">
      {/* Top Banner: Quick Contact Callout */}
      <div className="border-b border-[#222222] bg-[#000000]/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
              Begin Your Sacred Journey With Us
            </h3>
            <p className="text-[#BDBDBD] text-sm mt-1">
              Speak directly with our Hyderabad Umrah advisors for customized quotations and travel dates.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-4 py-2.5 rounded text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={getWhatsAppUrl("Assalamu Alaikum. I would like to enquire about your upcoming Umrah batches and package pricing.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded text-sm font-semibold transition-all shadow-lg active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Us Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer focus:outline-none"
              aria-label="Imaad International Tours & Travels - Return to Home"
            >
              <BrandLogo size="lg" className="mb-2 drop-shadow-lg" />
            </button>
            <p className="text-xs text-[#BDBDBD] leading-relaxed">
              Your Sacred Journey, Beautifully Planned. Dedicated Umrah packages, verified hotels, guided Makkah and Madinah historical Ziyarat, and personalized travel coordination from Hyderabad.
            </p>
            <div className="pt-2 text-xs text-[#BDBDBD] space-y-1.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BUSINESS_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Travel Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#303030] pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BDBDBD]">
              <li>
                <button
                  onClick={() => handleNav('umrah-packages')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Economy Umrah Package (₹79,000)</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('umrah-packages')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Executive Umrah Package (₹95,000)</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('umrah-packages')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Luxury VIP Umrah Package (₹1,10,000)</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('makkah-ziyarat')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Makkah Historical Ziyarat (12 Sites)</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('madinah-ziyarat')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Madinah Sacred Ziyarat</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('makkah-ziyarat')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Umrah from Masjid al-Ji'ranah</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('hotels')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center justify-between w-full text-left"
                >
                  <span>Makkah & Madinah Hotels</span>
                  <ArrowUpRight className="w-3 h-3 text-white/30" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#303030] pb-2">
              Explore & About
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BDBDBD]">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#D4AF37] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about-us')} className="hover:text-[#D4AF37] transition-colors">
                  About Imaad International
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('gallery')} className="hover:text-[#D4AF37] transition-colors">
                  Visual Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#D4AF37] transition-colors">
                  Contact & Location
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#D4AF37] transition-colors block"
                >
                  Email: {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`}
                  className="hover:text-[#D4AF37] transition-colors block"
                >
                  Alternate: {BUSINESS_INFO.phoneSecondary}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Transparency Policies */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#303030] pb-2">
              Legal & Transparency
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BDBDBD]">
              <li>
                <button
                  onClick={() => handleNav('privacy-policy')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('terms-and-conditions')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cancellation-refund-policy')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Cancellation & Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('booking-payment-policy')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Booking & Payment Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('disclaimer')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Website Disclaimer
                </button>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-[#151515] border border-[#282828] rounded">
              <div className="flex items-center gap-1.5 text-xs text-[#D4AF37] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Quotation Protocol</span>
              </div>
              <p className="text-[11px] text-[#A0A0A0] mt-1 leading-normal">
                All package prices, flight schedules, and hotel bookings are finalized in your written booking confirmation.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-[#1c1c1c] py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#707070]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Imaad International Tours & Travels. All rights reserved.</p>
          <p className="text-[#888888]">
            Office: 18-13-8/75/1, Rahmath Nagar, Bandlaguda, Hyderabad 500005, Telangana.
          </p>
        </div>
      </div>
    </footer>
  );
};
