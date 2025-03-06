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
        Inter: ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#4F46E5', // indigo-600
        secondary: '#0D9488' // teal-600
      }
    },
  },
  plugins: [],
}