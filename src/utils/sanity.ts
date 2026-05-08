import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// ── Hardcoded config for reliability ──────────────────────────────────────────
const clientConfig = {
  projectId: 'egq490jl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk9pPpLfulj4mVAS0mqu7dssJtWJWTEXqkvWNMRrw5RnHIIj5Fg3ofb1o9HsnTAJjtLuFAoGRzQvrrtEWtKGtS8QWprID513VZ2Th7ZFIwujvKHOCqd593Z4aa7jRmGfNbzApPeE3IiXp0dBaHENZXl3mpNYZzcpzWPfREykbF8j8HQUvfpS',
  useCdn: false,
};

export const sanityClient = createClient(clientConfig);

// ── Image URL builder ─────────────────────────────────────────────────────────
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// ── Queries Helper ────────────────────────────────────────────────────────────
const imageFields = `{ asset->{ url, metadata { dimensions } }, hotspot, crop, alt }`;

async function safeFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch (err) {
    console.error("Sanity fetch error:", err);
    return null;
  }
}

// ── Fetchers ──────────────────────────────────────────────────────────────────

export async function getSiteSettings() {
  return safeFetch(`*[_type == "siteSettings"][0]{
    siteName, tagline, defaultSeoDescription,
    logo ${imageFields},
    favicon ${imageFields},
    email, address, linkedin,
    enableFR
  }`);
}

export async function getHomePage() {
  return safeFetch(`*[_type == "homePage"][0]{
    heroTagline,
    heroBgImage ${imageFields},
    heroBgImageFR ${imageFields},
    introEyebrow, introHeadline, introLead, introBody1, introBody2, introBody3,
    servicesBgImage ${imageFields},
    stats[],
    ctaText, ctaLinkLabel, ctaBgImage ${imageFields},
    seoTitle, seoDescription, ogImage ${imageFields}
  }`);
}

export async function getEthosPage() {
  return safeFetch(`*[_type == "aboutPage"][0]{
    heroLabel,
    heroBgImage ${imageFields},
    principlesHeadline,
    etymologyDesc,
    philosophyBody, philosophyQuote,
    valuesDesc,
    values[] { name, body },
    founderName, founderTitle,
    founderPhoto ${imageFields},
    founderBio,
    seoTitle, seoDescription
  }`);
}

export async function getJournalPage() {
  return safeFetch(`*[_type == "blogPage"][0]{
    heroLabel,
    heroBgImage ${imageFields},
    sectionHeadline,
    seoTitle, seoDescription
  }`);
}

export async function getConnectPage() {
  return safeFetch(`*[_type == "contactPage"][0]{
    heroBgImage ${imageFields},
    leadText, disclaimer, email,
    seoTitle, seoDescription
  }`);
}

export async function getFooter() {
  return safeFetch(`*[_type == "footer"][0]{
    companyName, address, phone, email, linkedinUrl, copyrightText
  }`);
}

export async function getServicesPage() {
  return safeFetch(`*[_type == "servicesPage"][0]{
    heroHeadline, heroSubtext, heroBgImage ${imageFields},
    sectionEyebrow, sectionHeadline, sectionSubtext,
    ctaHeadline, ctaBody, ctaButton,
    seoTitle, seoDescription
  }`);
}

export async function getServices() {
  return safeFetch<any[]>(`*[_type == "service"] | order(order asc){
    _id, title, slug,
    shortDescription,
    heroBgImage ${imageFields},
    image ${imageFields}
  }`);
}

export async function getServiceBySlug(slug: string) {
  return safeFetch(`*[_type == "service" && slug.current == $slug][0]{
    _id, title, slug,
    shortDescription,
    heroBgImage ${imageFields},
    image ${imageFields},
    perspectiveTitle1, perspectiveLead1, 
    perspectiveTitle2, perspectiveLead2,
    perspectiveBody,
    quoteText,
    alignmentTitle, alignmentBody,
    alignmentImage ${imageFields},
    approachLead, approachBody,
    approachSections[] { title, body },
    momentsTitle,
    industriesEngaged[] { label, description },
    closingText, closingBody, closingFooter,
    closingImage ${imageFields},
    seoTitle, seoDescription
  }`, { slug });
}

export async function getServiceSlugs() {
  const result = await safeFetch<{ slug: string }[]>(`*[_type == "service"]{ "slug": slug.current }`);
  return result || [];
}

export async function getBlogPosts() {
  return safeFetch<any[]>(`*[_type == "blogPost"] | order(publishedAt desc){
    _id, title, slug, excerpt,
    featuredImage ${imageFields},
    category, publishedAt,
    author->{ name, photo ${imageFields} }
  }`);
}

export async function getBlogPostBySlug(slug: string) {
  return safeFetch(`*[_type == "blogPost" && slug.current == $slug][0]{
    _id, title, slug, excerpt,
    featuredImage ${imageFields},
    body { en[], fr[] },
    editorialIntro { 
      col1 { en[], fr[] }, 
      col2 { en[], fr[] } 
    },
    quoteText,
    staggeredSection {
      topText,
      bottomText
    },
    category, publishedAt,
    author->{ name, photo ${imageFields} },
    seoTitle, seoDescription
  }`, { slug });
}

export async function getBlogSlugs() {
  const result = await safeFetch<{ slug: string }[]>(`*[_type == "blogPost"]{ "slug": slug.current }`);
  return result || [];
}

export async function getTeamMembers() {
  return safeFetch<any[]>(`*[_type == "teamMember"] | order(order asc){
    _id, name, role, bio, photo ${imageFields}
  }`);
}

// Stubs for consistency
export async function getAboutPage() { return getEthosPage(); }
export async function getBlogPage() { return getJournalPage(); }
export async function getContactPage() { return getConnectPage(); }
