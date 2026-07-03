/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#0b3d2e",
          dark: "#002821",
          deep: "#08281f",
          light: "#0f4d3a",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#e8c766",
          bright: "#f0d67f",
          dark: "#9c7d1a",
        },
        cream: {
          DEFAULT: "#fbf7ee",
          dark: "#f2ead4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 8px 30px -8px rgba(201, 162, 39, 0.35)",
        card: "0 10px 40px -12px rgba(6, 32, 24, 0.25)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f0d67f 0%, #c9a227 50%, #9c7d1a 100%)",
        "royal-gradient": "linear-gradient(160deg, #0b3d2e 0%, #002821 100%)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
