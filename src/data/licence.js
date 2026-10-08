// Les cours de la licence, semestre par semestre.
// Pour publier un nouveau contenu : ajoute une ligne dans « contenus » du cours concerné.
// Les cours interactifs (fichiers HTML) vont dans public/cours/ ; les articles dans src/pages/.

const COURS_CLAUDE = 'Cours interactif · rédigé avec Claude';

const leCalcul = {
  titre: 'Le calcul, depuis le tout début',
  href: '/cours/le-calcul.html',
  meta: 'Remise à niveau commune aux deux cours de maths · ' + COURS_CLAUDE,
};

export const semestres = [
  {
    titre: 'L1 · Semestre 1',
    annee: '2026-2027',
    groupes: [
      {
        titre: 'Informatique',
        cours: [
          {
            id: 'programmation-fonctionnelle',
            nom: 'Programmation fonctionnelle',
            description:
              "L'objectif de ce cours est l'apprentissage de la programmation. Le choix du paradigme fonctionnel dès le premier semestre de la première année a pour but de donner de bonnes habitudes de programmation, notamment de faire réfléchir au « quoi » (l'objectif de l'algorithme) et pas seulement au « comment » (les étapes de l'algorithme) lors de la conception de programme. Ce cours utilise le langage Racket.",
            contenus: [
              { titre: 'Chapitre 1 : penser et écrire en Racket', href: '/cours/pf1-chapitre-1-cours.html', meta: 'Cours · rédigé avec Claude' },
              { titre: 'Chapitre 1 : exercices et DST blanc', href: '/cours/pf1-chapitre-1-exercices.html', meta: 'Exercices corrigés · rédigés avec Claude' },
              { titre: 'Chapitre 2 : les listes', href: '/cours/pf1-chapitre-2-cours.html', meta: 'Cours · rédigé avec Claude' },
            ],
          },
          {
            id: 'architecture-des-ordinateurs',
            nom: 'Architecture des ordinateurs',
            description:
              "L'objectif de ce cours est de connaître les principes fondamentaux du fonctionnement d'un ordinateur et les relations entre matériel et logiciel. Le cours introduit la représentation et le codage de l'information, l'organisation d'un processeur, la mémoire, les instructions machine et les mécanismes d'entrée-sortie. Il permet aux étudiant·es de comprendre comment les programmes sont exécutés par la machine et comment les caractéristiques de l'architecture matérielle peuvent influencer la conception et les performances des programmes. Ce cours sera aussi l'occasion d'illustrer une des activités principales d'un programmeur : assembler des composants de base pour produire des composants spécifiques, mais ici en manipulant des composants « matériels » et pas « logiciels ».",
            contenus: [
              { titre: 'Le binaire, depuis le tout début', href: '/cours/le-binaire.html', meta: COURS_CLAUDE },
              { titre: 'Les portes logiques, depuis le tout début', href: '/cours/les-portes-logiques.html', meta: COURS_CLAUDE },
            ],
          },
          {
            id: 'methodologie-de-la-programmation',
            nom: 'Méthodologie de la programmation',
            description:
              "L'objectif de ce cours est d'apprendre à apprendre à programmer et d'acquérir les bases d'une pratique autonome de la programmation : conception de programmes, implémentation, compilation le cas échéant, exécution, test. Dans un contexte où la production de code peut être largement assistée, l'acquisition d'une méthodologie permettant de concevoir, comprendre, vérifier et corriger un programme devient d'autant plus essentielle. Il s'agit d'acquérir les bases nécessaires à l'apprentissage de la programmation et donc à la poursuite de la licence. Le cours aborde principalement la programmation impérative en s'appuyant sur Python et C.",
            contenus: [],
          },
          {
            id: 'pratique-des-machines',
            nom: 'Pratique des machines',
            description:
              "L'objectif de ce cours est de se familiariser avec l'environnement GNU/Linux, la ligne de commande et apprendre à connaître d'un peu plus près les machines qui vont être utilisées tout au long de la formation.",
            contenus: [
              { titre: 'Jour 1 : flux et redirections', href: '/cours/pdm-jour-1-flux-et-redirections.html', meta: 'Notes de cours · compléments rédigés avec Claude' },
              { titre: 'Jour 2 : hiérarchie de fichiers et archives', href: '/cours/pdm-jour-2-hierarchie-et-archives.html', meta: 'Notes de cours · compléments rédigés avec Claude' },
            ],
          },
          {
            id: 'gestion-d-identite-en-ligne',
            nom: "Gestion d'identité en ligne",
            description:
              "L'objectif de ce cours est de réfléchir à notre rapport aux géants du web (Big Tech), et d'apprendre les bonnes pratiques à adopter pour faire attention à son image en ligne. En pratique, il s'agira d'apprendre à développer, mettre en ligne, et maintenir une page web personnelle simple qui pourra être alimentée par les différents projets académiques et personnels de chacun·e.",
            contenus: [],
          },
        ],
      },
      {
        titre: 'Mathématiques',
        note: 'spécialisation externe',
        cours: [
          {
            id: 'fonctions-elementaires',
            nom: 'Fonctions élémentaires',
            description:
              "Ce cours donne une première introduction calculatoire et pratique à l'analyse, via l'étude de fonctions à valeurs réelles, le calcul d'intégrales et les opérations sur les complexes. On gardera une approche concrète à ces sujets, par exemple en donnant une interprétation géométrique des éléments étudiés.",
            contenus: [
              { titre: 'Géométrie et trigonométrie, depuis le tout début', href: '/cours/geometrie-et-trigonometrie.html', meta: 'Remise à niveau · ' + COURS_CLAUDE },
              leCalcul,
            ],
          },
          {
            id: 'suites-numeriques',
            nom: 'Suites numériques',
            description:
              "Ce cours a pour objet l'étude à la fois pratique et théorique des suites numériques. Après avoir introduit des propriétés essentielles de la relation d'ordre usuelle sur les réels, on démontre des résultats théoriques sur les suites (comme l'existence de limites sous certaines conditions). Concrètement, certaines familles de suites (notamment récurrentes) sont étudiées dans le détail.",
            contenus: [
              { titre: 'La logique, depuis le tout début', href: '/cours/la-logique.html', meta: 'Chapitre 0 · ' + COURS_CLAUDE },
              { titre: 'Majorants et bornes, depuis le tout début', href: '/cours/majorants-et-bornes.html', meta: 'Chapitre 1 · ' + COURS_CLAUDE },
              leCalcul,
            ],
          },
        ],
      },
      {
        titre: 'Langue',
        note: 'EC libre',
        cours: [
          {
            id: 'langue-chinoise',
            nom: 'Langue chinoise',
            description: 'Niveau A1.2.',
            contenus: [
              { titre: 'Lire le TOP 5', href: '/cours/top-5.html', meta: 'Chapitre 0 · ' + COURS_CLAUDE },
            ],
          },
        ],
      },
    ],
  },
];

// Nombre de cours, et nombre de contenus publiés (un contenu présent dans deux cours compte une fois).
export function bilanLicence() {
  const cours = semestres.flatMap((s) => s.groupes.flatMap((g) => g.cours));
  const pages = new Set(cours.flatMap((c) => c.contenus.map((x) => x.href)));
  return { cours: cours.length, contenus: pages.size };
}
