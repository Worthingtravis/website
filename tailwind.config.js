/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // extend the containers for 2xl, add 3xl
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",

      "3xl": "1920px",

      "4xl": "2560px",
    },
    extend: {
      colors: {
        coffee: {
          50: '#fdf6f3',
          100: '#fbe7e0',
          200: '#f7d0c2',
          300: '#f2b39e',
          400: '#ec8f74',
          500: '#e66b4a',
          600: '#d34d2c',
          700: '#b03a24',
          800: '#8f3223',
          900: '#752c21',
          950: '#3f1410',
        },
        latte: {
          50: '#faf6f2',
          100: '#f2e9e0',
          200: '#e5d2c1',
          300: '#d4b39c',
          400: '#c08f77',
          500: '#b0735a',
          600: '#915c47',
          700: '#744a3b',
          800: '#5f3d33',
          900: '#50342d',
          950: '#2b1b17',
        }
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
};
