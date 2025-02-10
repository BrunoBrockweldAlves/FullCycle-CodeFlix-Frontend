import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import scrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    scrollbarHide,

  ],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
};

export default config;