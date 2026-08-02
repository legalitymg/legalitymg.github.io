import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { practiceAreas } from "@/components/site-data";
import { Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Services et expertises juridiques",
  description:
    "Services juridiques à Madagascar : conseil, contentieux, recouvrement, fiscalité, droit des affaires, travail, immobilier et conformité.",
  alternates: { canonical: "/expertises/" },
};

export default function ExpertisesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Domaines d’intervention"
          title="Des solutions juridiques construites autour de vos priorités."
          intro="Conseil, négociation ou contentieux : l’intervention est définie selon votre objectif, le niveau d’urgence et les particularités de votre dossier."
        />
        <section className="content-section">
          <div className="shell area-grid">
            {practiceAreas.map((area, index) => (
              <article className="area-card" key={area.title}>
                <span>0{index + 1}</span>
                <h2>{area.title}</h2>
                <p>{area.text}</p>
                <ul>
                  {area.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <Link className="text-link" href={`/expertises/${area.slug}`}>
                  Découvrir cette expertise <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
          <div className="shell">
            <div className="premium-banner">
              <div>
                <p className="eyebrow light"><span /> Offre premium</p>
                <h2>Abonnement juridique entreprise</h2>
                <p>Une assistance continue, sécurisée et conçue sur mesure pour votre organisation.</p>
              </div>
              <Link className="button button-light" href="/consultation">Étudier votre besoin <ArrowIcon /></Link>
            </div>
          </div>
        </section>
        <section className="content-section alt">
          <div className="shell two-col">
            <div className="section-heading">
              <p className="eyebrow"><span /> Une demande différente ?</p>
              <h2>Chaque situation mérite d’abord d’être comprise.</h2>
            </div>
            <div className="prose">
              <p>
                Si votre besoin ne correspond pas exactement à l’un de ces domaines,
                vous pouvez le décrire en quelques lignes. Le cabinet vous indiquera
                si une intervention est possible ou, lorsque cela est pertinent, vous orientera.
              </p>
              <Link className="button button-primary" href="/contact">
                Présenter ma situation <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
