/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1400px" },
        xl3: { max: "1505px" },
        xl: { max: "1279px" },
        x12: { max: "1277px" },

        x123: { max: "1250px" },
        lg1: { max: "1041px" },
        lg3: { max: "1040px" },
        lg: { max: "1023px" },
        lg2: { max: "1075px" },
        air: { max: "820px" },
        air2: { max: "850px" },
        md: { max: "767px" },
        md1: { max: "766px" },
        md2: { max: "700" },
        sm: { max: "639px" },
        sm2: { max: "665" },
        m480: { max: "480px" },
        m481: { max: "448px" },

        m11: { max: "451px" },

        s360: { max: "360px" },
        s361: { max: "325px" },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bakbak: ["Bakbak One", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
