import type { Metadata } from "next";
import Link from "next/link";
import { AccountingContactForm } from "@/components/accounting-contact-form";
import { ArrowIcon } from "@/components/icons";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://legality.mg"
).replace(/\/$/, "");

const whatsappUrl =
  "https://wa.me/261348934958?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20au%20sujet%20de%20vos%20services%20de%20comptabilit%C3%A9%20et%20fiscalit%C3%A9.";

export const metadata: Metadata = {
  title: {
    absolute: "Cabinet comptable à Madagascar | Legality Madagascar Firm",
  },
  description:
    "Services de comptabilité et fiscalité à Madagascar : déclarations CNAPS, OSTIE, IRSA et TVA, tenue et suivi comptable, clôture mensuelle, redressement et analyse financière.",
  keywords: [
    "service de comptabilité à Madagascar",
    "services fiscaux à Madagascar",
    "cabinet comptable à Madagascar",
    "fiscalité à Madagascar",
    "ressources humaines à Madagascar",
    "déclaration CNAPS Madagascar",
    "déclaration OSTIE Madagascar",
    "déclaration IRSA Madagascar",
    "déclaration TVA Madagascar",
    "tenue comptable Madagascar",
    "analyse financière Madagascar",
  ],
  alternates: { canonical: "/comptabilite/" },
  openGraph: {
    type: "website",
    locale: "fr_MG",
    url: "/comptabilite/",
    siteName: "Legality Madagascar Firm",
    title: "Comptabilité & fiscalité à Madagascar | Legality Madagascar Firm",
    description:
      "Un accompagnement clair et régulier pour votre comptabilité, vos obligations fiscales et sociales et vos décisions financières.",
  },
  twitter: {
    card: "summary",
    title: "Comptabilité & fiscalité | Legality Madagascar Firm",
    description: "Services comptables, fiscaux et sociaux à Madagascar.",
  },
};

const services = [
  {
    number: "01",
    title: "Déclarations fiscales et sociales",
    text: "Préparation et suivi des obligations CNAPS, OSTIE, IRSA, TVA et du volet administratif lié aux ressources humaines.",
    icon: "document",
  },
  {
    number: "02",
    title: "Tenue de la comptabilité",
    text: "Organisation et enregistrement régulier des opérations pour maintenir une comptabilité structurée et à jour.",
    icon: "ledger",
  },
  {
    number: "03",
    title: "Suivi comptable régulier",
    text: "Un suivi défini selon le rythme de votre activité pour mieux anticiper les actions et échéances à venir.",
    icon: "calendar",
  },
  {
    number: "04",
    title: "Clôture comptable mensuelle",
    text: "Contrôle périodique des écritures et préparation d’une vision claire de la situation comptable du mois.",
    icon: "check",
  },
  {
    number: "05",
    title: "Accompagnement et conseils",
    text: "Des explications accessibles et des conseils adaptés à vos opérations, à votre organisation et à vos priorités.",
    icon: "compass",
  },
  {
    number: "06",
    title: "Redressement comptable",
    text: "Reprise, vérification et remise en ordre d’une comptabilité incomplète, en retard ou nécessitant des corrections.",
    icon: "refresh",
  },
  {
    number: "07",
    title: "Analyse financière",
    text: "Lecture structurée des informations financières pour éclairer le suivi de l’activité et les décisions de gestion.",
    icon: "chart",
  },
];

const steps = [
  ["01", "Comprendre", "Nous échangeons sur votre activité, votre organisation et vos échéances prioritaires."],
  ["02", "Organiser", "Nous définissons les documents, le calendrier et le mode de suivi adaptés à votre fonctionnement."],
  ["03", "Suivre", "La comptabilité et les obligations convenues sont traitées avec un rythme de suivi clair."],
  ["04", "Éclairer", "Vous recevez des explications utiles pour comprendre la situation et préparer les prochaines décisions."],
];

const faq = [
  {
    question: "Quels services peuvent être suivis chaque mois ?",
    answer:
      "La tenue comptable, le suivi des opérations, les déclarations concernées et la clôture mensuelle peuvent être organisés dans un accompagnement régulier. Le périmètre est défini avec vous selon votre activité.",
  },
  {
    question: "Pouvez-vous reprendre une comptabilité en retard ?",
    answer:
      "Oui. Le redressement comptable permet d’examiner la situation existante, d’identifier les éléments manquants et d’organiser une remise à jour progressive.",
  },
  {
    question: "Prenez-vous en charge CNAPS, OSTIE, IRSA et TVA ?",
    answer:
      "Ces déclarations font partie des services proposés. Les obligations réellement applicables et le calendrier de traitement sont confirmés après l’étude de votre situation.",
  },
  {
    question: "Quels documents faut-il préparer ?",
    answer:
      "Après un premier échange, vous recevrez une liste adaptée à votre besoin. N’envoyez pas de documents sensibles dans le formulaire de contact de cette page.",
  },
  {
    question: "Comment demander une première estimation ?",
    answer:
      "Présentez brièvement votre activité et le service recherché par WhatsApp ou au moyen du formulaire. L’équipe pourra ensuite préciser le périmètre et les prochaines étapes.",
  },
];

function AccountingMark() {
  return (
    <span className="accounting-mark" aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      {type === "document" && <><path d="M9 4.5h10l5 5v18H9z" {...common} /><path d="M19 4.5v5h5M13 15h7M13 20h7" {...common} /></>}
      {type === "ledger" && <><rect x="5" y="6" width="22" height="20" rx="2" {...common} /><path d="M11 6v20M16 12h6M16 17h6M16 22h4" {...common} /></>}
      {type === "calendar" && <><rect x="5" y="7" width="22" height="20" rx="2" {...common} /><path d="M10 4v6M22 4v6M5 13h22M10 18h3M17 18h3M10 22h3" {...common} /></>}
      {type === "check" && <><circle cx="16" cy="16" r="11" {...common} /><path d="m11 16 3.2 3.2L21.5 12" {...common} /></>}
      {type === "compass" && <><circle cx="16" cy="16" r="11" {...common} /><path d="m20.5 11.5-2.6 6.4-6.4 2.6 2.6-6.4z" {...common} /></>}
      {type === "refresh" && <><path d="M25 12a10 10 0 0 0-17-3l-2 3M7 12H3V8" {...common} /><path d="M7 20a10 10 0 0 0 17 3l2-3M25 20h4v4" {...common} /></>}
      {type === "chart" && <><path d="M6 26V7M6 26h21" {...common} /><path d="m10 21 5-6 4 3 7-9" {...common} /><circle cx="10" cy="21" r="1" fill="currentColor" /><circle cx="15" cy="15" r="1" fill="currentColor" /><circle cx="19" cy="18" r="1" fill="currentColor" /><circle cx="26" cy="9" r="1" fill="currentColor" /></>}
    </svg>
  );
}

export default function AccountingPage() {
  const accountingSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/comptabilite/#service`,
    name: "Legality Madagascar Firm — Comptabilité & Fiscalité",
    description:
      "Services de comptabilité, fiscalité, déclarations sociales, redressement comptable et analyse financière à Madagascar.",
    url: `${siteUrl}/comptabilite/`,
    telephone: "+261348934958",
    email: "compta@legality.mg",
    areaServed: { "@type": "Country", name: "Madagascar" },
    serviceType: services.map((service) => service.title),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+261348934958",
      email: "compta@legality.mg",
      contactType: "service comptabilité et fiscalité",
      availableLanguage: ["fr"],
    },
  };

  return (
    <div className="accounting-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accountingSchema) }}
      />

      <header className="accounting-header">
        <div className="accounting-shell accounting-header-inner">
          <Link href="/comptabilite/" className="accounting-brand" aria-label="Accueil Comptabilité et fiscalité">
            <AccountingMark />
            <span>
              <strong>Legality Madagascar Firm</strong>
              <small>Comptabilité & fiscalité</small>
            </span>
          </Link>
          <nav aria-label="Navigation Comptabilité et fiscalité">
            <a href="#services">Services</a>
            <a href="#methode">Notre méthode</a>
            <a href="#questions">Questions</a>
            <a href="#contact">Contact</a>
          </nav>
          <Link href="/" className="accounting-legal-link">
            Pôle juridique <span aria-hidden="true">↗</span>
          </Link>
          <details className="accounting-mobile-menu">
            <summary aria-label="Ouvrir le menu"><i /><i /></summary>
            <div>
              <a href="#services">Services</a>
              <a href="#methode">Notre méthode</a>
              <a href="#questions">Questions</a>
              <a href="#contact">Contact</a>
              <Link href="/">Pôle juridique</Link>
            </div>
          </details>
        </div>
      </header>

      <main>
        <section className="accounting-hero">
          <div className="accounting-hero-grid accounting-shell">
            <div className="accounting-hero-copy">
              <p className="accounting-kicker"><span /> Services aux entreprises à Madagascar</p>
              <h1>Vos chiffres à jour.<br /><em>Vos décisions plus claires.</em></h1>
              <p className="accounting-hero-intro">
                Comptabilité, fiscalité et obligations sociales : un accompagnement
                structuré pour suivre votre activité avec plus de clarté et de sérénité.
              </p>
              <div className="accounting-actions">
                <a className="accounting-button accounting-button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Échanger sur WhatsApp <ArrowIcon />
                </a>
                <a className="accounting-text-link" href="#services">Découvrir les services</a>
              </div>
              <div className="accounting-trust" aria-label="Principes d’accompagnement">
                <span>Suivi régulier</span>
                <span>Échéances organisées</span>
                <span>Conseils adaptés</span>
              </div>
            </div>

            <div className="accounting-hero-panel" aria-label="Cycle d’accompagnement comptable">
              <div className="accounting-panel-top">
                <span>Cycle mensuel</span>
                <b>Comptabilité & fiscalité</b>
              </div>
              <div className="accounting-cycle">
                <div><span>01</span><strong>Organiser</strong><small>Pièces & calendrier</small></div>
                <div><span>02</span><strong>Tenir</strong><small>Opérations à jour</small></div>
                <div><span>03</span><strong>Déclarer</strong><small>Fiscal & social</small></div>
                <div><span>04</span><strong>Analyser</strong><small>Repères utiles</small></div>
              </div>
              <div className="accounting-panel-footer">
                <div className="accounting-mini-chart" aria-hidden="true"><i /><i /><i /><i /><i /></div>
                <p><span>Une vision structurée</span><strong>pour piloter l’activité</strong></p>
              </div>
            </div>
          </div>
          <div className="accounting-hero-index" aria-hidden="true">LM · C&F</div>
        </section>

        <section className="accounting-obligations" aria-label="Déclarations accompagnées">
          <div className="accounting-shell">
            <p>Déclarations fiscales & sociales</p>
            <div><span>CNAPS</span><i /> <span>OSTIE</span><i /> <span>IRSA</span><i /> <span>TVA</span></div>
          </div>
        </section>

        <section className="accounting-section accounting-services" id="services">
          <div className="accounting-shell">
            <div className="accounting-section-heading">
              <p className="accounting-kicker"><span /> Nos services</p>
              <h2>Une comptabilité bien tenue,<br />du quotidien jusqu’à l’analyse.</h2>
              <p>
                Chaque mission est définie selon votre organisation et les besoins réels
                de votre activité.
              </p>
            </div>
            <div className="accounting-service-grid">
              {services.map((service) => (
                <article key={service.number} className="accounting-service-card">
                  <div className="accounting-service-icon"><ServiceIcon type={service.icon} /></div>
                  <span>{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
              <article className="accounting-service-card accounting-service-cta">
                <p className="accounting-kicker">Un besoin particulier ?</p>
                <h3>Commençons par clarifier votre situation.</h3>
                <a href="#contact">Nous contacter <ArrowIcon /></a>
              </article>
            </div>
          </div>
        </section>

        <section className="accounting-section accounting-method" id="methode">
          <div className="accounting-shell accounting-method-grid">
            <div className="accounting-method-copy">
              <p className="accounting-kicker light"><span /> Notre méthode</p>
              <h2>Un suivi lisible, pensé autour de votre activité.</h2>
              <p>
                L’objectif n’est pas seulement de traiter des opérations. Il est aussi de
                vous donner des repères clairs pour comprendre ce qui a été fait, ce qui
                arrive et ce qui mérite votre attention.
              </p>
              <a className="accounting-button accounting-button-light" href="#contact">
                Préparer un premier échange <ArrowIcon />
              </a>
            </div>
            <ol className="accounting-steps">
              {steps.map(([number, title, text]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="accounting-section accounting-value">
          <div className="accounting-shell">
            <div className="accounting-value-lead">
              <p className="accounting-kicker"><span /> Pour mieux avancer</p>
              <h2>La comptabilité comme outil de suivi, pas seulement comme obligation.</h2>
            </div>
            <div className="accounting-value-grid">
              <article><span>01</span><h3>Une information plus claire</h3><p>Des éléments organisés et expliqués pour savoir où en est votre activité.</p></article>
              <article><span>02</span><h3>Un rythme défini ensemble</h3><p>Des échanges et échéances structurés selon le fonctionnement convenu.</p></article>
              <article><span>03</span><h3>Des conseils contextualisés</h3><p>Des observations reliées à vos opérations et à vos priorités réelles.</p></article>
            </div>
          </div>
        </section>

        <section className="accounting-section accounting-faq" id="questions">
          <div className="accounting-shell accounting-faq-grid">
            <div className="accounting-faq-heading">
              <p className="accounting-kicker"><span /> Questions fréquentes</p>
              <h2>Quelques réponses avant notre premier échange.</h2>
              <p>Votre besoin est différent ? Écrivez-nous directement sur WhatsApp.</p>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Poser une question <ArrowIcon /></a>
            </div>
            <div className="accounting-faq-list">
              {faq.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary><span>0{index + 1}</span>{item.question}<i aria-hidden="true" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="accounting-contact" id="contact">
          <div className="accounting-shell accounting-contact-grid">
            <div className="accounting-contact-copy">
              <p className="accounting-kicker light"><span /> Premier contact</p>
              <h2>Parlez-nous de votre besoin comptable ou fiscal.</h2>
              <p>
                Choisissez le canal qui vous convient. Pour une réponse plus précise,
                indiquez simplement votre activité et le type d’accompagnement recherché.
              </p>
              <div className="accounting-contact-cards">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <span>WhatsApp</span><strong>+261 34 89 349 58</strong><i>↗</i>
                </a>
                <a href="mailto:compta@legality.mg">
                  <span>E-mail dédié</span><strong>compta@legality.mg</strong><i>↗</i>
                </a>
              </div>
              <small>Services proposés à Madagascar · Échanges en français</small>
            </div>
            <AccountingContactForm />
          </div>
        </section>
      </main>

      <footer className="accounting-footer">
        <div className="accounting-shell accounting-footer-main">
          <Link href="/comptabilite/" className="accounting-brand accounting-brand-light">
            <AccountingMark />
            <span><strong>Legality Madagascar Firm</strong><small>Comptabilité & fiscalité</small></span>
          </Link>
          <p>Des chiffres organisés.<br />Des décisions plus claires.</p>
          <div>
            <a href="#services">Services</a>
            <a href="#methode">Notre méthode</a>
            <a href="#questions">Questions fréquentes</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <Link href="/">Cabinet juridique</Link>
            <Link href="/mentions-legales/">Mentions légales</Link>
            <Link href="/confidentialite/">Confidentialité</Link>
          </div>
        </div>
        <div className="accounting-shell accounting-footer-bottom">
          <span>© 2026 Legality Madagascar Firm. Tous droits réservés.</span>
          <span>Comptabilité · Fiscalité · Gestion</span>
        </div>
      </footer>

      <a className="accounting-mobile-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        Échanger sur WhatsApp <span>↗</span>
      </a>
    </div>
  );
}
