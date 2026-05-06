import { defineField } from 'sanity';

export default {
  name: 'testimonialsPage',
  title: 'Testimonials Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'localeString' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2 }),
  ],
  preview: { select: { title: 'heroHeadline.en' } },
};