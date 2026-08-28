/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#121214",
        "primary-glow": "#00F0FF",
        "secondary-glow": "#7000FF",
        // Tokens semánticos de texto: evitan grises sueltos por sección.
        foreground: "#F5F5F7",
        muted: "#A1A1AA",
        subtle: "#71717A",
      },
      backgroundImage: {
        "glow-gradient":
          "radial-gradient(circle at 50% 0%, rgba(0,240,255,0.15), transparent 60%)",
        "glow-gradient-violet":
          "radial-gradient(60% 60% at 50% 40%, rgba(112,0,255,0.18), transparent 70%)",
      },
    },
  },
  plugins: [],
};
