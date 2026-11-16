import React from 'react';
import logoImg from '@assets/logo.jpg';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data/rkpsData';

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Footer({ onOpenAdmission, onOpenVisit }) {
  return (
    <footer className="bg-white text-[#2b2b2b] border-t border-slate-200 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Institutional Layout (Exact match of Screenshot Page 17) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-slate-200">
          
          {/* Column 1: School Identity & Social Media */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Radha Krishna Public School"
                className="w-14 h-14 rounded-full border-2 border-[#0b2a63] object-cover"
              />
              <div>
                <h3 className="font-bebas text-2xl sm:text-3xl text-[#0b2a63] tracking-wide uppercase leading-none">
                  RADHA KRISHNA PUBLIC SCHOOL
                </h3>
                <span className="text-xs text-[#9b2335] font-semibold tracking-wider uppercase">
                  GHAZIABAD • EST. 2004
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Affiliated to the Central Board of Secondary Education (CBSE), New Delhi. 
              Committed to holistic education, moral values, scientific inquiry, and athletic excellence.
            </p>

            {/* Social Icons (Exact match of Screenshot Page 17) */}
            <div className="mt-6 flex items-center gap-3 text-[#0b2a63]">
              <a
                href={SCHOOL_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0b2a63] hover:text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={SCHOOL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#9b2335] hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={SCHOOL_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                href={SCHOOL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0b2a63] hover:text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Column 2: CONTACT (Exact match of Screenshot Page 17 & plan.html) */}
          <div className="md:col-span-4">
            <h4 className="font-bebas text-2xl text-[#0b2a63] tracking-wider uppercase mb-4">
              CONTACT
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9b2335] shrink-0 mt-0.5" />
                <span>
                  <strong>Main Campus:</strong> NH-9, Lal Kuan, Ghaziabad, Uttar Pradesh 201001<br />
                  <strong>City Wing:</strong> Sector-11, Pratap Vihar, Ghaziabad 201009
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#9b2335] shrink-0" />
                <span>9810624925, 9315099591, 9310300600</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#9b2335] shrink-0" />
                <span>rkps.gzb@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 3: QUICK LINKS (Exact match of Screenshot Page 17 & plan.html) */}
          <div className="md:col-span-3">
            <h4 className="font-bebas text-2xl text-[#0b2a63] tracking-wider uppercase mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <button onClick={onOpenAdmission} className="hover:text-[#9b2335] transition-colors">
                  Online Admission (2026–27)
                </button>
              </li>
              <li>
                <button onClick={onOpenVisit} className="hover:text-[#9b2335] transition-colors">
                  Campus Walkthrough / Visit Us
                </button>
              </li>
              <li><a href="#erp" className="hover:text-[#0b2a63] transition-colors">ERP Portal Login</a></li>
              <li><a href="#student" className="hover:text-[#0b2a63] transition-colors">Student & Parent Portal</a></li>
              <li><a href="#mobile-app" className="hover:text-[#0b2a63] transition-colors">School Mobile Application</a></li>
              <li><a href="#seva" className="hover:text-[#0b2a63] transition-colors">SEVA Community Portal</a></li>
              <li><a href="#stages" className="hover:text-[#0b2a63] transition-colors">CBSE Curriculum & Stages</a></li>
              <li><a href="#contact" className="hover:text-[#0b2a63] transition-colors">Mandatory Public Disclosure</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row (Exact match of Screenshot Page 17) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            <span>CBSE Affiliation No: <strong>2132212 / 2130572</strong> • School Code: <strong>60883</strong></span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#sitemap" className="hover:underline">Sitemap</a>
            <span>•</span>
            <a href="#safeguarding" className="hover:underline">Child Safeguarding Policy</a>
            <span>•</span>
            <span>Copyright © 2026 Radha Krishna Public School. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
