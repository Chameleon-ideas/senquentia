import { defineType, defineField } from 'sanity';

export const faqPage = defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Page Hero' },
    { name: 'content', title: 'Content' },
    { name: 'cta', title: 'CTA Banner' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroHeadline', title: 'Page Headline', type: 'localeString', group: 'hero' }),
    defineField({ name: 'heroSubtext', title: 'Page Subtext', type: 'localeText', group: 'hero' }),

    defineField({ name: 'sectionHeadline', title: 'Section Headline', type: 'localeString', group: 'content',
      description: 'Optional headline above the FAQ list.',
    }),
    defineField({ name: 'sectionSubtext', title: 'Section Subtext', type: 'localeText', group: 'content' }),

    defineField({ name: 'ctaHeadline', title: 'CTA Headline', type: 'localeString', group: 'cta' }),
    defineField({ name: 'ctaBody', title: 'CTA Body', type: 'localeText', group: 'cta' }),
    defineField({
      name: 'ctaButton', title: 'CTA Button', type: 'object', group: 'cta',
      fields: [
        defineField({ name: 'label', type: 'localeString', title: 'Label' }),
        defineField({ name: 'href', type: 'string', title: 'Link', initialValue: '/contact' }),
      ],
    }),

    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare() {
      return { title: 'FAQ Page' };
    },
  },
});
