/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#2F8F9D",
        "primary-200": "#3BACB6",
        "primary-300": "#82DBD8",
        "primary-400": "#B3E8E5",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("daisyui")],
};
