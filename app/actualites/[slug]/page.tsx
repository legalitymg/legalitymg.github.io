import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import { articles } from "@/components/site-data";
import { Footer, Header } from "@/components/site-shell";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://legality.mg"
).replace(/\/$/, "");

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: "Publication" };

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/actualites/${article.slug}/` },
    openGraph: {
      type: "article",
      locale: "fr_MG",
      url: `/actualites/${article.slug}/`,
      title: article.title,
      description: article.excerpt,
      publishedTime: article.dateIso,
      authors: ["Legality Madagascar Firm"],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.dateIso,
    dateModified: article.dateIso,
    inLanguage: "fr-MG",
    mainEntityOfPage: `${siteUrl}/actualites/${article.slug}/`,
    author: {
      "@type": "Organization",
      name: "Legality Madagascar Firm",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Legality Madagascar Firm",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.svg`,
      },
    },
  };

  return (
    <>
      <Header />
      <main>
        <article className="article-page">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <header className="article-header">
            <div className="shell article-header-inner">
              <Link className="back-link" href="/actualites">← Conseils & actualités</Link>
              <div className="article-meta">
                <span>{article.category}</span><b>•</b><span>{article.date}</span><b>•</b><span>{article.readTime}</span>
              </div>
              <h1>{article.title}</h1>
              <p>{article.excerpt}</p>
            </div>
          </header>
          <div className="shell article-body-grid">
            <aside>
              <span>À retenir</span>
              <p>Chaque situation est différente. Demandez un avis adapté avant d’agir ou de laisser passer un délai.</p>
            </aside>
            <div className="article-body prose">
              <p className="lead">
                Face à une question juridique, l’objectif n’est pas de tout savoir
                immédiatement : il est d’identifier les faits, les documents et la
                décision que vous devez prendre.
              </p>
              <h2>Commencer par les faits essentiels</h2>
              <p>
                Notez les événements dans leur ordre, avec les dates connues et les
                personnes concernées. Distinguez les faits vérifiables de vos
                impressions. Cette première chronologie aide à repérer les zones
                d’incertitude et les éventuelles échéances.
              </p>
              <h2>Rassembler sans surcharger</h2>
              <p>
                Regroupez les contrats, courriers, décisions, échanges et justificatifs
                directement liés à la question. Conservez les originaux. Un dossier
                classé par date permet de consacrer le rendez-vous à l’analyse plutôt
                qu’à la recherche d’informations.
              </p>
              <h2>Formuler votre objectif</h2>
              <p>
                Souhaitez-vous comprendre vos droits, sécuriser un projet, négocier,
                répondre à un courrier ou engager une procédure ? L’objectif peut
                évoluer, mais le formuler permet d’évaluer les options de façon plus concrète.
              </p>
              <div className="article-callout">
                <h3>Un doute sur votre situation ?</h3>
                <p>Présentez les éléments principaux au cabinet pour savoir quelle consultation choisir.</p>
                <Link className="button button-primary" href="/consultation">Demander une consultation <ArrowIcon /></Link>
              </div>
              <p className="article-disclaimer">
                Cette publication fournit une information générale. Elle ne constitue
                pas un avis juridique et doit être adaptée au droit applicable et aux
                circonstances de votre dossier.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
