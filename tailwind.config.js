/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "white",
      secondary: "#f0f5f4",
      // secondary: "#F8FFFB",
      tertiary: "#fcf5e9",
      "title-color": "#374151",
      "para-color": "#6b7280",
      "btn-color": "C6EBC5",
      black: "black",
      "dark-secondary": "#496a67",
      "biege-secondary": "#ca901b",
      "bd-color": "#6b7280",
    },
    letterSpacing: {
      wider: ".1rem",
    },
    extend: {
      fontFamily: {
        "primary-font": ["Roboto Condensed"],
        titleFont: ["Tallica-Medium"],
        subFont: ["Bartina"],
        // paraFont: ["font-sans"],
        paraFont: ["WantedSans"],
      },
      fontSize: {
        sm: "10px",
        md: "15px",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "4rem",
        "5xl": "5rem",
      },
    },
  },
  plugins: [],
};
