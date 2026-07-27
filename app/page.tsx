import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ScaleIcon, ShieldIcon, SparkIcon } from "@/components/icons";
import { ArticleCard, Footer, Header, SectionHeading } from "@/components/site-shell";
import { articles, practiceAreas } from "@/components/site-data";

export const metadata: Metadata = {
  title: {
    absolute: "Legality Madagascar Firm | Cabinet juridique à Madagascar",
  },
  description:
    "Cabinet juridique à Antananarivo : conseil, accompagnement judiciaire, droit des affaires, fiscalité, travail, immobilier et conformité à Madagascar.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span /> Cabinet juridique à Madagascar</p>
              <h1>
                Comprendre.<br />
                <em>Protéger.</em> Avancer.
              </h1>
              <p className="hero-intro">
                Legality Madagascar Firm accompagne particuliers, entreprises,
                organisations et investisseurs avec une pratique du droit attentive,
                claire et engagée à Madagascar.
              </p>
              <div className="hero-actions">
                <Link className="button button-primary" href="/consultation">
                  Décrire votre situation <ArrowIcon />
                </Link>
                <Link className="text-link" href="/cabinet">
                  Découvrir le cabinet <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <div className="trust-row" aria-label="Nos engagements">
                <span>Écoute attentive</span>
                <span>Stratégie claire</span>
                <span>Confidentialité</span>
              </div>
            </div>

            <div className="hero-portrait-wrap reveal reveal-delay">
              <div className="portrait-accent" aria-hidden="true" />
              <div className="brand-visual">
                <div className="brand-emblem"><ScaleIcon /><strong>LM</strong></div>
                <span>Legality</span>
                <small>Madagascar Firm</small>
                <i aria-hidden="true" />
                <p>Expertise · Intégrité<br />Engagement · Résultats</p>
              </div>
              <div className="hero-note">
                <ScaleIcon />
                <p><strong>Votre dossier,</strong><br />une stratégie sur mesure.</p>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#approche" aria-label="Découvrir la suite">
            <span>Découvrir</span><i aria-hidden="true" />
          </a>
        </section>

        <section className="marquee" aria-label="Valeurs du cabinet">
          <div>
            <span>Rigueur</span><b>✦</b><span>Écoute</span><b>✦</b>
            <span>Clarté</span><b>✦</b><span>Engagement</span><b>✦</b>
            <span>Rigueur</span><b>✦</b><span>Écoute</span><b>✦</b>
            <span>Clarté</span><b>✦</b><span>Engagement</span>
          </div>
        </section>

        <section className="section section-intro" id="approche">
          <div className="shell intro-grid">
            <SectionHeading
              eyebrow="Une approche humaine"
              title="Le droit expliqué avec clarté, exercé avec conviction."
            />
            <div className="intro-copy">
              <p>
                Derrière chaque dossier, il y a une histoire, un projet ou une
                inquiétude. Le cabinet prend le temps de comprendre vos priorités,
                puis construit avec vous une réponse lisible et réaliste.
              </p>
              <Link className="text-link" href="/cabinet">
                Notre manière de vous accompagner <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="shell principle-grid">
            <article className="principle-card">
              <span className="card-number">01</span>
              <ShieldIcon />
              <h3>Vous écouter</h3>
              <p>Un premier échange sans jugement pour cerner l’essentiel et vos attentes.</p>
            </article>
            <article className="principle-card principle-featured">
              <span className="card-number">02</span>
              <SparkIcon />
              <h3>Vous éclairer</h3>
              <p>Des options expliquées simplement, avec leurs enjeux, délais et prochaines étapes.</p>
            </article>
            <article className="principle-card">
              <span className="card-number">03</span>
              <ScaleIcon />
              <h3>Vous défendre</h3>
              <p>Une stratégie précise, proportionnée et portée avec détermination.</p>
            </article>
          </div>
        </section>

        <section className="section expertise-preview">
          <div className="shell">
            <div className="section-topline">
              <SectionHeading
                eyebrow="Domaines d’intervention"
                title="Une réponse juridique adaptée à chaque moment."
              />
              <Link className="button button-outline" href="/expertises">
                Toutes les expertises <ArrowIcon />
              </Link>
            </div>
            <div className="expertise-list">
              {practiceAreas.slice(0, 6).map((area, index) => (
                <Link href="/expertises" className="expertise-row" key={area.title}>
                  <span className="expertise-index">0{index + 1}</span>
                  <div>
                    <h3>{area.title}</h3>
                    <p>{area.short}</p>
                  </div>
                  <span className="round-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section consultation-band">
          <div className="shell consultation-grid">
            <div className="consultation-visual" aria-hidden="true">
              <span className="line-art line-art-one" />
              <span className="line-art line-art-two" />
              <span className="consultation-monogram">C</span>
            </div>
            <div className="consultation-copy">
              <p className="eyebrow light"><span /> Premier rendez-vous</p>
              <h2>Commençons par mettre votre situation au clair.</h2>
              <p>
                Quelques informations suffisent pour orienter le premier échange.
                Vous restez libre de poursuivre ou non après ce rendez-vous.
              </p>
              <Link className="button button-light" href="/consultation">
                Choisir une consultation <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <section className="section news-preview">
          <div className="shell">
            <div className="section-topline">
              <SectionHeading
                eyebrow="Conseils & actualités"
                title="Des repères utiles pour mieux comprendre vos droits."
              />
              <Link className="text-link" href="/actualites">
                Voir toutes les publications <ArrowIcon />
              </Link>
            </div>
            <div className="article-grid">
              {articles.slice(0, 3).map((article, index) => (
                <ArticleCard article={article} index={index} key={article.slug} />
              ))}
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <div className="shell final-cta-inner">
            <p className="eyebrow"><span /> Parlons de votre situation</p>
            <h2>Un premier pas peut déjà<br />faire toute la différence.</h2>
            <p>Exposez brièvement votre besoin. Le cabinet vous répondra avec discrétion.</p>
            <Link className="button button-primary" href="/contact">
              Contacter le cabinet <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
