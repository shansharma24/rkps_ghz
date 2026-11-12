import React from 'react';
import { ShieldCheck, UserCheck, Images, ExternalLink, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopUtilityHeader({ onOpenAdmission, onOpenErp }) {
  return (
    <header className="w-full bg-[#071328] border-b border-slate-800 text-xs text-slate-200 sticky top-0 z-50 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 h-10 flex items-center justify-between">
        
        {/* Left: Affiliation & Verification Badges */}
        <div className="flex items-center space-x-4 md:space-x-6 text-slate-300">
          <span className="flex items-center space-x-1.5 text-amber-400 font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="hidden sm:inline">CBSE Affiliated Sr. Secondary School</span>
            <span className="sm:hidden">CBSE Affiliated</span>
            <span className="text-slate-400 font-normal hidden lg:inline">| No: 2130572 • Code: 2132212</span>
          </span>

          <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
            <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <a href="tel:9310300600" className="hover:underline font-medium">+91 9310300600</a>
          </span>
        </div>

        {/* Right: Quick Links & Actions (MIT/Pathways Utility Style) */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 ml-auto font-medium">
          <button
            onClick={onOpenErp}
            className="hover:text-amber-400 text-slate-300 transition-colors flex items-center gap-1 text-[11px] sm:text-xs cursor-pointer py-1"
          >
            <UserCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Portal Login</span>
          </button>

          <Link
            to="/gallery"
            className="hover:text-amber-400 text-slate-300 transition-colors hidden sm:inline-flex items-center gap-1.5 text-[11px] sm:text-xs"
          >
            <Images className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Campus Tour</span>
          </Link>

          <button
            onClick={onOpenAdmission}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg transition-all text-xs shrink-0 flex items-center gap-1.5 shadow-[0_0_12px_rgba(245,158,11,0.5)] hover:shadow-[0_0_18px_rgba(245,158,11,0.8)] cursor-pointer active:scale-95"
          >
            <Sparkles className="w-3 h-3 text-slate-950" />
            <span>Apply 2026–27</span>
          </button>
        </div>

      </div>
    </header>
  );
}

