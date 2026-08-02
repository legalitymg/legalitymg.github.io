export type PracticeArea = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  short: string;
  text: string;
  intro: string;
  situations: string[];
  items: string[];
  documents: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "conseil-contentieux-juridique",
    title: "Accompagnement juridique & judiciaire",
    seoTitle: "Conseil et contentieux juridique à Madagascar",
    metaDescription:
      "Conseil juridique, négociation, médiation et accompagnement judiciaire à Antananarivo et à Madagascar pour particuliers et organisations.",
    short: "Conseil permanent, assistance devant les juridictions, médiation et arbitrage.",
    text: "Un accompagnement continu pour prévenir les difficultés, défendre vos intérêts et conduire les procédures adaptées.",
    intro:
      "Une difficulté juridique se traite d’abord par une analyse précise des faits, des pièces disponibles et de l’objectif recherché. Le cabinet vous aide à mesurer les options possibles, à anticiper les risques et à choisir une démarche proportionnée.",
    situations: [
      "Vous avez reçu une mise en demeure, une convocation ou une décision",
      "Un différend persiste malgré plusieurs échanges",
      "Vous souhaitez négocier avant d’engager une procédure",
      "Vous avez besoin d’un suivi juridique régulier",
    ],
    items: [
      "Conseil juridique permanent",
      "Assistance devant les juridictions compétentes",
      "Médiation, négociation et arbitrage",
      "Rédaction d’actes et suivi des procédures",
    ],
    documents: [
      "Contrats, courriers et échanges liés au dossier",
      "Décisions, convocations ou mises en demeure",
      "Chronologie datée des faits",
      "Pièces permettant d’établir votre demande ou votre défense",
    ],
  },
  {
    slug: "recouvrement-creances",
    title: "Recouvrement de créances",
    seoTitle: "Recouvrement de créances à Madagascar",
    metaDescription:
      "Recouvrement amiable et judiciaire de créances à Madagascar : mise en demeure, négociation, procédure et exécution des décisions.",
    short: "Solutions amiables et judiciaires pour sécuriser et accélérer vos recouvrements.",
    text: "Une stratégie graduée, de la négociation à l’exécution, pour préserver la relation commerciale et obtenir le règlement.",
    intro:
      "Le recouvrement efficace commence par la vérification de la créance, des documents qui la prouvent et de la situation du débiteur. Le cabinet construit ensuite une stratégie graduée, en privilégiant une solution amiable lorsqu’elle protège suffisamment vos intérêts.",
    situations: [
      "Une facture ou une reconnaissance de dette reste impayée",
      "Les relances n’obtiennent plus de réponse",
      "Un échéancier doit être négocié et sécurisé",
      "Une décision de justice doit être exécutée",
    ],
    items: [
      "Analyse de la créance et des pièces justificatives",
      "Relance structurée et mise en demeure",
      "Négociation d’un échéancier ou d’un accord",
      "Recouvrement judiciaire et suivi de l’exécution",
    ],
    documents: [
      "Contrat, bon de commande ou reconnaissance de dette",
      "Factures et preuves de livraison ou d’exécution",
      "Relances et réponses déjà échangées",
      "Coordonnées et informations utiles sur le débiteur",
    ],
  },
  {
    slug: "fiscalite",
    title: "Fiscalité",
    seoTitle: "Conseil fiscal et contrôle fiscal à Madagascar",
    metaDescription:
      "Conseil fiscal à Madagascar pour entreprises et professionnels : sécurisation des opérations, contrôle fiscal et contestation des redressements.",
    short: "Conseil fiscal, sécurisation des opérations et assistance lors des contrôles.",
    text: "Une lecture précise des enjeux fiscaux afin de sécuriser vos décisions et défendre votre position auprès des administrations.",
    intro:
      "Les choix juridiques et financiers d’une activité peuvent avoir des conséquences fiscales importantes. Une analyse en amont permet de documenter les opérations, de réduire les incertitudes et de préparer une réponse cohérente en cas de demande de l’administration.",
    situations: [
      "Une opération importante doit être structurée",
      "Vous préparez ou subissez un contrôle fiscal",
      "Une notification ou un redressement doit être analysé",
      "Vos pratiques internes nécessitent une revue de conformité",
    ],
    items: [
      "Analyse et conseil fiscal",
      "Sécurisation fiscale des opérations",
      "Assistance pendant un contrôle fiscal",
      "Analyse et contestation des redressements",
    ],
    documents: [
      "Notifications et correspondances de l’administration",
      "Déclarations et documents comptables concernés",
      "Contrats et justificatifs des opérations examinées",
      "Chronologie des échanges et délais indiqués",
    ],
  },
  {
    slug: "droit-affaires",
    title: "Droit des affaires",
    seoTitle: "Droit des affaires et sociétés à Madagascar",
    metaDescription:
      "Accompagnement en droit des affaires à Madagascar : création et évolution de sociétés, gouvernance, contrats et opérations stratégiques.",
    short: "Création, évolution, contrats et gouvernance de l’entreprise.",
    text: "Un appui juridique à chaque étape de la vie de l’entreprise, de sa constitution à ses opérations stratégiques.",
    intro:
      "La solidité juridique d’une entreprise repose sur des documents cohérents, une gouvernance suivie et des décisions correctement formalisées. Le cabinet accompagne dirigeants, associés et investisseurs dans la structuration et l’évolution de leurs activités à Madagascar.",
    situations: [
      "Vous créez une société ou modifiez sa structure",
      "Les relations entre associés doivent être clarifiées",
      "Une cession, un partenariat ou une opération est envisagé",
      "La documentation sociale doit être régularisée",
    ],
    items: [
      "Création, modification et cession d’entreprise",
      "Gouvernance et secrétariat juridique",
      "Assemblées, décisions et registres sociaux",
      "Contrats commerciaux et partenariats",
    ],
    documents: [
      "Statuts et documents d’immatriculation",
      "Procès-verbaux et registres disponibles",
      "Accords entre associés ou partenaires",
      "Projet d’opération et objectifs des parties",
    ],
  },
  {
    slug: "droit-travail",
    title: "Droit du travail",
    seoTitle: "Droit du travail à Madagascar",
    metaDescription:
      "Conseil en droit du travail à Madagascar : contrats, règlement intérieur, procédures disciplinaires, licenciement et conflits sociaux.",
    short: "Relations de travail, procédures disciplinaires et gestion des conflits sociaux.",
    text: "Des solutions opérationnelles pour les employeurs et les salariés, en conseil comme en gestion des différends.",
    intro:
      "Une relation de travail doit être encadrée par des documents clairs et des procédures cohérentes. Le cabinet intervient en prévention, lors d’une réorganisation ou lorsqu’un différend apparaît entre employeur et salarié.",
    situations: [
      "Un contrat ou un règlement intérieur doit être préparé",
      "Une procédure disciplinaire est envisagée",
      "Une rupture de contrat doit être sécurisée",
      "Un conflit individuel ou collectif doit être traité",
    ],
    items: [
      "Contrats de travail et règlement intérieur",
      "Procédures disciplinaires",
      "Licenciement, rupture et transaction",
      "Audit RH et gestion des conflits sociaux",
    ],
    documents: [
      "Contrat de travail et avenants",
      "Règlement intérieur et politiques applicables",
      "Courriers, avertissements et échanges",
      "Éléments factuels datés relatifs à la situation",
    ],
  },
  {
    slug: "investissement-etranger",
    title: "Investisseurs étrangers",
    seoTitle: "Investir et créer une activité à Madagascar",
    metaDescription:
      "Accompagnement juridique des investisseurs étrangers à Madagascar : implantation, filiale, autorisations, contrats et environnement réglementaire.",
    short: "Implantation, autorisations et sécurisation des investissements à Madagascar.",
    text: "Un accompagnement local pour structurer votre implantation et comprendre l’environnement réglementaire malgache.",
    intro:
      "Un projet d’implantation doit articuler choix de structure, autorisations, contrats et obligations locales. Le cabinet aide les investisseurs et partenaires étrangers à organiser les premières étapes et à identifier les points de vigilance avant engagement.",
    situations: [
      "Vous étudiez une implantation ou une filiale à Madagascar",
      "Un partenariat local doit être structuré",
      "Des autorisations ou formalités sont nécessaires",
      "Un investissement ou un contrat doit être sécurisé",
    ],
    items: [
      "Choix de structure et création de filiale",
      "Accompagnement des investissements",
      "Autorisations et formalités administratives",
      "Contrats, conformité et veille réglementaire",
    ],
    documents: [
      "Présentation du projet et calendrier envisagé",
      "Informations sur les investisseurs et partenaires",
      "Projets de contrats ou lettres d’intention",
      "Autorisations déjà obtenues ou identifiées",
    ],
  },
  {
    slug: "contrats-actes-juridiques",
    title: "Rédaction & sécurisation juridique",
    seoTitle: "Rédaction de contrats et actes à Madagascar",
    metaDescription:
      "Rédaction, analyse et négociation de contrats à Madagascar : accords commerciaux, baux, CGV, protocoles et actes sous seing privé.",
    short: "Des contrats et actes clairs pour encadrer durablement vos relations.",
    text: "La rédaction, l’analyse et la négociation de documents juridiques conçus pour réduire les risques.",
    intro:
      "Un contrat utile doit traduire clairement l’accord, organiser son exécution et prévoir les situations difficiles. Le cabinet rédige, analyse ou négocie vos documents en tenant compte de l’opération réelle et des risques prioritaires.",
    situations: [
      "Un nouveau partenariat doit être formalisé",
      "Un contrat proposé par un tiers doit être relu",
      "Des obligations, délais ou responsabilités sont imprécis",
      "Un modèle de document doit être adapté à votre activité",
    ],
    items: [
      "Contrats commerciaux et de travail",
      "Baux, conditions générales et conventions",
      "Protocoles d’accord et partenariats",
      "Actes sous seing privé et avenants",
    ],
    documents: [
      "Projet de contrat ou modèle existant",
      "Description précise de l’opération",
      "Identité et rôle de chaque partie",
      "Points déjà négociés et risques identifiés",
    ],
  },
  {
    slug: "immobilier-foncier",
    title: "Immobilier",
    seoTitle: "Droit immobilier et foncier à Madagascar",
    metaDescription:
      "Accompagnement en droit immobilier et foncier à Madagascar : titres, vérifications, ventes, baux et gestion des litiges.",
    short: "Titres fonciers, transactions, baux et litiges immobiliers.",
    text: "Une vérification attentive des droits et documents pour sécuriser vos opérations foncières et immobilières.",
    intro:
      "Une opération immobilière exige de vérifier les droits invoqués, la cohérence des documents et les obligations de chaque partie. Le cabinet vous accompagne avant la signature, pendant les formalités et en cas de contestation.",
    situations: [
      "Vous envisagez une vente, un achat ou une location",
      "Un titre ou la situation d’un bien doit être vérifié",
      "Un bail doit être rédigé ou renégocié",
      "Un différend foncier ou immobilier apparaît",
    ],
    items: [
      "Vérification des titres et documents fonciers",
      "Transactions et contrats de vente",
      "Baux et conventions d’occupation",
      "Prévention et traitement des litiges",
    ],
    documents: [
      "Titre, plan et documents relatifs au bien",
      "Projet de vente, bail ou convention",
      "Historique des propriétaires ou occupants",
      "Courriers et éléments liés au différend éventuel",
    ],
  },
  {
    slug: "conformite-compliance",
    title: "Conformité (Compliance)",
    seoTitle: "Conformité juridique et compliance à Madagascar",
    metaDescription:
      "Audit et conformité juridique à Madagascar : gouvernance, données personnelles, procédures internes et prévention des risques.",
    short: "Mise en conformité, protection des données et prévention des risques.",
    text: "Des dispositifs juridiques concrets pour renforcer la gouvernance, l’intégrité et la maîtrise des risques.",
    intro:
      "La conformité transforme les obligations juridiques en règles internes compréhensibles et applicables. Le cabinet aide les organisations à identifier leurs risques, documenter leurs pratiques et mettre en place des mesures adaptées à leur activité.",
    situations: [
      "Vos procédures internes doivent être évaluées",
      "Une politique ou un code de conduite doit être créé",
      "La gestion des données personnelles doit être structurée",
      "Des risques de fraude ou de corruption doivent être prévenus",
    ],
    items: [
      "Audit juridique et plan de mise en conformité",
      "Protection et gouvernance des données",
      "Politiques, procédures et codes internes",
      "Prévention des risques et de la corruption",
    ],
    documents: [
      "Organigramme et description des activités",
      "Politiques et procédures existantes",
      "Contrats et formulaires utilisés",
      "Cartographie ou incidents déjà identifiés",
    ],
  },
  {
    slug: "formation-juridique",
    title: "Formation professionnelle",
    seoTitle: "Formation juridique professionnelle à Madagascar",
    metaDescription:
      "Formations juridiques pratiques à Madagascar pour entreprises et organisations : travail, contrats, sociétés, recouvrement et conformité.",
    short: "Des formations juridiques pratiques adaptées aux réalités de votre organisation.",
    text: "Des sessions ciblées pour transformer les exigences juridiques en réflexes professionnels durables.",
    intro:
      "Une formation juridique est plus efficace lorsqu’elle part des situations réellement rencontrées par les équipes. Le cabinet conçoit des sessions ciblées, avec des exemples pratiques et des outils directement utilisables dans l’organisation.",
    situations: [
      "Les équipes doivent mieux appliquer une procédure",
      "Des erreurs récurrentes exposent l’organisation",
      "Un nouveau cadre ou document interne doit être expliqué",
      "Les responsables ont besoin de repères opérationnels",
    ],
    items: [
      "Droit du travail, sociétés et contrats",
      "Marchés publics et gouvernance",
      "Techniques de recouvrement",
      "Conformité et prévention des risques",
    ],
    documents: [
      "Objectifs pédagogiques et public concerné",
      "Difficultés rencontrées par les équipes",
      "Procédures ou modèles utilisés en interne",
      "Format, calendrier et durée souhaités",
    ],
  },
  {
    slug: "formalites-administratives",
    title: "Accompagnement administratif",
    seoTitle: "Formalités et autorisations à Madagascar",
    metaDescription:
      "Accompagnement des entreprises dans leurs formalités administratives à Madagascar : licences, autorisations et régularisation documentaire.",
    short: "Formalités, licences, autorisations et relations avec les administrations.",
    text: "Un suivi méthodique de vos démarches pour faciliter leur traitement et sécuriser vos documents.",
    intro:
      "Les démarches administratives nécessitent des pièces cohérentes, un calendrier suivi et une bonne compréhension de l’autorité compétente. Le cabinet vous aide à préparer le dossier et à traiter les demandes complémentaires.",
    situations: [
      "Une licence ou une autorisation est nécessaire",
      "Un dossier administratif doit être constitué",
      "Des documents doivent être régularisés",
      "Une demande reste bloquée ou incomplète",
    ],
    items: [
      "Obtention de licences et autorisations",
      "Constitution et suivi des formalités",
      "Relations avec les administrations",
      "Régularisation documentaire",
    ],
    documents: [
      "Liste des formalités ou autorisations visées",
      "Documents d’identité et d’immatriculation",
      "Courriers ou récépissés déjà obtenus",
      "Calendrier du projet et contraintes connues",
    ],
  },
];

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  category: string;
  date: string;
  dateIso: string;
  readTime: string;
  title: string;
  excerpt: string;
  tone: string;
  takeaway: string;
  lead: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "preparer-premier-rendez-vous",
    category: "Conseils pratiques",
    date: "12 juillet 2026",
    dateIso: "2026-07-12",
    readTime: "5 min",
    title: "Bien préparer son premier rendez-vous avec une avocate",
    excerpt: "Les informations et documents utiles pour rendre ce premier échange plus clair et plus efficace.",
    tone: "sage",
    takeaway:
      "Un rendez-vous bien préparé permet de consacrer davantage de temps à l’analyse de votre situation et aux prochaines étapes.",
    lead:
      "Le premier rendez-vous sert à comprendre votre situation, repérer les urgences et définir ce qui doit être vérifié. Quelques préparatifs simples rendent cet échange beaucoup plus utile.",
    sections: [
      {
        title: "Écrire une chronologie courte",
        paragraphs: [
          "Notez les événements importants dans leur ordre, avec les dates connues, les personnes concernées et les démarches déjà entreprises. Distinguez les faits vérifiables de vos impressions ou suppositions.",
          "Cette chronologie n’a pas besoin d’être parfaite. Elle doit surtout permettre de comprendre rapidement ce qui s’est passé et d’identifier les délais qui pourraient nécessiter une attention immédiate.",
        ],
      },
      {
        title: "Rassembler les documents directement utiles",
        paragraphs: [
          "Regroupez les contrats, courriers, décisions, messages, factures ou justificatifs directement liés à la question. Classez-les par date et conservez les originaux.",
          "Évitez d’envoyer spontanément des documents confidentiels par un canal non sécurisé. Le cabinet pourra vous indiquer les pièces nécessaires et la manière appropriée de les transmettre.",
        ],
      },
      {
        title: "Formuler votre objectif",
        paragraphs: [
          "Souhaitez-vous comprendre vos droits, répondre à un courrier, sécuriser un projet, négocier ou envisager une procédure ? Votre objectif peut évoluer, mais le formuler aide à comparer les options de manière concrète.",
        ],
        bullets: [
          "Préparez deux ou trois questions prioritaires",
          "Signalez les échéances ou convocations connues",
          "Indiquez les démarches déjà tentées",
          "Précisez le résultat que vous recherchez",
        ],
      },
    ],
  },
  {
    slug: "contrat-points-de-vigilance",
    category: "Contrats",
    date: "28 juin 2026",
    dateIso: "2026-06-28",
    readTime: "6 min",
    title: "Avant de signer : les points d’un contrat à ne pas négliger",
    excerpt: "Objet, durée, obligations, sortie du contrat : une grille de lecture simple avant de vous engager.",
    tone: "sand",
    takeaway:
      "Un contrat clair doit expliquer qui fait quoi, à quel moment, à quel prix et ce qui se passe si l’accord n’est pas respecté.",
    lead:
      "La lecture d’un contrat ne se limite pas au prix et à la signature. Il faut vérifier que le document correspond réellement à l’accord et qu’il organise aussi les situations difficiles.",
    sections: [
      {
        title: "Identifier précisément les parties et l’objet",
        paragraphs: [
          "Vérifiez l’identité, la qualité et le pouvoir de la personne qui signe. L’objet du contrat doit décrire sans ambiguïté la prestation, le bien ou l’engagement attendu.",
          "Les annexes, devis, cahiers des charges ou calendriers mentionnés doivent être joints et cohérents avec le texte principal.",
        ],
      },
      {
        title: "Comprendre les obligations, le prix et les délais",
        paragraphs: [
          "Repérez les obligations de chaque partie, les conditions de paiement, les étapes de validation et les conséquences d’un retard. Les formulations vagues créent souvent des désaccords au moment de l’exécution.",
        ],
        bullets: [
          "Montants, taxes et modalités de paiement",
          "Délais d’exécution et de réception",
          "Responsabilités et garanties",
          "Confidentialité et propriété des documents ou résultats",
        ],
      },
      {
        title: "Prévoir la fin du contrat et les différends",
        paragraphs: [
          "Examinez la durée, le renouvellement, la résiliation et les obligations qui continuent après la fin de l’accord. Vérifiez également comment les notifications doivent être envoyées et comment un différend sera traité.",
          "Avant de signer, demandez des explications sur toute clause que vous ne comprenez pas. Une correction négociée avant la signature est généralement plus simple qu’un conflit ultérieur.",
        ],
      },
    ],
  },
  {
    slug: "mediation-ou-procedure",
    category: "Résolution des différends",
    date: "9 juin 2026",
    dateIso: "2026-06-09",
    readTime: "7 min",
    title: "Médiation ou procédure : comment orienter sa décision ?",
    excerpt: "Deux voies possibles, des enjeux différents et une stratégie à choisir selon votre situation.",
    tone: "rose",
    takeaway:
      "Le bon choix dépend de l’urgence, des preuves disponibles, de la relation entre les parties et du résultat réellement recherché.",
    lead:
      "Lorsqu’un différend persiste, la médiation et la procédure ne répondent pas toujours au même besoin. L’une recherche un accord construit par les parties ; l’autre demande à une autorité compétente de trancher.",
    sections: [
      {
        title: "Quand une solution négociée peut être utile",
        paragraphs: [
          "La médiation ou une négociation structurée peut convenir lorsque les parties souhaitent garder la maîtrise du résultat, préserver une relation ou construire une solution plus souple qu’une décision imposée.",
          "Cette voie suppose toutefois un minimum de coopération. Un accord doit être rédigé avec précision pour éviter de créer un nouveau désaccord au moment de son exécution.",
        ],
      },
      {
        title: "Quand une procédure devient nécessaire",
        paragraphs: [
          "Une procédure peut être nécessaire lorsqu’une mesure urgente doit être demandée, qu’une partie refuse tout échange, qu’un droit doit être officiellement reconnu ou qu’une décision exécutoire est recherchée.",
          "Les délais, coûts, preuves et risques doivent être appréciés avant d’engager cette voie. L’existence d’une procédure n’empêche pas toujours une solution négociée en cours de dossier.",
        ],
      },
      {
        title: "Comparer les options avec méthode",
        paragraphs: [
          "Avant de décider, clarifiez votre objectif principal et les concessions acceptables. Analysez aussi l’urgence, la qualité des documents, la possibilité d’exécuter le résultat et l’importance de la confidentialité.",
        ],
        bullets: [
          "Quel résultat concret recherchez-vous ?",
          "Existe-t-il une échéance ou un risque immédiat ?",
          "Quelles preuves peuvent être produites ?",
          "La relation avec l’autre partie doit-elle être préservée ?",
        ],
      },
    ],
  },
  {
    slug: "chronologie-dossier",
    category: "Méthode",
    date: "21 mai 2026",
    dateIso: "2026-05-21",
    readTime: "4 min",
    title: "Pourquoi établir la chronologie de votre dossier ?",
    excerpt: "Une méthode simple pour mieux présenter les faits et identifier les documents essentiels.",
    tone: "blue",
    takeaway:
      "Une chronologie relie chaque événement à sa date et à sa preuve ; elle rend les faits plus faciles à vérifier et à expliquer.",
    lead:
      "Dans un dossier complexe, les faits sont souvent connus mais dispersés entre messages, courriers, contrats et souvenirs. Les remettre dans l’ordre révèle les éléments utiles et les informations manquantes.",
    sections: [
      {
        title: "Créer une ligne du temps vérifiable",
        paragraphs: [
          "Commencez par la date la plus ancienne et ajoutez un événement par ligne. Indiquez ce qui s’est passé, les personnes concernées et le document qui permet de le vérifier.",
          "Si une date est incertaine, dites-le clairement au lieu de la deviner. Une chronologie fiable distingue les faits confirmés des éléments encore à vérifier.",
        ],
      },
      {
        title: "Relier chaque événement à une pièce",
        paragraphs: [
          "Attribuez un numéro simple à chaque contrat, courrier, facture, capture ou décision. Reportez ce numéro dans la chronologie afin de retrouver rapidement la pièce correspondante.",
          "Conservez les fichiers dans leur format d’origine lorsque cela est possible et évitez de modifier les messages ou documents qui pourraient servir de preuve.",
        ],
      },
      {
        title: "Faire apparaître les questions importantes",
        paragraphs: [
          "Une fois la chronologie établie, repérez les périodes sans information, les versions contradictoires et les engagements qui n’ont pas été suivis. Ces points guideront les questions à poser et les vérifications à effectuer.",
        ],
        bullets: [
          "Dates des engagements et des paiements",
          "Relances, réponses et absences de réponse",
          "Modifications de l’accord initial",
          "Délais indiqués dans les courriers ou décisions",
        ],
      },
    ],
  },
];
