import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
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
          DEFAULT: "hsl(var(--accent))",
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom luxury colors
        gold: {
          DEFAULT: "hsl(43 80% 50%)",
          light: "hsl(43 70% 65%)",
          dark: "hsl(43 85% 40%)",
        },
        emerald: {
          DEFAULT: "hsl(155 45% 22%)",
          light: "hsl(155 35% 35%)",
          dark: "hsl(155 50% 15%)",
        },
        cream: {
          DEFAULT: "hsl(40 30% 97%)",
          dark: "hsl(38 25% 90%)",
        },
        charcoal: "hsl(150 30% 12%)",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        display: ["Cormorant Garamond", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "float": "float 3s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-gold": "linear-gradient(135deg, hsl(43 80% 50%), hsl(43 70% 60%))",
        "gradient-emerald": "linear-gradient(135deg, hsl(155 45% 22%), hsl(155 35% 30%))",
        "gradient-hero": "linear-gradient(180deg, hsla(150, 30%, 12%, 0.7) 0%, hsla(150, 30%, 12%, 0.3) 50%, hsla(150, 30%, 12%, 0.7) 100%)",
      },
      boxShadow: {
        "luxury": "0 4px 20px hsla(150, 30%, 12%, 0.08)",
        "luxury-lg": "0 8px 40px hsla(150, 30%, 12%, 0.12)",
        "gold": "0 4px 20px hsla(43, 80%, 50%, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
