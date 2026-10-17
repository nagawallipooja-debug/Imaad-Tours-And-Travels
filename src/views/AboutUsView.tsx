import React from 'react';
import { 
  Building, ShieldCheck, HeartHandshake, MapPin, Phone, 
  Mail, Users, Award, CheckCircle2, MessageCircle, ArrowRight 
} from 'lucide-react';
import { BUSINESS_INFO, IMAGES, getWhatsAppUrl } from '../lib/site-data';
import { BrandLogo } from '../components/BrandLogo';

interface AboutUsViewProps {
  onNavigate: (view: string) => void;
}

export const AboutUsView: React.FC<AboutUsViewProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#000000] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 border-b border-[#222222] pb-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
              About Our Travel Practice
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-1">
              Imaad International Tours & Travels
            </h1>
            <p className="text-sm sm:text-base text-[#D0D0D0] mt-3 leading-relaxed">
              Your Sacred Journey, Beautifully Planned. Operating from Hyderabad, we assist pilgrims and their families with carefully scheduled Umrah departures, comfortable hotel arrangements, and authentic historical Ziyarat.
            </p>
          </div>
          <div className="p-4 bg-[#0e0e0e] border border-[#2a2a2a] rounded-2xl flex items-center justify-center shrink-0 shadow-xl">
            <BrandLogo size="lg" />
          </div>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-5 text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
            <h2 className="text-2xl font-bold font-serif text-white">
              A Mission Founded on Trust, Clarity & Service
            </h2>
            <p>
              The journey to the Holy Lands of Makkah Al-Mukarramah and Madinah Al-Munawwarah is a deeply sacred milestone in every believer's life. We believe that undertaking this pilgrimage should never be burdened by ambiguous pricing, confusing terms, or unverified hotel claims.
            </p>
            <p>
              At <strong className="text-white">Imaad International Tours & Travels</strong>, our philosophy is anchored in radical transparency. Every customer receives honest hotel proximity distances, explicit food and transport menus, and clear written quotation terms before any deposit is paid.
            </p>
            <p>
              From our Hyderabad office in Bandlaguda, our travel advisors personally review passport validities, visa prerequisites, and specific health or mobility needs to ensure your peace of mind from airport departure to your blessed return.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#303030] shadow-2xl">
            <img
              src={IMAGES.heroKaaba}
              alt="Holy Kaaba at twilight"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-xs font-semibold text-[#D4AF37] tracking-wider uppercase">
                Hyderabad Umrah Desk
              </span>
              <h3 className="text-lg font-bold text-white font-serif mt-1">
                Local Presence, Global Coordination
              </h3>
              <p className="text-xs text-[#BDBDBD] mt-1">
                Direct office consultations available at Rahmath Nagar, Bandlaguda, Hyderabad.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Assistance */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-serif text-white mb-6">
            Our Approach to Pilgrim Care
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-serif">
                Care for Senior Citizens
              </h3>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                Prioritizing close walking proximity to Haram gates or continuous shuttle service, ground-floor dining, and wheelchair assistance options.
              </p>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-serif">
                Transparent Quotations
              </h3>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                No hidden tariffs or sudden airport fees. What is listed in your package booking agreement is what is provided.
              </p>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-serif">
                Knowledgeable Guides
              </h3>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                Scholars and Urdu/Hindi-fluent guides accompany all historical Ziyarat tours in Makkah, Madinah, and Ji'ranah.
              </p>
            </div>

            <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-serif">
                Wholesome Indian Meals
              </h3>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                Freshly prepared breakfast, lunch, and dinner buffet options tailored to Hyderabadi and Indian palates throughout the stay.
              </p>
            </div>
          </div>
        </div>

        {/* How Booking Works (Simple 4 Steps) */}
        <div className="mb-16 bg-[#111111] border border-[#262626] p-8 sm:p-10 rounded-2xl">
          <h2 className="text-2xl font-bold font-serif text-white mb-2">
            How Enquiry & Booking Works
          </h2>
          <p className="text-xs sm:text-sm text-[#BDBDBD] mb-8">
            A straightforward, dignified booking experience without pressure or complexity:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D4AF37] font-mono">STEP 01</span>
              <h4 className="text-base font-bold text-white">Select or Enquire</h4>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                Choose an Economy, Executive, or Luxury package or request custom dates for your family.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D4AF37] font-mono">STEP 02</span>
              <h4 className="text-base font-bold text-white">Quotation & Dates</h4>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                Receive confirmed flight schedules from Hyderabad and exact hotel details in writing.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D4AF37] font-mono">STEP 03</span>
              <h4 className="text-base font-bold text-white">Document Processing</h4>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                Submit your passport copies for visa authorization and travel medical insurance.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D4AF37] font-mono">STEP 04</span>
              <h4 className="text-base font-bold text-white">Kit & Departure</h4>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                Collect your Umrah luggage set, Ihram/Abaya, and join the pre-departure guidance session.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-[#181818] border border-[#333] p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white font-serif">
              Have Questions or Wish to Visit Our Office?
            </h3>
            <p className="text-xs text-[#BDBDBD] mt-1">
              Located at {BUSINESS_INFO.address}. Open daily 9:00 AM – 9:00 PM IST.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#D4AF37] hover:bg-[#C5A253] text-black px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Contact Office
            </button>
            <a
              href={getWhatsAppUrl("Assalamu Alaikum. I would like to arrange an appointment or visit your office to discuss Umrah packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded text-sm font-semibold transition-colors flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
