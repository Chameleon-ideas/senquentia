import { createClient } from '@sanity/client';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || 'placeholder';
const dataset   = process.env.PUBLIC_SANITY_DATASET    || 'production';

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn:    false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || undefined,
});

export const hasSanityConfig = projectId.length > 0 && projectId !== 'placeholder';
