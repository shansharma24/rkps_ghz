import React, { useState } from 'react';
import { Menu, X, ChevronDown, BookOpen, FlaskConical, Trophy, GraduationCap, FileText, CalendarDays, Award, Compass, Sparkles, Building2, Users, ArrowRight, PhoneCall, Phone, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenEnquiry, onOpenAdmission, onOpenVisitUs, onOpenErp }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-10 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-20">

          {/* School Crest & Institutional Identity (Always single-line, zero wrap) */}
          <Link to="/" className="flex items-center space-x-3 shrink-0 whitespace-nowrap group py-1">
            <div className="relative shrink-0">
              <img
                src="/logo.jpg"
                alt="Radha Krishna Public School Emblem"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full shadow-xs ring-1 ring-slate-200/80 p-0.5 bg-white group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuC2-TPEUQZ9h0os6mJGUUmAQK9NHUST-qvAs7zjQE2Xp2UO_zNysV8iDeofSJVdLDQyW55Qbz2rrskUQdB9U9bBsHhdIvzD9s74kdSPYh05VM4_jo5RzHIF9mS06iiItFordMlhlr_sTzZI2Kjm5PUMRYDLMEH0L92iPMDYUBRcZD-tfUUCv2RcHhMjL9VYDBr7I2U22BHjcuqMNoZRWEb7KR-N2pWV03zZuRCmNU-Y2wS6N-EJduE8tMG--SiE_61LyY4";
                }}
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-amber-500 rounded-full border border-white flex items-center justify-center text-[7px] font-bold text-slate-900 shadow-xs">
                ★
              </span>
            </div>
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-900 transition-colors heading-serif leading-none whitespace-nowrap">
                RADHA KRISHNA
              </span>
              <div className="flex items-center gap-1.5 whitespace-nowrap mt-1">
                <span className="text-[10px] sm:text-[11px] font-extrabold tracking-widest text-blue-900 uppercase font-sans whitespace-nowrap">
                  PUBLIC SCHOOL
                </span>
                <span className="h-2.5 w-px bg-slate-300"></span>
                <span className="text-[9px] sm:text-[10px] text-amber-600 font-bold uppercase tracking-wider whitespace-nowrap">
                  GHAZIABAD
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-3.5 xl:space-x-6 text-[13px] xl:text-sm font-semibold text-slate-700 whitespace-nowrap">
            <Link
              to="/"
              className={`transition-colors py-1 ${isActive('/')
                  ? 'text-blue-900 font-bold border-b-2 border-amber-500'
                  : 'hover:text-blue-900'
                }`}
            >
              Home
            </Link>

            {/* About Us Mega-Menu */}
            <div className="relative group py-2">
              <span className={`flex items-center gap-1.5 transition-colors cursor-pointer ${['/school-legacy', '/vision-mission', '/principals-desk', '/directors-desk'].includes(location.pathname)
                  ? 'text-blue-900 font-bold border-b-2 border-amber-500 pb-0.5'
                  : 'hover:text-blue-900'
                }`}>
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-900 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white shadow-2xl rounded-2xl py-3 px-2 border border-slate-100 z-50 animate-fadeIn">
                <Link
                  to="/school-legacy"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-semibold transition-colors"
                >
                  <Building2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-slate-900 font-bold">School Legacy &amp; Ethos</div>
                    <div className="text-[10px] text-slate-400 font-normal">25-year silver jubilee journey</div>
                  </div>
                </Link>
                <Link
                  to="/vision-mission"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-semibold transition-colors"
                >
                  <Compass className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-slate-900 font-bold">Vision &amp; Mission</div>
                    <div className="text-[10px] text-slate-400 font-normal">Core values &amp; NEP 2020 ethos</div>
                  </div>
                </Link>
                <Link
                  to="/principals-desk"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-semibold transition-colors"
                >
                  <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
                  <div>
                    <div className="text-slate-900 font-bold">Principal's Desk</div>
                    <div className="text-[10px] text-slate-400 font-normal">Dr. Rupa Tyagi's message</div>
                  </div>
                </Link>
                <Link
                  to="/directors-desk"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-semibold transition-colors"
                >
                  <Award className="w-4 h-4 text-rose-500 shrink-0" />
                  <div>
                    <div className="text-slate-900 font-bold">Director's Desk</div>
                    <div className="text-[10px] text-slate-400 font-normal">Dr. Satish Yadav's vision</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Admission Mega-Menu */}
            <div className="relative group py-2">
              <span className={`flex items-center gap-1.5 transition-colors cursor-pointer ${['/admissions'].includes(location.pathname)
                  ? 'text-blue-900 font-bold border-b-2 border-amber-500 pb-0.5'
                  : 'hover:text-blue-900'
                }`}>
                <span>Admissions</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-900 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white shadow-2xl rounded-2xl py-3 px-2 border border-slate-100 z-50 animate-fadeIn">
                <Link
                  to="/admissions"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-semibold transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                  <div>
                    <div className="text-slate-900 font-bold">Admission Process 2026–27</div>
                    <div className="text-[10px] text-slate-400 font-normal">Step-by-step admission roadmap</div>
                  </div>
                </Link>
                <button
                  onClick={onOpenAdmission}
                  className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-amber-50/70 text-slate-800 hover:text-amber-700 text-xs font-bold transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <div className="text-amber-950 font-bold">Apply Online (Instant Form)</div>
                    <div className="text-[10px] text-amber-600 font-normal">Direct online registration</div>
                  </div>
                </button>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-semibold transition-colors"
                >
                  <Users className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <div className="text-slate-900 font-bold">Enquiry &amp; Campus Tour</div>
                    <div className="text-[10px] text-slate-400 font-normal">Connect with admission officers</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Facilities Mega-Menu */}
            <div className="relative group py-2">
              <span className={`flex items-center gap-1.5 transition-colors cursor-pointer ${['/facilities'].includes(location.pathname)
                  ? 'text-blue-900 font-bold border-b-2 border-amber-500 pb-0.5'
                  : 'hover:text-blue-900'
                }`}>
                <span>Facilities</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-900 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white shadow-2xl rounded-2xl py-3 px-2 border border-slate-100 z-50 animate-fadeIn">
                <Link
                  to="/facilities#classrooms"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-medium"
                >
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  <span>Smart Classrooms</span>
                </Link>
                <Link
                  to="/facilities#labs"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-medium"
                >
                  <FlaskConical className="w-4 h-4 text-blue-500" />
                  <span>Science &amp; STEM Labs</span>
                </Link>
                <Link
                  to="/facilities#library"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-medium"
                >
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <span>Knowledge Library</span>
                </Link>
                <Link
                  to="/facilities#ground"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-medium"
                >
                  <Trophy className="w-4 h-4 text-emerald-500" />
                  <span>Olympic Sports Arena</span>
                </Link>
                <div className="border-t border-slate-100 mt-1.5 pt-1.5 px-2">
                  <Link
                    to="/facilities"
                    className="block text-[11px] text-blue-900 hover:text-amber-600 font-bold"
                  >
                    View All 12-Acre Infrastructure &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Downloads */}
            <div className="relative group py-2">
              <span className={`flex items-center gap-1.5 transition-colors cursor-pointer ${['/downloads'].includes(location.pathname)
                  ? 'text-blue-900 font-bold border-b-2 border-amber-500 pb-0.5'
                  : 'hover:text-blue-900'
                }`}>
                <span>Downloads</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-900 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-full hidden group-hover:block w-56 bg-white shadow-2xl rounded-2xl py-3 px-2 border border-slate-100 z-50 animate-fadeIn">
                <Link
                  to="/downloads#curriculum"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-medium"
                >
                  <FileText className="w-4 h-4 text-blue-500" />
                  <span>CBSE Curriculum</span>
                </Link>
                <Link
                  to="/downloads#datesheet"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-900 text-xs font-medium"
                >
                  <CalendarDays className="w-4 h-4 text-amber-500" />
                  <span>Exam Datesheet</span>
                </Link>
                <div className="border-t border-slate-100 mt-1.5 pt-1.5 px-2">
                  <Link
                    to="/downloads"
                    className="block text-[11px] text-blue-900 hover:text-amber-600 font-bold"
                  >
                    All Academic Downloads &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/gallery"
              className={`transition-colors py-1 ${isActive('/gallery')
                  ? 'text-blue-900 font-bold border-b-2 border-amber-500'
                  : 'hover:text-blue-900'
                }`}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className={`transition-colors py-1 ${isActive('/contact')
                  ? 'text-blue-900 font-bold border-b-2 border-amber-500'
                  : 'hover:text-blue-900'
                }`}
            >
              Contact
            </Link>
          </div>

          {/* Right Action: Pathways Style Action Suite ([LET'S TALK] [VISIT US] [👤 | ☰]) */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Let's Talk Button (Image 3) */}
            <button
              onClick={onOpenEnquiry}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>LET'S TALK</span>
            </button>

            {/* Visit Us Button (Image 3) */}
            <button
              onClick={onOpenVisitUs}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg bg-[#008080] hover:bg-[#006666] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>VISIT US</span>
            </button>

            {/* User Profile / Portal Icon (Image 3) */}
            <button
              onClick={onOpenErp}
              className="p-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-blue-950 transition-colors cursor-pointer"
              title="Parent & Student Portal"
              aria-label="Parent and Student Portal"
            >
              <User className="w-5 h-5 text-slate-800" />
            </button>

            {/* Vertical Divider (Image 3) */}
            <span className="h-6 w-px bg-slate-300 hidden sm:inline-block" />

            {/* Mobile / Full menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-4 pb-8 shadow-2xl space-y-3 max-h-[85vh] overflow-y-auto animate-slideDown">
          {/* Quick Pathways CTAs on Mobile */}
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="py-2.5 px-3 rounded-lg bg-[#008080] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>LET'S TALK</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenVisitUs) onOpenVisitUs();
              }}
              className="py-2.5 px-3 rounded-lg bg-[#008080] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>VISIT US</span>
            </button>
          </div>
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-bold text-blue-900 border-b border-slate-100"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => toggleDropdown('about')}
              className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-slate-800 border-b border-slate-100"
            >
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'about' && (
              <div className="pl-3 py-2 space-y-2 bg-slate-50 rounded-xl my-1.5">
                <Link to="/school-legacy" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">School Legacy &amp; Ethos</Link>
                <Link to="/vision-mission" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Vision &amp; Mission</Link>
                <Link to="/principals-desk" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Principal's Desk</Link>
                <Link to="/directors-desk" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Director's Desk</Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown('admission')}
              className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-slate-800 border-b border-slate-100"
            >
              <span>Admissions</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'admission' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'admission' && (
              <div className="pl-3 py-2 space-y-2 bg-slate-50 rounded-xl my-1.5">
                <Link to="/admissions" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Admission Process 2026–27</Link>
                <button onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }} className="block text-left text-xs text-amber-700 font-bold py-1">Apply Online (Instant Form)</button>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Enquiry &amp; Campus Tour</Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown('facilities')}
              className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-slate-800 border-b border-slate-100"
            >
              <span>Facilities</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'facilities' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'facilities' && (
              <div className="pl-3 py-2 space-y-2 bg-slate-50 rounded-xl my-1.5">
                <Link to="/facilities#classrooms" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Smart Classrooms</Link>
                <Link to="/facilities#labs" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Science &amp; STEM Labs</Link>
                <Link to="/facilities#library" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Knowledge Library</Link>
                <Link to="/facilities#ground" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Sports Complex</Link>
                <Link to="/facilities" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-blue-900 font-bold py-1">View All Facilities &rarr;</Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown('downloads')}
              className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-slate-800 border-b border-slate-100"
            >
              <span>Downloads</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'downloads' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'downloads' && (
              <div className="pl-3 py-2 space-y-2 bg-slate-50 rounded-xl my-1.5">
                <Link to="/downloads#curriculum" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Curriculum</Link>
                <Link to="/downloads#datesheet" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-slate-600 py-1 font-medium">Datesheet</Link>
                <Link to="/downloads" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-blue-900 font-bold py-1">View All Downloads &rarr;</Link>
              </div>
            )}
          </div>

          <Link
            to="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-semibold text-slate-800 border-b border-slate-100"
          >
            Gallery
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-sm font-semibold text-slate-800 border-b border-slate-100"
          >
            Contact
          </Link>

          <div className="pt-4 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }}
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-black uppercase tracking-wider text-center shadow"
            >
              Apply for Admission 2026–27
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}
              className="w-full py-3 border-2 border-blue-950 text-blue-950 rounded-xl text-xs font-black uppercase tracking-wider text-center"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
