import type { Metadata } from "next";
import { Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales/" },
};

export default function LegalPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Informations du site"
          title="Mentions légales"
          intro="Informations relatives à l’édition et au fonctionnement du site de Legality Madagascar Firm."
        />
        <section className="content-section">
          <div className="shell prose legal-copy">
            <h2>Éditrice du site</h2>
            <p>
              Legality Madagascar Firm, cabinet juridique à Antananarivo, Madagascar.<br />
              Téléphone : +261 34 85 510 97<br />
              E-mail : contact@legality.mg<br />
              Adresse : LOT PR II E 67 JC BIS, Tsarahonenana, Antananarivo 101, Madagascar.<br />
              Informations professionnelles complémentaires : à valider avant la publication définitive.
            </p>
            <h2>Responsabilité professionnelle</h2>
            <p>
              [Nom de l’assureur, adresse et étendue territoriale de la couverture,
              selon les obligations applicables au barreau et au pays d’exercice.]
            </p>
            <h2>Direction de la publication</h2>
            <p>Responsable de publication : information à compléter avant la publication définitive.</p>
            <h2>Hébergement</h2>
            <p>
              [Nom et coordonnées de l’hébergeur à compléter après choix définitif :
              GitHub Pages ou autre prestataire.]
            </p>
            <h2>Propriété intellectuelle</h2>
            <p>
              Les textes, éléments graphiques, photographies et signes distinctifs
              présents sur ce site sont protégés. Toute reproduction ou adaptation
              nécessite l’autorisation préalable de leur titulaire, sauf exception légale.
            </p>
            <h2>Information juridique</h2>
            <p>
              Les contenus de ce site sont présentés à titre informatif. Ils ne
              remplacent pas une consultation tenant compte des faits, documents,
              délais et règles applicables à une situation particulière.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
