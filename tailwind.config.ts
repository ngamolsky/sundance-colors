import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#eeebd8",
          light: "#f7f5e9",
          dark: "#d5d2b8",
        },
        secondary: {
          DEFAULT: "#7c7b6f",
          light: "#9e9d93",
          dark: "#5a594f",
        },
        accent: {
          DEFAULT: "#8c7355",
          light: "#ac9577",
          dark: "#6c5335",
        },
        neutral: {
          DEFAULT: "#f5f4ed",
          dark: "#2c2c2a",
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
