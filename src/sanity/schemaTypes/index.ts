import { localeString, localeText, localeBlock } from './localeString';
import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { aboutPage } from './aboutPage';
import { blogPage } from './blogPage';
import { contactPage } from './contactPage';
import { servicesPage } from './servicesPage';
import { footer } from './footer';
import { service } from './service';
import { blogPost } from './blogPost';
import { teamMember } from './teamMember';
import { faqPage } from './faqPage';
import { faqItem } from './faqItem';
import { portfolioPage } from './portfolioPage';
import { portfolioItem } from './portfolioItem';
import { testimonialsPage } from './testimonialsPage';
import { testimonial } from './testimonial';

export const schemaTypes = [
  // Primitive helpers
  localeString,
  localeText,
  localeBlock,
  // Singletons
  siteSettings,
  homePage,
  servicesPage,
  aboutPage, // Ethos
  blogPage,  // Journal
  contactPage,
  footer,
  faqPage,
  portfolioPage,
  testimonialsPage,
  // Collections
  service,
  blogPost,
  teamMember,
  faqItem,
  portfolioItem,
  testimonial,
];
