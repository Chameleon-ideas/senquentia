import { defineField } from 'sanity';

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'identity', title: 'Identity' },
    { name: 'contact', title: 'Contact & Social' },
    { name: 'features', title: 'Features' },
  ],
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string', group: 'identity' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', group: 'identity' }),
    defineField({ name: 'defaultSeoDescription', title: 'Default SEO Description',
      type: 'text', rows: 2, group: 'identity',
    }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', group: 'identity',
      options: { hotspot: false },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string' })],
    }),
    defineField({ name: 'favicon', title: 'Favicon', type: 'image', group: 'identity' }),

    defineField({ name: 'email', title: 'Email', type: 'string', group: 'contact' }),
    defineField({ name: 'address', title: 'Address', type: 'text', rows: 2, group: 'contact' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url', group: 'contact' }),

    defineField({ name: 'enableFR', title: 'Enable French Toggle', type: 'boolean',
      group: 'features', initialValue: false,
      description: 'Show EN/FR language toggle in nav.',
    }),
  ],
  preview: {
    select: { title: 'siteName' },
  },
};
