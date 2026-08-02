import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import { practiceAreas } from "@/components/site-data";
import { Footer, Header, PageHero } from "@/components/site-shell";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://legality.mg"
).replace(/\/$/, "");

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);
  if (!area) return { title: "Expertise juridique" };

  return {
    title: { absolute: `${area.seoTitle} | Legality Madagascar Firm` },
    description: area.metaDescription,
    alternates: { canonical: `/expertises/${area.slug}/` },
    openGraph: {
      type: "website",
      locale: "fr_MG",
      url: `/expertises/${area.slug}/`,
      title: area.seoTitle,
      description: area.metaDescription,
    },
  };
}

export default async function ExpertiseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((item) => item.slug === slug);
  if (!area) notFound();

  const pageUrl = `${siteUrl}/expertises/${area.slug}/`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: area.title,
      serviceType: area.title,
      description: area.metaDescription,
      url: pageUrl,
      areaServed: { "@type": "Country", name: "Madagascar" },
      provider: {
        "@type": "LegalService",
        "@id": `${siteUrl}/#cabinet-juridique`,
        name: "Legality Madagascar Firm",
        url: siteUrl,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Expertises",
          item: `${siteUrl}/expertises/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: area.title,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <PageHero
          eyebrow="Expertise juridique à Madagascar"
          title={area.seoTitle}
          intro={area.intro}
        />

        <section className="content-section">
          <div className="shell two-col">
            <div className="section-heading">
              <p className="eyebrow"><span /> Quand nous consulter</p>
              <h2>Identifier rapidement les enjeux de votre situation.</h2>
            </div>
            <div className="prose">
              <p>{area.text}</p>
              <ul>
                {area.situations.map((situation) => (
                  <li key={situation}>{situation}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="shell area-grid" style={{ marginTop: "54px" }}>
            <article className="area-card">
              <span>01</span>
              <h2>L’accompagnement proposé</h2>
              <p>Le périmètre exact est défini après l’examen de votre situation et des pièces disponibles.</p>
              <ul>
                {area.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article className="area-card">
              <span>02</span>
              <h2>Préparer le premier échange</h2>
              <p>Ces éléments permettent d’orienter l’analyse initiale sans transmettre inutilement des données sensibles.</p>
              <ul>
                {area.documents.map((document) => <li key={document}>{document}</li>)}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section alt">
          <div className="shell two-col">
            <div className="section-heading">
              <p className="eyebrow"><span /> Première étape</p>
              <h2>Présentez brièvement votre besoin au cabinet.</h2>
            </div>
            <div className="prose">
              <p>
                Indiquez l’objet de votre demande, les principales dates et l’éventuelle
                urgence. Le cabinet vous précisera la consultation adaptée et les
                documents à préparer.
              </p>
              <Link className="button button-primary" href="/consultation">
                Demander une consultation <ArrowIcon />
              </Link>
              <p className="article-disclaimer">
                Les informations de cette page sont générales et ne constituent pas
                un avis juridique adapté à une situation particulière.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
