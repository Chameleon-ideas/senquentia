import { defineType, defineField } from 'sanity';

export default defineType({
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
      name: 'perspectiveTitle1', title: 'Perspective Title 1 (left)', type: 'localeString',
      group: 'perspective',
    }),
    defineField({
      name: 'perspectiveLead1', title: 'Perspective Lead 1 (left)', type: 'localeText',
      group: 'perspective', rows: 2
    }),
    defineField({
      name: 'perspectiveTitle2', title: 'Perspective Title 2 (right)', type: 'localeString',
      group: 'perspective',
    }),
    defineField({
      name: 'perspectiveLead2', title: 'Perspective Lead 2 (right)', type: 'localeText',
      group: 'perspective', rows: 3
    }),
    defineField({
      name: 'perspectiveBody', title: 'Perspective Body (right)', type: 'localeBlock',
      group: 'perspective',
    }),
    defineField({ name: 'quoteText', title: 'Pull Quote', type: 'localeString', group: 'perspective' }),

    // ── Alignment ─────────────────────────────────────────────────────────────
    defineField({
      name: 'alignmentTitle', title: 'Alignment Title', type: 'localeString',
      group: 'perspective',
    }),
    defineField({
      name: 'alignmentBody', title: 'Alignment Body', type: 'localeText',
      group: 'perspective',
    }),
    defineField({
      name: 'alignmentImage', title: 'Alignment Background Image', type: 'image',
      group: 'perspective', options: { hotspot: true },
    }),

    // ── Approach ──────────────────────────────────────────────────────────────
    defineField({
      name: 'approachLead', title: 'Approach Lead Text', type: 'localeText',
      group: 'approach',
    }),
    defineField({
      name: 'approachBody', title: 'Approach Body Text', type: 'localeText',
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

    // ── Moments ───────────────────────────────────────────────────────────────
    defineField({
      name: 'momentsTitle', title: 'Moments Title', type: 'localeString',
      group: 'approach',
    }),
    defineField({
      name: 'industriesEngaged', title: 'Moments List', type: 'array', group: 'approach',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'localeString' }),
          defineField({ name: 'description', title: 'Description', type: 'localeString' }),
        ],
        preview: { select: { title: 'label.en', subtitle: 'description.en' } },
      }],
    }),

    // ── Closing / Impact ──────────────────────────────────────────────────────
    defineField({ name: 'closingText', title: 'Impact Title', type: 'localeString', group: 'closing' }),
    defineField({ name: 'closingBody', title: 'Impact Body', type: 'localeBlock', group: 'closing' }),
    defineField({ name: 'closingFooter', title: 'Closing Footer Text', type: 'localeString', group: 'closing' }),
    defineField({ name: 'closingImage', title: 'Closing Background Image', type: 'image', group: 'closing', options: { hotspot: true } }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2, group: 'seo' }),
  ],
  orderings: [{ name: 'orderAsc', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title.en', subtitle: 'slug.current', media: 'image' } },
});