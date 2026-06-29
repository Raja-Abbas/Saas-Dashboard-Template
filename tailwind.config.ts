import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#0f1117",
          raised: "#161922",
          overlay: "#1c2030",
          border: "#2a2f42",
        },
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          muted: "#6366f120",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99, 102, 241, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
