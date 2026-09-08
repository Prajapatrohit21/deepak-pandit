/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          DEFAULT: '#8B1A1A',
          light: '#A52020',
          dark: '#6B1414',
        },
        saffron: {
          DEFAULT: '#C8860A',
          light: '#E0980C',
          dark: '#A06A08',
        },
        gold: {
          DEFAULT: '#F5C842',
          light: '#F7D46A',
          dark: '#D4A82E',
        },
        cream: {
          DEFAULT: '#FDF8F0',
          light: '#FFFDF7',
          dark: '#F5EDD8',
        },
        divine: {
          dark: '#1C0A00',
          brown: '#2D1B00',
          muted: '#6B4C1E',
          card: '#FFFDF7',
        },
      },
      fontFamily: {
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
        sans: ['Poppins', '"Noto Sans Devanagari"', 'sans-serif'],
        heading: ['"Playfair Display"', '"Noto Sans Devanagari"', 'serif'],
      },
      backgroundImage: {
        'divine-gradient': 'linear-gradient(135deg, #8B1A1A 0%, #C8860A 50%, #F5C842 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(28,10,0,0.85) 0%, rgba(139,26,26,0.70) 60%, rgba(200,134,10,0.40) 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,253,247,1) 0%, rgba(253,248,240,1) 100%)',
        'footer-gradient': 'linear-gradient(180deg, #1C0A00 0%, #2D1500 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-up': 'slideUp 0.8s ease forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shrink-nav': 'shrinkNav 0.3s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px #F5C842, 0 0 20px #F5C842' },
          '100%': { textShadow: '0 0 20px #F5C842, 0 0 40px #F5C842, 0 0 60px #C8860A' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'divine': '0 4px 24px rgba(139,26,26,0.15), 0 1px 4px rgba(200,134,10,0.10)',
        'gold': '0 4px 24px rgba(245,200,66,0.25)',
        'card': '0 2px 16px rgba(45,27,0,0.08)',
        'card-hover': '0 8px 32px rgba(139,26,26,0.18), 0 2px 8px rgba(200,134,10,0.12)',
      },
    },
  },
  plugins: [],
}
