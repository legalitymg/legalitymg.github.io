import type { Metadata } from "next";
import ConsultationForm from "@/components/consultation-form";
import { Footer, Header, PageHero } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Demander une consultation",
  description:
    "Demandez une consultation auprès de Legality Madagascar Firm, cabinet juridique à Antananarivo.",
  alternates: { canonical: "/consultation/" },
};

export default function ConsultationPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Demande de consultation"
          title="Préparons ensemble un premier échange utile."
          intro="Vos coordonnées et un objet général suffisent. La demande est transmise au cabinet ; n’ajoutez aucun document ni détail confidentiel."
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
