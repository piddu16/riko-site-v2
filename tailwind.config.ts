import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1F12",
        "ink-2": "#243329",
        muted: "#4A5A50",
        faint: "#9AA69C",
        line: "#D0D8D2",
        "line-soft": "#E5EBE7",
        tint: "#F6F9F6",
        "tint-2": "#EEF3EF",
        "tint-accent": "#E8F5EC",
        accent: "#16A34A",
        "accent-bright": "#22C55E",
        "accent-deep": "#065F46",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        "extra-tight": "-0.035em",
      },
    },
  },
  plugins: [],
};

export default config;
