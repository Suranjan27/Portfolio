 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        deepTeal: '#000000',     // Pure Black (Dark Mode Background)
        limeAccent: '#f3701e',   // Your New Orange (Primary Accents)
        orangeAccent: '#4b607f', // Your Slate Blue (Secondary Accents)
        cream: '#e8d8c9',        // Your Beige (Light Mode Background)
        darkTeal: '#000000',     // Pure Black (Light Mode Text)
      },
      keyframes: {
        marqueeStd: {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
        marqueeRev: {
          '0%': { transform: 'translate3d(-50%, 0, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)' },
        }
      },
      animation: {
        marqueeStd: 'marqueeStd 30s linear infinite',
        marqueeRev: 'marqueeRev 30s linear infinite',
      }
    },
  },
  plugins: [],
}