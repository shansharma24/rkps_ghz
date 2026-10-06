import React from 'react';
import { ArrowUp, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ onOpenAdmission, onOpenErp }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900" data-purpose="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* School Crest & Mission Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Radha Krishna Public School Emblem"
                className="w-13 h-13 object-contain rounded-full bg-white p-0.5 shadow-md ring-2 ring-amber-400/30"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBoNJun0ExBXPheYHmnmnbC-ZF4P0JiDFLlmz8IQrVF7lZtdwaaTcoZ5dSeYkQey6prpW2-7fZSW1h0sOM26hsdItH1OZLvkLK9tf0w69Tg_013t54FONJP4iM2K97Df9dechedtYtIjiNILRiwu7x1lMOqahPRhyIwxT5C3CDVi1wXapzquJ_3UfNt1gkYlawZybCslVuYK4vXNjPNkExnLbDolVb3e1RV9cp3GQKMSGOzWfumFI7HIJ6CYaPprRNq1T8";
                }}
              />
              <div>
                <h3 className="text-sm font-extrabold text-white tracking-wider uppercase">
                  Radha Krishna Public School
                </h3>
                <p className="text-[10px] font-bold tracking-widest text-amber-400 uppercase">
                  Learn • Grow • Lead
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A progressive CBSE affiliated senior secondary institution committed to academic excellence, character building, cultural ethos, and holistic individual development in Ghaziabad.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-pink-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-900 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a className="hover:text-amber-400 transition-colors" href="#">Home</a></li>
              <li><a className="hover:text-amber-400 transition-colors" href="#about">About Us</a></li>
              <li><a className="hover:text-amber-400 transition-colors" href="#wall-of-fame">Academics</a></li>
              <li>
                <button onClick={onOpenAdmission} className="hover:text-amber-400 transition-colors text-left">
                  Admissions
                </button>
              </li>
              <li><a className="hover:text-amber-400 transition-colors" href="#facilities">Campus &amp; Facilities</a></li>
              <li><a className="hover:text-amber-400 transition-colors" href="#wall-of-fame">Gallery &amp; Toppers</a></li>
              <li><a className="hover:text-amber-400 transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Important Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Important Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={onOpenErp} className="hover:text-amber-400 transition-colors text-left">
                  Parent Portal
                </button>
              </li>
              <li>
                <button onClick={onOpenErp} className="hover:text-amber-400 transition-colors text-left">
                  Student Portal
                </button>
              </li>
              <li>
                <button onClick={onOpenErp} className="hover:text-amber-400 transition-colors text-left">
                  Staff Portal
                </button>
              </li>
              <li><a className="hover:text-amber-400 transition-colors" href="#facilities">Academic Calendar</a></li>
              <li><a className="hover:text-amber-400 transition-colors" href="#wall-of-fame">Notice Board</a></li>
              <li><a className="hover:text-amber-400 transition-colors" href="#contact">Mandatory Disclosure</a></li>
              <li><a className="hover:text-amber-400 transition-colors" href="#admissions">Downloads &amp; Syllabus</a></li>
            </ul>
          </div>

          {/* Contact Us Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Contact Us
            </h4>
            <div className="text-xs text-slate-400 space-y-2.5">
              <p className="flex items-start gap-2">
                <span className="text-amber-400 text-sm leading-none mt-0.5">📍</span>
                <span>Institutional Area, Sector 12, Indirapuram, Ghaziabad, Uttar Pradesh</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400 text-sm leading-none">📞</span>
                <span>+91 120-2800000 / +91 9876543210</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-amber-400 text-sm leading-none">✉️</span>
                <span>info@rkpschool.edu.in</span>
              </p>
            </div>
            
            <div className="pt-3">
              <span className="inline-block px-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-[11px] font-mono font-semibold text-amber-400">
                CBSE Affiliation No: 2130572
              </span>
            </div>
          </div>

        </div>

        {/* Sub-Footer / Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Radha Krishna Public School, Ghaziabad. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-6">
            <a className="hover:underline hover:text-slate-400" href="#">Privacy Policy</a>
            <span>•</span>
            <a className="hover:underline hover:text-slate-400" href="#">Terms of Use</a>
            <span>•</span>
            <a className="hover:underline hover:text-slate-400" href="#">Sitemap</a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="w-9 h-9 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center justify-center transition-colors shadow-md hover:scale-105 active:scale-95"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
