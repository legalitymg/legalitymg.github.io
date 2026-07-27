import type { Metadata } from "next";
import ConsultationForm from "@/components/consultation-form";
import { Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Demander une consultation",
  description: "Choisissez votre type de consultation et présentez votre situation au cabinet.",
};

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Demande de consultation"
          title="Préparons ensemble un premier échange utile."
          intro="Un parcours simple en trois étapes pour préciser votre besoin. Aucune information n’est enregistrée sur ce site de démonstration."
        />
        <section className="content-section consultation-page">
          <div className="shell">
            <ConsultationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
