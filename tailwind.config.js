/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        title: "#171717",
        text: "#52525b",
        borderColor: "#FFFF00",
        brandLight: "#fef7e7",
        brand: "#a3870d",
        brandHover: "#7c6d0f",
      },
    },
  },
  plugins: [],
};