import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#407880",
        secondary: "#0DFF96",
      },
      boxShadow: {
        button: "0 2px 4px rgba(255, 255, 255, 0.2)",
        modal: "0 0 30px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
} satisfies Config;
