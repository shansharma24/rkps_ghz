import React, { useState } from 'react';
import { Download, FileText, CalendarDays, BookOpen, Clock, CheckCircle2, FileCheck, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const curriculumDownloads = [
  {
    id: 'curr-1',
    title: 'Senior Secondary (Class XI & XII) Science Stream Syllabus',
    category: 'Senior Wing (XI-XII)',
    grade: 'Class 11 & 12',
    subjects: 'Physics, Chemistry, Mathematics, Biology, Computer Science (Python), Physical Education',
    year: '2026–27',
    format: 'PDF',
    size: '2.4 MB',
    date: 'Updated Jan 2026',
    desc: 'Detailed unit-wise weightage, CBSE blueprint, practical experiment lists, and evaluation scheme.'
  },
  {
    id: 'curr-2',
    title: 'Senior Secondary (Class XI & XII) Commerce & Humanities Syllabus',
    category: 'Senior Wing (XI-XII)',
    grade: 'Class 11 & 12',
    subjects: 'Accountancy, Business Studies, Economics, History, Pol. Science, Applied Maths, English Core',
    year: '2026–27',
    format: 'PDF',
    size: '2.1 MB',
    date: 'Updated Jan 2026',
    desc: 'CBSE syllabus outline, project work guidelines, case study methodology, and board marking rubrics.'
  },
  {
    id: 'curr-3',
    title: 'Secondary School (Class IX & X) CBSE Board Curriculum',
    category: 'Secondary (IX-X)',
    grade: 'Class 9 & 10',
    subjects: 'English Language & Lit, Hindi Course A, Mathematics Standard/Basic, Science, Social Science, AI',
    year: '2026–27',
    format: 'PDF',
    size: '3.1 MB',
    date: 'Updated Jan 2026',
    desc: 'Comprehensive annual syllabus, internal assessment bifurcation (Periodic tests, Portfolio, Lab Manuals).'
  },
  {
    id: 'curr-4',
    title: 'Middle Wing (Class VI to VIII) Integrated Academic Blueprint',
    category: 'Middle Wing (VI-VIII)',
    grade: 'Class 6 - 8',
    subjects: 'English, Hindi, Sanskrit, Mathematics, Integrated Science, Social Science, Coding & Robotics',
    year: '2026–27',
    format: 'PDF',
    size: '1.9 MB',
    date: 'Updated Jan 2026',
    desc: 'Experiential learning modules aligned with NEP 2020 national curriculum framework.'
  },
  {
    id: 'curr-5',
    title: 'Primary Wing (Class I to V) Experiential Curriculum & Activity Guide',
    category: 'Primary Wing (I-V)',
    grade: 'Class 1 - 5',
    subjects: 'Foundational Literacy, Numeracy, EVS, General Awareness, Visual Arts, Music & Physical Fitness',
    year: '2026–27',
    format: 'PDF',
    size: '1.6 MB',
    date: 'Updated Jan 2026',
    desc: 'Child-centric competency based curriculum focusing on foundational numeracy and storytelling pedagogy.'
  },
  {
    id: 'curr-6',
    title: 'Foundational Stage (Nursery, LKG, UKG) Early Childhood Framework',
    category: 'Early Years',
    grade: 'Nursery - UKG',
    subjects: 'Phonics, Sensory Discovery, Motor Development, Montessori Play, Social Readiness',
    year: '2026–27',
    format: 'PDF',
    size: '1.4 MB',
    date: 'Updated Jan 2026',
    desc: 'Activity-based non-formal syllabus following the National Curriculum Framework for Foundational Stage (NCF-FS).'
  }
];

const datesheetDownloads = [
  {
    id: 'date-1',
    title: 'Annual Board Examination Datesheet 2026 (Class X & XII)',
    category: 'CBSE Board Examinations',
    period: 'February – April 2026',
    timing: '10:30 AM – 01:30 PM (Morning Shift)',
    format: 'PDF',
    size: '1.1 MB',
    status: 'Official Schedule',
    desc: 'Official CBSE date sheet for All India Secondary School Examination (AISSE) and Senior School Certificate (AISSCE).'
  },
  {
    id: 'date-2',
    title: 'Annual Final Term Examinations Timetable 2026 (Class IX & XI)',
    category: 'Internal Assessment',
    period: 'February 2026',
    timing: '09:00 AM – 12:15 PM',
    format: 'PDF',
    size: '850 KB',
    status: 'Active',
    desc: 'Comprehensive datesheet, preparatory leave details, and subject-wise reporting instructions.'
  },
  {
    id: 'date-3',
    title: 'Periodic Test 3 (PT-3) Date Sheet (Class I to VIII)',
    category: 'Periodic Assessments',
    period: 'Dec 2025 – Jan 2026',
    timing: '08:30 AM – 11:30 AM',
    format: 'PDF',
    size: '620 KB',
    status: 'Published',
    desc: 'Mid-session unit test evaluation schedule and syllabus coverage blueprint for primary & middle wings.'
  },
  {
    id: 'date-4',
    title: 'CBSE Class XII Practical & Viva-Voce Examination Schedule',
    category: 'Practical Examinations',
    period: 'January 2026',
    timing: 'Batch 1: 08:30 AM | Batch 2: 12:30 PM',
    format: 'PDF',
    size: '780 KB',
    status: 'Concluded',
    desc: 'External examiner roster, physics/chemistry/biology project submission criteria and lab viva schedules.'
  },
  {
    id: 'date-5',
    title: 'School Academic Calendar & Gazetted Holidays List 2026–27',
    category: 'Annual Calendar',
    period: 'Academic Session 2026–27',
    timing: 'Full Session Schedule',
    format: 'PDF',
    size: '1.3 MB',
    status: 'Annual Release',
    desc: 'Complete annual almanac highlighting term breaks, inter-school tournaments, PTM dates, and summer vacations.'
  }
];

export default function DownloadsPage({ onOpenAdmission }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadSuccess, setDownloadSuccess] = useState('');

  const handleDownload = (title, filename) => {
    // Simulated instant download action
    setDownloadSuccess(`Downloading "${title}"...`);
    const blob = new Blob([
      `Radha Krishna Public School (Affiliation No: 2130572 | School Code: 2132212)\nIndirapuram, Ghaziabad, U.P.\n\nDocument: ${title}\nAcademic Session: 2026-27\nDownloaded from official portal: rkps.edu.in\n`
    ], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename || 'RKPS_Document'}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => {
      setDownloadSuccess('');
    }, 4000);
  };

  const filteredCurriculum = curriculumDownloads.filter(c =>
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.subjects.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.grade.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDatesheets = datesheetDownloads.filter(d =>
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
            <FileCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Academic Resources &amp; Downloads</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black heading-serif tracking-tight text-white leading-tight">
            Curriculum &amp; Datesheets
          </h1>

          <div className="w-20 h-1.5 bg-amber-400 mx-auto mt-4 mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-medium">
            Access official CBSE syllabi, course blueprints, examination schedules, and academic calendars for Radha Krishna Public School.
          </p>

          {/* Download Toast Notification */}
          {downloadSuccess && (
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/90 text-white text-xs font-bold shadow-lg animate-fadeIn">
              <CheckCircle2 className="w-4 h-4" />
              <span>{downloadSuccess}</span>
            </div>
          )}

          {/* Quick Filter Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              All Documents
            </button>
            <a
              href="#curriculum"
              onClick={() => setActiveTab('curriculum')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'curriculum'
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum ({curriculumDownloads.length})</span>
            </a>
            <a
              href="#datesheet"
              onClick={() => setActiveTab('datesheet')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'datesheet'
                  ? 'bg-amber-400 text-slate-950 shadow-md scale-105'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Datesheets ({datesheetDownloads.length})</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Search & Controls Bar */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by class, subject, or exam..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>Academic Session: <strong className="text-blue-900 font-extrabold">2026–27</strong></span>
          </div>
        </div>
      </section>

      {/* 3. Curriculum Section */}
      {(activeTab === 'all' || activeTab === 'curriculum') && (
        <section id="curriculum" className="scroll-mt-28 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-widest">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Academic Blueprints</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] heading-serif mt-1">
                Curriculum &amp; Syllabi
              </h2>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
              CBSE Affiliated Pedagogy
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCurriculum.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {item.grade}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {item.format} • {item.size}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B1E48] heading-serif mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-3">
                    {item.desc}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 font-medium mb-4">
                    <strong className="text-slate-800">Key Subjects:</strong> {item.subjects}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.date}
                  </span>
                  <button
                    onClick={() => handleDownload(item.title, `RKPS_Curriculum_${item.grade.replace(/\s+/g, '_')}`)}
                    className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>Download Syllabus</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Datesheet Section */}
      {(activeTab === 'all' || activeTab === 'datesheet') && (
        <section id="datesheet" className="scroll-mt-28 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-widest">
                <CalendarDays className="w-4 h-4 text-amber-600" />
                <span>Examination Schedules</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E48] heading-serif mt-1">
                Datesheets &amp; Examination Timetables
              </h2>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
              Session 2025–26 &amp; 2026–27
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDatesheets.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0B1E48] heading-serif mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium mb-4">
                    {item.desc}
                  </p>

                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                      <span className="text-[11px] font-medium"><strong>Period:</strong> {item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="text-[11px] font-medium"><strong>Shift:</strong> {item.timing}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    {item.format} • {item.size}
                  </span>
                  <button
                    onClick={() => handleDownload(item.title, `RKPS_Datesheet_${item.id}`)}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 transition-all shadow hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Schedule</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. Examination Helpline Callout */}
      <section className="py-14 bg-gradient-to-r from-[#0B1E48] via-[#102a6b] to-[#0B1E48] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black heading-serif mb-3">
            Have Questions Regarding Syllabi or Datesheets?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto mb-6 font-medium">
            Our academic coordinators and examination desk are available during school hours (8:00 AM – 3:00 PM) to assist parents and students.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105 cursor-pointer"
            >
              Contact Examination Desk
            </Link>
            <button
              onClick={onOpenAdmission}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Apply for Admission 2026–27
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
