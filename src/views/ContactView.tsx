import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';
import { ContactForm } from '../components/ContactForm';

export const ContactView: React.FC = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
            Hyderabad Head Office
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-1">
            Contact & Travel Enquiries
          </h1>
          <p className="text-sm sm:text-base text-[#D0D0D0] mt-3 leading-relaxed">
            Reach out directly to our Hyderabad Umrah desk for personalized travel advice, seasonal departure dates, group bookings, or to visit our office in Bandlaguda.
          </p>
        </div>

        {/* Content Layout: Contact Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Direct Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Visit Our Office</span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif">
                Imaad International Tours & Travels
              </h3>
              <p className="text-sm text-[#D0D0D0] leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              <div className="pt-2 text-xs text-[#8E7427] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                <span>Landmark: Beside Pista House, Rahmath Nagar, Bandlaguda</span>
              </div>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Bandlaguda+Hyderabad+Pista+House"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps / Get Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Calling Card */}
            <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xl space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Direct Telephones</span>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-[#1a1a1a] border border-[#303030] rounded flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#888] block">Primary Line / WhatsApp</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="p-2 bg-[#252525] hover:bg-[#333] text-[#D4AF37] rounded-full transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-3 bg-[#1a1a1a] border border-[#303030] rounded flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#888] block">Alternate Desk Line</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`}
                      className="text-base font-bold text-white hover:text-[#D4AF37] transition-colors"
                    >
                      {BUSINESS_INFO.phoneSecondary}
                    </a>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`}
                    className="p-2 bg-[#252525] hover:bg-[#333] text-[#D4AF37] rounded-full transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="pt-2 border-t border-[#252525] flex items-center gap-2 text-xs text-[#BDBDBD]">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors underline"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-2 text-xs text-[#888]">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{BUSINESS_INFO.operatingHours}</span>
              </div>

              {/* WhatsApp Callout */}
              <div className="pt-3">
                <a
                  href={getWhatsAppUrl("Assalamu Alaikum. I am contacting your Hyderabad office to enquire about Umrah package availability.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-lg text-sm font-semibold transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Lead & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
};
