import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a0b0f',
          slate: '#2d3748',
          dark: '#050507',
          blue: '#4299e1',
          'blue-light': '#63b3ed',
        },
        // Primary accent — mint
        primary: '#2dd4bf',
        'primary-light': '#5fe3d3',
        'primary-dark': '#14b8a6',
        // Supporting accents
        coral: '#fb6b4b',
        'coral-dark': '#e8542f',
        gold: '#f2b33d',
        'gold-dark': '#dca01f',
        secondary: '#2d3748',
        background: '#0a0b0f',
        surface: '#2d3748',
        muted: '#718096',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
