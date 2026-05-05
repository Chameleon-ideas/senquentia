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
    defineField({ name: 'heroTagline', title: 'Hero Tagline', type: 'localeString', group: 'hero',
      description: 'Large italic text (e.g. "Strategy. Insight. Impact.")',
    }),
    defineField({ name: 'heroBgImage', title: 'Hero Background Image', type: 'image',
      group: 'hero', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })],
    }),

    // ── Intro ─────────────────────────────────────────────────────────────────
    defineField({ name: 'introEyebrow', title: 'Eyebrow Label', type: 'localeString', group: 'intro',
      description: 'Small uppercase label above the headline.',
    }),
    defineField({ name: 'introHeadline', title: 'Headline', type: 'localeString', group: 'intro' }),
    defineField({ name: 'introLead', title: 'Lead Text (left)', type: 'localeText', rows: 3, group: 'intro' }),
    defineField({ name: 'introBody', title: 'Body Text (right)', type: 'localeText', rows: 4, group: 'intro' }),

    // ── Services ──────────────────────────────────────────────────────────────
    defineField({ name: 'servicesBgImage', title: 'Services Section Background', type: 'image',
      group: 'services', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })],
    }),

    // ── Stats ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'stats', title: 'Stats', type: 'array', group: 'stats',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'number', title: 'Value (Text)', type: 'string', description: 'e.g. "500M+"' }),
          defineField({ name: 'label', title: 'Label', type: 'localeString' }),
        ],
        preview: { select: { title: 'number', subtitle: 'label.en' } },
      }],
    }),

    // ── CTA ───────────────────────────────────────────────────────────────────
    defineField({ name: 'ctaText', title: 'CTA Body Text', type: 'localeText', rows: 2, group: 'cta' }),
    defineField({ name: 'ctaLinkLabel', title: 'CTA Link Label', type: 'localeString', group: 'cta',
      description: 'e.g. "Connect."',
    }),
    defineField({ name: 'ctaBgImage', title: 'CTA Background Image', type: 'image',
      group: 'cta', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })],
    }),

    // ── SEO ───────────────────────────────────────────────────────────────────
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2, group: 'seo' }),
    defineField({ name: 'ogImage', title: 'OG / Share Image', type: 'image', group: 'seo' }),
  ],
  preview: { prepare: () => ({ title: 'Home Page' }) },
});
