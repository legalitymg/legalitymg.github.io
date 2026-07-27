import type { Metadata } from "next";
import { Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  alternates: { canonical: "/confidentialite/" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Vos données"
          title="Politique de confidentialité"
          intro="Le cabinet limite les informations demandées au strict nécessaire pour organiser un premier échange."
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
              Le formulaire de consultation recueille votre nom, vos coordonnées, votre
              mode de contact préféré, le domaine juridique concerné, le niveau d’urgence
              et un objet général très court. Aucun document ni détail confidentiel ne
              doit être transmis par ce formulaire.
            </p>
            <h2>Finalités et base juridique</h2>
            <p>
              Ces données sont utilisées avec votre consentement pour répondre à votre
              demande, organiser un rendez-vous et vérifier la possibilité d’un premier
              échange. Elles ne constituent pas, à elles seules, l’ouverture d’un dossier
              ni l’acceptation d’une mission.
            </p>
            <h2>Durée de conservation</h2>
            <p>
              Les demandes sans suite sont conservées uniquement pendant la durée
              nécessaire à leur traitement, puis supprimées des outils de réception.
              Si une mission est ouverte, les informations utiles sont conservées selon
              les obligations légales et professionnelles applicables.
            </p>
            <h2>Destinataires et sécurité</h2>
            <p>
              L’accès est limité au cabinet et au prestataire technique de formulaire
              Formspree, qui reçoit la soumission, la conserve dans le compte du cabinet
              et la transmet à son adresse électronique. Ce service peut traiter les
              données hors de Madagascar selon ses propres garanties et sa
              <a href="https://formspree.io/legal/privacy-policy/"> politique de confidentialité</a>.
            </p>
            <h2>Vos droits</h2>
            <p>
              Selon le droit applicable, vous pouvez exercer des droits d’accès, de
              rectification, d’effacement, de limitation, d’opposition ou de
              portabilité en écrivant à legalitymadagascarfirm@gmail.com.
            </p>
            <h2>Cookies et mesure d’audience</h2>
            <p>
              Le site ne dépose aucun cookie publicitaire ni cookie de mesure d’audience.
              Formspree applique ses mécanismes techniques de sécurité et de lutte contre
              les envois automatisés lors de la soumission du formulaire.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
