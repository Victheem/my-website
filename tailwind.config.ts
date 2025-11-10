import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf2f3",
          100: "#fce7e8",
          200: "#f8c9cb",
          300: "#f4a3a8",
          400: "#eb6f75",
          500: "#e03a43",
          600: "#b81c26",
          700: "#800000", // main maroon
          800: "#6a0000",
          900: "#520000",
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "bounce-slow": "bounce 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
