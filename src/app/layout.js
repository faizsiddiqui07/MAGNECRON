import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClientWrapper from "../components/ClientWrapper";

export const metadata = {
  title: "MAGNECRON | Strategic Asset & Investment Management",
  description: "Magnecron is a forward-thinking asset and investment platform focused on capital deployment, portfolio stewardship, and venture building across diversified sectors.",
  openGraph: {
    title: "MAGNECRON | Strategic Asset & Investment Management",
    description: "Magnecron is a forward-thinking asset and investment platform focused on capital deployment, portfolio stewardship, and venture building across diversified sectors.",
    url: "https://magnecron.com",
    siteName: "MAGNECRON",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#060606] text-[#fcfcfc] font-sans flex flex-col selection:bg-[#fcfcfc] selection:text-[#060606]">
        <ClientWrapper>
          <Header />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
} 