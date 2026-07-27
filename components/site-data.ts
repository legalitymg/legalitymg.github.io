export const practiceAreas = [
  {
    title: "Accompagnement juridique & judiciaire",
    short: "Conseil permanent, assistance devant les juridictions, médiation et arbitrage.",
    text: "Un accompagnement continu pour prévenir les difficultés, défendre vos intérêts et conduire les procédures adaptées.",
    items: ["Conseil juridique permanent", "Assistance devant toutes juridictions", "Médiation et arbitrage", "Rédaction d’actes et procédures"],
  },
  {
    title: "Recouvrement de créances",
    short: "Solutions amiables et judiciaires pour sécuriser et accélérer vos recouvrements.",
    text: "Une stratégie graduée, de la négociation à l’exécution, pour préserver la relation commerciale et obtenir le règlement.",
    items: ["Recouvrement amiable et judiciaire", "Mise en demeure", "Exécution des décisions de justice", "Négociation d’échéanciers"],
  },
  {
    title: "Fiscalité",
    short: "Conseil fiscal, optimisation et assistance lors des contrôles et redressements.",
    text: "Une lecture précise des enjeux fiscaux afin de sécuriser vos décisions et défendre votre position auprès des administrations.",
    items: ["Conseil fiscal et optimisation", "Assistance en cas de contrôle fiscal", "Contestation des redressements"],
  },
  {
    title: "Droit des affaires",
    short: "Création, évolution et gouvernance de l’entreprise.",
    text: "Un appui juridique à chaque étape de la vie de l’entreprise, de sa constitution à ses opérations stratégiques.",
    items: ["Création, modification et cession d’entreprise", "Gouvernance et secrétariat juridique", "Assemblées générales"],
  },
  {
    title: "Droit du travail",
    short: "Relations de travail, procédures disciplinaires et gestion des conflits sociaux.",
    text: "Des solutions opérationnelles pour les employeurs et les salariés, en conseil comme en gestion des différends.",
    items: ["Contrats et règlement intérieur", "Procédures disciplinaires", "Licenciement et conflits sociaux", "Audit RH et conseil"],
  },
  {
    title: "Investisseurs étrangers",
    short: "Implantation, autorisations et sécurisation des investissements à Madagascar.",
    text: "Un accompagnement local pour structurer votre implantation et comprendre l’environnement réglementaire malgache.",
    items: ["Création de filiales", "Accompagnement des investissements", "Autorisations administratives", "Veille réglementaire"],
  },
  {
    title: "Rédaction & sécurisation juridique",
    short: "Des actes clairs et adaptés pour encadrer durablement vos relations.",
    text: "La rédaction, l’analyse et la négociation de documents juridiques conçus pour réduire les risques.",
    items: ["Contrats commerciaux et de travail", "Baux, CGV et protocoles d’accord", "Partenariats et actes sous seing privé"],
  },
  {
    title: "Immobilier",
    short: "Titres fonciers, transactions, baux et litiges immobiliers.",
    text: "Une vérification attentive des droits et documents pour sécuriser vos opérations foncières et immobilières.",
    items: ["Vérification des titres fonciers", "Transactions et contrats de vente", "Baux et litiges fonciers"],
  },
  {
    title: "Conformité (Compliance)",
    short: "Mise en conformité, protection des données et prévention des risques.",
    text: "Des dispositifs juridiques concrets pour renforcer la gouvernance, l’intégrité et la maîtrise des risques.",
    items: ["Audit juridique et mise en conformité", "Protection des données personnelles", "Prévention des risques et lutte contre la corruption"],
  },
  {
    title: "Formation professionnelle",
    short: "Des formations juridiques pratiques adaptées aux réalités de votre organisation.",
    text: "Des sessions ciblées pour transformer les exigences juridiques en réflexes professionnels durables.",
    items: ["Droit du travail, sociétés et contrats", "Marchés publics et gouvernance", "Techniques de recouvrement", "Conformité juridique"],
  },
  {
    title: "Accompagnement administratif",
    short: "Formalités, licences, autorisations et relations avec les administrations.",
    text: "Un suivi méthodique de vos démarches pour faciliter leur traitement et sécuriser vos documents.",
    items: ["Obtention de licences et autorisations", "Formalités administratives", "Relations avec les administrations", "Régularisation documentaire"],
  },
];

export const articles = [
  {
    slug: "preparer-premier-rendez-vous",
    category: "Conseils pratiques",
    date: "12 juillet 2026",
    readTime: "5 min",
    title: "Bien préparer son premier rendez-vous avec une avocate",
    excerpt: "Les informations et documents utiles pour rendre ce premier échange plus clair et plus efficace.",
    tone: "sage",
  },
  {
    slug: "contrat-points-de-vigilance",
    category: "Contrats",
    date: "28 juin 2026",
    readTime: "6 min",
    title: "Avant de signer : les points d’un contrat à ne pas négliger",
    excerpt: "Objet, durée, obligations, sortie du contrat : une grille de lecture simple avant de vous engager.",
    tone: "sand",
  },
  {
    slug: "mediation-ou-procedure",
    category: "Résolution des différends",
    date: "9 juin 2026",
    readTime: "7 min",
    title: "Médiation ou procédure : comment orienter sa décision ?",
    excerpt: "Deux voies possibles, des enjeux différents et une stratégie à choisir selon votre situation.",
    tone: "rose",
  },
  {
    slug: "chronologie-dossier",
    category: "Méthode",
    date: "21 mai 2026",
    readTime: "4 min",
    title: "Pourquoi établir la chronologie de votre dossier ?",
    excerpt: "Une méthode simple pour mieux présenter les faits et identifier les documents essentiels.",
    tone: "blue",
  },
];

export type Article = (typeof articles)[number];
