import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#b68bf5", // Lighter Purple - more feminine
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#FF6EC7", // Brighter Pink - more feminine
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#33C3F0", // Sky Blue
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        "shimmer": {
          from: {
            "backgroundPosition": "0 0"
          },
          to: {
            "backgroundPosition": "-200% 0"
          }
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 15px 5px rgba(182, 139, 245, 0.5), 0 0 20px 10px rgba(255, 110, 199, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 25px 10px rgba(182, 139, 245, 0.7), 0 0 30px 15px rgba(255, 110, 199, 0.5)" 
          }
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "pulse-light": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        },
        "neon-pulse": {
          "0%, 100%": { 
            textShadow: "0 0 7px rgba(255, 110, 199, 0.8), 0 0 10px rgba(255, 110, 199, 0.5), 0 0 21px rgba(255, 110, 199, 0.3)" 
          },
          "50%": { 
            textShadow: "0 0 10px rgba(255, 110, 199, 1), 0 0 15px rgba(255, 110, 199, 0.8), 0 0 30px rgba(255, 110, 199, 0.5)" 
          }
        }
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        "shimmer": "shimmer 2s linear infinite",
        "glow": "glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-light": "pulse-light 3s ease-in-out infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
