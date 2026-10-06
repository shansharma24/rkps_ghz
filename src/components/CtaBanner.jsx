import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function CtaBanner({ onOpenAdmission, onOpenEnquiry }) {
  return (
    <section className="bg-blue-950 py-10 px-4 sm:px-6 lg:px-8 border-b border-blue-900" data-purpose="cta-banner" id="admissions">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: Student Thumbnails & Heading */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center space-x-2 shrink-0">
            <img
              alt="RKPS Student Learning"
              className="w-16 h-16 rounded-xl object-cover border-2 border-amber-400 shadow-md ring-2 ring-amber-400/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDADta2QPOo3lnW1mvx810hecTNdLql6oRO5oIh_n_IPehzHiAxt2ZfORiPzfZd_qkphYVmc6cctoRVsyM8_vKrWXT_1_UbGetlgCcLIl2w5mfeb-jlgRtL52riGZP37bV0CJcunFfQYckNJ2lWllSs3-04u1Yvos4ox0cRsCy6YWKmZaI0M6uPwlt6ncekRw_rpaX8mPK5s0SHSsIVqdicBw3rHmbuKnLzZIPO58_dzrFtIpSWFFjtiw"
            />
            <img
              alt="RKPS Proud Student"
              className="w-16 h-16 rounded-xl object-cover border-2 border-blue-400 shadow-md ring-2 ring-blue-400/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC3yncjklmzit2NMEQ5a_Xqqdb-InBGpDDglWjjJQXcnpO4djYwoDlgFYcFrpXfVliXioKItTnODfU5VhAIQBCwaa3HrC9hT3k4RKqIIiZJCwwidnXTIq1kR6prhd2ifxDZW3y0oXT0k0klY-SalrmPsHkRNycMOVwynl3ab95bAy_4TvxUYPYRi4TgmYkuKNMBZXSSZUArWe2jqgXlSNqvABIa2AMMafzJvsVnBwpxfQ1QepJTuASbw"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white heading-serif">
              Your Child's Journey Begins Here.
            </h2>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              Take the first step towards an inspiring and enriching school experience.
            </p>
          </div>
        </div>

        {/* Right side: Dual CTA Buttons */}
        <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
          <button
            onClick={onOpenAdmission}
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <span>Apply For Admission</span>
            <span className="text-sm">➔</span>
          </button>

          <button
            onClick={onOpenEnquiry}
            className="px-6 py-3 rounded-full border border-blue-400 hover:bg-blue-900/60 text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
          >
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}
