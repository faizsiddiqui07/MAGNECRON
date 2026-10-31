import { pageMetadata } from "../../config/site";

export const metadata = pageMetadata({
  title: "Investment – Opportunities, Strategies & Capital Deployment",
  description:
    "We design and manage structured investment opportunities across sectors, combining financial discipline, risk management, and long-term value creation.",
  path: "/investment",
});

export default function InvestmentLayout({ children }) {
  return <>{children}</>;
}
