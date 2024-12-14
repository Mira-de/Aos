/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      sm: "576px",
      md: "756px",
      lg: "1200px",
    },
  },
  plugins: [],
};
