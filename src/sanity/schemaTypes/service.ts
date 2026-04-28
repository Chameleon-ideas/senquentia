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
    defineField({ name: 'title', title: 'Title', type: 'string', group: 'core',
      validation: (R) => R.required(),
    }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', group: 'core',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({ name: 'shortDescription', title: 'Short Description (listing card)', type: 'text',
      rows: 2, group: 'core',
    }),
    defineField({ name: 'image', title: 'Card Image', type: 'image', group: 'core',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image', group: 'core',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', group: 'core',
      initialValue: 99, description: 'Lower = appears first.',
    }),

    // ── Perspective ───────────────────────────────────────────────────────────
    defineField({ name: 'perspectiveText', title: 'Perspective Text (left column)', type: 'text',
      rows: 4, group: 'perspective',
      description: 'Plain text fallback. Use rich-text columns below for more control.',
    }),
    defineField({ name: 'perspectiveText2', title: 'Perspective Text (right column)', type: 'text',
      rows: 4, group: 'perspective',
    }),
    defineField({ name: 'perspectiveCol1', title: 'Perspective Rich Text (left)', type: 'array',
      group: 'perspective', of: [{ type: 'block' }],
    }),
    defineField({ name: 'perspectiveCol2', title: 'Perspective Rich Text (right)', type: 'array',
      group: 'perspective', of: [{ type: 'block' }],
    }),
    defineField({ name: 'quoteText', title: 'Pull Quote', type: 'string', group: 'perspective' }),

    // ── Approach ──────────────────────────────────────────────────────────────
    defineField({ name: 'approachLead', title: 'Approach Lead Text', type: 'text',
      rows: 2, group: 'approach',
    }),
    defineField({
      name: 'approachSections', title: 'Approach Sections', type: 'array', group: 'approach',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Section Title', type: 'string' }),
          defineField({ name: 'body', title: 'Section Body', type: 'text', rows: 3 }),
        ],
        preview: { select: { title: 'title', subtitle: 'body' } },
      }],
    }),
    defineField({
      name: 'industriesEngaged', title: 'Industries / Engagement Contexts', type: 'array',
      group: 'approach',
      description: 'Table rows: "Organizations engage us in moments such as these"',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Industry / Context Label', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'string' }),
        ],
        preview: { select: { title: 'label', subtitle: 'description' } },
      }],
    }),

    // ── Closing ───────────────────────────────────────────────────────────────
    defineField({ name: 'closingText', title: 'Closing Statement', type: 'text',
      rows: 2, group: 'closing',
    }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2, group: 'seo' }),
  ],
  orderings: [{ name: 'orderAsc', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'slug.current', media: 'image' },
    prepare: ({ title, subtitle, media }) => ({ title, subtitle: `/${subtitle}`, media }),
  },
});
