import { defineField } from 'sanity';

export default {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image', group: 'hero', options: { hotspot: true } }),
    defineField({ name: 'leadText', title: 'Lead Text', type: 'localeText', group: 'hero' }),
    defineField({ name: 'disclaimer', title: 'Disclaimer Text', type: 'localeString', group: 'hero' }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string', group: 'hero' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2, group: 'seo' }),
  ],
  preview: { select: { title: 'leadText.en' } },
};