import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sanityIntegration from '@sanity/astro';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  vite: {
    build: {
      rollupOptions: {
        external: [
          'styled-components',
          'react/compiler-runtime',
          'fsevents',
          /^media-chrome/,
        ],
      },
    },
    optimizeDeps: {
      exclude: ['fsevents'],
    },
  },
  integrations: [
    react(),
    sanityIntegration({
      projectId: 'egq490jl',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
});
