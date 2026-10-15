import React from 'react';
import { Building2, BookOpen, Trophy, Cpu, CheckCircle2, GraduationCap, FlaskConical, Compass, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

// Authentic High-Resolution Campus & Facility Images from local folder
import exteriorImg from '../assets/Radha Krishna Public School Exterior.png';
import slide2Img from '../assets/slides/2.png';
import studentsImg from '../assets/admissions_students.png';
import slide3Img from '../assets/slides/3.png';
import slide4Img from '../assets/slides/4.png';
import slide5Img from '../assets/slides/5.png';

const facilityCards = [
  {
    id: 'classrooms',
    title: 'Smart Classrooms',
    category: 'Learning Environment',
    badgeColor: 'bg-indigo-600 text-white font-bold',
    image: exteriorImg,
    desc: 'Spacious, well-ventilated classrooms equipped with interactive display panels and ergonomic furniture designed for active and collaborative learning.',
    features: ['Interactive Display Panels', 'Ergonomic Student Seating', 'Well-Ventilated Classrooms', 'Digital Teaching Aids'],
    icon: GraduationCap
  },
  {
    id: 'labs',
    title: 'Science Laboratories',
    category: 'Science & Research',
    badgeColor: 'bg-blue-600 text-white font-bold',
    image: slide3Img,
    desc: 'Well-equipped Physics, Chemistry, and Biology laboratories compliant with CBSE curriculum and safety guidelines for hands-on experimental learning.',
    features: ['Physics Apparatus & Kits', 'Chemistry Safe Workbenches', 'Biology Microscope Stations', 'Standard Lab Safety Equipment'],
    icon: FlaskConical
  },
  {
    id: 'computer-lab',
    title: 'Computer & IT Laboratory',
    category: 'Digital Learning',
    badgeColor: 'bg-cyan-600 text-white font-bold',
    image: slide2Img,
    desc: 'Dedicated air-conditioned computer lab with networked desktop terminals, broadband internet, and educational software for digital literacy.',
    features: ['Networked Desktop Workstations', 'High-Speed Broadband Internet', 'IT & Coding Curriculum', 'Supervised Cyber-Safe Access'],
    icon: Monitor
  },
  {
    id: 'ground',
    title: 'Sports & Physical Education',
    category: 'Athletics & Fitness',
    badgeColor: 'bg-emerald-600 text-white font-bold',
    image: slide4Img,
    desc: 'Dedicated open playground and courts for cricket practice, football, volleyball, badminton, and structured physical education sessions.',
    features: ['Cricket Practice Nets', 'Badminton & Volleyball Courts', 'Football & Athletic Field', 'Yoga & Physical Training'],
    icon: Trophy
  },
  {
    id: 'library',
    title: 'School Library & Reading Room',
    category: 'Knowledge Repository',
    badgeColor: 'bg-amber-600 text-white font-bold',
    image: studentsImg,
    desc: 'Quiet reading environment featuring academic reference books, fiction, children’s literature, newspapers, and educational periodicals.',
    features: ['Curated Academic Books', 'Daily Newspapers & Periodicals', 'Children’s Story & Fiction Section', 'Quiet Study & Reading Area'],
    icon: BookOpen
  },
  {
    id: 'auditorium',
    title: 'Multipurpose Activity Hall',
    category: 'Performing Arts',
    badgeColor: 'bg-purple-600 text-white font-bold',
    image: slide5Img,
    desc: 'Multi-functional auditorium space with audio-visual equipment and stage for morning assemblies, cultural celebrations, debates, and workshops.',
    features: ['Stage & Presentation Setup', 'Sound & Audio-Visual System', 'Assembly & Function Seating', 'Co-Curricular Event Space'],
    icon: Building2
  }
];

export default function FacilitiesPage({ onOpenAdmission, onOpenVirtualTour }) {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Campus Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black heading-serif tracking-tight text-white leading-tight">
            Campus &amp; Facilities
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium">
            Our modern academic wings, science laboratories, computer lab, and sports grounds provide an enriching environment for holistic student development.
          </p>

          {/* Quick Facility Anchor Links */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6">
            <a
              href="#classrooms"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all"
            >
              🏫 Classrooms
            </a>
            <a
              href="#labs"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all"
            >
              🧪 Science Labs
            </a>
            <a
              href="#computer-lab"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all"
            >
              💻 Computer Lab
            </a>
            <a
              href="#ground"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all"
            >
              ⚽ Sports Ground
            </a>
            <a
              href="#library"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all"
            >
              📚 Library
            </a>
            <a
              href="#auditorium"
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-all"
            >
              🎭 Activity Hall
            </a>
          </div>
        </div>
      </section>

      {/* 3. Detailed Facilities Breakdown Cards (Frameless, Optimal Space Utilization) */}
      <section className="py-14 max-w-7xl 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Infrastructure Highlights</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] heading-serif mt-1">
            Engineered for Comprehensive Growth
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilityCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <div
                key={idx}
                id={card.id}
                className="scroll-mt-28 min-h-[380px] rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgba(11,30,72,0.12)] hover:shadow-[0_20px_50px_rgba(11,30,72,0.3)] transition-all duration-500 relative overflow-hidden group hover:-translate-y-1.5 flex flex-col justify-between p-6 sm:p-7 text-white border border-white/20"
              >
                {/* Background Image from Folder with Parallax/Smooth Zoom */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.88] select-none"
                />

                {/* Ambient Deep Navy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/30 transition-opacity duration-500 group-hover:opacity-75 pointer-events-none" />

                {/* Subtle Amber Edge Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-amber-500/10 pointer-events-none" />

                {/* Card Top: Category Badge and Icon */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <span className={`text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-md backdrop-blur-md ${card.badgeColor}`}>
                    {card.category}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Bottom: Glowing Amber Bar, Title, Description, and Features */}
                <div className="relative z-10 mt-auto">
                  <div className="flex items-start gap-3 mb-2.5">
                    {/* Glowing Amber Accent Bar */}
                    <span className="w-1 h-7 rounded-full bg-amber-400 shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.9)] group-hover:h-9 transition-all duration-300" />
                    <h3 className="text-xl sm:text-2xl font-black text-white heading-serif tracking-tight drop-shadow-md">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium mb-4 drop-shadow">
                    {card.desc}
                  </p>

                  <div className="pt-3 border-t border-white/15">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-2">Key Amenities</span>
                    <div className="flex flex-wrap gap-1.5">
                      {card.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-medium text-slate-100 bg-white/20 hover:bg-white/30 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Campus Visit CTA */}
      <section className="py-14 bg-gradient-to-r from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black heading-serif mb-4">
            Experience Our Campus in Person
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-8 font-medium">
            Schedule a guided campus walkthrough with our admissions team to explore our classrooms, laboratories, and athletic complexes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenAdmission}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Apply for Admission 2026–27
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              Book Campus Tour
            </Link>
            {onOpenVirtualTour && (
              <button
                onClick={onOpenVirtualTour}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>360° Virtual Tour</span>
              </button>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
