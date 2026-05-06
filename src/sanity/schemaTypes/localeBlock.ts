import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'localeBlock',
  title: 'Localized Rich Text',
  type: 'object',
  fields: [
    defineField({
      name: 'en', title: 'English', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'fr', title: 'French', type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
  ],
});
