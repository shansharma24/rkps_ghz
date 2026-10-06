import React from 'react';
import { Award, CheckCircle2, FileText, Calendar, Users, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdmissionsPage({ onOpenAdmission }) {
  const steps = [
    {
      num: '01',
      title: 'Online Registration',
      desc: 'Fill out the online admission registration form or visit our campus admissions helpdesk to procure the prospectus.'
    },
    {
      num: '02',
      title: 'Interaction & Assessment',
      desc: 'Informal student-parent interaction for early years; foundational aptitude assessment for Grades I to XI.'
    },
    {
      num: '03',
      title: 'Document Verification',
      desc: 'Submission and verification of birth certificate, previous school report cards, transfer certificate, and photographs.'
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
    'Previous year’s final report card / marks sheet',
    '4 passport-size photographs of the student and 2 each of both parents',
    'Aadhar Card copies of the child and parents',
    'Category certificate (SC/ST/OBC) if applicable'
  ];

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Academic Session 2026–27</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black heading-serif tracking-tight text-white leading-tight">
            Admissions Process &amp; Guidelines
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium">
            Join the Radha Krishna Public School family. We invite parents and aspiring learners to embark on an enriching scholastic and ethical journey.
          </p>

          <div className="mt-8">
            <button
              onClick={onOpenAdmission}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Fill Online Admission Form
            </button>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Admission Process */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Admission Pathway</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] heading-serif mt-1">
            Simple 4-Step Enrolment Procedure
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div key={i} className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md relative group hover:shadow-xl transition-all">
              <span className="text-3xl font-black text-amber-500/70 heading-serif block mb-3">
                {st.num}
              </span>
              <h3 className="text-lg font-bold text-[#0B1E48] heading-serif mb-2">
                {st.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Age Eligibility Matrix */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">CBSE Norms</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] heading-serif mt-1">
              Age Eligibility Criteria (2026–27)
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0B1E48] text-white uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-6">Grade / Wing</th>
                  <th className="py-3.5 px-6">Age Requirement</th>
                  <th className="py-3.5 px-6">Criterion Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {eligibility.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-3.5 px-6 font-bold text-[#0B1E48]">{row.grade}</td>
                    <td className="py-3.5 px-6">{row.age}</td>
                    <td className="py-3.5 px-6 text-slate-500 text-xs">{row.cutoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Mandatory Documents Checklist */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-900" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B1E48] heading-serif">
                Documentation Checklist for Verification
              </h2>
              <p className="text-xs text-slate-500">
                Kindly carry original certificates along with two self-attested photocopies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            {documents.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium">
              Have questions regarding fee structure or school bus transport?
            </span>
            <Link
              to="/contact"
              className="text-xs font-bold text-blue-900 hover:text-amber-600 flex items-center gap-1"
            >
              <span>Contact Admissions Cell</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
