import { defineType, defineField } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Journal Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localeString', validation: (R) => R.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title.en', maxLength: 96 }, validation: (R) => R.required() }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'localeText', rows: 3 }),
    defineField({ name: 'featuredImage', title: 'Thumbnail Image (Journal List)', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })] }),
    defineField({ name: 'innerImage', title: 'Hero Image (Inner Page)', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })] }),
    defineField({ name: 'publishedAt', title: 'Published at', type: 'datetime' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: [{ title: 'Strategy', value: 'Strategy' }, { title: 'Transformation', value: 'Transformation' }, { title: 'Leadership', value: 'Leadership' }] } }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: { type: 'teamMember' } }),
    defineField({
      name: 'editorialIntro',
      title: 'Editorial Intro (Asymmetrical Rows)',
      type: 'object',
      fields: [
        defineField({ name: 'col1', title: 'Left Column (Wider)', type: 'localeBlock' }),
        defineField({ name: 'col2', title: 'Right Column (Narrower)', type: 'localeBlock' }),
      ],
    }),
    defineField({ name: 'quoteText', title: 'Pull Quote', type: 'localeString' }),
    defineField({
      name: 'staggeredSection',
      title: 'Staggered Text Section',
      type: 'object',
      fields: [
        defineField({ name: 'topText', title: 'Top Row Text (Right aligned)', type: 'localeText', rows: 4 }),
        defineField({ name: 'bottomText', title: 'Bottom Row Text (Left aligned)', type: 'localeText', rows: 4 }),
      ],
    }),
    defineField({ name: 'body', title: 'Body Content (Standard)', type: 'localeBlock' }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2 }),
  ],
  preview: { select: { title: 'title.en', subtitle: 'publishedAt', media: 'featuredImage' } },
});
