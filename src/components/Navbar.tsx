import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../lib/site-data';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'home' },
    { label: 'Umrah Packages', view: 'umrah-packages' },
    { label: 'Makkah Ziyarat', view: 'makkah-ziyarat' },
    { label: 'Madinah Ziyarat', view: 'madinah-ziyarat' },
    { label: 'Hotels', view: 'hotels' },
    { label: 'Gallery', view: 'gallery' },
    { label: 'About Us', view: 'about-us' },
    { label: 'Contact Us', view: 'contact' },
  ];

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro bar for direct contact numbers */}
      <div className="bg-[#0B0B0B] border-b border-[#222222] text-[#BDBDBD] text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
              Hyderabad, Telangana
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <a 
              href={`tel:${BUSINESS_INFO.phoneRaw}`} 
              className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-white/30">·</span>
            <a 
              href={`tel:${BUSINESS_INFO.phoneSecondaryRaw}`} 
              className="hidden md:flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
            >
              <span>{BUSINESS_INFO.phoneSecondary}</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="text-white/60">Office Hours: 9 AM - 9 PM IST</span>
            <a 
              href={`mailto:${BUSINESS_INFO.email}`} 
              className="hidden sm:inline hover:text-[#D4AF37] transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#303030] shadow-xl py-3.5'
            : 'bg-[#000000] border-b border-[#222222] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          
          {/* Zone 1: Official Brand Logo Lockup */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded py-1 cursor-pointer transition-transform duration-200 active:scale-95"
            aria-label="Imaad International Tours & Travels - Return to Home"
          >
            <BrandLogo size="md" className="drop-shadow-md" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-[13px] font-medium text-[#BDBDBD]">
            {navLinks.map((link) => {
              const isActive = currentView === link.view;
              return (
                <button
                  key={link.view}
                  onClick={() => handleNavClick(link.view)}
                  className={`transition-colors whitespace-nowrap hover:text-white py-1 relative cursor-pointer ${
                    isActive ? 'text-[#D4AF37] font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* WhatsApp Direct CTA */}
            <a
              href={getWhatsAppUrl("Assalamu Alaikum. I am enquiring from your website about Umrah packages and travel services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded transition-all shadow-md active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Enquiry</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-white/80 hover:text-white border border-[#303030] rounded focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0B0B] border-b border-[#303030] px-4 py-6 shadow-2xl transition-all">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <button
                    key={link.view}
                    onClick={() => handleNavClick(link.view)}
                    className={`text-left py-2.5 px-3 rounded text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#181818] text-[#D4AF37] font-semibold border-l-2 border-[#D4AF37]'
                        : 'text-white/80 hover:bg-[#141414] hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-white/30" />
                  </button>
                );
              })}

              <div className="pt-4 border-t border-[#222222] flex flex-col gap-2.5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 border border-[#D4AF37] text-[#D4AF37] py-2.5 rounded text-sm font-medium hover:bg-[#D4AF37]/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={getWhatsAppUrl("Assalamu Alaikum. I am inquiring via mobile on your website about Umrah packages.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded text-sm font-semibold hover:bg-[#20ba59] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

function ChevronRight(props: { className?: string }) {
  return (
    <svg className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
