/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "mingor-yellow": "#E9C717",
        "mingor-blue": "#14194A",
        "mingor-text-blue": "#0B124F",
      },
      backgroundImage: {
        footer: "url('/images/footer-bg.png')",
      },
    },
  },
  plugins: [],
};
