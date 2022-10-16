/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: '1rem',
        // sm: '0.2rem',
        // lg: '0.5rem',
        // xl: '1rem',
        // '2xl': '1rem',
      },
    },
    // fontFamily: {
    //   sans: ["Graphik", "sans-serif"],
    //   serif: ["Merriweather", "serif"],
    // },
    screens: {
      mb: { max: '640px' },
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1836px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
