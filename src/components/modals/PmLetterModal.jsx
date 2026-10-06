import React from 'react';
import { X, Award, CheckCircle2 } from 'lucide-react';

export default function PmLetterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleUp max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-3 border-2 border-amber-300 shadow-md">
            <Award className="w-7 h-7" />
          </div>
          <span className="text-[10px] font-bold tracking-widest text-amber-800 uppercase bg-amber-100 px-3 py-1 rounded-full">
            National Recognition &amp; Citation
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-blue-950 heading-serif mt-2">
            Letter of Appreciation from the Prime Minister
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Conferred upon Radha Krishna Public School, Ghaziabad for exemplary educational &amp; social contribution
          </p>
        </div>

        <div className="p-6 bg-amber-50/40 rounded-2xl border border-amber-200/80 relative space-y-4">
          <div className="flex justify-between items-center border-b border-amber-200/60 pb-3 text-xs text-slate-700">
            <div>
              <span className="font-bold text-amber-950">Prime Minister's Office</span>
              <p className="text-[10px] text-slate-500">New Delhi, India</p>
            </div>
            <div className="text-right">
              <span className="font-semibold text-slate-600">Official Citation</span>
              <p className="text-[10px] text-emerald-700 font-bold">Verified Archival Record</p>
            </div>
          </div>

          <div className="text-xs text-slate-700 leading-relaxed space-y-3 font-serif italic text-justify sm:text-sm">
            <p>
              "I am immensely pleased to learn about the commendable endeavors of <strong>Radha Krishna Public School, Ghaziabad</strong> in nurturing young minds with knowledge, discipline, and core humanitarian values."
            </p>
            <p>
              "Education that transcends textbooks and empowers students to actively participate in nation-building, social cleanliness drives, and technological ingenuity is the cornerstone of <em>Viksit Bharat</em>. I convey my heartfelt congratulations to the faculty, management, and students for their tireless dedication."
            </p>
          </div>

          <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs">
            <div className="text-[11px] text-slate-500">
              National Honors Registry • Ref: PMO/EDU/2023-RKPS
            </div>
            <div className="flex items-center gap-1 text-emerald-700 font-bold text-xs">
              <CheckCircle2 className="w-4 h-4" />
              <span>Official Institutional Honor</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-blue-950 hover:bg-blue-900 text-white rounded-xl text-xs font-bold transition-colors"
          >
            Close Citation
          </button>
        </div>
      </div>
    </div>
  );
}
