import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import './entrypoint_Dh5Fxeqj.mjs';
import 'clsx';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  return Astro2.redirect("/ethos", 301);
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/about.astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
