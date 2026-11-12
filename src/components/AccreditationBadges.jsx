import React from 'react';
import floydImg from '../assets/floyd.png';
import cbseImg from '../assets/cbse.png';
import ptsImg from '../assets/pts.png';

export const partnerLogos = [
  {
    id: 'cbse',
    name: 'CBSE Board Affiliated',
    render: () => (
      <div className="flex items-center justify-center px-4">
        <img
          src={cbseImg}
          alt="CBSE Board Affiliated"
          className="h-14 sm:h-16 w-auto object-contain max-w-[120px]"
        />
      </div>
    )
  },
  {
    id: 'sof',
    name: 'Science Olympiad Foundation',
    render: () => (
      <div className="flex flex-col items-center justify-center px-4">
        <div className="flex items-center gap-1 font-serif font-black text-2xl sm:text-3xl tracking-tighter text-slate-900">
          <span>S</span>
          <span className="relative inline-flex items-center justify-center w-7 h-7">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-amber-400 stroke-slate-900 stroke-1">
              <path d="M12 2a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.2V16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.8c1.8-1.1 3-3 3-5.2a6 6 0 0 0-6-6z" />
              <path d="M10 19h4v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1z" fill="#334155" />
            </svg>
          </span>
          <span>F</span>
        </div>
        <span className="text-[8px] font-extrabold uppercase tracking-tight text-slate-900 mt-0.5 border-t border-slate-800 pt-0.5">
          SCIENCE OLYMPIAD FOUNDATION
        </span>
      </div>
    )
  },
  {
    id: 'floyd-school',
    name: 'Floyd School',
    render: () => (
      <div className="flex items-center justify-center px-4">
        <img
          src={floydImg}
          alt="Floyd School Logo"
          className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[220px]"
        />
      </div>
    )
  },
  {
    id: 'eco-council',
    name: 'Eco School Council',
    render: () => (
      <div className="flex items-center justify-center px-4">
        <svg className="w-14 h-14 sm:w-16 sm:h-16" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="44" stroke="#1d4ed8" strokeWidth="4" fill="none" />
          <circle cx="50" cy="50" r="38" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          <path d="M50 20 C65 20, 75 35, 68 50 C60 40, 50 42, 50 20 Z" fill="#2563eb" />
          <path d="M76 65 C68 78, 50 78, 42 65 C52 60, 58 50, 76 65 Z" fill="#1d4ed8" />
          <path d="M24 65 C16 52, 25 35, 40 35 C38 48, 42 58, 24 65 Z" fill="#3b82f6" />
          <circle cx="50" cy="50" r="6" fill="#1e40af" />
        </svg>
      </div>
    )
  },
  {
    id: 'pts-bridge',
    name: 'PTS Bridge',
    render: () => (
      <div className="flex items-center justify-center px-4">
        <img
          src={ptsImg}
          alt="PTS Bridge"
          className="h-10 sm:h-12 w-auto object-contain max-w-[150px]"
        />
      </div>
    )
  },
  {
    id: 'extramarks',
    name: 'Extramarks Smart Learning',
    render: () => (
      <div className="flex items-center justify-center px-4">
        <div className="flex items-center">
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-orange-600 font-sans">
            EXTR
          </span>
          <div className="relative inline-flex items-center justify-center text-orange-600 font-black text-2xl sm:text-3xl">
            <span>A</span>
            <span className="absolute -top-1.5 -right-1.5 text-orange-600 text-xs font-bold">▲</span>
          </div>
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-orange-600 font-sans ml-0.5">
            MARKS
          </span>
        </div>
      </div>
    )
  },
  {
    id: 'childcare',
    name: 'Student Health & Wellness',
    render: () => (
      <div className="flex items-center justify-center px-4">
        <svg className="w-14 h-14 sm:w-16 sm:h-16" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="45" stroke="#dc2626" strokeWidth="3" fill="none" />
          <circle cx="50" cy="50" r="40" stroke="#1d4ed8" strokeWidth="2" strokeDasharray="5 3" fill="none" />
          <g fill="#1e3a8a">
            <path d="M38 48 C36 44, 38 40, 41 40 C43 40, 44 43, 44 48 L44 54 C44 56, 42 58, 40 58 C38 58, 36 56, 36 53 Z" />
            <path d="M32 50 C31 47, 33 44, 35 44 C37 44, 38 47, 38 50 L38 54 C38 56, 36 58, 34 58 C32 58, 31 56, 31 53 Z" />
            <path d="M44 47 C43 43, 45 40, 48 40 C50 40, 51 43, 51 47 L51 54 C51 57, 49 59, 47 59 C45 59, 44 57, 44 54 Z" />
            <circle cx="41" cy="62" r="5" />
          </g>
          <g fill="#dc2626">
            <path d="M58 48 C56 44, 58 40, 61 40 C63 40, 64 43, 64 48 L64 54 C64 56, 62 58, 60 58 C58 58, 56 56, 56 53 Z" />
            <path d="M52 50 C51 47, 53 44, 55 44 C57 44, 58 47, 58 50 L58 54 C58 56, 56 58, 54 58 C52 58, 51 56, 51 53 Z" />
            <path d="M64 47 C63 43, 65 40, 68 40 C70 40, 71 43, 71 47 L71 54 C71 57, 69 59, 67 59 C65 59, 64 57, 64 54 Z" />
            <circle cx="61" cy="62" r="5" />
          </g>
        </svg>
      </div>
    )
  }
];

export default function AccreditationBadges() {
  return (
    <div className="relative bg-white py-7 sm:py-9 overflow-hidden border-y border-slate-200 select-none">
      {/* Subtle left and right gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-16 sm:gap-24">
        {[...partnerLogos, ...partnerLogos].map((partner, idx) => (
          <div
            key={`${partner.id}-${idx}`}
            className="shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-300"
            title={partner.name}
          >
            {partner.render()}
          </div>
        ))}
      </div>
    </div>
  );
}

