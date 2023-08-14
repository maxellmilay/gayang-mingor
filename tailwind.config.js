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
        "contact-header": "url('/images/contact-header.png')",
      },
      colors: {
        "mingor-yellow": "#E9C717",
        "mingor-blue": {
          100: "#14194A",
          200: "#0B124F",
        },
        "mingor-gray": {
          100: "#D9D9D9",
          200: "#242527",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
