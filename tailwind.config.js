/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // scans your App Router files
    "./components/**/*.{js,ts,jsx,tsx}", // scans your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = config;
