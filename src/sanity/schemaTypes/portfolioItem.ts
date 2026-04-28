import { defineType, defineField } from 'sanity';

export const portfolioItem = defineType({
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Project Title', type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'title.en' },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'category', title: 'Category', type: 'string',
      description: 'e.g. Residential, Commercial, Landscaping',
    }),
    defineField({ name: 'featuredImage', title: 'Featured / Cover Image', type: 'image',
      options: { hotspot: true }, validation: (R) => R.required(),
    }),
    defineField({
      name: 'gallery', title: 'Gallery Images', type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'description', title: 'Project Description', type: 'localeText' }),
    defineField({ name: 'client', title: 'Client Name (optional)', type: 'string' }),
    defineField({ name: 'completedAt', title: 'Completion Date', type: 'date' }),
    defineField({ name: 'featured', title: 'Featured on Home Page', type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ name: 'orderAsc', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title.en', subtitle: 'category', media: 'featuredImage' },
  },
});
