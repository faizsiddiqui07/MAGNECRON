import { pageMetadata } from "../../../config/site";

export const metadata = pageMetadata({
  title: "Portfolio – Asset & Business Stewardship",
  description:
    "The firm focuses on identifying high-potential opportunities and managing them through structured capital allocation and continuous performance evaluation.",
  path: "/business/portfolio",
});

export default function PortfolioLayout({ children }) {
  return <>{children}</>;
}
