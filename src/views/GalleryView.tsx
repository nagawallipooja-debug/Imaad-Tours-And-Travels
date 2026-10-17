import React, { useState } from 'react';
import { Eye, MapPin, Filter, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, GalleryPhoto, getWhatsAppUrl } from '../lib/site-data';

interface GalleryViewProps {
  onOpenLightbox: (index: number) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenLightbox }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Photos' },
    { id: 'makkah', label: 'Makkah' },
    { id: 'madinah', label: 'Madinah' },
    { id: 'umrah', label: 'Umrah & Pilgrims' },
    { id: 'makkah-ziyarat', label: 'Makkah Ziyarat' },
    { id: 'madinah-ziyarat', label: 'Madinah Ziyarat' },
    { id: 'hotels', label: 'Hotels & Rooms' },
    { id: 'facilities', label: 'Hotel Facilities' },
    { id: 'group-travel', label: 'Group Travel & Experiences' },
  ];

  const filteredItems = selectedFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <div className="bg-[#000000] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase">
            Visual Highlights
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-white mt-1">
            Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-[#D0D0D0] mt-3 leading-relaxed">
            Browse authentic photographs of the two Holy Harams, sacred historical Ziyarat landmarks, hotel interiors, and pilgrimage moments arranged by Imaad International Tours & Travels.
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-[#D4AF37] text-black font-semibold shadow-md'
                  : 'bg-[#141414] text-[#BDBDBD] hover:text-white hover:bg-[#202020] border border-[#2a2a2a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {filteredItems.map((photo) => {
            const globalIndex = GALLERY_ITEMS.findIndex((item) => item.id === photo.id);
            return (
              <div
                key={photo.id}
                onClick={() => onOpenLightbox(globalIndex >= 0 ? globalIndex : 0)}
                className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden cursor-pointer group hover:border-[#D4AF37] transition-all duration-300 shadow-md flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-[#101010]">
                  <img
                    src={photo.image}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm border border-[#333] px-2.5 py-1 rounded text-[11px] text-[#D4AF37] font-semibold">
                    {photo.categoryLabel}
                  </div>

                  {/* Hover Eye Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-11 h-11 rounded-full bg-black/70 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-xl">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-serif group-hover:text-[#D4AF37] transition-colors">
                      {photo.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs text-[#8E7427] mt-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{photo.location}</span>
                    </div>

                    <p className="text-xs text-[#BDBDBD] mt-2 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#222] flex items-center justify-between text-[11px] text-[#777]">
                    <span>Click to expand image</span>
                    <span className="text-[#D4AF37] font-semibold">View Lightbox →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if category has no match */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#111] border border-[#222] rounded-xl">
            <p className="text-sm text-[#BDBDBD]">No photos currently categorized in this section.</p>
            <button
              onClick={() => setSelectedFilter('all')}
              className="mt-3 text-xs text-[#D4AF37] underline"
            >
              Reset to all photos
            </button>
          </div>
        )}

        {/* WhatsApp Photo Inquiry Strip */}
        <div className="mt-16 bg-[#141414] border border-[#2a2a2a] p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold font-serif text-white">
              Want to See Recent Batch Photos or Hotel Room Videos?
            </h3>
            <p className="text-xs sm:text-sm text-[#BDBDBD] mt-1 max-w-xl">
              Connect with our Hyderabad office on WhatsApp. We gladly share real video walkthroughs of hotel rooms, dining setups, and bus transfers.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Assalamu Alaikum. Could you please share video walkthroughs and recent batch photos of your hotels?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all shadow shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Request Media on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
