import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'egq490jl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk9pPpLfulj4mVAS0mqu7dssJtWJWTEXqkvWNMRrw5RnHIIj5Fg3ofb1o9HsnTAJjtLuFAoGRzQvrrtEWtKGtS8QWprID513VZ2Th7ZFIwujvKHOCqd593Z4aa7jRmGfNbzApPeE3IiXp0dBaHENZXl3mpNYZzcpzWPfREykbF8j8HQUvfpS',
  useCdn: false,
});

async function seedDigitalTransformation() {
  const serviceId = 'U06jYyLpJ4meIlUofH8chV';
  
  const doc = {
    _type: 'service',
    _id: serviceId,
    title: {
      en: 'Digital & Organizational Transformation',
      fr: 'Transformation numérique et organisationnelle',
    },
    perspectiveText: {
      en: 'Successful transformation requires both strategic clarity and disciplined execution. We work alongside leadership teams to structure transformation initiatives, guide program delivery, and ensure organizations remain aligned as change unfolds.',
      fr: 'La réussite d’une transformation repose à la fois sur une clarté stratégique et une exécution disciplinée. Nous travaillons aux côtés des équipes de direction pour structurer les initiatives de transformation, orienter la mise en œuvre des programmes et veiller à ce que les organisations restent alignées tout au long du changement.',
    },
    perspectiveText2: {
      en: 'Organizations that approach transformation as a purely technological initiative often underestimate the leadership, governance, and organizational alignment required to sustain meaningful change — a challenge that becomes even more pronounced as organizations integrate AI-enabled capabilities into their operations. Artificial intelligence presents significant opportunities to enhance decision-making, streamline operations, and create new sources of value. Realizing this potential, however, requires more than the adoption of new tools; it demands alignment between business priorities, data, governance, and organizational readiness.',
      fr: 'Les organisations qui abordent la transformation comme une initiative purement technologique sous-estiment souvent l’importance du leadership, de la gouvernance et de l’alignement organisationnel nécessaires à la pérennité du changement — un défi qui s’accentue à mesure qu’elles intègrent des capacités fondées sur l’intelligence artificielle. L’intelligence artificielle offre des opportunités significatives pour améliorer la prise de décision, optimiser les opérations et créer de nouvelles sources de valeur. En réaliser pleinement le potentiel exige toutefois bien plus que l’adoption de nouveaux outils ; cela requiert un alignement entre les priorités d’affaires, les données, la gouvernance et la maturité organisationnelle.',
    },
    quoteText: {
      en: 'Process, technology, and culture lead to meaningful and lasting change. With expertise in ERP and Human Capital Management solutions, and experience supporting the adoption of emerging technologies including artificial intelligence, we partner with leadership teams to guide complex transformations.',
      fr: 'Les processus, la technologie et la culture sont les leviers d’un changement durable et porteur de sens. Forts d’une expertise en solutions ERP et en gestion du capital humain, ainsi que d’une expérience dans l’adoption de technologies émergentes, dont l’intelligence artificielle, nous accompagnons les équipes de direction dans la conduite de transformations complexes.',
    },
    approachSections: [
      {
        title: { en: 'Transformation Strategy', fr: 'Stratégie de transformation' },
        body: { 
          en: 'We work with executive teams to define transformation objectives, establish governance structures, and structure implementation roadmaps that provide clarity and direction across complex initiatives.',
          fr: 'Nous travaillons avec les équipes dirigeantes afin de définir les objectifs de transformation, mettre en place des structures de gouvernance et élaborer des feuilles de route claires et structurées pour des initiatives complexes.'
        }
      },
      {
        title: { en: 'Program Leadership', fr: 'Direction de programme' },
        body: { 
          en: 'We provide experienced program leadership for ERP and Human Capital Management transformations, helping organizations navigate critical implementation phases while maintaining alignment with strategic priorities.',
          fr: 'Nous apportons un leadership expérimenté dans la conduite de programmes ERP et de transformation du capital humain, en accompagnant les organisations dans les phases critiques de mise en œuvre tout en assurant l’alignement avec les priorités stratégiques.'
        }
      },
      {
        title: { en: 'Organizational Adoption', fr: 'Adoption organisationnelle' },
        body: { 
          en: 'We support leadership teams in aligning processes, culture, and governance to ensure transformation initiatives translate into lasting organizational capability.',
          fr: 'Nous accompagnons les équipes de direction dans l’alignement des processus, de la culture et de la gouvernance afin de traduire les initiatives de transformation en capacités organisationnelles durables.'
        }
      }
    ],
    industriesEngaged: [
      { label: { en: 'Launching Transformation', fr: 'Lancement de transformation' }, description: { en: 'Large-scale ERP or HCM transformation programs', fr: 'Programmes de transformation ERP ou HCM à grande échelle' } },
      { label: { en: 'Technology Selection', fr: 'Sélection technologique' }, description: { en: 'Evaluating enterprise platforms, including AI-enabled solutions', fr: 'Évaluation de plateformes d’entreprise, incluant des solutions intégrant l’intelligence artificielle' } },
      { label: { en: 'AI Integration', fr: 'Intégration de l’IA' }, description: { en: 'Defining the role of artificial intelligence within broader transformation initiatives', fr: 'Définition du rôle de l’intelligence artificielle dans des initiatives de transformation plus larges' } },
      { label: { en: 'Governance Alignment', fr: 'Alignement de la gouvernance' }, description: { en: 'Establishing governance and leadership alignment for major initiatives', fr: 'Mise en place de structures de gouvernance et alignement du leadership pour des initiatives majeures' } },
      { label: { en: 'Program Leadership', fr: 'Leadership de programme' }, description: { en: 'Strengthening leadership during critical delivery phases', fr: 'Renforcement du leadership lors des phases critiques de livraison' } },
      { label: { en: 'Global Change Alignment', fr: 'Alignement global du changement' }, description: { en: 'Aligning process, technology, and organizational change across global teams', fr: 'Alignement des processus, de la technologie et de la transformation organisationnelle à l’échelle internationale' } },
      { label: { en: 'Sustainable Impact', fr: 'Impact durable' }, description: { en: 'Ensuring transformation programs deliver lasting operational value', fr: 'Assurer que les programmes de transformation génèrent une valeur opérationnelle durable' } }
    ],
    closingText: {
      en: 'Digital and organizational transformations are defining moments for many organizations. Our role is to bring clarity, structure, and experienced leadership to these initiatives — helping organizations navigate complexity, align stakeholders, and deliver outcomes that create lasting impact.',
      fr: 'Les transformations numériques et organisationnelles constituent des moments déterminants pour de nombreuses organisations. Notre rôle est d’apporter clarté, structure et leadership expérimenté à ces initiatives — en aidant les organisations à naviguer dans la complexité, à aligner les parties prenantes et à produire des résultats porteurs d’un impact durable.',
    }
  };

  await client.createOrReplace(doc);
  console.log('Seeded Digital & Organizational Transformation');
}

seedDigitalTransformation();
