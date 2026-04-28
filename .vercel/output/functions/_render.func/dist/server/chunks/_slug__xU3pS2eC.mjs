import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Dh5Fxeqj.mjs';
import { f as getServiceSlugs, h as getServiceBySlug, u as urlFor, $ as $$Layout } from './Layout_C8coNsuY.mjs';
import { $ as $$PortableText } from './PortableText_BP2C_Yio.mjs';

async function getStaticPaths() {
  const slugs = await getServiceSlugs();
  return slugs.map((s) => ({ params: { slug: s.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const service = await getServiceBySlug(slug);
  if (!service) return Astro2.redirect("/services");
  const title = typeof service.title === "object" ? service.title.en : service.title;
  const heroBgStyle = service.heroBgImage ? `background-image:url('${urlFor(service.heroBgImage).width(1920).url()}')` : service.image ? `background-image:url('${urlFor(service.image).width(1920).url()}')` : "";
  const perspectiveCol1 = service.perspectiveCol1 ?? [];
  const perspectiveCol2 = service.perspectiveCol2 ?? [];
  const approachSections = service.approachSections ?? [];
  const industries = service.industriesEngaged ?? [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": service.seoTitle ?? title, "description": service.seoDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="page-hero"> <div class="page-hero-bg"${addAttribute(heroBgStyle, "style")}></div> <div class="page-hero-label"> <h1>${title}</h1> <div class="page-hero-bar"></div> </div> </section>  <section class="perspective-section"> <div class="container"> <h2 class="perspective-label reveal-up">Perspective</h2> <div class="perspective-grid"> <div class="perspective-col reveal-left"> ${perspectiveCol1.length > 0 ? renderTemplate`${renderComponent($$result2, "PortableText", $$PortableText, { "value": perspectiveCol1 })}` : service.perspectiveText && renderTemplate`<p>${service.perspectiveText}</p>`} </div> <div class="perspective-col reveal-right"> ${perspectiveCol2.length > 0 ? renderTemplate`${renderComponent($$result2, "PortableText", $$PortableText, { "value": perspectiveCol2 })}` : service.perspectiveText2 && renderTemplate`<p>${service.perspectiveText2}</p>`} </div> </div> </div> </section>  ${service.quoteText && renderTemplate`<section class="service-quote-section"> <div class="container"> <p class="service-quote-text reveal-up">${service.quoteText}</p> </div> </section>`} <section class="approach-section"> <div class="container"> <h2 class="approach-label reveal-up">Approach</h2> ${service.approachLead && renderTemplate`<p class="approach-lead">${service.approachLead}</p>`} ${approachSections.length > 0 && renderTemplate`<div class="approach-blocks"> ${approachSections.map((s) => renderTemplate`<div class="approach-block reveal-up"> <h3 class="approach-block-title">${s.title}</h3> <p class="approach-block-body">${s.body}</p> </div>`)} </div>`} ${industries.length > 0 && renderTemplate`<div class="industries-table"> <p class="industries-label">Organizations engage us in moments such as these</p> ${industries.map((row) => renderTemplate`<div class="industries-row"> <span class="industry-name">${row.label}</span> <span class="industry-desc">${row.description}</span> </div>`)} </div>`} </div> </section>  ${service.closingText && renderTemplate`<section class="service-closing"> <div class="container"> <p class="service-closing-text reveal-up">${service.closingText}</p> </div> </section>`}` })}`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/services/[slug].astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/services/[slug].astro";
const $$url = "/services/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
