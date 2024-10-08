import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'blue': '#1db5cb',
      'default': '#1d1f1f',
      'gray-dark': '#2b2b2b',
      'gray-light': '#ebeeee',
      'light': '#fff',
      'soft': '#6e7881',
      'yellow': '#fedd32',
    },
    fontFamily: {
      'sans-serif': ["Open Sans", 'sans-serif'],
      'serif-regular': ["Libre Baskerville", 'serif']
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
