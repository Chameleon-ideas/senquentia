import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Dh5Fxeqj.mjs';
import { d as getJournalPage, e as getBlogPosts, u as urlFor, $ as $$Layout } from './Layout_C8coNsuY.mjs';

const $$Journal = createComponent(async ($$result, $$props, $$slots) => {
  const [page, posts] = await Promise.all([getJournalPage(), getBlogPosts()]);
  const heroBgStyle = page?.heroBgImage ? `background-image:url('${urlFor(page.heroBgImage).width(1920).url()}')` : "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page?.seoTitle ?? "Journal", "description": page?.seoDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="page-hero"> <div class="page-hero-bg"${addAttribute(heroBgStyle, "style")}></div> <div class="page-hero-label"> <h1>${page?.heroLabel ?? "Journal."}</h1> <div class="page-hero-bar"></div> </div> </section>  <section class="journal-section"> <div class="container"> <h2 class="journal-heading reveal-up"> ${page?.sectionHeadline ?? "On Transformation and Leadership"} </h2> ${posts?.length > 0 ? renderTemplate`<div class="journal-grid"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/journal/${post.slug.current}`, "href")} class="journal-card"> ${post.featuredImage && renderTemplate`<div class="journal-card-img"> <img${addAttribute(urlFor(post.featuredImage).width(640).height(480).url(), "src")}${addAttribute(typeof post.title === "object" ? post.title.en : post.title, "alt")} loading="lazy"> </div>`} <h3 class="journal-card-title"> ${typeof post.title === "object" ? post.title.en : post.title} </h3> ${post.excerpt && renderTemplate`<p class="journal-card-excerpt"> ${typeof post.excerpt === "object" ? post.excerpt.en : post.excerpt} </p>`} <span class="journal-read-more">Read More</span> </a>`)} </div>` : renderTemplate`<p style="text-align:center;color:var(--clr-muted);padding-bottom:5rem;">
No posts yet. Check back soon.
</p>`} </div> </section> ` })}`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/journal.astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/journal.astro";
const $$url = "/journal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Journal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
