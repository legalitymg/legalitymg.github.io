import Link from "next/link";

export function AccountingMark() {
  return (
    <span className="accounting-mark" aria-hidden="true">
      <i /><i /><i />
    </span>
  );
}

export function AccountingHeader() {
  return (
    <header className="accounting-header">
      <div className="accounting-shell accounting-header-inner">
        <Link href="/comptabilite/" className="accounting-brand" aria-label="Accueil Comptabilité et fiscalité">
          <AccountingMark />
          <span>
            <strong>Legality Madagascar Firm</strong>
            <small>Comptabilité & fiscalité</small>
          </span>
        </Link>
        <nav aria-label="Navigation Comptabilité et fiscalité">
          <Link href="/comptabilite/#services">Services</Link>
          <Link href="/comptabilite/#methode">Notre méthode</Link>
          <Link href="/comptabilite/#questions">Questions</Link>
          <Link href="/comptabilite/#contact">Contact</Link>
        </nav>
        <Link href="/" className="accounting-legal-link">
          Pôle juridique <span aria-hidden="true">↗</span>
        </Link>
        <details className="accounting-mobile-menu">
          <summary aria-label="Ouvrir le menu"><i /><i /></summary>
          <div>
            <Link href="/comptabilite/#services">Services</Link>
            <Link href="/comptabilite/#methode">Notre méthode</Link>
            <Link href="/comptabilite/#questions">Questions</Link>
            <Link href="/comptabilite/#contact">Contact</Link>
            <Link href="/">Pôle juridique</Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function AccountingFooter() {
  return (
    <footer className="accounting-footer">
      <div className="accounting-shell accounting-footer-main">
        <Link href="/comptabilite/" className="accounting-brand accounting-brand-light">
          <AccountingMark />
          <span><strong>Legality Madagascar Firm</strong><small>Comptabilité & fiscalité</small></span>
        </Link>
        <p>Des chiffres organisés.<br />Des décisions plus claires.</p>
        <div>
          <Link href="/comptabilite/declarations-fiscales-sociales/">Déclarations fiscales & sociales</Link>
          <Link href="/comptabilite/tenue-suivi-comptable/">Tenue & suivi comptable</Link>
          <Link href="/comptabilite/redressement-analyse-financiere/">Redressement & analyse</Link>
          <Link href="/comptabilite/#contact">Contact</Link>
        </div>
        <div>
          <Link href="/">Cabinet juridique</Link>
          <Link href="/mentions-legales/">Mentions légales</Link>
          <Link href="/confidentialite/">Confidentialité</Link>
        </div>
      </div>
      <div className="accounting-shell accounting-footer-bottom">
        <span>© 2026 Legality Madagascar Firm. Tous droits réservés.</span>
        <span>Comptabilité · Fiscalité · Gestion</span>
      </div>
    </footer>
  );
}
