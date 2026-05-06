import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'localeText',
  title: 'Localized Text (long)',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', rows: 3 }),
    defineField({ name: 'fr', title: 'French', type: 'text', rows: 3 }),
  ],
});
