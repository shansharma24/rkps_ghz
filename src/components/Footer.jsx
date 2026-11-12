import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import AccreditationBadges from './AccreditationBadges';

export default function Footer({ onOpenAdmission, onOpenErp }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#071330] text-white overflow-hidden" data-purpose="main-footer" id="main-footer">
      
      {/* Upper Main Footer - 4 Column Layout */}
      <div className="relative py-14 sm:py-16 md:py-20 border-b border-blue-950">
        
        {/* Subtle geometric pattern watermark overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Column 1: School Identity & Direct Contact (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="/logo.jpg"
                  alt="Radha Krishna Public School Crest"
                  className="w-14 h-14 object-contain rounded-full bg-white p-0.5 shadow-lg ring-2 ring-amber-400/40 shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBoNJun0ExBXPheYHmnmnbC-ZF4P0JiDFLlmz8IQrVF7lZtdwaaTcoZ5dSeYkQey6prpW2-7fZSW1h0sOM26hsdItH1OZLvkLK9tf0w69Tg_013t54FONJP4iM2K97Df9dechedtYtIjiNILRiwu7x1lMOqahPRhyIwxT5C3CDVi1wXapzquJ_3UfNt1gkYlawZybCslVuYK4vXNjPNkExnLbDolVb3e1RV9cp3GQKMSGOzWfumFI7HIJ6CYaPprRNq1T8";
                  }}
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide leading-tight heading-serif">
                    Radha Krishna Public School
                  </h3>
                  <p className="text-xs text-amber-300/90 font-semibold tracking-wider uppercase mt-1">
                    CBSE Affiliated Sr. Secondary
                  </p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    Affiliation No: <span className="font-semibold text-white">2130572</span> | Code: <span className="font-semibold text-white">2132212</span>
                  </p>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="space-y-3.5 pt-1 text-xs text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 border border-white/40 flex items-center justify-center shrink-0 rounded-xs mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <span className="leading-relaxed">
                    Institutional Area, Sector 12, Indirapuram, Ghaziabad, Uttar Pradesh — 201014
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 border border-white/40 flex items-center justify-center shrink-0 rounded-xs">
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <a href="tel:9310300600" className="hover:text-amber-400 transition-colors font-medium">
                    +91 9310300600
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 border border-white/40 flex items-center justify-center shrink-0 rounded-xs">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <a href="mailto:rkps.ghz@gmail.com" className="hover:text-amber-400 transition-colors">
                    rkps.ghz@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Pillars (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                INSTITUTIONAL PILLARS
              </h4>
              <div className="flex flex-col space-y-2.5 text-xs text-slate-200 font-medium">
                <Link to="/school-legacy" className="hover:text-amber-400 transition-colors">
                  School Legacy &amp; 25 Years Ethos
                </Link>
                <Link to="/vision-mission" className="hover:text-amber-400 transition-colors">
                  Vision, Mission &amp; NEP 2020
                </Link>
                <Link to="/principals-desk" className="hover:text-amber-400 transition-colors">
                  Principal's Desk Address
                </Link>
                <Link to="/directors-desk" className="hover:text-amber-400 transition-colors">
                  Director's Strategic Vision
                </Link>
                <Link to="/facilities" className="hover:text-amber-400 transition-colors">
                  12-Acre Campus &amp; Labs
                </Link>
                <Link to="/gallery" className="hover:text-amber-400 transition-colors">
                  Campus Photo &amp; Video Gallery
                </Link>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Contact &amp; Admissions Helpdesk
                </Link>
              </div>
            </div>

            {/* Column 3: Academics & Admissions (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                ACADEMICS &amp; ADMISSIONS
              </h4>
              <div className="flex flex-col space-y-2.5 text-xs text-slate-200 font-medium">
                <Link to="/admissions" className="hover:text-amber-400 transition-colors">
                  Admission 2026–27
                </Link>
                <button
                  onClick={onOpenAdmission}
                  className="text-left text-xs text-amber-300 hover:text-amber-400 font-bold transition-colors cursor-pointer"
                >
                  Apply Online Now &rarr;
                </button>
                <button
                  onClick={onOpenErp}
                  className="text-left text-xs text-slate-200 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Parent / Student ERP
                </button>
                <Link to="/downloads#curriculum" className="hover:text-amber-400 transition-colors">
                  CBSE Syllabi Download
                </Link>
                <Link to="/downloads#datesheet" className="hover:text-amber-400 transition-colors">
                  Examination Datesheet
                </Link>
                <Link to="/downloads" className="hover:text-amber-400 transition-colors">
                  Transfer Certificates
                </Link>
              </div>
            </div>

            {/* Column 4: Google Maps & Location Card (3 cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
                CAMPUS LOCATION
              </h4>
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-slate-800 h-[190px] group">
                <a
                  href="https://maps.google.com/?q=Radha+Krishna+Public+School+Indirapuram+Ghaziabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2.5 left-2.5 z-10 px-3 py-1 bg-white/95 hover:bg-white text-blue-900 text-[10px] font-bold rounded shadow-md flex items-center gap-1.5 transition-all hover:scale-105"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3 h-3 text-blue-800" />
                </a>

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

          {/* Social Links Row */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-xs sm:text-sm font-semibold text-slate-200">
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
              <span>Facebook</span>
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
              <span>YouTube</span>
            </a>

            <a
              href="https://wa.me/919310300600"
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

      {/* Embedded Accreditation & Board Partner Marquee */}
      <AccreditationBadges />

      {/* Bottom-most Copyright & Legal Bar */}
      <div className="bg-white border-t border-slate-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>© Copyright 2026 Radha Krishna Public School, Ghaziabad. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-slate-500">
              Designed &amp; Maintained by <span className="font-semibold text-slate-800">FloydSchool of Technologies</span>
            </p>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-full border border-slate-300 hover:border-slate-500 text-slate-700 flex items-center justify-center hover:bg-slate-100 transition-colors shadow-xs cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
