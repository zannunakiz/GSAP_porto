/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FCF1E4',
        textprim: "#333"
      },
      fontFamily: {
        'playwrite': ['Playwrite DK Loopet', 'sans-serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'cormorant': ['Cormorant Infant', 'serif'],
        'cormorant-italic': ['Cormorant Infant', 'serif', 'italic'],
      },
    },
  },
  plugins: [],
}

