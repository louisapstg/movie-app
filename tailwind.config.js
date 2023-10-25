/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            'highlight': '#CCFF00',
            'soft-gray': '#2E2E2E',
         },
      },
      screens: {
         ss: "480px",
         sm: "620px",
         md: "768px", //tablets
         lg: "1060px", //desktops
         xl: "1200px", // xl desktops
      },
   },
   plugins: [],
};
