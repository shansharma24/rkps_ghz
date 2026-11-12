import React, { useState } from 'react';
import { Award, GraduationCap, Trophy, X, CheckCircle, Sparkles, ChevronRight, Star } from 'lucide-react';

const allToppers = [
  {
    id: 'ananya',
    category: ['all', 'xii', 'jee'],
    rankTag: 'District Rank 1',
    rankColor: 'bg-amber-600',
    borderColor: 'border-amber-400',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDADta2QPOo3lnW1mvx810hecTNdLql6oRO5oIh_n_IPehzHiAxt2ZfORiPzfZd_qkphYVmc6cctoRVsyM8_vKrWXT_1_UbGetlgCcLIl2w5mfeb-jlgRtL52riGZP37bV0CJcunFfQYckNJ2lWllSs3-04u1Yvos4ox0cRsCy6YWKmZaI0M6uPwlt6ncekRw_rpaX8mPK5s0SHSsIVqdicBw3rHmbuKnLzZIPO58_dzrFtIpSWFFjtiw',
    badgeText: '98.8% CBSE XII',
    badgeStyle: 'bg-amber-50 text-amber-900 border border-amber-200',
    name: 'Ananya Singhal',
    stream: 'Science Stream Topper',
    highlightIcon: 'trophy',
    highlightText: 'IIT Delhi Admitted'
  },
  {
    id: 'rohan',
    category: ['all', 'xii'],
    rankTag: '100/100 Accounts',
    rankColor: 'bg-blue-900',
    borderColor: 'border-blue-500',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC3yncjklmzit2NMEQ5a_Xqqdb-InBGpDDglWjjJQXcnpO4djYwoDlgFYcFrpXfVliXioKItTnODfU5VhAIQBCwaa3HrC9hT3k4RKqIIiZJCwwidnXTIq1kR6prhd2ifxDZW3y0oXT0k0klY-SalrmPsHkRNycMOVwynl3ab95bAy_4TvxUYPYRi4TgmYkuKNMBZXSSZUArWe2jqgXlSNqvABIa2AMMafzJvsVnBwpxfQ1QepJTuASbw',
    badgeText: '98.4% CBSE XII',
    badgeStyle: 'bg-blue-50 text-blue-900 border border-blue-200',
    name: 'Rohan Agrawal',
    stream: 'Commerce Stream Topper',
    highlightIcon: 'college',
    highlightText: 'SRCC (Delhi Univ) Selected'
  },
  {
    id: 'meera',
    category: ['all', 'xii'],
    rankTag: '100/100 Pol Sci',
    rankColor: 'bg-amber-700',
    borderColor: 'border-amber-400',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACUhXwaXYLGIjPccwLVpLIuy0ONweW3KTypkMHuoJ11AwhWGTybooi_c_Fe955ESOfH4ENzZXpvdSQ1fskzeaf304dliDljlvRAElqvpUbWl7LtNC-eqyXu8vSW5Cg-RheP37L0QsNlboWbql4MgKQpi3Y-s-jjNA83WOM01O4N3BZxnqTltMFRHy0VZwj2eTcvlOTAn27VblDSIjqrB_DwsgfmgStQC7y2KkWUtk44tqWuZpL8n7cSOzmutwXsrFxs6c',
    badgeText: '98.2% CBSE XII',
    badgeStyle: 'bg-amber-50 text-amber-900 border border-amber-200',
    name: 'Meera Chawla',
    stream: 'Humanities Stream Topper',
    highlightIcon: 'medal',
    highlightText: "St. Stephen's Admitted"
  },
  {
    id: 'aditya',
    category: ['all', 'x', 'jee'],
    rankTag: 'NTSE Scholar',
    rankColor: 'bg-indigo-950',
    borderColor: 'border-indigo-400',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlaYWmmy_8g1OfqJvgZQ3JizyjCSSb-QQKImGgYZBRTXxZoIT_M-2GU9CKeJesRbekKKqBcHkJwBJyfC7vkHNeknYGKGs4WvTiMvdC0eogRxORV_5IR7OErBjqHxHq9DWZIk7I-V0-06FmO64u7Ve7b4obFHkjAD5_7-Onog-Q-r1VXcOHCYu2tyoX8wo4W_5WkxbXLFSRt0qO82ryuPjfb6x3_VctC-g6A7bkthIH8lYit-kAimoQatUd_GlJUg2Ymjg',
    badgeText: '99.0% CBSE X',
    badgeStyle: 'bg-indigo-50 text-indigo-900 border border-indigo-200',
    name: 'Aditya Tyagi',
    stream: 'Class X City Rank 1',
    highlightIcon: 'sigma',
    highlightText: '100/100 Mathematics'
  }
];

export default function WallOfFame() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [dossierOpen, setDossierOpen] = useState(false);

  const filtered = allToppers.filter((t) => t.category.includes(activeFilter));

  return (
    <section className="py-20 md:py-28 bg-[#fff6f8] relative overflow-hidden border-b border-rose-100/80" data-purpose="wall-of-fame" id="wall-of-fame">
      {/* Signature Red/Rose Polka-Dot Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f43f5e 1.75px, transparent 1.75px)',
          backgroundSize: '22px 22px',
          opacity: 0.5
        }}
      />

      {/* Top-Right Magenta/Rose Curved Corner Accent */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none overflow-hidden z-0">
        <div 
          className="w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] -top-24 sm:-top-32 md:-top-36 -right-24 sm:-right-32 md:-right-36 absolute rounded-full bg-gradient-to-bl from-[#e11d48] via-[#e11d48] to-[#be185d] opacity-90 shadow-md"
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Header (Clean Typography, No Pill) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
            Hall of Scholastic Distinction
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 heading-serif tracking-tight">
            Wall of Fame: Honoring Champions
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Celebrating RKPS scholars who conquered CBSE Board Examinations, IIT-JEE, NEET, and National Olympiads with historic distinctions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-14">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'all' 
                ? 'bg-blue-950 text-white shadow-md' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            All Scorers (2024–25)
          </button>

          <button 
            onClick={() => setActiveFilter('xii')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'xii' 
                ? 'bg-blue-950 text-white shadow-md' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            CBSE Class XII (98%+)
          </button>

          <button 
            onClick={() => setActiveFilter('x')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'x' 
                ? 'bg-blue-950 text-white shadow-md' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            CBSE Class X (City Toppers)
          </button>

          <button 
            onClick={() => setActiveFilter('jee')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'jee' 
                ? 'bg-blue-950 text-white shadow-md' 
                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
            }`}
          >
            IIT-JEE &amp; NEET Selections
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filtered.map((topper) => (
            <div
              key={topper.id}
              className="relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Floating Rank Pill */}
              <span className={`absolute -top-3.5 px-4 py-1.5 ${topper.rankColor} text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-md`}>
                {topper.rankTag}
              </span>

              {/* Avatar Frame with Gold Accent */}
              <div className={`w-28 h-28 rounded-2xl overflow-hidden border-2 ${topper.borderColor} p-1 mb-4 mt-3 group-hover:scale-105 transition-transform shadow-md`}>
                <img
                  src={topper.img}
                  alt={topper.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Score Tag */}
              <span className={`px-3 py-1 ${topper.badgeStyle} text-xs font-extrabold rounded-full mb-2`}>
                {topper.badgeText}
              </span>

              {/* Student Name */}
              <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-900 transition-colors heading-serif mt-1">
                {topper.name}
              </h3>

              {/* Stream */}
              <p className="text-xs text-slate-500 font-medium">
                {topper.stream}
              </p>

              {/* Distinction Highlight */}
              <div className="mt-5 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs text-slate-800 font-bold">
                {topper.highlightIcon === 'trophy' && (
                  <Trophy className="w-4 h-4 text-amber-500 shrink-0" />
                )}
                {topper.highlightIcon === 'college' && (
                  <GraduationCap className="w-4 h-4 text-blue-700 shrink-0" />
                )}
                {topper.highlightIcon === 'medal' && (
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                )}
                {topper.highlightIcon === 'sigma' && (
                  <span className="font-serif font-black text-indigo-900 text-sm leading-none">Σ</span>
                )}
                <span>{topper.highlightText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Bottom Merit Banner (MIT Impact Style) */}
        <div className="mt-12 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-lg">
              <Trophy className="w-7 h-7 text-slate-950" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white heading-serif">
                Competitive Examinations 2024–25 Distinction
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                32+ JEE Advanced Qualifiers • 28 NEET Medical Qualifiers • 65+ CUET 99th Percentilers
              </p>
            </div>
          </div>

          <button
            onClick={() => setDossierOpen(true)}
            className="px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>View Full Merit Dossier</span>
            <ChevronRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>

      </div>

      {/* Official Merit Dossier Modal */}
      {dossierOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleUp max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setDossierOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                <Award className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 heading-serif">
                  Official Academic Merit Dossier (2024–25)
                </h3>
                <p className="text-xs text-slate-500">Radha Krishna Public School, Ghaziabad • CBSE Affiliation #2130572</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-5 bg-amber-50/80 rounded-2xl border border-amber-200/80 space-y-2.5">
                <h4 className="font-bold text-amber-950 text-sm">Class XII CBSE Board Examination Highlights</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>100% Pass Percentage</strong> across Science, Commerce &amp; Humanities streams.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>42 Students</strong> secured aggregate scores exceeding 95%.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>118 Students</strong> achieved distinctions with 90%+ aggregate marks.</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-blue-50/80 rounded-2xl border border-blue-200/80 space-y-2.5">
                <h4 className="font-bold text-blue-950 text-sm">National Competitive Examination Selections</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>JEE Advanced:</strong> 32 Qualifiers admitted to IIT Delhi, IIT Bombay, IIT Roorkee.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>NEET (UG):</strong> 28 Qualifiers in premier government medical colleges across India.</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>CUET 2024:</strong> 65+ Scholars admitted to top Delhi University colleges (SRCC, St. Stephen's, Hindu).</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setDossierOpen(false)}
                className="px-6 py-2.5 bg-blue-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors shadow"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
