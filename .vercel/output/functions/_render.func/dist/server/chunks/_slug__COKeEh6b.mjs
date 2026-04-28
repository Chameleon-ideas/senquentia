import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Dh5Fxeqj.mjs';
import { b as getBlogSlugs, c as getBlogPostBySlug, u as urlFor, $ as $$Layout } from './Layout_C8coNsuY.mjs';
import { $ as $$PortableText } from './PortableText_BP2C_Yio.mjs';

async function getStaticPaths() {
  const slugs = await getBlogSlugs();
  return slugs.map((s) => ({ params: { slug: s.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return Astro2.redirect("/journal");
  const title = typeof post.title === "object" ? post.title.en : post.title;
  const publishedDate = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" }) : null;
  const bodyLeft = post.body?.en ?? [];
  const midpoint = Math.ceil(bodyLeft.length / 2);
  const col1 = bodyLeft.slice(0, midpoint);
  const col2 = bodyLeft.slice(midpoint);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.seoTitle ?? title, "description": post.seoDescription ?? (typeof post.excerpt === "object" ? post.excerpt.en : post.excerpt), "ogImage": post.featuredImage ? urlFor(post.featuredImage).width(1200).url() : void 0 }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="journal-inner"> <div class="container"> <!-- Header --> <div class="journal-inner-header"> ${(post.category || publishedDate) && renderTemplate`<div class="journal-inner-meta"> ${post.category && renderTemplate`<span>${post.category}</span>`} ${post.category && publishedDate && renderTemplate`<span> · </span>`} ${publishedDate && renderTemplate`<span>${publishedDate}</span>`} </div>`} <h1 class="journal-inner-title">${title}</h1> </div> <!-- Two-column body --> ${col1.length > 0 && renderTemplate`<div class="journal-inner-body"> <div class="journal-inner-prose"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": col1 })} </div> ${col2.length > 0 && renderTemplate`<div class="journal-inner-prose"> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": col2 })} </div>`} </div>`} <!-- Featured image --> ${post.featuredImage && renderTemplate`<div class="journal-inner-img"> <img${addAttribute(urlFor(post.featuredImage).width(1400).url(), "src")}${addAttribute(title, "alt")} loading="lazy"> </div>`} <!-- Back link --> <div class="journal-back"> <a href="/journal">← Back to Journal</a> </div> </div> </div> ` })}`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/journal/[slug].astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/journal/[slug].astro";
const $$url = "/journal/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
