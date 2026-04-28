import { defineType, defineField } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'intro', title: 'Intro Section' },
    { name: 'services', title: 'Services Section' },
    { name: 'stats', title: 'Stats Bar' },
    { name: 'cta', title: 'CTA Section' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // ── Hero ─────────────────────────────────────────────────────────────────
    defineField({ name: 'heroTagline', title: 'Hero Tagline', type: 'string', group: 'hero',
      description: 'Large italic text (e.g. "Strategy. Insight. Impact.")',
    }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image',
      group: 'hero', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),

    // ── Intro ─────────────────────────────────────────────────────────────────
    defineField({ name: 'introEyebrow', title: 'Eyebrow Label', type: 'string', group: 'intro',
      description: 'Small uppercase label above the headline.',
    }),
    defineField({ name: 'introHeadline', title: 'Headline', type: 'string', group: 'intro' }),
    defineField({ name: 'introLead', title: 'Lead Text (left)', type: 'text', rows: 3, group: 'intro' }),
    defineField({ name: 'introBody', title: 'Body Text (right)', type: 'text', rows: 4, group: 'intro' }),

    // ── Services ──────────────────────────────────────────────────────────────
    defineField({ name: 'servicesBgImage', title: 'Services Section Background', type: 'image',
      group: 'services', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),

    // ── Stats ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'stats', title: 'Stats', type: 'array', group: 'stats',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'value', title: 'Number', type: 'number' }),
          defineField({ name: 'suffix', title: 'Suffix', type: 'string', description: '+ or M+ etc.' }),
          defineField({ name: 'label', title: 'Label', type: 'string' }),
        ],
        preview: { select: { title: 'value', subtitle: 'label' } },
      }],
    }),

    // ── CTA ───────────────────────────────────────────────────────────────────
    defineField({ name: 'ctaText', title: 'CTA Body Text', type: 'text', rows: 2, group: 'cta' }),
    defineField({ name: 'ctaLinkLabel', title: 'CTA Link Label', type: 'string', group: 'cta',
      description: 'e.g. "Connect."',
    }),
    defineField({ name: 'ctaBgImage', title: 'CTA Background Image', type: 'image',
      group: 'cta', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2, group: 'seo' }),
    defineField({ name: 'ogImage', title: 'OG / Share Image', type: 'image', group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
});
