import { defineField } from 'sanity';

export default {
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'document',
  fields: [
    defineField({ name: 'question', title: 'Question', type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'answer', title: 'Answer', type: 'localeText',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'category', title: 'Category (optional)', type: 'string',
      description: 'Groups related questions (e.g. Pricing, Process, Warranty)',
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  orderings: [{ name: 'orderAsc', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'question.en' } },
};