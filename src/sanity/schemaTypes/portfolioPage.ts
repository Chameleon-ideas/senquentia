import { defineType, defineField } from 'sanity';

export const portfolioPage = defineType({
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Page Hero' },
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroHeadline', title: 'Page Headline', type: 'localeString', group: 'hero' }),
    defineField({ name: 'heroSubtext', title: 'Page Subtext', type: 'localeText', group: 'hero' }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image',
      group: 'hero', options: { hotspot: true },
    }),

    defineField({ name: 'sectionHeadline', title: 'Section Headline', type: 'localeString', group: 'content' }),
    defineField({ name: 'showCategoryFilter', title: 'Show Category Filter', type: 'boolean',
      group: 'content', initialValue: true,
      description: 'Show category filter tabs above the grid.',
    }),
    defineField({ name: 'emptyStateText', title: 'Empty State Text', type: 'localeString',
      group: 'content',
      description: 'Shown when no portfolio items exist.',
    }),

    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Portfolio Page' }) },
});
