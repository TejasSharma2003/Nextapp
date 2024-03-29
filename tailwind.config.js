/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './elements/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.5rem',
      '6xl': '4.6rem',
    },
    extend: {
      transitionTimingFunction: {
        'fade-up': 'cubic-bezier(0.42, 0.71, 0.09, 0.86)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wave: {
          '0%': {
            transform: 'rotate(-45deg)',
          },
          '50%': {
            transform: 'rotate(-20deg)',
          },
          '100%': {
            transform: 'rotate(-45deg)',
          },
        },
        show_scroll_y: {
          '0%': {
            overflowY: 'hidden',
          },
          '100%': {
            overflowY: 'auto',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s linear',
        wave: 'wave 1s linear infinite',
        show_scroll_y: 'show_scroll_y 1s linear 250ms forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        // secondary: ['Poppins', 'sans-serif'],
        secondary: ['Outfit', 'serif'],
      },
      padding: {
        'pad-btn': '.8rem',
        'pad-x-to-screen': '1rem',
        'pd-big': '5rem',
      },
      colors: {
        primary: '#FF602E',
        black: {
          DEFAULT: '#000',
          100: '#111111',
          200: '#0D0B0B',
          300: '#090909',
          400: '#0c0a0a',
        },
        white: {
          DEFAULT: '#fff',
          100: 'rgba(255 255 255 /0.7)',
          200: '#F1F1F1',
          300: '#F7F7F7',
        },
        red: 'rgb(223,46,56)',
        green: '#61E868',
      },
      maxWidth: {
        'large-w': '1220px',
        'blog-container': '37rem',
      },
      dropShadow: {
        'shadow-sm': 'drop-shadow(0px 20px 50px rgba(0, 0, 0, 0.09))',
      },
      fontSize: {
        caption: '1.3rem',
      },
      screens: {
        smallDevice: { raw: '(max-height: 600px)' },
        // => @media (min-height: 800px) { ... }
      },
    },
  },
  safelist: [],
  plugins: [],
};
