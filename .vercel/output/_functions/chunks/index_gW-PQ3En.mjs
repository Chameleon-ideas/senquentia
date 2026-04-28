import './page-ssr_IyVetgA3.mjs';
import { c as createComponent } from './astro-component_GG4ywGak.mjs';
import 'piccolore';
import { n as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as Fragment } from './entrypoint_Dh5Fxeqj.mjs';
import { j as getHomePage, i as getServices, u as urlFor, $ as $$Layout } from './Layout_C8coNsuY.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const [page, services] = await Promise.all([getHomePage(), getServices()]);
  const heroBgStyle = page?.heroBgImage ? `background-image:url('${urlFor(page.heroBgImage).width(1920).url()}')` : "";
  page?.servicesBgImage ? `background-image:url('${urlFor(page.servicesBgImage).width(1920).url()}')` : "";
  const ctaBgStyle = page?.ctaBgImage ? `background-image:url('${urlFor(page.ctaBgImage).width(1920).url()}')` : "";
  const stats = page?.stats ?? [
    { number: "500M+", label: "Program budget oversight" },
    { number: "25+", label: "ERP Transformation Programs" },
    { number: "30+", label: "HCM Transformation Programs" },
    { number: "10+", label: "Mergers & Acquisitions" }
  ];
  const industries = [
    "Crown Corporations & Public Sector Entities",
    "Banking & Financial Services",
    "Energy & Utilities",
    "Insurance",
    "Aviation & Aerospace",
    "Transportation & Logistics",
    "Construction & Engineering Services",
    "Pulp, Paper, & Forestry",
    "Mining & Natural Resources",
    "Retail & Consumer Goods",
    "Food & Beverage Manufacturing",
    "Higher Education & Academic Institutions"
  ];
  const displayServices = services?.length ? services : [
    { title: "Digital & Organizational Transformation", slug: { current: "digital-organizational-transformation" } },
    { title: "Strategic Advisory", slug: { current: "strategic-advisory" } },
    { title: "Leadership Development & Executive Coaching", slug: { current: "leadership-development-executive-coaching" } }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": page?.seoTitle, "description": page?.seoDescription }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="home-hero"> <div class="home-hero-bg"${addAttribute(heroBgStyle, "style")}></div> <p class="home-hero-tagline"> ${page?.heroTagline ?? "Strategy. Insight. Impact"} </p> </section>  <section class="intro-section"> <div class="container"> <p class="intro-eyebrow">${page?.introEyebrow ?? "Welcome to Senquentia"}</p> <div class="intro-h-divider"></div> <div class="intro-grid"> <div class="intro-left"> <h2 class="intro-heading reveal-left"> ${page?.introHeadline ?? "Where Leadership Meets Transformation"} </h2> </div> <div class="intro-v-divider"></div> <div class="intro-right reveal-right"> <p class="intro-lead"> ${page?.introLead ?? "Since 2010, we have partnered with executive teams to lead complex digital and organizational transformation."} </p> <div class="intro-body"> ${page?.introBody ? renderTemplate`<p>${page.introBody}</p>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <p>Through our strategy and management consulting services, organizations navigate complexity and drive meaningful change — supported by strategic perspective and a pragmatic, hands-on approach.</p> <p>Our work is grounded in trust and shaped by the unique context of each organization.</p> <p>We focus on delivering lasting impact.</p> ` })}`} </div> </div> </div> </div> </section>  <section class="services-wrap"> ${page?.servicesBgImage ? renderTemplate`<img class="services-bg-img"${addAttribute(urlFor(page.servicesBgImage).width(1920).url(), "src")} alt="">` : renderTemplate`<div class="services-bg-img" style="background:#1a1a1a;display:block;"></div>`} <div class="services-cards-row"> ${displayServices.slice(0, 3).map((s) => renderTemplate`<a${addAttribute(`/services/${s.slug?.current ?? s.slug}`, "href")} class="service-card-item"> <div class="service-card-inner"> <span class="service-card-title">${typeof s.title === "object" ? s.title.en : s.title}</span> </div> </a>`)} </div> </section>  <section class="stats-bar"> <div class="container"> <div class="stats-grid"> ${stats.map((stat) => renderTemplate`<div class="reveal-up"> <div class="stat-number">${stat.number ?? stat.value}</div> <div class="stat-label">${stat.label}</div> </div>`)} </div> </div> </section>  <div class="ticker-wrap" aria-hidden="true"> <div class="ticker-track"> ${[...industries, ...industries].map((item) => renderTemplate`<span class="ticker-item">${item}</span>`)} </div> </div>  <section class="home-cta"> <div class="home-cta-bg"${addAttribute(ctaBgStyle, "style")}></div> <div class="container"> <div class="home-cta-content"> <p class="home-cta-text"> ${page?.ctaText ?? "Our work begins in conversation."} </p> <div class="home-cta-link-row"> <a href="/contact" class="home-cta-link"> ${page?.ctaLinkLabel ?? "Connect."} </a> <div class="home-cta-bar"></div> </div> </div> </div> </section> ` })}`;
}, "/Users/macbook/Desktop/Projects/senquentia/src/pages/index.astro", void 0);

const $$file = "/Users/macbook/Desktop/Projects/senquentia/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
