/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Real deep navy blue scale
        navy: {
          50:  '#f0f5ff',
          100: '#dce8fa',
          200: '#b9d0f2',
          300: '#87afde',
          400: '#4e84c4',
          500: '#2860a8',
          600: '#1b4b8d',
          700: '#103b75',
          800: '#0d2e60',
          900: '#091e42',
          950: '#040f24',
        },
        'canada-red': {
          DEFAULT: '#c8102e',
          dark:    '#a00d24',
          light:   '#e8274a',
          50:      '#fff0f2',
          100:     '#ffe0e5',
        },
        gold: {
          DEFAULT: '#b8962e',
          light:   '#d4b554',
          dark:    '#8a6e1e',
        },
        warm: {
          50:  '#fdfcfb',
          100: '#faf6f4',
        },
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem',  { lineHeight: '1.0' }],
        '8xl': ['6rem',    { lineHeight: '1.0' }],
      },
      boxShadow: {
        'card':       '0 2px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.14), 0 4px 12px rgba(0,0,0,0.06)',
        'nav':        '0 2px 20px rgba(0,0,0,0.10)',
        'red':        '0 8px 32px rgba(200,16,46,0.35)',
        'red-sm':     '0 4px 16px rgba(200,16,46,0.25)',
      },
      animation: {
        'fade-in-up':    'fadeInUp 0.6s ease forwards',
        'pulse-soft':    'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
