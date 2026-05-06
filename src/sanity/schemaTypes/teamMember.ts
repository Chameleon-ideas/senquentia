import { defineField } from 'sanity';

export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() }),
    defineField({ name: 'role', title: 'Role / Title', type: 'localeString' }),
    defineField({ name: 'bio', title: 'Bio', type: 'localeText' }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', initialValue: 99 }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role.en', media: 'photo' },
  },
};