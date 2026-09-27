import React, { useState } from 'react';
import './App.css';


// Zero-dependency SVG Icons compatible with Create React App and React 19
const Sun = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
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
    image: 'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=375%2Cheight=375%2Cdpr=2/tour_img/2b2a3bcc33135bf1f574c81ec94868d7e3502307da72e938294fe183e4ba77cf.jpg',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrO9uLM6eWaEvjBSC-P1PWZRVVOJA-QSVATexQmEpHkdqvgF7LN2ft-98&s=10',
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
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWINtjwa_DkWZ4szUvQn88owVhpppyOdqq5DYNSiHAkQ&s=10',
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
    image: 'https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=400%2Cheight=265%2Cdpr=2/tour_img/ff290e06f9ef49e8607f2ba1e68f2e9fe5ab3b7524e55de4800324cd50926c74.jpg',
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
    name: 'Old Batumi (Historic Quarter)',
    tagline: 'Cobblestones, belle-époque balconies & courtyard wine bars',
    distanceToBeach: '300m · 4 min walk',
    vibe: 'Romantic & Bohemian',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80',
    highlights: ['Piazza Square', 'Europe Square', 'Antique wooden balconies', 'Wine cellars'],
    bestFor: 'Couples, history lovers & foodies',
  },
  {
    id: 'boulevard',
    name: 'Miracle Park & Boulevard',
    tagline: 'Futuristic seaside towers, sea breezes & kinetic sculptures',
    distanceToBeach: 'Direct Waterfront (0m)',
    vibe: 'Modern & Vibrant',
    image: 'https://images.unsplash.com/photo-1579273166152-d725a4e2b755?auto=format&fit=crop&w=800&q=80',
    highlights: ['Ali & Nino', 'Alphabet Tower', 'Ferris wheel', 'Batumvelo bike track'],
    bestFor: 'Families, sunset strolls & cyclists',
  },
  {
    id: 'green-cape',
    name: 'Green Cape (Mtsvane Kontskhi)',
    tagline: 'Subtropical cliff greenery & tranquil pebble beach coves',
    distanceToBeach: 'Private Sea Cove (50m)',
    vibe: 'Lush & Peaceful',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80',
    highlights: ['Botanical Garden', 'Crystal pebble cove', 'Cliffside seafood', 'Bamboo trails'],
    bestFor: 'Nature lovers & calm swimming',
  },
  {
    id: 'gonio-sarpi',
    name: 'Gonio & Sarpi Riviera',
    tagline: 'Ancient Roman citadel & the clearest Black Sea swimming',
    distanceToBeach: 'Beachfront Shoreline',
    vibe: 'Wild Coastal Riviera',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Roman Fortress', 'Sarpi Waterfall border', 'Deep blue water', 'Scuba diving'],
    bestFor: 'Beach vacationers & road trippers',
  },
];

const ACCOMMODATIONS = [
  {
    id: 'radisson-blu-batumi',
    name: 'Radisson Blu Hotel Batumi',
    type: 'Luxury Hotel',
    category: 'Hotel',
    district: 'boulevard',
    districtName: 'Miracle Park & Boulevard',
    priceNightGEL: 320,
    rating: 4.9,
    reviewsCount: 1420,
    guestsMax: 3,
    bedrooms: 1,
    distanceToBeach: 'Direct Waterfront (0m)',
    superhost: true,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    badge: '5-Star Beachfront',
    address: '1 Ninoshvili St, Batumi Boulevard',
    mapQuery: 'Radisson Blu Hotel Batumi Ninoshvili',
    features: ['Panoramic Black Sea Balconies', 'Indoor & Outdoor Pools', 'Clouds Bar on 19th Floor', 'Anne Semonin Spa'],
    amenitiesList: ['Outdoor Pool', 'Indoor Heated Pool', 'Full Spa & Sauna', 'Sea-view Balcony', 'High-Speed Wi-Fi', '24/7 Room Service', 'Fitness Center', 'Valet Parking'],
    ratingBreakdown: { cleanliness: 4.9, location: 5.0, communication: 4.9, value: 4.7 },
    contact: {
      phone: '+995 422 25 55 55',
      whatsapp: '+995 599 25 55 55',
      email: 'info.batumi@radissonblu.com',
      website: 'https://www.radissonhotels.com/en-us/hotels/radisson-blu-batumi',
      bookingUrl: 'https://www.booking.com/searchresults.html?ss=Radisson+Blu+Batumi',
      hostName: 'Radisson Concierge Desk',
    },
    description: 'Iconic glass-wave hotel designed by Michele De Lucchi, located right between the seaside boulevard and Miracle Park.',
  },
  {
    id: 'orbi-city-panoramic',
    name: 'Orbi City High-Floor Panoramic Suites',
    type: 'Airbnb Seafront Apartment',
    category: 'Airbnb / Apartment',
    district: 'boulevard',
    districtName: 'New Boulevard Seaside',
    priceNightGEL: 110,
    rating: 4.88,
    reviewsCount: 890,
    guestsMax: 4,
    bedrooms: 1,
    distanceToBeach: '50m to Coast',
    superhost: true,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80',
    badge: 'Top Airbnb Host',
    address: '7b Sherif Khimshiashvili St (Tower C, 34th Floor)',
    mapQuery: 'Orbi City Batumi Sherif Khimshiashvili',
    features: ['Direct 180° Black Sea Sunset Views', 'Kitchenette & High-Speed Wi-Fi', '200m from Dancing Fountains', 'Keyless Smart Lock'],
    amenitiesList: ['Private Balcony', 'Full Kitchenette', 'Washing Machine', 'Smart Lock Self Check-in', 'High-Speed Wi-Fi', 'Elevator', 'Air Conditioning', 'Free Parking'],
    ratingBreakdown: { cleanliness: 4.8, location: 4.9, communication: 5.0, value: 4.9 },
    contact: {
      phone: '+995 598 44 12 30',
      whatsapp: '+995 598 44 12 30',
      email: 'orbicity.batumi.stay@gmail.com',
      website: 'https://www.airbnb.com/s/Batumi--Georgia',
      bookingUrl: 'https://www.airbnb.com/s/Batumi--Georgia/homes?query=Orbi%20City',
      hostName: 'Giorgi & Natia (Superhost)',
    },
    description: 'Modern studio suite on the 34th floor overlooking the open Black Sea horizon and Batumi’s singing fountains.',
  },
  {
    id: 'rooms-hotel-batumi',
    name: 'Rooms Hotel Batumi (Old Port)',
    type: 'Boutique Design Hotel',
    category: 'Boutique',
    district: 'old-batumi',
    districtName: 'Old Batumi Historic Quarter',
    priceNightGEL: 280,
    rating: 4.92,
    reviewsCount: 760,
    guestsMax: 2,
    bedrooms: 1,
    distanceToBeach: '100m to Harbor Shore',
    superhost: true,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    badge: 'Design Hotels Member',
    address: '10 Gogebashvili St, Old Port',
    mapQuery: 'Rooms Hotel Batumi Gogebashvili',
    features: ['Japanese-Georgian Fusion Rooftop', 'Outdoor Heated Courtyard Pool', 'Vintage Vinyl Lounge', 'Craft Cocktail Bar'],
    amenitiesList: ['Rooftop Restaurant', 'Courtyard Pool', 'Cocktail Bar', 'Designer Bathrobes', 'Boutique Breakfast', 'Concierge Service', 'Bicycle Rental', 'Record Player in Suite'],
    ratingBreakdown: { cleanliness: 4.9, location: 4.9, communication: 5.0, value: 4.8 },
    contact: {
      phone: '+995 422 24 00 00',
      whatsapp: '+995 577 24 00 00',
      email: 'batumi@roomshotels.com',
      website: 'https://roomshotels.com/batumi/',
      bookingUrl: 'https://www.booking.com/searchresults.html?ss=Rooms+Hotel+Batumi',
      hostName: 'Rooms Front Office & Guest Relations',
    },
    description: 'Chic seaside industrial aesthetic in Batumi’s maritime harbor quarter with rooftop sunset dining and designer rooms.',
  },
  {
    id: 'old-town-heritage-loft',
    name: 'Piazza Vintage Heritage Loft with Wooden Balcony',
    type: 'Airbnb Historic Apartment',
    category: 'Airbnb / Apartment',
    district: 'old-batumi',
    districtName: 'Old Batumi Historic Quarter',
    priceNightGEL: 135,
    rating: 4.95,
    reviewsCount: 430,
    guestsMax: 4,
    bedrooms: 2,
    distanceToBeach: '350m · 5 min walk',
    superhost: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Superhost Rare Find',
    address: '14 Mazniashvili St, 2nd Floor, Old Batumi',
    mapQuery: 'Mazniashvili Street Old Batumi Georgia',
    features: ['Carved 19th-Century Cedar Balcony', 'High Ceilings & Brick Fireplace', 'Espresso Machine & Wine Fridge', 'Step to Cafes & Piazza'],
    amenitiesList: ['Carved Wooden Balcony', 'Brick Fireplace', 'Full Kitchen', 'Nespresso Coffee Bar', 'Wine Cooler', 'Washer & Dryer', 'Fast Wi-Fi (150 Mbps)', 'Cobblestone Street Views'],
    ratingBreakdown: { cleanliness: 5.0, location: 5.0, communication: 5.0, value: 4.9 },
    contact: {
      phone: '+995 593 11 88 42',
      whatsapp: '+995 593 11 88 42',
      email: 'piazzaloft.batumi@gmail.com',
      website: 'https://www.airbnb.com/s/Batumi--Georgia',
      bookingUrl: 'https://www.airbnb.com/s/Batumi--Georgia/homes?query=Piazza%20Old%20Batumi',
      hostName: 'Tamar Abashidze (Verified Superhost)',
    },
    description: 'Restored 1890s townhouse flat with open private balcony overlooking cobblestone courtyards and blooming wisteria.',
  },
  {
    id: 'hilton-batumi-seafront',
    name: 'Hilton Batumi & Nephele Sky Lounge',
    type: '5-Star Resort Hotel',
    category: 'Hotel',
    district: 'boulevard',
    districtName: 'Central Boulevard & 6 May Park',
    priceNightGEL: 310,
    rating: 4.85,
    reviewsCount: 1980,
    guestsMax: 3,
    bedrooms: 1,
    distanceToBeach: 'Direct Boulevard Access (50m)',
    superhost: false,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    badge: 'Beach & Park View',
    address: '40 Rustaveli Ave, Batumi',
    mapQuery: 'Hilton Batumi Rustaveli Avenue',
    features: ['Eforea Luxury Spa & Sauna', 'Rooftop Nephele Lounge Bar', 'Direct Access to Boulevard Park', 'Pet-Friendly Rooms'],
    amenitiesList: ['Eforea Spa', '20th Floor Sky Lounge', 'Direct Park & Lake Access', 'Indoor Swimming Pool', 'Gym & Sauna', 'Valet Parking', 'Executive Lounge', 'Pet Friendly'],
    ratingBreakdown: { cleanliness: 4.9, location: 4.9, communication: 4.8, value: 4.7 },
    contact: {
      phone: '+995 422 22 22 99',
      whatsapp: '+995 591 22 22 99',
      email: 'batumi.info@hilton.com',
      website: 'https://www.hilton.com/en/hotels/busbahi-hilton-batumi/',
      bookingUrl: 'https://www.booking.com/searchresults.html?ss=Hilton+Batumi',
      hostName: 'Hilton Front Desk 24/7',
    },
    description: 'Premier seaside avenue address overlooking the Black Sea and Lake Nurigeli, home to Batumi’s beloved sky bar.',
  },
  {
    id: 'green-cape-eco-villa',
    name: 'Green Cape Subtropical Cliff Villa',
    type: 'Airbnb Sea-Cliff Eco House',
    category: 'Villa / Eco-Stay',
    district: 'green-cape',
    districtName: 'Green Cape (Mtsvane Kontskhi)',
    priceNightGEL: 180,
    rating: 4.96,
    reviewsCount: 310,
    guestsMax: 6,
    bedrooms: 3,
    distanceToBeach: '5 Min Walk to Pebble Cove',
    superhost: true,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    badge: 'Quiet Nature Retreat',
    address: 'Mtsvane Kontskhi Cliff Trail 8, Green Cape',
    mapQuery: 'Mtsvane Kontskhi Batumi Green Cape',
    features: ['Panoramic Black Sea Sunsets', 'Private Citrus & Kiwi Orchard', '5 Min Walk to Botanical Garden', 'Outdoor BBQ & Hammocks'],
    amenitiesList: ['Private Botanical Garden Path', 'Outdoor BBQ Terrace', 'Citrus Orchard Hammocks', 'Sea View Deck', 'Full Chef Kitchen', 'Firepit', 'Private Parking', 'Washing Machine'],
    ratingBreakdown: { cleanliness: 5.0, location: 5.0, communication: 5.0, value: 4.9 },
    contact: {
      phone: '+995 571 88 33 00',
      whatsapp: '+995 571 88 33 00',
      email: 'greencape.villas.georgia@gmail.com',
      website: 'https://www.airbnb.com/s/Mtsvane-Kontskhi--Georgia',
      bookingUrl: 'https://www.airbnb.com/s/Batumi--Georgia/homes?query=Green%20Cape%20Villa',
      hostName: 'Levan & Lela (Eco Hosts)',
    },
    description: 'Wake up to the sounds of waves and eucalyptus trees on the slopes of Green Cape, right beside the world-famous Botanical Garden.',
  },
  {
    id: 'sarpi-azure-cottages',
    name: 'Sarpi Azure Cliffside Chalets & Suites',
    type: 'Boutique Beach Resort',
    category: 'Villa / Eco-Stay',
    district: 'gonio-sarpi',
    districtName: 'Gonio & Sarpi Riviera',
    priceNightGEL: 160,
    rating: 4.88,
    reviewsCount: 240,
    guestsMax: 4,
    bedrooms: 2,
    distanceToBeach: 'Direct Beach Access (30m)',
    superhost: false,
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1000&q=80',
    badge: 'Clearest Sea Water',
    address: 'Sarpi Coast Highway 12, Sarpi Beach',
    mapQuery: 'Sarpi Beach Batumi Georgia',
    features: ['Crystal-Clear Water Beach Access', 'Mountain Stream Freshness', 'Seafood Terrace Restaurant', 'Breathtaking Sunset Deck'],
    amenitiesList: ['Turquoise Water Beachfront', 'Sun Loungers Included', 'Fresh Seafood Terrace', 'Panoramic Sea Balcony', 'Free Breakfast', 'Snorkeling Gear Available', 'Air Conditioning', 'Free Parking'],
    ratingBreakdown: { cleanliness: 4.9, location: 5.0, communication: 4.8, value: 4.8 },
    contact: {
      phone: '+995 599 07 44 22',
      whatsapp: '+995 599 07 44 22',
      email: 'sarpi.azure.resort@gmail.com',
      website: 'https://www.booking.com/searchresults.html?ss=Sarpi+Georgia',
      bookingUrl: 'https://www.booking.com/searchresults.html?ss=Sarpi+Beach',
      hostName: 'Sarpi Azure Hospitality',
    },
    description: 'Located at the southern subtropical fringe of Adjara where cliffs meet the transparent turquoise waters of Sarpi.',
  },
  {
    id: 'le-meridien-batumi',
    name: 'Le Méridien Batumi (Batumi Tower)',
    type: 'Luxury Landmark Hotel',
    category: 'Hotel',
    district: 'boulevard',
    districtName: 'Miracle Park & Boulevard',
    priceNightGEL: 340,
    rating: 4.89,
    reviewsCount: 1150,
    guestsMax: 3,
    bedrooms: 1,
    distanceToBeach: 'Direct Waterfront (0m)',
    superhost: false,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    badge: 'Inside Batumi Tower',
    address: '1 Ninoshvili St, Batumi Tower',
    mapQuery: 'Le Meridien Batumi Tower',
    features: ['Integrated Batumi Tower Ferris Wheel', 'Explore Spa with Turkish Hammam', 'Brasserie Severina', 'Direct Miracle Park Access'],
    amenitiesList: ['Batumi Tower Observation Access', 'Indoor & Outdoor Pools', 'Explore Spa with Turkish Hammam', 'French-Georgian Brasserie', 'High-speed Wi-Fi', '24/7 Concierge', 'Casino & Lounges', 'Valet Parking'],
    ratingBreakdown: { cleanliness: 4.9, location: 5.0, communication: 4.9, value: 4.7 },
    contact: {
      phone: '+995 422 29 90 90',
      whatsapp: '+995 595 29 90 90',
      email: 'info.batumi@lemeridien.com',
      website: 'https://www.marriott.com/hotels/travel/busmd-le-meridien-batumi/',
      bookingUrl: 'https://www.booking.com/searchresults.html?ss=Le+Meridien+Batumi',
      hostName: 'Marriott Bonvoy Concierge',
    },
    description: 'Set inside the tallest tower in the Caucasus featuring an iconic mini-ferris wheel embedded in its 27th floor glass facade.',
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
        morning: 'Morning stroll along Boulevard, admire Batumi Lighthouse and Alphabet Tower.',
        afternoon: 'Wander Old Batumi & Europe Square, savor hot boat-shaped Khachapuri at Retro.',
        evening: 'Take Argo Cable Car for panoramic sunset, then watch Ali & Nino move at 19:30.',
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
        morning: 'Explore cobblestone Old Batumi, Piazza, and the Astronomical Clock.',
        afternoon: 'Rent a Batumvelo bicycle and ride along the 7km coastline under the palms.',
        evening: 'Sunset drinks at Alphabet Tower followed by Ali & Nino illumination.',
        food: 'Juicy meat Khinkali dumplings with spicy Ajika',
      },
      {
        day: 2,
        title: 'Botanical Wonders & Green Cape',
        morning: 'Take marshrutka #31 to Batumi Botanical Garden; explore Japanese bamboo groves.',
        afternoon: 'Swim at Green Cape pebble beach and eat grilled fish by the sea.',
        evening: 'Argo Cable Car ride to Anuria mountain for traditional Georgian folk dancers.',
        food: 'Black Sea red mullet (Barabulka) with fresh lemon',
      },
      {
        day: 3,
        title: 'Mountain Adjara & Roman Citadel',
        morning: 'Excursion to Makhuntseti 50m waterfall and 900-year-old Queen Tamar Stone Bridge.',
        afternoon: 'Wine tasting at Adjarian Wine House in Keda sampling rare Chkhaveri rosé.',
        evening: 'Visit Gonio Roman Fortress and watch synchronized fountains at Ardagani Lake.',
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
        morning: 'Check into hotel, walk Miracle Park, and explore Batumi Old Port.',
        afternoon: 'Piazza Square cafes, European architecture, and boutique craft shops.',
        evening: 'Sunset watch at Ali & Nino with local beer or wine.',
        food: 'Classic Adjarian Khachapuri',
      },
      {
        day: 2,
        title: 'Batumi Botanical Sanctuary',
        morning: 'Hike through 9 world phytogeographical zones overlooking turquoise sea.',
        afternoon: 'Swim and sunbathe at Green Cape cove with churchkhela snacks.',
        evening: 'Dinner at revolving Alphabet Tower panorama restaurant.',
        food: 'Adjarian Borano melted mountain cheese',
      },
      {
        day: 3,
        title: 'Mtirala National Rainforest',
        morning: 'Adventure through Europe’s wettest subtropical rainforest with suspension bridges.',
        afternoon: 'Swim in the crystal mountain lake and Tsablnari waterfall.',
        evening: 'Traditional Supra feast in a wooden village tavern.',
        food: 'Fresh river trout fried with cornbread',
      },
      {
        day: 4,
        title: 'Gonio Roman Citadel & Sarpi Beach',
        morning: 'Tour Gonio-Apsaros Fortress and examine 2,000-year-old Roman walls.',
        afternoon: 'Sunbathe at Sarpi beach right next to the border with turquoise water.',
        evening: 'Night cycling on New Boulevard and laser dancing fountain show.',
        food: 'Black Sea mussels in garlic cream sauce',
      },
      {
        day: 5,
        title: 'Keda Wine Valley & Sunset Cruise',
        morning: 'Scenic drive along Acharistskali river gorge and Dandalo bridge.',
        afternoon: 'Artisan wine tastings at family Marani cellars in Keda.',
        evening: 'Sunset yacht cruise along Batumi Bay watching dolphins play.',
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
  const [savedAttractions, setSavedAttractions] = useState(() => [ATTRACTIONS[0], ATTRACTIONS[2]]);
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

  const [stayNights, setStayNights] = useState(1); // Set initial value to 1 (or 0, depending on your needs)

  // New interactive Cuisine states
  const [expandedDishId, setExpandedDishId] = useState('adjarian-khachapuri');
  const [showAllDishes, setShowAllDishes] = useState(false);
  const [cuisineFilter, setCuisineFilter] = useState('All');
  const [visibleAttractionsCount, setVisibleAttractionsCount] = useState(8);
  const [activeModalDish, setActiveModalDish] = useState(null);

  // Accommodations & Where to Stay states
  const [stayDistrictFilter, setStayDistrictFilter] = useState('All');
  const [showAllStays, setShowAllStays] = useState(false);
  const [activeStayInquiry, setActiveStayInquiry] = useState(null);
  const [inquiryStatus, setInquiryStatus] = useState(null);

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
    setSavedAttractions((prev) =>
      prev.some((p) => p.id === item.id) ? prev.filter((p) => p.id !== item.id) : [...prev, item]
    );
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
            <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
              <Sun className="w-3.5 h-3.5 animate-spin-slow" /> Batumi Live: 24°C Sunny
            </span>
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-rose-500 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              B
            </div>
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
            <a href="#neighborhoods" className="hover:text-rose-600 transition-colors">Districts</a>
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
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950 text-center text-white px-4 py-20">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Batumi Coastline"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
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
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
            <span>Trending:</span>
            {['Ali & Nino', 'Khachapuri', 'Botanical Garden', 'Argo Cable Car', 'Gonio Fortress'].map((tag) => (
              <button
                key={tag}
                onClick={() => { setSearchQuery(tag); document.getElementById('attractions')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

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
                    <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] text-white font-semibold">
                      {place.category}
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
                          {(d.venues || []).slice(0, isExpanded ? undefined : 1).map((v, vIdx) => (
                            <div key={vIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
                              <div className="flex items-center justify-between font-bold text-slate-800">
                                <span>{v.name}</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 font-medium">
                                  {v.type}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500">{v.address}</p>
                              {v.highlight && (
                                <p className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-medium">
                                  ★ {v.highlight}
                                </p>
                              )}
                              <a
                                href={v.mapUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 hover:text-rose-700 pt-0.5"
                              >
                                <Navigation className="w-3 h-3" /> View Restaurant on Map
                              </a>
                            </div>
                          ))}
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

      {/* 6. WHERE TO STAY & WANDER (AIRBNB, HOTELS, VILLAS & DIRECT CONTACTS) */}
      <section id="neighborhoods" className="py-20 bg-gradient-to-b from-stone-50 via-white to-slate-50 border-t border-slate-200 text-slate-900 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3.5 py-1 rounded-full uppercase tracking-wider border border-rose-200">
              Curated Accommodations & Rentals
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif-title">
              Where to Stay in Batumi
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Verified beachfront luxury hotels, high-floor panoramic Airbnb suites, and scenic cliffside villas with direct host contacts, transparent pricing, and instant rental inquiries.
            </p>
          </div>

          {/* District Highlights with Beach Proximity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 font-serif-title flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>Filter Stays by Batumi Neighborhood:</span>
              </h3>
              {stayDistrictFilter !== 'All' && (
                <button
                  type="button"
                  onClick={() => setStayDistrictFilter('All')}
                  className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                >
                  Clear district filter (Show All)
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {NEIGHBORHOODS.map((h) => {
                const isSelected = stayDistrictFilter === h.id;
                return (
                  <div
                    key={h.id}
                    onClick={() => setStayDistrictFilter(isSelected ? 'All' : h.id)}
                    className={`p-4 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? 'bg-rose-50 border-rose-500 shadow-md ring-2 ring-rose-500/20'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-slate-100">
                        <img
                          src={h.image}
                          alt={h.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold">
                          {h.distanceToBeach}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                            {h.name}
                          </h4>
                          <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 font-bold whitespace-nowrap">
                            {h.vibe}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {h.tagline}
                        </p>
                      </div>

                      <div className="space-y-1 pt-1 border-t border-slate-100 text-[11px] text-slate-600">
                        {h.highlights.slice(0, 2).map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5 truncate">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 text-[11px] font-bold flex items-center justify-between">
                      <span className={isSelected ? 'text-rose-600' : 'text-slate-500 group-hover:text-rose-600'}>
                        {isSelected ? '✓ Neighborhood Active' : 'Filter stays here'}
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Accommodations Grid (Hotels, Airbnbs, Villas) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACCOMMODATIONS.filter((stay) => {
              const matchesDist = stayDistrictFilter === 'All' || stay.district === stayDistrictFilter;
              return matchesDist;
            })
              .slice(0, showAllStays ? undefined : 4)
              .map((stay) => {
                const isSaved = savedAttractions.some((s) => s.id === stay.id);

                return (
                  <div
                    key={stay.id}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
                  >
                    <div className="space-y-3">
                      {/* Stay Image with Badges */}
                      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                        <img
                          src={stay.image}
                          alt={stay.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-80" />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
                          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] text-white font-bold flex items-center gap-1">
                            {stay.category.includes('Airbnb') ? <Home className="w-3 h-3 text-rose-400" /> : <Hotel className="w-3 h-3 text-amber-400" />}
                            {stay.type}
                          </span>
                          <span className="bg-rose-600 px-2 py-0.5 rounded-md text-[10px] text-white font-bold shadow-xs">
                            {stay.badge}
                          </span>
                        </div>

                        {/* Wishlist Heart Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSave(stay);
                          }}
                          className={`absolute top-2.5 right-2.5 p-2 rounded-xl backdrop-blur-md transition-all cursor-pointer ${
                            isSaved
                              ? 'bg-rose-500 text-white shadow-md'
                              : 'bg-black/40 text-white hover:bg-black/60'
                          }`}
                          title={isSaved ? 'Saved in Trip Plan' : 'Save to Wishlist'}
                        >
                          <Heart className="w-4 h-4" fill={isSaved ? 'currentColor' : 'none'} />
                        </button>

                        {/* Beach & Rating Overlay */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[11px] drop-shadow-md">
                          <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md text-amber-300 font-bold truncate max-w-[150px]">
                            {stay.distanceToBeach || stay.districtName}
                          </span>
                          <span className="flex items-center gap-1 font-bold bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded-md">
                            <Star className="w-3 h-3 text-amber-400 fill-amber-400" /> {stay.rating} ({stay.reviewsCount})
                          </span>
                        </div>
                      </div>

                      {/* Stay Information */}
                      <div className="p-4 pt-1 space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                            <span className="font-semibold text-rose-700">{stay.districtName}</span>
                            <span>Up to {stay.guestsMax} guests • {stay.bedrooms} bed</span>
                          </div>
                          <h3 className="font-bold text-base text-slate-900 font-serif-title line-clamp-1 group-hover:text-rose-600 transition-colors">
                            {stay.name}
                          </h3>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.mapQuery || stay.name + ' ' + stay.address)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] text-slate-500 hover:text-slate-800 flex items-center gap-1 mt-0.5 truncate"
                          >
                            <MapPin className="w-3 h-3 text-rose-500 flex-shrink-0" />
                            <span className="truncate">{stay.address}</span>
                          </a>
                        </div>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {stay.description}
                        </p>

                        {/* Amenities / Features */}
                        <div className="space-y-1 pt-1 border-t border-slate-100">
                          {stay.features.slice(0, 3).map((feat, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600 truncate">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Nightly Pricing Box */}
                        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                          <div>
                            <span className="text-slate-500 text-[10px] block">Nightly rate:</span>
                            <strong className="text-slate-900 text-sm font-bold">
                              {formatPrice(stay.priceNightGEL)}
                            </strong>
                          </div>
                          <span className="text-[10px] text-slate-500">
                            Host: {stay.contact.hostName.split(' ')[0]}
                          </span>
                        </div>

                        {/* Direct Contacts & Actions */}
                        <div className="space-y-2 pt-1">
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {/* Direct Phone Call */}
                            <a
                              href={`tel:${stay.contact.phone.replace(/\s+/g, '')}`}
                              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold flex items-center justify-center gap-1 text-[11px] transition-colors"
                            >
                              <PhoneCall className="w-3 h-3 text-emerald-600" />
                              <span>Call Host</span>
                            </a>

                            {/* Direct WhatsApp Message */}
                            <a
                              href={`https://wa.me/${stay.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                                `Hello ${stay.contact.hostName}! I found ${stay.name} on the Batumi Tourism Guide. Could you share availability and rates for an upcoming trip?`
                              )}`}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-1 text-[11px] transition-colors shadow-xs"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>WhatsApp</span>
                            </a>
                          </div>

                          {/* Open Booking Platform or Inquiry */}
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <a
                              href={stay.contact.bookingUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold flex items-center justify-center gap-1 text-[11px] transition-colors"
                            >
                              <span>{stay.category.includes('Airbnb') ? 'Airbnb Link' : 'Booking.com'}</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
                            </a>

                            <button
                              type="button"
                              onClick={() => { setActiveStayInquiry(stay); setInquiryStatus(null); }}
                              className="p-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-[11px] transition-colors shadow-xs cursor-pointer"
                            >
                              Details & Rent
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Toggle Show More Stays */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setShowAllStays(!showAllStays)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold shadow-xs transition-all border border-slate-300 hover:border-rose-500 cursor-pointer"
            >
              <span>{showAllStays ? 'Show Fewer Accommodations' : `Show More Stays & Airbnbs (${ACCOMMODATIONS.length} Total)`}</span>
              {showAllStays ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* 7. ITINERARIES */}
      <section id="itineraries" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-rose-600 uppercase">Curated Itineraries</span>
            <h2 className="text-3xl font-extrabold font-serif-title text-slate-900 mt-1">
              Your Daily Batumi Route
            </h2>
            <p className="text-xs text-slate-500">Pick a pre-made plan or customize with your bookmarked sights.</p>
          </div>

          <div className="flex bg-slate-200 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setItineraryTab('presets')}
              className={`px-3 py-1.5 rounded-lg ${itineraryTab === 'presets' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
            >
              Curated Plans
            </button>
            <button
              onClick={() => setItineraryTab('custom')}
              className={`px-3 py-1.5 rounded-lg ${itineraryTab === 'custom' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
            >
              My Saved Plan ({savedAttractions.length})
            </button>
          </div>
        </div>

        {itineraryTab === 'presets' ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ITINERARIES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlanId(p.id)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                    selectedPlanId === p.id ? 'bg-white border-rose-500 ring-2 ring-rose-500/20' : 'bg-white border-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold text-rose-600">{p.durationDays} Day Plan</span>
                  <h4 className="font-bold text-sm text-slate-900 mt-0.5">{p.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{p.tagline}</p>
                </button>
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold font-serif-title">{currentPlan.title}</h3>
                  <p className="text-xs text-slate-500">{currentPlan.tagline}</p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                >
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>
              </div>

              <div className="space-y-6">
                {currentPlan.days.map((d) => (
                  <div key={d.day} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-rose-600 text-white font-bold text-xs flex items-center justify-center">
                        D{d.day}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900">{d.title}</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-amber-600 block mb-1">Morning</strong>
                        <p className="text-slate-600">{d.morning}</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-rose-600 block mb-1">Afternoon</strong>
                        <p className="text-slate-600">{d.afternoon}</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-slate-200">
                        <strong className="text-indigo-600 block mb-1">Evening</strong>
                        <p className="text-slate-600">{d.evening}</p>
                      </div>
                    </div>
                    <div className="text-xs text-amber-900 bg-amber-50 p-2.5 rounded-xl border border-amber-200">
                      🍽️ <strong>Meal Highlight:</strong> {d.food}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold font-serif-title text-slate-900">Personal Travel Plan Board</h3>
                <p className="text-xs text-slate-500">Your personalized itinerary board with direct directions and travel notes.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  <Printer className="w-3.5 h-3.5" /> Print Board
                </button>
                {savedAttractions.length > 0 && (
                  <button
                    onClick={() => setSavedAttractions([])}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Clear All
                  </button>
                )}
              </div>
            </div>

            {savedAttractions.length === 0 ? (
              <div className="py-12 text-center space-y-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-sm text-slate-800">Your Plan Board is Empty</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Click the bookmark button on any attraction or visit spot above to pin it to your personal travel plan board.
                </p>
                <a
                  href="#attractions"
                  className="inline-block mt-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-sm"
                >
                  Browse Attractions
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {savedAttractions.map((place, idx) => (
                    <div key={place.id} className="p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded-2xl border border-slate-200 flex flex-col justify-between text-xs space-y-3 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <span className="w-6 h-6 rounded-lg bg-rose-600 text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <img src={place.image} alt={place.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0 shadow-xs" />
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-slate-900 truncate">{place.name}</p>
                          <p className="text-[10px] text-amber-600 font-medium">{place.georgianName}</p>
                          <p className="text-[10px] text-slate-500 truncate flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" /> {place.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 text-[11px]">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            place.coords?.query || `${place.name} Batumi Georgia`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-rose-600 hover:text-rose-700"
                        >
                          <Navigation className="w-3 h-3" /> Directions
                        </a>
                        <button
                          onClick={() => toggleSave(place)}
                          className="text-slate-400 hover:text-rose-600 font-medium flex items-center gap-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 space-y-2">
                  <label className="block text-xs font-bold text-slate-800">
                    Travel Notes & Checklist (Hotel, dates, booking numbers):
                  </label>
                  <textarea
                    value={tripNotes}
                    onChange={(e) => setTripNotes(e.target.value)}
                    placeholder="e.g. Day 1: Arrive Batumi train station 13:00 -> Check into Old Boulevard Hotel -> Sunset drinks at Alphabet tower..."
                    rows={3}
                    className="w-full p-3 rounded-2xl border border-slate-200 text-xs focus:outline-hidden focus:border-rose-500 bg-slate-50"
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
              <p className="text-xl font-black text-rose-900 font-serif-title">
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
              <div className="w-8 h-8 rounded-lg bg-rose-600 text-white font-bold flex items-center justify-center">B</div>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs"
          onClick={() => setActiveModalDish(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 text-xs no-scrollbar shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative aspect-16/9 bg-slate-900 overflow-hidden">
              <img
                src={activeModalDish.image}
                alt={activeModalDish.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

              <button
                type="button"
                onClick={() => setActiveModalDish(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500 text-black font-extrabold text-[10px] uppercase">
                    {activeModalDish.category}
                  </span>
                  {activeModalDish.isVeg && (
                    <span className="px-2.5 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-[10px]">
                      Vegetarian
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-xs text-white text-[10px]">
                    📍 {activeModalDish.origin || 'Adjara Region'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-title drop-shadow-md">
                  {activeModalDish.name}
                </h3>
                <div className="flex items-center gap-3 mt-1 text-xs text-amber-200">
                  <span className="font-semibold text-sm">{activeModalDish.georgianName}</span>
                  {activeModalDish.pronunciation && (
                    <span className="italic opacity-90">({activeModalDish.pronunciation})</span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* Pronunciation Audio & Price Banner */}
              <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => speakGeorgian(activeModalDish.georgianName)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Pronounce in Georgian</span>
                </button>

                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">Average Tavern Price:</span>
                  <span className="text-base font-extrabold text-amber-900">
                    ~{formatPrice(activeModalDish.avgPriceGEL || 14)}
                  </span>
                </div>
              </div>

              {/* Description & Flavor */}
              <div className="space-y-2">
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                  {activeModalDish.description}
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 space-y-1">
                  <p>
                    <strong className="text-slate-900">Flavor Profile:</strong> {activeModalDish.flavorProfile}
                  </p>
                  {activeModalDish.pairing && (
                    <p className="text-amber-800">
                      <strong>Recommended Beverage:</strong> {activeModalDish.pairing}
                    </p>
                  )}
                </div>
              </div>

              {/* Step-by-Step Local Eating Ritual */}
              {activeModalDish.eatingGuide && activeModalDish.eatingGuide.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-amber-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm font-serif-title">
                      How to Eat Like a Local (The Authentic Ritual)
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {activeModalDish.eatingGuide.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60 flex items-start gap-3"
                      >
                        <span className="w-5 h-5 rounded-full bg-amber-600 text-white font-extrabold text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-slate-700 text-xs leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients List */}
              {activeModalDish.ingredients && (
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <h4 className="font-bold text-slate-900 text-xs">Authentic Key Ingredients:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalDish.ingredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Best Restaurants Serving This Dish */}
              {activeModalDish.venues && activeModalDish.venues.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 font-serif-title">
                      <MapPin className="w-4 h-4 text-rose-600" />
                      <span>Top Rated Taverns & Bakeries for this Dish:</span>
                    </h4>
                    <span className="text-[11px] text-slate-400 font-semibold">
                      {activeModalDish.venues.length} verified spots
                    </span>
                  </div>

                  <div className="space-y-2">
                    {activeModalDish.venues.map((venue, vIdx) => (
                      <div
                        key={vIdx}
                        className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <strong className="text-slate-900 text-xs">{venue.name}</strong>
                            <span className="px-2 py-0.2 rounded-md bg-amber-100 text-amber-800 text-[10px] font-semibold">
                              {venue.type}
                            </span>
                          </div>
                          <p className="text-slate-500 text-[11px]">{venue.address}</p>
                          {venue.highlight && (
                            <p className="text-emerald-700 text-[11px] font-medium">
                              ★ {venue.highlight}
                            </p>
                          )}
                        </div>

                        <a
                          href={venue.mapUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-3 py-1.5 rounded-xl bg-white hover:bg-slate-100 text-rose-600 border border-rose-200 font-bold text-[11px] flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Google Maps</span>
                          <ExternalLink className="w-3 h-3 ml-0.5 text-rose-400" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons: Save to Trip Board */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => toggleSave(activeModalDish)}
                  className={`flex-1 py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    savedAttractions.some((s) => s.id === activeModalDish.id)
                      ? 'bg-rose-50 text-rose-700 border border-rose-200'
                      : 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
                  }`}
                >
                  <Heart
                    className="w-4 h-4"
                    fill={savedAttractions.some((s) => s.id === activeModalDish.id) ? 'currentColor' : 'none'}
                  />
                  <span>
                    {savedAttractions.some((s) => s.id === activeModalDish.id)
                      ? 'Saved in Food Bucket List'
                      : 'Add to My Food Bucket List'}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModalDish(null)}
                  className="px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: RENT INQUIRY & CONTACT HOST */}
      {activeStayInquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs"
          onClick={() => setActiveStayInquiry(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-200 text-xs no-scrollbar shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-16/9 bg-slate-900">
              <img src={activeStayInquiry.image} alt={activeStayInquiry.name} className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={() => setActiveStayInquiry(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-rose-600 text-[10px] font-bold">
                    {activeStayInquiry.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-semibold text-amber-300">
                    {activeStayInquiry.distanceToBeach || activeStayInquiry.districtName}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-serif-title drop-shadow-md">
                  {activeStayInquiry.name}
                </h3>
                <p className="text-[11px] text-slate-200">
                  {activeStayInquiry.districtName} • {formatPrice(activeStayInquiry.priceNightGEL)} / night
                </p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              {/* Trip Duration Cost Calculation */}
              <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[11px] text-slate-600 block">
                    Estimated Total for {stayNights} {stayNights === 1 ? 'Night' : 'Nights'}:
                  </span>
                  <strong className="text-base text-rose-700 font-extrabold">
                    {formatPrice(activeStayInquiry.priceNightGEL * stayNights)}
                  </strong>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setStayNights(Math.max(1, stayNights - 1))}
                    className="w-7 h-7 rounded-lg bg-white border border-rose-200 text-rose-700 font-bold hover:bg-rose-100 flex items-center justify-center text-xs"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-bold text-slate-800">{stayNights}n</span>
                  <button
                    type="button"
                    onClick={() => setStayNights(Math.min(30, stayNights + 1))}
                    className="w-7 h-7 rounded-lg bg-white border border-rose-200 text-rose-700 font-bold hover:bg-rose-100 flex items-center justify-center text-xs"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Host Contact Strip */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-slate-900 font-bold">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Host: {activeStayInquiry.contact.hostName}
                  </span>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 font-semibold">
                    Verified Host
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />
                    <span>{activeStayInquiry.contact.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                    <span className="truncate">{activeStayInquiry.contact.email}</span>
                  </div>
                </div>
              </div>

              {/* Fast Connect Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${activeStayInquiry.contact.phone.replace(/\s+/g, '')}`}
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold flex items-center justify-center gap-2 text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${activeStayInquiry.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                    `Hello ${activeStayInquiry.contact.hostName}! I found your property (${activeStayInquiry.name}) on the Batumi Tourism Guide. Could you tell me about availability for ${stayNights} nights?`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 text-center shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>

              {/* Amenities Grid */}
              {activeStayInquiry.amenitiesList && (
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <h4 className="font-bold text-slate-900 text-xs">Included Amenities:</h4>
                  <div className="grid grid-cols-2 gap-1.5">
                    {activeStayInquiry.amenitiesList.map((am, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span className="truncate">{am}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive In-App Message Dispatch */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs">Direct Rental Request to Host</h4>
                {inquiryStatus === 'sent' ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-1">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                    <p className="font-bold text-xs">Inquiry Sent Successfully!</p>
                    <p className="text-[11px] text-emerald-700">The host will review your dates and contact you via phone/WhatsApp within 2 hours.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setInquiryStatus('sent');
                    }}
                    className="space-y-2.5"
                  >
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 mb-0.5">Your Name:</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex"
                          className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 mb-0.5">Phone / WhatsApp:</label>
                        <input
                          type="text"
                          required
                          placeholder="+995 / +1..."
                          className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 mb-0.5">Estimated Check-In:</label>
                        <input
                          type="date"
                          className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 text-[11px] focus:outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-600 mb-0.5">Guests:</label>
                        <select className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 text-[11px] focus:outline-hidden">
                          <option>1-2 Guests</option>
                          <option>3-4 Guests (Family)</option>
                          <option>5+ Guests (Group)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-600 mb-0.5">Notes or Special Requests:</label>
                      <textarea
                        rows={2}
                        placeholder="e.g. High floor ocean view, baby crib needed, late check-in at 22:00..."
                        className="w-full p-2 rounded-xl border border-slate-200 bg-slate-50 text-[11px] focus:outline-hidden"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold shadow-md cursor-pointer transition-all"
                    >
                      Send Booking & Rental Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
