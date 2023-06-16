/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode
        primary: {
          DEFAULT: '#6366F1',
          light: '#A5B4FC',
        },
        secondary: {
          DEFAULT: '#10B981',
          light: '#6EE7B7',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
        },
        neutral: {
          DEFAULT: '#6B7280',
          light: '#F9FAFB',
        },
        // Dark Mode
        darkPrimary: {
          DEFAULT: '#1E293B',
          light: '#2D3748',
        },
        darkSecondary: {
          DEFAULT: '#22C55E',
          light: '#4ADE80',
        },
        darkAccent: {
          DEFAULT: '#F97316',
          light: '#FFB341',
        },
        darkNeutral: {
          DEFAULT: '#9CA3AF',
          light: '#CBD5E1',
        },
      },
      darkMode: 'class',
    },
  },
  plugins: [],
}

