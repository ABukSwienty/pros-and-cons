/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      dropShadow: {
        primary: "0 2px 10px rgba(29, 78, 216, 0.5)",
        secondary: "0 2px 10px rgba(249, 115, 22, 0.50)",
      },
      textColor: {
        primary: "#1d4ed8",
        "primary-s1": "#0ea5e9",
        secondary: "#f97316",
        "secondary-s1": "#fb923c",
        neutral: "#374151",
        "neutral-strong": "#111827",
        "neutral-light": "#f3f4f6",
      },
      backgroundColor: {
        primary: "#1d4ed8",
        "primary-s1": "#0ea5e9",
        secondary: "#f97316",
        "secondary-s1": "#fb923c",
        neutral: "#374151",
        "neutral-strong": "#111827",
        "neutral-light": "#f3f4f6",
      },
    },
  },
};
