import { pageMetadata } from "../../../config/site";

export const metadata = pageMetadata({
  title: "Ventures – Building Scalable Businesses Across High-Growth Sectors",
  description:
    "A platform focused on building and scaling high-growth businesses through capital, strategy, and long-term vision.",
  path: "/business/venture",
});

export default function VentureLayout({ children }) {
  return <>{children}</>;
}
