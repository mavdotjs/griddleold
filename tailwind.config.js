/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['"Bagel Fat One", system-ui, sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}