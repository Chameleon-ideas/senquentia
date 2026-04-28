import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import './entrypoint_Dh5Fxeqj.mjs';
import 'clsx';

const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  return Astro2.redirect("/", 301);
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/portfolio/[slug].astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/portfolio/[slug].astro";
const $$url = "/portfolio/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
