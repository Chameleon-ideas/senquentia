import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import { l as createRenderInstruction, n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from './entrypoint_Dh5Fxeqj.mjs';
import { g as getConnectPage, u as urlFor, $ as $$Layout } from './Layout_C8coNsuY.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const page = await getConnectPage();
  const bgStyle = page?.heroBgImage ? `background-image:url('${urlFor(page.heroBgImage).width(1920).url()}')` : "";
  const email = page?.email ?? "info@senquentia.com";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page?.seoTitle ?? "Contact", "description": page?.seoDescription }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="connect-page"> <!-- Background --> <div class="connect-bg"${addAttribute(bgStyle, "style")}></div> <div class="connect-inner"> <!-- "CONTACT |" label top right --> <div class="connect-label"> <span class="connect-label-text">Contact</span> <div class="connect-bar"></div> </div> <!-- Content --> <div class="connect-content"> <div class="connect-intro"> <p>${page?.leadText ?? "Our work begins in conversation."}</p> <p>Connect.</p> </div> <div class="connect-line"></div> <!-- Form --> <form id="connect-form" class="connect-form-grid" method="POST" action="/api/contact" novalidate> <!-- Left column --> <div class="connect-left-col"> <input class="connect-input" type="text" name="name" placeholder="Name" required> <input class="connect-input" type="text" name="organization" placeholder="Organization"> <input class="connect-input" type="email" name="email" placeholder="Email" required> <input class="connect-input" type="tel" name="phone" placeholder="Phone"> </div> <!-- Right column --> <div class="connect-right-col"> <textarea class="connect-textarea connect-textarea--area" name="area" placeholder="Area of interest"></textarea> <textarea class="connect-textarea connect-textarea--msg" name="message" placeholder="Message" required></textarea> </div> <!-- Footer row --> <div class="connect-form-footer"> <p class="connect-disclaimer"> ${page?.disclaimer ?? "We treat all inquiries with discretion and confidentiality."} </p> <button type="submit" class="connect-send-btn" id="send-btn">Send</button> </div> </form> ${email && renderTemplate`<p class="connect-form-email">${email}</p>`} </div> </div> </div> ` })} ${renderScript($$result, "/Users/macbook/Desktop/Projects/senquentia/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/contact.astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
