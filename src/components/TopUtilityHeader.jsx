import React from 'react';
import { ShieldCheck, UserCheck, Images, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopUtilityHeader({ onOpenAdmission, onOpenErp }) {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-800 text-xs text-slate-200 sticky-top z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Left: Affiliation & PM Recognition */}
        <div className="hidden md:flex items-center space-x-6 text-slate-300">
          <span className="flex items-center space-x-1.5 text-amber-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="truncate">CBSE Affiliated Senior Secondary School (Affiliation No: 2130572 | School Code: 2132212)</span>
          </span>
        </div>

        {/* Right: Quick Links & Actions */}
        <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6 ml-auto font-medium">

          <button
            onClick={onOpenErp}
            className="hover:text-amber-400 text-slate-300 transition-colors flex items-center gap-1 text-[11px] sm:text-xs"
          >
            <UserCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>ERP Login</span>
          </button>

          <Link
            to="/gallery"
            className="hover:text-amber-400 text-slate-300 transition-colors inline-flex items-center gap-1.5 text-[11px] sm:text-xs"
          >
            <Images className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Gallery</span>
          </Link>

          <button
            onClick={onOpenAdmission}
            className="bg-blue-700 hover:bg-blue-800 text-white px-3.5 py-1.5 rounded-sm font-semibold tracking-wide transition-all text-xs shrink-0 flex items-center gap-1.5 ring-2 ring-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.7)] hover:shadow-[0_0_20px_rgba(56,189,248,0.95)] hover:ring-sky-300 cursor-pointer"
          >
            <span>Apply for Admission</span>
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </header>
  );
}
