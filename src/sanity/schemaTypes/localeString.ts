import { defineType, defineField } from 'sanity';

// Reusable locale-aware field types.
// When enableMultilang is off, clients only see/fill the primary language.

export const localeString = defineType({
  name: 'localeString',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'fr', title: 'French', type: 'string' }),
  ],
});

export const localeText = defineType({
  name: 'localeText',
  title: 'Localized Text (long)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', rows: 3 }),
    defineField({ name: 'fr', title: 'French', type: 'text', rows: 3 }),
  ],
});

export const localeBlock = defineType({
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
