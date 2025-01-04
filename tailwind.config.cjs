module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#75a3e9",
        primary: "#5c8fdc",
        secondary: "#d7d7dc",
        darkText: "#f8f8f2",
      },
      backgroundColor: {
        // primary: "#75a3e9",
        primary: "#5c8fdc",
        secondary: "#d7d7dc",
        darkBg: "#282A36",
      },
      minHeight: {
        "calc-vh": "calc(100vh - 120px)",
      },
      fontFamily: {
        pacifico: ['"Pacifico"', "serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
