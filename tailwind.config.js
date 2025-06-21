/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ REQUIRED
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // ✅ make sure jsx is included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
