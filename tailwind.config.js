/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Poppins", "sans-serif"],
      },
      padding: {
        "pad-btn": ".8rem",
      },
      colors: {
        primary: "#FF602E",
        black: {
          DEFAULT: "#000",
          100: "#111111",
          200: "#0D0B0B",
          300: "#090909",
        },
        white: {
          DEFAULT: "#fff",
          100: "rgba(255 255 255 /0.7)",
          200: "#F1F1F1",
          300: "#F7F7F7",
        },
        red: "rgb(223,46,56)",
        green: "#61E868",
      },
      maxWidth: {
        "large-w": "1220px",
        "blog-container": "37rem",
      },
      dropShadow: {
        "shadow-sm": "drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.09))",
      },
      fontSize: {
        caption: "1.3rem",
      },
    },
  },
  plugins: [],
};
