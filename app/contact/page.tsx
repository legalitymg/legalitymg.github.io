import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter Legality Madagascar Firm, cabinet juridique à Antananarivo, Madagascar.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Parlons de votre situation en toute confidentialité."
          intro="Vous pouvez demander un rendez-vous ou transmettre une première question. N’envoyez pas de pièces sensibles avant confirmation du cabinet."
        />
        <section className="content-section">
          <div className="shell contact-layout">
            <div className="contact-card">
              <p className="eyebrow"><span /> Coordonnées</p>
              <h2>Legality Madagascar Firm</h2>
              <dl>
                <div><dt>Adresse</dt><dd>LOT PR II E 67 JC BIS<br />Tsarahonenana, Antananarivo 101<br />Madagascar</dd></div>
                <div><dt>Téléphone</dt><dd><a href="tel:+261348551097">+261 34 85 510 97</a></dd></div>
                <div><dt>E-mail</dt><dd><a href="mailto:legalitymadagascarfirm@gmail.com">legalitymadagascarfirm@gmail.com</a></dd></div>
                <div><dt>WhatsApp</dt><dd><a href="https://wa.me/261348551097">Envoyer un message</a></dd></div>
                <div><dt>Rendez-vous</dt><dd>Au cabinet ou à distance<br />Lundi — vendredi, 9h00 — 18h00</dd></div>
              </dl>
            </div>
            <div className="contact-action">
              <p className="eyebrow"><span /> Votre demande</p>
              <h2>Quelques informations nous aideront à vous répondre.</h2>
              <p>
                Utilisez le parcours guidé pour choisir le type d’échange et décrire
                brièvement votre besoin. Vous pourrez relire votre demande avant son envoi.
              </p>
              <Link className="button button-primary" href="/consultation">
                Commencer ma demande <ArrowIcon />
              </Link>
              <small>Une demande en ligne ne crée pas, à elle seule, de relation avocat-client.</small>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
