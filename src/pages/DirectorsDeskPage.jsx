import React from 'react';
import { Quote, Sparkles, Award, CheckCircle2, Mail, ArrowRight, ShieldCheck, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import directorImg from '../assets/director.png';

export default function DirectorsDeskPage({ onOpenAdmission }) {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Landmark className="w-3.5 h-3.5 text-amber-400" />
            <span>Strategic Vision &amp; Governance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black heading-serif tracking-tight text-white leading-tight">
            From the Director's Desk
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium">
            “Education is the most powerful weapon which you can use to change the world.” Guiding RKPS with unwavering dedication to academic brilliance and character building.
          </p>
        </div>
      </section>

      {/* 2. Main Address Showcase */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: Director Card & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 to-blue-900" />

              <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900 mb-6 shadow-md border-2 border-slate-100">
                <img
                  src={directorImg}
                  alt="Dr. Satish Yadav"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center space-y-1">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider inline-block mb-1">
                  Managing Trustee
                </span>
                <h2 className="text-2xl font-black text-[#0B1E48] heading-serif">
                  Dr. Satish Yadav
                </h2>
                <p className="text-xs font-semibold text-slate-500">
                  Founder &amp; Managing Director
                </p>
                <p className="text-xs text-slate-600 font-medium pt-2">
                  28+ Years in Educational Leadership
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pioneer of Inclusive &amp; Affordable Quality Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Architect of 12-Acre Modern Smart Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Philanthropic Champion for Underprivileged Scholarships</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md text-center"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>Connect with Director's Office</span>
                </Link>
              </div>
            </div>

            {/* Quote Callout */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200/80 shadow-sm relative">
              <Quote className="w-8 h-8 text-blue-300 absolute top-4 right-4 opacity-50" />
              <p className="text-xs sm:text-sm font-semibold text-blue-950 leading-relaxed italic relative z-10">
                “When we established this school 25 years ago, our sacred vow was that no child should ever lack the opportunity to shine. That pledge remains our greatest inspiration today.”
              </p>
            </div>
          </div>

          {/* Right: Full Director's Letter */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Visionary Message</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] heading-serif mt-1">
                Dear Parents, Well-Wishers, and the RKPS Family,
              </h2>
            </div>

            <div className="w-12 h-1 bg-amber-500 rounded-full" />

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                It is with immense humility, gratitude, and pride that I welcome you to Radha Krishna Public School. Over the past 25 years, what began as a humble commitment to value-centric schooling in Ghaziabad has blossomed into one of the region’s most distinguished centers of academic, sporting, and cultural excellence.
              </p>
              <p>
                Our philosophy has always rested upon a singular conviction: an educational institution is not merely steel and concrete—it is a sacred cradle of human potential. Every classroom, laboratory, cricket net, and auditorium at RKPS was conceived with the explicit objective of providing our students with world-class facilities on par with the finest schools nationally.
              </p>
              <p>
                Yet, alongside state-of-the-art AI laboratories and Olympic-standard sports grounds, our paramount focus remains on character, modesty, and social conscience. In a world where technical expertise is abundant, the virtues of empathy, truthfulness, civic duty, and respect for our elders are what truly distinguish great leaders.
              </p>
              <p>
                As we step forward into our Silver Jubilee era, we rededicate ourselves to pushing the frontiers of innovation while holding fast to our foundational heritage. I invite all prospective families to visit our lush green campus and witness the joy and intellectual vitality of our students firsthand.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-base font-bold text-[#0B1E48] heading-serif">
                  Dr. Satish Yadav
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  Founder &amp; Managing Director, Radha Krishna Public School
                </p>
              </div>

              <button
                onClick={onOpenAdmission}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
