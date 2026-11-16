import React, { useState, useEffect } from 'react';
import { Globe, User, Search, Menu, X, ChevronRight, Phone, Bell, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO } from '../data/rkpsData';
import logoImg from '@assets/logo.jpg';

export default function Header({ onOpenAdmission, onOpenVisit, onToggleWhatsNew }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 0. Left-Docked Vertical Ribbon "WHAT'S NEW?" (Exact match of Screenshot Page 0) */}
      <button
        onClick={onToggleWhatsNew}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-[#071f4c] hover:bg-[#9b2335] text-white text-[11px] font-bold tracking-widest uppercase py-3.5 px-2 rounded-r-md shadow-2xl transition-all cursor-pointer flex items-center gap-1.5 [writing-mode:vertical-rl] rotate-180 border-r border-y border-white/20 hover:scale-105 active:scale-95"
        title="What's New at RKPS"
      >
        <Bell className="w-3.5 h-3.5 rotate-90 text-[#f0b429]" />
        <span>WHAT'S NEW?</span>
      </button>

      {/* 1. Global Header Container */}
      <header className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md text-[#2b2b2b] py-2.5' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent text-white py-3 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: School Crest Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Radha Krishna Public School" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#f0b429] object-cover shadow-sm group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className={`font-bebas text-lg sm:text-2xl tracking-wider leading-none transition-colors ${
                isScrolled ? 'text-[#0b2a63]' : 'text-white'
              }`}>
                RADHA KRISHNA PUBLIC SCHOOL
              </span>
              <span className={`text-[10px] sm:text-xs font-medium tracking-wide uppercase transition-colors ${
                isScrolled ? 'text-[#9b2335]' : 'text-[#f0b429]'
              }`}>
                Est. 2004 • CBSE Affiliation #2132212
              </span>
            </div>
          </a>

          {/* Right Action Icons & Menu Button (Matching Screenshot Page 0) */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Portals Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setPortalsOpen(!portalsOpen)}
                className={`flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full transition-all border ${
                  isScrolled
                    ? 'border-slate-200 text-[#0b2a63] hover:bg-slate-50'
                    : 'border-white/30 text-white hover:bg-white/10'
                }`}
              >
                <User className="w-3.5 h-3.5 text-[#f0b429]" />
                <span>PORTALS</span>
              </button>

              {portalsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-[#2b2b2b] rounded-xl shadow-2xl py-2 border border-slate-100 z-50 animate-fadeIn">
                  <a href="#erp" className="block px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-[#0b2a63]">ERP Login</a>
                  <a href="#student" className="block px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-[#0b2a63]">Student Login</a>
                  <a href="#mobile-app" className="block px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-[#0b2a63]">Mobile App</a>
                  <a href="#seva" className="block px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-[#0b2a63]">SEVA Portal</a>
                </div>
              )}
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2 rounded-full transition-all border ${
                isScrolled
                  ? 'border-slate-200 text-[#0b2a63] hover:bg-slate-50'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              title="Search Site"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Apply Now Quick Action Pill */}
            <button
              onClick={onOpenAdmission}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#9b2335] hover:bg-[#7a1f2b] text-white text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 active:scale-95 shadow-md"
            >
              <span>APPLY NOW</span>
            </button>

            {/* Menu Trigger Button with Circular Border (Exact match of Screenshot Page 0) */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-2 pl-3 pr-2 py-1 rounded-full border transition-all ${
                isScrolled
                  ? 'border-[#0b2a63] text-[#0b2a63] hover:bg-[#0b2a63]/5'
                  : 'border-white/40 text-white hover:bg-white/10'
              }`}
            >
              <span className="text-xs font-bold tracking-wider uppercase">MENU</span>
              <span className="w-7 h-7 rounded-full bg-[#0b2a63] text-white flex items-center justify-center">
                <Menu className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* Search Bar Popdown */}
        {searchOpen && (
          <div className="bg-white text-[#2b2b2b] border-t border-slate-100 shadow-xl py-3 px-4 animate-slideDown">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search curriculum, faculty, admissions, datesheet..."
                className="w-full text-sm outline-none bg-transparent placeholder-slate-400"
                autoFocus
              />
              <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Full-Screen SAS-Style Navigation Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-md bg-[#071f4c] text-white h-full shadow-2xl flex flex-col p-6 sm:p-8 overflow-y-auto animate-slideInRight">
            
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-full border border-[#f0b429]" />
                <span className="font-bebas text-xl tracking-wider text-white">RADHA KRISHNA PUBLIC SCHOOL</span>
              </div>
              <button 
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links Categorized */}
            <nav className="py-6 space-y-4 flex-1">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#f0b429] uppercase">Explore RKPS</span>
                <ul className="mt-2 space-y-2">
                  <li><a href="#about" onClick={() => setMenuOpen(false)} className="block text-lg font-bebas tracking-wide hover:text-[#f0b429]">ABOUT OUR SCHOOL</a></li>
                  <li><a href="#pillars" onClick={() => setMenuOpen(false)} className="block text-lg font-bebas tracking-wide hover:text-[#f0b429]">THE RKPS WAY</a></li>
                  <li><a href="#why-choose" onClick={() => setMenuOpen(false)} className="block text-lg font-bebas tracking-wide hover:text-[#f0b429]">WHY FAMILIES CHOOSE RKPS</a></li>
                  <li><a href="#stages" onClick={() => setMenuOpen(false)} className="block text-lg font-bebas tracking-wide hover:text-[#f0b429]">LEARNING AT EVERY STAGE</a></li>
                  <li><a href="#beyond" onClick={() => setMenuOpen(false)} className="block text-lg font-bebas tracking-wide hover:text-[#f0b429]">BEYOND THE CLASSROOM</a></li>
                  <li><a href="#future" onClick={() => setMenuOpen(false)} className="block text-lg font-bebas tracking-wide hover:text-[#f0b429]">PREPARED FOR THE FUTURE</a></li>
                  <li><a href="#life" onClick={() => setMenuOpen(false)} className="block text-lg font-bebas tracking-wide hover:text-[#f0b429]">LIFE AT RKPS</a></li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] font-bold tracking-widest text-[#f0b429] uppercase">Admissions & Portals</span>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => { setMenuOpen(false); onOpenAdmission(); }}
                    className="py-2.5 px-3 rounded-lg bg-[#9b2335] hover:bg-[#7a1f2b] text-white text-xs font-bold uppercase tracking-wider text-center"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={() => { setMenuOpen(false); onOpenVisit(); }}
                    className="py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider text-center border border-white/20"
                  >
                    Book a Visit
                  </button>
                </div>
              </div>
            </nav>

            {/* Footer in Drawer */}
            <div className="pt-4 border-t border-white/10 text-xs text-white/60 space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#f0b429]" />
                <span>+91 9810624925 / 9718080400</span>
              </div>
              <p>NH-9, Lal Kuan & Sector-11, Pratap Vihar, Ghaziabad</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
