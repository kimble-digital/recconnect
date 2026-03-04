/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // RecConnect brand palette
        brand: {
          navy: '#1a1f2e',      // Dark background
          slate: '#2d3748',     // Card backgrounds, secondary dark
          dark: '#0f1218',      // Very dark — footers, deep contrast
          blue: '#4299e1',      // Primary accent
          'blue-light': '#63b3ed',
        },
        // Semantic colours
        primary: '#4299e1',
        'primary-light': '#63b3ed',
        'primary-dark': '#3182ce',
        secondary: '#2d3748',
        background: '#1a1f2e',
        surface: '#2d3748',
        muted: '#718096',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
