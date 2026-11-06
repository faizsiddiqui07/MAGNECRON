import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "../config/site";

// Google isi WebSite schema se "site name" uthata hai, isliye name uppercase MAGNECRON hai
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      // Sirf uppercase variants — "Magnecron" title case yahan se hata diya,
      // warna Google use hi apna preferred name maan leta hai
      alternateName: ["MAGNECRON PRIVATE LIMITED"],
      description: SITE_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "MAGNECRON PRIVATE LIMITED",
      legalName: "MAGNECRON PRIVATE LIMITED",
      url: `${SITE_URL}/`,
      description: SITE_DESCRIPTION,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}${OG_IMAGE.url}`,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        caption: SITE_NAME,
      },
      image: { "@id": `${SITE_URL}/#logo` },
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE,
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE,
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: SOCIAL_LINKS,
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
