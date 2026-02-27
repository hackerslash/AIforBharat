/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C5F2D',
        cream: '#FCF6F5',
        beige: '#EDE8DF',
        muted: '#D4CFC8',
        amber: '#E69A28',
        error: '#EF4444',
        success: '#22C55E',
        'vendor-bg': '#F7F5F0',
        'vendor-white': '#FFFFFF',
        'gray-text': '#A0A0A0',
      }
    },
  },
  plugins: [],
}
