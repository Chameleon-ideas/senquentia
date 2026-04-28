import { defineType, defineField } from 'sanity';

export const blogPage = defineType({
  name: 'blogPage',
  title: 'Journal Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroLabel', title: 'Hero Label', type: 'string', group: 'hero',
      description: 'Label shown in top-right of hero (e.g. "Journal.")',
    }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image',
      group: 'hero', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({ name: 'sectionHeadline', title: 'Section Headline', type: 'string', group: 'content',
      description: 'Heading above the post grid (e.g. "On Transformation and Leadership")',
    }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Journal Page' }) },
});
