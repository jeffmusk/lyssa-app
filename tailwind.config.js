const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      teal: {
        light: "#57D1CB",
        DEFAULT: "#38b2ac",
        dark: "#347E7A",
      },
      blueKing: {
        light: "#438DCD",
        DEFAULT: "#266aa5",
        dark: "#264F73",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
