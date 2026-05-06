import { defineType, defineField } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Connect Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'form', title: 'Form Content' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'heroBgImage', title: 'Background Image', type: 'image',
      group: 'hero', options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt text', type: 'localeString' })],
    }),
    defineField({ name: 'leadText', title: 'Lead Text', type: 'localeString', group: 'form',
      description: 'e.g. "Our work begins in conversation."',
    }),
    defineField({ name: 'disclaimer', title: 'Form Disclaimer', type: 'localeString', group: 'form',
      description: 'Small text below the form (e.g. "We treat all inquiries with discretion.")',
    }),
    defineField({ name: 'email', title: 'Contact Email', type: 'string', group: 'form',
      description: 'Displayed below the form.',
    }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'localeString', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'localeText', rows: 2, group: 'seo' }),
  ],
  preview: {
    prepare: function prepare() {
      return { title: 'Contact  Page' };
    },
  },
});
