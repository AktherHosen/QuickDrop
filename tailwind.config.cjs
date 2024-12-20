module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#75a3e9",
        secondary: "#d7d7dc",
      },
      backgroundColor: {
        primary: "#75a3e9",
        secondary: "#d7d7dc",
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
