import type { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Senquentia Content')
    .items([
      // Site Settings
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      // Pages
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
      S.listItem()
        .title('Services Page')
        .id('servicesPage')
        .child(
          S.document()
            .schemaType('servicesPage')
            .documentId('servicesPage')
        ),
      S.listItem()
        .title('Ethos Page')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      S.listItem()
        .title('Journal Page')
        .id('blogPage')
        .child(
          S.document()
            .schemaType('blogPage')
            .documentId('blogPage')
        ),
      S.listItem()
        .title('Contact Page')
        .id('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      S.divider(),
      // Global Sections
      S.listItem()
        .title('Footer')
        .id('footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer')
        ),
      S.divider(),
      // Collections
      ...S.documentTypeListItems().filter(
        (listItem) =>
          ![
            'siteSettings',
            'homePage',
            'servicesPage',
            'aboutPage',
            'blogPage',
            'contactPage',
            'footer',
            'faqPage',
            'portfolioPage',
            'testimonialsPage',
            'localeString',
            'localeText',
            'localeBlock',
            'media.tag', // If using media library plugin
          ].includes(listItem.getId() || '')
      ),
    ]);
