/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0.2px 10px 5px rgba(0, 0, 0, 0.1)", // Customize the shadow as needed
      },
      height: {
        128: "32rem", // Example of a custom height
        144: "47rem",
      },
      fontSize: {
        tiny: "0.625rem", // 10px
        xxs: "0.75rem", // 12px
        xxl: "1.75rem", // 28px
        xxxl: "2.5rem", // 40px
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
