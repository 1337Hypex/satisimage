/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ember: {
          50: '#fff7ed',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        alloy: {
          900: '#090d10',
          850: '#0d1318',
          800: '#111820',
          750: '#151f28',
          700: '#1d2933',
          500: '#526170',
          300: '#b5c0cb',
        },
      },
      boxShadow: {
        panel: '0 18px 60px rgba(0, 0, 0, 0.38)',
        ember: '0 0 0 1px rgba(249, 115, 22, 0.35), 0 0 28px rgba(249, 115, 22, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
