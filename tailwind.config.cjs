module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
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
    },
  },
  plugins: [require("preline/plugin")],
};
