import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import floydImg from '../assets/floyd.png';
import cbseImg from '../assets/cbse.png';
import ptsImg from '../assets/pts.png';

const partnerLogos = [
  {
    id: 'sof',
    name: 'Science Olympiad Foundation',
    render: () => (
      <div className="flex flex-col items-center justify-center px-4">
        <div className="flex items-center gap-1.5 font-serif font-black text-2xl sm:text-3xl tracking-tighter text-slate-900">
          <span>S</span>
          <span className="relative inline-flex items-center justify-center w-7 h-7">
            <svg viewBox="0 0 24 24" className="w-7 h-7 fill-amber-400 stroke-slate-900 stroke-1">
              <path d="M12 2a6 6 0 0 0-6 6c0 2.2 1.2 4.1 3 5.2V16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2.8c1.8-1.1 3-3 3-5.2a6 6 0 0 0-6-6z" />
              <path d="M10 19h4v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1z" fill="#334155" />
            </svg>
          </span>
          <span>F</span>
        </div>
        <span className="text-[8px] font-extrabold uppercase tracking-tight text-slate-900 mt-1 border-t border-slate-800 pt-0.5">
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
          className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[220px] sm:max-w-[260px]"
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
          className="h-10 sm:h-12 md:h-13 w-auto object-contain max-w-[160px]"
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
  },
  
];

export default function Footer({ onOpenAdmission, onOpenErp }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#071330] text-white overflow-hidden" data-purpose="main-footer" id="contact">
      
      {/* Upper Main Footer - Generously sized, prominent & spacious */}
      <div className="relative py-12 md:py-16 border-b border-blue-950">
        
        {/* Subtle geometric pattern watermark overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: School Crest, Title, Affiliation & Contact List */}
            <div className="lg:col-span-5 space-y-6">
              {/* School Header */}
              <div className="flex items-center gap-4">
                <img
                  src="/logo.jpg"
                  alt="Radha Krishna Public School Crest"
                  className="w-14 h-14 object-contain rounded-full bg-white p-0.5 shadow-lg ring-2 ring-amber-400/30 shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBoNJun0ExBXPheYHmnmnbC-ZF4P0JiDFLlmz8IQrVF7lZtdwaaTcoZ5dSeYkQey6prpW2-7fZSW1h0sOM26hsdItH1OZLvkLK9tf0w69Tg_013t54FONJP4iM2K97Df9dechedtYtIjiNILRiwu7x1lMOqahPRhyIwxT5C3CDVi1wXapzquJ_3UfNt1gkYlawZybCslVuYK4vXNjPNkExnLbDolVb3e1RV9cp3GQKMSGOzWfumFI7HIJ6CYaPprRNq1T8";
                  }}
                />
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-wide leading-tight">
                    Radha Krishna Public School, Ghaziabad
                  </h3>
                  <p className="text-xs text-blue-200/80 font-medium tracking-wide mt-1">
                    Affiliation No. : <span className="font-semibold text-white">2130572</span> | School Code : <span className="font-semibold text-white">60252</span>
                  </p>
                </div>
              </div>

              {/* Contact Information with square outline box icons */}
              <div className="space-y-3.5 pt-1">
                {/* Phone */}
                <div className="flex items-center gap-3.5 text-xs sm:text-[13px] text-slate-200">
                  <div className="w-7 h-7 border border-white/60 flex items-center justify-center shrink-0 rounded-xs">
                    <Phone className="w-3.5 h-3.5 text-white" />
                  </div>
                  <a href="tel:01204961300" className="hover:text-amber-400 transition-colors">
                    +0120-4961300, 01204961301
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 text-xs sm:text-[13px] text-slate-200">
                  <div className="w-7 h-7 border border-white/60 flex items-center justify-center shrink-0 rounded-xs">
                    <Mail className="w-3.5 h-3.5 text-white" />
                  </div>
                  <a href="mailto:rkps.ghz@gmail.com" className="hover:text-amber-400 transition-colors">
                    rkps.ghz@gmail.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 text-xs sm:text-[13px] text-slate-200">
                  <div className="w-7 h-7 border border-white/60 flex items-center justify-center shrink-0 mt-0.5 rounded-xs">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="leading-relaxed">
                    Institutional Area, Sector 12, Indirapuram Ghaziabad - 201014 (U.P)
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Column: QUICK LINKS */}
            <div className="lg:col-span-3 pt-1">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white mb-4 sm:mb-5">
                QUICK LINKS
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-xs sm:text-[12px] font-bold text-slate-200 uppercase tracking-wide">
                <Link to="/school-legacy" className="hover:text-amber-400 transition-colors">
                  ABOUT US
                </Link>
                <Link to="/vision-mission" className="hover:text-amber-400 transition-colors">
                  VISION &amp; MISSION
                </Link>
                <Link to="/principals-desk" className="hover:text-amber-400 transition-colors">
                  PRINCIPAL'S DESK
                </Link>
                <Link to="/directors-desk" className="hover:text-amber-400 transition-colors">
                  DIRECTOR'S DESK
                </Link>
                <Link to="/facilities" className="hover:text-amber-400 transition-colors">
                  FACILITIES
                </Link>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Right Column: Google Maps Card */}
            <div className="lg:col-span-4">
              <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-xl bg-slate-800 h-[190px] sm:h-[200px] group">
                {/* "Open in Maps" overlay button */}
                <a
                  href="https://maps.google.com/?q=Radha+Krishna+Public+School+Indirapuram+Ghaziabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2.5 left-2.5 z-10 px-3 py-1 bg-white/95 hover:bg-white text-blue-900 text-[11px] font-bold rounded shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 text-blue-800" />
                </a>

                {/* Google Map Iframe */}
                <iframe
                  title="Radha Krishna Public School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.286361836154!2d77.368686!3d28.638421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf00799999999%3A0x1!2sIndirapuram%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter contrast-105"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Social Links Row centered at the bottom of navy section */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs sm:text-sm font-semibold text-slate-200">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-pink-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>facebook</span>
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-red-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span>Youtube</span>
            </a>

            <a
              href="https://wa.me/911204961300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-emerald-400 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 0C5.396 0 .029 5.367.029 11.987c0 2.079.529 4.117 1.544 5.934L0 24l6.257-1.541a11.905 11.905 0 0 0 5.774 1.488h.005c6.64 0 12.007-5.367 12.007-11.987A11.976 11.976 0 0 0 12.031 0zm0 21.903a9.92 9.92 0 0 1-5.06-1.385l-.364-.216-3.722.916.993-3.626-.237-.377A9.875 9.875 0 0 1 2.029 12c0-5.522 4.49-10.013 10.013-10.013a9.96 9.96 0 0 1 7.079 2.935 9.964 9.964 0 0 1 2.934 7.078c0 5.522-4.49 10.013-10.024 10.013z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

      {/* Moving / Scrolling Partner & Accreditation Logos Section (White background) */}
      <div className="relative bg-white py-6 md:py-8 overflow-hidden border-t border-slate-200 select-none">
        {/* Subtle left and right gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Continuous Marquee Track */}
        <div className="animate-marquee flex items-center gap-14 sm:gap-20">
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

      {/* Bottom-most Copyright & Attributions Bar */}
      <div className="bg-white border-t border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© Copyright 2026 Radha Krishna Public School, Ghaziabad</p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500">
              Designed &amp; Maintained by <span className="font-semibold text-slate-700">FloydSchool of Technologies Pvt. Ltd.</span>
            </p>
            {/* Scroll to Top circular button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-full border border-slate-300 hover:border-slate-500 text-slate-700 flex items-center justify-center hover:bg-slate-100 transition-colors shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
