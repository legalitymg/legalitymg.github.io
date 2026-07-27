import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ScaleIcon } from "@/components/icons";
import { Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Cabinet juridique à Madagascar",
  description:
    "Découvrez Legality Madagascar Firm, cabinet juridique implanté à Antananarivo et intervenant à Madagascar.",
  alternates: { canonical: "/cabinet/" },
};

export default function CabinetPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Le cabinet"
          title="Votre partenaire juridique de confiance à Madagascar."
          intro="Une relation fondée sur l’écoute, la compréhension des enjeux et une stratégie claire, réaliste et sécurisée."
        />
        <section className="content-section">
          <div className="shell two-col">
            <div className="cabinet-visual" aria-hidden="true">
              <ScaleIcon />
              <strong>LM</strong>
              <span>Votre droit.<br />Notre engagement.</span>
            </div>
            <div className="prose">
              <p className="eyebrow"><span /> Legality Madagascar Firm</p>
              <h2>Faire du droit un outil de décision, pas une source de confusion.</h2>
              <p>
                Le cabinet accompagne les particuliers, les professionnels, les investisseurs et les organisations dans la
                compréhension, la prévention et la résolution de leurs difficultés
                juridiques.
              </p>
              <p>
                Notre méthode associe analyse rigoureuse, explications accessibles et
                attention portée à la réalité de chaque situation. À chaque étape,
                vous savez où en est votre dossier, quelles options se présentent et
                ce qui motive la stratégie proposée.
              </p>
              <blockquote className="quote-block">
                « Vous permettre de décider avec lucidité, puis défendre ce choix
                avec conviction. »
              </blockquote>
              <h3>Une pratique ancrée à Madagascar</h3>
              <p>
                Implanté à Antananarivo, Legality Madagascar Firm intervient
                dans une approche rigoureuse, accessible et tournée vers les besoins
                concrets de chaque cliente, client ou organisation.
              </p>
              <Link className="button button-primary" href="/consultation">
                Prendre rendez-vous <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>
        <section className="content-section alt">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow"><span /> Nos engagements</p>
              <h2>Une relation professionnelle simple, transparente et fiable.</h2>
            </div>
            <div className="value-grid" style={{ marginTop: "54px" }}>
              {[
                ["Clarté", "Des explications compréhensibles et des prochaines étapes toujours identifiées."],
                ["Disponibilité", "Un suivi régulier et des modalités d’échange adaptées à votre situation."],
                ["Confidentialité", "La protection de vos informations et le respect du secret professionnel."],
                ["Transparence", "Des honoraires, délais et limites de l’intervention présentés dès le départ."],
              ].map(([title, text], index) => (
                <article className="value-card" key={title}>
                  <span className="expertise-index">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
