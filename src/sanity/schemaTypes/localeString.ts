import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'localeString',
  title: 'Localized Text',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string' }),
    defineField({ name: 'fr', title: 'French', type: 'string' }),
  ],
});
