export type AccountingServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  keywords: string[];
  highlights: Array<{ title: string; text: string }>;
  sections: Array<{ title: string; paragraphs: string[] }>;
  steps: Array<{ title: string; text: string }>;
  faq: Array<{ question: string; answer: string }>;
};

export const accountingServicePages: AccountingServicePage[] = [
  {
    slug: "declarations-fiscales-sociales",
    title: "Déclarations fiscales et sociales à Madagascar",
    shortTitle: "Déclarations fiscales & sociales",
    metaTitle: "Services fiscaux à Madagascar | Déclarations sociales – Legality",
    description:
      "Accompagnement pour la préparation et le suivi des déclarations CNAPS, OSTIE, IRSA et TVA à Madagascar, avec un calendrier clair et des échanges structurés.",
    eyebrow: "Services fiscaux à Madagascar",
    intro:
      "Un accompagnement structuré pour organiser les informations utiles, suivre les échéances convenues et préparer les déclarations fiscales et sociales applicables à votre activité.",
    keywords: [
      "déclarations fiscales Madagascar",
      "services fiscaux à Madagascar",
      "déclaration CNAPS Madagascar",
      "déclaration OSTIE Madagascar",
      "déclaration IRSA Madagascar",
      "déclaration TVA Madagascar",
      "ressources humaines Madagascar",
    ],
    highlights: [
      { title: "CNAPS & OSTIE", text: "Organisation du suivi des obligations sociales convenues selon la situation de l’entreprise." },
      { title: "IRSA & TVA", text: "Préparation et suivi des éléments nécessaires aux déclarations fiscales concernées." },
      { title: "Calendrier lisible", text: "Des échéances identifiées et un rythme d’échange adapté au fonctionnement de l’activité." },
    ],
    sections: [
      {
        title: "Fiscalité à Madagascar : un suivi coordonné",
        paragraphs: [
          "Les obligations d’une entreprise ne se résument pas à remplir un formulaire. Elles demandent des informations cohérentes, des pièces disponibles et un calendrier compris par les personnes concernées. L’accompagnement commence donc par une lecture de votre activité et des déclarations réellement applicables.",
          "Legality Madagascar Firm vous aide à structurer le suivi de la CNAPS, de l’OSTIE, de l’IRSA et de la TVA dans le périmètre défini ensemble. Les besoins liés à l’administration courante des ressources humaines à Madagascar peuvent également être intégrés au suivi, lorsque cela correspond à votre organisation.",
        ],
      },
      {
        title: "Des informations préparées avec méthode",
        paragraphs: [
          "Chaque période de déclaration repose sur des éléments à rassembler et à vérifier. Une organisation régulière permet de limiter les recherches de dernière minute et de mieux repérer les informations manquantes avant l’échéance.",
          "Le service peut être ponctuel ou intégré à un accompagnement comptable régulier. Le calendrier, les responsabilités et le canal d’échange sont clarifiés au démarrage afin que vous sachiez quoi transmettre et à quel moment.",
        ],
      },
    ],
    steps: [
      { title: "Identifier", text: "Clarifier votre activité, votre organisation et les obligations à suivre." },
      { title: "Planifier", text: "Définir les informations nécessaires, le calendrier et les responsabilités." },
      { title: "Préparer", text: "Organiser et contrôler les éléments utiles aux déclarations concernées." },
      { title: "Suivre", text: "Conserver une vision claire des actions réalisées et des prochaines échéances." },
    ],
    faq: [
      {
        question: "Les déclarations CNAPS, OSTIE, IRSA et TVA sont-elles toutes prises en charge ?",
        answer:
          "Elles font partie des services proposés. Le périmètre exact est confirmé après l’étude de votre activité et des obligations qui vous concernent réellement.",
      },
      {
        question: "Peut-on mettre en place un suivi mensuel ?",
        answer:
          "Oui. Les déclarations peuvent être intégrées à un suivi comptable régulier avec un calendrier et un mode de transmission définis ensemble.",
      },
      {
        question: "Faut-il envoyer des documents avant le premier échange ?",
        answer:
          "Non. Présentez d’abord brièvement votre activité et votre besoin. Une liste adaptée des informations nécessaires vous sera ensuite communiquée.",
      },
    ],
  },
  {
    slug: "tenue-suivi-comptable",
    title: "Tenue et suivi comptable à Madagascar",
    shortTitle: "Tenue & suivi comptable",
    metaTitle: "Tenue et suivi comptable à Madagascar | Legality",
    description:
      "Service de tenue comptable, suivi régulier et clôture mensuelle à Madagascar pour garder des opérations organisées et une vision plus claire de l’activité.",
    eyebrow: "Comptabilité régulière",
    intro:
      "Une comptabilité tenue à jour, un rythme de suivi clair et une clôture mensuelle structurée pour comprendre plus facilement la situation de votre activité.",
    keywords: [
      "tenue comptable Madagascar",
      "suivi comptable Madagascar",
      "service de comptabilité à Madagascar",
      "clôture comptable mensuelle Madagascar",
      "cabinet comptable à Madagascar",
    ],
    highlights: [
      { title: "Opérations à jour", text: "Une organisation régulière des pièces et des opérations comptables de l’activité." },
      { title: "Suivi défini", text: "Un rythme d’échange convenu selon le volume, les priorités et le fonctionnement de l’entreprise." },
      { title: "Clôture mensuelle", text: "Un point périodique pour contrôler les écritures et mieux lire la situation du mois." },
    ],
    sections: [
      {
        title: "Un service de comptabilité à Madagascar adapté à votre rythme",
        paragraphs: [
          "Une tenue comptable régulière facilite le suivi des opérations et la préparation des prochaines échéances. Elle permet aussi de retrouver plus rapidement une information et de limiter l’accumulation de pièces non traitées.",
          "L’accompagnement est organisé selon votre activité : mode de transmission des documents, rythme de traitement, points de contrôle et fréquence des échanges. Cette méthode rend le suivi plus prévisible pour votre équipe et pour la personne qui pilote l’entreprise.",
        ],
      },
      {
        title: "Une clôture mensuelle pour disposer de repères plus clairs",
        paragraphs: [
          "La clôture mensuelle crée un moment de vérification. Elle aide à repérer les éléments manquants, à contrôler la cohérence des écritures et à disposer d’une vision périodique mieux organisée.",
          "Selon le périmètre retenu, le suivi peut être complété par des explications sur les principaux éléments observés. L’objectif est que la comptabilité ne soit pas seulement tenue, mais qu’elle devienne plus compréhensible et plus utile à vos décisions.",
        ],
      },
    ],
    steps: [
      { title: "Collecter", text: "Définir un mode simple et régulier de transmission des pièces." },
      { title: "Enregistrer", text: "Organiser les opérations pour maintenir une comptabilité structurée." },
      { title: "Contrôler", text: "Vérifier les éléments de la période et identifier les informations manquantes." },
      { title: "Expliquer", text: "Partager des repères utiles et préparer les prochaines actions." },
    ],
    faq: [
      {
        question: "À quelle fréquence faut-il transmettre les pièces comptables ?",
        answer:
          "La fréquence est définie selon votre volume d’activité et le niveau de suivi attendu. Un rythme régulier est généralement privilégié pour éviter l’accumulation.",
      },
      {
        question: "La clôture comptable mensuelle est-elle obligatoire dans tous les accompagnements ?",
        answer:
          "Non. Elle peut être intégrée lorsque vous souhaitez un contrôle périodique et une vision mensuelle plus structurée. Le périmètre est défini avec vous.",
      },
      {
        question: "Pouvez-vous travailler avec notre organisation actuelle ?",
        answer:
          "Le premier échange sert précisément à comprendre vos outils, vos habitudes et les personnes impliquées afin de proposer un fonctionnement adapté.",
      },
    ],
  },
  {
    slug: "redressement-analyse-financiere",
    title: "Redressement comptable et analyse financière à Madagascar",
    shortTitle: "Redressement & analyse financière",
    metaTitle: "Redressement comptable et analyse financière à Madagascar | Legality",
    description:
      "Reprise d’une comptabilité en retard ou incomplète et analyse financière à Madagascar pour retrouver des informations organisées et des repères utiles.",
    eyebrow: "Reprise & aide à la décision",
    intro:
      "Une démarche progressive pour remettre en ordre une comptabilité incomplète ou en retard, puis transformer les informations disponibles en repères plus utiles à la gestion.",
    keywords: [
      "redressement comptable Madagascar",
      "analyse financière Madagascar",
      "reprise comptabilité en retard Madagascar",
      "conseil comptable Madagascar",
      "services de comptabilité Madagascar",
    ],
    highlights: [
      { title: "Diagnostic initial", text: "Une première lecture de la situation, des périodes concernées et des éléments disponibles." },
      { title: "Remise en ordre", text: "Une reprise organisée par étapes pour corriger, compléter et structurer les informations." },
      { title: "Repères financiers", text: "Une lecture plus claire des données disponibles pour mieux suivre l’activité." },
    ],
    sections: [
      {
        title: "Reprendre une comptabilité sans perdre de vue les priorités",
        paragraphs: [
          "Une comptabilité peut prendre du retard à la suite d’un changement d’organisation, d’un manque de pièces ou d’une période de forte activité. Le redressement comptable commence par un état des lieux : périodes à reprendre, documents disponibles, informations manquantes et ordre de traitement.",
          "La remise à jour est ensuite organisée de manière progressive. Cette approche permet de distinguer les corrections prioritaires, les vérifications nécessaires et les points qui demandent une décision ou un complément d’information de votre part.",
        ],
      },
      {
        title: "Faire parler les informations financières disponibles",
        paragraphs: [
          "Une fois les données mieux organisées, l’analyse financière aide à dégager des repères sur l’évolution de l’activité. Elle ne remplace pas la décision du dirigeant, mais elle fournit une base plus claire pour poser les bonnes questions.",
          "L’analyse est adaptée aux informations disponibles et à l’objectif défini ensemble : comprendre une évolution, préparer un échange interne ou disposer d’une lecture plus structurée de la situation financière.",
        ],
      },
    ],
    steps: [
      { title: "Évaluer", text: "Identifier les périodes, les écarts apparents et les documents disponibles." },
      { title: "Prioriser", text: "Établir un ordre de reprise réaliste selon les besoins et les échéances." },
      { title: "Corriger", text: "Reprendre les informations, documenter les corrections et signaler les éléments manquants." },
      { title: "Analyser", text: "Présenter des repères compréhensibles à partir des données consolidées." },
    ],
    faq: [
      {
        question: "Pouvez-vous reprendre plusieurs mois de retard ?",
        answer:
          "Oui. Un diagnostic initial permet d’évaluer les périodes concernées, les documents disponibles et la meilleure manière d’organiser la reprise.",
      },
      {
        question: "Que se passe-t-il si certaines pièces sont manquantes ?",
        answer:
          "Les éléments manquants sont identifiés au cours de la reprise. L’équipe vous indique alors les compléments nécessaires et les points qui doivent être clarifiés.",
      },
      {
        question: "L’analyse financière peut-elle être demandée séparément ?",
        answer:
          "Le besoin peut être étudié séparément. La portée de l’analyse dépend toutefois de la qualité et de la disponibilité des informations financières transmises.",
      },
    ],
  },
];

export function getAccountingServicePage(slug: string) {
  return accountingServicePages.find((page) => page.slug === slug);
}
