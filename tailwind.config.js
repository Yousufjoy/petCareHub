/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fanwood: ["Fanwood_Text", "serif"],
      },
      colors: {
        primary: "#7A7A7A",
      },
    },
  },
  daisyui: {
    themes: ["light"], // Enforce the light theme
  },
  plugins: [require("daisyui")],
};
