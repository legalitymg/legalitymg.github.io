import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AccountingFooter, AccountingHeader } from "@/components/accounting-site-chrome";
import {
  accountingServicePages,
  getAccountingServicePage,
} from "@/components/accounting-service-data";
import { ArrowIcon } from "@/components/icons";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://legality.mg"
).replace(/\/$/, "");

const whatsappUrl =
  "https://wa.me/261348934958?text=Bonjour%2C%20je%20souhaite%20%C3%A9changer%20au%20sujet%20de%20vos%20services%20de%20comptabilit%C3%A9%20et%20fiscalit%C3%A9.";

export const dynamicParams = false;

export function generateStaticParams() {
  return accountingServicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getAccountingServicePage(slug);
  if (!page) return { title: "Services de comptabilité à Madagascar" };

  const canonical = `/comptabilite/${page.slug}/`;

  return {
    title: { absolute: page.metaTitle },
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical,
      languages: { "fr-MG": canonical },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "fr_MG",
      url: canonical,
      siteName: "Legality Madagascar Firm",
      title: page.metaTitle,
      description: page.description,
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.description,
    },
  };
}

export default async function AccountingServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getAccountingServicePage(slug);
  if (!page) notFound();

  const pageUrl = `${siteUrl}/comptabilite/${page.slug}/`;
  const relatedPages = accountingServicePages.filter((item) => item.slug !== page.slug);
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.metaTitle,
      description: page.description,
      inLanguage: "fr-MG",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${pageUrl}#service` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: page.title,
      serviceType: page.shortTitle,
      description: page.description,
      url: pageUrl,
      areaServed: { "@type": "Country", name: "Madagascar" },
      provider: {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/comptabilite/#service`,
        name: "Legality Madagascar Firm — Comptabilité & Fiscalité",
        url: `${siteUrl}/comptabilite/`,
        telephone: "+261348934958",
        email: "compta@legality.mg",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Comptabilité & fiscalité", item: `${siteUrl}/comptabilite/` },
        { "@type": "ListItem", position: 3, name: page.shortTitle, item: pageUrl },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <div className="accounting-site accounting-detail-site">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AccountingHeader />

      <main>
        <section className="accounting-detail-hero">
          <div className="accounting-shell">
            <nav className="accounting-breadcrumb" aria-label="Fil d’Ariane">
              <Link href="/">Accueil</Link><span>/</span>
              <Link href="/comptabilite/">Comptabilité & fiscalité</Link><span>/</span>
              <strong>{page.shortTitle}</strong>
            </nav>
            <div className="accounting-detail-hero-grid">
              <div>
                <p className="accounting-kicker"><span /> {page.eyebrow}</p>
                <h1>{page.title}</h1>
                <p className="accounting-detail-intro">{page.intro}</p>
                <div className="accounting-actions">
                  <Link className="accounting-button accounting-button-primary" href="/comptabilite/#contact">
                    Demander un premier échange <ArrowIcon />
                  </Link>
                  <a className="accounting-text-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                    Écrire sur WhatsApp
                  </a>
                </div>
              </div>
              <aside className="accounting-detail-summary" aria-label="Repères du service">
                <span>Accompagnement à Madagascar</span>
                <strong>{page.shortTitle}</strong>
                <p>Un périmètre défini selon votre activité, vos priorités et les informations disponibles.</p>
                <dl>
                  <div><dt>Zone</dt><dd>Madagascar</dd></div>
                  <div><dt>Échanges</dt><dd>Français</dd></div>
                  <div><dt>Contact</dt><dd>+261 34 89 349 58</dd></div>
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="accounting-detail-highlights">
          <div className="accounting-shell">
            {page.highlights.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="accounting-detail-content">
          <div className="accounting-shell accounting-detail-prose-grid">
            <aside>
              <p className="accounting-kicker"><span /> Le service en détail</p>
              <p>Des explications claires pour comprendre le périmètre avant notre premier échange.</p>
            </aside>
            <div className="accounting-detail-prose">
              {page.sections.map((section) => (
                <article key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="accounting-detail-process">
          <div className="accounting-shell">
            <div className="accounting-section-heading">
              <p className="accounting-kicker light"><span /> Une méthode lisible</p>
              <h2>Quatre étapes pour organiser l’accompagnement.</h2>
              <p>Le déroulement exact est adapté à votre situation et confirmé avec vous au démarrage.</p>
            </div>
            <ol>
              {page.steps.map((step, index) => (
                <li key={step.title}>
                  <span>0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="accounting-detail-faq">
          <div className="accounting-shell accounting-faq-grid">
            <div className="accounting-faq-heading">
              <p className="accounting-kicker"><span /> Questions fréquentes</p>
              <h2>Avant de nous contacter.</h2>
              <p>Chaque accompagnement est précisé après un premier échange sur votre activité.</p>
            </div>
            <div className="accounting-faq-list">
              {page.faq.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary><span>0{index + 1}</span>{item.question}<i aria-hidden="true" /></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="accounting-detail-related">
          <div className="accounting-shell">
            <div className="accounting-section-heading">
              <p className="accounting-kicker"><span /> Services complémentaires</p>
              <h2>Découvrez aussi nos autres accompagnements.</h2>
              <p>Les différents services peuvent être combinés dans un suivi adapté à votre organisation.</p>
            </div>
            <div className="accounting-detail-related-grid">
              {relatedPages.map((item) => (
                <Link key={item.slug} href={`/comptabilite/${item.slug}/`}>
                  <span>Legality Madagascar Firm</span>
                  <h3>{item.shortTitle}</h3>
                  <p>{item.description}</p>
                  <strong>Découvrir <ArrowIcon /></strong>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="accounting-detail-cta">
          <div className="accounting-shell">
            <div>
              <p className="accounting-kicker light"><span /> Premier contact</p>
              <h2>Présentez-nous simplement votre activité et votre besoin.</h2>
            </div>
            <div>
              <p>Nous vous répondrons avec les premières informations utiles pour définir la suite.</p>
              <Link className="accounting-button accounting-button-light" href="/comptabilite/#contact">
                Contacter le pôle comptabilité <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <AccountingFooter />
      <a className="accounting-mobile-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        Échanger sur WhatsApp <span>↗</span>
      </a>
    </div>
  );
}
