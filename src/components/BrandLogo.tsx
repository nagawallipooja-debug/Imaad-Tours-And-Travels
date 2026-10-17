import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'iconOnly';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const sizeClasses = {
    sm: 'h-9 w-auto',
    md: 'h-12 sm:h-14 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-24 sm:h-28 w-auto',
  };

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 540 230"
        className={`${sizeClasses[size]} select-none`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Imaad International Tours & Travels Logo"
      >
        <defs>
          <linearGradient id="brandGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9A7426" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="45%" stopColor="#FFF2B2" />
            <stop offset="65%" stopColor="#D4AF37" />
            <stop offset="85%" stopColor="#8B651B" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          <linearGradient id="brandGoldBright" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFF5C0" />
            <stop offset="40%" stopColor="#E5C158" />
            <stop offset="70%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A651E" />
          </linearGradient>

          <linearGradient id="brandSwooshGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="75%" stopColor="#FFF8D0" />
            <stop offset="100%" stopColor="#D4AF37" />
          </linearGradient>

          <filter id="brandSubtleBevel" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* Flight swoosh arc curving over M & A */}
        <path
          d="M 160 82 C 185 45, 235 24, 298 22"
          fill="none"
          stroke="url(#brandSwooshGrad)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 185 72 C 215 38, 255 24, 296 22"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Golden Airplane Silhouette banking towards top-right */}
        <g transform="translate(305, 14) rotate(24) scale(0.95)" filter="url(#brandSubtleBevel)">
          <path
            d="M 0 15 
               C 0 10, 2 2, 4 0 
               C 6 2, 8 10, 8 15 
               L 24 24 
               L 24 28 
               L 8 22 
               L 8 36 
               L 14 41 
               L 14 43 
               L 4 41 
               L -6 43 
               L -6 41 
               L 0 36 
               L 0 22 
               L -16 28 
               L -16 24 
               Z"
            fill="url(#brandGoldGradient)"
            stroke="#FFEAA3"
            strokeWidth="0.8"
          />
          <path d="M 4 2 L 4 40" stroke="#FFF" strokeWidth="0.8" opacity="0.65" />
        </g>

        {/* Main Wordmark: IMAAD */}
        {/* Layer 1: Gold 3D Bevel Rim */}
        <text
          x="270"
          y="105"
          textAnchor="middle"
          fontFamily="'Cinzel', Georgia, serif"
          fontWeight="800"
          fontSize="94"
          letterSpacing="5"
          fill="#0B0B0B"
          stroke="url(#brandGoldBright)"
          strokeWidth="4.5"
          strokeLinejoin="round"
          filter="url(#brandSubtleBevel)"
        >
          IMAAD
        </text>

        {/* Layer 2: Glossy Enamel Face */}
        <text
          x="270"
          y="105"
          textAnchor="middle"
          fontFamily="'Cinzel', Georgia, serif"
          fontWeight="800"
          fontSize="94"
          letterSpacing="5"
          fill="#111111"
        >
          IMAAD
        </text>

        {/* Layer 3: Gold Metallic Shimmer Sheen */}
        <text
          x="270"
          y="105"
          textAnchor="middle"
          fontFamily="'Cinzel', Georgia, serif"
          fontWeight="800"
          fontSize="94"
          letterSpacing="5"
          fill="url(#brandGoldGradient)"
          opacity="0.3"
        >
          IMAAD
        </text>

        {/* Second Line: INTERNATIONAL */}
        <text
          x="270"
          y="152"
          textAnchor="middle"
          fontFamily="'Cinzel', Georgia, serif"
          fontWeight="700"
          fontSize="33"
          letterSpacing="7"
          fill="url(#brandGoldBright)"
          filter="url(#brandSubtleBevel)"
        >
          INTERNATIONAL
        </text>

        {/* Third Line: TOURS & TRAVELS with flanking tapered golden darts */}
        <polygon points="30,188 115,185 115,191" fill="url(#brandGoldGradient)" />
        <polygon points="510,188 425,185 425,191" fill="url(#brandGoldGradient)" />

        <text
          x="270"
          y="195"
          textAnchor="middle"
          fontFamily="'Plus Jakarta Sans', Arial, sans-serif"
          fontWeight="800"
          fontSize="22"
          letterSpacing="5.5"
          fill="url(#brandGoldBright)"
          filter="url(#brandSubtleBevel)"
        >
          TOURS &amp; TRAVELS
        </text>
      </svg>
    </div>
  );
};
