import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [
    react(),
    sanity({
      projectId: 'egq490jl',
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
      studioBasePath: '/studio',
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    build: {
      rollupOptions: {
        external: [
          'fsevents',
          /^media-chrome/,
        ],
      },
    },
    optimizeDeps: {
      include: ['gsap', 'gsap/ScrollTrigger', 'void-elements', 'html-parse-stringify'],
      exclude: ['fsevents'],
    },
    ssr: {
      noExternal: ['void-elements', 'html-parse-stringify'],
    },
  },
});
// Restart trigger
