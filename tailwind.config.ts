import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'thew': 'Helvetica Neue, Helvetica, Arial, sans-serif'
    }
  },
  plugins: [],
} satisfies Config;
