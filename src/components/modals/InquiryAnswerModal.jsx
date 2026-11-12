import React, { useState } from 'react';
import { X, Sparkles, BookOpen, Send, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InquiryAnswerModal({ inquiry, isOpen, onClose, onOpenAdmission }) {
  const [userQuestion, setUserQuestion] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !inquiry) return null;

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!userQuestion || !parentEmail) return;

    confetti({
      particleCount: 70,
      spread: 50,
      origin: { y: 0.7 }
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setUserQuestion('');
      setParentEmail('');
    }, 4500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header (MIT Style) */}
        <div className="p-6 sm:p-7 border-b border-slate-800 bg-[#111317] text-white rounded-t-3xl relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded bg-amber-500 text-slate-950">
              {inquiry.number}
            </span>
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
              {inquiry.categoryTag}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white heading-serif leading-snug pr-8">
            {inquiry.question}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Author / Mentor Card */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center font-bold text-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{inquiry.author.name}</p>
                <p className="text-xs text-slate-500 font-medium">{inquiry.author.role}</p>
              </div>
            </div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 hidden sm:inline-block">
              {inquiry.author.credentials}
            </span>
          </div>

          {/* Full Pedagogical Explanation */}
          <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            {inquiry.answer.split('\n\n').map((para, pIdx) => (
              <p key={pIdx} className="whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>

          {/* Impact Benchmarks */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
              Key Metrics &amp; Benchmarks
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              {inquiry.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/90 p-2.5 rounded-xl border border-amber-200/60 shadow-2xs">
                  <p className="text-base font-black text-amber-700 font-mono">{m.val}</p>
                  <p className="text-[10px] text-slate-600 mt-0.5 font-medium">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* "Ask Your Own Question" Micro-Form */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Have a Question for Our Academic Team?</span>
            </h4>

            {submitted ? (
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Thank you! Your question has been forwarded to our academic secretariat.</span>
              </div>
            ) : (
              <form onSubmit={handleAskQuestion} className="space-y-3">
                <textarea
                  rows={2}
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  placeholder="Type your academic or campus inquiry here..."
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={parentEmail}
                    onChange={(e) => setParentEmail(e.target.value)}
                    placeholder="Your email or phone number"
                    className="flex-1 text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Submit Question</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-wrap items-center justify-between gap-3 rounded-b-3xl">
          <span className="text-xs text-slate-500 font-medium">
            Radha Krishna Public School • Affiliation #2130572
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold cursor-pointer transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdmission();
              }}
              className="px-4 py-2 rounded-xl bg-blue-950 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5"
            >
              <span>Apply for 2026–27</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

