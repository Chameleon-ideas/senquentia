import { defineField } from 'sanity';

export default {
  name: 'blogPage',
  title: 'Journal List Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero Label', type: 'localeString', group: 'hero', description: 'Small uppercase label (e.g. "Journal")' }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image', group: 'hero', options: { hotspot: true } }),
    defineField({ name: 'sectionHeadline', title: 'Section Headline', type: 'localeString', group: 'hero' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2, group: 'seo' }),
  ],
  preview: { select: { title: 'heroLabel.en' } },
};