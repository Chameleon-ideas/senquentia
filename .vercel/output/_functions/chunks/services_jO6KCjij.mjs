import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Dh5Fxeqj.mjs';
import { i as getServices, $ as $$Layout } from './Layout_C8coNsuY.mjs';

const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const services = await getServices();
  const displayServices = services?.length ? services : [
    {
      slug: { current: "digital-organizational-transformation" },
      title: "Digital & Organizational Transformation",
      shortDescription: "Successful transformation requires bold, already-clarity and disciplined execution."
    },
    {
      slug: { current: "strategic-advisory" },
      title: "Strategic Advisory.",
      shortDescription: "Strategic decisions rarely fail because of a lack of ideas. They fail when organizations struggle to align leadership."
    },
    {
      slug: { current: "leadership-development-executive-coaching" },
      title: "Leadership Development & Executive Coaching.",
      shortDescription: "Leaders often engage us when they are navigating complex challenges and need clear, proven solutions."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services", "description": "Our areas of expertise at Senquentia." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="services-page"> <div class="services-listing" style="padding-top:8rem;"> <div class="container"> <div class="services-listing-grid"> ${displayServices.map((s, i) => {
    const title = typeof s.title === "object" ? s.title.en : s.title;
    const desc = typeof s.shortDescription === "object" ? s.shortDescription.en : s.shortDescription;
    return renderTemplate`<a${addAttribute(`/services/${s.slug?.current ?? s.slug}`, "href")} class="services-listing-card"> <span class="services-listing-num">0${i + 1}</span> <h2 class="services-listing-title">${title}</h2> ${desc && renderTemplate`<p class="services-listing-desc">${desc}</p>`} <span class="services-listing-arrow">View →</span> </a>`;
  })} </div> </div> </div> </div> ` })}`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/services.astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
