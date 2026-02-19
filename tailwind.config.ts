import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FEFCF9",
        foreground: "#1E293B",
        primary: "#0D9488",
        muted: "#64748B",
        border: "rgba(0,0,0,0.08)",
        card: "rgba(255,255,255,0.7)",
        "primary-dark": "#0F766E",
        "primary-glow": "rgba(13, 148, 136, 0.12)",
        "warm-50": "#FFF7ED",
        "warm-100": "#FFEDD5",
        "warm-200": "#FED7AA",
        "peach": "#FECACA",
        "sky-light": "#E0F2FE",
        "lavender": "#EDE9FE",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        glass: "20px",
        card: "24px",
        pill: "28px",
      },
      spacing: {
        section: "120px",
        "section-sm": "80px",
      },
      boxShadow: {
        glow: "0 4px 40px rgba(13, 148, 136, 0.12)",
        "glow-lg": "0 8px 60px rgba(13, 148, 136, 0.15)",
        "glow-sm": "0 2px 20px rgba(13, 148, 136, 0.08)",
        soft: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06)",
        "soft-lg": "0 4px 24px rgba(0,0,0,0.08)",
      },
      backdropBlur: {
        glass: "16px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(1deg)" },
          "66%": { transform: "translateY(6px) rotate(-1deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
    },
  },
  plugins: [],
};
export default config;
