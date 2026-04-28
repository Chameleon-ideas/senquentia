import { sanityClient, hasSanityConfig } from './client';

const imageFields = `{ asset->{ url, metadata { dimensions } }, hotspot, crop, alt }`;

async function safeFetch<T>(query: string, params?: Record<string, unknown>): Promise<T | null> {
  if (!hasSanityConfig) return null;
  try {
    return await sanityClient.fetch<T>(query, params ?? {});
  } catch {
    return null;
  }
}

// ── Site Settings ─────────────────────────────────────────────────────────────
export async function getSiteSettings() {
  return safeFetch(`*[_type == "siteSettings"][0]{
    siteName, tagline, defaultSeoDescription,
    logo ${imageFields},
    favicon ${imageFields},
    email, address, linkedin,
    enableFR
  }`);
}

// ── Home Page ─────────────────────────────────────────────────────────────────
export async function getHomePage() {
  return safeFetch(`*[_type == "homePage"][0]{
    heroTagline,
    heroBgImage ${imageFields},
    introEyebrow, introHeadline, introLead, introBody,
    servicesBgImage ${imageFields},
    stats[],
    ctaText, ctaLinkLabel, ctaBgImage ${imageFields},
    seoTitle, seoDescription, ogImage ${imageFields}
  }`);
}

// ── Ethos Page ────────────────────────────────────────────────────────────────
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

// ── Journal Page ──────────────────────────────────────────────────────────────
export async function getJournalPage() {
  return safeFetch(`*[_type == "blogPage"][0]{
    heroLabel,
    heroBgImage ${imageFields},
    sectionHeadline,
    seoTitle, seoDescription
  }`);
}

// ── Connect / Contact Page ────────────────────────────────────────────────────
export async function getConnectPage() {
  return safeFetch(`*[_type == "contactPage"][0]{
    heroBgImage ${imageFields},
    leadText, disclaimer, email,
    seoTitle, seoDescription
  }`);
}

// ── Services ──────────────────────────────────────────────────────────────────
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
    perspectiveText, perspectiveText2,
    perspectiveCol1[], perspectiveCol2[],
    quoteText,
    approachLead,
    approachSections[] { title, body },
    industriesEngaged[] { label, description },
    closingText,
    seoTitle, seoDescription
  }`, { slug });
}

export async function getServiceSlugs() {
  return safeFetch<{ slug: string }[]>(`*[_type == "service"]{ "slug": slug.current }`);
}

// ── Blog / Journal Posts ──────────────────────────────────────────────────────
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
    category, publishedAt,
    author->{ name, photo ${imageFields} },
    seoTitle, seoDescription
  }`, { slug });
}

export async function getBlogSlugs() {
  return safeFetch<{ slug: string }[]>(`*[_type == "blogPost"]{ "slug": slug.current }`);
}

// ── Team ──────────────────────────────────────────────────────────────────────
export async function getTeamMembers() {
  return safeFetch<any[]>(`*[_type == "teamMember"] | order(order asc){
    _id, name, role, bio, photo ${imageFields}
  }`);
}

// ── Legacy stubs ──────────────────────────────────────────────────────────────
export async function getAboutPage()       { return getEthosPage(); }
export async function getServicesPage()    { return null; }
export async function getPortfolioItems()  { return []; }
export async function getTestimonials()    { return []; }
export async function getFaqItems()        { return []; }
export async function getBlogPage()        { return getJournalPage(); }
export async function getContactPage()     { return getConnectPage(); }
