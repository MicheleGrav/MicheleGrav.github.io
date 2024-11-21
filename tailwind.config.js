/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      animation: {
        moveGradient1: 'moveGradient1 40s infinite alternate ease-in-out', /* animate.moveGradient1 */
        moveGradient2: 'moveGradient2 40s infinite alternate ease-in-out', /* animate.moveGradient1 */
        wave: 'wave 2.5s infinite',
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

        /* Animation keyframes for magenta gradient */
        moveGradient2: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(40vw, 10vh)' },
          '50%': { transform: 'translate(-10vw, -70vh)' },
          '75%': { transform: 'translate(40vw, -70vh)' },
          '100%': { transform: 'translate(0, 0)' },
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
        }
      }
    },
  },
  plugins: [
  ],
}

