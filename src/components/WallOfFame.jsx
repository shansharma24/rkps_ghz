import React, { useState } from 'react';
import { Award, BookOpen, GraduationCap, Sparkles, Star, Trophy, ExternalLink, X, CheckCircle } from 'lucide-react';

const allToppers = [
  {
    id: 'ananya',
    category: ['all', 'xii', 'jee'],
    rankTag: 'District Rank 1',
    rankColor: 'bg-amber-700',
    borderColor: 'border-amber-500',
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
    borderColor: 'border-blue-600',
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
    rankColor: 'bg-amber-800',
    borderColor: 'border-amber-700',
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
    rankColor: 'bg-blue-950',
    borderColor: 'border-blue-900',
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

  const filteredToppers = allToppers.filter((t) => t.category.includes(activeFilter));

  return (
    <section className="py-16 md:py-24 bg-white" data-purpose="wall-of-fame" id="wall-of-fame">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge and Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-bold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            Academic &amp; Competitive Distinction
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-950 heading-serif tracking-tight">
            Wall of Fame: Honoring Scholastic Champions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Celebrating RKPS scholars who conquered CBSE Board Examinations, IIT-JEE, NEET, and National Olympiads.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button 
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-sm ${
              activeFilter === 'all' 
                ? 'bg-blue-950 text-white' 
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            All Scorers (2024–25)
          </button>

          <button 
            onClick={() => setActiveFilter('xii')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
              activeFilter === 'xii' 
                ? 'bg-blue-950 text-white font-bold' 
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            CBSE Class XII (98%+)
          </button>

          <button 
            onClick={() => setActiveFilter('x')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
              activeFilter === 'x' 
                ? 'bg-blue-950 text-white font-bold' 
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            CBSE Class X (City Toppers)
          </button>

          <button 
            onClick={() => setActiveFilter('jee')}
            className={`px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
              activeFilter === 'jee' 
                ? 'bg-blue-950 text-white font-bold' 
                : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
            }`}
          >
            IIT-JEE &amp; NEET Selections
          </button>
        </div>

        {/* 4 Topper Cards Grid matching IMAGE_5 & IMAGE_6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredToppers.map((topper) => (
            <div
              key={topper.id}
              className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Floating Rank Pill */}
              <span className={`absolute -top-3 px-3 py-1 ${topper.rankColor} text-white text-[10px] font-bold rounded-full tracking-wider uppercase shadow-md`}>
                {topper.rankTag}
              </span>

              {/* Avatar Frame */}
              <div className={`w-24 h-24 rounded-2xl overflow-hidden border-2 ${topper.borderColor} p-1 mb-4 mt-2 group-hover:scale-105 transition-transform`}>
                <img
                  src={topper.img}
                  alt={topper.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              {/* Score Tag */}
              <span className={`px-3 py-1 ${topper.badgeStyle} text-xs font-extrabold rounded-md mb-2`}>
                {topper.badgeText}
              </span>

              {/* Student Name */}
              <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors">
                {topper.name}
              </h3>

              {/* Stream / Focus */}
              <p className="text-xs text-slate-500 font-medium">
                {topper.stream}
              </p>

              {/* Distinction Highlight */}
              <div className="mt-4 pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs text-slate-700 font-semibold">
                {topper.highlightIcon === 'trophy' && (
                  <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                )}
                {topper.highlightIcon === 'college' && (
                  <GraduationCap className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                )}
                {topper.highlightIcon === 'medal' && (
                  <Award className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                )}
                {topper.highlightIcon === 'sigma' && (
                  <span className="font-serif font-black text-blue-900 text-sm leading-none">Σ</span>
                )}
                <span>{topper.highlightText}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Merit Summary Bar matching reference bottom strip */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 text-blue-800" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                Competitive Examinations 2024–25 Results
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                32+ Students Qualified JEE Advanced • 28 NEET Medical Qualifiers • 65+ CUET 99th Percentilers
              </p>
            </div>
          </div>

          <button
            onClick={() => setDossierOpen(true)}
            className="shrink-0 text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-50"
          >
            <span>View Full Merit Dossier</span>
            <span className="text-sm">➔</span>
          </button>
        </div>

      </div>

      {/* Merit Dossier Modal */}
      {dossierOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleUp max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setDossierOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-950 heading-serif">
                  Official Academic Merit Dossier (2024–25)
                </h3>
                <p className="text-xs text-slate-500">Radha Krishna Public School, Ghaziabad • Affiliation No. 2130572</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="p-4 bg-amber-50/70 rounded-xl border border-amber-200">
                <h4 className="font-bold text-amber-900 text-sm mb-2">Class XII Board Highlights</h4>
                <ul className="space-y-1.5 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>100% Pass Percentage</strong> across Science, Commerce &amp; Humanities.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>42 Students</strong> secured aggregate scores exceeding 95%.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>118 Students</strong> achieved distinctions with 90%+ aggregate.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-900 text-sm mb-2">National Competitive Examinations</h4>
                <ul className="space-y-1.5 text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>JEE Advanced:</strong> 32 Qualifiers admitted to IIT Delhi, IIT Bombay, IIT Roorkee.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>NEET (UG):</strong> 28 Qualifiers in government medical colleges across India.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span><strong>CUET 2024:</strong> 65+ Scholars admitted to Delhi University top-tier colleges (SRCC, St. Stephen's, Hindu).</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setDossierOpen(false)}
                className="px-5 py-2.5 bg-blue-950 text-white rounded-xl text-xs font-bold hover:bg-blue-900 transition-colors"
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
