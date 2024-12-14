module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
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
    },
  },
  plugins: [require("preline/plugin")],
};
