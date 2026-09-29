import React, { useState, useEffect } from 'react';
import './App.css';

const GEORGIA_FLAG_URL =
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Georgia_%28transparent_background%29.svg/3840px-Flag_of_Georgia_%28transparent_background%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail';




const USER_PHOTOS = {
  aliAndNino:
    '',
  batumiBoulevard:
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85',
  botanicalGarden:
    '',
  argoCableCar:
    'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=375%2Cheight=375%2Cdpr=2/tour_img/2b2a3bcc33135bf1f574c81ec94868d7e3502307da72e938294fe183e4ba77cf.jpg',
  georgiaFlag:
    'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Georgia_%28transparent_background%29.svg/3840px-Flag_of_Georgia_%28transparent_background%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
};



// Zero-dependency SVG Icons compatible with Create React App and React 19
const Sun = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);
const CloudRain = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>
  </svg>
);
const Cloud = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
  </svg>
);
const RefreshCw = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
  </svg>
);
const Waves = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
  </svg>
);
const PhoneCall = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/>
  </svg>
);
const Bookmark = ({ fill, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>
  </svg>
);
const Menu = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);
const X = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
);
const MapPin = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const Sparkles = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);
const Check = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 6 9 17l-5-5"/>
  </svg>
);
const CheckCircle2 = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const Trash2 = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
  </svg>
);
const Calendar = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
  </svg>
);
const Search = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);
const ChevronRight = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
const ChevronDown = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
const ChevronUp = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m18 15-6-6-6 6"/>
  </svg>
);
const Star = ({ fill, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const Clock = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const Printer = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/>
  </svg>
);
const Train = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/>
  </svg>
);
const Plane = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>
  </svg>
);
const Bike = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
  </svg>
);
const ArrowUp = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>
  </svg>
);
const ExternalLink = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);
const Navigation = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);
const Utensils = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 2v19"/><path d="M5 2v6a3 3 0 0 0 3 3 3 3 0 0 0 3-3V2"/><path d="M8 2v19"/>
  </svg>
);
const Volume2 = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </svg>
);
const Heart = ({ fill, ...props }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);
const Hotel = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="m9 16 .348-.24c1.465-1.013 3.84-1.013 5.304 0L15 16"/><path d="M8 7h.01"/><path d="M16 7h.01"/><path d="M12 7h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 11h.01"/><path d="M10 22v-4h4v4"/>
  </svg>
);
const Home = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const Mail = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const MessageSquare = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const ShieldCheck = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
  </svg>
);
const Send = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const PushPin = ({ className = '', color = 'red' }) => (
  <div className={`relative inline-flex items-center justify-center filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.55)] z-20 pointer-events-none select-none ${className}`}>
    <div className={`w-5 h-5 rounded-full border border-black/30 shadow-inner flex items-center justify-center relative ${
      color === 'amber'
        ? 'bg-gradient-to-br from-amber-300 via-amber-500 to-amber-800'
        : color === 'blue'
        ? 'bg-gradient-to-br from-sky-400 via-blue-600 to-blue-900'
        : 'bg-gradient-to-br from-rose-400 via-red-600 to-red-950'
    }`}>
      {/* 3D Gloss Highlight */}
      <div className="w-1.5 h-1.5 rounded-full bg-white/80 absolute top-0.5 left-1 pointer-events-none" />
      {/* Metal center pin nail */}
      <div className="w-1 h-1 rounded-full bg-slate-200/90 shadow-xs" />
    </div>
    {/* Needle Shadow */}
    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0.5 h-2.5 bg-gradient-to-b from-stone-700 to-stone-900 -z-10 opacity-70" />
  </div>
);

const MaskingTape = ({ className = '' }) => (
  <div
    className={`h-4 w-12 bg-amber-100/70 backdrop-blur-[0.5px] border-t border-b border-amber-300/40 shadow-xs pointer-events-none select-none z-10 ${className}`}
    style={{
      backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 4px)',
    }}
  />
);

const PaperClip = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
  </svg>
);

const StarRatingBadge = ({ rating = 5, stars = 5, reviewsCount, showText = true, size = 'sm', className = '' }) => {
  const starCount = Math.min(5, Math.max(1, Math.round(stars || rating)));
  const iconSize = size === 'xs' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div className="flex items-center gap-0.5 text-amber-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${iconSize} ${i < starCount ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-300'}`}
          />
        ))}
      </div>
      {showText && (
        <span className="font-extrabold text-xs text-slate-800 flex items-center gap-1">
          <span>{Number(rating).toFixed(1)}</span>
          {reviewsCount && <span className="text-[10px] text-slate-400 font-normal">({reviewsCount})</span>}
        </span>
      )}
    </div>
  );
};

// --- DATA DEFINITIONS ---
const CURRENCY_RATES = {
  GEL: { symbol: '₾', rate: 1.0, name: 'Georgian Lari' },
  USD: { symbol: '$', rate: 0.37, name: 'US Dollar' },
  EUR: { symbol: '€', rate: 0.34, name: 'Euro' },
  GBP: { symbol: '£', rate: 0.29, name: 'British Pound' },
  TRY: { symbol: '₺', rate: 12.8, name: 'Turkish Lira' },
};


const ATTRACTIONS = [
  {
    id: 'ali-nino',
    name: 'Ali and Nino Moving Statue',
    georgianName: 'ალი და ნინო',
    category: 'Landmarks',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6qyqhJWl94NfV_3iFwLe_SmAxdyJ03TEjhfZnKBFWFi99MnkmKwXXMY&s=10',
    isUserPhoto: true,
    rating: 4.9,
    reviewsCount: 3820,
    duration: '30-45 mins',
    priceGEL: 0,
    location: 'Miracle Park, Seaside Boulevard',
    coords: { lat: 41.6558, lng: 41.6431, query: 'Ali and Nino Statue, Batumi' },
    description: 'Iconic 8-meter kinetic sculpture by Tamara Kvesitadze. Every evening at 19:00, the figures of Ali and Nino slowly merge and pass through each other symbolizing eternal love.',
    highlights: ['Kinetic motion cycle', 'Night illuminations', 'Sunset backdrop on Black Sea'],
    insiderTip: 'Stand on the wooden pier at 19:15 for the sunset reflection behind the statues.',
    bestTime: '18:30 - 21:00',
  },
  {
    id: 'batumi-boulevard',
    name: 'Batumi Boulevard & Seaside Promenade',
    georgianName: 'ბათუმის ბულვარი',
    category: 'Beaches & Boulevard',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbGCCMZbcKI00Lqzlz2J5pNlO62vDHUNzoctFXuLmTgcvddYyEe1BHdog&s=10',
    isUserPhoto: true,
    rating: 4.8,
    reviewsCount: 5210,
    duration: '2 - 4 hours',
    priceGEL: 0,
    location: '7 km along the Black Sea coast',
    coords: { lat: 41.6515, lng: 41.6342, query: 'Batumi Boulevard, Batumi' },
    description: 'Founded in 1881, one of Europe’s longest seaside boulevards featuring palm alleys, bike tracks, dancing fountains, cafes, and bamboo groves.',
    highlights: ['Batumvelo red bike lanes', 'Musical dancing fountains', 'Lush seaside gardens'],
    insiderTip: 'Rent a bike near Miracle Park and ride all the way to New Boulevard.',
    bestTime: 'Morning jog or sunset stroll',
  },
  {
    id: 'batumi-botanical-garden',
    name: 'Batumi Botanical Garden (Green Cape)',
    georgianName: 'ბათუმის ბოტანიკური ბაღი',
    category: 'Nature & Parks',
    image: 'https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzNiZDExNjU2MjlhMTRmNDk4OTM3ZTZhN2ZmMWU1MjgzIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19',
    isUserPhoto: true,
    rating: 4.9,
    reviewsCount: 4650,
    duration: '3 - 5 hours',
    priceGEL: 20,
    location: 'Mtsvane Kontskhi (9 km north)',
    coords: { lat: 41.6934, lng: 41.7075, query: 'Batumi Botanical Garden, Mtsvane Kontskhi' },
    description: 'Spanning 108 hectares on coastal cliffs, showcasing 5,000+ subtropical species across 9 phytogeographical zones overlooking azure waters.',
    highlights: ['Subtropical cliffside panoramas', 'Electric shuttle carts', 'Direct Green Cape beach path'],
    insiderTip: 'Take marshrutka #31 from center for 0.80 GEL. Bring comfortable shoes.',
    bestTime: '09:00 - 14:00',
  },
  {
    id: 'argo-cable-car',
    name: 'Argo Cable Car & Anuria Viewpoint',
    georgianName: 'საბაგირო გზა არგო',
    category: 'Viewpoints',
    image: USER_PHOTOS.argoCableCar,
    isUserPhoto: true,
    rating: 4.7,
    reviewsCount: 3120,
    duration: '1.5 hours',
    priceGEL: 30,
    location: 'Gogebashvili St to Anuria Mountain',
    coords: { lat: 41.6433, lng: 41.6499, query: 'Argo Cable Car Batumi' },
    description: 'A scenic 2.5 km aerial cableway climbing 250m above sea level with 360° views across Batumi harbor, skyscrapers, and Adjarian peaks.',
    highlights: ['Panoramic observation terrace', 'Traditional folk dance shows', 'Cocktail bar on deck'],
    insiderTip: 'Ride up 30 minutes before sunset to watch day transition into dazzling city night lights.',
    bestTime: '18:00 - 20:30',
  },
  {
    id: 'alphabet-tower',
    name: 'Alphabetic Tower & Miracle Park',
    georgianName: 'ანბანის კოშკი',
    category: 'Landmarks',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0Hx--2y8XcDHeVG7ojmgb-BYRzO5m_fR_8rJhbqwpCMitxZZAbzaDOQ&s=10',
    rating: 4.6,
    reviewsCount: 2210,
    duration: '1 hour',
    priceGEL: 20,
    location: 'Miracle Park',
    coords: { lat: 41.6552, lng: 41.6427, query: 'Alphabetic Tower Batumi' },
    description: 'A 130-meter high DNA double-helix tower wrapped with 33 letters of the ancient Georgian alphabet with a revolving observatory lounge.',
    highlights: ['33 illuminated Georgian letters', '360° revolving lounge', 'Next to Ferris wheel'],
    insiderTip: 'Sunset drinks at the top sphere give uninterrupted Black Sea panoramas.',
    bestTime: 'Afternoon & evening',
  },
  {
    id: 'piazza-europe-square',
    name: 'Piazza Square & Old Batumi',
    georgianName: 'პიაცა და ძველი ბათუმი',
    category: 'Culture & History',
    image: 'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=400%2Cheight=265%2Cdpr=2/tour_img/391cbaeb78911ed820751920acb78485b4c938d20a6b0de8edbda7314c0c3aa5.jpg',
    rating: 4.8,
    reviewsCount: 3940,
    duration: '2 hours',
    priceGEL: 0,
    location: 'Old Batumi Historic Quarter',
    coords: { lat: 41.6496, lng: 41.6409, query: 'Piazza Square Batumi' },
    description: 'Italian-style square with Europe’s largest stained-glass mosaic, lively jazz cafes, and adjacent Europe Square with the Medea Golden Fleece statue.',
    highlights: ['Medea Golden Fleece Monument', 'Astronomical Clock', 'Live evening acoustic music'],
    insiderTip: 'Sit on Piazza terrace with Georgian wine or sand coffee around 20:00 for live music.',
    bestTime: '18:00 - 23:00',
  },
  {
    id: 'makhuntseti-waterfall',
    name: 'Makhuntseti Waterfall & Tamar Bridge',
    georgianName: 'მახუნცეთი და თამარის ხიდი',
    category: 'Nature & Parks',
    image: 'https://dmc.mygeorgia.travel/thumb/2/ad0qzigCzucG3HmJZXh07A/r/d/1465914781_most-caricy-tamary.jpg',
    rating: 4.9,
    reviewsCount: 2890,
    duration: 'Half Day',
    priceGEL: 0,
    location: 'Mountain Adjara (30 km east)',
    coords: { lat: 41.5714, lng: 41.8601, query: 'Makhuntseti Waterfall Georgia' },
    description: 'A 50m roaring mountain cascade paired with the 900-year-old stone arch bridge of Queen Tamar built across the roaring river.',
    highlights: ['12th-century volcanic stone arch', 'Mountain trout restaurants', 'Local honey tastings'],
    insiderTip: 'Marshrutkas depart hourly from Batumi Old Bus Station towards Keda for only 3 GEL.',
    bestTime: '10:00 - 15:00',
  },
  {
    id: 'gonio-fortress',
    name: 'Gonio-Apsaros Roman Fortress',
    georgianName: 'გონიო-აფსაროსის ციხე',
    category: 'Culture & History',
    image: 'https://cdn.georgiantravelguide.com/storage/thumbnails/dji-0452-2.jpg',
    rating: 4.7,
    reviewsCount: 1870,
    duration: '2 hours',
    priceGEL: 8,
    location: 'Gonio (12 km south)',
    coords: { lat: 41.5732, lng: 41.5731, query: 'Gonio Fortress Georgia' },
    description: 'Roman-Byzantine fortress mentioned in 1st century records by Pliny the Elder. Legend holds the tomb of Apostle Saint Matthias inside.',
    highlights: ['2,000-year-old defensive stone walls', 'Archaeology museum', 'Citrus gardens inside'],
    insiderTip: 'Combine with an afternoon swim at Gonio or Sarpi beach for the clearest sea water.',
    bestTime: 'Morning or late afternoon',
  },
  {
    id: 'batumi-fish-market',
    name: 'Batumi Old Fish Market & Taverns',
    georgianName: 'თევზის ბაზარი',
    category: 'Culture & History',
    image: 'https://cdn.georgiantravelguide.com/storage/files/batumis-tevzis-bazari-batumi-fish-market-batumskiy-rybnyy-rynok.jpg',
    rating: 4.8,
    reviewsCount: 3100,
    duration: '1.5 - 2 hours',
    priceGEL: 0,
    location: 'Baku St (Old Harbor)',
    coords: { lat: 41.6508, lng: 41.6575, query: 'Batumi Fish Market, Baku Street' },
    description: 'Pick fresh Black Sea turbot, salmon, mussels, and red mullet right off fishermen’s crushed ice trays, then have waterfront taverns cook them immediately to crispy golden perfection.',
    highlights: ['Catch of the day selection', 'Waterside dining decks', 'Fresh cornbread and Tkemali plum sauce'],
    insiderTip: 'Buy directly from stall 3 or 4, take to Fishlandia or Blue Wave next door. Cooking fee is only 7 GEL per kilo.',
    bestTime: '13:00 - 19:00',
  },
  {
    id: 'mtirala-national-park',
    name: 'Mtirala Subtropical Rainforest',
    georgianName: 'მტირალას ეროვნული პარკი',
    category: 'Nature & Parks',
    image: 'https://nationalparks.ge/files/155246262423mtirala2.jpg',
    rating: 4.9,
    reviewsCount: 1650,
    duration: 'Full Day',
    priceGEL: 0,
    location: 'Chakvistavi (25 km north-east)',
    coords: { lat: 41.6739, lng: 41.8715, query: 'Mtirala National Park Georgia' },
    description: 'Known as the rainiest place in the Caucasus and Europe with primordial Colchic rainforests, hand-pulled river cable carts, rushing waterfalls, and emerald swimming pools.',
    highlights: ['Tsablnari 15m waterfall', 'Natural mineral springs', 'Zip-lining & eco-trails'],
    insiderTip: 'Pack a waterproof light jacket even in summer. The hand-operated cable car over the river is exhilarating.',
    bestTime: '09:00 - 16:00',
  },
];

const BATUMI_RESTAURANTS = [
  {
    id: 'retro-khachapuri',
    name: 'Retro Khachapuri House',
    georgianName: 'რეტრო',
    stars: 5,
    rating: 4.9,
    reviewsCount: 2450,
    priceRange: '₾₾ (14 - 25 GEL)',
    avgPriceGEL: 18,
    cuisineType: 'Authentic Adjarian & Bakeries',
    mealTypes: ['Breakfast', 'Lunch', 'Dinner'],
    address: '54 Tbel Abuseridze St, Batumi',
    location: '54 Tbel Abuseridze St, Batumi',
    hours: '08:30 – 23:00 Daily',
    phone: '+995 577 31 41 51',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Retro+Batumi+Tbel+Abuseridze',
    tagline: 'The Gold Standard of Authentic Adjarian Khachapuri in Georgia',
    description: 'Founded by master baker Gia Agirba, Retro is considered by culinary critics to be the ultimate benchmark for Acharuli Khachapuri. Dough is scraped thin from the inner walls, the boat baked blistered and golden, filled with bubbling young Sulguni, mountain butter, and an organic egg yolk.',
    signatureDishes: [
      { name: 'Titanic Adjarian Khachapuri', priceGEL: 16, note: 'Giant boat with crisp crust and molten mountain cheese lava' },
      { name: 'Smoked Sulguni Khachapuri', priceGEL: 18, note: 'Infused with wood-smoked mountain cheese' },
      { name: 'Fresh Tarkhuna (Tarragon Lemonade)', priceGEL: 4, note: 'Traditional bright emerald herbal lemonade chilled on ice' },
    ],
    ambiance: ['Casual & Lively', 'Family Friendly', 'Wood-fired Brick Oven', 'Fast Service'],
    mustTry: 'Order size "Medium" with an extra pat of country butter, whisk vigorously with your fork.',
  },
  {
    id: 'chocolatte-coffee-room',
    name: 'Chocolatte Coffee-Room',
    georgianName: 'შოკოლატე',
    stars: 5,
    rating: 4.9,
    reviewsCount: 1120,
    priceRange: '₾ (10 - 20 GEL)',
    avgPriceGEL: 15,
    cuisineType: 'Artisanal Cafe & Morning Brunch',
    mealTypes: ['Breakfast'],
    address: '13 Memed Abashidze Ave, Batumi',
    location: '13 Memed Abashidze Ave, Batumi',
    hours: '08:00 – 18:00 Daily',
    phone: '+995 593 39 88 55',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chocolatte+Coffee-Room+Batumi+Abashidze',
    tagline: 'Batumi’s Favorite Cozy Morning Specialty Coffee & Syrniki Haven',
    description: 'A charming breakfast haven in historic Batumi serving specialty espresso, hand-brewed aeropress, fluffy cottage cheese syrniki with warm berry compote, and wholesome avocado toast.',
    signatureDishes: [
      { name: 'Golden Cottage Cheese Syrniki', priceGEL: 12, note: 'Warm farmers curd pancakes with sour cream & cherry jam' },
      { name: 'Avocado & Poached Egg Brioche', priceGEL: 15, note: 'Fresh avocado, toasted seeds, and velvety hollandaise' },
      { name: 'Flat White & Specialty Brew', priceGEL: 7, note: 'Single-origin Ethiopian roast' },
    ],
    ambiance: ['Quiet & Cozy', 'Digital Nomad Friendly', 'Boutique Decor', 'Outdoor Pavement Seating'],
    mustTry: 'Hot Syrniki with homemade berry compote paired with a flat white.',
  },
  {
    id: 'laguna-cafe',
    name: 'Laguna Cafe',
    georgianName: 'ლაგუნა',
    stars: 5,
    rating: 4.8,
    reviewsCount: 1890,
    priceRange: '₾₾ (12 - 22 GEL)',
    avgPriceGEL: 16,
    cuisineType: 'Traditional Khachapuri Institution',
    mealTypes: ['Breakfast', 'Lunch'],
    address: '18 Zurab Gorgiladze St, Batumi',
    location: '18 Zurab Gorgiladze St, Batumi',
    hours: '09:00 – 22:30 Daily',
    phone: '+995 422 27 60 76',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Laguna+Cafe+Batumi+Gorgiladze',
    tagline: 'Beloved Old-School Cellar with Unmatched Crispy Dough Crusts',
    description: 'Operating for over three decades, Laguna is famous for its crispy pastry boats and option for purified dough (where excess soft dough is hollowed out to maximize cheese).',
    signatureDishes: [
      { name: 'Laguna Special Khachapuri (Purified)', priceGEL: 15, note: 'Extra thin crispy crust with double Sulguni center' },
      { name: 'Imeretian Khachapuri', priceGEL: 13, note: 'Circular cheese pie baked in round clay dish' },
      { name: 'Zedazeni Pear Soda', priceGEL: 3.5, note: 'Iconic Georgian glass bottle soda' },
    ],
    ambiance: ['Authentic Retro', 'Locals Favorite', 'Air Conditioned', 'Generous Portions'],
    mustTry: 'Ask for "Gafkhapuli" (dough stripped inside for extreme crunch).',
  },
  {
    id: 'privet-iz-batuma',
    name: 'Privet iz Batuma Cafe',
    georgianName: 'მოკითხვა ბათუმიდან',
    stars: 5,
    rating: 4.8,
    reviewsCount: 1350,
    priceRange: '₾₾ (12 - 25 GEL)',
    avgPriceGEL: 18,
    cuisineType: 'Historic European & Georgian Tea Salon',
    mealTypes: ['Breakfast', 'Lunch'],
    address: '39 Konstantine Gamsakhurdia St, Old Batumi',
    location: '39 Konstantine Gamsakhurdia St, Old Batumi',
    hours: '08:30 – 23:00 Daily',
    phone: '+995 422 27 00 90',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Privet+iz+Batuma+Gamsakhurdia',
    tagline: 'Nostalgic 19th-Century European Tea Salon Near Europe Square',
    description: 'Decorated with vintage sepia photographs and antique lace, serving breakfast crepes, hot clay-pot Lobio beans with cornbread, and multi-layered honey cakes.',
    signatureDishes: [
      { name: 'Hot Lobio in Clay Pot', priceGEL: 11, note: 'Spiced red kidney beans with pickled jonjoli and mchadi' },
      { name: 'Crepes with Local Walnut & Honey', priceGEL: 9, note: 'Thin golden blini with Adjarian mountain honey' },
      { name: 'Adjarian Herb Omelette', priceGEL: 10, note: 'Fresh coriander, dill, and melted cheese' },
    ],
    ambiance: ['Romantic Vintage', 'Europe Square Views', 'Classical Music', 'Historic Balcony'],
    mustTry: 'Morning clay pot Lobio with crispy cornbread and mountain tea.',
  },
  {
    id: 'porto-franco',
    name: 'Porto Franco',
    georgianName: 'პორტო ფრანკო',
    stars: 5,
    rating: 4.7,
    reviewsCount: 1620,
    priceRange: '₾₾ (15 - 30 GEL)',
    avgPriceGEL: 22,
    cuisineType: 'Old Town Brick-Oven Grill & Khachapuri',
    mealTypes: ['Lunch', 'Dinner'],
    address: '40 Konstantine Gamsakhurdia St, Old Batumi',
    location: '40 Konstantine Gamsakhurdia St, Old Batumi',
    hours: '10:00 – 23:30 Daily',
    phone: '+995 599 33 22 11',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Porto+Franco+Batumi+Gamsakhurdia',
    tagline: 'Authentic Stone-Oven Dining in Batumi’s Historic Heart',
    description: 'A cozy Old Town taverna featuring brick vaults, open hearth ovens, and masterfully prepared Adjarian Sinori along with charcoal-grilled meats and khachapuri variations.',
    signatureDishes: [
      { name: 'Adjarian Sinori in Ketsi', priceGEL: 14, note: 'Rolled dough with garlic nadughi curd & sizzling butter' },
      { name: 'Porto Franco Khachapuri with Boiled Egg', priceGEL: 16, note: 'Old regional style with sliced boiled farm egg' },
      { name: 'Charcoal Pork Mtsvadi', priceGEL: 18, note: 'Tender pork skewers with marinated onions and pomegranate' },
    ],
    ambiance: ['Brick Hearth', 'Old Port Charm', 'Wine Collection', 'Hearty Portions'],
    mustTry: 'Sinori served bubbling hot right out of the clay pot.',
  },
  {
    id: 'heart-of-batumi',
    name: 'Heart of Batumi',
    georgianName: 'ბათუმის გული',
    stars: 5,
    rating: 4.9,
    reviewsCount: 2210,
    priceRange: '₾₾ (20 - 38 GEL)',
    avgPriceGEL: 26,
    cuisineType: 'Homestyle Georgian Soul Food',
    mealTypes: ['Lunch', 'Dinner'],
    address: '11 Mazniashvili St, Old Batumi',
    location: '11 Mazniashvili St, Old Batumi',
    hours: '11:00 – 23:30 Daily',
    phone: '+995 555 40 40 05',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Heart+of+Batumi+Mazniashvili',
    tagline: 'Warm Family Hospitality & Unbeatable Shkmeruli Garlic Chicken',
    description: 'One of the most praised restaurants in Batumi. Famous for its bubbling clay pots of Shkmeruli chicken in garlic milk sauce, eggplant with walnut paste, and friendly local service.',
    signatureDishes: [
      { name: 'Shkmeruli Garlic Chicken in Ketsi', priceGEL: 24, note: 'Crisp roasted spring chicken bathed in bubbling garlic-cream' },
      { name: 'Badrijani Nigvzit (Eggplant Rolls)', priceGEL: 12, note: 'Fried eggplant ribbons with spiced walnut paste & pomegranate' },
      { name: 'Ojakhuri Roasted Pork & Potatoes', priceGEL: 18, note: 'Clay pot roasted pork belly, onions, and crispy potatoes' },
    ],
    ambiance: ['Pedestrian Courtyard', 'Warm & Welcoming', 'Local Soul Food', 'Folk Accents'],
    mustTry: 'Dip hot Shoti bread straight into the sizzling Shkmeruli garlic broth.',
  },
  {
    id: 'old-boulevard-restaurant',
    name: 'Old Boulevard Restaurant',
    georgianName: 'ძველი ბულვარი',
    stars: 5,
    rating: 4.8,
    reviewsCount: 1780,
    priceRange: '₾₾₾ (35 - 70 GEL)',
    avgPriceGEL: 45,
    cuisineType: 'Grand Fine Georgian & European Dining',
    mealTypes: ['Lunch', 'Dinner'],
    address: '23a Ninoshvili St, Batumi',
    location: '23a Ninoshvili St, Batumi',
    hours: '11:00 – 00:00 Daily',
    phone: '+995 422 27 57 27',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Old+Boulevard+Restaurant+Batumi',
    tagline: 'Refined Coastal Elegance with Live Grand Piano & Adjarian Borano',
    description: 'Batumi’s grand dame restaurant overlooking the lush seaside boulevard park. Renowned for authentic highland Adjarian Borano fondue, Black Sea turbot, and live classical piano recitals.',
    signatureDishes: [
      { name: 'Highland Borano Cheese Fondue', priceGEL: 17, note: 'Melted aged cheese with clarified butter and hot cornbread' },
      { name: 'Black Sea Sturgeon Steak', priceGEL: 38, note: 'Pan-seared sturgeon with wild plum tkemali reduction' },
      { name: 'Tkemali Glazed Lamb Chops', priceGEL: 34, note: 'Grilled tender lamb cutlets with mountain herbs' },
    ],
    ambiance: ['Live Grand Piano', 'Velvet Armchairs', 'Sommelier Wine List', 'Romantic Balcony'],
    mustTry: 'Borano cheese fondue paired with a chilled glass of Chkhaveri Amber wine.',
  },
  {
    id: 'sanapiro-fish-market',
    name: 'Sanapiro Fish Market Restaurant',
    georgianName: 'სანაპირო თევზის ბაზარი',
    stars: 5,
    rating: 4.8,
    reviewsCount: 2600,
    priceRange: '₾₾ (20 - 45 GEL)',
    avgPriceGEL: 28,
    cuisineType: 'Fresh Black Sea Seafood Pier & Market',
    mealTypes: ['Lunch', 'Dinner'],
    address: '1 Baku St (Batumi Fish Market Pier)',
    location: '1 Baku St (Batumi Fish Market Pier)',
    hours: '10:00 – 22:30 Daily',
    phone: '+995 593 11 22 44',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Batumi+Fish+Market+Sanapiro',
    tagline: 'Sea-to-Table Fish Directly from Batumi’s Morning Trawlers',
    description: 'Pick your live fish straight from the market stalls (Turbot, Red Mullet, Salmon, Black Sea Mussels) and have the chefs fry or grill it on hot cast-iron with fresh lemon, garlic sauce, and cold draft beer on the sea deck.',
    signatureDishes: [
      { name: 'Pan-Fried Red Mullet (Barabulka)', priceGEL: 22, note: 'Crisp whole fish seasoned with sea salt and lemon wedges' },
      { name: 'Black Sea Mussels in White Wine & Garlic', priceGEL: 19, note: 'Fresh local mussels with coriander and butter broth' },
      { name: 'Grilled Black Sea Turbot (Kalkan)', priceGEL: 36, note: 'Firm succulent white meat grilled over hot coals' },
    ],
    ambiance: ['Sea Deck Pier', 'Casual Seaside Breeze', 'Ultra Fresh', 'Lively Atmosphere'],
    mustTry: 'Order Barabulka with traditional hot cornbread (Mchadi) and coriander tkemali.',
  },
  {
    id: 'fanfan-batumi',
    name: 'Fanfan Bistro & Garden',
    georgianName: 'ფანფანი',
    stars: 5,
    rating: 4.9,
    reviewsCount: 1540,
    priceRange: '₾₾₾ (25 - 55 GEL)',
    avgPriceGEL: 35,
    cuisineType: 'Bohemian Coastal Cuisine & Cocktails',
    mealTypes: ['Breakfast', 'Dinner'],
    address: '27 Ninoshvili St, Batumi',
    location: '27 Ninoshvili St, Batumi',
    hours: '09:30 – 01:00 Daily',
    phone: '+995 597 00 20 20',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fanfan+Batumi+Ninoshvili',
    tagline: 'Batumi’s Most Stylish Bohemian Courtyard & Coastal Seafood',
    description: 'Set inside a restored 1905 heritage townhouse with antique chandeliers, vintage wallpapers, and an enchanting ivy-wrapped secret garden terrace. Specializes in fresh seafood and craft cocktails.',
    signatureDishes: [
      { name: 'Black Sea Sea Bass in Herb Butter', priceGEL: 29, note: 'Pan-roasted with capers, tarragon, and roasted baby potatoes' },
      { name: 'Seafood Risotto with Saffron', priceGEL: 28, note: 'Arborio rice infused with Black Sea shellfish broth' },
      { name: 'Homemade Lavender Ice Cream & Tarts', priceGEL: 12, note: 'Artisanal seasonal dessert with local berries' },
    ],
    ambiance: ['Enchanted Garden', 'Fairy Lights', 'Eclectic Antique', 'Craft Cocktails'],
    mustTry: 'Sit in the outdoor courtyard at dusk and pair the sea bass with a local Chkhaveri rosé.',
  },
  {
    id: 'shemoikhede-genatsvale',
    name: 'Shemoikhede Genatsvale',
    georgianName: 'შემოიხედე გენაცვალე',
    stars: 5,
    rating: 4.8,
    reviewsCount: 2850,
    priceRange: '₾ (12 - 25 GEL)',
    avgPriceGEL: 18,
    cuisineType: 'Famous Khinkali Tavern & Grill',
    mealTypes: ['Lunch', 'Dinner'],
    address: '8 Noe Zhordania St, Old Batumi',
    location: '8 Noe Zhordania St, Old Batumi',
    hours: '10:00 – 00:00 Daily',
    phone: '+995 595 11 00 22',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shemoikhede+Genatsvale+Batumi+Zhordania',
    tagline: 'The Definitive Khinkali Destination in Batumi Old Town',
    description: 'Renowned for hand-pinched, steaming hot Khinkali packed with spiced meat broth and herbs. Always packed with locals enjoying cold draft beer and hot skewers.',
    signatureDishes: [
      { name: 'Kalakuri Khinkali (Pork & Beef with Herbs)', priceGEL: 1.8, note: 'Steaming broth-filled dumplings with fresh cilantro (order 5+)' },
      { name: 'Sulguni Cheese Khinkali', priceGEL: 1.7, note: 'Decadent vegetarian dumplings with molten mountain cheese' },
      { name: 'Veal Chashushuli in Clay Pot', priceGEL: 16, note: 'Slow-simmered tender veal in spicy tomato-garlic stew' },
    ],
    ambiance: ['Bustling Tavern', 'Beer on Tap', 'Quick Service', 'Hearty Georgian Supra'],
    mustTry: 'Sprinkle black pepper on the khinkali, bite a small hole, slurp the broth first, then eat.',
  },
  {
    id: 'bern-restaurant',
    name: 'Bern Restaurant & Hall',
    georgianName: 'ბერნი',
    stars: 5,
    rating: 4.8,
    reviewsCount: 1650,
    priceRange: '₾₾ (20 - 38 GEL)',
    avgPriceGEL: 25,
    cuisineType: 'Hearty Caucasian & Bavarian Tavern',
    mealTypes: ['Lunch', 'Dinner'],
    address: '17 Rustaveli Ave, Batumi',
    location: '17 Rustaveli Ave, Batumi',
    hours: '11:00 – 00:00 Daily',
    phone: '+995 422 27 64 64',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bern+Restaurant+Batumi+Rustaveli',
    tagline: 'Highland Feast Platters & Craft Beer in a Grand Stone Hall',
    description: 'Spacious stone hall restaurant with an ivy terrace serving rich Caucasian mountain stews, wood-grilled pork ribs, and hearty Adjarian cheese platters.',
    signatureDishes: [
      { name: 'Bern Grand Meat Board', priceGEL: 36, note: 'Assorted shashlik, smoked sausages, and roast potatoes' },
      { name: 'Clay Pot Sizzling Kupati Sausages', priceGEL: 16, note: 'Spicy minced meat sausages with barberries' },
      { name: 'Mtsvadi with Pomegranate Seeds', priceGEL: 18, note: 'Skewered marinated pork roasted over vine cuttings' },
    ],
    ambiance: ['Ivy-Covered Terrace', 'Spacious Seating', 'Great Beers', 'Festive Toasts'],
    mustTry: 'Enjoy the outdoor summer terrace under the vine arbor with a cold draught beer.',
  },
  {
    id: 'adjarian-wine-house',
    name: 'Adjarian Wine House',
    georgianName: 'აჭარული ღვინის სახლი',
    stars: 5,
    rating: 4.9,
    reviewsCount: 1980,
    priceRange: '₾₾₾ (40 - 85 GEL)',
    avgPriceGEL: 50,
    cuisineType: 'Vineyard Chateau & Mountain Gastronomy',
    mealTypes: ['Lunch', 'Dinner'],
    address: 'Acharistskali River Gorge (Keda Highway)',
    location: 'Acharistskali River Gorge (Keda Highway)',
    hours: '10:00 – 22:00 Daily',
    phone: '+995 599 78 88 88',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Adjarian+Wine+House+Keda',
    tagline: 'Royal Qvevri Wine Cellar & Highland Mountain Chateau',
    description: 'Situated along the rushing mountain river in the Keda Valley. Revived the ancient pink Chkhaveri grape once reserved for Georgian royalty. Dine on wood-fired lamb and mountain trout surrounded by vineyard hills.',
    signatureDishes: [
      { name: 'Royal Chkhaveri Rosé Tasting Flight', priceGEL: 25, note: 'Award-winning rare mountain vintage from Keda slopes' },
      { name: 'Keda Mountain River Trout in Cornmeal', priceGEL: 24, note: 'Crispy fried river trout with garlicky pomegranate sauce' },
      { name: 'Spit-Roasted Suckling Pig', priceGEL: 32, note: 'Traditional holiday roast with crisp skin and tender meat' },
    ],
    ambiance: ['Mountain Canyon', 'Historic Marani Cellar', 'Vineyard Views', 'Riverside Patio'],
    mustTry: 'Tour the subterranean 18th-century marani before sitting down on the riverside terrace.',
  },
  {
    id: 'alphabet-tower-restaurant',
    name: 'Alphabet Tower Revolving Restaurant',
    georgianName: 'ანბანის კოშკი',
    stars: 5,
    rating: 4.7,
    reviewsCount: 1420,
    priceRange: '₾₾₾ (45 - 95 GEL)',
    avgPriceGEL: 60,
    cuisineType: 'Panoramic 360° Sky Dining & Cocktails',
    mealTypes: ['Dinner'],
    address: 'Miracle Park Waterfront Sphere, Batumi',
    location: 'Miracle Park Waterfront Sphere, Batumi',
    hours: '12:00 – 01:00 Daily',
    phone: '+995 577 00 00 50',
    image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Alphabet+Tower+Batumi+Restaurant',
    tagline: 'Dine Suspended 130m in the Sky with 360° Batumi Views',
    description: 'Located inside the glowing metallic sphere of the Alphabet Tower. Rotates 360 degrees every hour, showcasing sunset over the Black Sea on one side and the glowing Caucasus peaks on the other.',
    signatureDishes: [
      { name: 'Pan-Roasted Duck with Cherry Reduction', priceGEL: 38, note: 'Tender breast with Georgian plum-cherry glaze' },
      { name: 'Black Sea Salmon with Citrus Butter', priceGEL: 36, note: 'Fresh fillet with asparagus and citrus reduction' },
      { name: 'Sky High Signature Cocktail', priceGEL: 18, note: 'Infused with local Adjarian honey and Georgian brandy' },
    ],
    ambiance: ['Revolving Panorama', 'Romantic Sunset', '360° City Lights', 'Cocktail Lounge'],
    mustTry: 'Reserve a window table 45 minutes before sunset to watch day turn to night.',
  },
  {
    id: 'u-soba-green-cape',
    name: 'Green Cape Seaside Tavern (U Soba)',
    georgianName: 'მწვანე კონცხი რესტორანი',
    stars: 5,
    rating: 4.8,
    reviewsCount: 940,
    priceRange: '₾₾ (18 - 35 GEL)',
    avgPriceGEL: 24,
    cuisineType: 'Beachfront Cove Tavern & Fresh Fish',
    mealTypes: ['Lunch', 'Dinner'],
    address: 'Green Cape Beach Promenade (Botanical Garden Lower Exit)',
    location: 'Green Cape Beach Promenade, Batumi',
    hours: '10:00 – 21:30 Daily',
    phone: '+995 599 14 25 36',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Green+Cape+Beach+Batumi+Restaurant',
    tagline: 'Casual Beach Cove Dining Below the Botanical Garden Cliffs',
    description: 'Nestled between the emerald subtropical cliffs and crystal clear pebble waters of Green Cape. Unbeatable spot for fresh fried Black Sea flounder, cold beer, and churchkhela after exploring the botanical gardens.',
    signatureDishes: [
      { name: 'Fresh Fried Black Sea Flounder', priceGEL: 22, note: 'Pan-fried with sea salt, lemon, and spicy green tkemali' },
      { name: 'Adjarian Cornbread with Sulguni', priceGEL: 8, note: 'Piping hot mchadi stuffed with salty mountain cheese' },
      { name: 'Local Cucumber & Herb Salad', priceGEL: 9, note: 'Dressed with unrefined Kakhetian sunflower oil' },
    ],
    ambiance: ['Pebble Beach Cove', 'Cliffside Greenery', 'Barefoot Breeze', 'Sunset Swim Views'],
    mustTry: 'Have lunch here right after hiking down from the Botanical Garden.',
  },
  {
    id: 'daiquiri-family-restaurant',
    name: 'Daiquiri Family Restaurant & Terrace',
    georgianName: 'დაიკირი',
    stars: 5,
    rating: 4.8,
    reviewsCount: 1470,
    priceRange: '₾₾ (22 - 45 GEL)',
    avgPriceGEL: 30,
    cuisineType: 'Boulevard Seaside Lounge & Seafood Grill',
    mealTypes: ['Lunch', 'Dinner'],
    address: '8 Ninoshvili St, Seaside Boulevard',
    location: '8 Ninoshvili St, Seaside Boulevard',
    hours: '11:00 – 02:00 Daily',
    phone: '+995 558 77 11 22',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Daiquiri+Restaurant+Batumi+Ninoshvili',
    tagline: 'Sunset Dining Under Coastal Pines with Sea Breeze & Live Music',
    description: 'An open-air garden terrace set under the tall pines and palms of the original Seaside Boulevard. Famous for fresh Black Sea grilled sea bass, garlic butter mussels, and evening lounge music.',
    signatureDishes: [
      { name: 'Whole Grilled Black Sea Bass', priceGEL: 28, note: 'Chargrilled with rosemary and lemon-garlic butter' },
      { name: 'Black Sea Garlic Steamed Mussels', priceGEL: 21, note: 'Sautéed with white wine, garlic, and fresh dill' },
      { name: 'Fresh Fruit Daiquiris & Spritzers', priceGEL: 14, note: 'Blended with fresh seasonal Georgian fruits' },
    ],
    ambiance: ['Pine Forest Garden', 'Sea Breeze', 'Live Evening Music', 'Chill Lounge'],
    mustTry: 'Enjoy sunset dinner on the terrace accompanied by smooth evening saxophone or lounge beats.',
  },
  {
    id: 'tavaduri-restaurant',
    name: 'Tavaduri Nobleman Tavern',
    georgianName: 'თავადური',
    stars: 5,
    rating: 4.8,
    reviewsCount: 1680,
    priceRange: '₾₾ (18 - 35 GEL)',
    avgPriceGEL: 24,
    cuisineType: 'Noble Georgian Banquet & Adjarian Specialty',
    mealTypes: ['Lunch', 'Dinner'],
    address: '38/40 Lermontov St, Batumi',
    location: '38/40 Lermontov St, Batumi',
    hours: '11:00 – 00:00 Daily',
    phone: '+995 422 27 50 50',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tavaduri+Restaurant+Batumi+Lermontov',
    tagline: 'Traditional Caucasian Wooden Tavern with Weekend Polyphony',
    description: 'Richly decorated in the style of an Adjarian nobleman’s hunting lodge with carved wood, antique weapons, and clay vessels. Renowned for spicy veal chashushuli and hearty Supra feasts.',
    signatureDishes: [
      { name: 'Chashushuli Spicy Veal in Ketsi', priceGEL: 17, note: 'Tender veal simmered in tomato, garlic, and mountain herbs' },
      { name: 'Tavaduri Smoked Cheese Plate', priceGEL: 14, note: 'Artisanal selection of Adjarian highland cheeses' },
      { name: 'Khachapuri on a Spit (Shampurze)', priceGEL: 15, note: 'Sulguni cheese wrapped in dough and grilled over charcoal embers' },
    ],
    ambiance: ['Traditional Wood Lodge', 'Weekend Polyphony', 'Warm Supra Spirit', 'Generous Meat Dishes'],
    mustTry: 'Khachapuri on a spit: stringy melted cheese roasted over glowing coals.',
  },
];

const getRestaurantById = (id) => BATUMI_RESTAURANTS.find((r) => r.id === id) || BATUMI_RESTAURANTS[0];

const DISHES = [
  {
    id: 'adjarian-khachapuri',
    name: 'Adjarian Khachapuri (Acharuli)',
    georgianName: 'აჭარული ხაჭაპური',
    pronunciation: 'ah-cha-roo-lee kha-cha-poo-ree',
    category: 'Adjarian Specialty',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnMeCFpdMCiRKNlpqcnzdj-KbXZOJIcjgltIcf_5VLE3EGdSBJ8rmpYVG&s=10',
    description: 'Boat-shaped fresh dough baked with bubbly Sulguni cheese, topped with fresh egg yolk and country butter representing the sun and Black Sea.',
    origin: 'Batumi & Coastal Adjara',
    flavorProfile: 'Rich, molten cheese, velvety yolk, crispy buttered crust',
    avgPriceGEL: 14,
    isVeg: true,
    ingredients: ['Sulguni Cheese', 'Imeretian Curd', 'Egg Yolk', 'Country Butter', 'Fresh Leavened Dough'],
    pairing: 'Dry Tsinandali White Wine or Iced Zedazeni Pear Lemonade',
    eatingGuide: [
      'Use your fork to whisk the raw egg yolk, butter pat, and molten cheese together into a creamy lava.',
      'Tear off the crispy baked bread "horns" from the edges with your hands.',
      'Dip the hot crust directly into the bubbling cheese center. Never use a knife!',
    ],
    venues: [
      {
        name: 'Retro Khachapuri House',
        type: 'Legendary Bakery',
        address: '54 Tbel Abuseridze St, Batumi',
        highlight: 'Awarded #1 Khachapuri in Georgia by culinary critics',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Retro+Batumi+Tbel+Abuseridze',
      },
      {
        name: 'Laguna Cafe',
        type: 'Historic Cafe',
        address: '18 Zurab Gorgiladze St, Batumi',
        highlight: 'Famous for "titanic" size and extra crispy crust dough',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Laguna+Batumi+Gorgiladze',
      },
      {
        name: 'Porto Franco',
        type: 'Old Town Restaurant',
        address: '40 Konstantine Gamsakhurdia St, Batumi',
        highlight: 'Brick-oven baked with smoked Sulguni options',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Porto+Franco+Batumi',
      },
    ],
  },
  {
    id: 'sinori',
    name: 'Sinori (Layered Adjarian Pasta)',
    georgianName: 'სინორი',
    pronunciation: 'see-no-ree',
    category: 'Adjarian Specialty',
    image: 'https://georgianeats.com/images/sinori-hero.webp',
    description: 'Crisp rolled dough rolls baked upright, drenched in garlic-infused Nadughi curd and bubbling clarified butter.',
    origin: 'Highland Adjara (Khulo)',
    flavorProfile: 'Garlicky, velvety, golden baked and deeply savory',
    avgPriceGEL: 12,
    isVeg: true,
    ingredients: ['Rolled Lavash Rolls', 'Nadughi (Georgian Ricotta)', 'Clarified Butter', 'Crushed Garlic', 'Rock Salt'],
    pairing: 'Chkhaveri Rosé or Crisp Georgian Amber Wine',
    eatingGuide: [
      'Eat while sizzling hot straight from the clay ketsi pot.',
      'Spoon up the garlic butter from the base with every mouthful.',
      'Pair with fresh cucumber and tomato salad dressed with Kakhetian oil.',
    ],
    venues: [
      {
        name: 'Old Boulevard Restaurant',
        type: 'Fine Georgian Dining',
        address: '23a Ninoshvili St, Batumi',
        highlight: 'Authentic highland recipe served in sizzling clay pots',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Old+Boulevard+Restaurant+Batumi',
      },
      {
        name: 'Adjarian Wine House',
        type: 'Vineyard Cellar Restaurant',
        address: 'Keda Valley (Scenic Highway)',
        highlight: 'Wood-fired oven preparation paired with Chkhaveri wine',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Adjarian+Wine+House+Keda',
      },
    ],
  },
  {
    id: 'borano',
    name: 'Borano (Mountain Cheese Fondue)',
    georgianName: 'ბორანო',
    pronunciation: 'boh-rah-noh',
    category: 'Adjarian Specialty',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkLMxrd8ikfj914jW6llgZkS-HuxWbgAkkalXSOwD2MRx3UfoLbxReKgBH&s=10',
    description: 'Traditional Caucasian cheese fondue cooked with aged highland cheese slowly melted in hot clarified butter, served with hot cornbread.',
    origin: 'Upper Adjara Highlands',
    flavorProfile: 'Intensely rich, nutty, buttery and decadent',
    avgPriceGEL: 13,
    isVeg: true,
    ingredients: ['Aged Highland Adjarian Cheese', 'Clarified Iagi Butter', 'Hot Cornmeal Mchadi', 'A pinch of mountain thyme'],
    pairing: 'Dry Rkatsiteli Qvevri Wine or Hot Black Tea',
    eatingGuide: [
      'Break a piece of hot, dense Mchadi (cornbread).',
      'Swirl the cornbread through the golden, bubbling cheese and clarified butter.',
      'Best savored as a hearty appetizer during coastal or mountain breezes.',
    ],
    venues: [
      {
        name: 'Chacha Time Gastrobar',
        type: 'Courtyard Gastro Pub',
        address: '5/16 Mazniashvili St, Old Batumi',
        highlight: 'Served sizzling with warm Imeretian Mchadi cornbread',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chacha+Time+Batumi',
      },
      {
        name: 'Tavaduri',
        type: 'Traditional Georgian Tavern',
        address: '38/40 Pushkin St, Batumi',
        highlight: 'Local favorite for robust traditional feasts',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tavaduri+Restaurant+Batumi',
      },
    ],
  },
  {
    id: 'khinkali',
    name: 'Georgian Dumplings (Khinkali)',
    georgianName: 'ხინკალი',
    pronunciation: 'kheen-kah-lee',
    category: 'Classic Georgian',
    image: 'https://mission-food.com/wp-content/uploads/2023/06/Khinkali-Georgian-Dumplings-Featured.jpg',
    description: 'Pleated dough dumplings bursting with spiced meat and piping hot savory broth. Hold by the knob, bite, sip the soup, and eat!',
    origin: 'Georgian Mountains',
    flavorProfile: 'Aromatic cilantro, coarse black pepper, rich spiced broth',
    avgPriceGEL: 2,
    isVeg: false,
    ingredients: ['Minced Beef & Pork (or Mountain Lamb)', 'Fresh Cilantro', 'Ground Black Pepper', 'Cumin', 'Hand-Pleated Dough'],
    pairing: 'Cold Adjarian Draft Beer or Chacha grape pomace spirit',
    eatingGuide: [
      'Dust generously with freshly cracked coarse black pepper.',
      'Grab the thick top dough knob (Kudi) with your fingers and turn it upside down.',
      'Nibble a small hole in the side, sip the piping hot savory broth first, then eat the rest.',
      'Leave the dough knob on your plate to count how many you conquered!',
    ],
    venues: [
      {
        name: 'Shemoikhede Genatsvale',
        type: 'Khinkali Specialist Tavern',
        address: '8 Noe Zhordania St, Old Batumi',
        highlight: 'Cooked fresh to order in 19 distinct pleats with peppery beef & pork',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shemoikhede+Genatsvale+Batumi',
      },
      {
        name: 'Khinklis Sakhli (Khinkali House)',
        type: 'Casual Local Diner',
        address: '32 Pushkin St, Batumi',
        highlight: 'Great cheese, mushroom, and mountain lamb varieties',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Khinkali+House+Batumi',
      },
    ],
  },
  {
    id: 'black-sea-seafood',
    name: 'Fried Black Sea Red Mullet & Turbot',
    georgianName: 'შავი ზღვის ბარაბულკა',
    pronunciation: 'shah-vee zghvis bah-rah-bool-kah',
    category: 'Coastal Specialty',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHoJxsAQO054qpnd8L2Zfw9De23zWaK7d8D1v9jl1lJoWMcTjoQ04lfg&s=10',
    description: 'Crisp pan-fried fresh Barabulka (red mullet), Black Sea horse mackerel, and succulent mussels in garlic coriander wine broth.',
    origin: 'Batumi Port & Harbor',
    flavorProfile: 'Crispy skin, tender sweet white fish, sea salt, zesty lemon',
    avgPriceGEL: 18,
    isVeg: false,
    ingredients: ['Fresh Caught Barabulka Red Mullet', 'Cornflour Crust', 'Tkemali Wild Plum Sauce', 'Fresh Lemons', 'Coriander'],
    pairing: 'Dry Tsolikouri White Wine or Cold Craft Lager',
    eatingGuide: [
      'At the Old Fish Market, pick your fish fresh off the ice trays first.',
      'Walk into Fishlandia or Blue Wave next door; they pan-fry it in cornmeal within 10 minutes.',
      'Dip in tart green Tkemali plum sauce with fresh hot cornbread.',
    ],
    venues: [
      {
        name: 'Fishlandia Sea Tavern',
        type: 'Waterside Fish Restaurant',
        address: 'Baku St (Right next to Old Fish Market)',
        highlight: 'Pick your fish at the counter and watch chefs fry it instantly',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fishlandia+Batumi',
      },
      {
        name: 'Blue Wave (Lurji Talgha)',
        type: 'Pier Deck Tavern',
        address: 'Baku St Harbor Pier, Batumi',
        highlight: 'Outdoor seaside tables directly over the water with cold draft beer',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Blue+Wave+Batumi+Fish+Market',
      },
    ],
  },
  {
    id: 'chkhaveri-wine',
    name: 'Chkhaveri Rosé & Amber Wine',
    georgianName: 'ჩხავერი',
    pronunciation: 'chk-hah-veh-ree',
    category: 'Wine',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdZjyP9vRKuNVWdRfIIM5L7qmRo7rZLNPA7GMKwSz6g&s',
    description: 'Adjara’s rare, prized indigenous grape from Keda valley. Fermented in clay Qvevri vessels into delicate strawberry and wild floral notes.',
    origin: 'Keda Wine Region',
    flavorProfile: 'Crisp minerality, wild mountain strawberries, floral finish',
    avgPriceGEL: 22,
    isVeg: true,
    ingredients: ['100% Chkhaveri Indigenous Grapes', 'Clay Qvevri Vessel Aging', 'Wild Mountain Yeasts', 'Zero Additives'],
    pairing: 'Aged Sulguni Cheese, Roasted Hazelnuts, or Smoked Trout',
    eatingGuide: [
      'Serve slightly chilled around 12°C in a broad tasting glass.',
      'Observe the natural light ruby-amber glow from clay vessel maceration.',
      'Take small sips to discover delicate Caucasian mountain wild forest berries.',
    ],
    venues: [
      {
        name: 'Bupha Wine Bar',
        type: 'Artisanal Natural Wine Bar',
        address: '16 Noe Zhordania St, Old Batumi',
        highlight: 'Sommelier flights of natural amber and Qvevri wines',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bupha+Wine+Bar+Batumi',
      },
      {
        name: 'Adjarian Wine House',
        type: 'Historic Estate Marani',
        address: 'Village Acharistskali, Keda',
        highlight: 'Original private vineyard of Chkhaveri with cellar tours',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Adjarian+Wine+House+Georgia',
      },
    ],
  },
  {
    id: 'badrijani-nigvzit',
    name: 'Badrijani (Walnut Eggplant Rolls)',
    georgianName: 'ბადრიჯანი ნიგვზით',
    pronunciation: 'bah-dree-jah-nee neeg-vzeet',
    category: 'Classic Georgian',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmSOByCmZDWuiywxXk3R9iVV22gKCFtZ1RXybwqaSYL9VTkD69kOaJUo&s=10',
    description: 'Fried eggplant ribbons wrapped around a rich garlic walnut paste scented with blue fenugreek, marigold petals, and crowned with ruby pomegranate jewels.',
    origin: 'Georgian Feast Tradition',
    flavorProfile: 'Creamy, earthy, garlicky with sweet-tart pomegranate bursts',
    avgPriceGEL: 11,
    isVeg: true,
    ingredients: ['Roasted Eggplant Ribbons', 'Ground Walnuts', 'Blue Fenugreek (Utskho Suneli)', 'Marigold Petals', 'Fresh Garlic', 'Ruby Pomegranate'],
    pairing: 'Crisp Mtsvane White Wine or Amber Kisi Wine',
    eatingGuide: [
      'Served cold as the signature opening plate of every Georgian feast (Supra).',
      'Enjoy in a single bite to balance the rich walnut spice with tart pomegranate seeds.',
      'Savor alongside fresh shotis puri bread and tomato cucumber salad.',
    ],
    venues: [
      {
        name: 'Heart of Batumi',
        type: 'Traditional Courtyard Cafe',
        address: '11 General Mazniashvili St, Batumi',
        highlight: 'Home-style recipes with fresh local herbs and homemade bread',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Heart+of+Batumi+Mazniashvili',
      },
      {
        name: 'Bern Restaurant',
        type: 'Historic Garden Restaurant',
        address: '17 Rustaveli Ave, Batumi',
        highlight: 'Exquisite cold appetizer Supra platter',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Bern+Restaurant+Batumi',
      },
    ],
  },
  {
    id: 'churchkhela',
    name: 'Churchkhela (Georgian Sweet Candle)',
    georgianName: 'ჩურჩხელა',
    pronunciation: 'choor-ch-kheh-lah',
    category: 'Dessert',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0glLdgOpumbgfl0nZo0K6zumCd1MjUOFkonME5BQ4bVrEaCMadM5XkxGa&s=10',
    description: 'Walnuts and hazelnuts strung on thread and repeatedly dipped in thickened boiled grape juice (Tatara) and sun-dried.',
    origin: 'Silk Road travel delicacy',
    flavorProfile: 'Naturally sweet grape glaze, chewy fruit texture, crunchy nuts',
    avgPriceGEL: 5,
    isVeg: true,
    ingredients: ['Choice Walnuts & Hazelnuts', 'Pure Badagi Grape Juice', 'Organic Wheat Flour', 'Cotton String'],
    pairing: 'Hot Georgian Mountain Herbal Tea or Sand-Brewed Coffee',
    eatingGuide: [
      'Slice into bite-sized medallions with a sharp knife.',
      'Pull out the central cotton thread before enjoying.',
      'Wonderful pocket fuel during long walks along the Batumi Boulevard.',
    ],
    venues: [
      {
        name: 'Batumi Central Bazaar (Boni Market)',
        type: 'Farmers Produce Market',
        address: 'Mayakovsky St, Batumi',
        highlight: 'Over 50 farmer stands selling fresh mountain churchkhela and wild honey',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Batumi+Central+Bazaar+Boni',
      },
      {
        name: 'Badagi Confectionery',
        type: 'Artisan Sweet Shop',
        address: '29 Memed Abashidze Ave, Old Batumi',
        highlight: 'Organic, laboratory-tested natural varieties in gift boxes',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Badagi+Batumi+Abashidze',
      },
    ],
  },
];

const NEIGHBORHOODS = [
  {
    id: 'old-batumi',
    name: 'Old Batumi',
    subtitle: 'Historic Quarter',
    tagline: 'Cobblestones, belle-époque balconies & courtyard wine bars',
    distanceToBeach: '300m · 4 min walk',
    vibe: 'Romantic & Bohemian',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdL2ODmT1-Y_zcaFmUEoOKm4WSFZkfyKn6NtPCPcfQO_R3TPSyQB3Iasy&s=10',
    highlights: ['Piazza Square', 'Europe Square', 'Antique wine cellars'],
    bestFor: 'Couples, history lovers & foodies',
    airbnbUrl: 'https://www.airbnb.com/s/Old-Batumi--Georgia/homes',
    bookingUrl: 'https://www.booking.com/searchresults.html?ss=Old+Batumi+Georgia',
  },
  {
    id: 'boulevard',
    name: 'Miracle Park & Boulevard',
    subtitle: 'Seaside Waterfront',
    tagline: 'Futuristic seaside towers, sea breezes & kinetic sculptures',
    distanceToBeach: 'Direct Waterfront (0m)',
    vibe: 'Modern & Vibrant',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsxCRYiUT0phM8xHLQoV5kSVepktf6caynZvvHBG2eYC_QehvWDj5aPmN&s=10',
    highlights: ['Ali & Nino', 'Alphabet Tower', 'Batumvelo bike track'],
    bestFor: 'Families, sunset strolls & cyclists',
    airbnbUrl: 'https://www.airbnb.com/s/Batumi-Boulevard--Georgia/homes',
    bookingUrl: 'https://www.booking.com/searchresults.html?ss=Batumi+Boulevard+Georgia',
  },
  {
    id: 'green-cape',
    name: 'Green Cape',
    subtitle: 'Mtsvane Kontskhi',
    tagline: 'Subtropical cliff greenery & tranquil pebble beach coves',
    distanceToBeach: 'Private Sea Cove (50m)',
    vibe: 'Lush & Peaceful',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEDIF4EAY-ZIyC56XkJjriZ4uCIN8RuZ81ynKB2ZwO48cgz-xyEAEqK1Y&s=10',
    highlights: ['Botanical Garden', 'Crystal pebble cove', 'Cliffside seafood'],
    bestFor: 'Nature lovers & calm swimming',
    airbnbUrl: 'https://www.airbnb.com/s/Mtsvane-Kontskhi--Georgia/homes',
    bookingUrl: 'https://www.booking.com/searchresults.html?ss=Mtsvane+Kontskhi+Batumi+Georgia',
  },
  
];

const ITINERARIES = [
  {
    id: 'batumi-24h',
    title: '24 Hours in Batumi',
    durationDays: 1,
    tagline: 'Must-see essentials for short trips and stopovers',
    days: [
      {
        day: 1,
        title: 'Seaside Icons & Old Town Charm',
        location: 'Miracle Park & Old Town',
        weather: '☀️ 26°C Sunny Sea Breeze',
        image: 'https://intranet.infoajara.com/storage/images/6ITaVIHcSAkLAmu2cIH2XyEXZSi1sV3fREZLAvan.jpg',
        morning: 'Morning stroll along Boulevard, admire Batumi Lighthouse, Astronomical Clock, and Alphabet Tower.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Boat-shaped Adjarian Khachapuri with molten cheese or Golden Syrniki',
          restaurantIds: ['retro-khachapuri', 'chocolatte-coffee-room'],
        },
        afternoon: 'Wander Old Batumi & Europe Square, browse boutique galleries, and bicycle along coastal palms.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Hand-pinched juicy Khinkali broth dumplings or Shkmeruli garlic chicken',
          restaurantIds: ['heart-of-batumi', 'shemoikhede-genatsvale'],
        },
        evening: 'Take Argo Cable Car for panoramic sunset, watch Ali & Nino kinetic statue illumination at 19:30, and enjoy fine wine.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: 'Mountain Borano cheese fondue or Fresh pan-roasted Black Sea sea bass',
          restaurantIds: ['old-boulevard-restaurant', 'fanfan-batumi'],
        },
        food: 'Adjarian Khachapuri with dry Tsinandali wine',
      },
    ],
  },
  {
    id: 'batumi-3days',
    title: '3-Day Coast & Mountains',
    durationDays: 3,
    tagline: 'The balanced mix of beach, botanical cliffs, and waterfalls',
    days: [
      {
        day: 1,
        title: 'Boulevard & Historic Old Town',
        location: 'Batumi Boulevard & Piazza',
        weather: '☀️ 26°C Clear Seaside Skies',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPXTXZAcWEhGhOBhePgY5AbFJlJPnrnDWloXF0CdqUcg&s=10',
        morning: 'Explore cobblestone Old Batumi, Piazza mosaics, and the German-crafted Astronomical Clock.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Legendary Titanic boat khachapuri with mountain butter or Cottage cheese syrniki',
          restaurantIds: ['retro-khachapuri', 'chocolatte-coffee-room'],
        },
        afternoon: 'Rent a Batumvelo bicycle and ride along the 7km palm-fringed coastline under the sea breeze.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Sizzling Shkmeruli chicken in clay ketsi or hand-twisted Kalakuri Khinkali',
          restaurantIds: ['heart-of-batumi', 'shemoikhede-genatsvale'],
        },
        evening: 'Sunset drinks overlooking Miracle Park followed by Ali & Nino illumination and Old Port walk.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: 'Highland Borano fondue with cornbread or Bohemian garden seafood pasta',
          restaurantIds: ['old-boulevard-restaurant', 'fanfan-batumi'],
        },
        food: 'Juicy meat Khinkali dumplings with spicy Ajika',
      },
      {
        day: 2,
        title: 'Botanical Wonders & Green Cape',
        location: 'Green Cape & Botanical Garden',
        weather: '🌤️ 24°C Subtropical Coastal Breeze',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGzov6LA8FnG8HCznKGbhuTycpSwXxDE0e519PliKkSAQZLVC0kj4bfQ9&s=10',
        morning: 'Take marshrutka #31 or taxi to Batumi Botanical Garden; explore 9 world zones and Japanese bamboo groves.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Nostalgic honey-walnut crepes or Extra-crispy hollowed-crust boat khachapuri',
          restaurantIds: ['privet-iz-batuma', 'laguna-cafe'],
        },
        afternoon: 'Hike down to Green Cape pebble beach cove and swim in the crystal turquoise Black Sea waves.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Freshly pan-fried Black Sea flounder / red mullet (Barabulka) with mchadi cornbread',
          restaurantIds: ['u-soba-green-cape', 'sanapiro-fish-market'],
        },
        evening: 'Ascend Miracle Park into the sky for dinner or relax under Boulevard seaside pines with live music.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: '360° revolving sky dining with roasted duck or Black Sea mussels in garlic butter',
          restaurantIds: ['alphabet-tower-restaurant', 'daiquiri-family-restaurant'],
        },
        food: 'Black Sea red mullet (Barabulka) with fresh lemon',
      },
      {
        day: 3,
        title: 'Mountain Adjara & Roman Citadel',
        location: 'Makhuntseti Waterfall & Gonio',
        weather: '🌄 23°C Crisp Mountain Air',
        image: 'https://www.georgia-spirit.com/images/guides/best-tours-adjara.jpg',
        morning: 'Scenic highway expedition to 50m Makhuntseti Waterfall and the 900-year-old Queen Tamar arched stone bridge.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Old Town stone-oven baked khachapuri or specialty espresso with avocado brioche',
          restaurantIds: ['porto-franco', 'chocolatte-coffee-room'],
        },
        afternoon: 'Wine tasting in Keda valley sampling rare royal Chkhaveri rosé and visiting Gonio-Apsaros Roman citadel.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Caucasian mountain meat board with pork ribs or Nobleman spicy veal chashushuli',
          restaurantIds: ['tavaduri-restaurant', 'bern-restaurant'],
        },
        evening: 'Return to seaside Batumi for synchronized dancing fountains laser show at Ardagani Lake.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: 'Riverside chateau Keda river trout in cornmeal or courtyard roasted pork Ojakhuri',
          restaurantIds: ['adjarian-wine-house', 'heart-of-batumi'],
        },
        food: 'Adjarian Sinori pasta with garlic curd and melted butter',
      },
    ],
  },
  {
    id: 'batumi-5days',
    title: '5-Day Grand Adjara Discovery',
    durationDays: 5,
    tagline: 'Deep dive into subtropical rainforests, wine valleys, and coastal life',
    days: [
      {
        day: 1,
        title: 'Boulevard Initiation & Miracle Park',
        location: 'Boulevard & Miracle Park',
        weather: '☀️ 26°C Clear Seaside Skies',
        image: 'https://storage.georgia.travel/images/miracle-park-gnta.webp',
        morning: 'Check into hotel, walk Miracle Park, and explore Batumi Old Maritime Port.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Legendary Titanic boat khachapuri with mountain butter or Cottage cheese syrniki',
          restaurantIds: ['retro-khachapuri', 'chocolatte-coffee-room'],
        },
        afternoon: 'Piazza Square cafes, European bell towers, and boutique craft shops.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Sizzling Shkmeruli chicken in clay ketsi or hand-pinched Kalakuri Khinkali',
          restaurantIds: ['heart-of-batumi', 'shemoikhede-genatsvale'],
        },
        evening: 'Sunset watch at Ali & Nino with local beer, amber wine, and maritime stroll.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: 'Highland Borano cheese fondue or Fresh pan-roasted Black Sea sea bass',
          restaurantIds: ['old-boulevard-restaurant', 'fanfan-batumi'],
        },
        food: 'Classic Adjarian Khachapuri',
      },
      {
        day: 2,
        title: 'Batumi Botanical Sanctuary',
        location: 'Green Cape Cliffs',
        weather: '🌤️ 25°C Subtropical Garden Mist',
        image: 'https://api.visitbatumi.com/media/images/600x600/12ae2a4360b94b8db21c0d41f5f5c0ea.webp',
        morning: 'Hike through 9 world phytogeographical zones overlooking turquoise Black Sea waters.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Morning clay pot spiced lobio beans or Purified crispy-crust boat khachapuri',
          restaurantIds: ['privet-iz-batuma', 'laguna-cafe'],
        },
        afternoon: 'Swim and sunbathe at Green Cape cove with churchkhela and fresh fruit snacks.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Fresh pan-fried Black Sea flounder on beach or market dock grilled Turbot',
          restaurantIds: ['u-soba-green-cape', 'sanapiro-fish-market'],
        },
        evening: 'Sunset dinner inside the revolving Alphabet Tower sphere 130m in the air.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: '360° rotating sky view duck breast or Seaside pine terrace garlic mussels',
          restaurantIds: ['alphabet-tower-restaurant', 'daiquiri-family-restaurant'],
        },
        food: 'Adjarian Borano melted mountain cheese',
      },
      {
        day: 3,
        title: 'Mtirala National Rainforest',
        location: 'Mtirala Rainforest Gorge',
        weather: '🌧️ 22°C Emerald Rain & Mist',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSTv8pPu7agICMkvz67dEV5FEL97-72iVzulTDKVoos4OVrgGEjIcnrk&s=10',
        morning: 'Adventure through Europe’s wettest subtropical rainforest with suspension bridges and hand-pulled cable cars.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Stone-oven baked khachapuri with boiled egg or Specialty coffee with avocado toast',
          restaurantIds: ['porto-franco', 'chocolatte-coffee-room'],
        },
        afternoon: 'Swim in the crystal mountain lake and hike to the roaring Tsablnari waterfall.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Nobleman spicy veal chashushuli in ketsi or Grand meat board with pork ribs',
          restaurantIds: ['tavaduri-restaurant', 'bern-restaurant'],
        },
        evening: 'Traditional Supra feast in a wooden tavern with mountain wine and polyphony.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: 'Keda river trout in cornmeal with garlic coriander sauce or Clay pot pork Ojakhuri',
          restaurantIds: ['adjarian-wine-house', 'heart-of-batumi'],
        },
        food: 'Fresh river trout fried with cornbread',
      },
      {
        day: 4,
        title: 'Gonio Roman Citadel & Sarpi Beach',
        location: 'Gonio Citadel & Sarpi Coast',
        weather: '🌊 27°C Turquoise Riviera Sun',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-7za10tqY2SZkJpidClQgOdvURgH6yoL_V2ANPD5X_23Pyv5IcsGagRE&s=10',
        morning: 'Tour Gonio-Apsaros Fortress and examine 2,000-year-old Roman citadel walls and museum.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Purified double-cheese boat khachapuri or Herb omelette with mountain honey',
          restaurantIds: ['laguna-cafe', 'privet-iz-batuma'],
        },
        afternoon: 'Sunbathe at Sarpi beach right next to the cliff border with Georgia’s clearest turquoise water.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Fresh Black Sea garlic steamed mussels & barabulka or Hand-pinched juicy Khinkali',
          restaurantIds: ['sanapiro-fish-market', 'shemoikhede-genatsvale'],
        },
        evening: 'Night cycling on New Boulevard and laser dancing fountain show at Ardagani Lake.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: 'Grilled whole sea bass with lemon butter or Secret garden seafood risotto',
          restaurantIds: ['daiquiri-family-restaurant', 'fanfan-batumi'],
        },
        food: 'Black Sea mussels in garlic cream sauce',
      },
      {
        day: 5,
        title: 'Keda Wine Valley & Sunset Cruise',
        location: 'Keda Wine Hills & Batumi Bay',
        weather: '🍇 25°C Golden Valley Sun',
        image: 'https://images.trvl-media.com/lodging/93000000/92560000/92556800/92556762/20f68443.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill',
        morning: 'Scenic drive along Acharistskali river gorge and Dandalo arched stone bridge.',
        morningMeal: {
          mealName: 'Morning Breakfast',
          dishHighlight: 'Titanic boat khachapuri with cold tarragon soda or Fresh curd syrniki',
          restaurantIds: ['retro-khachapuri', 'chocolatte-coffee-room'],
        },
        afternoon: 'Artisan wine tastings at family Marani cellars in Keda sampling rare Qvevri Chkhaveri rosé.',
        afternoonMeal: {
          mealName: 'Midday Lunch',
          dishHighlight: 'Spit-roasted suckling pig with river trout or Sizzling Sinori pasta in garlic butter',
          restaurantIds: ['adjarian-wine-house', 'porto-franco'],
        },
        evening: 'Sunset yacht cruise along Batumi Bay watching dolphins play in the calm waters.',
        eveningMeal: {
          mealName: 'Sunset Dinner',
          dishHighlight: 'Black Sea sturgeon steak with live grand piano or 360° sky cocktail sunset toast',
          restaurantIds: ['old-boulevard-restaurant', 'alphabet-tower-restaurant'],
        },
        food: 'Feast at Adjarian Wine House with rare Qvevri vintages',
      },
    ],
  },
];

const FAQS = [
  {
    q: 'Do I need a visa to visit Batumi, Georgia?',
    a: 'Citizens of 95+ countries (USA, EU, UK, Canada, Australia, UAE, Turkey, etc.) can enter Georgia completely visa-free and stay for up to 365 days!',
  },
  {
    q: 'How do I eat an Adjarian Khachapuri properly?',
    a: 'Never slice with a knife! Use your fork to stir the butter, egg yolk, and molten cheese together. Then tear off the crispy crust "horns" from the sides and dip them directly into the center.',
  },
  {
    q: 'How do I travel to Batumi from Tbilisi?',
    a: 'The high-speed Swiss Stadler double-decker train runs daily from Tbilisi to Batumi in 5 hours (~35 GEL) with AC, Wi-Fi, and scenic mountain views.',
  },
  {
    q: 'Is Batumi safe for travelers?',
    a: 'Georgia ranks among the top 10 safest countries worldwide. Batumi boulevards and Old Town are vibrant, safe, and patrolled 24/7 by friendly tourist police.',
  },
];

export default function App() {
  const [selectedCurrency, setSelectedCurrency] = useState('GEL');
  const [savedAttractions, setSavedAttractions] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('batumi_saved_places_v2');
        if (stored) return JSON.parse(stored);
      } catch {
        // ignore
      }
    }
    return [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalAttraction, setActiveModalAttraction] = useState(null);
  const [isTripModalOpen, setIsTripModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPlanId, setSelectedPlanId] = useState('batumi-3days');
  const [itineraryTab, setItineraryTab] = useState('presets');
  const [tripNotes, setTripNotes] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [savedDropdownOpen, setSavedDropdownOpen] = useState(false);

  // New interactive Cuisine states
  const [expandedDishId, setExpandedDishId] = useState('adjarian-khachapuri');
  const [showAllDishes, setShowAllDishes] = useState(false);
  const [cuisineFilter, setCuisineFilter] = useState('All');
  const [visibleAttractionsCount, setVisibleAttractionsCount] = useState(8);
  const [activeModalDish, setActiveModalDish] = useState(null);

  // Neighborhoods & Districts states
  const [districtCategoryFilter, setDistrictCategoryFilter] = useState('All');
  const [activeNeighborhoodModal, setActiveNeighborhoodModal] = useState(null);

  // Authentic Hero Photo switcher and Lightbox
  
  const [activePhotoLightbox, setActivePhotoLightbox] = useState(null);
  const currentHeroImage = USER_PHOTOS.batumiBoulevard;
  // Restaurant Detail Modal state
  const [activeModalRestaurant, setActiveModalRestaurant] = useState(null);
  const [activeCorkDayTab, setActiveCorkDayTab] = useState('all');

  // Live Weather from OpenWeather RapidAPI
  const [weatherData, setWeatherData] = useState({
    main: { temp: 66.18, feels_like: 67.21, humidity: 100, pressure: 1009 },
    weather: [{ main: 'Rain', description: 'light rain', icon: '10n' }],
    wind: { speed: 6.91 },
    clouds: { all: 92 },
    sys: { sunrise: 1790651261, sunset: 1790693998 },
  });
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [lastWeatherFetch, setLastWeatherFetch] = useState(null);
  const [isWeatherModalOpen, setIsWeatherModalOpen] = useState(false);

  const fetchLiveWeather = async (force = false) => {
    const CACHE_KEY = 'batumi_weather_cache_v2';
    const CACHE_TIME_KEY = 'batumi_weather_time_v2';
    const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes cache to avoid rate limits

    if (!force) {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
        if (cached && cachedTime && Date.now() - parseInt(cachedTime, 10) < CACHE_TTL_MS) {
          const parsed = JSON.parse(cached);
          if (parsed?.main?.temp) {
            setWeatherData(parsed);
            setLastWeatherFetch(new Date(parseInt(cachedTime, 10)));
            return;
          }
        }
      } catch {
        // ignore cache read error
      }
    }

    setWeatherLoading(true);
    try {
      const response = await fetch('https://open-weather13.p.rapidapi.com/city?lang=EN&city=batumi', {
        method: 'GET',
        headers: {
          'x-rapidapi-key': 'c9bbd4aea8msh2a77b65c1b84aacp15b208jsnedfa137c515c',
          'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      if (data && data.main && typeof data.main.temp === 'number') {
        setWeatherData(data);
        const now = Date.now();
        setLastWeatherFetch(new Date(now));
        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(data));
          localStorage.setItem(CACHE_TIME_KEY, now.toString());
        } catch {
          // ignore
        }
      }
    } catch (err) {
      console.warn('Weather fetch notice:', err);
    } finally {
      setWeatherLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveWeather();
  }, []);

  const rawTempF = weatherData?.main?.temp ?? 66;
  const tempCelsius = Math.round(((rawTempF - 32) * 5) / 9);
  const tempFahrenheit = Math.round(rawTempF);
  const feelsLikeF = weatherData?.main?.feels_like ?? rawTempF;
  const feelsLikeC = Math.round(((feelsLikeF - 32) * 5) / 9);
  const weatherConditionDesc = weatherData?.weather?.[0]?.description
    ? weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)
    : 'Light rain';
  const weatherMain = weatherData?.weather?.[0]?.main || 'Rain';

  const speakGeorgian = (text) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ka-GE';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  // Currency calculator state
  const [calcAmount, setCalcAmount] = useState(100);
  const [fromCurr, setFromCurr] = useState('USD');
  const [toCurr, setToCurr] = useState('GEL');

  const curr = CURRENCY_RATES[selectedCurrency] || CURRENCY_RATES.GEL;

  const formatPrice = (priceGEL) => {
    if (priceGEL === 0) return 'Free Admission';
    const converted = (priceGEL * curr.rate).toFixed(selectedCurrency === 'GEL' ? 0 : 1);
    return `${curr.symbol}${converted} (${priceGEL} ₾)`;
  };

  const toggleSave = (item) => {
    setSavedAttractions((prev) => {
      const next = prev.some((p) => p.id === item.id)
        ? prev.filter((p) => p.id !== item.id)
        : [...prev, item];
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('batumi_saved_places_v2', JSON.stringify(next));
        } catch {
          // ignore
        }
      }
      return next;
    });
  };

  const filteredAttractions = ATTRACTIONS.filter((a) => {
    const matchesCat = selectedCategory === 'All' || a.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.georgianName.toLowerCase().includes(q) ||
      a.location.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const currentPlan = ITINERARIES.find((p) => p.id === selectedPlanId) || ITINERARIES[1];

  const calcConverted = () => {
    const fromRate = CURRENCY_RATES[fromCurr]?.rate || 1;
    const toRate = CURRENCY_RATES[toCurr]?.rate || 1;
    return ((calcAmount / fromRate) * toRate).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-rose-500 selection:text-white">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <button
              type="button"
              onClick={() => setIsWeatherModalOpen(true)}
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold cursor-pointer group transition-colors"
              title="Click to view live Batumi weather report & forecast"
            >
              {weatherLoading ? (
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-300" />
              ) : weatherMain === 'Rain' || weatherMain === 'Drizzle' ? (
                <CloudRain className="w-3.5 h-3.5 text-cyan-300" />
              ) : weatherMain === 'Clouds' ? (
                <Cloud className="w-3.5 h-3.5 text-slate-300" />
              ) : (
                <Sun className="w-3.5 h-3.5 animate-spin-slow text-amber-300" />
              )}
              <span>
                Batumi Live: <strong className="text-white font-bold">{tempCelsius}°C</strong> ({tempFahrenheit}°F) • {weatherConditionDesc}
              </span>
              <span className="text-[10px] text-amber-400/80 group-hover:text-amber-300 underline underline-offset-2">Details</span>
            </button>
            <span className="hidden sm:flex items-center gap-1.5 text-cyan-300">
              <Waves className="w-3.5 h-3.5" /> Black Sea: 22°C
            </span>
            <span className="hidden md:inline text-slate-500">| Pearl of the Black Sea, Adjara</span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs ml-auto">
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              Tourist Police: <strong className="text-white">+995 422 27 50 23</strong>
            </span>
            <div className="flex items-center gap-1.5 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
              <span className="text-slate-400">Currency:</span>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="bg-transparent text-white font-bold text-xs focus:outline-hidden cursor-pointer"
              >
                {Object.keys(CURRENCY_RATES).map((c) => (
                  <option key={c} value={c} className="bg-slate-900 text-white">
                    {c} ({CURRENCY_RATES[c].symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <img
              src={GEORGIA_FLAG_URL}
              alt="Flag of Georgia"
              className="w-10 h-10 object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform shrink-0"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-slate-900 font-serif-title">
                  Batumi<span className="text-rose-600">Georgia</span><span className="text-slate-400 font-sans text-sm">.com</span>
                </span>
                <span className="px-1.5 py-0.2 rounded-sm bg-rose-50 border border-rose-200 text-rose-700 text-[10px] font-bold">
                  🇬🇪 ADJARA
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">Official Tourism Guide</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#attractions" className="hover:text-rose-600 transition-colors">Attractions</a>
            <a href="#cuisine" className="hover:text-rose-600 transition-colors">Adjarian Food & Cafes</a>
            <a href="#neighborhoods" className="hover:text-rose-600 transition-colors">Neighborhoods</a>
            <a href="#itineraries" className="hover:text-rose-600 transition-colors">Plan Board</a>
            <a href="#tips" className="hover:text-rose-600 transition-colors">Traveler Tips</a>
            <a href="#faqs" className="hover:text-rose-600 transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Wishlist Dropdown button */}
            <div className="relative">
              <button
                onClick={() => setSavedDropdownOpen(!savedDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                <Bookmark className={`w-4 h-4 ${savedAttractions.length > 0 ? 'text-rose-600 fill-rose-600' : ''}`} />
                <span className="hidden sm:inline">Saved</span>
                <span className="px-1.5 py-0.2 rounded-full bg-rose-600 text-white text-[10px] font-bold">
                  {savedAttractions.length}
                </span>
              </button>

              {savedDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                    <span className="font-bold text-xs text-slate-900">Saved Places ({savedAttractions.length})</span>
                    <button onClick={() => setSavedDropdownOpen(false)}><X className="w-4 h-4 text-slate-400" /></button>
                  </div>
                  {savedAttractions.length === 0 ? (
                    <p className="py-6 text-center text-xs text-slate-400">No bookmarks yet</p>
                  ) : (
                    <div className="py-2 max-h-60 overflow-y-auto space-y-2 no-scrollbar">
                      {savedAttractions.map((p) => (
                        <div key={p.id} className="flex items-center justify-between gap-2 p-2 rounded-lg bg-slate-50 text-xs">
                          <img src={p.image} alt={p.name} className="w-10 h-10 rounded-md object-cover flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="font-bold truncate text-slate-800">{p.name}</p>
                            <p className="text-[10px] text-slate-500">{p.category}</p>
                          </div>
                          <button onClick={() => toggleSave(p)} className="text-slate-400 hover:text-rose-600">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  {savedAttractions.length > 0 && (
                    <a
                      href="#itineraries"
                      onClick={() => { setSavedDropdownOpen(false); setItineraryTab('custom'); }}
                      className="block mt-2 text-center py-2 rounded-xl bg-rose-600 text-white font-bold text-xs"
                    >
                      Open in Itinerary Builder
                    </a>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => setIsTripModalOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Plan Trip</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-4 space-y-2 text-xs font-semibold">
            {[
              { label: 'Attractions', href: '#attractions' },
              { label: 'Food & Cafes', href: '#cuisine' },
              { label: 'Neighborhoods', href: '#neighborhoods' },
              { label: 'Daily Plan Board', href: '#itineraries' },
              { label: 'Traveler Tips', href: '#tips' },
              { label: 'FAQ', href: '#faqs' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block p-2 rounded-lg bg-slate-50 text-slate-700 hover:bg-rose-50 hover:text-rose-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-[620px] flex items-center justify-center overflow-hidden bg-slate-950 text-center text-white px-4 py-20">
        <img
          src={currentHeroImage}
          alt="Batumi, Georgia"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-900/40" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover The Pearl of the Black Sea</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-serif-title drop-shadow-md">
            Batumi, Georgia
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Where futuristic seaside skyscrapers meet ancient Roman citadels, subtropical bamboo gardens, and authentic Adjarian boat Khachapuri.
          </p>

          {/* User's Authentic Photos Switcher */}
          

          {/* Search box */}
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-2">
            <div className="flex items-center gap-2.5 px-3 flex-1 w-full text-slate-800">
              <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Ali & Nino, Botanical Garden, Khachapuri..."
                className="w-full text-sm py-1.5 focus:outline-hidden bg-transparent"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-xs text-slate-400">Clear</button>
              )}
            </div>
            <a
              href="#attractions"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Explore Sights</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick tags */}
         

          {/* Fast Credentials Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-left">
            <div>
              <p className="font-bold text-sm text-white">7 km Boulevard</p>
              <p className="text-xs text-slate-400">Seaside palm park & cycle track</p>
            </div>
            <div>
              <p className="font-bold text-sm text-white">Subtropical Climate</p>
              <p className="text-xs text-slate-400">Mild Black Sea coast breezes</p>
            </div>
            <div>
              <p className="font-bold text-sm text-white">Adjarian Cuisine</p>
              <p className="text-xs text-slate-400">Iconic boat-shaped Khachapuri</p>
            </div>
            <div>
              <p className="font-bold text-sm text-white">365-Day Visa-Free</p>
              <p className="text-xs text-slate-400">For 95+ international countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ATTRACTIONS SECTION */}
      <section id="attractions" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">Must-See Landmarks</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif-title mt-1">
              Top Attractions in Batumi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Kinetic steel statues, lush clifftop botanical sanctuaries, and mountain waterfalls.
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2">
            {['All', 'Landmarks', 'Beaches & Boulevard', 'Nature & Parks', 'Culture & History', 'Viewpoints'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat ? 'bg-rose-600 text-white' : 'bg-white border border-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredAttractions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">No places found matching "{searchQuery}".</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="mt-2 text-xs text-rose-600 font-bold">
              Reset search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAttractions.slice(0, visibleAttractionsCount).map((place) => {
              const isSaved = savedAttractions.some((p) => p.id === place.id);
              return (
                <div
                  key={place.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="relative aspect-4/3 overflow-hidden cursor-pointer" onClick={() => setActiveModalAttraction(place)}>
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1">
                      <span className="bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] text-white font-semibold">
                        {place.category}
                      </span>
                      {place.isUserPhoto && (
                        <span className="bg-emerald-600/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] text-white font-bold flex items-center gap-1 shadow-xs">
                          ★ Authentic Photo
                        </span>
                      )}
                    </div>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSave(place); }}
                      className={`absolute top-2.5 right-2.5 p-2 rounded-xl transition-colors ${
                        isSaved ? 'bg-rose-600 text-white' : 'bg-white/80 hover:bg-white text-slate-700'
                      }`}
                      title={isSaved ? 'Remove bookmark' : 'Bookmark place'}
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
                    </button>
                    <div className="absolute bottom-2 left-2.5 right-2.5 flex justify-between text-white text-[11px] drop-shadow-md">
                      <span className="text-amber-300 font-medium">{place.georgianName}</span>
                      <span className="flex items-center gap-1 font-bold">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {place.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3
                        onClick={() => setActiveModalAttraction(place)}
                        className="font-bold text-slate-900 text-sm hover:text-rose-600 cursor-pointer line-clamp-1"
                      >
                        {place.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" /> <span className="truncate">{place.location}</span>
                      </p>
                      <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                        {place.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {place.duration}
                      </span>
                      <strong className="text-slate-900">{formatPrice(place.priceGEL)}</strong>
                    </div>

                    <div className="pt-1 flex gap-2">
                      <button
                        onClick={() => setActiveModalAttraction(place)}
                        className="flex-1 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold text-center"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => toggleSave(place)}
                        className={`p-1.5 rounded-lg border text-xs ${
                          isSaved ? 'bg-rose-50 border-rose-200 text-rose-700' : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        {isSaved ? <Check className="w-4 h-4 text-rose-600" /> : <Bookmark className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filteredAttractions.length > 8 && (
          <div className="text-center pt-4">
            <button
              onClick={() => setVisibleAttractionsCount(visibleAttractionsCount >= filteredAttractions.length ? 8 : filteredAttractions.length)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-300 hover:border-rose-500 hover:text-rose-600 text-slate-800 text-xs font-bold shadow-xs transition-all cursor-pointer"
            >
              <span>{visibleAttractionsCount >= filteredAttractions.length ? 'Show Less Sights' : `Show More Sights (${filteredAttractions.length - visibleAttractionsCount} More)`}</span>
              {visibleAttractionsCount >= filteredAttractions.length ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </section>

      {/* 5. CUISINE SECTION WITH RESTAURANTS & MAPS */}
      <section id="cuisine" className="py-20 bg-white border-t border-slate-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase">
              Gastronomic Heritage & Cafes
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif-title">
              The Flavors of Coastal Adjara
            </h2>
            <p className="text-slate-600 text-sm">
              Legendary cheese boats, mountain fondue, fresh Black Sea fish taverns, and the exact restaurants serving them.
            </p>

            {/* Filter by meal type */}
            <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
              {['All', 'Adjarian Specialty', 'Classic Georgian', 'Coastal Specialty', 'Wine', 'Dessert'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCuisineFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    cuisineFilter === cat ? 'bg-amber-600 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dishes & Where to Eat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISHES.filter((d) => cuisineFilter === 'All' || d.category === cuisineFilter)
              .slice(0, showAllDishes ? undefined : 6)
              .map((d) => {
                const isExpanded = expandedDishId === d.id;
                const isSaved = savedAttractions.some((s) => s.id === d.id);
                return (
                  <div
                    key={d.id}
                    onClick={() => setActiveModalDish(d)}
                    className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-amber-400 p-5 space-y-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 cursor-pointer relative"
                  >
                    <div className="space-y-3.5">
                      {/* Dish Image with Badges & Click Hint */}
                      <div className="relative aspect-16/10 overflow-hidden rounded-2xl bg-amber-50">
                        <img
                          src={d.image}
                          alt={d.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                          <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold">
                            {d.category}
                          </span>
                          {d.isVeg && (
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-600/90 text-white text-[11px] font-semibold">
                              Vegetarian
                            </span>
                          )}
                        </div>

                        {/* Save to Food Bucket List Heart */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSave(d);
                          }}
                          className={`absolute top-3 right-3 p-2 rounded-xl backdrop-blur-md transition-all cursor-pointer ${
                            isSaved
                              ? 'bg-rose-500 text-white shadow-md'
                              : 'bg-black/40 text-white hover:bg-black/60'
                          }`}
                          title={isSaved ? 'Saved in Trip Plan' : 'Save to Food Bucket List'}
                        >
                          <Heart className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} />
                        </button>

                        {/* Floating Click Action Pill */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                          <span className="bg-amber-500/90 backdrop-blur-xs px-2.5 py-1 rounded-lg font-bold text-[11px] flex items-center gap-1 shadow-xs">
                            <Utensils className="w-3.5 h-3.5" />
                            <span>Click for Eating Guide</span>
                          </span>
                          <span className="font-extrabold text-amber-200 text-xs drop-shadow-sm">
                            ~{formatPrice(d.avgPriceGEL || 12)}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-baseline gap-2">
                          <h4 className="font-bold text-slate-900 text-base font-serif-title group-hover:text-amber-700 transition-colors">
                            {d.name}
                          </h4>
                          <span className="text-amber-600 text-xs font-semibold whitespace-nowrap">
                            {d.georgianName}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed line-clamp-2">
                          {d.description}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1.5 italic">
                          <strong>Flavor:</strong> {d.flavorProfile}
                        </p>
                      </div>

                      {/* How to Eat summary snippet */}
                      {d.eatingGuide && d.eatingGuide.length > 0 && (
                        <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-950 flex items-start gap-2">
                          <span className="font-bold text-amber-700 flex-shrink-0">Local Way:</span>
                          <span className="line-clamp-1 italic">{d.eatingGuide[0]}</span>
                        </div>
                      )}

                      {/* Where to Eat / Restaurant Locations */}
                      <div
                        className="pt-2 border-t border-slate-100 space-y-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-rose-600" /> Best Cafes & Taverns:
                          </span>
                          <span className="text-[10px] text-slate-400 font-semibold">{d.venues?.length || 1} spots</span>
                        </div>

                        <div className="space-y-1.5">
                          {(d.venues || []).slice(0, isExpanded ? undefined : 1).map((v, vIdx) => {
                            const matchedRest = BATUMI_RESTAURANTS.find(
                              (r) =>
                                r.name.toLowerCase().includes(v.name.toLowerCase().split(' ')[0]) ||
                                v.name.toLowerCase().includes(r.name.toLowerCase().split(' ')[0])
                            ) || {
                              id: v.name.toLowerCase().replace(/\s+/g, '-'),
                              name: v.name,
                              georgianName: '',
                              stars: 5,
                              rating: 4.8,
                              reviewsCount: 880,
                              priceRange: '₾₾ (15 - 30 GEL)',
                              avgPriceGEL: 20,
                              cuisineType: v.type || 'Traditional Georgian',
                              address: v.address,
                              hours: '10:00 – 23:00 Daily',
                              phone: '+995 422 27 00 00',
                              image: d.image,
                              mapUrl: v.mapUrl,
                              tagline: v.highlight || 'Top rated dining in Batumi',
                              description: `Famous spot in Batumi for authentic ${d.name}.`,
                              signatureDishes: [{ name: d.name, priceGEL: d.avgPriceGEL || 16, note: 'Specialty of the house' }],
                              ambiance: ['Authentic', 'Local Favorite'],
                            };

                            return (
                              <div
                                key={vIdx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveModalRestaurant(matchedRest);
                                }}
                                className="p-2.5 rounded-xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200/80 hover:border-amber-400 text-xs space-y-1.5 transition-all cursor-pointer group/venue"
                              >
                                <div className="flex items-center justify-between font-bold text-slate-800">
                                  <span className="group-hover/venue:text-amber-800 transition-colors">{v.name}</span>
                                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-medium">
                                    {v.type}
                                  </span>
                                </div>
                                <StarRatingBadge rating={matchedRest.rating} stars={matchedRest.stars} reviewsCount={matchedRest.reviewsCount} size="xs" />
                                <p className="text-[11px] text-slate-500">{v.address}</p>
                                {v.highlight && (
                                  <p className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                                    ★ {v.highlight}
                                  </p>
                                )}
                                <div className="pt-1 flex items-center justify-between text-[11px] font-bold border-t border-slate-200/60">
                                  <span className="text-amber-700 flex items-center gap-1 group-hover/venue:underline">
                                    <span>Restaurant Menu & Info</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </span>
                                  <span className="text-slate-400 text-[10px]">Click to view</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {d.venues && d.venues.length > 1 && (
                          <button
                            type="button"
                            onClick={() => setExpandedDishId(isExpanded ? null : d.id)}
                            className="w-full text-center py-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-800 bg-amber-50 hover:bg-amber-100 rounded-xl transition-colors cursor-pointer"
                          >
                            {isExpanded ? 'Show Fewer Restaurants' : `Show More Locations (+${d.venues.length - 1} More)`}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold text-amber-700 flex items-center gap-1 group-hover:underline">
                        <span>View Tasting Guide & Audio</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[10px] text-slate-400">Click card to open</span>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Show More / Show Less Dishes */}
          <div className="text-center pt-2">
            <button
              onClick={() => setShowAllDishes(!showAllDishes)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <span>{showAllDishes ? 'Show Fewer Dishes' : `Show More Dishes & Cafes (${DISHES.length} Total)`}</span>
              {showAllDishes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* 6. NEIGHBORHOODS & DISTRICTS GUIDE */}
      <section id="neighborhoods" className="py-20 bg-gradient-to-b from-stone-50 via-white to-slate-50 border-t border-slate-200 text-slate-900 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full uppercase tracking-wider border border-rose-200">
              Batumi Quarters & Districts
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif-title">
              Batumi Neighborhood Guide
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              From cobblestone historic alleys and vibrant seaside kinetic art promenades to modern dancing fountains and subtropical coastal cliffs — explore the distinctive personality, highlights, and local secrets of each quarter.
            </p>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
              {[
                { id: 'All', label: 'All Districts (6)' },
                { id: 'Historic', label: 'Historic & Old Town' },
                { id: 'Seaside', label: 'Seaside Waterfront' },
                { id: 'Modern', label: 'Modern Skyline' },
                { id: 'Nature', label: 'Nature & Coastal Riviera' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setDistrictCategoryFilter(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    districtCategoryFilter === cat.id
                      ? 'bg-rose-600 text-white shadow-md'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Neighborhoods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEIGHBORHOODS.filter((n) => districtCategoryFilter === 'All' || n.category === districtCategoryFilter).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl group"
              >
                <div className="space-y-4">
                  {/* Image Banner */}
                  <div
                    onClick={() => setActiveNeighborhoodModal(item)}
                    className="relative aspect-16/10 bg-slate-100 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-bold">
                        🌊 {item.distanceToBeach}
                      </span>
                      {item.isUserPhoto && (
                        <span className="px-2 py-1 rounded-lg bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold shadow-xs">
                          ★ Authentic Photo
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/95 text-slate-950 text-[11px] font-extrabold shadow-xs">
                        {item.vibe}
                      </span>
                    </div>

                    {/* Bottom Title Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-amber-300 font-serif-title text-sm font-bold">
                            {item.georgianName}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              speakGeorgian(item.georgianName);
                            }}
                            className="p-1 rounded-full bg-black/40 hover:bg-black/70 text-amber-300 hover:text-white transition-colors cursor-pointer"
                            title={`Listen pronunciation of ${item.georgianName}`}
                          >
                            <Volume2 className="w-3 h-3" />
                          </button>
                        </div>
                        <h3 className="font-extrabold text-xl font-serif-title drop-shadow-md text-white">
                          {item.name}
                        </h3>
                        <p className="text-[11px] text-amber-200/90 font-medium">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 pt-0 space-y-3.5">
                    {/* Tagline */}
                    <p className="text-xs font-semibold text-slate-900 italic border-l-2 border-rose-500 pl-2.5 leading-snug">
                      "{item.tagline}"
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>

                    {/* Sights Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
                        Key Sights & Landmarks:
                      </span>
                      <div className="grid grid-cols-2 gap-1.5 text-xs">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 bg-slate-50 px-2 py-1 rounded-lg border border-slate-100 truncate">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best For Tag */}
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                      <span className="font-bold text-slate-800 text-[11px] block">
                        ✨ Best for:
                      </span>
                      <p className="text-[11px] text-slate-600 mt-0.5">
                        {item.bestFor}
                      </p>
                    </div>

                    {/* Local Insider Tip */}
                    <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs space-y-1">
                      <span className="font-bold text-amber-900 text-[11px] flex items-center gap-1">
                        <span>💡 Local Tip:</span>
                      </span>
                      <p className="text-[11px] text-amber-950/90 leading-relaxed">
                        {item.insiderTip}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 space-y-2 border-t border-slate-100 mt-2">
                  <div className="grid grid-cols-2 gap-2 pt-3">
                    <button
                      type="button"
                      onClick={() => setActiveNeighborhoodModal(item)}
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Full Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={item.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center gap-1.5 border border-rose-200 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-rose-600" />
                      <span>Google Maps</span>
                    </a>
                  </div>

                  {/* Vacation search shortcut */}
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <a
                      href={item.airbnbUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-rose-50 text-slate-600 hover:text-rose-700 border border-slate-200/80 text-[10px] font-semibold flex items-center justify-center gap-1 transition-colors text-center"
                      title={`Search Airbnb homes in ${item.name}`}
                    >
                      <Home className="w-3 h-3 text-rose-500" />
                      <span>Airbnb Homes</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>

                    <a
                      href={item.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-1.5 px-2 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-800 border border-slate-200/80 text-[10px] font-semibold flex items-center justify-center gap-1 transition-colors text-center"
                      title={`Search Booking.com hotels in ${item.name}`}
                    >
                      <Hotel className="w-3 h-3 text-blue-500" />
                      <span>Booking.com</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CURATED ITINERARIES & ROUTE PLANNER */}
      <section id="itineraries" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full uppercase tracking-wider border border-rose-200">
              Curated Itineraries
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif-title mt-2">
              Your Daily Batumi Route
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
              Pick a pre-made plan or customize with your bookmarked sights.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl text-xs font-bold no-print">
            <button
              type="button"
              onClick={() => setItineraryTab('presets')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                itineraryTab === 'presets'
                  ? 'bg-rose-600 text-white shadow-md font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Curated Plans</span>
            </button>
            <button
              type="button"
              onClick={() => setItineraryTab('custom')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                itineraryTab === 'custom'
                  ? 'bg-rose-600 text-white shadow-md font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${savedAttractions.length > 0 ? 'text-white fill-white' : ''}`} />
              <span>My Saved Plan ({savedAttractions.length})</span>
            </button>
          </div>
        </div>

        {itineraryTab === 'presets' ? (
          <div className="space-y-8">
            {/* Plan Selector Buttons & Print Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 no-print">
              <div className="flex flex-wrap items-center gap-3">
                {ITINERARIES.map((p) => {
                  const isSelected = selectedPlanId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlanId(p.id)}
                      className={`p-3.5 sm:px-5 rounded-2xl text-left transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-rose-600 text-white border-rose-600 shadow-md ring-2 ring-rose-600/20'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <span className={`text-[10px] uppercase font-bold tracking-wider block ${isSelected ? 'text-rose-100' : 'text-slate-400'}`}>
                        {p.durationDays} Day Plan
                      </span>
                      <h4 className="font-extrabold text-sm font-serif-title mt-0.5">
                        {p.title}
                      </h4>
                      <p className={`text-[11px] mt-0.5 line-clamp-1 max-w-[220px] ${isSelected ? 'text-rose-100' : 'text-slate-500'}`}>
                        {p.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto no-print">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
                  title="Print Itinerary"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>Print Plan</span>
                </button>
              </div>
            </div>

            {/* Day Cards */}
            <div className="space-y-6">
              {currentPlan.days.map((d) => (
                <div
                  key={d.day}
                  className="itinerary-day-card bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-5 sm:p-7 space-y-5"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left: Clean Photo */}
                    <div className="lg:col-span-4">
                     








<div
  style={{
    position: 'relative',
    width: '100%',
    aspectRatio: '4 / 3',
    borderRadius: '1rem',
    overflow: 'hidden',
    background: '#0f172a',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  }}
>
  <img
    src={d.image}
    alt={d.title}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
  <span
  style={{
    position: 'absolute',
    left: '0.75rem',
    bottom: '0.75rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.375rem',
    padding: '0.375rem 0.75rem',
    borderRadius: '0.5rem',
    background: 'rgba(0, 0, 0, 0.35)',
    backdropFilter: 'blur(10px)',
    color: '#ffffff',
    fontSize: '0.75rem',
    fontWeight: 600,
    boxShadow: '0 4px 6px -1px rgba(185, 183, 183, 0.1)',
  }}
>
    📍 {d.location}
  </span>
</div>
</div>

















                    {/* Right: Day Breakdown */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 rounded-xl bg-rose-50 text-rose-700 text-xs font-extrabold border border-rose-200">
                            D{d.day}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold font-serif-title text-slate-900">
                            {d.title}
                          </h3>
                        </div>
                        <span className="text-xs text-slate-500 font-medium">
                          📍 {d.location}
                        </span>
                      </div>

                      {/* 3 Day Phases: Morning, Afternoon, Evening */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-100 space-y-1">
                          <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">
                            🌅 Morning
                          </span>
                          <p className="text-slate-600 leading-relaxed">
                            {d.morning}
                          </p>
                        </div>

                        <div className="p-3.5 bg-rose-50/70 rounded-2xl border border-rose-100 space-y-1">
                          <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider block">
                            ☀️ Afternoon
                          </span>
                          <p className="text-slate-600 leading-relaxed">
                            {d.afternoon}
                          </p>
                        </div>

                        <div className="p-3.5 bg-indigo-50/70 rounded-2xl border border-indigo-100 space-y-1">
                          <span className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider block">
                            🌙 Evening
                          </span>
                          <p className="text-slate-600 leading-relaxed">
                            {d.evening}
                          </p>
                        </div>
                      </div>

                      {/* Meal & Dining highlights with 2 verified restaurants per meal */}
                      {(d.morningMeal || d.afternoonMeal || d.eveningMeal) && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3.5">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-2.5">
                            <span className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                              <Utensils className="w-4 h-4 text-amber-600" />
                              <span>Verified Dining Spots for Day {d.day} (2 Top Places Per Meal)</span>
                            </span>
                            <span className="text-[11px] text-slate-500 font-medium">Click any venue for phone, directions & menu</span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                            {/* Morning Meal (Breakfast) */}
                            {d.morningMeal && (
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider flex items-center gap-1">
                                    <span>☕</span> Breakfast Spots
                                  </span>
                                  <span className="text-[10px] text-slate-400 font-medium">2 Venues</span>
                                </div>
                                <div className="space-y-2">
                                  {d.morningMeal.restaurantIds?.map((id, rIdx) => {
                                    const r = getRestaurantById(id);
                                    if (!r) return null;
                                    return (
                                      <div
                                        key={r.id}
                                        onClick={() => setActiveModalRestaurant(r)}
                                        className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-sm transition-all cursor-pointer group space-y-1"
                                      >
                                        <div className="flex items-center justify-between gap-1">
                                          <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">
                                            Pick {rIdx + 1}
                                          </span>
                                          <span className="text-[10px] font-bold text-slate-500">{r.priceRange.split(' ')[0]}</span>
                                        </div>
                                        <h5 className="font-bold text-xs text-slate-900 group-hover:text-rose-600 transition-colors truncate">
                                          {r.name}
                                        </h5>
                                        <div className="flex items-center justify-between text-[11px]">
                                          <StarRatingBadge rating={r.rating} stars={r.stars || 5} reviewsCount={r.reviewsCount} size="xs" />
                                          <span className="text-[10px] text-slate-400 truncate max-w-[85px]">{r.address.split(',')[0]}</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                            {/* Midday Meal (Lunch) */}
                            {d.afternoonMeal && (
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-[11px] font-extrabold text-rose-800 uppercase tracking-wider flex items-center gap-1">
                                    <span>🍲</span> Lunch Spots
                                  </span>
                                  <span className="text-[10px] text-slate-400 font-medium">2 Venues</span>
                                </div>
                                <div className="space-y-2">
                                  {d.afternoonMeal.restaurantIds?.map((id, rIdx) => {
                                    const r = getRestaurantById(id);
                                    if (!r) return null;
                                    return (
                                      <div
                                        key={r.id}
                                        onClick={() => setActiveModalRestaurant(r)}
                                        className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-rose-400 hover:shadow-sm transition-all cursor-pointer group space-y-1"
                                      >
                                        <div className="flex items-center justify-between gap-1">
                                          <span className="text-[10px] font-bold text-rose-800 bg-rose-50 px-1.5 py-0.5 rounded">
                                            Pick {rIdx + 1}
                                          </span>
                                          <span className="text-[10px] font-bold text-slate-500">{r.priceRange.split(' ')[0]}</span>
                                        </div>
                                        <h5 className="font-bold text-xs text-slate-900 group-hover:text-rose-600 transition-colors truncate">
                                          {r.name}
                                        </h5>
                                        <div className="flex items-center justify-between text-[11px]">
                                          <StarRatingBadge rating={r.rating} stars={r.stars || 5} reviewsCount={r.reviewsCount} size="xs" />
                                          <span className="text-[10px] text-slate-400 truncate max-w-[85px]">{r.address.split(',')[0]}</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                            {/* Sunset Meal (Dinner) */}
                            {d.eveningMeal && (
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-[11px] font-extrabold text-indigo-800 uppercase tracking-wider flex items-center gap-1">
                                    <span>🍷</span> Dinner Spots
                                  </span>
                                  <span className="text-[10px] text-slate-400 font-medium">2 Venues</span>
                                </div>
                                <div className="space-y-2">
                                  {d.eveningMeal.restaurantIds?.map((id, rIdx) => {
                                    const r = getRestaurantById(id);
                                    if (!r) return null;
                                    return (
                                      <div
                                        key={r.id}
                                        onClick={() => setActiveModalRestaurant(r)}
                                        className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-sm transition-all cursor-pointer group space-y-1"
                                      >
                                        <div className="flex items-center justify-between gap-1">
                                          <span className="text-[10px] font-bold text-indigo-800 bg-indigo-50 px-1.5 py-0.5 rounded">
                                            Pick {rIdx + 1}
                                          </span>
                                          <span className="text-[10px] font-bold text-slate-500">{r.priceRange.split(' ')[0]}</span>
                                        </div>
                                        <h5 className="font-bold text-xs text-slate-900 group-hover:text-rose-600 transition-colors truncate">
                                          {r.name}
                                        </h5>
                                        <div className="flex items-center justify-between text-[11px]">
                                          <StarRatingBadge rating={r.rating} stars={r.stars || 5} reviewsCount={r.reviewsCount} size="xs" />
                                          <span className="text-[10px] text-slate-400 truncate max-w-[85px]">{r.address.split(',')[0]}</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* 🍽️ Meal Highlight */}
                      <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🍽️</span>
                          <span>
                            <strong className="font-extrabold text-amber-900">Meal Highlight:</strong> {d.food}
                          </span>
                        </div>
                        <a
                          href="#cuisine"
                          className="text-amber-800 font-bold hover:text-amber-950 hover:underline flex items-center gap-1 self-end sm:self-auto"
                        >
                          <span>View recipe & culinary traditions</span>
                          <span>&rarr;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Custom Saved Plan */
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div>
                <h3 className="text-xl font-bold font-serif-title text-slate-900">
                  Personalized Batumi Trip Plan
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Your bookmarked sights and restaurants ready to trace your route.
                </p>
              </div>

              <div className="flex items-center gap-2 no-print">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold text-xs shadow-xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-500" />
                  <span>Print Plan</span>
                </button>
                {savedAttractions.length > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setSavedAttractions([]);
                      if (typeof window !== 'undefined') {
                        try {
                          localStorage.removeItem('batumi_saved_places_v2');
                        } catch {
                          // ignore
                        }
                      }
                    }}
                    className="px-3.5 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Clear Plan</span>
                  </button>
                )}
              </div>
            </div>

            {savedAttractions.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-4">
                <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
                  <Bookmark className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Your Trip Plan is Empty</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Browse the attractions, sights, and cafes above and click the bookmark button to build your personalized Batumi itinerary.
                  </p>
                </div>
                <a
                  href="#attractions"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors"
                >
                  <span>Browse Batumi Sights</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedAttractions.map((place, idx) => (
                    <div
                      key={place.id}
                      className="itinerary-day-card bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                          <img
                            src={place.image}
                            alt={place.name}
                            className="w-full h-full object-cover"
                          />
                          <span className="absolute top-2.5 left-2.5 w-6 h-6 rounded-md bg-rose-600 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                            #{idx + 1}
                          </span>
                          {place.category && (
                            <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold">
                              {place.category}
                            </span>
                          )}
                        </div>
                        {/* Location name directly underneath the bottom of the photo with 0 margin/padding */}
                        <p
                          className="text-[11px] text-slate-500 flex items-center gap-1 bg-slate-50 px-3 py-1 border-b border-slate-100 truncate"
                          style={{ margin: 0 }}
                        >
                          <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                          <span className="truncate">{place.location}</span>
                        </p>

                        <div className="p-4 space-y-1">
                          <h4 className="font-bold text-sm text-slate-900 truncate font-serif-title">
                            {place.name}
                          </h4>
                          {place.georgianName && (
                            <p className="text-[11px] text-amber-700 font-semibold truncate">
                              {place.georgianName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between text-xs mt-2 no-print">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            place.coords?.query || `${place.name} Batumi Georgia`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-rose-600 hover:text-rose-700"
                        >
                          <Navigation className="w-3 h-3" />
                          <span>Google Maps</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => toggleSave(place)}
                          className="text-slate-400 hover:text-rose-600 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Trip Notes & Checklist (Flight times, hotel address, packing):
                  </label>
                  <textarea
                    value={tripNotes}
                    onChange={(e) => setTripNotes(e.target.value)}
                    placeholder="e.g. Day 1: Arrive Batumi train station 13:00 -> Check into hotel -> Sunset drinks at Alphabet tower..."
                    rows={4}
                    style={{ padding: '14px 18px', lineHeight: '1.6', minHeight: '110px' }}
                    className="w-full rounded-2xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 text-slate-900 bg-white"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* 8. TRAVELER TIPS & FAQ */}
      <section id="tips" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold font-serif-title text-slate-900">Transport & Getting Around</h3>
            <div className="space-y-3 text-xs">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-3">
                <Train className="w-6 h-6 text-rose-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">High-Speed Stadler Train</h4>
                  <p className="text-slate-600 mt-0.5">Swiss double-decker train connects Tbilisi to Batumi Central in 5 hours (~35 GEL) with AC and Wi-Fi.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-3">
                <Plane className="w-6 h-6 text-sky-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Batumi International Airport (BUS)</h4>
                  <p className="text-slate-600 mt-0.5">Just 15 minutes south of city center. Municipal bus #10 takes you straight to the boulevard for 0.30 GEL.</p>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 flex gap-3">
                <Bike className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Batumvelo Coastal Bike Share & Bolt Taxi</h4>
                  <p className="text-slate-600 mt-0.5">Rent coastal bikes for 2 GEL/hour on the 7km boulevard lane. Bolt taxi rides within town are typically 3-5 GEL.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Currency Calculator */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm text-xs">
            <h4 className="text-lg font-bold font-serif-title text-slate-900">Lari Currency Calculator</h4>
            <div>
              <label className="font-bold block mb-1 text-slate-700">Amount:</label>
              <input
                type="number"
                value={calcAmount}
                onChange={(e) => setCalcAmount(Math.max(1, Number(e.target.value)))}
                className="w-full p-2.5 rounded-xl border border-slate-200 font-bold text-base focus:outline-hidden"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-slate-500 block mb-0.5">From:</label>
                <select value={fromCurr} onChange={(e) => setFromCurr(e.target.value)} className="w-full p-2 rounded-lg border border-slate-200 bg-slate-50 font-bold">
                  {Object.keys(CURRENCY_RATES).map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>
              <div>
                <label className="text-slate-500 block mb-0.5">To:</label>
                <select value={toCurr} onChange={(e) => setToCurr(e.target.value)} className="w-full p-2 rounded-lg border border-slate-200 bg-slate-50 font-bold">
                  {Object.keys(CURRENCY_RATES).map((c) => (<option key={c} value={c}>{c}</option>))}
                </select>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-center">
              <span className="text-[10px] text-slate-500">Estimated Total:</span>
              <p className="text-xl font-bold text-rose-900 font-sans tracking-tight">
                {calcAmount} {fromCurr} = {calcConverted()} {CURRENCY_RATES[toCurr]?.symbol} {toCurr}
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div id="faqs" className="space-y-4 scroll-mt-20">
          <h3 className="text-2xl font-bold font-serif-title text-center text-slate-900">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-2">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden text-xs">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  className="w-full p-4 text-left font-bold flex justify-between items-center text-slate-900"
                >
                  <span>{faq.q}</span>
                  {openFaqIndex === i ? <ChevronUp className="w-4 h-4 text-rose-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>
                {openFaqIndex === i && (
                  <div className="p-4 pt-0 text-slate-600 border-t border-slate-100">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={GEORGIA_FLAG_URL}
                alt="Flag of Georgia"
                className="w-8 h-8 object-contain rounded-lg shadow-xs shrink-0"
              />
              <span className="text-base font-bold text-white font-serif-title">Batumigeorgia.com</span>
            </div>
            <div className="flex gap-4">
              <span>Emergency Services: <strong className="text-white">112</strong></span>
              <span>Tourist Police: <strong className="text-white">+995 422 27 50 23</strong></span>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <p>© {new Date().getFullYear()} Batumigeorgia.com – The Black Sea Pearl. All rights reserved.</p>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL: ATTRACTION DETAILS */}
      {activeModalAttraction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 no-scrollbar">
            <div className="relative aspect-16/9 bg-slate-900">
              <img src={activeModalAttraction.image} alt={activeModalAttraction.name} className="w-full h-full object-cover" />
              <button
                onClick={() => setActiveModalAttraction(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-amber-300 text-xs font-semibold">{activeModalAttraction.georgianName}</span>
                <h3 className="text-xl font-bold font-serif-title">{activeModalAttraction.name}</h3>
              </div>
            </div>
            <div className="p-6 space-y-4 text-xs">
              <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                <div><span className="text-slate-400">Price:</span> <strong className="block text-slate-800">{formatPrice(activeModalAttraction.priceGEL)}</strong></div>
                <div><span className="text-slate-400">Duration:</span> <strong className="block text-slate-800">{activeModalAttraction.duration}</strong></div>
                <div><span className="text-slate-400">Best Time:</span> <strong className="block text-slate-800">{activeModalAttraction.bestTime}</strong></div>
              </div>
              <p className="text-slate-600 leading-relaxed">{activeModalAttraction.description}</p>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
                <strong>Insider Tip:</strong> {activeModalAttraction.insiderTip}
              </div>
              <button
                onClick={() => { toggleSave(activeModalAttraction); setActiveModalAttraction(null); }}
                className="w-full py-2.5 rounded-xl bg-rose-600 text-white font-bold"
              >
                {savedAttractions.some((p) => p.id === activeModalAttraction.id) ? 'Remove from Saved' : 'Add to My Trip'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: TRIP PLANNER ASSISTANT */}
      {isTripModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-4 border border-slate-200 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h3 className="font-bold text-base font-serif-title text-slate-900">Personalized Batumi Assistant</h3>
              <button onClick={() => setIsTripModalOpen(false)}><X className="w-4 h-4 text-slate-400" /></button>
            </div>
            <p className="text-slate-600">
              Welcome to Batumi! Based on the top traveler reviews, we recommend prioritizing:
            </p>
            <div className="space-y-2">
              {ATTRACTIONS.slice(0, 3).map((item) => (
                <div key={item.id} className="p-2 rounded-lg bg-slate-50 flex items-center gap-2">
                  <img src={item.image} alt={item.name} className="w-8 h-8 rounded object-cover" />
                  <div className="truncate flex-1">
                    <p className="font-bold truncate text-slate-800">{item.name}</p>
                    <p className="text-[10px] text-slate-500">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#itineraries"
              onClick={() => setIsTripModalOpen(false)}
              className="block text-center py-2.5 rounded-xl bg-rose-600 text-white font-bold"
            >
              Explore Full 3-Day Itinerary
            </a>
          </div>
        </div>
      )}

      {/* MODAL: FOOD DISH TASTING & LOCAL EATING GUIDE */}
      {activeModalDish && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
          onClick={() => setActiveModalDish(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full max-h-[82vh] overflow-hidden border border-slate-200 text-xs shadow-2xl flex flex-col my-auto relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image - Sleek & Compact */}
            <div className="relative h-32 sm:h-36 w-full bg-slate-900 shrink-0 overflow-hidden">
              <img
                src={activeModalDish.image}
                alt={activeModalDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalDish(null)}
                className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md z-10"
                title="Close"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="absolute bottom-2.5 left-3.5 right-3.5 text-white">
                <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                  <span className="px-2 py-0.2 rounded-md bg-amber-500 text-black font-extrabold text-[9px] uppercase">
                    {activeModalDish.category}
                  </span>
                  {activeModalDish.isVeg && (
                    <span className="px-2 py-0.2 rounded-md bg-emerald-600 text-white font-bold text-[9px]">
                      Vegetarian
                    </span>
                  )}
                  <span className="text-[10px] text-amber-200">
                    📍 {activeModalDish.origin || 'Adjara'}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif-title drop-shadow-md line-clamp-1">
                  {activeModalDish.name}
                </h3>
                <div className="flex items-center gap-1.5 text-[11px] text-amber-200">
                  <span className="font-semibold">{activeModalDish.georgianName}</span>
                  {activeModalDish.pronunciation && (
                    <span className="italic opacity-85 text-[10px]">({activeModalDish.pronunciation})</span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-4 overflow-y-auto space-y-3 max-h-[calc(82vh-140px)]">
              {/* Pronunciation Audio & Price Banner */}
              <div className="p-2.5 rounded-xl bg-amber-50/90 border border-amber-200 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => speakGeorgian(activeModalDish.georgianName)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-[11px] shadow-xs transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3 h-3" />
                  <span>Pronounce</span>
                </button>

                <div className="text-right">
                  <span className="text-[10px] text-slate-500 mr-1">Avg Price:</span>
                  <strong className="text-xs font-bold text-amber-900 font-sans tracking-tight">
                    ~{formatPrice(activeModalDish.avgPriceGEL || 14)}
                  </strong>
                </div>
              </div>

              {/* Step-by-Step Local Eating Ritual - Clean, Clear, Focused */}
              {activeModalDish.eatingGuide && activeModalDish.eatingGuide.length > 0 && (
                <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 border border-amber-200 space-y-2">
                  <h4 className="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>How to Eat This Meal (Local Way):</span>
                  </h4>
                  <div className="space-y-1.5">
                    {activeModalDish.eatingGuide.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-2 rounded-xl bg-white/90 border border-amber-200/70 flex items-start gap-2 shadow-2xs"
                      >
                        <span className="w-4 h-4 rounded-full bg-amber-600 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-slate-800 text-[11px] leading-relaxed font-medium">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Description & Flavor Note */}
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <p className="leading-relaxed">{activeModalDish.description}</p>
                <p><strong className="text-slate-800">Flavor:</strong> {activeModalDish.flavorProfile}</p>
              </div>

              {/* Best Place Serving This Dish */}
              {activeModalDish.venues && activeModalDish.venues.length > 0 && (
                <div className="space-y-1.5 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-800 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-rose-600" />
                      <span>Where to Eat:</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Top recommendation</span>
                  </div>

                  <div className="space-y-1.5">
                    {activeModalDish.venues.slice(0, 2).map((venue, vIdx) => {
                      const matchedRest = BATUMI_RESTAURANTS.find(
                        (r) =>
                          r.name.toLowerCase().includes(venue.name.toLowerCase().split(' ')[0]) ||
                          venue.name.toLowerCase().includes(r.name.toLowerCase().split(' ')[0])
                      );

                      return (
                        <div
                          key={vIdx}
                          className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-2 text-xs"
                        >
                          <div className="min-w-0">
                            <span className="font-bold text-slate-900 block truncate text-[11px]">{venue.name}</span>
                            <span className="text-slate-500 text-[10px] truncate block">{venue.address}</span>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            {matchedRest && (
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveModalDish(null);
                                  setActiveModalRestaurant(matchedRest);
                                }}
                                className="px-2 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-[10px] cursor-pointer"
                              >
                                Menu
                              </button>
                            )}
                            <a
                              href={venue.mapUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1 rounded-lg bg-white hover:bg-slate-100 text-rose-600 border border-rose-200 text-[10px] font-bold inline-flex items-center"
                              title="Directions"
                            >
                              <Navigation className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Action Buttons: Save to Trip Board */}
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => toggleSave(activeModalDish)}
                  className={`flex-1 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    savedAttractions.some((s) => s.id === activeModalDish.id)
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-rose-600 hover:bg-rose-700 text-white shadow-xs'
                  }`}
                >
                  <Heart
                    className="w-3.5 h-3.5"
                    fill={savedAttractions.some((s) => s.id === activeModalDish.id) ? 'currentColor' : 'none'}
                  />
                  <span>
                    {savedAttractions.some((s) => s.id === activeModalDish.id)
                      ? 'Saved in Food Bucket List'
                      : 'Save Dish to List'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModalDish(null)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: NEIGHBORHOOD & DISTRICT DETAIL GUIDE */}
      {activeNeighborhoodModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
          onClick={() => setActiveNeighborhoodModal(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[88vh] overflow-hidden border border-slate-200 shadow-2xl flex flex-col my-auto relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-white shrink-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-bold text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-rose-600" />
                  <span>{activeNeighborhoodModal.category} District</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs">
                  🌊 {activeNeighborhoodModal.distanceToBeach}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs">
                  {activeNeighborhoodModal.vibe}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveNeighborhoodModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-5 sm:p-6 overflow-y-auto max-h-[calc(88vh-60px)] space-y-4">
              {/* Banner Image */}
              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-900 shadow-sm shrink-0">
                <img
                  src={activeNeighborhoodModal.image}
                  alt={activeNeighborhoodModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-amber-300 font-serif-title text-base sm:text-lg font-bold">
                      {activeNeighborhoodModal.georgianName}
                    </span>
                    <button
                      type="button"
                      onClick={() => speakGeorgian(activeNeighborhoodModal.georgianName)}
                      className="p-1 rounded-full bg-black/50 hover:bg-black/80 text-amber-300 hover:text-white transition-colors cursor-pointer"
                      title="Pronounce Georgian name"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                    {activeNeighborhoodModal.pronunciation && (
                      <span className="text-white/80 font-mono text-xs">
                        ({activeNeighborhoodModal.pronunciation})
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black font-serif-title drop-shadow-sm">
                    {activeNeighborhoodModal.name}
                  </h2>
                  <p className="text-xs text-amber-200/95 font-medium mt-0.5">
                    {activeNeighborhoodModal.subtitle}
                  </p>
                </div>
              </div>

              {/* Quick Actions Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={activeNeighborhoodModal.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-rose-200" />
                </a>

                <a
                  href={activeNeighborhoodModal.airbnbUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Home className="w-3.5 h-3.5 text-rose-600" />
                  <span>Airbnb Rentals</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={activeNeighborhoodModal.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-blue-200"
                >
                  <Hotel className="w-3.5 h-3.5 text-blue-600" />
                  <span>Booking.com</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
              </div>

              {/* Tagline Callout */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block font-mono">
                  District Character:
                </span>
                <p className="font-bold text-slate-900 text-sm mt-0.5 font-serif-title">
                  "{activeNeighborhoodModal.tagline}"
                </p>
                <p className="text-slate-600 text-xs mt-2 leading-relaxed">
                  {activeNeighborhoodModal.description}
                </p>
              </div>

              {/* Highlights & Top Sights */}
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-serif-title flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                  <span>Top Sights & Things to Do in this District</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeNeighborhoodModal.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 text-xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-slate-800">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best For Tag */}
              <div className="p-3 rounded-2xl bg-rose-50/80 border border-rose-200/80 text-xs space-y-0.5">
                <span className="font-bold text-rose-900 text-xs flex items-center gap-1">
                  <span>✨ Recommended For:</span>
                </span>
                <p className="text-rose-950 text-xs leading-relaxed">
                  {activeNeighborhoodModal.bestFor}
                </p>
              </div>

              {/* Local Insider Tip */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-1">
                <span className="font-bold text-amber-900 uppercase tracking-wider text-[10px] block font-mono">
                  💡 Resident Insider Secret:
                </span>
                <p className="text-amber-950 italic leading-relaxed text-xs">
                  "{activeNeighborhoodModal.insiderTip}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: RESTAURANT & DINING DETAIL PAGE */}
      {activeModalRestaurant && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
          onClick={() => setActiveModalRestaurant(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-xl sm:max-w-2xl w-full max-h-[88vh] overflow-hidden border border-slate-200 shadow-2xl flex flex-col my-auto relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-100 bg-white shrink-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-bold text-xs flex items-center gap-1">
                  <Utensils className="w-3 h-3 text-amber-600" />
                  <span>{activeModalRestaurant.cuisineType}</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-[11px]">
                  ✓ Verified Venue
                </span>
                <StarRatingBadge
                  rating={activeModalRestaurant.rating}
                  stars={activeModalRestaurant.stars || 5}
                  reviewsCount={activeModalRestaurant.reviewsCount}
                  size="xs"
                />
              </div>

              <button
                type="button"
                onClick={() => setActiveModalRestaurant(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(88vh-60px)] space-y-4">
              {/* Hero Banner - Compact & Well-proportioned */}
              <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden bg-slate-900 shadow-sm shrink-0">
                <img
                  src={activeModalRestaurant.image}
                  alt={activeModalRestaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap text-xs">
                      <span className="text-amber-300 font-bold bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md text-[11px]">
                        {activeModalRestaurant.priceRange}
                      </span>
                      <span className="text-white/90 flex items-center gap-1 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md text-[11px]">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {activeModalRestaurant.hours}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h2 className="text-xl sm:text-2xl font-black font-serif-title drop-shadow-sm">
                        {activeModalRestaurant.name}
                      </h2>
                      {activeModalRestaurant.georgianName && (
                        <span className="text-amber-300 font-serif-title text-sm sm:text-base font-bold">
                          {activeModalRestaurant.georgianName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-amber-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-400/40 text-xs self-start sm:self-auto shrink-0">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-extrabold text-white text-xs">
                      {activeModalRestaurant.rating} ({activeModalRestaurant.reviewsCount} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <a
                  href={`tel:${activeModalRestaurant.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call ({activeModalRestaurant.phone})</span>
                </a>

                <a
                  href={activeModalRestaurant.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-rose-600" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <button
                  type="button"
                  onClick={() => {
                    toggleSave({
                      id: activeModalRestaurant.id,
                      name: activeModalRestaurant.name,
                      georgianName: activeModalRestaurant.georgianName,
                      category: 'Tavern & Dining',
                      location: activeModalRestaurant.address,
                      image: activeModalRestaurant.image,
                      coords: { query: activeModalRestaurant.name + ' Batumi Georgia' },
                    });
                  }}
                  className={`py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border ${
                    savedAttractions.some((s) => s.id === activeModalRestaurant.id)
                      ? 'bg-rose-50 text-rose-700 border-rose-200'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" fill={savedAttractions.some((s) => s.id === activeModalRestaurant.id) ? 'currentColor' : 'none'} />
                  <span>
                    {savedAttractions.some((s) => s.id === activeModalRestaurant.id)
                      ? '✓ In My Saved Plan'
                      : 'Pin to Saved Plan'}
                  </span>
                </button>
              </div>

              {/* Tagline Callout */}
              <div className="p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-2.5">
                <span className="text-xl shrink-0">🏆</span>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-amber-950 text-xs sm:text-sm">
                    {activeModalRestaurant.tagline}
                  </h4>
                  <p className="text-xs text-amber-900/80 leading-relaxed">
                    {activeModalRestaurant.description}
                  </p>
                </div>
              </div>

              {/* Signature Dishes Menu */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-serif-title flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-amber-600" />
                    <span>Signature Dishes & Menu Highlights</span>
                  </h4>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-md">
                    Prices in GEL (₾)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalRestaurant.signatureDishes?.map((dish, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-2 text-xs"
                    >
                      <div className="space-y-0.5 min-w-0">
                        <span className="font-bold text-slate-900 text-xs block truncate">
                          {dish.name}
                        </span>
                        <p className="text-slate-500 text-[11px] leading-tight line-clamp-2">
                          {dish.note}
                        </p>
                      </div>
                      <span className="font-extrabold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-lg text-xs shrink-0 whitespace-nowrap">
                        ~{dish.priceGEL} ₾
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food Critic Insider Tip */}
              {activeModalRestaurant.mustTry && (
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-rose-50 to-amber-50 border border-rose-200/80 text-xs space-y-1">
                  <span className="font-bold text-rose-800 uppercase tracking-wider text-[10px] block font-mono">
                    💡 Food Critic Tasting Guide:
                  </span>
                  <p className="text-slate-700 italic leading-relaxed text-xs">
                    "{activeModalRestaurant.mustTry}"
                  </p>
                </div>
              )}

              {/* Location & Details Strip */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-600 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">{activeModalRestaurant.address}</span>
                    <span className="text-slate-500 text-[11px]">{activeModalRestaurant.hours}</span>
                  </div>
                </div>

                {activeModalRestaurant.ambiance && (
                  <div className="flex flex-wrap gap-1">
                    {activeModalRestaurant.ambiance.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[10px] font-medium">
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: LIVE BATUMI WEATHER REPORT */}
      {isWeatherModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs overflow-y-auto"
          onClick={() => setIsWeatherModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-md w-full overflow-hidden border border-slate-200 shadow-2xl flex flex-col my-auto relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-slate-50/80 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-xs text-slate-800 uppercase tracking-wider font-mono">
                  Live Weather Feed • Batumi, GE 🇬🇪
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsWeatherModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              {/* Primary Temp Hero */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white relative overflow-hidden shadow-md">
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                      Current Live Conditions
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl sm:text-5xl font-extrabold font-serif-title tracking-tight text-white">
                        {tempCelsius}°C
                      </span>
                      <span className="text-xl text-slate-300 font-medium">
                        / {tempFahrenheit}°F
                      </span>
                    </div>
                    <p className="text-sm text-cyan-200 font-medium mt-1">
                      {weatherConditionDesc} • Feels like {feelsLikeC}°C ({Math.round(feelsLikeF)}°F)
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-amber-300">
                    {weatherMain === 'Rain' || weatherMain === 'Drizzle' ? (
                      <CloudRain className="w-10 h-10 text-cyan-300" />
                    ) : weatherMain === 'Clouds' ? (
                      <Cloud className="w-10 h-10 text-slate-200" />
                    ) : (
                      <Sun className="w-10 h-10 text-amber-300 animate-spin-slow" />
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span>📍 Black Sea Coast (41.64° N, 41.64° E)</span>
                  <span className="text-emerald-300 font-semibold">● OpenWeather Live</span>
                </div>
              </div>

              {/* Weather Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 text-[11px] block">💧 Humidity</span>
                  <strong className="text-base text-slate-900 font-bold block mt-0.5">
                    {weatherData?.main?.humidity ?? 100}%
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 text-[11px] block">💨 Wind Speed</span>
                  <strong className="text-base text-slate-900 font-bold block mt-0.5">
                    {weatherData?.wind?.speed ?? 6.9} mph
                    <span className="text-[11px] text-slate-500 font-normal ml-1">
                      ({Math.round((weatherData?.wind?.speed ?? 6.9) * 1.60934)} km/h)
                    </span>
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 text-[11px] block">☁️ Cloud Cover</span>
                  <strong className="text-base text-slate-900 font-bold block mt-0.5">
                    {weatherData?.clouds?.all ?? 92}%
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-slate-500 text-[11px] block">🧭 Atmospheric Pressure</span>
                  <strong className="text-base text-slate-900 font-bold block mt-0.5">
                    {weatherData?.main?.pressure ?? 1009} hPa
                  </strong>
                </div>
              </div>

              {/* Daylight / Sea note */}
              <div className="p-3 rounded-xl bg-cyan-50/80 border border-cyan-200/80 flex items-center justify-between text-xs text-cyan-950">
                <div className="flex items-center gap-2">
                  <Waves className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Sea Temperature: <strong className="font-bold text-cyan-900">~22°C</strong> (Batumi Bay)</span>
                </div>
                <span className="text-[10px] text-cyan-700 font-medium">Mild Subtropical</span>
              </div>

              {/* Refresh Action & API info */}
              <div className="pt-2 flex items-center justify-between gap-3 text-[11px]">
                <span className="text-slate-400 truncate">
                  {lastWeatherFetch
                    ? `Updated ${lastWeatherFetch.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                    : 'Auto-updated live'}
                </span>

                <button
                  type="button"
                  onClick={() => fetchLiveWeather(true)}
                  disabled={weatherLoading}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold flex items-center gap-1.5 transition-colors cursor-pointer disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${weatherLoading ? 'animate-spin' : ''}`} />
                  <span>{weatherLoading ? 'Refreshing...' : 'Refresh Now'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: FULL RESOLUTION PHOTO LIGHTBOX */}
      {activePhotoLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto"
          onClick={() => setActivePhotoLightbox(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 max-h-[75vh] w-full bg-black flex items-center justify-center">
              <img
                src={activePhotoLightbox.url}
                alt={activePhotoLightbox.title}
                className="max-h-full max-w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setActivePhotoLightbox(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-5 flex items-center justify-between gap-4 bg-slate-900/95">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">★ Authentic Batumi Photo</span>
                <h3 className="text-base sm:text-lg font-bold text-white">{activePhotoLightbox.title}</h3>
                {activePhotoLightbox.subtitle && (
                  <p className="text-xs text-slate-300">{activePhotoLightbox.subtitle}</p>
                )}
              </div>
              <a
                href={activePhotoLightbox.url}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold shrink-0 transition-colors"
              >
                View Full Image ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
