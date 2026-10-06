import React, { useState } from 'react';
import { Phone, MessageSquare, Bot, X, Send, Sparkles } from 'lucide-react';

export default function FloatingQuickActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Namaste! Welcome to Radha Krishna Public School Helpdesk. How can I assist you today? You can ask about Admissions 2025–26, Fee Structure, or Campus Facilities.'
    }
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userText = chatInput.trim();
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setChatInput('');

    // Automated smart assistant response
    setTimeout(() => {
      let botReply = "Thank you for asking! For detailed admission procedures and fee schedules for 2025–26, you can fill the enquiry form on our page or call our admission desk at +91 120-2800000.";
      
      const lower = userText.toLowerCase();
      if (lower.includes('fee')) {
        botReply = "Our fee structure is transparent and structured by grade levels (Pre-Primary, Primary, Middle, and Senior Secondary). We offer online fee payment via our Parent Portal. Would you like us to email you the complete fee brochure?";
      } else if (lower.includes('admission') || lower.includes('apply')) {
        botReply = "Admissions for academic session 2025–26 are currently open for Pre-Nursery to Class XII. You can click 'Apply for Admission' above or submit your phone number in our enquiry form.";
      } else if (lower.includes('timing') || lower.includes('hour') || lower.includes('time')) {
        botReply = "School timings are Monday to Saturday: 8:00 AM to 2:00 PM for scholars, and our administrative office remains open until 4:00 PM.";
      } else if (lower.includes('affiliation') || lower.includes('cbse')) {
        botReply = "Radha Krishna Public School is proudly affiliated with the Central Board of Secondary Education (CBSE), New Delhi (Affiliation No: 2130572).";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <>
      <aside className="fixed right-4 bottom-8 z-50 flex flex-col items-center gap-3" data-purpose="floating-contacts">
        {/* Call Quick Button */}
        <a
          href="tel:+911202800000"
          aria-label="Call Us"
          className="w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 group relative"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Call +91 120-2800000
          </span>
        </a>

        {/* WhatsApp Quick Button */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 group relative"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.21 8.21 0 01-5.82 2.42c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.31 3.8 2.53 1.09 2.53.73 2.99.68.46-.04 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z"></path>
          </svg>
          <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Admissions
          </span>
        </a>

        {/* AI Helpdesk Avatar */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Support Assistant"
          className="relative group w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xl hover:scale-110 active:scale-95 transition-all ring-2 ring-blue-600/30"
        >
          <div className="w-full h-full bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
            RK
          </div>
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
        </button>
      </aside>

      {/* AI Helpdesk Interactive Chat Window */}
      {chatOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-slideUp">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h4 className="text-xs font-bold">RKPS Virtual Assistant</h4>
                <p className="text-[10px] text-blue-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></span>
                  Online • Instant Admissions Help
                </p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="p-4 h-64 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[82%] p-3 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-blue-900 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 shadow-sm border border-slate-200/80 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-200 bg-white flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask about admissions, fees, timings..."
              className="flex-1 text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-600"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-lg transition-colors flex items-center justify-center shadow"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
