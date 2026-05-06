import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'egq490jl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function checkSlugs() {
  const slugs = await client.fetch(`*[_type == "blogPost"]{ title, "slug": slug.current }`);
  console.log('Slugs in Sanity:', JSON.stringify(slugs, null, 2));
}

checkSlugs();
