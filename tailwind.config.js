module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        xl: "4rem",
      },
      center: true,

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },

    fontFamily: {
      body: ["Montserrat"],
      heading: ["Poppins"],
    },

    extend: {
      colors: {
        primary: "rgb(255, 156, 68)",
        primaryDark: "rgba(255, 156, 68, 0.5)",
        black: "rgb(3,11,22)",
        textwhite: "rgba(255,255,255,0.9)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
