module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"] ,
        Bricolage : ["Bricolage Grotesque", "sans-serif"],
        Mulish : ["Mulish", "sans-serif"],
        Besley : ["Besley", "serif"],
        Outfit : ["Outfit", "sans-serif"],
        Playwrite : ["Playwrite HR Lijeva", "cursive"],
        raleway : ["Raleway", "sans-serif"],
        Inter: ['Inter', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00f3ff',
        'holographic': 'rgba(255,255,255,0.15)',
        'glass': 'rgba(255, 255, 255, 0.05)',
        'purple': {
          500: '#a855f7',
          600: '#9333ea',
        }
      },
      boxShadow: {
        'neon-lg': '0 10px 15px -3px rgba(0, 243, 255, 0.2)',
      },
      animation: {
        'gradient-x': 'gradient-x 5s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}