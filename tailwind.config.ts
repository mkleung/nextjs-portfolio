import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },

    // This is for the font
    extend: {
      fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      }
    },
    animation: {
      "move-left": "move-left 1s linear infinite",
      "move-right": "move-right 1s linear infinite",
    },
    keyframes: {
      "move-left": {
        "0%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(-50%)",
        }
      },
      "move-right": {
        "0%": {
          transform: "translateX(-50%)",
        },
        "100%": {
          transform: "translateX(0%)",
        }
      }
    },
    
  },
  plugins: [],
};
export default config;
