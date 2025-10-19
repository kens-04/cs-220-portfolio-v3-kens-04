/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accent: "#7c5cff",
      },
    },
  },//
  plugins: [],
  safelist: [
    "bg-white",
    "bg-black",
    "text-white",
    "text-black",
    "ring-1",
    "ring-gray-200",
    "ring-white/10",
    "dark",
    "container",
    "mx-auto",
    "px-4",
    "md:px-6",
  ],
};
