import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

// Authentic High-Resolution Campus & Facility Images from local repository
import exteriorImg from '../assets/Radha Krishna Public School Exterior.png';
import slide2Img from '../assets/slides/2.png';
import studentsImg from '../assets/admissions_students.png';
import slide3Img from '../assets/slides/3.png';
import slide4Img from '../assets/slides/4.png';
import slide5Img from '../assets/slides/5.png';

const facilityCollageItems = [
  {
    id: 'campus',
    title: 'Main Campus & Foundation Wing',
    category: 'Flagship Campus',
    badgeColor: 'bg-amber-500 text-slate-950 font-extrabold',
    desc: 'Spacious green academic grounds, smart administrative facilities, and nurturing foundational learning environment.',
    features: ['Lush Green Campus', 'Architectural Distinction', 'Senior Secondary Hub'],
    image: exteriorImg,
    link: '/facilities#classrooms',
    gridClass: 'lg:col-span-7 lg:row-span-2 min-h-[360px] sm:min-h-[420px] lg:min-h-[490px]'
  },
  {
    id: 'library',
    title: 'Central Library & Digital Hub',
    category: 'Knowledge Repository',
    badgeColor: 'bg-blue-600 text-white font-bold',
    desc: '20,000+ literary volumes, high-speed digital research terminals, and collaborative study alcoves.',
    features: ['20,000+ Books', 'Digital Catalog', 'Cyber Terminals'],
    image: slide2Img,
    link: '/facilities#library',
    gridClass: 'lg:col-span-5 min-h-[220px] sm:min-h-[235px]'
  },
  {
    id: 'scholars',
    title: 'Senior Academic Wing',
    category: 'Academic Distinction',
    badgeColor: 'bg-emerald-600 text-white font-bold',
    desc: 'Multimedia smart classrooms, dedicated CBSE distinction mentorship, and advanced experimental science wings.',
    features: ['Smart Classrooms', 'CBSE Distinction', 'Expert Mentors'],
    image: studentsImg,
    link: '/facilities#classrooms',
    gridClass: 'lg:col-span-5 min-h-[220px] sm:min-h-[235px]'
  },
  {
    id: 'stem',
    title: 'Robotics & STEM Innovation Lab',
    category: 'Future-Ready STEM',
    badgeColor: 'bg-indigo-600 text-white font-bold',
    desc: 'Hands-on robotics kits, coding stations, 3D prototyping models, and interactive science discovery apparatus.',
    features: ['Robotics Kits', 'Coding Workstations', '3D Science Kits'],
    image: slide3Img,
    link: '/facilities#labs',
    gridClass: 'lg:col-span-4 min-h-[250px] sm:min-h-[280px]'
  },
  {
    id: 'sports',
    title: 'Olympic Sports Arena & Turf',
    category: 'Sports Excellence',
    badgeColor: 'bg-amber-600 text-white font-bold',
    desc: 'Cricket turf, synthetic badminton and basketball courts, athletics field, and martial arts ring.',
    features: ['Cricket Practice Turf', 'Basketball Arena', 'Badminton Academy'],
    image: slide4Img,
    link: '/facilities#ground',
    gridClass: 'lg:col-span-4 min-h-[250px] sm:min-h-[280px]'
  },
  {
    id: 'auditorium',
    title: 'Performing Arts Auditorium',
    category: 'Cultural Center',
    badgeColor: 'bg-purple-600 text-white font-bold',
    desc: 'Acoustically engineered amphitheater for morning assemblies, musical theatre, annual galas, and debates.',
    features: ['Surround Audio System', 'Theatrical Stage', 'Amphitheater Seating'],
    image: slide5Img,
    link: '/facilities#auditorium',
    gridClass: 'lg:col-span-4 min-h-[250px] sm:min-h-[280px]'
  }
];

export default function Facilities() {
  const [activeId, setActiveId] = useState('campus');

  return (
    <section 
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 text-slate-800 relative overflow-hidden" 
      data-purpose="facilities-collage" 
      id="facilities"
    >
      <div className="max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title and Highlights */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span>World-Class Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1E48] tracking-tight heading-serif">
              Campus &amp; Facilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl font-medium">
              Explore our modern academic wings, research laboratories, athletics arena, and central library through our campus collage.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            <span className="bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-slate-700 flex items-center gap-1.5 border border-slate-200/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Lush Green Campus
            </span>
            <span className="bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-slate-700 flex items-center gap-1.5 border border-slate-200/60">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Smart Classrooms
            </span>
            <span className="bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full shadow-xs text-slate-700 flex items-center gap-1.5 border border-slate-200/60">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Olympic Arena
            </span>
            <Link
              to="/facilities"
              className="px-3.5 py-1.5 rounded-full bg-blue-950 hover:bg-blue-900 text-white font-bold transition-all flex items-center gap-1 shadow-sm"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Dynamic Bento Photo Collage with Accordion Interaction & Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          {facilityCollageItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 transform ${item.gridClass} ${
                  isActive 
                    ? 'ring-2 ring-amber-400 shadow-[0_20px_50px_rgba(11,30,72,0.45)] scale-[1.01] z-20' 
                    : 'ring-1 ring-white/30 shadow-md hover:ring-amber-400/60 hover:shadow-xl hover:scale-[1.008]'
                }`}
                tabIndex={0}
                role="button"
                aria-label={item.title}
              >
                {/* Background Image from Local Folder with Parallax / Smooth Zoom Effect */}
                <img
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out select-none pointer-events-none ${
                    isActive ? 'scale-110 filter brightness-[0.98]' : 'scale-100 group-hover:scale-105 filter brightness-[0.85]'
                  }`}
                />

                {/* Ambient Deep Navy Gradient Overlay */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/20 transition-opacity duration-500 pointer-events-none ${
                    isActive ? 'opacity-65' : 'opacity-85 group-hover:opacity-75'
                  }`} 
                />

                {/* Subtle Amber Edge Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/40 via-transparent to-amber-500/10 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs uppercase tracking-wider backdrop-blur-md shadow-md transition-all duration-300 ${item.badgeColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Top Right Quick Link Indicator */}
                <Link
                  to={item.link}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 w-8 h-8 rounded-full bg-slate-900/60 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:scale-110 shadow"
                  title="Explore Details"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                {/* Bottom Content Area with Signature Accordion Glowing Amber Bar */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 z-10 flex flex-col justify-end bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
                  <div className="flex items-start gap-3">
                    {/* Signature Accordion Glowing Amber Bar */}
                    <span 
                      className={`w-1 rounded-full bg-amber-400 shrink-0 transition-all duration-300 ${
                        isActive 
                          ? 'h-8 sm:h-9 shadow-[0_0_16px_rgba(245,158,11,1)] bg-amber-300' 
                          : 'h-5 sm:h-6 shadow-[0_0_8px_rgba(245,158,11,0.6)] group-hover:h-8'
                      }`} 
                    />

                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-white heading-serif tracking-tight drop-shadow-md">
                        {item.title}
                      </h3>

                      <p className={`text-xs sm:text-sm text-slate-200 mt-1 font-medium transition-all duration-300 leading-relaxed ${
                        isActive ? 'line-clamp-2 opacity-100' : 'line-clamp-1 group-hover:line-clamp-2 opacity-90'
                      }`}>
                        {item.desc}
                      </p>

                      {/* Feature Chips that smoothly reveal */}
                      <div className={`flex flex-wrap items-center gap-1.5 sm:gap-2 mt-2.5 transition-all duration-300 ${
                        isActive ? 'opacity-100 max-h-16' : 'opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-16'
                      }`}>
                        {item.features.map((feat, fIdx) => (
                          <span 
                            key={fIdx} 
                            className="text-[9px] sm:text-[10px] font-semibold bg-white/20 hover:bg-white/30 text-white backdrop-blur-md px-2 sm:px-2.5 py-0.5 rounded-full border border-white/20 flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-2.5 h-2.5 text-amber-300" />
                            <span>{feat}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
