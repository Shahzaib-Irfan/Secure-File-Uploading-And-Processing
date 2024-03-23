module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f0f5ff", "600_01": "#6b6c7e", "100_01": "#f1f2f5" },
        white: { A700: "#ffffff" },
        indigo: { 50: "#e7e7ed" },
        blue_gray: { 100: "#cdced9", 900: "#272833" },
        blue: { 800: "#004ad7" },
      },
      boxShadow: { xs: "0px 2px  4px 0px #2728331e", bs: "inset 0px -1px  1px 0px #e7e7ed" },
      fontFamily: { sfprotext: "SF Pro Text" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
