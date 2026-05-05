import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'egq490jl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk9pPpLfulj4mVAS0mqu7dssJtWJWTEXqkvWNMRrw5RnHIIj5Fg3ofb1o9HsnTAJjtLuFAoGRzQvrrtEWtKGtS8QWprID513VZ2Th7ZFIwujvKHOCqd593Z4aa7jRmGfNbzApPeE3IiXp0dBaHENZXl3mpNYZzcpzWPfREykbF8j8HQUvfpS',
  useCdn: false,
});

async function seedStrategicAdvisory() {
  const serviceId = '7TCRnZ4LLn8YxzAGOZwUu4';
  
  const doc = {
    _type: 'service',
    _id: serviceId,
    title: {
      en: 'Strategic Advisory',
      fr: 'Conseil Stratégique',
    },
    perspectiveText: {
      en: 'Strategic decisions rarely fail because of a lack of ideas. They fail when organizations struggle to align leadership, culture, and execution around a clear direction.',
      fr: 'Les décisions stratégiques échouent rarement par manque d’idées. Elles échouent lorsque les organisations peinent à aligner le leadership, la culture et l’exécution autour d’une direction claire.',
    },
    perspectiveText2: {
      en: 'Effective advisory work brings clarity to complex situations, helping leadership teams assess their options, evaluate organizational readiness, and move forward with confidence. This increasingly includes helping leaders navigate the implications of emerging technologies such as artificial intelligence on strategy, operating models, and organizational readiness.',
      fr: 'Un conseil efficace apporte de la clarté dans des situations complexes, en aidant les équipes de direction à évaluer leurs options, apprécier la maturité organisationnelle et avancer avec confiance. Cela inclut de plus en plus l’accompagnement des dirigeants dans la compréhension des implications des technologies émergentes, telles que l’intelligence artificielle, sur la stratégie, les modèles opérationnels et la préparation organisationnelle.',
    },
    quoteText: {
      en: 'Leadership alignment and strategic clarity shape the decisions that define an organization’s direction. We work with executive teams to evaluate organizational effectiveness, navigate complex decisions, and guide initiatives that shape future direction.',
      fr: 'L’alignement du leadership et la clarté stratégique façonnent les décisions qui orientent une organisation. Nous travaillons avec les équipes de direction pour évaluer l’efficacité organisationnelle, éclairer des décisions complexes et orienter des initiatives qui structurent l’avenir.',
    },
    approachSections: [
      {
        title: { en: 'Organizational Effectiveness', fr: 'Efficacité organisationnelle' },
        body: { 
          en: 'We work with leadership teams to evaluate organizational structures, governance models, and decision-making frameworks to ensure organizations are positioned to execute their strategic priorities effectively.',
          fr: 'Nous accompagnons les équipes de direction dans l’évaluation des structures organisationnelles, des modèles de gouvernance et des cadres décisionnels, afin de s’assurer que l’organisation est en mesure d’exécuter efficacement ses priorités stratégiques.'
        }
      },
      {
        title: { en: 'Culture, Leadership & Change Alignment', fr: 'Culture, leadership et alignement du changement' },
        body: { 
          en: 'Strategy and transformation succeed when leadership teams are aligned around a shared vision, organizational culture supports the direction of change, and people are equipped to adapt. We support leaders in strengthening alignment, defining cultural priorities, and developing leadership capability.',
          fr: 'La stratégie et la transformation réussissent lorsque les équipes de direction sont alignées autour d’une vision commune, que la culture organisationnelle soutient la direction du changement et que les équipes sont en mesure de s’adapter. Nous accompagnons les dirigeants dans le renforcement de cet alignement, la définition des priorités culturelles et le développement des capacités de leadership.'
        }
      },
      {
        title: { en: 'Strategic Decision Support', fr: 'Appui aux décisions stratégiques' },
        body: { 
          en: 'We provide experienced advisory support to leadership teams as they navigate complex strategic decisions, helping organizations evaluate options, assess risks, and move forward with confidence.',
          fr: 'Nous apportons un accompagnement expérimenté aux équipes de direction dans leurs décisions stratégiques complexes, en aidant les organisations à évaluer les options, apprécier les risques et avancer avec confiance.'
        }
      },
      {
        title: { en: 'Transformation & Change Management', fr: 'Transformation et gestion du changement' },
        body: { 
          en: 'We help organizations translate strategy into execution by designing and guiding structured transformation and change initiatives, including stakeholder alignment and adoption planning.',
          fr: 'Nous accompagnons les organisations dans la traduction de la stratégie en exécution, en concevant et en guidant des initiatives structurées de transformation et de changement, y compris l’alignement des parties prenantes et la planification de l’adoption.'
        }
      }
    ],
    industriesEngaged: [
      { label: { en: 'Organizational Effectiveness', fr: 'Efficacité organisationnelle' }, description: { en: 'Evaluating structures and operating models', fr: 'Évaluation des structures et modèles opérationnels' } },
      { label: { en: 'Leadership Alignment', fr: 'Alignement du leadership' }, description: { en: 'Assessing alignment and decision-making frameworks', fr: 'Évaluation de l’alignement et des cadres décisionnels' } },
      { label: { en: 'Transformation Readiness', fr: 'Préparation à la transformation' }, description: { en: 'Preparing for major change initiatives', fr: 'Préparation aux initiatives majeures de changement' } },
      { label: { en: 'M&A and Integration', fr: 'Fusions et acquisitions' }, description: { en: 'Navigating strategic integrations', fr: 'Accompagnement dans les intégrations stratégiques' } },
      { label: { en: 'Adoption & Execution', fr: 'Adoption et exécution' }, description: { en: 'Driving adoption of new strategies and technologies', fr: 'Mise en œuvre et adoption de nouvelles stratégies et technologies' } },
      { label: { en: 'Culture & Leadership Development', fr: 'Culture et leadership' }, description: { en: 'Strengthening capability', fr: 'Renforcement des capacités' } },
      { label: { en: 'Strategic Transitions', fr: 'Transitions stratégiques' }, description: { en: 'Supporting leaders through significant change', fr: 'Accompagnement des dirigeants dans le changement' } },
      { label: { en: 'Emerging Technology Strategy', fr: 'Stratégie technologique' }, description: { en: 'Evaluating AI implications', fr: 'Évaluation des implications de l’IA' } }
    ],
    closingText: {
      en: 'Strategic advisory work is ultimately about helping leadership teams see their organization more clearly. Our role is to bring independent perspective, structured thinking, and practical experience to the decisions that shape an organization’s future.',
      fr: 'Le conseil stratégique consiste avant tout à aider les équipes de direction à mieux comprendre leur organisation. Notre rôle est d’apporter un regard indépendant, une pensée structurée et une expérience concrète aux décisions qui façonnent l’avenir d’une organisation.',
    }
  };

  await client.createOrReplace(doc);
  console.log('Seeded Strategic Advisory');
}

seedStrategicAdvisory();
