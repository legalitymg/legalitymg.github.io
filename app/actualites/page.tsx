import type { Metadata } from "next";
import { articles } from "@/components/site-data";
import { ArticleCard, Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Conseils & actualités",
  description: "Conseils pratiques, éclairages juridiques et actualités du cabinet.",
};

export default function ActualitesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Conseils & actualités"
          title="Le droit, expliqué pour être utile au quotidien."
          intro="Des repères pratiques, des éclairages et les nouvelles du cabinet. Ces publications informent sans remplacer un conseil adapté à votre situation."
        />
        <section className="content-section">
          <div className="shell article-grid">
            {articles.map((article, index) => (
              <ArticleCard article={article} index={index + 1} key={article.slug} />
            ))}
          </div>
          <div className="shell">
            <p className="legal-banner">
              Les contenus proposés sont généraux et informatifs. Ils ne constituent
              pas une consultation juridique et doivent être relus selon le droit
              applicable dans le pays d’exercice du cabinet.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
