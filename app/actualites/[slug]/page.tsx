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
    articleBody: [
      article.lead,
      ...article.sections.flatMap((section) => [
        section.title,
        ...section.paragraphs,
        ...(section.bullets ?? []),
      ]),
    ].join("\n"),
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
              <p>{article.takeaway}</p>
              <Link className="text-link" href="/expertises">
                Voir les expertises <ArrowIcon />
              </Link>
            </aside>
            <div className="article-body prose">
              <p className="lead">{article.lead}</p>
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets?.length ? (
                    <ul>
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : null}
                </section>
              ))}
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
