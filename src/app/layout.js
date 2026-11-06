import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientWrapper from "../components/ClientWrapper";
import StructuredData from "../components/StructuredData";
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "../config/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Home page ka title
    default: `${SITE_NAME} | ${SITE_TAGLINE}`,
    // Child pages sirf apna title dete hain, suffix yahan se lagta hai
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "MAGNECRON",
    "MAGNECRON PRIVATE LIMITED",
    "asset management",
    "investment platform",
    "capital deployment",
    "portfolio management",
    "venture building",
    "private equity India",
    "real estate investment",
    "agri-tech investment",
  ],
  category: "finance",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    site: "@magnecron",
    creator: "@magnecron",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport = {
  themeColor: "#060606",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#060606] text-[#fcfcfc] font-sans flex flex-col selection:bg-[#fcfcfc] selection:text-[#060606]">
        <StructuredData />
        <ClientWrapper>
          <Header />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
