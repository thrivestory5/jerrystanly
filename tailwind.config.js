/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf8eb',
          100: '#f6efcc',
          200: '#eddca0',
          300: '#e3c26d',
          400: '#d7a83d',
          500: '#c59223',
          600: '#aa731a',
          700: '#875317',
          800: '#71421a',
          900: '#60371a',
          primary: '#D4AF37',
          light: '#F5D77F',
          dark: '#997B20',
          ambient: 'rgba(212, 175, 55, 0.12)'
        },
        cinema: {
          black: '#070709',
          card: '#0f0f13',
          border: 'rgba(212, 175, 55, 0.2)',
          accent: '#181820',
          muted: '#8e8e9b'
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Cinzel Decorative"', '"Cinzel"', 'serif']
      },
      backgroundImage: {
        'cinema-radial': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.15) 0%, rgba(7, 7, 9, 0) 70%)',
        'gold-gradient': 'linear-gradient(135deg, #F5D77F 0%, #D4AF37 50%, #997B20 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(24, 24, 32, 0.8) 0%, rgba(15, 15, 19, 0.95) 100%)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 6s ease-in-out infinite'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}
