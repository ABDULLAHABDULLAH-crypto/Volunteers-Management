import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        tajawal:["var(--font-tajawal)"],
      },
      colors: {
        background: "#f9f5ec",
        foreground: "var(--foreground)",
        primary:"#054c4c",
        secondry:"#a59768"
      },
    },
  },
  plugins: [],
} satisfies Config;
