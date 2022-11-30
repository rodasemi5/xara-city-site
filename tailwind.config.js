/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: "1rem"
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    }, 
  },
  variants: {
    aspectRatio: ['responsive'],
    extend: {},
  },
  plugins: [

    require("flowbite/plugin"),
    require('@tailwindcss/aspect-ratio'),
  ],
}
