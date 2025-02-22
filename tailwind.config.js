module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"] ,
        Bricolage : ["Bricolage Grotesque", "sans-serif"],
        Mulish : ["Mulish", "sans-serif"],
        Besley : ["Besley", "serif"],
        Outfit : ["Outfit", "sans-serif"],
        Playwrite : ["Playwrite HR Lijeva", "cursive"],
        raleway : ["Raleway", "sans-serif"]
      },
      colors: {
        primary: '#4F46E5',
        secondary: '#818CF8',
        accent: '#FBBF24',
        light: '#F3F4F6',
        dark: '#1F2937',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
}