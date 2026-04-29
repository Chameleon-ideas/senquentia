import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes/index';

const singletons = new Set([
  'siteSettings',
  'homePage',
  'aboutPage',
  'blogPage',
  'contactPage',
]);

export default defineConfig({
  name: 'senquentia',
  title: 'Senquentia CMS',

  projectId: 'egq490jl',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Site Settings').id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

            S.divider(),

            S.listItem().title('Home Page').id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem().title('Ethos').id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem().title('Journal').id('blogPage')
              .child(S.document().schemaType('blogPage').documentId('blogPage')),
            S.listItem().title('Connect').id('contactPage')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),

            S.divider(),

            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('blogPost').title('Journal Posts'),
            S.documentTypeListItem('teamMember').title('Team Members'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },
});
