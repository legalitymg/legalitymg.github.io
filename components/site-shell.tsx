import Link from "next/link";
import { ArrowIcon, ScaleIcon } from "./icons";
import type { Article } from "./site-data";

const nav = [
  { href: "/cabinet", label: "Le cabinet" },
  { href: "/expertises", label: "Expertises" },
  { href: "/actualites", label: "Conseils & actualités" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Accueil du cabinet">
          <span className="brand-mark"><ScaleIcon /></span>
          <span><strong>Legality Madagascar Firm</strong><small>Cabinet juridique</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
        <Link className="header-cta" href="/consultation">
          Prendre rendez-vous <ArrowIcon />
        </Link>
        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu"><i /><i /></summary>
          <nav aria-label="Navigation mobile">
            {nav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            <Link href="/consultation">Prendre rendez-vous</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark"><ScaleIcon /></span>
            <span><strong>Legality Madagascar Firm</strong><small>Cabinet juridique</small></span>
          </Link>
          <p>Votre droit.<br />Notre engagement.</p>
        </div>
        <div>
          <h3>Navigation</h3>
          <Link href="/cabinet">Le cabinet</Link>
          <Link href="/expertises">Expertises</Link>
          <Link href="/actualites">Conseils & actualités</Link>
          <Link href="/consultation">Consultation</Link>
        </div>
        <div>
          <h3>Coordonnées</h3>
          <p>LOT PR II E 67 JC BIS<br />Tsarahonenana, Antananarivo 101</p>
          <a href="tel:+261348551097">+261 34 85 510 97</a>
          <a href="mailto:legalitymadagascarfirm@gmail.com">legalitymadagascarfirm@gmail.com</a>
          <a href="https://wa.me/261348551097">Écrire sur WhatsApp</a>
        </div>
        <div>
          <h3>Horaires</h3>
          <p>Lundi — Vendredi<br />9h00 — 18h00</p>
          <p>Sur rendez-vous<br />au cabinet ou à distance</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Legality Madagascar Firm. Tous droits réservés.</span>
        <span className="footer-legal">
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
        </span>
        <span>Site en français</span>
      </div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span /> {eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-orb" aria-hidden="true" />
      <div className="shell page-hero-inner">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}

export function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <article className="article-card">
      <Link href={`/actualites/${article.slug}`} className={`article-visual ${article.tone}`}>
        <span>0{index + 1}</span>
        <i />
      </Link>
      <div className="article-meta">
        <span>{article.category}</span><b>•</b><span>{article.readTime}</span>
      </div>
      <h3><Link href={`/actualites/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.excerpt}</p>
      <Link href={`/actualites/${article.slug}`} className="text-link">
        Lire l’article <ArrowIcon />
      </Link>
    </article>
  );
}
