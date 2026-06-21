import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1a1f2e',
          slate: '#2d3748',
          dark: '#0f1218',
          blue: '#4299e1',
          'blue-light': '#63b3ed',
        },
        primary: '#4299e1',
        'primary-light': '#63b3ed',
        'primary-dark': '#3182ce',
        secondary: '#2d3748',
        background: '#1a1f2e',
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
