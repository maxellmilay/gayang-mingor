/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        footer: "url('/images/footer-bg.png')",
        landing: "url('/images/landing-bg.png')",
        "mobile-landing": "url('/images/mobile-landing-bg.png')",
      },
      colors: {
        "mingor-yellow": "#E9C717",
        "mingor-blue": "#14194A",
        facebook: "#242527",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
