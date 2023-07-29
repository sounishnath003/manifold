/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2d07ef",
          secondary: "#35e07a",
          accent: "#c61397",
          neutral: "#231c26",
          "base-100": "#fefafa",
          info: "#638dee",
          success: "#76e5b5",
          warning: "#ac6a06",
          error: "#ea5378",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
