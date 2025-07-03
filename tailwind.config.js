/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#f5f5dc',
        'warm-cream': '#faf0e6',
        'gold': '#d4af37',
        'gold-dark': '#b8941f',
        'rich-black': '#1a1a1a',
        'charcoal': '#2d2d2d',
      },
      fontFamily: {
        'display': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
