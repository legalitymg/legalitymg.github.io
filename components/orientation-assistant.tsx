"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type View = "menu" | "expertises" | "faq";

const expertiseLinks = [
  "Accompagnement juridique et judiciaire",
  "Recouvrement de créances",
  "Fiscalité",
  "Droit des affaires",
  "Droit du travail",
  "Investisseurs étrangers",
];

export function OrientationAssistant() {
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("menu");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const closeAssistant = () => {
    setOpen(false);
    launcherRef.current?.focus();
  };

  return (
    <div className="orientation-assistant">
      {open && (
        <section
          id="orientation-panel"
          className="orientation-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="orientation-title"
        >
          <header className="orientation-header">
            <div>
              <span className="orientation-eyebrow">ASSISTANT D’ORIENTATION</span>
              <h2 id="orientation-title">Comment pouvons-nous vous aider&nbsp;?</h2>
            </div>
            <button
              ref={closeButtonRef}
              className="orientation-close"
              type="button"
              onClick={closeAssistant}
              aria-label="Fermer l’assistant"
            >
              ×
            </button>
          </header>

          <div className="orientation-body">
            {view !== "menu" && (
              <button
                className="orientation-back"
                type="button"
                onClick={() => setView("menu")}
              >
                ← Retour
              </button>
            )}

            {view === "menu" && (
              <>
                <p className="orientation-welcome">
                  Bonjour, je suis l’assistant d’orientation de Legality Madagascar
                  Firm. Je peux vous guider vers une expertise, les coordonnées du
                  cabinet ou une demande de rendez-vous.
                </p>
                <p className="orientation-alert">
                  Ne partagez aucun document ni renseignement confidentiel dans cet
                  assistant.
                </p>
                <div className="orientation-actions">
                  <button type="button" onClick={() => setView("expertises")}>
                    Trouver l’expertise adaptée <span>→</span>
                  </button>
                  <Link href="/consultation/" onClick={closeAssistant}>
                    Demander un rendez-vous <span>→</span>
                  </Link>
                  <Link href="/contact/" onClick={closeAssistant}>
                    Horaires et adresse <span>→</span>
                  </Link>
                  <button type="button" onClick={() => setView("faq")}>
                    Questions fréquentes <span>→</span>
                  </button>
                  <a
                    href="https://wa.me/261348551097"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeAssistant}
                  >
                    Contacter directement le cabinet <span>→</span>
                  </a>
                </div>
              </>
            )}

            {view === "expertises" && (
              <>
                <p>
                  Sélectionnez le domaine le plus proche de votre besoin. Le cabinet
                  confirmera ensuite l’orientation appropriée.
                </p>
                <ul className="orientation-expertise-list">
                  {expertiseLinks.map((expertise) => (
                    <li key={expertise}>
                      <Link href="/expertises/" onClick={closeAssistant}>
                        {expertise} <span>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  className="orientation-primary-link"
                  href="/consultation/"
                  onClick={closeAssistant}
                >
                  Décrire brièvement votre besoin
                </Link>
              </>
            )}

            {view === "faq" && (
              <div className="orientation-faq">
                <details>
                  <summary>Comment demander un rendez-vous&nbsp;?</summary>
                  <p>
                    Utilisez le formulaire de consultation. La demande sera transmise
                    au cabinet par e-mail.
                  </p>
                </details>
                <details>
                  <summary>Quels sont les horaires du cabinet&nbsp;?</summary>
                  <p>Du lundi au vendredi, de 9h00 à 18h00, sur rendez-vous.</p>
                </details>
                <details>
                  <summary>Où se trouve le cabinet&nbsp;?</summary>
                  <p>
                    LOT PR II E 67 JC BIS, Tsarahonenana, Antananarivo 101,
                    Madagascar.
                  </p>
                </details>
                <details>
                  <summary>Puis-je envoyer des documents ici&nbsp;?</summary>
                  <p>
                    Non. N’envoyez aucun document ni détail confidentiel par cet
                    assistant. Le cabinet indiquera un canal approprié après le
                    premier échange.
                  </p>
                </details>
                <div className="orientation-direct-links">
                  <a href="tel:+261348551097">Appeler le cabinet</a>
                  <a href="mailto:contact@legality.mg">
                    Envoyer un e-mail
                  </a>
                </div>
              </div>
            )}
          </div>

          <footer className="orientation-footer">
            Cet assistant fournit uniquement des informations générales et une
            orientation. Il ne remplace pas une consultation juridique et ne permet
            pas d’évaluer votre dossier. Aucune conversation n’est enregistrée.
          </footer>
        </section>
      )}

      <button
        ref={launcherRef}
        className="orientation-launcher"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="orientation-panel"
      >
        <span className="orientation-launcher-icon" aria-hidden="true">
          {open ? "×" : "?"}
        </span>
        <span>{open ? "Fermer" : "Besoin d’aide ?"}</span>
      </button>
    </div>
  );
}
