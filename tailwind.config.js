/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'below-sm': { 'max': '639px' },
      },

      transitionProperty: {
        'width-left': 'width, left',
      },

      animation: {
        moveGradient1: 'moveGradient1 40s infinite alternate ease-in-out', /* magenta gradient animation */
        moveGradient2: 'moveGradient2 40s infinite alternate ease-in-out', /* cyan gradient animation */
        wave: 'wave 2.5s infinite', /* hand wave animation */
        fadeIn: 'fadeIn 1s ease-in forwards', /* fade in animation */
        blobs: 'blobs 10s ease-in-out infinite alternate',
        scrollTextSmall: "scrollTextSmall 10s linear infinite",
        scrollTextMedium: "scrollTextMedium 10s linear infinite",
        spinShadowDark: "spinShadowDark 0.25s ease-in-out",
        spinShadowLight: "spinShadowLight 0.5s ease-in-out",
        draw: 'draw 2s ease-in-out forwards',
      },

      keyframes: {
        /* Animation keyframes for magenta gradient */
        moveGradient1: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-30vw, -30vh)' },
          '50%': { transform: 'translate(-70vw, 40vh)' },
          '75%': { transform: 'translate(30vw, 60vh)' },
          '100%': { transform: 'translate(0, 0)' },
        },

        /* Animation keyframes for blue gradient */
        moveGradient2: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(40vw, 10vh)' },
          '50%': { transform: 'translate(-10vw, -70vh)' },
          '75%': { transform: 'translate(40vw, -70vh)' },
          '100%': { transform: 'translate(0, 0)' },
        },

        blobs: {
          '0%': { borderRadius: '20% 85% 70% 30% / 70% 50% 20% 60%' },
          '10%': { borderRadius: '74% 26% 47% 53% / 68% 46% 54% 32%' },
          '20%': { borderRadius: '48% 52% 30% 70% / 27% 37% 63% 73%' },
          '30%': { borderRadius: '73% 27% 57% 43% / 28% 67% 33% 72%' },
          '40%': { borderRadius: '63% 37% 56% 44% / 25% 28% 72% 75%' },
          '50%': { borderRadius: '39% 61% 70% 30% / 61% 29% 71% 39%' },
          '60%': { borderRadius: '27% 73% 29% 71% / 73% 51% 49% 27%' },
          '70%': { borderRadius: '39% 61% 65% 35% / 74% 65% 35% 26%' },
          '80%': { borderRadius: '55% 45% 37% 63% / 38% 30% 70% 62%' },
          '90%': { borderRadius: '25% 75% 70% 30% / 39% 50% 50% 61%' },
          '100%': { borderRadius: '66% 34% 33% 67% / 65% 73% 27% 35%' },
        },

        wave: {
          '0%': { transform: 'rotate( 0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate( 0.0deg)' },
          '100%': { transform: 'rotate( 0.0deg)' },
        },

        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        scrollTextSmall: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-1.5em)" },
          "90%": { transform: "translateY(-1.5em)" },
          "100%": { transform: "translateY(0)" },
        },

        scrollTextMedium: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-1.5em)" },
          "90%": { transform: "translateY(-1.5em)" },
          "100%": { transform: "translateY(0)" },
        },

        spinShadowDark: {
          '0%': {
            boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.5)', // Start shadow to the right
          },
          '25%': {
            boxShadow: '-5px 0px 5px rgba(0, 0, 0, 0.5)', // Shadow moves down
          },
          '50%': {
            boxShadow: '0px -5px 5px rgba(192, 192, 192, 0.5)', // Shadow to the left
          },
          '75%': {
            boxShadow: '5px 0px 5px rgba(255, 255, 255, 0.35)', // Shadow moves up
          },
          '100%': {
            boxShadow: '0px 5px 5px rgba(255, 255, 255, 0.25)', // Back to original position
          },
        },

        spinShadowLight: {
          '0%': {
            boxShadow: '10px 0 15px rgba(255, 255, 255, 0.5)', // Start shadow to the right
          },
          '25%': {
            boxShadow: '0px 10px 15px rgba(255, 255, 255, 0.5)', // Shadow moves down
          },
          '50%': {
            boxShadow: '-10px 0 15px rgba(255, 255, 255, 0.5)', // Shadow to the left
          },
          '75%': {
            boxShadow: '0px -10px 15px rgba(255, 255, 255, 0.5)', // Shadow moves up
          },
          '100%': {
            boxShadow: '10px 0 15px rgba(255, 255, 255, 0.5)', // Back to original position
          },
        },

        draw: {
          from: { 'stroke-dasharray': '100', 'stroke-dashoffset': '100' },
          to: { 'stroke-dasharray': '100', 'stroke-dashoffset': '0' },
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

