import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core' },
    { name: 'perspective', title: 'Perspective Section' },
    { name: 'approach', title: 'Approach Section' },
    { name: 'closing', title: 'Closing' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── Core ──────────────────────────────────────────────────────────────────
    defineField({
      name: 'title', title: 'Title', type: 'localeString', group: 'core',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug', title: 'Slug', type: 'slug', group: 'core',
      options: { source: 'title.en', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'shortDescription', title: 'Short Description (listing card)', type: 'localeText',
      group: 'core',
    }),
    defineField({
      name: 'image', title: 'Card Image', type: 'image', group: 'core',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })],
    }),
    defineField({
      name: 'heroBgImage', title: 'Hero Background Image', type: 'image', group: 'core',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })],
    }),
    defineField({
      name: 'order', title: 'Display Order', type: 'number', group: 'core',
      initialValue: 99, description: 'Lower = appears first.',
    }),

    // ── Perspective ───────────────────────────────────────────────────────────
    defineField({
      name: 'perspectiveText', title: 'Perspective Text (left column)', type: 'localeText',
      group: 'perspective',
      description: 'Plain text fallback. Use rich-text columns below for more control.',
    }),
    defineField({
      name: 'perspectiveText2', title: 'Perspective Text (right column)', type: 'localeText',
      group: 'perspective',
    }),
    defineField({
      name: 'perspectiveCol1', title: 'Perspective Rich Text (left)', type: 'localeBlock',
      group: 'perspective',
    }),
    defineField({
      name: 'perspectiveCol2', title: 'Perspective Rich Text (right)', type: 'localeBlock',
      group: 'perspective',
    }),
    defineField({ name: 'quoteText', title: 'Pull Quote', type: 'localeString', group: 'perspective' }),

    // ── Approach ──────────────────────────────────────────────────────────────
    defineField({
      name: 'approachLead', title: 'Approach Lead Text', type: 'localeText',
      group: 'approach',
    }),
    defineField({
      name: 'approachSections', title: 'Approach Sections', type: 'array', group: 'approach',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Section Title', type: 'localeString' }),
          defineField({ name: 'body', title: 'Section Body', type: 'localeText' }),
        ],
        preview: { select: { title: 'title.en' } },
      }],
    }),

    // ── Closing ───────────────────────────────────────────────────────────────
    defineField({ name: 'closingTitle', title: 'Closing Title', type: 'localeString', group: 'closing' }),
    defineField({ name: 'closingBody', title: 'Closing Body', type: 'localeText', group: 'closing' }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2, group: 'seo' }),
  ],
  orderings: [{ name: 'orderAsc', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title.en', subtitle: 'slug.current', media: 'image' } },
});
