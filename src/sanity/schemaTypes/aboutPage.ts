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
    defineField({ name: 'heroLabel', title: 'Hero Label', type: 'localeString', group: 'hero',
      description: 'Label shown in top-right of hero (e.g. "Ethos.")',
    }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image',
      group: 'hero', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })],
    }),

    // ── Principles ────────────────────────────────────────────────────────────
    defineField({ name: 'principlesHeadline', title: 'Principles Headline', type: 'localeString',
      group: 'principles',
      description: 'Large right-aligned heading (e.g. "Principles that anchor our work.")',
    }),

    // ── Etymology & Philosophy ────────────────────────────────────────────────
    defineField({ name: 'etymologyDesc', title: 'Etymology Description', type: 'localeText',
      group: 'philosophy',
    }),
    defineField({ name: 'philosophyBody', title: 'Philosophy Body', type: 'localeText',
      group: 'philosophy',
    }),
    defineField({ name: 'philosophyQuote', title: 'Philosophy Pull Quote', type: 'localeString',
      group: 'philosophy',
    }),

    // ── Values ────────────────────────────────────────────────────────────────
    defineField({ name: 'valuesDesc', title: 'Values Description', type: 'localeText',
      group: 'values',
    }),
    defineField({
      name: 'values', title: 'Values', type: 'array', group: 'values',
      description: 'Four values displayed in a 2×2 grid.',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'name', title: 'Name', type: 'localeString' }),
          defineField({ name: 'body', title: 'Description', type: 'localeText' }),
        ],
        preview: {
          select: { title: 'name.en' },
          prepare: function(selection) {
            return { title: selection.title || 'Untitled Value' };
          },
        },
      }],
    }),

    // ── Founder ───────────────────────────────────────────────────────────────
    defineField({ name: 'founderImage', title: 'Founder Image', type: 'image', group: 'founder',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })],
    }),
    defineField({ name: 'founderName', title: 'Founder Name', type: 'localeString', group: 'founder' }),
    defineField({ name: 'founderTitle', title: 'Founder Title', type: 'localeString', group: 'founder' }),
    defineField({ name: 'founderBio', title: 'Founder Bio', type: 'localeText', rows: 5, group: 'founder' }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare: function() {
      return { title: 'Ethos Page' };
    },
  },
});
