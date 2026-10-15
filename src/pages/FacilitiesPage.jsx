import React from 'react';
import { Building2, BookOpen, Trophy, Cpu, CheckCircle2, GraduationCap, FlaskConical, Compass, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const facilityCards = [
  {
    id: 'classrooms',
    title: 'Smart Classrooms',
    category: 'Learning Environment',
    badgeColor: 'bg-indigo-50 text-indigo-700',
    desc: 'Spacious, well-ventilated classrooms equipped with interactive display panels and ergonomic furniture designed for active and collaborative learning.',
    features: ['Interactive Display Panels', 'Ergonomic Student Seating', 'Well-Ventilated Classrooms', 'Digital Teaching Aids'],
    icon: GraduationCap
  },
  {
    id: 'labs',
    title: 'Science Laboratories',
    category: 'Science & Research',
    badgeColor: 'bg-blue-50 text-blue-700',
    desc: 'Well-equipped Physics, Chemistry, and Biology laboratories compliant with CBSE curriculum and safety guidelines for hands-on experimental learning.',
    features: ['Physics Apparatus & Kits', 'Chemistry Safe Workbenches', 'Biology Microscope Stations', 'Standard Lab Safety Equipment'],
    icon: FlaskConical
  },
  {
    id: 'computer-lab',
    title: 'Computer & IT Laboratory',
    category: 'Digital Learning',
    badgeColor: 'bg-cyan-50 text-cyan-700',
    desc: 'Dedicated air-conditioned computer lab with networked desktop terminals, broadband internet, and educational software for digital literacy.',
    features: ['Networked Desktop Workstations', 'High-Speed Broadband Internet', 'IT & Coding Curriculum', 'Supervised Cyber-Safe Access'],
    icon: Monitor
  },
  {
    id: 'ground',
    title: 'Sports & Physical Education',
    category: 'Athletics & Fitness',
    badgeColor: 'bg-emerald-50 text-emerald-700',
    desc: 'Dedicated open playground and courts for cricket practice, football, volleyball, badminton, and structured physical education sessions.',
    features: ['Cricket Practice Nets', 'Badminton & Volleyball Courts', 'Football & Athletic Field', 'Yoga & Physical Training'],
    icon: Trophy
  },
  {
    id: 'library',
    title: 'School Library & Reading Room',
    category: 'Knowledge Repository',
    badgeColor: 'bg-amber-50 text-amber-700',
    desc: 'Quiet reading environment featuring academic reference books, fiction, children’s literature, newspapers, and educational periodicals.',
    features: ['Curated Academic Books', 'Daily Newspapers & Periodicals', 'Children’s Story & Fiction Section', 'Quiet Study & Reading Area'],
    icon: BookOpen
  },
  {
    id: 'auditorium',
    title: 'Multipurpose Activity Hall',
    category: 'Performing Arts',
    badgeColor: 'bg-purple-50 text-purple-700',
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
                className="scroll-mt-28 bg-white p-7 sm:p-8 rounded-2xl shadow-[0_4px_24px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all duration-300 relative overflow-hidden group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${card.badgeColor}`}>
                      {card.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-amber-400 transition-colors shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1E48] heading-serif mb-2.5 group-hover:text-blue-700 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mb-5">
                    {card.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Key Amenities</span>
                    <div className="flex flex-wrap gap-1.5">
                      {card.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-lg"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
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
