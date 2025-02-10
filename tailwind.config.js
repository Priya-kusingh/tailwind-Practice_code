/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue,html}", // Adjust based on your file structure
    // "./components/**/*.{js,ts,jsx,tsx,vue,html}",
    "./dist/**/*.{js,ts,jsx,tsx,vue,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

