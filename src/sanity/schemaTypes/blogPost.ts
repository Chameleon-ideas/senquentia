import { defineType, defineField } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'localeString',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'title.en' }, validation: (R) => R.required(),
    }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'localeText',
      description: 'Short summary shown on blog listing page.',
    }),
    defineField({ name: 'featuredImage', title: 'Featured Image (Thumbnail)', type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'innerImage', title: 'Inner Page Hero Image', type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'body', title: 'Body', type: 'localeBlock', description: 'Standard body text (optional if using structured fields below)' }),
    
    // Structured Editorial Layout
    defineField({
      name: 'editorialIntro',
      title: 'Editorial Intro (Two Columns)',
      type: 'object',
      fields: [
        defineField({ name: 'col1', title: 'Column 1', type: 'localeBlock' }),
        defineField({ name: 'col2', title: 'Column 2', type: 'localeBlock' }),
      ],
    }),
    defineField({ name: 'quoteText', title: 'Pull Quote', type: 'localeString' }),
    defineField({
      name: 'staggeredSection',
      title: 'Staggered Section',
      type: 'object',
      fields: [
        defineField({ name: 'topText', title: 'Top Text', type: 'localeString' }),
        defineField({ name: 'bottomText', title: 'Bottom Text', type: 'localeString' }),
      ],
    }),

    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' }),
    defineField({ name: 'author', title: 'Author', type: 'reference', to: [{ type: 'teamMember' }] }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2 }),
  ],
  orderings: [{ name: 'publishedDesc', title: 'Newest First',
    by: [{ field: 'publishedAt', direction: 'desc' }],
  }],
  preview: {
    select: { title: 'title.en', subtitle: 'publishedAt', media: 'featuredImage' },
    prepare: ({ title, subtitle, media }) => ({
      title, subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : 'Draft', media,
    }),
  },
});
