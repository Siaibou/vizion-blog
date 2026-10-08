// Tout ce que j'apprends en dehors des cours de la licence.
// Pour publier un nouveau contenu : ajoute une ligne dans « contenus » du groupe concerné.

const bandit = Array.from({ length: 10 }, (_, n) => ({
  titre: `Niveau ${n} → ${n + 1}`,
  href: `/cybersecurite/bandit-${n}`,
}));

export const themes = [
  {
    id: 'cybersecurite',
    nom: 'Cybersécurité',
    description: "Mon journal d'apprentissage de la sécurité offensive et défensive, de mes récapitulatifs de cours aux wargames.",
    groupes: [
      {
        titre: 'Récapitulatifs Vizion',
        contenus: [
          { titre: 'Vizion 1 — Réseaux : OSI, TCP/UDP, intermédiaires', href: '/cybersecurite/vizion-1-reseaux' },
        ],
      },
      { titre: 'OverTheWire — Bandit', contenus: bandit },
      { titre: 'TryHackMe', contenus: [] },
    ],
  },
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

export function bilanAutodidacte() {
  const contenus = themes.flatMap((t) => t.groupes.flatMap((g) => g.contenus));
  return { themes: themes.length, contenus: contenus.length };
}
