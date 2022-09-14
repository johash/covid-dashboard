/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1D222C",
        cyan: "#41CBE2",
        blue: "#4166FF",
        neon: "#8CA2FF",
        space: "#28293E",
        gray: "#9999A4",
        yellow: "#FFE974",
        green: "#62FC84",
        red: "#FF3B3B",
        borderGray: "#DBDBDB",
      },
    },
  },
  plugins: [],
};
