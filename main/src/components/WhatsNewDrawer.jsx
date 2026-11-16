import React from 'react';
import { X, Calendar, Sparkles, ArrowRight, Bell } from 'lucide-react';

export default function WhatsNewDrawer({ isOpen, onClose, onOpenAdmission }) {
  if (!isOpen) return null;

  const updates = [
    {
      date: "Nov 2026",
      tag: "Admissions",
      title: "Admissions Open for Session 2026–27 (Pre-Nursery to Class IX)",
      desc: "Limited seats available for foundational, primary, and middle school wings. Early registration offers direct interaction with academic coordinators."
    },
    {
      date: "Oct 2026",
      tag: "CBSE Distinction",
      title: "100% CBSE Board Results Announced with District Ranks",
      desc: "Class X and XII scholars secure top ranks with multiple students achieving 100/100 perfect subject marks in Mathematics, Science, and Accountancy."
    },
    {
      date: "Oct 2026",
      tag: "Robotics",
      title: "Atal Tinkering Lab Team Wins Regional AI Innovation Cup",
      desc: "Our junior robotics team developed an autonomous microclimate irrigation rover, earning first prize among 40 participating schools."
    },
    {
      date: "Sept 2026",
      tag: "Athletics",
      title: "Inter-School Cricket & Taekwondo Championship Trophies",
      desc: "RKPS athletic teams bring home the Ghaziabad District Inter-School Champions Trophy 2026."
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer on the Left (aligned with the left ribbon) */}
      <div className="relative w-full max-w-md bg-white text-[#2b2b2b] h-full shadow-2xl flex flex-col p-6 sm:p-8 overflow-y-auto animate-slideDown z-10 border-r-4 border-[#071f4c]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#071f4c] text-white flex items-center justify-center">
              <Bell className="w-4 h-4 text-[#f0b429]" />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-[#0b2a63] tracking-wide uppercase leading-none">
                WHAT'S NEW AT RKPS
              </h3>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                Official Announcements & News
              </span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Updates List */}
        <div className="mt-6 space-y-5 flex-1">
          {updates.map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0b2a63] transition-all group">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-bold text-[#9b2335] uppercase tracking-wider">{item.tag}</span>
                <span className="text-slate-400 font-medium">{item.date}</span>
              </div>
              <h4 className="font-bebas text-lg text-[#0b2a63] tracking-wide leading-snug group-hover:text-[#9b2335] transition-colors">
                {item.title}
              </h4>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-4 border-t border-slate-200">
          <button
            onClick={() => { onClose(); onOpenAdmission(); }}
            className="w-full py-3 rounded-xl bg-[#9b2335] hover:bg-[#7a1f2b] text-white font-bebas text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>Apply for Admission 2026–27</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
