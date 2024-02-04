/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#fbfada",
        main: "#12372a",
        secondary:"#436850",
        light:"#ADBC9F",
        darkslategray: {
          "100": "#456b5e",
          "200": "#436850",
        },
        white: "#fff",
        darkseagreen: "#adbc9f",
        gray: "#7a8a6b",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        heading: "'Inknut Antiqua'",
        description: "Inter",
        "inria-sans": "'Inria Sans'",
      },
      borderRadius: {
        "10xl": "29px",
        "39xl": "58px",
      },
    },
    fontSize: {
      "2xs": "11px",
      sm: "14px",
      "3xs": "10px",
      "3xl": "22px",
      "6xl": "25px",
      inherit: "inherit",
    }
  },
  corePlugins: {
    preflight: false,
  },
};
