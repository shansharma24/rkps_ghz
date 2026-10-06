import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Award, BookOpen, Calendar, Compass, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenEnquiry, onOpenAdmission }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* School Crest & Brand Identity with User Uploaded Logo */}
          <a href="#" className="flex items-center space-x-3.5 group">
            <div className="relative">
              <img 
                src="/logo.jpg" 
                alt="Radha Krishna Public School Emblem" 
                className="w-14 h-14 object-contain rounded-full shadow-md group-hover:scale-105 transition-transform duration-300 ring-2 ring-blue-900/10 p-0.5 bg-white"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuC2-TPEUQZ9h0os6mJGUUmAQK9NHUST-qvAs7zjQE2Xp2UO_zNysV8iDeofSJVdLDQyW55Qbz2rrskUQdB9U9bBsHhdIvzD9s74kdSPYh05VM4_jo5RzHIF9mS06iiItFordMlhlr_sTzZI2Kjm5PUMRYDLMEH0L92iPMDYUBRcZD-tfUUCv2RcHhMjL9VYDBr7I2U22BHjcuqMNoZRWEb7KR-N2pWV03zZuRCmNU-Y2wS6N-EJduE8tMG--SiE_61LyY4";
                }}
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-900 shadow">
                ★
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors">
                RADHA KRISHNA
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-widest text-blue-700 uppercase">
                  PUBLIC SCHOOL
                </span>
                <span className="h-3 w-px bg-slate-300"></span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  GHAZIABAD
                </span>
              </div>
            </div>
          </a>

          {/* Main Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-slate-700">
            <a href="#" className="text-blue-700 font-bold border-b-2 border-blue-700 pb-0.5 transition-colors">
              Home
            </a>

            {/* About Us Dropdown */}
            <div className="relative group py-2">
              <span className="hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer">
                About Us <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white shadow-xl rounded-xl py-2 border border-slate-100 z-50 animate-fadeIn">
                <a href="#about" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  School Legacy &amp; Ethos
                </a>
                <a href="#about" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  Vision &amp; Mission
                </a>
                <a href="#stats" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  Principal's Desk
                </a>
                <a href="#stats" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  School Highlights
                </a>
              </div>
            </div>

            {/* Admission Dropdown */}
            <div className="relative group py-2">
              <span className="hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer">
                Admission <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white shadow-xl rounded-xl py-2 border border-slate-100 z-50 animate-fadeIn">
                <button 
                  onClick={onOpenAdmission} 
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium"
                >
                  Admission Process 2025–26
                </button>
                <a href="#admissions" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  Fee Structure &amp; Guidelines
                </a>
                <a href="#contact" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  Online Enquiry Form
                </a>
              </div>
            </div>

            {/* Academic Dropdown */}
            <div className="relative group py-2">
              <span className="hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer">
                Academic <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white shadow-xl rounded-xl py-2 border border-slate-100 z-50 animate-fadeIn">
                <a href="#wall-of-fame" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  CBSE Curriculum &amp; Pedagogy
                </a>
                <a href="#wall-of-fame" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium text-amber-700 font-bold">
                  ★ Wall of Fame (Toppers)
                </a>
                <a href="#facilities" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  STEM &amp; Innovation Labs
                </a>
              </div>
            </div>

            {/* Happenings Dropdown */}
            <div className="relative group py-2">
              <span className="hover:text-blue-700 flex items-center gap-1 transition-colors cursor-pointer">
                Happenings <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white shadow-xl rounded-xl py-2 border border-slate-100 z-50 animate-fadeIn">
                <a href="#facilities" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  Events &amp; Competitions
                </a>
                <a href="#facilities" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  Annual Function &amp; MUN
                </a>
                <a href="#facilities" className="block px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 text-xs font-medium">
                  Sports Meet
                </a>
              </div>
            </div>

            <a href="#facilities" className="hover:text-blue-700 transition-colors">
              Facilities
            </a>

            <a href="#contact" className="hover:text-blue-700 transition-colors">
              Contact
            </a>
          </div>

          {/* Right Quick Action in Navbar */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={onOpenEnquiry}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white text-xs font-bold transition-all shadow-sm hover:shadow"
            >
              Enquire Now
            </button>

            {/* Mobile menu toggle button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-3 animate-slideDown">
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-bold text-blue-700 border-b border-slate-100"
          >
            Home
          </a>

          <div>
            <button 
              onClick={() => toggleDropdown('about')}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-700 border-b border-slate-100"
            >
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'about' && (
              <div className="pl-4 py-2 space-y-2 bg-slate-50 rounded-lg my-1">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1">School Legacy &amp; Ethos</a>
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1">Vision &amp; Mission</a>
                <a href="#stats" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1">Principal's Desk</a>
              </div>
            )}
          </div>

          <div>
            <button 
              onClick={() => toggleDropdown('admission')}
              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-slate-700 border-b border-slate-100"
            >
              <span>Admission</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'admission' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'admission' && (
              <div className="pl-4 py-2 space-y-2 bg-slate-50 rounded-lg my-1">
                <button onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }} className="block text-left text-xs text-slate-600 py-1">Admission Process</button>
                <a href="#admissions" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1">Fee Structure</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1">Online Enquiry</a>
              </div>
            )}
          </div>

          <a 
            href="#wall-of-fame" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 border-b border-slate-100"
          >
            Academic &amp; Wall of Fame
          </a>

          <a 
            href="#facilities" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 border-b border-slate-100"
          >
            Campus &amp; Facilities
          </a>

          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-700 border-b border-slate-100"
          >
            Contact &amp; Location
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }}
              className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-xs font-bold text-center"
            >
              Apply for Admission 2025–26
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}
              className="w-full py-2.5 border border-blue-900 text-blue-900 rounded-lg text-xs font-bold text-center"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
