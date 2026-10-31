import { pageMetadata } from "../../config/site";

export const metadata = pageMetadata({
  title: "Insights – Research, Strategy & Market Intelligence",
  description:
    "Research notes, market intelligence, and strategic commentary from the MAGNECRON investment team across capital, portfolio, and venture building.",
  path: "/insights",
});

export default function InsightsLayout({ children }) {
  return <>{children}</>;
}
