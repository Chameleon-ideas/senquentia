import { defineType, defineField } from 'sanity';

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Singleton
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'localeString',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'localeText',
      rows: 3,
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'localeString',
      description: 'e.g. © 2026 Senquentia. All rights reserved.',
    }),
  ],
  preview: {
    prepare: function() {
      return { title: 'Footer' };
    },
  },
});
