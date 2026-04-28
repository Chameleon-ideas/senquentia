import { defineType, defineField } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Ethos Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'principles', title: 'Principles' },
    { name: 'philosophy', title: 'Etymology & Philosophy' },
    { name: 'values', title: 'Values' },
    { name: 'founder', title: 'Founder' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────────────
    defineField({ name: 'heroLabel', title: 'Hero Label', type: 'string', group: 'hero',
      description: 'Label shown in top-right of hero (e.g. "Ethos.")',
    }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image',
      group: 'hero', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),

    // ── Principles ────────────────────────────────────────────────────────────
    defineField({ name: 'principlesHeadline', title: 'Principles Headline', type: 'string',
      group: 'principles',
      description: 'Large right-aligned heading (e.g. "Principles that anchor our work.")',
    }),

    // ── Etymology & Philosophy ────────────────────────────────────────────────
    defineField({ name: 'etymologyDesc', title: 'Etymology Description', type: 'text',
      rows: 4, group: 'philosophy',
    }),
    defineField({ name: 'philosophyBody', title: 'Philosophy Body', type: 'text',
      rows: 4, group: 'philosophy',
    }),
    defineField({ name: 'philosophyQuote', title: 'Philosophy Pull Quote', type: 'string',
      group: 'philosophy',
    }),

    // ── Values ────────────────────────────────────────────────────────────────
    defineField({ name: 'valuesDesc', title: 'Values Description', type: 'text',
      rows: 3, group: 'values',
    }),
    defineField({
      name: 'values', title: 'Values', type: 'array', group: 'values',
      description: 'Four values displayed in a 2×2 grid.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Name', type: 'string' }),
          defineField({ name: 'body', title: 'Description', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'name', subtitle: 'body' } },
      }],
    }),

    // ── Founder ───────────────────────────────────────────────────────────────
    defineField({ name: 'founderName', title: 'Founder Name', type: 'string', group: 'founder' }),
    defineField({ name: 'founderTitle', title: 'Founder Title / Role', type: 'string', group: 'founder' }),
    defineField({ name: 'founderPhoto', title: 'Founder Photo', type: 'image',
      group: 'founder', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({ name: 'founderBio', title: 'Founder Bio', type: 'text', rows: 5, group: 'founder' }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2, group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Ethos Page' }) },
});
