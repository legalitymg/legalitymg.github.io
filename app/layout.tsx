import type { Metadata, Viewport } from "next";
import { OrientationAssistant } from "@/components/orientation-assistant";
import "./globals.css";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://legalitymg.github.io"
).replace(/\/$/, "");

const siteName = "Legality Madagascar Firm";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Legality Madagascar Firm | Cabinet juridique à Madagascar",
    template: `%s | ${siteName}`,
  },
  description:
    "Legality Madagascar Firm, cabinet juridique à Antananarivo, accompagne particuliers, entreprises, organisations et investisseurs à Madagascar.",
  keywords: [
    "cabinet juridique à Madagascar",
    "cabinet juridique Madagascar",
    "cabinet juridique Antananarivo",
    "conseil juridique Antananarivo",
    "cabinet droit des affaires Madagascar",
    "conseil juridique Madagascar",
    "Legality Madagascar Firm",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  verification: {
    google: "r-5i-XMMp6wWnS4kdGDGQonmWkifXruvogzniBrcmRU",
  },
  openGraph: {
    type: "website",
    locale: "fr_MG",
    url: "/",
    siteName,
    title: "Legality Madagascar Firm | Cabinet juridique à Madagascar",
    description:
      "Conseil, accompagnement juridique et services aux particuliers, entreprises et investisseurs à Antananarivo et à Madagascar.",
  },
  twitter: {
    card: "summary",
    title: "Legality Madagascar Firm | Cabinet juridique",
    description: "Cabinet juridique à Antananarivo et à Madagascar.",
  },
  category: "legal services",
  other: {
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
  "@id": `${siteUrl}/#cabinet-juridique`,
  name: siteName,
  legalName: siteName,
  slogan: "Votre droit. Notre engagement.",
  description:
    "Cabinet juridique à Antananarivo proposant conseil, accompagnement judiciaire et services juridiques aux particuliers, entreprises, organisations et investisseurs à Madagascar.",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
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
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+261348551097",
    email: "legalitymadagascarfirm@gmail.com",
    contactType: "service juridique",
    availableLanguage: ["fr"],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  knowsAbout: [
    "Accompagnement juridique et judiciaire",
    "Recouvrement de créances",
    "Fiscalité",
    "Droit des affaires",
    "Droit du travail",
    "Investissements étrangers",
    "Immobilier",
    "Conformité juridique",
  ],
  availableLanguage: "fr",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-MG">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
        {children}
        <OrientationAssistant />
      </body>
    </html>
  );
}
