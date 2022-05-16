module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "475px",
      sm: "576px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        customOrange: "#F95700",
        customPurple: "#2E186A",
      },
    },
  },
};
