import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://cabinet-avocate.major-bell-4313.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Legality Madagascar | Cabinet juridique à Antananarivo",
    template: "%s | Legality Madagascar",
  },
  description:
    "Legality Madagascar Firm, cabinet juridique à Antananarivo : conseil, accompagnement judiciaire, droit des affaires, fiscalité, travail, immobilier et conformité.",
  keywords: [
    "cabinet juridique Madagascar",
    "cabinet juridique Antananarivo",
    "conseil juridique Antananarivo",
    "cabinet droit des affaires Madagascar",
    "conseil juridique Madagascar",
    "Legality Madagascar",
  ],
  authors: [{ name: "Legality Madagascar" }],
  creator: "Legality Madagascar",
  publisher: "Legality Madagascar",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MG",
    url: "/",
    siteName: "Legality Madagascar",
    title: "Legality Madagascar | Cabinet juridique à Antananarivo",
    description:
      "Conseil, accompagnement et défense juridique à Antananarivo, Madagascar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legality Madagascar | Cabinet juridique",
    description: "Cabinet juridique à Antananarivo, Madagascar.",
  },
  category: "legal services",
  other: {
    "codex-preview": "development",
    "geo.region": "MG-T",
    "geo.placename": "Antananarivo",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#19342d",
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Legality Madagascar",
  description:
    "Cabinet juridique à Antananarivo proposant conseil, accompagnement judiciaire et services juridiques aux particuliers, entreprises et investisseurs.",
  url: siteUrl,
  telephone: "+261348551097",
  email: "legalitymadagascarfirm@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "LOT PR II E 67 JC BIS, Tsarahonenana",
    addressLocality: "Antananarivo",
    postalCode: "101",
    addressCountry: "MG",
  },
  areaServed: {
    "@type": "Country",
    name: "Madagascar",
  },
  availableLanguage: ["fr"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
