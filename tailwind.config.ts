import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#272727',
        blue: { 
          100: '#52B0EB',
        },
        orange: {
          200: '#EB7F52',
        },
        green: {
          100: '#52EBD4',
        },
        brown: {
          100: '#967466',
          200: '#6B5B5B',
        },
        gray: {
          200: '#5B656B',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
