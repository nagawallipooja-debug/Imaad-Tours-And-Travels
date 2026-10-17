import React from 'react';
import { ShieldCheck, ChevronRight, ArrowLeft } from 'lucide-react';
import { BUSINESS_INFO } from '../lib/site-data';

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  onNavigateHome: () => void;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  subtitle,
  lastUpdated,
  onNavigateHome,
  children,
}) => {
  return (
    <div className="bg-[#000000] text-white min-h-screen py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#BDBDBD] mb-6">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-[#444]" />
          <span className="text-[#D4AF37]">Legal & Compliance</span>
          <ChevronRight className="w-3 h-3 text-[#444]" />
          <span className="text-white/80">{title}</span>
        </div>

        {/* Header Block */}
        <div className="border-b border-[#252525] pb-8 mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mb-2 bg-[#D4AF37]/10 px-3 py-1 rounded">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Policy Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base text-[#BDBDBD] mt-2 max-w-2xl">
            {subtitle}
          </p>
          <div className="flex items-center gap-4 text-xs text-[#777] mt-4">
            <span>Entity: {BUSINESS_INFO.name}</span>
            <span>·</span>
            <span>Last Reviewed: {lastUpdated}</span>
            <span>·</span>
            <span>Jurisdiction: Hyderabad, Telangana, India</span>
          </div>
        </div>

        {/* Policy Body */}
        <div className="prose prose-invert prose-gold max-w-none space-y-8 text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
          {children}
        </div>

        {/* Policy Footer Note */}
        <div className="mt-12 pt-8 border-t border-[#252525] bg-[#0E0E0E] p-6 rounded-xl border">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
            Questions Regarding Our Policies?
          </h4>
          <p className="text-xs text-[#BDBDBD] leading-relaxed">
            If you have any questions or require clarification regarding these terms, payment steps, or your travel arrangements, please contact our compliance desk at{' '}
            <a href={`mailto:${BUSINESS_INFO.email}`} className="text-[#D4AF37] underline">
              {BUSINESS_INFO.email}
            </a>{' '}
            or visit our office at {BUSINESS_INFO.address}.
          </p>
        </div>

      </div>
    </div>
  );
};
