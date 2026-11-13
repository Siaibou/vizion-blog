// Tout ce que j'apprends en dehors des cours de la licence.
// Pour publier un nouveau contenu : ajoute une ligne dans « contenus » du groupe concerné.

// Menu « NLP & Inclusive finance ».
export const themes = [
  {
    id: 'finance',
    nom: 'Finance',
    description: "Mon parcours d'apprentissage de la finance, et en particulier de l'inclusion financière.",
    groupes: [
      {
        titre: 'Parcours',
        contenus: [
          { titre: 'Finance : le parcours vers l\'inclusion financière', href: '/cours/finance-00-parcours.html' },
        ],
      },
    ],
  },
  {
    id: 'linguistique',
    nom: 'Linguistique',
    description: 'Mes notes de linguistique, en lien avec le traitement automatique des langues (NLP).',
    groupes: [],
  },
  {
    id: 'projets-personnels',
    nom: 'Projets personnels',
    description: 'Mes projets de programmation, et ce que chacun m\'a appris.',
    groupes: [
      {
        titre: 'password-checker',
        contenus: [
          { titre: 'Python — Erreurs faites pendant le projet password-checker', href: '/informatique/python-erreurs-password-checker' },
        ],
      },
    ],
  },
  {
    id: 'intelligence-artificielle',
    nom: 'Intelligence artificielle',
    description: "Machine learning, LLM et sécurité de l'IA : la destination de mon parcours.",
    groupes: [],
  },
];

// Menu « Personnel ».
export const themesPersonnel = [
  {
    id: 'outils',
    nom: 'Outils du développeur',
    description: "Les outils que j'utilise au quotidien pour coder, versionner et publier.",
    groupes: [
      {
        titre: 'Git et GitHub',
        contenus: [{ titre: 'Fiche des commandes & concepts essentiels', href: '/informatique/git-essentiels' }],
      },
    ],
  },
  {
    id: 'spiritualite',
    nom: 'Spiritualité',
    description: 'Mes lectures et réflexions sur les traditions spirituelles.',
    groupes: [
      {
        titre: 'Traditions',
        contenus: [{ titre: 'Siaibou en onze traditions', href: '/cours/siaibou-en-onze-traditions-1.html' }],
      },
    ],
  },
];

export function bilanAutodidacte() {
  const tous = [...themes, ...themesPersonnel];
  const contenus = tous.flatMap((t) => t.groupes.flatMap((g) => g.contenus));
  return { themes: tous.length, contenus: contenus.length };
}
