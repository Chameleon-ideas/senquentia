import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'egq490jl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk9pPpLfulj4mVAS0mqu7dssJtWJWTEXqkvWNMRrw5RnHIIj5Fg3ofb1o9HsnTAJjtLuFAoGRzQvrrtEWtKGtS8QWprID513VZ2Th7ZFIwujvKHOCqd593Z4aa7jRmGfNbzApPeE3IiXp0dBaHENZXl3mpNYZzcpzWPfREykbF8j8HQUvfpS',
  useCdn: false,
});

async function check() {
  const home = await client.fetch(`*[_type == "homePage"][0]`);
  console.log('Home Page Intro Eyebrow:', JSON.stringify(home.introEyebrow, null, 2));
}

check();
