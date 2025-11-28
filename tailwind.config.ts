import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,md,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Unbounded", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "375px",
        phone: "425px",
        tablet: "550px",
        lap: "769px",
        desk: "993px",
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};

export default config;
