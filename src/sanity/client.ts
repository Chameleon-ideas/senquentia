import { createClient } from '@sanity/client';

const projectId = 'egq490jl';
const dataset = 'production';
const token = 'sk9pPpLfulj4mVAS0mqu7dssJtWJWTEXqkvWNMRrw5RnHIIj5Fg3ofb1o9HsnTAJjtLuFAoGRzQvrrtEWtKGtS8QWprID513VZ2Th7ZFIwujvKHOCqd593Z4aa7jRmGfNbzApPeE3IiXp0dBaHENZXl3mpNYZzcpzWPfREykbF8j8HQUvfpS';

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
});

export const hasSanityConfig = true;
