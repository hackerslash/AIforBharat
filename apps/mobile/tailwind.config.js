/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
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
        vendorBg: '#F7F5F0',
        vendorWhite: '#FFFFFF',
        grayText: '#A0A0A0',
      }
    }
  },
  plugins: [],
}
