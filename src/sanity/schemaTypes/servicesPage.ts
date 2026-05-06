import { defineField } from 'sanity';

export default {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'intro', title: 'Intro Section' },
    { name: 'cta', title: 'CTA Section' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'localeString', group: 'hero' }),
    defineField({ name: 'heroSubtext', title: 'Hero Subtext', type: 'localeText', group: 'hero' }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image', group: 'hero', options: { hotspot: true } }),
    defineField({ name: 'sectionEyebrow', title: 'Section Eyebrow', type: 'localeString', group: 'intro' }),
    defineField({ name: 'sectionHeadline', title: 'Section Headline', type: 'localeString', group: 'intro' }),
    defineField({ name: 'sectionSubtext', title: 'Section Subtext', type: 'localeText', group: 'intro' }),
    defineField({ name: 'ctaHeadline', title: 'CTA Headline', type: 'localeString', group: 'cta' }),
    defineField({ name: 'ctaBody', title: 'CTA Body', type: 'localeText', group: 'cta' }),
    defineField({ name: 'ctaButton', title: 'CTA Button Text', type: 'localeString', group: 'cta' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2, group: 'seo' }),
  ],
  preview: { select: { title: 'heroHeadline.en' } },
};