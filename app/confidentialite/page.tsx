import type { Metadata } from "next";
import { Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Vos données"
          title="Politique de confidentialité"
          intro="Une base éditoriale à adapter au pays d’exercice, aux outils réellement utilisés et aux obligations professionnelles du cabinet."
        />
        <section className="content-section">
          <div className="shell prose legal-copy">
            <h2>Responsable du traitement</h2>
            <p>
              Legality Madagascar Firm, LOT PR II E 67 JC BIS, Tsarahonenana,
              Antananarivo 101, Madagascar. Contact : +261 34 85 510 97 ou
              legalitymadagascarfirm@gmail.com.
            </p>
            <h2>Données traitées</h2>
            <p>
              Lorsque vous contactez le cabinet, les informations que vous choisissez
              de transmettre peuvent inclure votre identité, vos coordonnées, l’objet
              de votre demande et les éléments nécessaires à son examen.
            </p>
            <h2>Finalités et base juridique</h2>
            <p>
              Ces données sont utilisées pour répondre à votre demande, organiser un
              rendez-vous, vérifier la possibilité d’intervention et, le cas échéant,
              exécuter la mission confiée au cabinet. Les bases juridiques précises
              devront être indiquées selon le droit applicable.
            </p>
            <h2>Durée de conservation</h2>
            <p>
              Les durées seront définies selon la nature de la demande, l’existence
              ou non d’un dossier, les obligations légales et les règles
              professionnelles applicables.
            </p>
            <h2>Destinataires et sécurité</h2>
            <p>
              L’accès aux informations est limité aux personnes et prestataires
              habilités. Les mesures techniques et organisationnelles devront être
              précisées en fonction des services effectivement retenus pour le site.
            </p>
            <h2>Vos droits</h2>
            <p>
              Selon le droit applicable, vous pouvez disposer de droits d’accès, de
              rectification, d’effacement, de limitation, d’opposition ou de
              portabilité. Les coordonnées de l’autorité de contrôle compétente seront
              ajoutées après confirmation du pays d’exercice.
            </p>
            <h2>Cookies et mesure d’audience</h2>
            <p>
              La maquette ne dépose aucun cookie publicitaire. Cette section devra
              être mise à jour si un outil de mesure d’audience, une vidéo externe,
              une carte ou un service tiers est ajouté.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
