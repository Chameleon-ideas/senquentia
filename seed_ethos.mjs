import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'egq490jl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk9pPpLfulj4mVAS0mqu7dssJtWJWTEXqkvWNMRrw5RnHIIj5Fg3ofb1o9HsnTAJjtLuFAoGRzQvrrtEWtKGtS8QWprID513VZ2Th7ZFIwujvKHOCqd593Z4aa7jRmGfNbzApPeE3IiXp0dBaHENZXl3mpNYZzcpzWPfREykbF8j8HQUvfpS',
  useCdn: false,
});

async function seedEthos() {
  const docId = 'ethosPage-singleton';
  
  const doc = {
    _type: 'ethosPage',
    _id: docId,
    heroLabel: {
      en: 'ETHOS',
      fr: 'ÉTHOS',
    },
    principlesHeadline: {
      en: 'The principles and perspectives that shape our work.',
      fr: 'Les principes et les perspectives qui façonnent notre travail.',
    },
    etymologyDesc: {
      en: 'Tracing the roots of our philosophy, values, and purpose as a firm.\n\nSententia [sɛnˈtɛn.ti.a]: a way of thinking\nEloquentia [eː.ɫɔˈkʷɛn.ti.a]: the art of fluency',
      fr: 'À l’origine de notre philosophie, de nos valeurs et de notre raison d’être.\n\nSententia [sɛnˈtɛn.ti.a] : une manière de pensée\nEloquentia [eː.ɫɔˈkʷɛn.ti.a] : l’art de l’expression',
    },
    philosophyBody: {
      en: 'At Senquentia, we challenge conventional thinking and provide clarity in complex environments. We combine strategic insight with practical execution to help leaders make informed decisions and drive meaningful change.',
      fr: 'Chez Senquentia, nous remettons en question les idées reçues et apportons de la clarté dans des environnements complexes. Nous conjuguons perspective stratégique et mise en œuvre concrète afin d’aider les dirigeants à prendre des décisions éclairées et à mener des transformations porteuses de sens.',
    },
    philosophyQuote: {
      en: 'Experience brings perspective, but integrity is what earns trust.',
      fr: 'L’expérience apporte la perspective, mais c’est l’intégrité qui inspire la confiance.',
    },
    valuesDesc: {
      en: 'Our values have shaped every step of our journey and continue to define our perspective.',
      fr: 'Nos valeurs ont guidé chaque étape de notre parcours et continuent de façonner notre perspective et notre approche.',
    },
    values: [
      {
        name: { en: 'Trust', fr: 'Confiance' },
        body: { en: 'Built through consistency, integrity, and transparency.', fr: 'Fondée sur la constance, l’intégrité et la transparence.' }
      },
      {
        name: { en: 'Excellence', fr: 'Excellence' },
        body: { en: 'Driven by insight, expertise, and disciplined execution.', fr: 'Portée par la rigueur, l’expertise et la discipline d’exécution.' }
      },
      {
        name: { en: 'Growth', fr: 'Croissance' },
        body: { en: 'Focused on strengthening capabilities and unlocking potential.', fr: 'Axée sur le développement des capacités et le plein déploiement du potentiel.' }
      },
      {
        name: { en: 'Partnership', fr: 'Partenariat' },
        body: { en: 'Defined by shared commitment to meaningful, lasting outcomes.', fr: 'Ancré dans un engagement commun à générer des résultats durables et significatifs.' }
      }
    ],
    founderName: 'Veronica Eleonora Palumbo',
    founderTitle: {
      en: 'Executive Advisor',
      fr: 'Conseillère auprès des dirigeants',
    },
    founderBio: {
      en: 'Veronica Eleonora Palumbo is an executive advisor fluent in both strategy and delivery. With 20 years of experience leading ERP programs and expertise in Human Capital Management solutions, she is a trusted voice in digital and organizational transformation. She has led several multinational engagements and directed global delivery teams, honing her expertise in large-scale implementations.\n\nAs a strategic advisor, Veronica has partnered with executive teams to navigate critical business initiatives, mergers and acquisitions, and culture shifts, leveraging her skills in organizational development, succession planning, and change management.',
      fr: 'Veronica Eleonora Palumbo est une conseillère auprès des dirigeants, alliant réflexion stratégique et mise en œuvre. Forte de 20 années d’expérience dans la direction de programmes ERP et d’une expertise en solutions de gestion du capital humain, elle est une voix reconnue en transformation numérique et organisationnelle. Elle a dirigé plusieurs mandats multinationaux et piloté des équipes de livraison à l’échelle mondiale, développant une expertise approfondie des déploiements à grande échelle.\n\nÀ titre de conseillère stratégique, Veronica accompagne les équipes de direction dans leurs initiatives critiques, les fusions et acquisitions, ainsi que les transformations culturelles, en s’appuyant sur son expertise en développement organisationnel, planification de la relève et gestion du changement.',
    }
  };

  await client.createOrReplace(doc);
  console.log('Seeded Ethos Page');
}

seedEthos();
