import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as Fragment } from './entrypoint_Dh5Fxeqj.mjs';
import { a as getEthosPage, u as urlFor, $ as $$Layout } from './Layout_C8coNsuY.mjs';

const $$Ethos = createComponent(async ($$result, $$props, $$slots) => {
  const page = await getEthosPage();
  const heroBgStyle = page?.heroBgImage ? `background-image:url('${urlFor(page.heroBgImage).width(1920).url()}')` : "";
  const founderPhotoUrl = page?.founderPhoto ? urlFor(page.founderPhoto).width(800).url() : null;
  const values = page?.values ?? [
    { name: "Trust", body: "Built through consistency, integrity, and transparency." },
    { name: "Excellence", body: "Driven by insight, expertise, and disciplined execution." },
    { name: "Growth", body: "Focused on strengthening capabilities and unlocking potential." },
    { name: "Partnership", body: "Defined by shared commitment to meaningful, lasting outcomes." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page?.seoTitle ?? "Ethos", "description": page?.seoDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="page-hero"> <div class="page-hero-bg"${addAttribute(heroBgStyle, "style")}></div> <div class="page-hero-label"> <h1>${page?.heroLabel ?? "Ethos."}</h1> <div class="page-hero-bar"></div> </div> </section>  <section class="section" style="padding-bottom:0;"> <div class="container"> <h2 class="ethos-intro-heading reveal-up"> ${page?.principlesHeadline ?? "The principles and perspectives that shape our work."} </h2> </div> </section>  <section class="section" style="padding-top:0;"> <div class="container"> <div class="ethos-two-col"> <!-- Etymology (left) --> <div class="ethos-left reveal-left"> <h3 class="ethos-section-label ethos-section-label--right">Etymology</h3> <p class="ethos-desc ethos-desc--right"> ${page?.etymologyDesc ?? "Tracing the roots of our philosophy, values, and purpose as a firm."} </p> <div class="etymology-word"> <div class="etymology-line"> <span class="etymology-part">sen</span> <span class="etymology-phonetic">tentia [sɛnˈtɛn.ti.a]</span> <span class="etymology-meaning">a way of thinking</span> </div> <div class="etymology-line"> <span class="etymology-part">elo</span> <span class="etymology-phonetic">: [eː.ɫɔˈkʷɛn.ti.a]</span> <span class="etymology-meaning">the art of fluency</span> </div> </div> </div> <div class="ethos-col-divider"></div> <!-- Philosophy (right) --> <div class="ethos-right reveal-right"> <h3 class="ethos-section-label">Philosophy</h3> <div class="ethos-desc"> ${page?.philosophyBody ? renderTemplate`<p>${page.philosophyBody}</p>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <p>At Senquentia, we challenge conventional thinking and provide clarity in complex environments.</p> <p>We combine strategic insight with practical execution to help leaders make informed decisions and drive meaningful change.</p> ` })}`} </div> <blockquote class="ethos-quote"> ${page?.philosophyQuote ?? "Experience brings perspective, but integrity is what earns trust."} </blockquote> </div> </div> </div> </section>  <section class="section values-section" style="padding-top:0;"> <div class="container"> <div class="values-header reveal-up"> <h2 class="values-title">Values</h2> <p class="values-desc"> ${page?.valuesDesc ?? "Our values have shaped every step of our journey and continue to define our perspective."} </p> </div> <div class="values-divider"></div> <div class="values-grid"> ${values.map((v) => renderTemplate`<div class="value-item reveal-up"> <h3 class="value-name">${v.name}</h3> <p class="value-body">${v.body}</p> </div>`)} </div> </div> </section>  <section class="founder-section"> <div class="container"> <div class="founder-grid"> ${founderPhotoUrl && renderTemplate`<img${addAttribute(founderPhotoUrl, "src")}${addAttribute(page?.founderName ?? "Founder", "alt")} class="founder-photo reveal-left" loading="lazy">`} <div class="reveal-right"> <h2 class="founder-label">Founder</h2> <h3 class="founder-name"> ${page?.founderName ?? "Veronica Eleonora Palumbo is an executive advisor fluent in both strategy and delivery."} </h3> <div class="founder-divider"></div> <div class="founder-bio"> ${page?.founderBio ? renderTemplate`<p>${page.founderBio}</p>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <p>With 20 years of experience leading ERP programs and expertise in Human Capital Management solutions, she is a trusted voice in digital and organizational transformation, bringing fresh perspectives to defining business initiatives.</p> <p>She has led several multinational engagements and directed global delivery teams, honing her expertise in large-scale implementations.</p> <p>As a strategic advisor, Veronica has partnered with executive teams to navigate critical business initiatives, mergers and acquisitions, and culture shifts, leveraging her skills in organizational development, succession planning, and change management.</p> ` })}`} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/ethos.astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/ethos.astro";
const $$url = "/ethos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ethos,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
