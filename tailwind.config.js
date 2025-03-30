/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure paths match your folder structure
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 1s ease-in-out",
        bounceSlow: "bounce 2s infinite",
        pulseSlow: "pulse 3s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      colors: {
        // Add custom colors if needed for your hero section
        primary: "#FFD700", // Example: Golden Yellow
        secondary: "#4B0082", // Example: Indigo
      },
    },
  },
  plugins: [],
};
