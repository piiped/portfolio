import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'white': '#ffff',
      'primary': '#2F2C2C',
      'secondary': '#A34F4F',
      'gray':'rgb(107 114 128)'
    },
    fontFamily: {
      'prompt':['Prompt', 'sans-serif'],
      'playfair': ['Playfair Display', 'serif'],
    }
  },
  plugins: [],
};
export default config;
