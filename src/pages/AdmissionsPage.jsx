import React, { useState } from 'react';
import { Award, CheckCircle2, FileText, Calendar, Users, ArrowRight, ShieldCheck, HelpCircle, ChevronDown, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdmissionsPage({ onOpenAdmission }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const steps = [
    {
      num: '01',
      title: 'Online Registration',
      desc: 'Fill out the online admission registration form or visit our campus admissions helpdesk to procure the 2026–27 prospectus.'
    },
    {
      num: '02',
      title: 'Interaction & Aptitude',
      desc: 'Informal student-parent interaction for early years; foundational aptitude assessment for Grades I to XI.'
    },
    {
      num: '03',
      title: 'Document Verification',
      desc: 'Submission and verification of birth certificate, previous school report cards, transfer certificate, and scholar photographs.'
    },
    {
      num: '04',
      title: 'Admission Confirmation',
      desc: 'Offer letter issuance and fee deposition to secure the student’s seat for academic session 2026–27.'
    }
  ];

  const eligibility = [
    { grade: 'Pre-Nursery', age: '2.5 to 3 Years', cutoff: 'As of 31st March 2026' },
    { grade: 'Nursery', age: '3 to 4 Years', cutoff: 'As of 31st March 2026' },
    { grade: 'Kindergarten (KG)', age: '4 to 5 Years', cutoff: 'As of 31st March 2026' },
    { grade: 'Grade I', age: '5 to 6 Years', cutoff: 'As of 31st March 2026' },
    { grade: 'Grades II – X', age: 'Based on previous class TC & CBSE age norms', cutoff: 'Merit in entrance assessment' },
    { grade: 'Grade XI', age: 'Based on Class X Board Marks & Stream Eligibility', cutoff: 'Science, Commerce & Humanities' }
  ];

  const documents = [
    'Original Birth Certificate issued by Municipal Corporation (for Pre-Nursery to Grade I)',
    'Transfer Certificate (TC) countersigned by appropriate education authority (Grade II onwards)',
    'Previous year’s final report card / mark sheet from recognized school',
    '4 passport-size photographs of the student and 2 each of both parents / guardians',
    'Aadhar Card copies of the child and parents',
    'Category certificate (SC/ST/OBC) if applicable for official records'
  ];

  const faqs = [
    {
      q: 'What is the admission procedure for mid-session transfers?',
      a: 'Mid-session admissions are subject to vacancy in the respective grade. Parents must provide the previous school TC countersigned by the education department and last term academic report card.'
    },
    {
      q: 'Are transportation facilities available across Ghaziabad and Noida?',
      a: 'Yes, RKPS maintains a dedicated fleet of GPS-monitored, air-conditioned school buses with CCTV surveillance and female attendants covering all major residential corridors in Indirapuram, Vaishali, Vasundhara, Crossing Republik, Noida, and East Delhi.'
    },
    {
      q: 'What streams are offered in Class XI and XII?',
      a: 'We offer all three recognized CBSE streams: Science (Medical & Non-Medical with AI/Computer Science), Commerce (with Mathematics/Applied Maths/Informatics Practices), and Humanities (Political Science, History, Economics, Psychology).'
    },
    {
      q: 'Does RKPS offer scholarship programs for meritorious students?',
      a: 'Yes, merit-based tuition fee waivers are awarded to students demonstrating exceptional academic distinction in Class X Board Examinations, national sports championships, and NTSE/Olympiad qualifiers.'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Modern Architectural Page Hero (MIT/Ravensbourne Style) */}
      <section className="relative py-20 sm:py-24 bg-slate-950 text-white overflow-hidden">
        
        {/* Ambient Grid & Glows */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-400">Admissions</span>
            <span>/</span>
            <span className="text-slate-300">Process &amp; Guidelines</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Academic Session 2026–27 Openings</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black heading-serif tracking-tight text-white leading-tight">
              Admissions Roadmap &amp; Criteria
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Join the Radha Krishna Public School academic fraternity. We invite forward-thinking parents and aspiring learners to discover a 25-year tradition of scholastic distinction and holistic character building.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdmission}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
              >
                Apply Online Now (Instant Form)
              </button>

              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wide backdrop-blur-md border border-white/25 transition-all"
              >
                Schedule Campus Walkthrough
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Step-by-Step Admission Pathway */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Enrolment Process</span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 heading-serif mt-1">
            4-Step Admission Journey
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          <p className="text-sm text-slate-600 mt-2 font-normal">
            A seamless, transparent admission protocol designed to understand your child's distinct strengths and aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {steps.map((st, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <span className="text-4xl font-black text-amber-500/30 heading-serif block mb-3 font-sans">
                {st.num}
              </span>
              <h3 className="text-lg font-bold text-slate-900 heading-serif mb-2 group-hover:text-blue-900 transition-colors">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Age Eligibility Matrix (Clean MIT-Style Table) */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">CBSE &amp; State Regulations</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 heading-serif mt-1">
              Age Eligibility Criteria (2026–27)
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-950 text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-bold">Grade Level</th>
                  <th className="py-4 px-6 font-bold">Age Requirement</th>
                  <th className="py-4 px-6 font-bold">Cutoff / Admission Norm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {eligibility.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-slate-900">{row.grade}</td>
                    <td className="py-3.5 px-6 text-slate-700 font-medium">{row.age}</td>
                    <td className="py-3.5 px-6 text-slate-500">{row.cutoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Mandatory Documents Checklist */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-blue-900/40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
              ✓
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold heading-serif text-white">
                Mandatory Documentation Checklist
              </h3>
              <p className="text-xs text-slate-300">Please prepare self-attested photocopies along with original documents for verification</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (FAQ Accordion) */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Clarifications</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 heading-serif mt-1">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full text-left p-5 flex items-center justify-between font-bold text-xs sm:text-sm text-slate-900 hover:text-blue-900 transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === i && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
