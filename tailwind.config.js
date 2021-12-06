module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: ["2px solid #1189B8", "1px"],
      },
      colors: {
        primary: "#1189B8",
        secondary: "#232323",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
