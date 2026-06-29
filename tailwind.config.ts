import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "var(--surface)",
          raised: "var(--surface-raised)",
          overlay: "var(--surface-overlay)",
          border: "var(--surface-border)",
        },
        accent: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
          muted: "#6366f120",
        },
        zinc: {
          50: "var(--zinc-50, #fafafa)",
          100: "var(--zinc-100, #f4f4f5)",
          200: "var(--zinc-200, #e4e4e7)",
          300: "var(--zinc-300, #d4d4d8)",
          400: "var(--zinc-400, #a1a1aa)",
          500: "var(--zinc-500, #71717a)",
          600: "var(--zinc-600, #52525b)",
          700: "var(--zinc-700, #3f3f46)",
          800: "var(--zinc-800, #27272a)",
          900: "var(--zinc-900, #18181b)",
          950: "var(--zinc-950, #09090b)",
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
