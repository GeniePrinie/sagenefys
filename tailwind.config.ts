import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", "media"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Flat brand color definitions
        "brand-blue-100": "#f0f4f5",
        "brand-blue-200": "#cbe6ee",
        "brand-blue-400": "#7fc5db",
        "brand-blue-600": "#0e627c",
        "brand-blue-900": "#092026",
        // Standard blue colors
        blue: {
          100: "#f0f4f5",
          200: "#cbe6ee",
          400: "#7fc5db",
          600: "#0e627c",
          900: "#092026",
        },
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        black: "#171717",
        white: "#ffffff",
        transparent: "transparent",
        fg: {
          DEFAULT: "rgb(var(--black) / <alpha-value>)",
        },
        bg: {
          DEFAULT: "rgb(var(--bg) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        subtle: {
          DEFAULT: "rgb(var(--light-gray) / <alpha-value>)",
          fg: "rgb(var(--fg) / 0.65)",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "collapsible-down": {
          "0%": {
            height: "0",
            opacity: "0",
            transform: "translateY(-10px)",
            backgroundColor: "var(--bg)",
          },
          "100%": {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
            transform: "translateY(0)",
            backgroundColor: "var(--bg-warm-gray-extra)",
          },
        },
        "collapsible-up": {
          "0%": {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
            transform: "translateY(0)",
            backgroundColor: "var(--bg-warm-gray-extra)",
          },
          "100%": {
            height: "0",
            opacity: "0",
            transform: "translateY(-10px)",
            backgroundColor: "var(--bg)",
          },
        },
        slideDown: {
          from: { transform: "translateY(-10%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          from: { transform: "translateY(0)", opacity: "1" },
          to: { transform: "translateY(-10%)", opacity: "0" },
        },
      },
      animation: {
        "collapsible-down":
          "collapsible-down 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        "collapsible-up": "collapsible-up 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        slideDown: "slideDown 0.3s ease-out forwards",
        slideUp: "slideUp 0.2s ease-in forwards",
      },
      boxShadow: {
        layer: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, require("tailwindcss-animate")],
} satisfies Config;
