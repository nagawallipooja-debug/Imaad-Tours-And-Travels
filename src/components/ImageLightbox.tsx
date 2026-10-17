import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryPhoto } from '../lib/site-data';

interface ImageLightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
    >
      {/* Top Bar with counter & close */}
      <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full z-10">
        <div className="text-sm font-medium text-[#BDBDBD]">
          <span className="text-[#D4AF37] font-semibold">{currentIndex + 1}</span> of{' '}
          <span>{photos.length}</span>
          <span className="mx-2 text-[#444]">|</span>
          <span className="text-white/80">{currentPhoto.categoryLabel}</span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="p-2 text-white/80 hover:text-white bg-[#1A1A1A] hover:bg-[#2A2A2A] rounded-full border border-[#333] transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Display Area with Prev/Next Controls */}
      <div className="relative flex-1 flex items-center justify-center my-2 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          aria-label="Previous photo"
          className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 bg-[#111111]/80 hover:bg-[#222222] border border-[#333] text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div className="relative max-h-[70vh] sm:max-h-[75vh] max-w-full flex items-center justify-center">
          <img
            src={currentPhoto.image}
            alt={currentPhoto.title}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] sm:max-h-[75vh] w-auto max-w-full object-contain rounded border border-[#262626] shadow-2xl"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next photo"
          className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 bg-[#111111]/80 hover:bg-[#222222] border border-[#333] text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption & Details */}
      <div className="max-w-4xl mx-auto w-full text-center pb-2 z-10">
        <h4 className="text-base sm:text-lg font-bold text-white font-serif">
          {currentPhoto.title}
        </h4>
        <div className="flex items-center justify-center gap-1.5 text-xs text-[#D4AF37] mt-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{currentPhoto.location}</span>
        </div>
        <p className="text-xs sm:text-sm text-[#BDBDBD] mt-1.5 max-w-2xl mx-auto">
          {currentPhoto.description}
        </p>
      </div>
    </div>
  );
};
