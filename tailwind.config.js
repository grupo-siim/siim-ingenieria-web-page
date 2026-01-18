/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#c10e18",
          dark: "#a00c14",
        },
      },
      animation: {
        "carousel-scroll": "carousel-scroll 40s linear infinite",
      },
      keyframes: {
        "carousel-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 3))" },
        },
      },
    },
  },
  plugins: [],
};
