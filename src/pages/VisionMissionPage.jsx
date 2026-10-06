import React from 'react';
import { Target, Compass, Sparkles, Award, Heart, BookOpen, ShieldCheck, Globe, Users, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import directorImg from '../assets/director.png';
import principalImg from '../assets/principal.png';

export default function VisionMissionPage({ onOpenAdmission }) {
  const values = [
    {
      icon: Compass,
      title: 'Inquiry & Critical Thinking',
      desc: 'Encouraging students to question, experiment, and analyze rather than memorize, fostering authentic intellectual curiosity.'
    },
    {
      icon: ShieldCheck,
      title: 'Integrity & Moral Courage',
      desc: 'Instilling timeless ethical principles, truthfulness, and humility that guide students through personal and civic challenges.'
    },
    {
      icon: Globe,
      title: 'Global Outlook, Indian Roots',
      desc: 'Nurturing cultural pride and Bharatiya heritage while cultivating future-ready 21st-century international perspectives.'
    },
    {
      icon: Heart,
      title: 'Empathy & Inclusivity',
      desc: 'Creating a compassionate learning ecosystem where diversity is cherished, and every learner feels valued and empowered.'
    },
    {
      icon: Award,
      title: 'Pursuit of Excellence',
      desc: 'Inspiring personal mastery in academic rigor, performing arts, sportsmanship, and leadership competitions.'
    },
    {
      icon: Users,
      title: 'Collaborative Leadership',
      desc: 'Developing teamwork, vocal confidence, and empathetic problem-solving for meaningful societal contribution.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Page Header Hero */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white overflow-hidden">
        {/* Ambient subtle glow circles */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Guiding Ideals &amp; Core Purpose</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black heading-serif tracking-tight text-white leading-tight">
            Vision &amp; Mission
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-6 rounded-full" />

          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-medium leading-relaxed">
            “विद्या ददाति विनयं” — Knowledge Bestows Humility. Building foundations of intellectual brilliance, compassionate character, and enduring leadership for over 25 years.
          </p>
        </div>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-900 to-blue-600" />
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-900 mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7 text-blue-900" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-blue-800">Our Strategic Horizon</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 heading-serif mt-1 mb-4">
              Our Vision
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To be a pioneering center of holistic scholastic excellence that awakens the innate genius in every learner; nurturing morally anchored, intellectually fearless, and socially conscious global citizens who enrich humanity with wisdom and empathy.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 font-semibold border-t border-slate-100 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-700" />
                <span>Nurture 100% conceptual mastery through CBSE excellence</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-700" />
                <span>Foster lifelong self-learning and creative inquiry</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-700" />
                <span>Cultivate cultural consciousness with 21st-century competencies</span>
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200/80 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 to-amber-300" />
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-amber-600" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Our Everyday Action</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 heading-serif mt-1 mb-4">
              Our Mission
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To deliver transformative, student-centric education by providing state-of-the-art experiential laboratories, inspirational educators, championship sports facilities, and an inclusive culture where academic rigor walks hand-in-hand with human dignity.
            </p>

            <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 font-semibold border-t border-slate-100 pt-6">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Zero-barrier student care with individual mentorship</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Cutting-edge STEM, Robotics, and Digital Literacy labs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Holistic character cultivation and national pride</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Leadership Spotlight: Director & Principal */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Guiding Stewards</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] heading-serif mt-1">
              Voices of Educational Leadership
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Meet the visionary minds steering Radha Krishna Public School toward scholastic, ethical, and cultural distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Director Spotlight */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col md:flex-row gap-6 items-center">
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-lg bg-slate-900 relative">
                <img
                  src={directorImg}
                  alt="Dr. Satish Yadav"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold text-center py-0.5 rounded uppercase">
                  Director
                </span>
              </div>
              <div className="space-y-3 flex-1 text-center md:text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1E48] heading-serif">
                    Dr. Satish Yadav
                  </h3>
                  <p className="text-xs font-bold text-amber-700 tracking-wider uppercase">
                    Founder &amp; Managing Director
                  </p>
                </div>
                <div className="relative text-xs sm:text-sm text-slate-600 italic border-l-2 border-amber-400 pl-3">
                  “Education is the sacred alchemy that turns curiosity into purpose and character into destiny. At RKPS, we build lives, not just careers.”
                </div>
                <Link
                  to="/directors-desk"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors pt-1"
                >
                  <span>Read Director's Full Address</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Principal Spotlight */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col md:flex-row gap-6 items-center">
              <div className="w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shrink-0 border-4 border-white shadow-lg bg-slate-900 relative">
                <img
                  src={principalImg}
                  alt="Dr. Rupa Tyagi"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold text-center py-0.5 rounded uppercase">
                  Principal
                </span>
              </div>
              <div className="space-y-3 flex-1 text-center md:text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0B1E48] heading-serif">
                    Dr. Rupa Tyagi
                  </h3>
                  <p className="text-xs font-bold text-blue-800 tracking-wider uppercase">
                    Principal &amp; Academic Head
                  </p>
                </div>
                <div className="relative text-xs sm:text-sm text-slate-600 italic border-l-2 border-blue-600 pl-3">
                  “True education ignites a passion for learning that outlives examinations. We empower every child to believe in their unique greatness.”
                </div>
                <Link
                  to="/principals-desk"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors pt-1"
                >
                  <span>Read Principal's Full Address</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Institutional Values */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Pillars of Excellence</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] heading-serif mt-1">
            Our 6 Core Values
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, i) => {
            const Icon = val.icon;
            return (
              <div 
                key={i} 
                className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-4 group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 heading-serif mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="py-14 bg-gradient-to-r from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-black heading-serif mb-4">
            Experience Our Vision in Action
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-8 font-medium">
            Admissions open for academic session 2026–27. Join a community where your child's aspirations are nurtured into greatness.
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
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
