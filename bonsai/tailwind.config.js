/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back-green': '#00b289',
        'tooltip-yellow': '#f8db62',
        'font-black' : '#4c4d5f',
      }
    },
  },
  plugins: [],
}

