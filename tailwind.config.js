/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xl": [
          "1.625rem",
          {
            lineHeight: "2.1125rem",
            letterSpacing: "-0.0325em",
            fontWeight: "600",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.3rem",
            letterSpacing: "-0.025em",
            fontWeight: "500",
          },
        ],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-cta": "linear-gradient(180deg, transparent, #1c1c1c 35%)",
      },
    },
  },
  plugins: [],
};
