import { localeString, localeText, localeBlock } from './localeString';
import { siteSettings } from './siteSettings';
import { homePage } from './homePage';
import { aboutPage } from './aboutPage';
import { blogPage } from './blogPage';
import { contactPage } from './contactPage';
import { service } from './service';
import { blogPost } from './blogPost';
import { teamMember } from './teamMember';

export const schemaTypes = [
  // Primitive helpers
  localeString,
  localeText,
  localeBlock,
  // Singletons
  siteSettings,
  homePage,
  aboutPage,
  blogPage,
  contactPage,
  // Collections
  service,
  blogPost,
  teamMember,
];
