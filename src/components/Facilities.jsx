import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Building2, BookOpen, Trophy, Cpu, Music, ShieldCheck, CheckCircle2, X, Sparkles, MapPin } from 'lucide-react';

import exteriorImg from '../assets/Radha Krishna Public School Exterior.png';
import slide3Img from '../assets/slides/3.png';
import slide4Img from '../assets/slides/4.png';

const facilityCards = [
  {
    id: 'campus',
    title: 'Main Campus & Foundation Wing',
    subtitle: 'Spacious 12-acre verdant academic grounds, smart administrative facilities, and nurturing foundational learning spaces.',
    tag: 'Flagship Campus',
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
    tagColor: 'bg-amber-500 text-slate-950 font-black',
    image: slide4Img,
    span: 'lg:col-span-1 min-h-[240px] sm:min-h-[260px]',
    icon: Trophy,
    badgeFeatures: ['Cricket Turf', 'Basketball Academy', 'NIS Mentors'],
    details: 'Sprawling athletic facilities including professional cricket coaching nets, synthetic basketball arena, badminton courts, and track & field training.'
  },
  {
    id: 'arts',
    title: 'Performing Arts Auditorium',
    subtitle: 'Acoustically engineered amphitheater for morning assemblies, theatrical drama, and annual symposia.',
    tag: 'Cultural Center',
    tagColor: 'bg-purple-600 text-white font-bold',
    image: 'https://khaitanpublicschool.com/wp-content/uploads/2025/12/homeinner1.jpg',
    span: 'lg:col-span-1 min-h-[240px] sm:min-h-[260px]',
    icon: Music,
    badgeFeatures: ['1,200 Capacity', 'Acoustic Sound', 'Grand Stage'],
    details: '1,200-seat multi-tier amphitheater engineered for theatrical performances, Indian classical dance, vocal music recitals, and national symposia.'
  }
];

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState(null);

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-[#fff6f8] relative overflow-hidden border-b border-rose-100/80" 
      data-purpose="facilities-bento-grid" 
      id="facilities"
    >
      {/* 1. Signature Red/Rose Polka-Dot Pattern (Ravensbourne Style) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f43f5e 1.75px, transparent 1.75px)',
          backgroundSize: '22px 22px',
          opacity: 0.5
        }}
      />

      {/* 2. Top-Right Magenta/Rose Curved Corner Accent */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none overflow-hidden z-0">
        <div 
          className="w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] -top-24 sm:-top-32 md:-top-36 -right-24 sm:-right-32 md:-right-36 absolute rounded-full bg-gradient-to-bl from-[#e11d48] via-[#e11d48] to-[#be185d] opacity-90 shadow-md"
        />
      </div>

      {/* 3. Ambient Rose/Gold Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-rose-200/35 blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 relative z-10">
        
        {/* Header with Title and Highlights (Exact match from reference image) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B1E48] tracking-tight heading-serif">
              Campus &amp; Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl font-medium leading-relaxed">
              Explore our modern academic wings, research laboratories, athletics arena, and central library through our campus collage.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Lush Green Campus
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Smart Classrooms
            </span>
            <span className="bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Olympic Arena
            </span>
            <a
              href="#facilities"
              className="bg-[#0B1E48] hover:bg-[#f59e0b] text-white hover:text-slate-950 px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1 transition-all shadow-sm cursor-pointer ml-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bento Collage Grid (High-Resolution Real Photos with Catchy Polish) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {facilityCards.map((facility) => {
            return (
              <div
                key={facility.id}
                onClick={() => setSelectedFacility(facility)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-end p-5 sm:p-6 cursor-pointer ${
                  facility.isFeatured 
                    ? 'border-2 border-amber-400 shadow-xl ring-2 ring-amber-400/25' 
                    : 'border border-slate-200/90'
                } ${facility.span} hover:-translate-y-1.5`}
              >
                {/* Background Image with Zoom on Hover */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for readable white typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/45 to-slate-950/20 group-hover:via-slate-950/35 transition-all duration-300 pointer-events-none" />

                {/* Top Floating Badge & Arrow (Rotates on hover) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className={`text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ${facility.tagColor}`}>
                    {facility.tag}
                  </span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/40 group-hover:bg-[#f59e0b] group-hover:text-slate-950 backdrop-blur-md text-white flex items-center justify-center transition-all duration-300 border border-white/20 group-hover:border-amber-400 group-hover:rotate-45 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Text Content */}
                <div className="relative z-10 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-1 h-4 sm:h-5 bg-[#f59e0b] rounded-full inline-block shrink-0" />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold heading-serif tracking-tight text-white group-hover:text-amber-300 transition-colors">
                      {facility.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-xs text-slate-200/90 line-clamp-2 font-normal leading-relaxed pl-3 mb-2.5">
                    {facility.subtitle}
                  </p>

                  {/* Sub-Badges (Exact match for Senior Wing from Reference image) */}
                  {facility.badgeFeatures && facility.badgeFeatures.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pl-3 pt-1">
                      {facility.badgeFeatures.map((badge, idx) => (
                        <span 
                          key={idx}
                          className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-slate-900/70 backdrop-blur-xs text-slate-200 border border-white/10 font-medium"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

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
                  <a
                    href="#admissions"
                    onClick={() => setSelectedFacility(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0B1E48] hover:bg-[#f59e0b] hover:text-slate-950 text-white text-xs font-bold uppercase tracking-wider text-center transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule Campus Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
