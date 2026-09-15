/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#808080",
        accent: "#d1d1d1",
        surface: "#1a1a1a",
        muted: "#404040",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
}