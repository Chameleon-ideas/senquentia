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
      stega: {
        enabled: false,
        studioUrl: '/studio',
      },
    }),
  ],
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
      include: ['gsap', 'lenis', 'gsap/ScrollTrigger'],
      exclude: ['fsevents'],
    },
  },
});
