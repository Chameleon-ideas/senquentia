import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'egq490jl',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk9pPpLfulj4mVAS0mqu7dssJtWJWTEXqkvWNMRrw5RnHIIj5Fg3ofb1o9HsnTAJjtLuFAoGRzQvrrtEWtKGtS8QWprID513VZ2Th7ZFIwujvKHOCqd593Z4aa7jRmGfNbzApPeE3IiXp0dBaHENZXl3mpNYZzcpzWPfREykbF8j8HQUvfpS',
  useCdn: false,
});

async function seedService() {
  const serviceId = '7TCRnZ4LLn8YxzAGOZwV4O';
  
  const doc = {
    _type: 'service',
    _id: serviceId,
    title: {
      en: 'Leadership Development & Executive Coaching',
      fr: 'Développement du leadership et accompagnement des dirigeants',
    },
    perspectiveText: {
      en: 'Leaders engage us when they are navigating moments such as stepping into new executive roles, leading organizations through transformation, preparing leadership teams for growth or change, strengthening leadership alignment, or managing complex organizational and cultural dynamics.',
      fr: 'Les dirigeants font appel à nous lorsqu’ils traversent des moments tels que la prise de nouvelles fonctions exécutives, la conduite de transformations, la préparation des équipes de direction à la croissance ou au changement, le renforcement de l’alignement du leadership ou la gestion de dynamiques organisationnelles et culturelles complexes.',
    },
    perspectiveText2: {
      en: 'In addition to our work with organizations, we support individual leaders seeking a confidential space to reflect, navigate complexity, and strengthen their leadership approach. These engagements are tailored to the unique context of each leader and often focus on periods of transition, increased responsibility, or complex organizational dynamics.',
      fr: 'En complément de notre travail auprès des organisations, nous accompagnons des dirigeants à titre individuel, en leur offrant un espace confidentiel pour prendre du recul, naviguer la complexité et renforcer leur approche du leadership. Ces accompagnements sont adaptés au contexte propre à chaque dirigeant et portent souvent sur des périodes de transition, de prise de responsabilités accrues ou de dynamiques organisationnelles complexes.',
    },
    quoteText: {
      en: 'Leadership effectiveness shapes an organization’s ability to navigate change and sustain performance. We work with senior leaders to strengthen leadership capability and provide confidential advisory support as they guide organizations through complex environments.',
      fr: 'L’efficacité du leadership conditionne la capacité d’une organisation à naviguer le changement et à maintenir sa performance. Nous travaillons avec des dirigeants expérimentés afin de renforcer leurs capacités de leadership et de leur offrir un accompagnement confidentiel, alors qu’ils guident leurs organisations dans des environnements complexes.',
    },
    approachLead: {
      en: 'Our work focuses on helping leaders strengthen their capacity to lead with clarity, perspective, and confidence. Through structured dialogue and practical insight, we support leaders in developing the judgment, self-awareness, and leadership presence required to guide organizations through complex environments.',
      fr: 'Nous accompagnons les dirigeants dans le renforcement de leur capacité à diriger avec clarté, discernement et assurance. À travers un dialogue structuré et des apports concrets, nous les aidons à développer le jugement, la conscience de soi et la présence de leadership nécessaires pour évoluer dans des environnements complexes.',
    },
    closingText: {
      en: 'Leadership development is ultimately about helping leaders navigate complexity with confidence while strengthening the organizations they lead.',
      fr: 'Le développement du leadership consiste avant tout à aider les dirigeants à naviguer la complexité avec confiance, tout en renforçant les organisations qu’ils dirigent.',
    }
  };

  await client.createOrReplace(doc);
  console.log('Seeded Leadership Development & Executive Coaching');
}

seedService();
