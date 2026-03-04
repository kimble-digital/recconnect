import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://recconnect.co',
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
  output: 'static',
  adapter: vercel(),
});
