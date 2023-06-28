module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Roboto", "sansserif"],
      logoFont: ["Style Script", "cursive"],
    },
    container: {
      padding: {
        DEFAULT: "30px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#F5E6E0",
        femaleBanner: "#F6E8E3",
        maleBanner: "#B8D4D5",
      },
    },
  },
  plugins: [],
};
