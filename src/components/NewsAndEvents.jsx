import React, { useState } from 'react';
import { Calendar, ArrowRight, Sparkles, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const newsArticles = [
  {
    id: 1,
    featured: true,
    category: 'Silver Jubilee Flagship',
    categoryColor: 'bg-amber-100 text-amber-900 border-amber-300',
    title: 'Silver Jubilee Annual Function: A Quarter-Century of Academic Distinction & Cultural Heritage',
    date: 'February 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Marking 25 years of scholastic brilliance, over 1,200 student performers presented theatrical epics, symphony orchestra recitals, and classical dance in the presence of distinguished CBSE dignitaries and educationists.',
    fullContent: 'Radha Krishna Public School celebrated its Silver Jubilee milestone with unprecedented grandeur at the Shri Radha Krishna Auditorium. Founded in 1999, the institution honored founding educators, alumni pioneers, and board toppers. The evening showcased classical Kathak and Bharatnatyam recitals, an English theatrical adaptation, and a digital robotics exhibition by middle wing scholars.'
  },
  {
    id: 2,
    featured: false,
    category: 'STEM & Innovation',
    categoryColor: 'bg-blue-100 text-blue-900 border-blue-300',
    title: 'RKPS Robotics Squad Clinches 1st Prize at Regional CBSE STEM Hackathon',
    date: 'January 2026',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Our Grade IX & XI robotics scholars designed an automated IoT-based eco-irrigation system, outperforming 45 competing regional schools.',
    fullContent: 'Demonstrating exceptional analytical rigor, the RKPS Atal-inspired STEM team developed an autonomous micro-irrigation controller powered by Arduino and soil moisture sensor networks. The project won the Innovation Gold Trophy at the National CBSE Science Exhibition.'
  },
  {
    id: 3,
    featured: false,
    category: 'Sports Championship',
    categoryColor: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    title: 'Inter-School Athletics Meet: RKPS Claims Overall Championship Trophy',
    date: 'December 2025',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Student athletes clinched 18 gold, 12 silver, and 9 bronze medals across 100m sprint, long jump, and basketball tournaments.',
    fullContent: 'Hosted at our Olympic-standard sports arena, the three-day athletic meet witnessed participation from over 30 schools across NCR. Radha Krishna Public School secured the Best Disciplined Contingent and Overall Championship shield.'
  },
  {
    id: 4,
    featured: false,
    category: 'Scholastic Honors',
    categoryColor: 'bg-purple-100 text-purple-900 border-purple-300',
    title: 'Felicitation of 42 Scholars Scoring 95%+ in CBSE Board Pre-Boards',
    date: 'November 2025',
    readTime: '2 min read',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Principal Dr. Rupa Tyagi and Director Dr. Satish Yadav awarded merit certificates and scholarships to high-achieving board candidates.',
    fullContent: 'In a ceremonial assembly, RKPS recognized exemplary scholastic performance in mock board examinations. Meritorious scholars across Science, Commerce, and Humanities were granted special research carrels and academic commendations.'
  }
];

export default function NewsAndEvents() {
  const [activeArticle, setActiveArticle] = useState(null);

  const featured = newsArticles.find((a) => a.featured);
  const sideArticles = newsArticles.filter((a) => !a.featured);

  return (
    <section className="py-16 md:py-24 bg-[#fff6f8] relative overflow-hidden border-b border-rose-100/80" data-purpose="news-and-events" id="news">
      {/* Signature Red/Rose Polka-Dot Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#f43f5e 1.75px, transparent 1.75px)',
          backgroundSize: '22px 22px',
          opacity: 0.5
        }}
      />

      {/* Top-Right Magenta/Rose Curved Corner Accent */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 pointer-events-none overflow-hidden z-0">
        <div 
          className="w-72 sm:w-96 md:w-[420px] h-72 sm:h-96 md:h-[420px] -top-24 sm:-top-32 md:-top-36 -right-24 sm:-right-32 md:-right-36 absolute rounded-full bg-gradient-to-bl from-[#e11d48] via-[#e11d48] to-[#be185d] opacity-90 shadow-md"
        />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* Section Header (Clean Typography, No Pill) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 border-b border-slate-200 pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">
              Campus Chronicles
            </p>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 heading-serif tracking-tight">
              News, Stories &amp; Event Spotlights
            </h2>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors uppercase tracking-wider group"
          >
            <span>View All Campus Dispatches</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Magazine Grid (1 Large Featured + 3 Stacked Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Featured Large Article Card (7 cols) */}
          {featured && (
            <div 
              onClick={() => setActiveArticle(featured)}
              className="lg:col-span-7 bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden bg-slate-900">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-xs font-bold border backdrop-blur-md shadow ${featured.categoryColor}`}>
                  {featured.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    <span>{featured.date}</span>
                  </span>
                  <span>{featured.readTime}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 heading-serif group-hover:text-blue-900 transition-colors leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3 font-normal">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors flex items-center gap-1">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                    Silver Jubilee Series
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right: Stack of 3 Smaller News Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {sideArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 flex gap-4 group cursor-pointer hover:border-blue-200"
              >
                <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${article.categoryColor}`}>
                        {article.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {article.date}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-blue-900 transition-colors heading-serif leading-snug">
                      {article.title}
                    </h4>
                  </div>

                  <span className="text-[11px] font-bold text-blue-900 group-hover:text-amber-600 transition-colors flex items-center gap-1 mt-2">
                    <span>Details &rarr;</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
          <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleUp max-h-[88vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${activeArticle.categoryColor}`}>
                {activeArticle.category}
              </span>
              <span className="text-xs text-slate-400 font-medium ml-3">
                {activeArticle.date} • {activeArticle.readTime}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 heading-serif leading-snug mb-4">
              {activeArticle.title}
            </h3>

            <div className="rounded-2xl overflow-hidden aspect-video bg-slate-900 mb-6 shadow-md">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-6">
              {activeArticle.fullContent}
            </p>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-blue-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors shadow"
              >
                Close Story
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
