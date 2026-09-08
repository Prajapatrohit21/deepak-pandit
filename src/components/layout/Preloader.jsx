// ============================================================
// Preloader.jsx — Unique Divine Vedic Mandala & Sacred Flame Loader
// ============================================================
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // Quick, elegant timing - 1.8s total so visitor is not delayed
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(() => setVisible(false), 700);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      id="preloader"
      className={hiding ? 'hidden' : ''}
      role="status"
      aria-label="Loading"
    >
      {/* Ambient spiritual glow in background */}
      <div className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-[radial-gradient(circle,_rgba(245,200,66,0.18)_0%,_rgba(139,26,26,0.08)_50%,_transparent_70%)] pointer-events-none blur-2xl" />

      {/* Center Sacred Emblem Container */}
      <div className="relative flex items-center justify-center mb-6">
        
        {/* Outer Rotating Sacred Vedic Chakra (12-ray Mandala) */}
        <svg
          className="w-48 h-48 sm:w-56 sm:h-56 animate-spin-slow pointer-events-none text-gold/30"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
        >
          {/* 12-petaled sun chakra rays */}
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 50 50)`}>
              <path
                d="M50 7 L53.5 20 L46.5 20 Z"
                fill="url(#chakraGoldGrad)"
                opacity="0.85"
              />
              <circle cx="50" cy="5" r="1.5" fill="#F5C842" />
            </g>
          ))}
          {/* Decorative concentric rings */}
          <circle cx="50" cy="50" r="42" stroke="#C8860A" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.6" />
          <circle cx="50" cy="50" r="32" stroke="#F5C842" strokeWidth="0.75" opacity="0.5" />
          <defs>
            <linearGradient id="chakraGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5C842" />
              <stop offset="100%" stopColor="#C8860A" />
            </linearGradient>
          </defs>
        </svg>

        {/* Counter-rotating inner energy ring */}
        <svg
          className="absolute w-36 h-36 sm:w-40 sm:h-40 animate-spin-reverse pointer-events-none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="37"
            stroke="url(#innerRingGrad)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
            fill="none"
          />
          <defs>
            <linearGradient id="innerRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5C842" />
              <stop offset="50%" stopColor="#E65100" />
              <stop offset="100%" stopColor="#F5C842" />
            </linearGradient>
          </defs>
        </svg>

        {/* Circular Smooth Progress Ring */}
        <svg className="absolute w-44 h-44 sm:w-48 sm:h-48 -rotate-90 pointer-events-none" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="43"
            stroke="rgba(245, 200, 66, 0.12)"
            strokeWidth="2"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="43"
            stroke="url(#progressGoldGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="270.17"
            className="preloader-circle-progress"
            fill="none"
          />
          <defs>
            <linearGradient id="progressGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5C842" />
              <stop offset="70%" stopColor="#FFA000" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Glowing Om Emblem */}
        <div className="absolute flex flex-col items-center justify-center">
          {/* Sacred Trishul & Tripundra Accent */}
          <div className="text-gold/90 text-sm tracking-widest font-devanagari select-none mb-0.5 animate-pulse">
            🔱
          </div>
          {/* Golden Divine Om */}
          <span className="preloader-om-divine font-devanagari select-none">
            ॐ
          </span>
        </div>
      </div>

      {/* Sacred Mantra Text */}
      <p className="text-shimmer font-devanagari text-lg sm:text-xl font-bold tracking-wider mb-2">
        ॥ ॐ नमः शिवाय ॥
      </p>

      {/* Site Title */}
      <h1 className="text-cream text-sm sm:text-base font-devanagari font-semibold tracking-wide text-center px-4">
        मंगल दोष पूजन केंद्र • उज्जैन
      </h1>

      {/* Subtitle Badge */}
      <div className="mt-3 px-3.5 py-1 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm text-gold text-xs font-devanagari tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(245,200,66,0.15)]">
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
        जय श्री महाकाल
      </div>
    </div>
  );
}
