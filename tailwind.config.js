/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": " url('/images/bg-image.png')",
        "background-img": "url('/images/blur.png')",
        "custom-gradient":
          "linear-gradient(180deg, rgba(52, 100, 158, 0.8) 0%, rgba(52, 100, 158, 0.34288) 49.19%, rgba(52, 100, 158, 0) 100%)",
        "custom-gradient-card":
          "linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.96) 39.5%, #FFFFFF 100%)",
        "custom-gradient-card-2":
          "linear-gradient(-270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.96) 39.5%, #FFFFFF 100%)",
      },

      fontFamily: {
        sans: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
