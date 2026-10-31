// Ek hi jagah se poore site ki SEO identity control hoti hai
export const SITE_NAME = "MAGNECRON";
export const SITE_URL = "https://magnecron.com";
export const SITE_TAGLINE = "Strategic Asset & Investment Management";
export const SITE_DESCRIPTION =
  "Magnecron is a forward-thinking asset and investment platform focused on capital deployment, portfolio stewardship, and venture building across diversified sectors.";

// WhatsApp / LinkedIn / X link preview ke liye share image (1200x630)
export const OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: SITE_NAME,
  type: "image/jpeg",
};

export const SOCIAL_LINKS = [
  "https://linkedin.com/company/magnecron",
  "https://twitter.com/magnecron",
  "https://facebook.com/magnecron",
];

export const CONTACT_EMAIL = "contact@magnecron.com";
export const CONTACT_PHONE = "+91 9119897772";

/**
 * Har route layout ke liye consistent metadata banata hai.
 * title yahan bina "| MAGNECRON" ke do — root layout ka template woh laga dega.
 */
export function pageMetadata({ title, description, path = "/", image = OG_IMAGE }) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | ${SITE_TAGLINE}`,
      description,
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | ${SITE_TAGLINE}`,
      description,
      images: [image.url],
    },
  };
}
