/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets the default "font-sans" to use your Outfit variable
        sans: ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};