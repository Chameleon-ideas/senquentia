import { defineField } from 'sanity';

export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'localeText',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'author', title: 'Author Name', type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'role', title: 'Role / Company', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'rating', title: 'Star Rating', type: 'number',
      options: { list: [5, 4, 3] }, initialValue: 5,
    }),
    defineField({ name: 'featured', title: 'Featured on Home', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ name: 'orderAsc', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'author', subtitle: 'role', media: 'photo' },
  },
};