import { defineType, defineField } from 'sanity';

// Inline helpers to avoid import issues during minification
const localeString = defineType({
  name: 'localeString',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'fr', title: 'French', type: 'string' }),
  ],
});

const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text (long)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', rows: 3 }),
    defineField({ name: 'fr', title: 'French', type: 'text', rows: 3 }),
  ],
});

const localeBlock = defineType({
  name: 'localeBlock',
  title: 'Localized Rich Text',
  type: 'object',
  fields: [
    defineField({
      name: 'en', title: 'English', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'fr', title: 'French', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
  ],
});

import siteSettings from './siteSettings';
import homePage from './homePage';
import aboutPage from './aboutPage';
import blogPage from './blogPage';
import contactPage from './contactPage';
import servicesPage from './servicesPage';
import footer from './footer';
import service from './service';
import blogPost from './blogPost';
import teamMember from './teamMember';
import faqPage from './faqPage';
import faqItem from './faqItem';
import portfolioPage from './portfolioPage';
import portfolioItem from './portfolioItem';
import testimonialsPage from './testimonialsPage';
import testimonial from './testimonial';

export const schemaTypes = [
  localeString,
  localeText,
  localeBlock,
  siteSettings,
  homePage,
  servicesPage,
  aboutPage,
  blogPage,
  contactPage,
  footer,
  faqPage,
  portfolioPage,
  testimonialsPage,
  service,
  blogPost,
  teamMember,
  faqItem,
  portfolioItem,
  testimonial,
];
