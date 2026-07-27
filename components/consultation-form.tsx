"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowIcon } from "./icons";

const appointmentTypes = [
  {
    id: "premier-echange",
    title: "Premier échange",
    duration: "20 minutes",
    description: "Pour présenter brièvement votre situation et vérifier si le cabinet peut intervenir.",
  },
  {
    id: "consultation",
    title: "Consultation juridique",
    duration: "60 minutes",
    description: "Pour analyser une situation, répondre à vos questions et identifier les options possibles.",
  },
  {
    id: "documents",
    title: "Analyse documentaire",
    duration: "Sur estimation",
    description: "Pour relire un contrat, un courrier, une décision ou un ensemble de pièces ciblées.",
  },
  {
    id: "accompagnement",
    title: "Accompagnement",
    duration: "Sur mesure",
    description: "Pour une négociation, une procédure ou le suivi complet d’un dossier.",
  },
];

export default function ConsultationForm() {
  const [step, setStep] = useState(1);
  const [kind, setKind] = useState("");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    contactMode: "E-mail",
    area: "",
    urgency: "Pas d’urgence particulière",
    message: "",
    consent: false,
  });

  const selected = appointmentTypes.find((item) => item.id === kind);
  const whatsappUrl = useMemo(() => {
    const message = encodeURIComponent(
      `Bonjour Legality Madagascar,\n\nJe souhaite demander une consultation.\n\nNom : ${form.name}\nE-mail : ${form.email}\nTéléphone : ${form.phone || "Non renseigné"}\nPréférence : ${form.contactMode}\nType : ${selected?.title ?? ""}\nDomaine : ${form.area || "À déterminer"}\nUrgence : ${form.urgency}\n\nSituation :\n${form.message}`
    );
    return `https://wa.me/261348551097?text=${message}`;
  }, [form, selected]);

  function update(name: string, value: string | boolean) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <span className="success-mark">✓</span>
        <p className="eyebrow"><span /> Demande préparée</p>
        <h2>Votre message est prêt à être transmis.</h2>
        <p>
          Relisez les informations ci-dessous, puis ouvrez votre messagerie pour
          envoyer la demande sur WhatsApp. Le cabinet confirmera ensuite les modalités du rendez-vous.
        </p>
        <div className="request-summary">
          <div><span>Type</span><strong>{selected?.title}</strong></div>
          <div><span>Nom</span><strong>{form.name}</strong></div>
          <div><span>Contact</span><strong>{form.email}</strong></div>
          <div><span>Préférence</span><strong>{form.contactMode}</strong></div>
        </div>
        <div className="form-actions">
          <button className="button button-outline" type="button" onClick={() => setSent(false)}>
            Modifier
          </button>
          <a className="button button-primary" href={whatsappUrl}>
            Continuer sur WhatsApp <ArrowIcon />
          </a>
        </div>
        <small>Aucun message n’est envoyé avant votre confirmation dans WhatsApp.</small>
      </div>
    );
  }

  return (
    <div className="consultation-form-wrap">
      <div className="form-progress" aria-label={`Étape ${step} sur 3`}>
        {[1, 2, 3].map((item) => (
          <button
            type="button"
            className={step >= item ? "active" : ""}
            onClick={() => item < step && setStep(item)}
            key={item}
            aria-label={`Aller à l’étape ${item}`}
          >
            <span>{item}</span><i />
          </button>
        ))}
      </div>

      <form onSubmit={submit}>
        {step === 1 && (
          <fieldset className="form-step">
            <legend>Quel échange vous conviendrait ?</legend>
            <p className="step-intro">Choisissez l’option la plus proche de votre besoin. Elle pourra être ajustée ensuite.</p>
            <div className="appointment-grid">
              {appointmentTypes.map((item) => (
                <label className={kind === item.id ? "selected" : ""} key={item.id}>
                  <input
                    type="radio"
                    name="appointment"
                    value={item.id}
                    checked={kind === item.id}
                    onChange={(event) => setKind(event.target.value)}
                  />
                  <span className="choice-dot" />
                  <strong>{item.title}</strong>
                  <small>{item.duration}</small>
                  <p>{item.description}</p>
                </label>
              ))}
            </div>
            <div className="form-actions form-actions-end">
              <button className="button button-primary" type="button" disabled={!kind} onClick={() => setStep(2)}>
                Continuer <ArrowIcon />
              </button>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="form-step">
            <legend>Comment pouvons-nous vous joindre ?</legend>
            <p className="step-intro">Vos informations sont utilisées uniquement pour répondre à cette demande.</p>
            <div className="field-grid">
              <label className="field">
                <span>Nom et prénom *</span>
                <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Votre nom complet" />
              </label>
              <label className="field">
                <span>Adresse e-mail *</span>
                <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="vous@exemple.fr" />
              </label>
              <label className="field">
                <span>Téléphone</span>
                <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+261 …" />
              </label>
              <label className="field">
                <span>Mode de contact préféré</span>
                <select value={form.contactMode} onChange={(e) => update("contactMode", e.target.value)}>
                  <option>E-mail</option><option>Téléphone</option><option>Visioconférence</option>
                </select>
              </label>
            </div>
            <div className="form-actions">
              <button className="button button-outline" type="button" onClick={() => setStep(1)}>Retour</button>
              <button className="button button-primary" type="button" disabled={!form.name || !form.email} onClick={() => setStep(3)}>
                Continuer <ArrowIcon />
              </button>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="form-step">
            <legend>Parlez-nous brièvement de votre situation.</legend>
            <p className="step-intro">Restez synthétique et n’ajoutez pas de document confidentiel à ce stade.</p>
            <div className="field-grid">
              <label className="field">
                <span>Domaine concerné</span>
                <select value={form.area} onChange={(e) => update("area", e.target.value)}>
                  <option value="">Je ne sais pas encore</option>
                  <option>Droit de la famille</option>
                  <option>Droit du travail</option>
                  <option>Droit des affaires & contrats</option>
                  <option>Droit immobilier</option>
                  <option>Autre demande</option>
                </select>
              </label>
              <label className="field">
                <span>Niveau d’urgence</span>
                <select value={form.urgency} onChange={(e) => update("urgency", e.target.value)}>
                  <option>Pas d’urgence particulière</option>
                  <option>Échéance dans moins d’un mois</option>
                  <option>Échéance dans moins d’une semaine</option>
                  <option>Situation immédiate à signaler</option>
                </select>
              </label>
              <label className="field field-wide">
                <span>Votre message *</span>
                <textarea required value={form.message} onChange={(e) => update("message", e.target.value)} rows={7} placeholder="Les faits essentiels, les dates importantes et ce que vous souhaitez obtenir…" />
              </label>
              <label className="check-field field-wide">
                <input type="checkbox" required checked={form.consent} onChange={(e) => update("consent", e.target.checked)} />
                <span>J’accepte que ces informations soient utilisées pour traiter ma demande et j’ai lu la politique de confidentialité.</span>
              </label>
            </div>
            <div className="form-actions">
              <button className="button button-outline" type="button" onClick={() => setStep(2)}>Retour</button>
              <button className="button button-primary" type="submit" disabled={!form.message || !form.consent}>
                Préparer ma demande <ArrowIcon />
              </button>
            </div>
          </fieldset>
        )}
      </form>
    </div>
  );
}
