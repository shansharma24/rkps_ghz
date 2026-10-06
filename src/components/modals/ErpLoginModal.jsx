import React, { useState } from 'react';
import { X, Lock, User, Shield, CheckCircle } from 'lucide-react';

export default function ErpLoginModal({ isOpen, onClose }) {
  const [role, setRole] = useState('parent');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    setTimeout(() => {
      setLoggedIn(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6 text-blue-800" />
          </div>
          <h3 className="text-xl font-bold text-blue-950 heading-serif">
            RKPS Institutional ERP Portal
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Access attendance, grade books, report cards &amp; online fee payments
          </p>
        </div>

        {loggedIn ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h4 className="text-base font-bold text-emerald-800">
              Authentication Successful!
            </h4>
            <p className="text-xs text-slate-500">Redirecting to your secure dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Role Switcher */}
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setRole('parent')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                  role === 'parent' ? 'bg-white text-blue-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Parent
              </button>
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                  role === 'student' ? 'bg-white text-blue-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('staff')}
                className={`py-1.5 text-xs font-bold rounded-lg transition-all ${
                  role === 'staff' ? 'bg-white text-blue-950 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Faculty
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {role === 'parent' ? 'Registered Mobile No. or Parent ID' : role === 'student' ? 'Student Enrollment / Admission No.' : 'Faculty Employee Code'}
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder={role === 'parent' ? 'e.g. 9876543210' : role === 'student' ? 'RKPS-2024-XXXX' : 'EMP-XXX'}
                  className="w-full text-xs rounded-lg border-slate-300 border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-bold text-slate-700">Password / PIN</label>
                <a href="#" className="text-[11px] text-blue-600 hover:underline">Forgot?</a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs rounded-lg border-slate-300 border focus:border-blue-600 focus:ring-1 focus:ring-blue-600 py-2.5 px-3 bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow hover:shadow-md"
            >
              Sign In to ERP Portal
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
