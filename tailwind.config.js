/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   xs: "400px",
      //   sm: "480px",
      //   md: "768px",
      //   lg: "976px",
      //   xl: "1440px",
      //   "3xl": "1680px",
      //   "4xl": "2200px",
      // },

      colors: {
        background: "#1A191A",
        "purple-primary": "#6366F1",
        "purple-secondary": "#4D5BCE",
        "main-light": "#6366F11f",
        "main-light-grey": "#607b96",
        "main-grey": "#1E2D3D",
        "light-brown": "#898688",
      },
      fontFamily: {
        // satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
    },
  },
  plugins: [],
};
