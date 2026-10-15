import React from 'react';
import { Award, CheckCircle2, FileText, Calendar, Users, ArrowRight, ShieldCheck, HelpCircle, Download, ExternalLink, Eye, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';
import feeStructurePdf from '../assets/SCAN_20261009_082427092.pdf';

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

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenAdmission}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            >
              Fill Online Admission Form
            </button>
            <a
              href="#fee-structure"
              className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>View Fee Structure</span>
            </a>
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

      {/* 4. Official Fee Structure Section */}
      <section id="fee-structure" className="scroll-mt-24 py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2 border border-emerald-200">
            <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Notification • Session 2026–27</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E48] heading-serif mt-1">
            School Fee Structure
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 max-w-2xl mx-auto">
            Transparent and structured tuition schedule approved by Radha Krishna Public School. Access or download the verified official fee circular below.
          </p>
        </div>

        {/* Fee Document Card & Interactive Viewer */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl space-y-6 sm:space-y-8">
          
          {/* Top Bar with Document Metadata & Action Buttons */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 pb-5 sm:pb-6 border-b border-slate-100">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" />
              </div>
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-800 uppercase tracking-wider bg-amber-100/80 px-2 py-0.5 rounded">
                  Official Document (PDF)
                </span>
                <h3 className="text-base sm:text-xl font-bold text-[#0B1E48] heading-serif mt-1">
                  Radha Krishna Public School Fee Schedule
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Academic Session 2026–27 • Verified Circular
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={feeStructurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all text-center"
              >
                <Eye className="w-4 h-4 text-slate-600" />
                <span>Open in New Tab</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={feeStructurePdf}
                download="RKPS_Fee_Structure_2026-27.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold tracking-wide transition-all shadow-md hover:scale-105 active:scale-95 text-center"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Fee PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded Document Viewer Preview */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-900">
            <div className="bg-slate-800 px-4 py-2.5 flex items-center justify-between text-xs text-slate-300">
              <span className="font-semibold flex items-center gap-2 text-[11px] sm:text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Official Fee Notification Preview
              </span>
              <a
                href={feeStructurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 text-[11px] sm:text-xs"
              >
                <span>Fullscreen</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full h-[380px] sm:h-[600px] md:h-[720px] bg-slate-100 relative">
              <object
                data={`${feeStructurePdf}#toolbar=1&navpanes=0`}
                type="application/pdf"
                className="w-full h-full"
              >
                <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-slate-50">
                  <FileText className="w-16 h-16 text-amber-600 mb-4" />
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    Official Fee Structure Document
                  </h4>
                  <p className="text-xs text-slate-500 max-w-md mb-4">
                    Click below to download or view the official Radha Krishna Public School fee circular in your browser.
                  </p>
                  <a
                    href={feeStructurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-950 text-white text-xs font-bold shadow"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Download Official PDF</span>
                  </a>
                </div>
              </object>
            </div>
          </div>

          {/* Fee Policy Highlights Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-1">💳 Flexible Payment Modes</h4>
              <p className="text-slate-600">Quarterly fee schedules payable securely through net banking, debit/credit cards, or online ERP portal.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-1">🛡️ Transparent Policy</h4>
              <p className="text-slate-600">Zero hidden costs or capitation charges. All academic, laboratory, and library dues are clearly delineated.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-1">📞 Fee Helpdesk</h4>
              <p className="text-slate-600">For clarifications on fee concessions or sibling assistance, email <a href="mailto:rkpshelpdesk@gmail.com" className="text-blue-900 font-semibold underline">rkpshelpdesk@gmail.com</a>.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Mandatory Documents Checklist */}
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
