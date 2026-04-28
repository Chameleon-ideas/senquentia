import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, n as renderComponent, p as renderSlot, q as renderHead } from './entrypoint_Dh5Fxeqj.mjs';
import { createClient } from '@sanity/client';
import 'clsx';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.PUBLIC_SANITY_DATASET || "production";
const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN || void 0
});
const hasSanityConfig = projectId !== "placeholder" && projectId.length > 0;

const imageFields = `{ asset->{ url, metadata { dimensions } }, hotspot, crop, alt }`;
async function safeFetch(query, params) {
  if (!hasSanityConfig) return null;
  try {
    return await sanityClient.fetch(query, params ?? {});
  } catch {
    return null;
  }
}
async function getSiteSettings() {
  return safeFetch(`*[_type == "siteSettings"][0]{
    siteName, tagline, defaultSeoDescription,
    logo ${imageFields},
    favicon ${imageFields},
    email, address, linkedin,
    enableFR
  }`);
}
async function getHomePage() {
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
async function getEthosPage() {
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
async function getJournalPage() {
  return safeFetch(`*[_type == "blogPage"][0]{
    heroLabel,
    heroBgImage ${imageFields},
    sectionHeadline,
    seoTitle, seoDescription
  }`);
}
async function getConnectPage() {
  return safeFetch(`*[_type == "contactPage"][0]{
    heroBgImage ${imageFields},
    leadText, disclaimer, email,
    seoTitle, seoDescription
  }`);
}
async function getServices() {
  return safeFetch(`*[_type == "service"] | order(order asc){
    _id, title, slug,
    shortDescription,
    heroBgImage ${imageFields},
    image ${imageFields}
  }`);
}
async function getServiceBySlug(slug) {
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
async function getServiceSlugs() {
  return safeFetch(`*[_type == "service"]{ "slug": slug.current }`);
}
async function getBlogPosts() {
  return safeFetch(`*[_type == "blogPost"] | order(publishedAt desc){
    _id, title, slug, excerpt,
    featuredImage ${imageFields},
    category, publishedAt,
    author->{ name, photo ${imageFields} }
  }`);
}
async function getBlogPostBySlug(slug) {
  return safeFetch(`*[_type == "blogPost" && slug.current == $slug][0]{
    _id, title, slug, excerpt,
    featuredImage ${imageFields},
    body { en[], fr[] },
    category, publishedAt,
    author->{ name, photo ${imageFields} },
    seoTitle, seoDescription
  }`, { slug });
}
async function getBlogSlugs() {
  return safeFetch(`*[_type == "blogPost"]{ "slug": slug.current }`);
}

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const { settings } = Astro2.props;
  const currentPath = Astro2.url.pathname;
  const logoUrl = settings?.logo ? urlFor(settings.logo).height(88).url() : null;
  const linkedinUrl = settings?.linkedin ?? "#";
  const enableFR = settings?.enableFR ?? false;
  const links = [
    { label: "Home", labelFR: "Accueil", href: "/" },
    { label: "Services", labelFR: "Services", href: "/services" },
    { label: "Ethos", labelFR: "Éthique", href: "/ethos" },
    { label: "Journal", labelFR: "Journal", href: "/journal" },
    { label: "Contact", labelFR: "Contact", href: "/contact" }
  ];
  function isActive(href) {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  }
  return renderTemplate`${maybeRenderHead()}<header class="site-header"> <!-- Logo --> <a href="/" class="nav-logo"${addAttribute(settings?.siteName ?? "Senquentia", "aria-label")}> ${logoUrl ? renderTemplate`<img${addAttribute(logoUrl, "src")}${addAttribute(settings?.siteName ?? "Senquentia", "alt")}>` : renderTemplate`<svg viewBox="0 0 44 44" width="44" height="44" xmlns="http://www.w3.org/2000/svg"> <circle cx="22" cy="22" r="20" fill="#c00"></circle> <path d="M22 8 C14 8 8 14 8 22 C8 30 14 36 22 36 C26 36 30 34 32 30 C30 28 28 22 30 18 C32 14 36 12 34 10 C30 6 26 8 22 8Z" fill="white" opacity="0.9"></path> </svg>`} </a> <!-- Desktop nav --> <nav aria-label="Main navigation"> <ul class="nav-links"> ${links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")}${addAttribute(isActive(link.href) ? "active" : "", "class")}> ${link.label} </a> </li>`)} </ul> </nav> <!-- Right side --> <div class="nav-right"> ${enableFR && renderTemplate`<button class="nav-lang" data-lang-toggle>FR</button>`} <a${addAttribute(linkedinUrl, "href")} target="_blank" rel="noopener noreferrer" class="nav-linkedin" aria-label="LinkedIn"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> <button class="hamburger" aria-label="Open menu" aria-expanded="false"> <span></span><span></span><span></span> </button> </div> </header> <!-- Mobile nav --> <nav class="mobile-nav" aria-label="Mobile navigation"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(isActive(link.href) ? "active" : "", "class")}> ${link.label} </a>`)} </nav>`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { settings } = Astro2.props;
  const logoUrl = settings?.logo ? urlFor(settings.logo).height(72).url() : null;
  const siteName = settings?.siteName ?? "Senquentia";
  const tagline = settings?.tagline ?? "Strategy & Management Consulting";
  const address = settings?.address ?? "Montréal, Quebec, Canada";
  const email = settings?.email ?? "info@senquentia.com";
  const linkedin = settings?.linkedin ?? "#";
  return renderTemplate`${maybeRenderHead()}<footer class="site-footer"> <div class="container"> <div class="footer-inner"> <!-- Brand --> <div class="footer-brand"> <a href="/" class="footer-logo"${addAttribute(siteName, "aria-label")}> ${logoUrl ? renderTemplate`<img${addAttribute(logoUrl, "src")}${addAttribute(siteName, "alt")}>` : renderTemplate`<svg viewBox="0 0 180 52" width="180" height="52" xmlns="http://www.w3.org/2000/svg"> <circle cx="22" cy="26" r="22" fill="#c00"></circle> <path d="M22 8 C14 8 8 15 8 23 C8 31 14 38 22 38 C26 38 30 36 32 32 C30 30 28 24 30 20 C32 15 36 13 34 11 C30 6 26 8 22 8Z" fill="white" opacity="0.9"></path> <text x="54" y="22" font-family="'American Typewriter', Georgia, serif" font-size="18" fill="#f8f6f2" letter-spacing="2">SENQUENTIA</text> <text x="54" y="40" font-family="'Century Gothic', Trebuchet MS, sans-serif" font-size="11" fill="rgba(248,246,242,0.5)" letter-spacing="1">Strategy &amp; Management Consulting</text> </svg>`} </a> ${logoUrl && tagline && renderTemplate`<p class="footer-tagline">${tagline}</p>`} </div> <!-- Contact info --> <div class="footer-right"> ${address && renderTemplate`<span class="footer-info">${address}</span>`} ${email && renderTemplate`<span class="footer-email">${email}</span>`} <div class="footer-contact-row"> <a href="/contact" class="footer-contact-link">Contact</a> <a${addAttribute(linkedin, "href")} target="_blank" rel="noopener noreferrer" class="footer-linkedin" aria-label="LinkedIn"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> </div> </div> </div> <div class="footer-bottom"> <span>Copyright</span> </div> </div> </footer>`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, ogImage } = Astro2.props;
  const settings = await getSiteSettings();
  const siteName = settings?.siteName ?? "Senquentia";
  const siteTitle = title ? `${title} | ${siteName}` : siteName;
  const siteDesc = description ?? settings?.defaultSeoDescription ?? "Strategy & Management Consulting";
  const faviconUrl = settings?.favicon?.asset?.url ?? "/favicon.ico";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><link rel="icon"', "><title>", "</title>", '<meta property="og:title"', '><meta property="og:description"', '><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"><\/script>', '</head> <body> <div class="page-transition" aria-hidden="true"> <div class="pt-layer pt-layer-1"></div> <div class="pt-layer pt-layer-2"></div> </div> ', " ", " ", " <script>\n      (function () {\n        if (typeof gsap === 'undefined') return;\n        gsap.registerPlugin(ScrollTrigger);\n\n        // Header scroll\n        const header = document.querySelector('.site-header');\n        if (header) {\n          window.addEventListener('scroll', () => {\n            header.classList.toggle('scrolled', window.scrollY > 60);\n          }, { passive: true });\n        }\n\n        // Mobile nav\n        const hamburger = document.querySelector('.hamburger');\n        const mobileNav = document.querySelector('.mobile-nav');\n        if (hamburger && mobileNav) {\n          hamburger.addEventListener('click', () => {\n            hamburger.classList.toggle('open');\n            mobileNav.classList.toggle('open');\n            document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';\n          });\n          mobileNav.querySelectorAll('a').forEach(link => {\n            link.addEventListener('click', () => {\n              hamburger.classList.remove('open');\n              mobileNav.classList.remove('open');\n              document.body.style.overflow = '';\n            });\n          });\n        }\n\n        // Hero parallax\n        const heroBg = document.querySelector('.home-hero-bg, .page-hero-bg');\n        if (heroBg) {\n          gsap.to(heroBg, {\n            yPercent: 18, ease: 'none',\n            scrollTrigger: { trigger: heroBg.parentElement, start: 'top top', end: 'bottom top', scrub: true },\n          });\n        }\n\n        // Reveal up\n        gsap.utils.toArray('.reveal-up').forEach(el => {\n          gsap.to(el, {\n            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',\n            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },\n          });\n        });\n\n        // Reveal left/right\n        gsap.utils.toArray('.reveal-left').forEach(el => {\n          gsap.to(el, {\n            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',\n            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },\n          });\n        });\n        gsap.utils.toArray('.reveal-right').forEach(el => {\n          gsap.to(el, {\n            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',\n            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },\n          });\n        });\n\n        // Reveal fade\n        gsap.utils.toArray('.reveal-fade').forEach(el => {\n          gsap.to(el, {\n            opacity: 1, duration: 0.8, ease: 'power2.out',\n            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },\n          });\n        });\n\n        // Page transitions\n        const ptLayer1 = document.querySelector('.pt-layer-1');\n        const ptLayer2 = document.querySelector('.pt-layer-2');\n        if (ptLayer1 && ptLayer2) {\n          gsap.set([ptLayer1, ptLayer2], { xPercent: 0 });\n          gsap.timeline()\n            .to(ptLayer2, { xPercent: 120, duration: 0.72, ease: 'power4.inOut' }, 0)\n            .to(ptLayer1, { xPercent: 120, duration: 0.68, ease: 'power4.inOut' }, 0.08);\n\n          let transitioning = false;\n          document.querySelectorAll('a[href]').forEach(link => {\n            const href = link.getAttribute('href');\n            if (!href || href.startsWith('#') || href.startsWith('http') ||\n                href.startsWith('//') || href.startsWith('mailto:') || href.startsWith('tel:')) return;\n            link.addEventListener('click', e => {\n              if (transitioning) return;\n              e.preventDefault();\n              transitioning = true;\n              gsap.timeline({ onComplete: () => { window.location.href = href; } })\n                .fromTo(ptLayer1, { xPercent: -120 }, { xPercent: 0, duration: 0.62, ease: 'power4.inOut' }, 0)\n                .fromTo(ptLayer2, { xPercent: -120 }, { xPercent: 0, duration: 0.62, ease: 'power4.inOut' }, 0.08);\n            });\n          });\n        }\n      })();\n    <\/script> </body> </html>"])), addAttribute(siteDesc, "content"), addAttribute(faviconUrl, "href"), siteTitle, ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`, addAttribute(siteTitle, "content"), addAttribute(siteDesc, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "settings": settings }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "settings": settings }));
}, "/Users/macbook/Desktop/Projects/senquentia/src/layouts/Layout.astro", void 0);

export { $$Layout as $, getEthosPage as a, getBlogSlugs as b, getBlogPostBySlug as c, getJournalPage as d, getBlogPosts as e, getServiceSlugs as f, getConnectPage as g, getServiceBySlug as h, getServices as i, getHomePage as j, urlFor as u };
