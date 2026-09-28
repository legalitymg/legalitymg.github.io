"use client";

import { FormEvent, useState } from "react";
import { ArrowIcon } from "./icons";

const formspreeEndpoint = "https://formspree.io/f/xpqvkgyk";

const serviceOptions = [
  "Déclarations fiscales et sociales",
  "Tenue de la comptabilité",
  "Suivi comptable régulier",
  "Clôture comptable mensuelle",
  "Accompagnement et conseils",
  "Redressement comptable",
  "Analyse financière",
  "Je souhaite être orienté(e)",
];

export function AccountingContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    organization: "",
    phone: "",
    email: "",
    service: "Je souhaite être orienté(e)",
    message: "",
    consent: false,
  });

  function update(name: string, value: string | boolean) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const submission = new FormData();
      submission.append("_subject", "Nouvelle demande — Comptabilité & Fiscalité");
      submission.append("nom", form.name);
      submission.append("entreprise_ou_activite", form.organization || "Non renseigné");
      submission.append("telephone", form.phone);
      submission.append("email", form.email || "Non renseigné");
      submission.append("service_recherche", form.service);
      submission.append("besoin_general", form.message);
      submission.append("consentement", form.consent ? "Oui" : "Non");
      submission.append("source", "legality.mg/comptabilite");

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: submission,
      });

      if (!response.ok) throw new Error("Transmission impossible");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="accounting-form-success" role="status">
        <span aria-hidden="true">✓</span>
        <p className="accounting-kicker">Demande transmise</p>
        <h3>Merci, votre message a bien été envoyé.</h3>
        <p>
          L’équipe prendra connaissance de votre besoin et vous répondra à partir
          des coordonnées indiquées.
        </p>
        <button type="button" onClick={() => setStatus("idle")}>
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form className="accounting-form" onSubmit={submit}>
      <div className="accounting-form-heading">
        <p className="accounting-kicker">Votre demande</p>
        <h3>Parlons de votre activité.</h3>
        <p>Quelques informations suffisent pour préparer un premier échange utile.</p>
      </div>

      <div className="accounting-form-grid">
        <label>
          <span>Nom et prénom *</span>
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Votre nom complet"
          />
        </label>
        <label>
          <span>Entreprise ou activité</span>
          <input
            autoComplete="organization"
            value={form.organization}
            onChange={(event) => update("organization", event.target.value)}
            placeholder="Nom de votre structure"
          />
        </label>
        <label>
          <span>WhatsApp / téléphone *</span>
          <input
            required
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="Ex. : 034 00 000 00"
          />
        </label>
        <label>
          <span>Adresse e-mail</span>
          <input
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="vous@entreprise.mg"
          />
        </label>
        <label className="accounting-form-wide">
          <span>Service recherché</span>
          <select value={form.service} onChange={(event) => update("service", event.target.value)}>
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="accounting-form-wide">
          <span>Décrivez brièvement votre besoin *</span>
          <textarea
            required
            rows={4}
            maxLength={500}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Ex. : mise à jour de la comptabilité et accompagnement pour les déclarations mensuelles."
          />
          <small>{form.message.length}/500 caractères</small>
        </label>
        <label className="accounting-form-consent accounting-form-wide">
          <input
            required
            type="checkbox"
            checked={form.consent}
            onChange={(event) => update("consent", event.target.checked)}
          />
          <span>
            J’accepte que ces informations soient utilisées pour répondre à ma demande.
            Je n’envoie ici aucun document ni renseignement sensible.
          </span>
        </label>
      </div>

      <div className="accounting-form-submit">
        <button
          type="submit"
          disabled={status === "sending" || !form.name || !form.phone || !form.message || !form.consent}
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
          <ArrowIcon />
        </button>
        <p aria-live="polite">
          {status === "error" && (
            <>
              L’envoi n’a pas abouti. Vous pouvez nous écrire directement sur{" "}
              <a href="https://wa.me/261348934958">WhatsApp</a>.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
