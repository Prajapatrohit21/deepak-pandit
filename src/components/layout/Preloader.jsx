// ============================================================
// Preloader.jsx — Om symbol animated loader
// ============================================================
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(() => setVisible(false), 800);
    }, 2200);
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
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-40 h-40 rounded-full border border-gold/10 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute w-56 h-56 rounded-full border border-saffron/5 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
      </div>

      {/* Om Symbol */}
      <div className="preloader-om select-none" aria-hidden="true">ॐ</div>

      {/* Site name */}
      <p
        className="mt-4 text-gold/80 text-sm font-devanagari tracking-widest text-center animate-fade-in"
        style={{ animationDelay: '0.5s', opacity: 0 }}
      >
        मंगल दोष पूजन केंद्र
      </p>
      <p
        className="mt-1 text-cream/40 text-xs tracking-wider text-center animate-fade-in"
        style={{ animationDelay: '0.8s', opacity: 0 }}
      >
        जय श्री महाकाल
      </p>

      {/* Loading bar */}
      <div className="preloader-bar mt-6">
        <div className="preloader-bar-fill" />
      </div>
    </div>
  );
}
