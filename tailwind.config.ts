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
        background: "#050608",
        foreground: "#F5F7FA",
        primary: "#18D2C4",
        muted: "#A7B0B8",
        border: "rgba(255,255,255,0.08)",
        card: "rgba(255,255,255,0.04)",
        "primary-dark": "#14B8A6",
        "primary-glow": "rgba(24, 210, 196, 0.15)",
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
        glow: "0 0 40px rgba(24, 210, 196, 0.15)",
        "glow-lg": "0 0 80px rgba(24, 210, 196, 0.2)",
        "glow-sm": "0 0 20px rgba(24, 210, 196, 0.1)",
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
