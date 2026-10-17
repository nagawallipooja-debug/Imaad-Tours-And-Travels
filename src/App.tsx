import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ImageLightbox } from './components/ImageLightbox';
import { HomeView } from './views/HomeView';
import { UmrahPackagesView } from './views/UmrahPackagesView';
import { MakkahZiyaratView } from './views/MakkahZiyaratView';
import { MadinahZiyaratView } from './views/MadinahZiyaratView';
import { HotelsView } from './views/HotelsView';
import { GalleryView } from './views/GalleryView';
import { AboutUsView } from './views/AboutUsView';
import { ContactView } from './views/ContactView';
import { PrivacyPolicyView } from './views/PrivacyPolicyView';
import { TermsConditionsView } from './views/TermsConditionsView';
import { CancellationRefundView } from './views/CancellationRefundView';
import { BookingPaymentView } from './views/BookingPaymentView';
import { DisclaimerView } from './views/DisclaimerView';
import { GALLERY_ITEMS, getWhatsAppUrl } from './lib/site-data';
import { MessageCircle } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Sync with browser URL / hash for seamless navigation & back/forward buttons
  useEffect(() => {
    const parseViewFromUrl = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const path = window.location.pathname.replace(/^\//, '').trim();
      const target = hash || path;

      const validViews = [
        'home',
        'umrah-packages',
        'makkah-ziyarat',
        'madinah-ziyarat',
        'hotels',
        'gallery',
        'about-us',
        'contact',
        'privacy-policy',
        'terms-and-conditions',
        'cancellation-refund-policy',
        'booking-payment-policy',
        'disclaimer',
      ];

      if (validViews.includes(target)) {
        setCurrentView(target);
      } else {
        setCurrentView('home');
      }
    };

    parseViewFromUrl();
    window.addEventListener('popstate', parseViewFromUrl);
    window.addEventListener('hashchange', parseViewFromUrl);
    return () => {
      window.removeEventListener('popstate', parseViewFromUrl);
      window.removeEventListener('hashchange', parseViewFromUrl);
    };
  }, []);

  const navigateTo = (view: string) => {
    setCurrentView(view);
    window.location.hash = view === 'home' ? '' : view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
  };

  const handlePrevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar currentView={currentView} onNavigate={navigateTo} />

      {/* Main Viewport Content */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onOpenPhotoLightbox={handleOpenLightbox}
          />
        )}
        {currentView === 'umrah-packages' && (
          <UmrahPackagesView onNavigateContact={() => navigateTo('contact')} />
        )}
        {currentView === 'makkah-ziyarat' && <MakkahZiyaratView />}
        {currentView === 'madinah-ziyarat' && <MadinahZiyaratView />}
        {currentView === 'hotels' && <HotelsView />}
        {currentView === 'gallery' && (
          <GalleryView onOpenLightbox={handleOpenLightbox} />
        )}
        {currentView === 'about-us' && <AboutUsView onNavigate={navigateTo} />}
        {currentView === 'contact' && <ContactView />}
        {currentView === 'privacy-policy' && (
          <PrivacyPolicyView onNavigateHome={() => navigateTo('home')} />
        )}
        {currentView === 'terms-and-conditions' && (
          <TermsConditionsView onNavigateHome={() => navigateTo('home')} />
        )}
        {currentView === 'cancellation-refund-policy' && (
          <CancellationRefundView onNavigateHome={() => navigateTo('home')} />
        )}
        {currentView === 'booking-payment-policy' && (
          <BookingPaymentView onNavigateHome={() => navigateTo('home')} />
        )}
        {currentView === 'disclaimer' && (
          <DisclaimerView onNavigateHome={() => navigateTo('home')} />
        )}
      </main>

      {/* Reusable Image Lightbox Modal */}
      <ImageLightbox
        photos={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />

      {/* Floating Persistent WhatsApp Help Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppUrl("Assalamu Alaikum. I am browsing your website and would like immediate assistance regarding Umrah packages.")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Contact"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20 group"
        >
          <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
          <span className="hidden sm:inline font-semibold text-xs tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
