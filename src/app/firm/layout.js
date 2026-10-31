import { pageMetadata } from "../../config/site";

export const metadata = pageMetadata({
  title: "The Firm – Structure, Philosophy & Leadership",
  description:
    "An investment platform and holding structure designed to build and manage diversified portfolios of high-growth businesses.",
  path: "/firm",
});

export default function FirmLayout({ children }) {
  return <>{children}</>;
}
