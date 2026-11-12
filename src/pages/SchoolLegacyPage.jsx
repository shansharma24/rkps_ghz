import React from 'react';
import { Award, Calendar, CheckCircle2, Milestone, ShieldCheck, Sparkles, Building2, GraduationCap, Users, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import schoolExteriorImg from '../assets/Radha Krishna Public School Exterior.png';

export default function SchoolLegacyPage({ onOpenAdmission }) {
  const milestones = [
    {
      year: '1999',
      title: 'Foundational Inception',
      desc: 'Radha Krishna Public School was established in Ghaziabad with an inaugural cohort of 120 students and an unshakeable vision of character-driven education.'
    },
    {
      year: '2005',
      title: 'CBSE Affiliation Milestone',
      desc: 'Awarded formal CBSE Senior Secondary affiliation (Affiliation #2130572), introducing Science, Commerce, and Humanities streams with dedicated collegiate labs.'
    },
    {
      year: '2012',
      title: 'Championship Sports Infrastructure',
      desc: 'Inauguration of the synthetic courts, championship cricket pitch, and NIS-certified physical education training centers.'
    },
    {
      year: '2018',
      title: 'Digital & STEM Revolution',
      desc: '100% campus smartboard digitisation, high-speed fiber network, and Atal-inspired robotics tinkering laboratories.'
    },
    {
      year: '2024 & Beyond',
      title: 'Silver Jubilee & Future-Ready Excellence',
      desc: 'Celebrating 25 glorious years of transforming young lives, expanding AI research suites, and earning top CBSE regional rankings.'
    }
  ];

  const pillars = [
    {
      num: '01',
      title: 'Institutional Autonomy & Trust',
      desc: 'Governed by distinguished educationists and philanthropists committed to non-commercial, value-oriented student development.'
    },
    {
      num: '02',
      title: 'Faculty Pedagogy & Care',
      desc: 'Over 100 passionate mentors with an average teaching tenure of 8+ years, delivering compassionate, individualised academic guidance.'
    },
    {
      num: '03',
      title: 'Alumni Across the Globe',
      desc: 'Over 10,000 alumni excelling in IITs, IIMs, AIIMS, National Defence Academy, Civil Services, and premier multinational corporations.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Page Header (Ravensbourne / MIT Dark Hero) */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#050E24] via-[#08173d] to-[#050E24] text-white overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-300">About RKPS</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-amber-400 font-semibold">School Legacy</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>25 Glorious Years • Silver Jubilee Era (1999–2026)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black heading-serif tracking-tight text-white leading-tight">
            Our School Legacy &amp; Heritage
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-5 rounded-full" />

          <p className="text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            A quarter-century of scholastic brilliance, timeless values, and shaping responsible leaders who make India and the world proud.
          </p>
        </div>
      </section>

      {/* 2. Large Hero School Exterior Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
          <img
            src={schoolExteriorImg}
            alt="Radha Krishna Public School Campus Exterior"
            className="w-full h-[380px] sm:h-[480px] lg:h-[540px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

          {/* Floating Caption on Large Image */}
          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 text-white max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider inline-block mb-2">
              Pratap Vihar, Sector 12, Ghaziabad
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold heading-serif text-white drop-shadow">
              A Verdant Sanctuary of Knowledge
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-2 font-normal leading-relaxed">
              Architecturally designed to inspire intellectual freedom, safety, and physical vitality with lush green expanses, cutting-edge laboratories, and expansive sports complexes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Heritage Metrics Strip (MIT Style) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <span className="text-3xl sm:text-4xl font-black text-blue-950 heading-serif font-mono">25+</span>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Years of Legacy</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <span className="text-3xl sm:text-4xl font-black text-amber-600 heading-serif font-mono">5,000+</span>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Enrolled Scholars</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <span className="text-3xl sm:text-4xl font-black text-blue-900 heading-serif font-mono">100+</span>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Master Mentors</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 heading-serif font-mono">10,000+</span>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">Distinguished Alumni</p>
          </div>
        </div>
      </section>

      {/* 4. The Founding Journey Timeline */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Chronicle of Growth</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 heading-serif mt-1">
              Key Milestones in Our Journey
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-32 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                {/* Year Marker Badge */}
                <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-blue-950 text-amber-400 font-bold text-xs flex items-center justify-center border-2 border-white shadow group-hover:scale-110 transition-transform">
                  ★
                </div>

                <div className="sm:absolute sm:-left-32 sm:top-1 sm:w-24 text-left sm:text-right">
                  <span className="text-lg sm:text-xl font-black text-amber-600 font-mono">
                    {m.year}
                  </span>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 heading-serif mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Institutional Pillars */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Foundational Ethos</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 heading-serif mt-1">
            Why Our Legacy Matters
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-300 text-amber-700 flex items-center justify-center font-bold text-lg mb-4 font-mono">
                {pillar.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 heading-serif mb-3">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Bottom Admissions Invitation */}
      <section className="py-16 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs uppercase font-bold tracking-widest text-amber-400 mb-2">
            Admissions Open 2026–27
          </span>
          <h2 className="text-2xl sm:text-4xl font-black heading-serif mb-4">
            Become a Part of Our Living Legacy
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-8 font-normal">
            Give your child the lifelong foundation of academic distinction and moral integrity at Radha Krishna Public School.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenAdmission}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Enroll for 2026–27
            </button>
            <Link
              to="/vision-mission"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
            >
              Explore Vision &amp; Mission
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
