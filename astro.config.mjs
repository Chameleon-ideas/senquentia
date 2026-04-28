import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sanityIntegration from '@sanity/astro';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  output: 'server',
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
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: false,
      studioBasePath: '/studio',
    }),
  ],
});
