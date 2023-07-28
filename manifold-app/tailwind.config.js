/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",
          secondary: "#28af3a",
          accent: "#cc7ef7",
          neutral: "#1a202d",
          "base-100": "#f7f5fa",
          info: "#91deee",
          success: "#0f6249",
          warning: "#f1d965",
          error: "#e84f5e",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
