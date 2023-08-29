module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f8f6f6", 400: "#b6b6b6", 700: "#606060" },
        green: { A700: "#00d54b" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { agrandir: "Agrandir", mulish: "Mulish" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
