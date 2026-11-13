import React, { useState } from 'react';
import { 
  Building2, BookOpen, Trophy, Cpu, Music, ShieldCheck, CheckCircle2, 
  ArrowRight, ArrowUpRight, X, Compass, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

import exteriorImg from '../assets/Radha Krishna Public School Exterior.png';
import slide3Img from '../assets/slides/3.png';
import slide4Img from '../assets/slides/4.png';

const facilityBentoItems = [
  {
    id: 'campus',
    title: 'Main Campus & Foundation Wing',
    subtitle: 'Spacious 12-acre verdant academic grounds, smart administrative facilities, and nurturing foundational learning spaces.',
    tag: 'Flagship Campus',
    category: 'academic',
    tagColor: 'bg-[#f59e0b] text-slate-950 font-black',
    image: exteriorImg,
    span: 'lg:col-span-2 lg:row-span-2 min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]',
    icon: Building2,
    badgeFeatures: ['12-Acre Campus', 'Estd. 1999', 'CCTV Secured'],
    details: 'Spanning 12 verdant acres in Ghaziabad, our flagship campus houses architect-designed academic wings, sprawling sports grounds, multimedia smart classrooms, and specialized research blocks for holistic development from Pre-Nursery to Grade XII.'
  },
  {
    id: 'library',
    title: 'Central Library & Digital Hub',
    subtitle: '20,000+ literary volumes, high-speed digital research terminals, and quiet study carrels.',
    tag: 'Knowledge Repository',
    category: 'library',
    tagColor: 'bg-blue-600 text-white font-bold',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner2.jpg',
    span: 'lg:col-span-1 min-h-[230px] sm:min-h-[240px]',
    icon: BookOpen,
    badgeFeatures: ['20,000+ Volumes', 'Digital Carrels'],
    details: 'Equipped with over 20,000 reference volumes, international scholastic journals, digital carrels, and high-speed internet terminals fostering independent inquiry.'
  },
  {
    id: 'senior-wing',
    title: 'Senior Academic Wing',
    subtitle: 'Multimedia smart classrooms, dedicated CBSE distinction mentorship, and advanced experimental science wings.',
    tag: 'Academic Distinction',
    category: 'academic',
    tagColor: 'bg-emerald-600 text-white font-bold',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner3.jpg',
    span: 'lg:col-span-1 min-h-[230px] sm:min-h-[240px]',
    icon: ShieldCheck,
    isFeatured: true, // Signature amber border from reference design
    badgeFeatures: ['Smart Classrooms', 'CBSE Distinction', 'Expert Mentors'],
    details: 'Dedicated collegiate wings for Science, Commerce, and Humanities with integrated preparation for IIT-JEE, NEET, and CUET under seasoned senior faculty.'
  },
  {
    id: 'stem-lab',
    title: 'Robotics & STEM Innovation Lab',
    subtitle: 'Hands-on robotics kits, coding stations, 3D prototyping, and IoT experimentation benches.',
    tag: 'Future-Ready STEM',
    category: 'stem',
    tagColor: 'bg-indigo-600 text-white font-bold',
    image: slide3Img,
    span: 'lg:col-span-1 min-h-[240px] sm:min-h-[260px]',
    icon: Cpu,
    badgeFeatures: ['Atal Tinkering', 'Robotics Kits', '3D Prototyping'],
    details: 'State-of-the-art innovation lab featuring Arduino microcontrollers, ESP32 modules, 3D printing stations, and algorithmic programming setups.'
  },
  {
    id: 'sports',
    title: 'Olympic Sports Arena & Turf',
    subtitle: 'Cricket turf, synthetic badminton, basketball courts, and NIS-certified athletics coaching.',
    tag: 'Sports Excellence',
    category: 'sports',
    tagColor: 'bg-amber-500 text-slate-950 font-black',
    image: slide4Img,
    span: 'lg:col-span-1 min-h-[240px] sm:min-h-[260px]',
    icon: Trophy,
    badgeFeatures: ['Cricket Turf', 'Basketball Academy', 'NIS Mentors'],
    details: 'Sprawling athletic facilities including professional cricket coaching nets, synthetic basketball arena, badminton courts, and track & field training under NIS-certified instructors.'
  },
  {
    id: 'arts',
    title: 'Performing Arts Auditorium',
    subtitle: 'Acoustically engineered amphitheater for morning assemblies, theatrical drama, and annual symposia.',
    tag: 'Cultural Center',
    category: 'arts',
    tagColor: 'bg-purple-600 text-white font-bold',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner1.jpg',
    span: 'lg:col-span-1 min-h-[240px] sm:min-h-[260px]',
    icon: Music,
    badgeFeatures: ['1,200 Capacity', 'Acoustic Sound', 'Grand Stage'],
    details: '1,200-seat multi-tier amphitheater engineered for theatrical performances, Indian classical dance, vocal music recitals, and national symposia.'
  }
];

export default function FacilitiesPage({ onOpenAdmission, onOpenVirtualTour }) {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? facilityBentoItems 
    : facilityBentoItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-[#fff6f8] text-slate-800 min-h-screen relative overflow-hidden">
      
      {/* Signature Staggered Polka-Dot Canvas Pattern (Ravensbourne Reference) */}
      <div 
        className="absolute inset-0 pointer-events-none bg-ravensbourne-dots"
      />

      {/* Top-Right Magenta/Rose Curved Accent Arc */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 pointer-events-none overflow-hidden z-0">
        <div 
          className="w-80 sm:w-[420px] md:w-[480px] h-80 sm:h-[420px] md:h-[480px] -top-28 sm:-top-36 md:-top-40 -right-28 sm:-right-36 md:-right-40 absolute rounded-full bg-gradient-to-bl from-[#e11d48] via-[#e11d48] to-[#be185d] opacity-90 shadow-md"
        />
      </div>

      {/* 1. Header Section (Clean Institutional Architecture - No Pill) */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-medium">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500">Campus</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-amber-600 font-bold">Facilities</span>
        </nav>

        {/* Clean Kicker */}
        <p className="text-xs font-black uppercase tracking-widest text-amber-600 mb-2 font-mono">
          CAMPUS INFRASTRUCTURE // 12-ACRE VERDANT GROUNDS
        </p>

        {/* Giant Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-rose-200/80">
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black heading-serif text-[#0B1E48] tracking-tight leading-tight">
              Campus &amp; Facilities
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-3 font-medium leading-relaxed">
              Explore our 12-acre campus featuring modern academic wings, advanced STEM research laboratories, championship athletics arena, and grand central library.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-rose-200/80 text-xs font-bold text-slate-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              12-Acre Green Campus
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-rose-200/80 text-xs font-bold text-slate-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              Smart Classrooms
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-rose-200/80 text-xs font-bold text-slate-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Olympic Sports Arena
            </span>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#0B1E48] text-white shadow-md'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
            }`}
          >
            All Facilities ({facilityBentoItems.length})
          </button>
          <button
            onClick={() => setActiveCategory('academic')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'academic'
                ? 'bg-[#0B1E48] text-white shadow-md'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
            }`}
          >
            Academic Wings
          </button>
          <button
            onClick={() => setActiveCategory('stem')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'stem'
                ? 'bg-[#0B1E48] text-white shadow-md'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
            }`}
          >
            STEM &amp; Robotics
          </button>
          <button
            onClick={() => setActiveCategory('sports')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'sports'
                ? 'bg-[#0B1E48] text-white shadow-md'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
            }`}
          >
            Sports &amp; Athletics
          </button>
          <button
            onClick={() => setActiveCategory('library')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'library'
                ? 'bg-[#0B1E48] text-white shadow-md'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
            }`}
          >
            Central Library
          </button>
          <button
            onClick={() => setActiveCategory('arts')}
            className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === 'arts'
                ? 'bg-[#0B1E48] text-white shadow-md'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs'
            }`}
          >
            Auditorium
          </button>
        </div>

      </section>

      {/* 2. Facilities Bento Grid (Matching Homepage Layout) */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedFacility(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 border ${
                  item.isFeatured ? 'border-[#f59e0b] ring-2 ring-[#f59e0b]/50' : 'border-slate-200/80 hover:border-slate-400'
                } ${item.span}`}
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Contrast Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                {/* Top Badge Strip */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${item.tagColor}`}>
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:rotate-45 group-hover:bg-[#f59e0b] group-hover:text-slate-950 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white z-10">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1.5 h-4 bg-amber-400 rounded-full" />
                    <h3 className="text-lg sm:text-xl font-bold heading-serif text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 line-clamp-2 font-normal leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Architectural Section Divider Line & Badge ─── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 relative z-10">
        <div className="relative flex items-center justify-center">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-rose-300 via-amber-400/80 to-transparent shadow-xs" />
          <div className="absolute px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-rose-200/90 shadow-[0_4px_20px_rgba(244,63,94,0.14)] flex items-center gap-2.5 text-xs font-black uppercase tracking-wider text-slate-800 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b] shadow-[0_0_8px_#f59e0b] animate-pulse" />
            <span className="text-slate-900 font-black">CAMPUS VISITS &amp; TOURS</span>
            <span className="text-rose-200 font-light">|</span>
            <span className="text-amber-600 font-black flex items-center gap-1.5">
              <span>EXPLORE TODAY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* 3. Campus Walkthrough CTA Banner */}
      <section className="pb-16 sm:pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-[#0B1E48] to-slate-950 text-white p-8 sm:p-12 lg:p-14 text-center relative overflow-hidden shadow-2xl border-t-2 border-t-amber-400/70 border-x border-b border-blue-900/40">
            
            <span className="inline-block text-xs uppercase font-black tracking-widest text-[#f59e0b] mb-2 font-mono">
              VISIT RADHA KRISHNA PUBLIC SCHOOL • ESTD. 1999
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black heading-serif mb-4 text-white">
              Experience Our 12-Acre Campus in Person
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
              Schedule a guided walkthrough with our admissions mentors to explore our smart classrooms, science labs, and athletic complexes.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenAdmission}
                className="px-8 py-3.5 rounded-xl bg-[#f59e0b] hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Apply for Admission 2026–27</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                Schedule Guided Tour
              </Link>

              {onOpenVirtualTour && (
                <button
                  onClick={onOpenVirtualTour}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>360° Virtual Tour</span>
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Facility Detail Lightbox Modal */}
      {selectedFacility && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedFacility(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Image */}
            <div className="relative h-60 sm:h-72 w-full bg-slate-950">
              <img 
                src={selectedFacility.image} 
                alt={selectedFacility.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <button 
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110 active:scale-90 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2 shadow-sm ${selectedFacility.tagColor}`}>
                  {selectedFacility.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black heading-serif text-white">
                  {selectedFacility.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5 bg-slate-50/50">
              <div>
                <h4 className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1.5">
                  Facility Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {selectedFacility.details}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2.5">
                  Key Infrastructure Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedFacility.badgeFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Campus tours available Monday to Saturday.
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedFacility(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedFacility(null);
                      if (onOpenAdmission) onOpenAdmission();
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0B1E48] hover:bg-[#f59e0b] hover:text-slate-950 text-white text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule Campus Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
